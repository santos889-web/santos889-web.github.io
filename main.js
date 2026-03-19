// TODOJUEGOSINFO.COM — Main JS v3 (fixed)

/* Loader */
window.addEventListener('load',()=>{
  setTimeout(()=>{ document.getElementById('loader')?.classList.add('hidden'); },1600);
});

/* Particles */
function initParticles(){
  const c=document.getElementById('particles');if(!c)return;
  const colors=['#00d4ff','#7c3aed','#ec4899','#10b981'];
  for(let i=0;i<40;i++){
    const p=document.createElement('div');p.className='particle';
    const s=Math.random()*4+2,x=Math.random()*100,d=Math.random()*15+8,dl=Math.random()*-20;
    const col=colors[Math.floor(Math.random()*colors.length)];
    p.style.cssText=`width:${s}px;height:${s}px;left:${x}%;background:${col};animation-duration:${d}s;animation-delay:${dl}s;`;
    c.appendChild(p);
  }
}
initParticles();

/* Header scroll */
window.addEventListener('scroll',()=>{
  document.getElementById('main-header')?.classList.toggle('scrolled',window.scrollY>30);
  document.getElementById('backTop')?.classList.toggle('show',window.scrollY>400);
},{passive:true});
document.getElementById('backTop')?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Hamburger */
document.getElementById('hamburger')?.addEventListener('click',()=>document.getElementById('navLinks')?.classList.toggle('open'));

/* Search */
document.getElementById('searchBtn')?.addEventListener('click',()=>{
  document.getElementById('searchOverlay')?.classList.add('open');
  document.getElementById('searchInput')?.focus();
});
document.getElementById('searchClose')?.addEventListener('click',()=>document.getElementById('searchOverlay')?.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('searchOverlay')?.classList.remove('open');});

document.getElementById('searchInput')?.addEventListener('input',function(){
  const q=this.value.toLowerCase().trim();
  const results=document.getElementById('searchResults');
  if(!results)return;
  if(!q){results.innerHTML='';return;}
  const matches=[];
  if(typeof GAMES!=='undefined'){GAMES.forEach(g=>{if(g.name.toLowerCase().includes(q))matches.push({emoji:g.emoji,name:g.name,sub:g.sub,href:`game-${g.id}.html`});});}
  if(typeof ARTICLES!=='undefined'){ARTICLES.forEach(a=>{if(a.title.toLowerCase().includes(q)){const g=getGame(a.gameId);matches.push({emoji:g?g.emoji:'📄',name:a.title,sub:g?g.name:'',href:`game-${a.gameId}.html`});}});}
  results.innerHTML=matches.slice(0,8).map(m=>`<a href="${m.href}" class="search-result-item"><span class="sri-emoji">${m.emoji}</span><div class="sri-info"><h4>${m.name}</h4><span>${m.sub}</span></div></a>`).join('')||`<p style="color:var(--text3);padding:1rem 1.2rem;font-family:var(--font-ui)">Sin resultados para "${q}"</p>`;
});

/* Helpers */
function getTypeClass(t){const m={guia:'type-guia',trucos:'type-trucos',estrategia:'type-estrategia',secretos:'type-secretos',beginner:'type-beginner',tips:'type-tips',config:'type-config'};return m[t]||'type-tips';}

/* Featured Games */
function renderFeaturedGames(){
  const grid=document.getElementById('featuredGrid');
  if(!grid||typeof getTopGames==='undefined')return;
  const top=getTopGames(12);
  grid.innerHTML=top.map(g=>`
    <a href="game-${g.id}.html" class="game-card fade-in">
      <div class="gc-cover" style="background:linear-gradient(135deg,${g.color}22,${g.color}08)">
        <div class="gc-emoji-bg">${g.emoji}</div><div class="gc-emoji">${g.emoji}</div>
      </div>
      ${g.vol>=200000?'<div class="game-card-badge badge-hot">🔥 HOT</div>':g.cat==='mesa'?'<div class="game-card-badge badge-mesa">♟️ Mesa</div>':'<div class="game-card-badge badge-pc">🎮</div>'}
      <div class="gc-body">
        <div class="gc-name">${g.name}</div><div class="gc-sub">${g.sub}</div>
        <div class="gc-vol"><span class="gc-vol-num">${fmtVol(g.vol)}</span><span class="gc-vol-label">búsquedas/mes</span></div>
        <div class="gc-articles">${g.articles} artículos disponibles</div>
      </div>
    </a>`).join('');
}
renderFeaturedGames();

/* Articles */
let artPage=12,artFilter='all';
function renderArticles(){
  const grid=document.getElementById('articlesGrid');
  if(!grid||typeof ARTICLES==='undefined')return;
  const filtered=artFilter==='all'?ARTICLES:ARTICLES.filter(a=>a.type===artFilter);
  const shown=filtered.slice(0,artPage);
  grid.innerHTML=shown.map(a=>{
    const g=getGame(a.gameId);
    return `<div class="article-card fade-in" onclick="location.href='game-${a.gameId}.html'">
      <div class="ac-meta"><span class="ac-type ${getTypeClass(a.type)}">${typeLabel(a.type)}</span><span class="ac-vol">🔍 ${fmtVol(a.vol)}/mes</span></div>
      <h3 class="ac-title">${a.title}</h3>
      <div class="ac-game"><span class="ac-game-dot" style="background:${g?g.color:'#ccc'}"></span><span>${g?g.name:'Varios'}</span></div>
      <div class="ac-footer"><span class="ac-read">⏱ ${a.readTime} min de lectura</span><span class="ac-arrow">→</span></div>
    </div>`;
  }).join('');
  const lm=document.getElementById('loadMore');
  if(lm)lm.style.display=shown.length<filtered.length?'inline-block':'none';
  observeFadeIns();
}
renderArticles();

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',function(){
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');artFilter=this.dataset.filter;artPage=12;renderArticles();
  });
});
document.getElementById('loadMore')?.addEventListener('click',()=>{artPage+=12;renderArticles();});

/* Board Games */
function renderBoardGames(){
  const grid=document.getElementById('boardgamesGrid');
  if(!grid||typeof GAMES==='undefined')return;
  const games=GAMES.filter(g=>g.cat==='mesa').slice(0,8);
  grid.innerHTML=games.map(g=>`
    <a href="game-${g.id}.html" class="bg-card fade-in" style="border-color:${g.color}22">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${g.color};border-radius:20px 20px 0 0"></div>
      <div class="bg-emoji">${g.emoji}</div>
      <div class="bg-name">${g.name}</div><div class="bg-sub">${g.sub}</div>
      <p class="bg-desc">${g.desc}</p>
      <div class="bg-stats">
        <div class="bg-stat"><div class="bg-stat-val" style="color:${g.color}">${fmtVol(g.vol)}</div><div class="bg-stat-key">búsquedas</div></div>
        <div class="bg-stat"><div class="bg-stat-val" style="color:${g.color}">${g.articles}</div><div class="bg-stat-key">artículos</div></div>
      </div>
    </a>`).join('');
}
renderBoardGames();

/* Ranking table */
function renderRankingTable(){
  const tbody=document.getElementById('rankingBody');
  if(!tbody||typeof GAMES==='undefined')return;
  const sorted=[...GAMES].sort((a,b)=>b.vol-a.vol).slice(0,15);
  tbody.innerHTML=sorted.map((g,i)=>{
    const topArt=ARTICLES.filter(a=>a.gameId===g.id).sort((a,b)=>b.vol-a.vol)[0];
    return `<tr class="${i<3?'rank-'+(i+1):''}">
      <td class="rank-num">${i+1}</td>
      <td><span class="rank-emoji">${g.emoji}</span>${g.name}</td>
      <td>${topArt?topArt.title:'—'}</td>
      <td class="rank-vol">${fmtVol(g.vol)}</td>
      <td><span class="rank-cat ${g.cat}">${g.cat==='videojuego'?'🎮 Videojuego':'♟️ Mesa'}</span></td>
    </tr>`;
  }).join('');
}
renderRankingTable();

/* Newsletter */
document.getElementById('nlBtn')?.addEventListener('click',()=>{
  const email=document.getElementById('nlEmail')?.value?.trim();
  const btn=document.getElementById('nlBtn');
  if(email&&email.includes('@')&&email.includes('.')){
    btn.textContent='✓ ¡Suscripto!';btn.style.background='var(--green)';btn.style.color='#fff';btn.disabled=true;
  } else {
    const inp=document.getElementById('nlEmail');
    if(inp){inp.style.borderColor='var(--red)';inp.focus();}
  }
});

/* Fade in observer */
function observeFadeIns(){
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});
  },{threshold:0.08});
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el=>obs.observe(el));
}
observeFadeIns();

/* Ticker */
const ticker=document.getElementById('ticker');
if(ticker){const clone=ticker.cloneNode(true);ticker.parentNode.appendChild(clone);}
