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
