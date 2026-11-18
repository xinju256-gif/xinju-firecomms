#!/usr/bin/env bash
# Root-owned publisher. Repository code is built without root privileges.
set -Eeuo pipefail
umask 022
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
SITE=/usr/share/nginx/html/firecomms-cn-v7
STATE=/var/lib/firecomms-auto/state
WORK=/var/lib/firecomms-auto/work
DIST="$WORK/repo/dist"
BACKUP_BASE=/var/backups/firecomms
CHANGED=0
BACKUP=
rollback() {
  local code=${1:-1}
  trap - ERR INT TERM
  if [ "$CHANGED" = 1 ]; then
    echo "Publication failed; restoring $BACKUP"
    rsync -a --delete "$BACKUP/site/" "$SITE/" || { echo 'RESTORE FAILED: check the backup immediately'; exit "$code"; }
    echo 'Previous website restored.'
  fi
  printf '%s\n' "$(date -Is) update failed; see journalctl -u firecomms-auto.service" > "$STATE/last-error"
  exit "$code"
}
trap 'rollback "$?"' ERR
trap 'rollback 143' TERM
trap 'rollback 130' INT
exec 9>/run/firecomms-auto.lock
flock -n 9 || exit 0
test -d "$SITE"
/usr/sbin/nginx -t
LAST_SHA=$(cat "$STATE/commit" 2>/dev/null || true)
LAST_TIME=$(cat "$STATE/time" 2>/dev/null || printf 0)
rm -f "$WORK/ready" "$WORK/ready.tmp"
runuser -u firecommsbuild -- /bin/bash /usr/local/libexec/firecomms-auto-build "$LAST_SHA" "$LAST_TIME"
if [ ! -f "$WORK/ready" ]; then rm -f "$STATE/last-error"; exit 0; fi
SHA=$(cat "$WORK/ready")
[[ "$SHA" =~ ^[a-f0-9]{40}$ ]]
# Check built output and reject symlinks before privileged file copying.
node - "$DIST" <<'NODE'
const fs=require('fs'),path=require('path'),root=process.argv[2];
function scan(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){
 const file=path.join(dir,e.name);
 if(e.isSymbolicLink())throw Error('Symlink in publication output: '+file);
 if(e.isDirectory())scan(file);
}}
scan(root);
for(const locale of ['', 'en/']){
 for(const file of ['index.html','contact.html','about.html','articles/index.html']){
  const text=fs.readFileSync(path.join(root,locale,file),'utf8');
  if(!text.includes('firecomms@simacity.com.cn'))throw Error('Missing sales email: '+locale+file);
 }
 const home=fs.readFileSync(path.join(root,locale,'index.html'),'utf8');
 if(!home.includes('href="/'+locale+'articles/"'))throw Error('Missing article navigation');
}
NODE
# Retain five automatic snapshots; manual backups are never touched.
mapfile -t SNAPSHOTS < <(find "$BACKUP_BASE" -mindepth 1 -maxdepth 1 -type d -name 'auto-*' | sort -r)
for ((I=4; I<${#SNAPSHOTS[@]}; I++)); do
  OLD=${SNAPSHOTS[$I]}
  [[ "$OLD" == "$BACKUP_BASE"/auto-* ]] && rm -rf -- "$OLD"
done
BACKUP="$BACKUP_BASE/auto-$(date +%Y%m%d-%H%M%S)-${SHA:0:7}"
install -d -m 700 "$BACKUP"
cp -a "$SITE" "$BACKUP/site"
CHANGED=1
rsync -a --delete --safe-links --chown=root:root --chmod=D755,F644 "$DIST/" "$SITE/"
for PAGE in /index.html /en/index.html /articles/index.html /en/articles/index.html; do
  OUTPUT="$STATE/check-$(echo "$PAGE" | tr / _)"
  curl --fail --silent --show-error --connect-timeout 10 --max-time 25 \
    --resolve firecomms-cn.com:443:127.0.0.1 "https://firecomms-cn.com$PAGE" -o "$OUTPUT"
  cmp -s "$OUTPUT" "$SITE$PAGE"
done
printf '%s\n' "$SHA" > "$STATE/commit.tmp"
printf '%s\n' "$(date +%s)" > "$STATE/time.tmp"
mv "$STATE/commit.tmp" "$STATE/commit"
mv "$STATE/time.tmp" "$STATE/time"
CHANGED=0
rm -f "$STATE/last-error"
echo "Published $SHA successfully; backup: $BACKUP"
