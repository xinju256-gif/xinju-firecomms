import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const root = process.cwd();
const out = path.join(root, 'dist');
const base = 'https://firecomms-cn.com';
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const md = new MarkdownIt({html:false, linkify:true, typographer:false});
const safeImage = value => /^\/(?!\/)/.test(value ?? '') || /^https:\/\//i.test(value ?? '') ? value : '';
const write = (name, content) => { const file=path.join(out,name); fs.mkdirSync(path.dirname(file),{recursive:true}); fs.writeFileSync(file,content); };
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
const excluded = new Set(['dist','content','node_modules','.git','scripts','work','package.json','package-lock.json','netlify.toml','README-DEPLOY.txt','README-LAYOUT.txt','README-BILINGUAL.txt','config.yml','test-build.mjs']);
for (const entry of fs.readdirSync(root,{withFileTypes:true})) {
  if (excluded.has(entry.name) || entry.name.startsWith('.')) continue;
  fs.cpSync(path.join(root,entry.name),path.join(out,entry.name),{recursive:true});
}
// Older uploaded pages refer to assets/*, while this repository stores files at root.
for (const [source,destination] of [['style.css','assets/css/style.css'],['main.js','assets/js/main.js'],['simacity-logo.jpg','assets/img/simacity-logo.jpg'],['firecomms-logo.png','assets/img/firecomms-logo.png'],['wechat-qr.jpg','assets/img/wechat-qr.jpg'],['wechat-qr-old.jpg','assets/img/wechat-qr-old.jpg']]) {
  if (fs.existsSync(path.join(root,source)) && !fs.existsSync(path.join(out,destination))) {
    fs.mkdirSync(path.dirname(path.join(out,destination)),{recursive:true});
    fs.copyFileSync(path.join(root,source),path.join(out,destination));
  }
}
const articlesDir=path.join(root,'content/articles');
const articles=[];
if(fs.existsSync(articlesDir)) for(const file of fs.readdirSync(articlesDir).filter(f=>f.endsWith('.md'))) {
  const {data,content}=matter(fs.readFileSync(path.join(articlesDir,file),'utf8'));
  if(data.draft === true || data.title === '后台发布测试') continue;
  if(!data.title || !data.date) throw new Error(`${file}: 缺少标题或日期`);
  const date=new Date(data.date);
  if(Number.isNaN(date.getTime())) throw new Error(`${file}: 日期格式错误`);
  // Future-dated content stays unpublished until a build after that time.
  if(date.getTime()>Date.now()) continue;
  const slug=crypto.createHash('sha256').update(file).digest('hex').slice(0,16);
  articles.push({enTitle:String(data.title_en ?? '').trim(),enDescription:String(data.description_en ?? ''),enBody:String(data.body_en ?? '').trim(),title:String(data.title), description:String(data.description ?? ''),date:date.toISOString(), displayDate:new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(date),image:safeImage(data.image),url:`/articles/${slug}/`,body:sanitizeHtml(md.render(content),{allowedTags:[...sanitizeHtml.defaults.allowedTags,'img','h1','h2'],allowedAttributes:{...sanitizeHtml.defaults.allowedAttributes,img:['src','alt','title'],a:['href','title']},allowedSchemes:['https','http','mailto','tel'],allowProtocolRelative:false})});
}
articles.sort((a,b)=>b.date.localeCompare(a.date)||a.url.localeCompare(b.url));
function enhanceHeader(html) {
 const english=/<html[^>]*lang=["']en/i.test(html);
 const label=english?'Technical Articles':'技术文章';
 const url=english?'/en/articles/':'/articles/';
 html=html.replace(/<li class="nav-item"><a class="nav-link" href="(?:\/en)?\/articles\/">[^<]*<\/a><\/li>/g,'');
 html=html.replace(/(<ul class="nav-list">)/,`$1<li class="nav-item"><a class="nav-link" href="${url}">${label}</a></li>`);
 html=html.replace(/(<div class="mobile-menu"[^]*?)(<a href="index.html")/,`$1<a href="${url}">${label}</a>$2`);
 return html;
}
function sharedHeader(english,alternate) {
 const source=fs.readFileSync(path.join(root,english?'en/index.html':'index.html'),'utf8');
 const match=source.match(/<body[^>]*>([^]*?)<section class="hero"/);
 if(!match) throw new Error('首页页头结构变化，请核对共用页头。');
 return enhanceHeader(`<html lang="${english?'en':'zh-CN'}">`+match[1]).replace(/^<html[^>]*>/,'')
 .replace(/(href|src)="(?!https?:|mailto:|tel:|#|\/)([^" ]+)"/g,(_,attr,url)=>`${attr}="${url.startsWith('../')?'/'+url.slice(3):english&&attr==='href'?'/en/'+url:'/'+url}"`)
 .replace(/<a[^>]*class="lang-btn(?: active)?"[^>]*>/g,tag=>tag.includes('active')?tag:tag.replace(/href="[^"]*"/,`href="${alternate}"`));
}
const cert='/assets/pdf/firecomms-simacity-authorization-2026.pdf';
const enArticles=articles.filter(a=>a.enTitle&&a.enBody).map(a=>({...a,title:a.enTitle,description:a.enDescription,body:sanitizeHtml(md.render(a.enBody),{allowedTags:[...sanitizeHtml.defaults.allowedTags,'img','h1','h2'],allowedAttributes:{...sanitizeHtml.defaults.allowedAttributes,img:['src','alt','title'],a:['href','title']},allowedSchemes:['https','http','mailto','tel'],allowProtocolRelative:false}),url:'/en'+a.url}));
function page(title,description,url,body,structured='',english=false,alternate='/en/articles/') {
 const zh=english?alternate:url,en=english?url:alternate;
 const company=english?'Shanghai SIMACITY Technology Co., Ltd.':'上海芯聚电子科技有限公司';
 const address=english?'Suite I, 22/F, Building 726, Huarmin Harmonie International, West Yan’an Road, Changning District, Shanghai, China':'上海市长宁区延安西路华敏翰尊国际726栋22楼I座';
 return `<!doctype html><html lang="${english?'en':'zh-CN'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)} | Firecomms SIMACITY</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${base}${url}"><link rel="alternate" hreflang="zh-CN" href="${base}${zh}"><link rel="alternate" hreflang="en" href="${base}${en}"><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/article-style.css">${url==='/articles/'||url==='/en/articles/'?'<link rel="stylesheet" href="/article-list.css?v=20261126-title-rows">':''}<link rel="stylesheet" href="/site-nav-fix.css"><link rel="stylesheet" href="/company-info.css">${structured}</head><body class="article-page">${sharedHeader(english,alternate)}<main>${body}</main><footer><div class="wrap">${company}<br>${address}<br><a href="tel:+862162271972">+86 21 6227 1972</a> · <a href="mailto:firecomms@simacity.com.cn">firecomms@simacity.com.cn</a><br><a href="https://www.firecomms.com/" target="_blank" rel="noopener noreferrer">${english?'Firecomms Official Website':'Firecomms 原厂官网'} ↗</a> · <a href="${cert}" target="_blank" rel="noopener noreferrer">${english?'Authorization Certificate (PDF)':'原厂代理证（PDF）'} ↗</a></div><div class="site-icp" style="text-align:center;padding:16px 24px;font-size:14px;line-height:1.7"><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" style="color:inherit;text-underline-offset:4px">沪ICP备2026013493号-2</a></div></footer><script src="/main.js?v=20261118-fr50d" defer></script></body></html>`;
}
for(const english of [false,true]) {
 const list=english?enArticles:articles;
 const prefix=english?'/en/articles/':'/articles/';
 const alternate=english?'/articles/':'/en/articles/';
 const cards=list.map(a=>`<article class="article-title-row" data-search="${escape(a.title+' '+a.description)}"><h2><a href="${a.url}">${escape(a.title)}</a></h2></article>`).join('');
 const count=english?`${list.length} article${list.length===1?'':'s'}`:`共 ${list.length} 篇文章`;
 const empty=english?(list.length?'No matching articles. Please try another keyword.':'Technical articles are being prepared. Contact us for product selection support.'):(list.length?'没有找到匹配的文章，请更换关键词。':'技术文章正在整理中，您也可以直接联系我们获取选型支持。');
 write(prefix.slice(1)+'index.html',page(english?'Technical Articles & Selection Guides':'飞尔康技术文章与选型指南',english?'Firecomms product selection guides, application notes and technical resources.':'Firecomms 飞尔康产品选型、应用案例与技术资料。',prefix,`<section class="article-hero"><div class="wrap"><span class="eyebrow">FIRECOMMS · TECHNICAL RESOURCES</span><h1>${english?'Technical Articles & Selection Guides':'技术文章与选型指南'}</h1><p>${english?'Find technical resources for part selection, link conditions and application validation.':'从型号、链路条件到应用验证，查找所需的技术内容。'}</p></div></section><section class="wrap listing"><label for="article-search">${english?'Search by part number or keyword':'搜索型号或关键词'}</label><input id="article-search" type="search" placeholder="${english?'Enter a part number, application or question':'输入型号、应用或问题'}" autocomplete="off"><p class="count" id="count" aria-live="polite">${count}</p><div class="article-title-list">${cards}</div><p id="empty" class="empty" ${list.length?'hidden':''}>${empty}</p>${english&&articles.length>enArticles.length?'<p><a href="/articles/">Browse additional articles in Chinese →</a></p>':''}</section><script src="/article-search.js?v=20261118-fr50d" defer></script>`,'',english,alternate));
 for(const a of list) {
  const counterpart=english?a.url.replace(/^\/en/,''):enArticles.some(e=>e.url==='/en'+a.url)?'/en'+a.url:'/en/articles/';
  const schema=JSON.stringify({'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.description,datePublished:a.date,inLanguage:english?'en':'zh-CN',mainEntityOfPage:base+a.url,publisher:{'@type':'Organization',name:english?'Shanghai SIMACITY Technology Co., Ltd.':'上海芯聚电子科技有限公司'},...(a.image?{image:a.image.startsWith('/')?base+a.image:a.image}:{})}).replace(/</g,'\\u003c');
  const mail=`mailto:firecomms@simacity.com.cn?subject=${encodeURIComponent((english?'Technical inquiry: ':'技术咨询：')+a.title)}`;
  write(`${a.url.slice(1)}index.html`,page(a.title,a.description,a.url,`<div class="wrap detail"><a class="back" href="${prefix}">← ${english?'Back to technical articles':'返回技术文章'}</a><article class="paper"><time datetime="${a.date}">${english?a.date.slice(0,10):escape(a.displayDate)}</time><h1>${escape(a.title)}</h1>${a.description?`<p class="summary">${escape(a.description)}</p>`:''}${a.image?`<img class="article-cover" src="${escape(a.image)}" alt="${escape(a.title)}">`:''}<div class="prose">${a.body}</div></article><aside class="cta"><div><h2>${english?'Need help selecting a part or checking an alternative?':'需要协助选型或核对替代条件？'}</h2><p>${english?'Please include the part number, application conditions and required quantity.':'请提供型号、应用条件及需求数量，便于我们进一步沟通。'}</p></div><a class="button" href="${escape(mail)}">${english?'Email us':'邮件咨询'}</a><a href="tel:+862162271972">${english?'Call us':'电话咨询'}</a></aside></div>`,`<script type="application/ld+json">${schema}</script>`,english,counterpart));
 }
}
// Add an entry at build time, without replacing tracked existing page source.
for(const name of [...fs.readdirSync(out).filter(f=>f.endsWith('.html')), ...fs.readdirSync(path.join(out,'en')).filter(f=>f.endsWith('.html')).map(f=>'en/'+f)]) {
 const file=path.join(out,name);let html=fs.readFileSync(file,'utf8');
 html=enhanceHeader(html);
 html=html.replace('</head>','<link rel="stylesheet" href="/site-nav-fix.css"></head>');
 fs.writeFileSync(file,html);
}
let sitemap=fs.existsSync(path.join(root,'sitemap.xml'))?fs.readFileSync(path.join(root,'sitemap.xml'),'utf8'):'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>';
sitemap=sitemap.replace(/<url>\s*<loc>https:\/\/firecomms-cn\.com\/articles\/[^]*?<\/url>/g,'');
sitemap=sitemap.replace('</urlset>',`<url><loc>${base}/articles/</loc></url>${articles.map(a=>`<url><loc>${base}${a.url}</loc><lastmod>${a.date.slice(0,10)}</lastmod></url>`).join('')}</urlset>`);
sitemap=sitemap.replace('</urlset>',`<url><loc>${base}/en/articles/</loc></url>${enArticles.map(a=>`<url><loc>${base}${a.url}</loc></url>`).join('')}</urlset>`);
write('sitemap.xml',sitemap);
// Admin remains reachable; no forced catch-all rewrite is installed.
let robots=fs.existsSync(path.join(root,'robots.txt'))?fs.readFileSync(path.join(root,'robots.txt'),'utf8'):'User-agent: *\nAllow: /\n';
if(!robots.includes('Disallow: /admin/')) robots=robots.replace('User-agent: *','User-agent: *\nDisallow: /admin/');
if(!robots.includes('Sitemap:')) robots+=`\nSitemap: ${base}/sitemap.xml\n`;
write('robots.txt',robots);
console.log(`构建完成：${articles.length} 篇公开文章；输出目录 dist。`);
