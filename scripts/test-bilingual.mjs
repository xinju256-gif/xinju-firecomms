import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const names=['index.html','about.html','contact.html','cross-ref.html','products.html','product-index.html','product-detail.html','solutions.html'];
for(const script of ['main.js','assets/js/main.js']) {
 const text=fs.readFileSync(script,'utf8');const start=text.indexOf('  function initLangSwitch() {');const end=text.indexOf('  /*',start);
 const fn=text.slice(start,end);
 for(const name of names)for(const en of [false,true]) {
  const path=(en?'/en/':'/')+name;const target=en?'zh':'en';let click;
  const button={getAttribute:k=>k==='data-lang'?target:null,addEventListener:(type,cb)=>{click=cb},textContent:target};
  const window={location:{pathname:path,search:name==='product-detail.html'?'?model=FB2M5KVR&lang='+(en?'en':'zh'):'?source=check',hash:'#test'}};
  const context={document:{querySelectorAll:()=>[button]},window,URLSearchParams};
  vm.runInNewContext(fn+';initLangSwitch();',context);click.call(button,{preventDefault(){}});
  const dest=new URL(window.location.href,'https://example.com');
  assert.equal(dest.pathname,(en?'/':'/en/')+name);assert.equal(dest.hash,'#test');
  if(name==='product-detail.html'){assert.equal(dest.searchParams.get('model'),'FB2M5KVR');assert.equal(dest.searchParams.get('lang'),target);}
 }
}
for(const name of names)for(const folder of ['','en/']) {
 const html=fs.readFileSync('dist/'+folder+name,'utf8');
 assert(html.includes('href="'+(folder?'/en/articles/':'/articles/')+'"'));assert(html.includes('/site-nav-fix.css'));
 assert(folder? /<html lang="en"/.test(html): /<html lang="zh(?:-CN)?"/.test(html));
}
assert(fs.readFileSync('dist/index.html','utf8').includes('塑料光纤通信专家'));
assert(fs.readFileSync('dist/en/index.html','utf8').includes('Plastic Fiber Optic'));
assert(fs.readFileSync('dist/articles/index.html','utf8').includes('上海芯聚 × Firecomms中国'));
console.log('通过：8组中英文页面、32次语言切换、产品型号/锚点保留、双语导航与文章页中文页头。');

assert(fs.readFileSync('dist/en/articles/index.html','utf8').includes('Technical Articles &amp; Selection Guides'));
assert(fs.readFileSync('dist/en/articles/index.html','utf8').includes('Search by part number or keyword'));
assert(!fs.readFileSync('dist/en/articles/index.html','utf8').includes('上海市长宁区'));
for(const script of ['main.js','assets/js/main.js']) {
 const text=fs.readFileSync(script,'utf8'),start=text.indexOf('  function initLangSwitch() {'),end=text.indexOf('  /*',start),fn=text.slice(start,end);
 for(const english of [false,true]) {
  let click;const target=english?'zh':'en',dest=english?'/articles/':'/en/articles/';
  const button={getAttribute:k=>k==='data-lang'?target:null,addEventListener:(_,cb)=>click=cb};
  const window={location:{pathname:english?'/en/articles/':'/articles/',search:'',hash:''}};
  vm.runInNewContext(fn+';initLangSwitch();',{document:{querySelectorAll:()=>[button],querySelector:()=>({getAttribute:()=>dest})},window,URLSearchParams});
  click.call(button,{preventDefault(){}});assert.equal(window.location.href,dest);
 }
}
console.log('通过：英文文章栏目及文章页语言切换。');

// Audit navigation groups across static pages and generated article pages.
const {parseDocument}=await import('htmlparser2');
const dom=await import('domutils');
function walkHtml(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walkHtml(dir+'/'+e.name):e.name.endsWith('.html')?[dir+'/'+e.name]:[]);}
function isNavigation(node){for(let p=node;p;p=p.parent)if(p.type==='tag'&&(p.name==='nav'||p.name==='footer'||/\b(nav-list|nav-dropdown|mobile-menu)\b/.test(p.attribs.class||'')))return true;return false;}
let audited=0;
for(const file of walkHtml('dist')){
 const doc=parseDocument(fs.readFileSync(file,'utf8'));
 for(const group of dom.findAll(n=>n.type==='tag'&&(n.name==='ul'||/\b(nav-dropdown|mobile-menu)\b/.test(n.attribs.class||''))&&isNavigation(n),doc.children)){
  const seen=new Set();for(const item of group.children.filter(n=>n.type==='tag')){
   const links=item.name==='a'?[item]:dom.findAll(n=>n.type==='tag'&&n.name==='a',item.children||[]);
   if(links.length!==1)continue;
   const key=(links[0].attribs.href||'')+' '+dom.textContent(links[0]).replace(/\s+/g,' ').trim();
   assert(!seen.has(key),`${file}: duplicate navigation entry ${key}`);seen.add(key);
  }
 }
 for(const column of dom.findAll(n=>n.type==='tag'&&/\bfooter-col\b/.test(n.attribs.class||''),doc.children)){
  const heading=dom.findAll(n=>n.type==='tag'&&n.name==='h4',column.children)[0];
  if(!heading||!['解决方案','Solutions'].includes(dom.textContent(heading).trim()))continue;
  const links=dom.findAll(n=>n.type==='tag'&&n.name==='a',column.children);
  assert.equal(links.length,8,file+': footer must contain all eight solutions');
  assert.equal(new Set(links.map(n=>n.attribs.href)).size,8,file+': solutions must be unique');
 }
 audited++;
}
console.log(`通过：${audited}个页面的导航和页脚无重复，解决方案页脚均为8个独立入口。`);

// Run the actual catalog/detail renderer for the uploaded FR50DxxR datasheet.
const fr50dSkus=['FR50DHNR','FR50DHIR','FR50DVNR','FR50DVIR','FR50DWNR','FR50DWIR'];
let fr50dReference;
for(const file of ['main.js','assets/js/main.js']){
 const source=fs.readFileSync(file,'utf8').replace(/\}\)\(\);\s*$/,'window.__catalog={PRODUCT_DATA,productSkus,skuFamily,initProductDetail};\n})();');
 let detail={innerHTML:''};
 const document={addEventListener(){},getElementById:id=>id==='detail-container'?detail:id==='product-detail-page'?{}:null,querySelector:()=>null};
 const window={location:{pathname:'/product-detail.html',search:'',hash:''}};
 vm.runInNewContext(source,{window,document,URLSearchParams,setTimeout,clearTimeout});
 const api=window.__catalog,p=api.PRODUCT_DATA.find(x=>x.id==='FR50DxxR');
 assert(p);assert.equal(p.rateText,'DC–50 MBd');assert.equal(p.supply,'3.3 V ±5% / 5 V ±5%');
 assert.equal(JSON.stringify(api.productSkus(p.id)),JSON.stringify(fr50dSkus));
 assert.equal(p.datasheet,'/assets/pdf/fr50dxxr-rev-p1.pdf');
 assert(p.datasheetNote.en.includes('Preliminary'));assert.equal(p.ordering.length,6);
 const serialized=JSON.stringify(p);if(fr50dReference)assert.equal(serialized,fr50dReference);else fr50dReference=serialized;
 for(const sku of fr50dSkus){
  assert.equal(api.skuFamily(sku),'FR50DxxR');
  for(const english of [false,true]){
   detail.innerHTML='';window.location.pathname=(english?'/en':'')+'/product-detail.html';window.location.search='?model='+sku;
   api.initProductDetail();
   assert(detail.innerHTML.includes('FR50DxxR'));assert(detail.innerHTML.includes('href="/assets/pdf/fr50dxxr-rev-p1.pdf"'));
   for(const model of fr50dSkus)assert(detail.innerHTML.includes(model));
   assert(detail.innerHTML.includes(english?'Non-inverting':'非反相'));
   assert(detail.innerHTML.includes(english?'Inverting':'反相'));
   assert(!detail.innerHTML.includes('1500Vrms'));
   assert(document.title.includes(english?'Firecomms China':'Firecomms中国'));
  }
 }
 assert.equal(api.PRODUCT_DATA.find(x=>x.id==='FR50MxxR').datasheet,'assets/pdf/fr50mxxr.pdf');
}
assert(fs.readFileSync('dist/assets/pdf/fr50dxxr-rev-p1.pdf').subarray(0,4).equals(Buffer.from('%PDF')));
for(const lang of ['','en/'])assert(fs.readFileSync('dist/'+lang+'products.html','utf8').includes('model=FR50DxxR'));
console.log('通过：FR50DxxR独立产品、6个订购型号、24次双语详情渲染、PDF入口、原M系列资料保留。');
