#!/usr/bin/env bash
# Runs as the dedicated unprivileged build account.
set -Eeuo pipefail
umask 022
export GIT_TERMINAL_PROMPT=0
export npm_config_fetch_retries=2
export npm_config_fetch_timeout=45000
WORK=/var/lib/firecomms-auto/work
LAST_SHA=${1:-}
LAST_TIME=${2:-0}
cd "$WORK"
if [ ! -d repo/.git ]; then
  git -c http.version=HTTP/1.1 clone --depth 1 --branch main \
    https://github.com/xinju256-gif/xinju-firecomms.git repo
fi
cd repo
[ "$(git remote get-url origin)" = https://github.com/xinju256-gif/xinju-firecomms.git ]
FETCHED=0
for ATTEMPT in 1 2 3; do
  if timeout 70 git -c http.version=HTTP/1.1 fetch --depth 1 origin main; then FETCHED=1; break; fi
  sleep 2
done
[ "$FETCHED" = 1 ]
git reset --hard FETCH_HEAD
SHA=$(git rev-parse HEAD)
if [ "$SHA" = "$LAST_SHA" ]; then
  # A scheduled article may become due even when Git has not changed.
  DUE=$(node - "$LAST_TIME" <<'NODE'
const fs=require('fs'),matter=require('gray-matter');
const since=Number(process.argv[2])*1000,now=Date.now();let due=false;
for(const file of fs.readdirSync('content/articles').filter(f=>f.endsWith('.md'))){
 const {data}=matter(fs.readFileSync('content/articles/'+file,'utf8'));
 const date=new Date(data.date).getTime();
 if(data.draft!==true&&data.title!=='后台发布测试'&&date>since&&date<=now)due=true;
}
process.stdout.write(due?'yes':'no');
NODE
)
  if [ "$DUE" = no ]; then echo 'No content changes; site is current.'; exit 0; fi
fi
LOCK_SHA=$(sha256sum package-lock.json | cut -d ' ' -f 1)
if [ ! -d node_modules ] || [ "$(cat "$WORK/dependencies.sha" 2>/dev/null || true)" != "$LOCK_SHA" ]; then
  npm ci --no-audit --no-fund
  printf '%s\n' "$LOCK_SHA" > "$WORK/dependencies.sha"
fi
npm run build
# Tests rebuild dist and restore the original content before returning.
npm test
node scripts/test-bilingual.mjs
for FILE in index.html en/index.html articles/index.html en/articles/index.html admin/index.html company-info.css assets/pdf/firecomms-simacity-authorization-2026.pdf; do
  test -s "dist/$FILE"
done
printf '%s\n' "$SHA" > "$WORK/ready.tmp"
mv "$WORK/ready.tmp" "$WORK/ready"
