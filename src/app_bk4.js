/* ============================================================ BOOKKEEPING — TEXTBOOK CHAPTER GROUP (bk-rw, bk-rw-1 … bk-rw-11) ============================================================ */
// Loaded last. Pages from BK_RW_TOPICS (data_bk_rw.js) reuse the BK topic page (Summary · Quiz · optional flashcards).
// They get their own sidebar section, search entries, study-plan items (weighted ×0.6 as supplementary reading),
// an overview page with the book-vs-course notes, and their quiz score counts a quarter into the matching course chapters.
const BK_RW_BOOK = 'Rechnungswesen – leicht gemacht';
const BK_RW_FLAGS = [
  ['Grenzen § 241a HGB / § 141 AO', 'Buch und Kurs verwenden beide 600.000 € Umsatz / 60.000 € Gewinn. Für Geschäftsjahre ab 2024 wurden die Grenzen auf 800.000 € / 80.000 € angehoben. In der Klausur die Kurszahlen verwenden, außer Prof. Cloer sagt etwas anderes.', 'bk-rw-2'],
  ['Brutto- vs. Nettomethode (gross vs net method)', 'Laut Buch müssen nur große Kapitalgesellschaften die Bruttomethode verwenden. Cloers Handout ist strenger: Das Saldierungsverbot des § 246 Abs. 2 HGB schließt einen Nettoausweis im HGB-Abschluss aus; das "Rohergebnis" des § 276 ist nur eine Ausweiserleichterung. Cloer folgen.', 'bk-rw-7'],
  ['GKV / UKV-Absätze', 'Das Buch bestätigt § 275 Abs. 2 = Gesamtkostenverfahren (total cost method) und Abs. 3 = Umsatzkostenverfahren (cost of sales method). Cloers Folie in Kapitel 10 bezeichnet sie genau umgekehrt.', 'bk-rw-8'],
  ['Rückstellungen: drei oder vier Arten', 'Der Kurs zählt vier Kategorien nach § 249 HGB; das Buch fasst Instandhaltung, Abraum und Kulanz zu "Aufwandsrückstellungen" zusammen. Gleiche Regeln, andere Gruppierung.', 'bk-rw-10'],
  ['Degressive Abschreibung im Steuerrecht', 'Die Ausgabe von 2019 sagt, sie sei steuerlich seit 2011 verboten; das Steuerrecht hat sich seitdem wieder geändert. Für die Klausur zählen nur die handelsrechtlichen Methoden.', 'bk-rw-9'],
  ['IFRS-Verweise', 'Das Buch zitiert IAS 11 und IAS 39, die inzwischen durch IFRS 15 und IFRS 9 ersetzt wurden. Die Aussage (frühere Gewinnrealisierung nach IFRS) gilt weiterhin.', 'bk-rw-5'],
  ['Über die Vorlesung hinaus', 'Rechtsrahmen (Prüfung, Offenlegung, Konzernabschluss), zweifelhafte und uneinbringliche Forderungen, die Pauschalwertberichtigung und das Disagio stehen nicht auf Cloers Folien. Als Hintergrund lesen; sie sind auf den Seiten markiert.', 'bk-rw-5']
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
  let html = `<div class="nav-section-label">Lehrbuch (Deutsch) · ${esc(BK_RW_BOOK)}</div>`;
  html += `<div class="nav-item" data-page="bk-rw" onclick="navTo('bk-rw')">${icon('doc')}<span>Übersicht & Buch vs. Kurs</span></div>`;
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
  add({type:'Page', rank:0, title:`Textbook overview · ${BK_RW_BOOK}`, text:'book vs course differences Buch vs. Kurs Unterschiede', where:'Bookkeeping · Textbook', page:'bk-rw'});
  BK_RW_FLAGS.forEach(f=>add({type:'Buch vs. Kurs', rank:2, title:f[0], text:f[1], where:'Bookkeeping · Textbook overview', page:'bk-rw'}));
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
    if(eb) eb.innerHTML = `${icon('summary')} Bookkeeping · Lehrbuch ${t.ch} · ${esc(t.lessons)} aus ${esc(BK_RW_BOOK)}`;
    const course = bkRwCourse(t);
    const drills = BK_TRAIN.filter(x=>x.src==='Textbook' && (t.course||[]).includes(x.topic)).length;
    const row = `<div class="chip-row"><span class="chip-label">Im Kurs:</span>${course.map(c=>`<button class="chip" onclick="navTo('${c.id}')">Chapter ${c.ch} · ${esc(c.title)}</button>`).join('')}${drills?`<button class="chip" onclick="bkTrainFilter='src:Textbook';navTo('bk-train');const pg=document.getElementById('page-bk-train');if(pg&&pg.__start)pg.__start();">${drills} Buchungsübungen aus dem Lehrbuch</button>`:''}<button class="chip" onclick="navTo('bk-rw')">Buch vs. Kurs</button></div>`;
    const body = div.querySelector('.page-body');
    if(body) body.insertAdjacentHTML('afterbegin', row);
  };
};

/* ---------- overview page ---------- */
function buildBKRw(){
  registerPage('bk-rw', (div)=>{
    const nQ = BK_RW_TOPICS.reduce((n,t)=>n+t.quiz.length,0);
    const nD = BK_TRAIN.filter(x=>x.src==='Textbook').length;
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Bookkeeping · Lehrbuch</div><h2>${esc(BK_RW_BOOK)}</h2><p>Die 12 Lektionen des Lehrbuchs, auf Deutsch zusammengefasst auf ${BK_RW_TOPICS.length} Seiten mit ${nQ} Quizfragen, dazu ${nD} Buchungsübungen zu seinen Übungsthemen. Es erklärt denselben HGB-Stoff wie Prof. Cloers Folien, oft Schritt für Schritt. Englische Fachbegriffe stehen in Klammern, wo sie für die englische Klausur wichtig sind. Wo das Buch weiter geht oder vom Kurs abweicht, steht es auf der Seite.</p></div>
      <div class="page-body">
        <div class="nav-section-label" style="padding-left:0">Seiten und passende Kurskapitel</div>
        <div class="topic-grid">${BK_RW_TOPICS.map(t=>{ const s = bkRwScore(t); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">LEHRBUCH ${t.ch} · ${esc(t.lessons.toUpperCase())}</div><h4>${esc(t.title)}</h4><p>Kurs: ${bkRwCourse(t).map(c=>'Kap. '+c.ch).join(', ')} · ${t.quiz.length} Quizfragen${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}</div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px">Buch vs. Kurs</div>
        <div class="glass bk-tut-intro">${BK_RW_FLAGS.map(f=>`<p><b>${esc(f[0])}:</b> ${esc(f[1])} <a href="#${f[2]}" onclick="navTo('${f[2]}');return false;">Seite öffnen →</a></p>`).join('')}</div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
          <button class="btn" onclick="navTo('bk-rw-1')">Mit T1 beginnen →</button>
          ${nD?`<button class="btn ghost" onclick="bkTrainFilter='src:Textbook';navTo('bk-train');const pg=document.getElementById('page-bk-train');if(pg&&pg.__start)pg.__start();">Buchungsübungen aus dem Lehrbuch (${nD})</button>`:''}
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
    grid.insertAdjacentHTML('afterend', `<div class="nav-section-label" style="padding-left:0;margin-top:28px;">Lehrbuch (Deutsch) · ${esc(BK_RW_BOOK)}</div>
      <div class="topic-grid">${BK_RW_TOPICS.map(t=>{ const s = bkRwScore(t); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">LEHRBUCH ${t.ch}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} Quizfragen${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
      <div class="topic-card" onclick="navTo('bk-rw')"><div class="num">ÜBERSICHT</div><h4>Buch vs. Kurs</h4><p>Wo das Lehrbuch von Prof. Cloers Folien abweicht oder darüber hinausgeht</p></div></div>`);
  });
  bkRwPatchLazy('bk-train', div=>{
    const n = BK_TRAIN.filter(x=>x.src==='Textbook').length;
    const f = div.querySelector('.bk-filter'); if(!f || !n) return;
    const tut = f.querySelector('[data-f="src:tut"]');
    const chip = `<button class="chip${bkTrainFilter==='src:Textbook'?' active':''}" data-f="src:Textbook">Textbook drills (${n})</button>`;
    if(tut) tut.insertAdjacentHTML('afterend', chip); else f.insertAdjacentHTML('beforeend', chip);
  });
};
