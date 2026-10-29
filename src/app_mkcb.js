/* ============================================================ MARKETING + CONSUMER BEHAVIOUR (shared exam slot 16 Dec) ============================================================ */
// Loaded last (after app_cb.js). Both exams use the same MC format (5 statements, partial points), so this file holds what they share:
// the exam-format tab on every lecture/reading page, the joint mock exam, the guest-talk notes page and the Case Recognizer (CB lecture 1).

/* ---------- exam-format items inside a lecture page (same scoring + same state as the Exam-Format Trainers) ---------- */
function stmtRunEmbed(panel, items, stateKey, points){
  let run = [], i = 0, pts = 0, answered = false;
  const fmt = v=>String(v).replace(/\.0$/,'');
  const start = ()=>{ run = shuffle(items).map(m=>({...m, s:shuffle(m.s.slice())})); i = 0; pts = 0; show(); };
  const show = ()=>{
    answered = false;
    if(i>=run.length){
      panel.innerHTML = `<div class="drill-card glass"><h3 style="margin:0 0 6px">Done: ${fmt(pts)} / ${fmt(run.length*2.5)} points</h3><p>Same format and scoring as the exam. Your latest result per question also counts in the Exam-Format Trainer and the radar.</p><div class="ans-actions"><button class="btn" data-a="again">New shuffled run</button></div></div>`;
      return;
    }
    const m = run[i];
    panel.innerHTML = `<div class="drill-card glass mk-card"><div class="qtag">Question ${i+1} of ${run.length} · tick every true statement (1–5 can be true) · self-written, exam format</div>
      <div class="qtitle mk-q">${esc(m.q)}</div>
      <div class="mk-stmts">${m.s.map((x,k)=>`<label class="mk-st" data-k="${k}"><input type="checkbox"><span class="letter">${String.fromCharCode(65+k)}</span><span class="mk-st-text">${esc(x[0])}<span class="mk-why"></span></span></label>`).join('')}</div>
      <div class="ans-feedback"></div>
      <div class="ans-actions"><button class="btn" data-a="submit">Submit</button><button class="btn ghost" data-a="next" style="display:none">Next →</button></div></div>`;
  };
  panel.addEventListener('click', ev=>{
    const b = ev.target.closest('[data-a]'); if(!b) return;
    if(b.dataset.a==='again'){ start(); return; }
    if(b.dataset.a==='next'){ i++; show(); return; }
    if(b.dataset.a!=='submit' || answered) return;
    answered = true; const m = run[i]; let right = 0;
    panel.querySelectorAll('.mk-st').forEach(el=>{
      const x = m.s[+el.dataset.k]; const ticked = el.querySelector('input').checked; const ok = ticked===x[1]; if(ok) right++;
      el.classList.add(ok?'ok':'bad', x[1]?'is-true':'is-false'); el.querySelector('input').disabled = true;
      el.querySelector('.mk-why').innerHTML = `<b>${x[1]?'True':'False'}.</b> ${esc(x[2])}`;
    });
    const p = points[right]; pts += p;
    const st = ls(stateKey, {}); st[m.q] = p/2.5; lsSet(stateKey, st);
    const fb = panel.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(right===5?'good':'warn');
    fb.innerHTML = `<b>${right}/5 statements judged correctly → ${fmt(p)} of 2.5 points.</b>`;
    panel.querySelector('[data-a="submit"]').style.display = 'none'; panel.querySelector('[data-a="next"]').style.display = '';
  });
  start();
}

/* ---------- Case Recognizer (CB lecture 1: heuristics, biases, decision types) ---------- */
function buildCBCases(){
  registerPage('cb-cases', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('quiz')} Practice · Consumer Behaviour</div><h2>Case Recognizer</h2><p>Short buying situations — name the heuristic, the bias or the type of decision behind them. MC statements in the exam are often exactly such cases, so the goal is to recognise the principle quickly. Content: lecture 1 (heuristics, biases, Katona’s decision types, cognitive / habitual / affective) and lecture 2 (default effect, hyperchoice, asymmetric dominance, customer journey phases, CJD dimensions). New lectures add new cases.</p></div>
      <div class="page-body">
        <div class="bk-score-row"><span class="bk-live cb-c-live"></span><button class="btn ghost cb-c-reset">Reset session</button></div>
        <div class="drill-card glass cb-c-card"></div>
      </div>`;
    const card = div.querySelector('.cb-c-card');
    let cur, done, ok = 0, n = 0, bag = [];
    const live = ()=>{ const v = ls('cb-cases-stats', null); div.querySelector('.cb-c-live').textContent = `This session: ${ok}/${n}` + (v && v.n ? ` · overall ${v.ok}/${v.n}` : ''); };
    const next = ()=>{
      if(!bag.length) bag = shuffle(CB_CASES.map((_,i)=>i));
      const [q, g, ans, why] = CB_CASES[bag.pop()]; cur = {ans, why}; done = false;
      card.innerHTML = `<div class="qtag">${esc(CB_CASE_Q[g])}</div><div class="drill-q">${esc(q)}</div><div class="chip-row st-choices">${shuffle(CB_CASE_OPTS[g].slice()).map(([v,l])=>`<button class="chip" data-choice="${v}">${esc(l)}</button>`).join('')}</div><div class="ans-feedback"></div><div class="ans-actions"><button class="btn ghost" data-d="next">Next case →</button></div>`;
      live();
    };
    card.addEventListener('click', ev=>{
      const ch = ev.target.closest('[data-choice]');
      if(ch && !done){
        done = true; n++; const good = ch.dataset.choice===cur.ans; if(good) ok++;
        ch.classList.add(good?'st-ok':'st-bad'); if(!good) card.querySelectorAll('[data-choice]').forEach(b=>{ if(b.dataset.choice===cur.ans) b.classList.add('st-ok'); });
        const v = ls('cb-cases-stats', {ok:0, n:0}); v.n++; if(good) v.ok++; lsSet('cb-cases-stats', v);
        const fb = card.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(good?'good':'warn'); fb.innerHTML = (good?'<b>Right.</b> ':'<b>Not this one.</b> ') + esc(cur.why);
        live(); return;
      }
      if(ev.target.closest('[data-d="next"]')) next();
    });
    div.querySelector('.cb-c-reset').addEventListener('click', ()=>{ ok = 0; n = 0; bag = []; next(); });
    next();
  });
}

/* ---------- Guest talks: exam-relevant, slides may not be shared → structured notes on this device ---------- */
const MKCB_GUESTS = [
  {id:'cb-aybee', subj:'Consumer Behaviour', date:'Tue 10 Nov', who:'Florian Knieß, co-founder & CRO/CMO, Aybee', topic:'The Power of A and B testing', link:'Reading LS 4 (Ascarza: A/B testing, targeting by sensitivity)'},
  {id:'cb-occ', subj:'Consumer Behaviour', date:'Tue 17 Nov', who:'Hendrik Walter, Andreas Teller, Matthias Mück, OC&C', topic:'The Case of Gaming: Using Customer Data to Define Strategy', link:'Customer analytics, personas, segmentation (lecture 1)'},
  {id:'mk-groupone', subj:'Marketing', date:'Fri 20 Nov', who:'Daniel Hagemeier, multiple entrepreneur & CEO of group.one', topic:'(topic not announced yet)', link:''},
  {id:'cb-oracle', subj:'Consumer Behaviour', date:'Mon 23 Nov', who:'Dr. Philip Bradonjic, Oracle', topic:'The Impact of Technology & AI on Consumer Behavior', link:'Reading LS 7 (humans or AI as recommenders)'},
  {id:'mk-dhl', subj:'Marketing', date:'Mon 30 Nov', who:'Simon Buehler, Global Employer Branding Lead at DHL', topic:'(employer branding — topic not announced yet)', link:''},
  {id:'mk-jvm', subj:'Marketing', date:'Mon 7 Dec', who:'Carl Kuhn, Head of Esports & board member at Jung von Matt SPORTS', topic:'(topic not announced yet)', link:''}
];
const MKCB_GUEST_FIELDS = [
  ['core', 'Core message in one sentence'],
  ['models', 'Models, frameworks, terms the speaker used'],
  ['facts', 'Numbers, cases, examples (only the ones that illustrate a principle)'],
  ['link', 'Link to a lecture concept (why does it work on people?)'],
  ['exam', 'A question you would ask in the exam']
];
function buildMKCBGuest(){
  registerPage('mkcb-guest', (div)=>{
    const notes = ()=>ls('mkcb-guest-notes', {});
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('doc')} Practice · exam 16 Dec</div><h2>Guest Talks</h2><p>The exam includes questions on the guest talks, and their slides might not be shared. Take notes during each talk in the five fields below — they are saved on this device. Afterwards, send your notes to Claude: they become summaries and exam-format questions in the hub. Attendance in person also earns the participation points (scan the QR code).</p></div>
      <div class="page-body">${MKCB_GUESTS.map(g=>{ const n = notes()[g.id] || {}; const filled = MKCB_GUEST_FIELDS.filter(([k])=>(n[k]||'').trim()).length;
        return `<details class="drill-card glass mkcb-guest" data-g="${g.id}"><summary><span class="qtag">${esc(g.subj)} · ${esc(g.date)}${filled?` · ${filled}/5 fields noted`:''}</span><h3 style="margin:4px 0 2px">${esc(g.topic)}</h3><p style="margin:0;color:var(--ink-soft)">${esc(g.who)}${g.link?` · links to: ${esc(g.link)}`:''}</p></summary>
          ${MKCB_GUEST_FIELDS.map(([k,l])=>`<label class="mkcb-field"><span>${esc(l)}</span><textarea class="bk-tut-ans" rows="2" data-k="${k}" placeholder="…">${esc(n[k]||'')}</textarea></label>`).join('')}
        </details>`; }).join('')}</div>`;
    div.addEventListener('input', ev=>{
      const ta = ev.target.closest('textarea[data-k]'); if(!ta) return;
      const g = ta.closest('[data-g]').dataset.g; const all = notes(); all[g] = all[g] || {}; all[g][ta.dataset.k] = ta.value; lsSet('mkcb-guest-notes', all);
    });
  });
}

/* ---------- joint mock exam 16 Dec: both MC parts (5 statements, partial points) + one open question each ---------- */
// Timing like the real slot (150 min for 2 × 75 points): one minute per point. Open answers are rated by yourself against the model answer.
function buildMKCBMock(){
  registerPage('mkcb-mock', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('timer')} Practice · exam 16 Dec</div><h2>Mock Exam — Marketing + Consumer Behaviour</h2><p>Both exams share the slot on 16 December. This mock mixes all exam-format questions available so far (up to 24 per subject, like the real MC part) and one open question per subject. One minute per point, like the real slot. MC is graded automatically; for the open questions write your answer, then compare with the model answer and rate yourself. Self-written questions — not the professors’.</p></div>
      <div class="page-body">
        <div class="bk-score-row"><span class="bk-live mkcb-live"></span><span class="mkcb-best"></span><button class="btn mkcb-new">New mock</button><button class="btn ghost mkcb-grade">Finish & grade MC</button></div>
        <div class="mkcb-body"></div>
      </div>`;
    const body = div.querySelector('.mkcb-body');
    let parts = [], timer = null, left = 0, graded = false;
    const fmt = v=>String(Math.round(v*100)/100).replace(/\.0+$/,'');
    const best = ()=>{ const b = ls('mkcb-mock-best', null); div.querySelector('.mkcb-best').textContent = b!=null ? `Best MC result: ${b}%` : ''; };
    const tick = ()=>{ if(graded) return; const m = Math.floor(left/60), s = left%60; div.querySelector('.mkcb-live').textContent = `Time left ${m}:${String(s).padStart(2,'0')}`; if(left<=0){ grade(); return; } left--; };
    const start = ()=>{
      graded = false;
      parts = [
        {subj:'Marketing', key:'mk-mc-state', P:MK_POINTS, mc:shuffle(MK_MC).slice(0,24).map(m=>({...m, s:shuffle(m.s.slice())})), open:shuffle(MK_OPEN)[0]},
        {subj:'Consumer Behaviour', key:'cb-mc-state', P:CB_POINTS, mc:shuffle(CB_MC).slice(0,24).map(m=>({...m, s:shuffle(m.s.slice())})), open:shuffle(CB_OPEN)[0]}
      ];
      const pts = parts.reduce((a,p)=>a + p.mc.length*2.5 + (p.open?7.5:0), 0);
      body.innerHTML = parts.map((p,pi)=>`<div class="nav-section-label" style="padding-left:0;margin-top:${pi?28:4}px">${esc(p.subj)} · ${p.mc.length} MC questions${p.open?' + 1 open question':''}</div>
        ${p.mc.map((m,qi)=>`<div class="drill-card glass mk-card" data-p="${pi}" data-q="${qi}"><div class="qtag">${esc(p.subj)} · MC ${qi+1} · 2.5 points</div><div class="qtitle mk-q">${esc(m.q)}</div>
          <div class="mk-stmts">${m.s.map((x,k)=>`<label class="mk-st" data-k="${k}"><input type="checkbox"><span class="letter">${String.fromCharCode(65+k)}</span><span class="mk-st-text">${esc(x[0])}<span class="mk-why"></span></span></label>`).join('')}</div><div class="ans-feedback"></div></div>`).join('')}
        ${p.open?`<div class="drill-card glass mk-open" data-p="${pi}"><div class="qtag">${esc(p.subj)} · open question · 7.5 points</div><div class="qtitle">${esc(p.open.q)}</div><textarea class="bk-tut-ans" rows="5" placeholder="Your answer"></textarea>
          <div class="ans-actions"><button class="btn ghost" data-o="show">Show model answer</button></div><div class="mk-model" style="display:none"><p>${esc(p.open.a)}</p><div class="ans-actions"><span>Rate yourself:</span><button class="chip" data-r="1">✓ got it (7.5)</button><button class="chip" data-r=".5">~ partly (3.75)</button><button class="chip" data-r="0">✗ missed (0)</button></div></div></div>`:''}`).join('');
      clearInterval(timer); left = Math.round(pts)*60; timer = setInterval(tick, 1000); tick(); best();
    };
    const grade = ()=>{
      if(graded) return; graded = true; clearInterval(timer);
      let got = 0, max = 0;
      parts.forEach((p,pi)=>{
        const st = ls(p.key, {});
        p.mc.forEach((m,qi)=>{
          const box = body.querySelector(`.mk-card[data-p="${pi}"][data-q="${qi}"]`); let right = 0;
          box.querySelectorAll('.mk-st').forEach(el=>{ const x = m.s[+el.dataset.k]; const ok = el.querySelector('input').checked===x[1]; if(ok) right++; el.classList.add(ok?'ok':'bad', x[1]?'is-true':'is-false'); el.querySelector('input').disabled = true; el.querySelector('.mk-why').innerHTML = `<b>${x[1]?'True':'False'}.</b> ${esc(x[2])}`; });
          const pts = p.P[right]; got += pts; max += 2.5; st[m.q] = pts/2.5;
          const fb = box.querySelector('.ans-feedback'); fb.className = 'ans-feedback show '+(right===5?'good':'warn'); fb.innerHTML = `<b>${right}/5 → ${fmt(pts)} of 2.5 points.</b>`;
        });
        lsSet(p.key, st);
      });
      const pct = Math.round(got/max*100); const b = ls('mkcb-mock-best', null); if(b==null || pct>b) lsSet('mkcb-mock-best', pct);
      div.querySelector('.mkcb-live').textContent = `MC result: ${fmt(got)} / ${fmt(max)} points (${pct}%) — now rate the open questions`;
      body.querySelectorAll('.mk-open .mk-model').forEach(m=>m.style.display = '');
      best(); window.scrollTo({top:0, behavior:'smooth'});
    };
    body.addEventListener('click', ev=>{
      const o = ev.target.closest('[data-o="show"]'); if(o){ o.closest('.mk-open').querySelector('.mk-model').style.display = ''; return; }
      const r = ev.target.closest('[data-r]'); if(r){ r.parentElement.querySelectorAll('[data-r]').forEach(c=>c.classList.toggle('active', c===r)); }
    });
    div.querySelector('.mkcb-new').addEventListener('click', start);
    div.querySelector('.mkcb-grade').addEventListener('click', grade);
    start();
  });
}

/* ---------- study plan: mock exam before 16 Dec, Case Recognizer early ---------- */
const __planItemPoolCB = planItemPool;
planItemPool = function(){
  const items = __planItemPoolCB();
  const b = ls('mkcb-mock-best', null);
  items.push({subj:'mk', label:'Mock Exam 16 Dec — Marketing + Consumer Behaviour (MC + open)', page:'mkcb-mock', weight:b==null ? .9 : Math.max(.2, 1-b/100), size:20, large:true, prio:b==null || b<70});
  const c = ls('cb-cases-stats', null);
  items.push({subj:'cb', label:'Case Recognizer — heuristics, biases, decision types', page:'cb-cases', weight:c && c.n ? Math.max(.2, 1-c.ok/c.n) : .9, size:8, large:false, prio:false});
  return items;
};
const __planScheduleCB = planSchedule;
planSchedule = function(item, idx){
  if(item.page==='mkcb-mock'){ const h = planDaysLeft('mk'); return Array.from(new Set([Math.max(1,h-5), Math.max(1,h-1)])); }
  if(item.page==='cb-cases'){ const h = planDaysLeft('cb'); return Array.from(new Set([Math.max(1,h-30), Math.max(1,h-14), Math.max(1,h-4)])); }
  return __planScheduleCB(item, idx);
};
