/* ============================================================ BOOKKEEPING — TEXTBOOK CHAPTER GROUP (bk-rw, bk-rw-1 … bk-rw-11) ============================================================ */
// Loaded last. Pages from BK_RW_TOPICS (data_bk_rw.js) reuse the BK topic page (Summary · Quiz · optional flashcards).
// They get their own sidebar section, search entries, study-plan items (weighted ×0.6 as supplementary reading),
// an overview page with the book-vs-course notes, and their quiz score counts a quarter into the matching course chapters.
const BK_RW_BOOK = 'Rechnungswesen – leicht gemacht';
const BK_RW_FLAGS = [
  ['Thresholds § 241a HGB / § 141 AO', 'Book and course both use 600,000€ revenue / 60,000€ profit. For business years from 2024 the limits were raised to 800,000€ / 80,000€. Use the course figures in the exam unless Prof. Cloer says otherwise.', 'bk-rw-2'],
  ['Gross vs net method', 'The book says only large corporations must use the gross method. Cloer\'s handout is stricter: the offsetting ban of § 246 para. 2 HGB rules out net presentation in HGB statements; § 276 "Rohergebnis" is only a disclosure relief. Follow Cloer.', 'bk-rw-7'],
  ['GKV / UKV paragraphs', 'The book confirms § 275 para. 2 = total cost method and para. 3 = cost of sales method. Cloer\'s slide in chapter 10 labels them the other way round.', 'bk-rw-8'],
  ['Provisions: three or four kinds', 'The course counts four categories under § 249 HGB; the book groups maintenance, overburden and goodwill warranties together as "expense provisions". Same rules, different grouping.', 'bk-rw-10'],
  ['Declining-balance depreciation in tax law', 'The 2019 edition says it is banned for tax since 2011; tax law has changed again since. Only the commercial-law methods matter for the exam.', 'bk-rw-9'],
  ['IFRS references', 'The book cites IAS 11 and IAS 39, which IFRS 15 and IFRS 9 have since replaced. The point (earlier profit recognition under IFRS) still holds.', 'bk-rw-5'],
  ['Beyond the lecture', 'Legal framework (audit, disclosure, group accounts), doubtful and uncollectible receivables, the general allowance and the disagio are not on Cloer\'s slides. Read them as background; they are marked in the pages.', 'bk-rw-5']
];
function bkRwCourse(t){ return (t.course||[]).map(id=>BK_TOPICS.find(x=>x.id===id)).filter(Boolean); }
function bkRwScore(t){ return knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); }

/* ---------- scores: a textbook quiz counts a quarter into its course chapters ---------- */
const __bkTopicScoreRW = bkTopicScore;
bkTopicScore = function(t){
  const base = __bkTopicScoreRW(t);
  if(t.id.startsWith('bk-rw')) return base;
  const tb = BK_RW_TOPICS.filter(r=>(r.course||[]).includes(t.id)).map(bkRwScore).filter(v=>v!=null);
  if(!tb.length) return base;
  const avg = tb.reduce((a,b)=>a+b,0)/tb.length;
  return base==null ? avg : (base*3 + avg)/4;
};

/* ---------- sidebar ---------- */
const __buildSidebarNavRW = buildSidebarNav;
buildSidebarNav = function(subjId){
  __buildSidebarNavRW(subjId);
  if(subjId!=='bk') return;
  const nav = document.getElementById('sidebar-nav');
  let html = `<div class="nav-section-label">Textbook · ${esc(BK_RW_BOOK)}</div>`;
  html += `<div class="nav-item" data-page="bk-rw" onclick="navTo('bk-rw')">${icon('doc')}<span>Overview & book vs. course</span></div>`;
  BK_RW_TOPICS.forEach(t=>{ html += `<div class="nav-item" data-page="${t.id}" onclick="navTo('${t.id}')">${icon('summary')}<span>${t.ch}. ${esc(t.title)}</span></div>`; });
  nav.insertAdjacentHTML('beforeend', html);
  nav.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};

/* ---------- search ---------- */
const __buildSearchIndexRW = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexRW();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  BK_RW_TOPICS.forEach(t=>{
    const where = `Bookkeeping · Textbook ${t.ch}`;
    add({type:'Topic', rank:0, title:t.title, text:BK_RW_BOOK, where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:searchFlat(p), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:c.q, text:c.a, where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:q.q, text:q.exp||'', where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  add({type:'Page', rank:0, title:`Textbook overview · ${BK_RW_BOOK}`, text:'book vs course differences', where:'Bookkeeping · Textbook', page:'bk-rw'});
  BK_RW_FLAGS.forEach(f=>add({type:'Book vs. course', rank:2, title:f[0], text:f[1], where:'Bookkeeping · Textbook overview', page:'bk-rw'}));
  return idx;
};

/* ---------- study plan: supplementary reading, weighted ×0.6 ---------- */
const __planItemPoolRW = planItemPool;
planItemPool = function(){
  const items = __planItemPoolRW();
  BK_RW_TOPICS.forEach(t=>{
    const s = bkRwScore(t);
    items.push({subj:'bk', label:`Textbook ${t.ch} · ${t.title}`, page:t.id, weight:(s==null ? 1 : 1-s)*.6, size:t.quiz.length + Math.round(t.summary.split(/\s+/).length/120), large:false, prio:false});
  });
  return items;
};

/* ---------- topic pages: BK layout + textbook eyebrow and links to the course chapters ---------- */
const __buildTopicPageRW = buildTopicPage;
buildTopicPage = function(t){
  __buildTopicPageRW(t);
  if(!t.id.startsWith('bk-rw-')) return;
  const build = lazyPages[t.id];
  if(!build) return;
  lazyPages[t.id] = ()=>{
    build();
    const div = document.getElementById('page-'+t.id);
    const eb = div.querySelector('.page-header .eyebrow');
    if(eb) eb.innerHTML = `${icon('summary')} Bookkeeping · Textbook ${t.ch} · ${esc(t.lessons)} of ${esc(BK_RW_BOOK)}`;
    const course = bkRwCourse(t);
    const drills = BK_TRAIN.filter(x=>x.src==='Textbook' && (t.course||[]).includes(x.topic)).length;
    const row = `<div class="chip-row"><span class="chip-label">In the course:</span>${course.map(c=>`<button class="chip" onclick="navTo('${c.id}')">Chapter ${c.ch} · ${esc(c.title)}</button>`).join('')}${drills?`<button class="chip" onclick="bkTrainFilter='src:Textbook';navTo('bk-train');const pg=document.getElementById('page-bk-train');if(pg&&pg.__start)pg.__start();">${drills} textbook booking drills</button>`:''}<button class="chip" onclick="navTo('bk-rw')">Book vs. course</button></div>`;
    const body = div.querySelector('.page-body');
    if(body) body.insertAdjacentHTML('afterbegin', row);
  };
};

/* ---------- overview page ---------- */
function buildBKRw(){
  registerPage('bk-rw', (div)=>{
    const nQ = BK_RW_TOPICS.reduce((n,t)=>n+t.quiz.length,0);
    const nD = BK_TRAIN.filter(x=>x.src==='Textbook').length;
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Bookkeeping · Textbook</div><h2>${esc(BK_RW_BOOK)}</h2><p>The textbook's 12 lessons, summarised in English on ${BK_RW_TOPICS.length} pages with ${nQ} quiz questions, plus ${nD} booking drills built on its exercise topics. It explains the same German GAAP material as Prof. Cloer's slides, often step by step. Where the book goes further or differs from the course, the page says so.</p></div>
      <div class="page-body">
        <div class="nav-section-label" style="padding-left:0">Pages and matching course chapters</div>
        <div class="topic-grid">${BK_RW_TOPICS.map(t=>{ const s = bkRwScore(t); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">TEXTBOOK ${t.ch} · ${esc(t.lessons.toUpperCase())}</div><h4>${esc(t.title)}</h4><p>Course: ${bkRwCourse(t).map(c=>'ch. '+c.ch).join(', ')} · ${t.quiz.length} quiz questions${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}</div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px">Book vs. course</div>
        <div class="glass bk-tut-intro">${BK_RW_FLAGS.map(f=>`<p><b>${esc(f[0])}:</b> ${esc(f[1])} <a href="#${f[2]}" onclick="navTo('${f[2]}');return false;">Open page →</a></p>`).join('')}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
          <button class="btn" onclick="navTo('bk-rw-1')">Start with T1 →</button>
          ${nD?`<button class="btn ghost" onclick="bkTrainFilter='src:Textbook';navTo('bk-train');const pg=document.getElementById('page-bk-train');if(pg&&pg.__start)pg.__start();">Textbook booking drills (${nD})</button>`:''}
        </div>
      </div>`;
  });
}

/* ---------- Bookkeeping home + trainer: textbook entries ---------- */
function bkRwPatchLazy(id, fn){
  const build = lazyPages[id]; if(!build) return;
  lazyPages[id] = ()=>{ build(); fn(document.getElementById('page-'+id)); };
}
const __buildBKClassRW = buildBKClass;
buildBKClass = function(){
  __buildBKClassRW();
  BK_RW_TOPICS.forEach(t=>buildTopicPage(t));
  buildBKRw();
  bkRwPatchLazy('bk-home', div=>{
    const grid = div.querySelector('.topic-grid'); if(!grid) return;
    grid.insertAdjacentHTML('afterend', `<div class="nav-section-label" style="padding-left:0;margin-top:28px;">Textbook · ${esc(BK_RW_BOOK)}</div>
      <div class="topic-grid">${BK_RW_TOPICS.map(t=>{ const s = bkRwScore(t); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">TEXTBOOK ${t.ch}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
      <div class="topic-card" onclick="navTo('bk-rw')"><div class="num">OVERVIEW</div><h4>Book vs. course</h4><p>Where the textbook differs from or goes beyond Prof. Cloer's slides</p></div></div>`);
  });
  bkRwPatchLazy('bk-train', div=>{
    const n = BK_TRAIN.filter(x=>x.src==='Textbook').length;
    const f = div.querySelector('.bk-filter'); if(!f || !n) return;
    const tut = f.querySelector('[data-f="src:tut"]');
    const chip = `<button class="chip${bkTrainFilter==='src:Textbook'?' active':''}" data-f="src:Textbook">Textbook drills (${n})</button>`;
    if(tut) tut.insertAdjacentHTML('afterend', chip); else f.insertAdjacentHTML('beforeend', chip);
  });
};
