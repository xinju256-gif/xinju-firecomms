#!/usr/bin/env bash
set -Eeuo pipefail
umask 022
SITE=/usr/share/nginx/html/firecomms-cn-v7
CONF=/etc/nginx/conf.d/firecomms-cn.conf
BUILD=$(mktemp -d "$HOME/firecomms-update-XXXXXX")
BACKUP="/var/backups/firecomms/bilingual-$(date +%Y%m%d-%H%M%S)"
CHANGED=0
rollback() {
  status=$?
  trap - ERR
  if [ "$CHANGED" = 1 ]; then
    echo '部署失败，正在恢复备份'
    sudo rsync -a --delete "$BACKUP/site/" "$SITE/"
    sudo cp -a "$BACKUP/site.conf" "$CONF"
    sudo /usr/sbin/nginx -t && sudo systemctl reload nginx
    echo '已执行恢复。请发送执行结果截图。'
  else
    echo '部署停止，正式网站未修改。请发送执行结果截图。'
  fi
  exit "$status"
}
trap rollback ERR
sudo -n true
sudo test -d "$SITE"
sudo test -f "$CONF"
sudo /usr/sbin/nginx -t
# Build without root privileges in a new directory.
git clone --depth 1 --branch main https://github.com/xinju256-gif/xinju-firecomms.git "$BUILD/source"
cd "$BUILD/source"
git log -1 --format='准备部署：%h %s'
npm ci --no-audit --no-fund
npm run build
npm test
node scripts/test-bilingual.mjs
for FILE in index.html en/index.html articles/index.html en/articles/index.html admin/index.html company-info.css assets/pdf/firecomms-simacity-authorization-2026.pdf assets/img/firecomms-simacity-authorization-2026.jpg; do
  test -s "dist/$FILE"
done
node <<'NODE'
const fs=require('fs');
for(const [file,terms] of Object.entries({
  'contact.html':['上海芯聚电子科技有限公司','Shanghai SIMACITY Technology Co., Ltd.','上海市长宁区延安西路华敏翰尊国际726栋22楼I座'],
  'en/contact.html':['Shanghai SIMACITY Technology Co., Ltd.','Suite I, 22/F, Building 726, Huarmin Harmonie International, West Yan’an Road, Changning District, Shanghai, China'],
  'about.html':['firecomms-simacity-authorization-2026.pdf','https://www.firecomms.com/'],
  'en/about.html':['firecomms-simacity-authorization-2026.pdf','https://www.firecomms.com/']
})){
  const text=fs.readFileSync('dist/'+file,'utf8');
  for(const term of [...terms,'firecomms@simacity.com.cn','+86 21 6227 1972'])if(!text.includes(term))throw Error(file+': missing '+term);
}
console.log('公司信息、双语页面、原厂链接及代理证检查通过');
NODE
sudo install -d -m 700 "$BACKUP"
sudo cp -a "$SITE" "$BACKUP/site"
sudo cp -a "$CONF" "$BACKUP/site.conf"
sudo cat "$CONF" > "$BUILD/site.conf"
node - "$BUILD/site.conf" <<'CACHE'
const fs=require('fs'),file=process.argv[2];let conf=fs.readFileSync(file,'utf8');
if(!conf.includes('# firecomms-html-revalidation')) {
 let count=0;
 conf=conf.replace(/(^|[}\n])([ \t]*)server[ \t]*\{/g,(_,prefix,indent)=>{count++;return prefix+indent+'server {\n'+indent+'  # firecomms-html-revalidation\n'+indent+'  expires -1;';});
 if(!count)throw Error('未找到站点 server 配置，停止更新');
 fs.writeFileSync(file,conf);
}
CACHE
CHANGED=1
sudo rsync -a --delete --chmod=D755,F644 dist/ "$SITE/"
sudo cp "$BUILD/site.conf" "$CONF"
sudo /usr/sbin/nginx -t
sudo systemctl reload nginx
for PAGE in /index.html /en/index.html /contact.html /en/contact.html /about.html /en/about.html /articles/index.html /en/articles/index.html /assets/pdf/firecomms-simacity-authorization-2026.pdf; do
  OUTPUT="$BUILD/check-$(echo "$PAGE" | tr / _)"
  curl --fail --silent --show-error --connect-timeout 10 --max-time 30 \
    --resolve firecomms-cn.com:443:127.0.0.1 "https://firecomms-cn.com$PAGE" -o "$OUTPUT"
  cmp -s "$OUTPUT" "$SITE$PAGE"
  echo "线上文件检查通过：$PAGE"
done
curl --fail --silent --show-error --connect-timeout 10 --max-time 30 \
  --resolve firecomms-cn.com:443:127.0.0.1 -D "$BUILD/cache-headers" \
  https://firecomms-cn.com/en/index.html -o /dev/null
grep -qi '^cache-control:.*no-cache' "$BUILD/cache-headers"
echo '英文首页缓存重新验证设置检查通过'
CHANGED=0
trap - ERR
echo '========== 中英文栏目及公司信息同步完成 =========='
echo "备份：$BACKUP"
echo '中文：https://firecomms-cn.com/about.html#authorization'
echo '英文：https://firecomms-cn.com/en/index.html?v=20261118-bilingual'
echo '英文技术文章：https://firecomms-cn.com/en/articles/?v=20261118-bilingual'
