const input=document.getElementById('article-search');
const cards=[...document.querySelectorAll('[data-search]')];
input?.addEventListener('input',()=>{
 const query=input.value.trim().toLocaleLowerCase();let count=0;
 for(const card of cards){card.hidden=!card.dataset.search.toLocaleLowerCase().includes(query);if(!card.hidden)count++;}
 document.getElementById('count').textContent=`共 ${count} 篇文章`;
 document.getElementById('empty').hidden=count>0;
});
