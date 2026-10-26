/* ============================================================ FINANCIAL STATEMENT ANALYSIS — MC EXAM SIMULATOR + HGB vs IFRS SORTER ============================================================ */
// Loaded last. The exam is multiple choice only ("questions of different complexity", 90 min, 90 points), so the simulator mixes
// three levels: knowledge (chapter quizzes), cases (Case Trainer) and calculations (Number Drills, turned into MC where needed).
// No "$" in any text here (mathText would read it as KaTeX).

function fsSimQuestions(){
  const out = [];
  // knowledge: 16 questions spread over all ten chapters
  const perCh = FS_TOPICS.map(t=>shuffle(t.quiz.map(q=>({...q, ch:t.ch})))); let k = 0;
  while(out.length<16 && perCh.some(a=>a.length)){ const a = perCh[k++ % perCh.length]; if(a.length) out.push({...a.pop(), level:'Knowledge'}); }
  shuffle(FS_CASES).slice(0, 8).forEach(c=>out.push({q:c.q, opts:c.opts, correct:c.correct, exp:c.exp, level:'Case', src:c.src}));
  // calculations: choice tasks directly; single-number tasks become MC with three plausible wrong values
  const kinds = shuffle(FS_KINDS.slice()); let n = 0;
  for(const K of kinds){
    if(n>=6) break; const t = K.gen();
    if(t.choice){ const opts = t.choice.map(c=>c[1]); out.push({q:t.q, opts, correct:t.choice.findIndex(c=>c[0]===t.ans), exp:t.sol, level:'Calculation', rich:true}); n++; continue; }
    if(t.fields && t.fields.length===1){
      const a = t.ans[0]; if(!isFinite(a) || a===0) continue;
      const fmt = v=>Math.abs(a)<100 && a%1 ? v.toFixed(2) : Math.round(v).toLocaleString('en-US');
      const wrong = shuffle([1.1, 0.9, 1.25, 0.8, -1]).map(f=>a*f).filter(v=>fmt(v)!==fmt(a)).slice(0,3);
      const opts = shuffle([a].concat(wrong)); out.push({q:`${t.q} (${t.fields[0]})`, opts:opts.map(fmt), correct:opts.indexOf(a), exp:t.sol, level:'Calculation', rich:true}); n++;
    }
  }
  return shuffle(out).map(q=>{ const order = shuffle(q.opts.map((_,i)=>i)); return {...q, opts:order.map(i=>q.opts[i]), correct:order.indexOf(q.correct)}; });
}
function buildFSSim(){
  registerPage('fs-sim', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('timer')} Practice</div><h2>MC Exam Simulator</h2><p>Like the real exam: multiple choice only, 90 minutes, 90 points. Thirty questions of three levels — knowledge from all ten chapters, cases (dates, recognition, valuation decisions) and calculations (ratios, size class, cash flow). Answer everything, then grade and read every explanation. Self-written questions; the case keys follow the course rules.</p></div>
      <div class="page-body">
        <div class="bk-score-row"><span class="bk-live fs-s-live"></span><span class="fs-s-best"></span><button class="btn fs-s-new">New exam</button><button class="btn ghost fs-s-grade">Finish & grade</button></div>
        <div class="fs-s-body"></div>
      </div>`;
    const body = div.querySelector('.fs-s-body'); let qs = [], timer = null, left = 0, graded = false;
    const best = ()=>{ const b = ls('fs-sim-best', null); div.querySelector('.fs-s-best').textContent = b!=null ? `Best: ${b}/90` : ''; };
    const tick = ()=>{ if(graded) return; div.querySelector('.fs-s-live').textContent = `Time left ${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`; if(left<=0){ grade(); return; } left--; };
    const start = ()=>{
      graded = false; qs = fsSimQuestions();
      body.innerHTML = qs.map((q,i)=>`<div class="drill-card glass fs-s-q" data-i="${i}"><div class="qtag">Question ${i+1} · 3 points · ${q.level}</div><div class="qtitle">${mathText(q.q)}</div>
        <div class="fs-s-opts">${q.opts.map((o,j)=>`<label class="dt-opt"><input type="radio" name="fs-s-${i}" value="${j}"><span class="letter">${'abcde'[j]}.</span><span>${mathText(String(o))}</span></label>`).join('')}</div><div class="ans-feedback"></div></div>`).join('');
      clearInterval(timer); left = 90*60; timer = setInterval(tick, 1000); tick(); best();
    };
    const grade = ()=>{
      if(graded) return; graded = true; clearInterval(timer); let got = 0;
      const cs = fsCaseState();
      qs.forEach((q,i)=>{
        const box = body.querySelector(`.fs-s-q[data-i="${i}"]`), sel = box.querySelector('input:checked'), ok = sel && +sel.value===q.correct;
        if(ok) got += 3; if(q.level==='Case') cs[q.q] = ok ? 1 : 0;
        box.querySelectorAll('.dt-opt').forEach((l,j)=>{ l.classList.toggle('st-ok', j===q.correct); l.classList.toggle('st-bad', !!sel && +sel.value===j && j!==q.correct); l.querySelector('input').disabled = true; });
        const fb = box.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(ok?'good':'warn');
        fb.innerHTML = `<b>${ok?'Correct':'Wrong'} — ${ok?3:0}/3.</b> ${q.rich ? richHtml(q.exp) : mathText(q.exp||'')}`;
      });
      lsSet('fs-case-state', cs);
      const b = ls('fs-sim-best', null); if(b==null || got>b) lsSet('fs-sim-best', got);
      div.querySelector('.fs-s-live').textContent = `Result: ${got}/90 points`; best(); window.scrollTo({top:0, behavior:'smooth'});
    };
    div.querySelector('.fs-s-new').addEventListener('click', start);
    div.querySelector('.fs-s-grade').addEventListener('click', grade);
    start();
  });
}

/* ---------- HGB vs IFRS sorter (chapter 10) ---------- */
const FS_SORT = [
  ['The primary objective is useful information for investors, lenders and other creditors in making economic decisions.', 'ifrs', 'Conceptual Framework 1.2–1.4 — decision usefulness is the primary objective of IFRS.'],
  ['There is no primary objective and no overriding principle; the rules balance documentation, accountability and capital preservation.', 'hgb', 'That is German GAAP.'],
  ['An asset must also be separately marketable to be recognised.', 'hgb', 'IFRS has no "separate marketability" criterion → HGB is stricter.'],
  ['Self-developed non-current intangible assets must generally be capitalised when the criteria are met.', 'ifrs', 'IFRS: generally mandatory. HGB: optional, with similar prohibitions.'],
  ['Capitalising self-developed non-current intangible assets is an option.', 'hgb', 'HGB grants an option; under IFRS it is generally mandatory.'],
  ['The lessee capitalises practically every lease as a right-of-use asset with a lease liability.', 'ifrs', 'IFRS 16.'],
  ['The lessee capitalises only finance leases, not operating leases.', 'hgb', 'German GAAP.'],
  ['Revenue is generally recognised earlier under a five-step model.', 'ifrs', 'IFRS 15 → generally earlier revenue recognition.'],
  ['Revenue follows the strict realisation principle.', 'hgb', 'German GAAP — capital preservation.'],
  ['Some income and expenses go directly into equity via other comprehensive income (OCI).', 'ifrs', 'IFRS partly uses OCI.'],
  ['Every income and expense passes through the profit and loss account, without exception.', 'hgb', 'HGB has no OCI.'],
  ['Measurement is more "conservative", shaped by the prudence and imparity principle.', 'hgb', 'IFRS is more symmetric, because the imparity principle is missing.'],
  ['In subsequent measurement, non-current assets may be revalued to a fair value above historical cost.', 'ifrs', 'Revaluation option under IFRS.'],
  ['Historical cost is the upper limit for the measurement of assets.', 'hgb', 'German GAAP — maximum historical cost.'],
  ['Acquired goodwill is not amortised regularly but tested for impairment at least once a year.', 'ifrs', 'IFRS "impairment only" — the "ticking time bomb".'],
  ['Acquired goodwill is amortised over its useful life, or over 10 years if it cannot be estimated reliably.', 'hgb', '§ 246 I and § 253 III HGB (tax law: 15 years).'],
  ['Intangible assets with an indefinite useful life are not amortised but tested for impairment at least annually.', 'ifrs', 'IFRS. HGB amortises over max. 10 years if the useful life cannot be estimated reliably.'],
  ['A goodwill impairment may not be reversed later.', 'both', 'HGB § 253 V and IAS 36.124 — no reversal under either system.'],
  ['Non-current assets are initially measured at historical cost.', 'both', 'Both start at historical cost; they differ in subsequent measurement.'],
  ['Acquired goodwill is recognised as an asset.', 'both', 'Both recognise acquired goodwill; they differ in how it is written off.'],
  ['Additional impairment of goodwill is possible on top of the regular treatment.', 'both', 'HGB: amortisation plus impairment if necessary; IFRS: impairment test.']
];
function buildFSSort(){
  registerPage('fs-sort', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('quiz')} Practice</div><h2>HGB vs IFRS Sorter</h2><p>One statement at a time — does it describe German GAAP, IFRS, or both? Chapter 10 in quick decisions, the way MC statements test it.</p></div>
      <div class="page-body"><div class="bk-score-row"><span class="bk-live fs-o-live"></span><button class="btn ghost fs-o-reset">Reset session</button></div><div class="drill-card glass fs-o-card"></div></div>`;
    const card = div.querySelector('.fs-o-card'); let cur, done, ok = 0, n = 0, bag = [];
    const live = ()=>{ const v = ls('fs-sort-stats', null); div.querySelector('.fs-o-live').textContent = `This session: ${ok}/${n}` + (v && v.n ? ` · overall ${v.ok}/${v.n}` : ''); };
    const next = ()=>{
      if(!bag.length) bag = shuffle(FS_SORT.map((_,i)=>i)); cur = FS_SORT[bag.pop()]; done = false;
      card.innerHTML = `<div class="drill-q">${esc(cur[0])}</div><div class="chip-row st-choices">${[['hgb','German GAAP (HGB)'],['ifrs','IFRS'],['both','Both']].map(([v,l])=>`<button class="chip" data-choice="${v}">${l}</button>`).join('')}</div><div class="ans-feedback"></div><div class="ans-actions"><button class="btn ghost" data-d="next">Next statement →</button></div>`;
      live();
    };
    card.addEventListener('click', ev=>{
      const ch = ev.target.closest('[data-choice]');
      if(ch && !done){
        done = true; n++; const good = ch.dataset.choice===cur[1]; if(good) ok++;
        ch.classList.add(good?'st-ok':'st-bad'); if(!good) card.querySelectorAll('[data-choice]').forEach(b=>{ if(b.dataset.choice===cur[1]) b.classList.add('st-ok'); });
        const v = ls('fs-sort-stats', {ok:0, n:0}); v.n++; if(good) v.ok++; lsSet('fs-sort-stats', v);
        const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(good?'good':'warn'); fb.innerHTML = (good?'<b>Right.</b> ':'<b>Not quite.</b> ') + esc(cur[2]); live(); return;
      }
      if(ev.target.closest('[data-d="next"]')) next();
    });
    div.querySelector('.fs-o-reset').addEventListener('click', ()=>{ ok = 0; n = 0; bag = []; next(); });
    next();
  });
}

/* ---------- study plan ---------- */
const __planItemPoolBK2 = planItemPool;
planItemPool = function(){
  const items = __planItemPoolBK2();
  const b = ls('fs-sim-best', null);
  items.push({subj:'fs', label:'MC Exam Simulator — 30 questions, 90 min', page:'fs-sim', weight:b==null ? .9 : Math.max(.2, 1-b/90), size:30, large:true, prio:b==null || b<63});
  const v = ls('fs-sort-stats', null);
  items.push({subj:'fs', label:'HGB vs IFRS Sorter (chapter 10)', page:'fs-sort', weight:v && v.n ? Math.max(.2, 1-v.ok/v.n) : .8, size:8, large:false, prio:false});
  return items;
};
const __planScheduleBK2 = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='fs-sim'){ const h = planDaysLeft('fs'); return Array.from(new Set([Math.max(1,h-8), Math.max(1,h-3), Math.max(1,h-1)])); }
  if(item.page==='fs-sort'){ const h = planDaysLeft('fs'); return Array.from(new Set([Math.max(1,h-18), Math.max(1,h-6)])); }
  return __planScheduleBK2(item, idx);
};
