/* ============================================================ DECISION THEORY & INVESTMENTS (sixth subject) ============================================================ */
// Loaded after app_mk.js. Exam tool (past exams interactive, random drills per task type, a generated 90-point mock exam,
// the formula sheet) plus one content page per class (DT_TOPICS: summary, quiz, optional flashcards). Every task comes from one generator (DT_GEN), so past exams,
// drills and mock exams share the same checking and the same step-by-step solutions.
const DT_NAV = [
  {sec:'Overview', items:[{id:'dt-home', label:'DTI Home & Exam Info', icon:'home'}]},
  {sec:'Lectures', items:DT_TOPICS.map(t=>({id:t.id, label:`${t.date}. ${t.title}`, icon:'summary'}))},
  {sec:'Exam Prep — newest first', items:DT_EXAMS.map(e=>({id:'dt-'+e.id, label:e.title+(e.latest?' · newest':''), icon:'doc'}))},
  {sec:'Practice', items:[
    {id:'dt-drill', label:'Task Drills (fresh numbers)', icon:'logic'},
    {id:'dt-mock', label:'Mock Exam (90 P, 90 min)', icon:'timer'},
    {id:'dt-cheat', label:'Formula Sheet (A4, printable)', icon:'cheat'}
  ]}
];
function dtDaysLeft(){ return Math.max(0, Math.ceil((PLAN_EXAM_DT - new Date().setHours(0,0,0,0))/86400000)); }

/* ---------- numbers ---------- */
function dtR(x, d){ const f = Math.pow(10, d); return Math.round(x*f + (x>=0?1e-9:-1e-9))/f; }
function dtF(x, d=2){ const v = dtR(x, d); return (Object.is(v,-0)?0:v).toLocaleString('en-US', {minimumFractionDigits:d, maximumFractionDigits:d}); } // text: 1,234.56
function dtT(x, d=2){ return dtF(x, d).replace(/,/g, '{,}'); }                                                                            // TeX: 1{,}234.56
function dtP(x, d=2){ return dtF(x*100, d); }                                                                                              // 0.0433 → "4.33"
function dtPT(x, d=2){ return dtP(x, d)+'\\%'; }
function dtNum(v){ // accepts 8,422.96 · 8422,96 · 4.33% · USD 1,500 · €773
  let t = String(v==null?'':v).trim().replace(/[\s€$%]|usd|eur|years?|months?/gi, '').replace(/−/g, '-');
  if(t==='') return NaN;
  if(t.includes(',') && t.includes('.')) t = t.replace(/,/g, '');
  else if(/^-?\d{1,3}(,\d{3})+$/.test(t)) t = t.replace(/,/g, '');
  else t = t.replace(',', '.');
  return Number(t);
}
function dtRnd(a, b, step=1){ const n = Math.round((b-a)/step); return dtR(a + step*Math.floor(Math.random()*(n+1)), 6); }
function dtPick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
const DT_MATS = [1/12, .25, .5, 1, 2, 3, 4, 5, 7, 10, 20];
const DT_MAT_LABELS = ['1 Mo','3 Mo','6 Mo','1 Yr','2 Yr','3 Yr','4 Yr','5 Yr','7 Yr','10 Yr','20 Yr'];
// quoted spot rate (in %) for maturity t; missing maturities = average of the two neighbours, as every exam instructs
function dtSpot(tab, t){
  for(let i=0;i<DT_MATS.length;i++) if(Math.abs(DT_MATS[i]-t)<1e-9) return {r:tab[i], how:`${DT_MAT_LABELS[i]} quote`};
  for(let i=0;i<DT_MATS.length-1;i++) if(DT_MATS[i]<t && t<DT_MATS[i+1]) return {r:(tab[i]+tab[i+1])/2, how:`average of ${DT_MAT_LABELS[i]} and ${DT_MAT_LABELS[i+1]}`};
  return {r:tab[tab.length-1], how:'20 Yr quote'};
}
function dtTable(tab){ return `[[tab:Spot rates today (in %)\n\\text{Date}|${DT_MAT_LABELS.map(l=>`\\text{${l}}`).join('|')}\n\\text{Today}|${tab.map(r=>r.toFixed(2)).join('|')}]]`; }
function dtYears(t){ return t===1 ? 'one year' : t===0.5 ? 'six months' : `${t} years`; }
const DT_WORD = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten'};
function dtCurWord(c){ return c==='€' ? '€' : 'USD '; }
function dtMoney(x, c='USD', d=0){ return (x<0?'−':'') + (c==='€' ? '€' : 'USD ') + dtF(Math.abs(x), d); }
const dtLetters = 'abcdefgh';
// shuffle MC options but keep "None of the above"/"Cannot be determined"/"I need more data" last
function dtShuffleOpts(opts, correct){
  const fixed = opts.map((o,i)=>/none of|cannot|need more|indifferent/i.test(o) ? i : -1).filter(i=>i>=0);
  const free = shuffle(opts.map((_,i)=>i).filter(i=>!fixed.includes(i)));
  const order = free.concat(fixed);
  return {opts:order.map(i=>opts[i]), correct:order.indexOf(correct)};
}

/* ============================================================ GENERATORS ============================================================ */
// DT_GEN[type](p) → question {type, title, text, parts:[{id,label,pts,q,opts?,correct?,fields?,grid?,self?,sol,flag?}]}.
// p == null → random parameters; the returned question keeps them in q.p, so mock exams can be stored and rebuilt.
const DT_GEN = {};

DT_GEN.pvadd = function(p){
  if(!p){
    const a = dtRnd(200, 900, 50)*(Math.random()<.5?1:-1), b = -Math.sign(a)*dtRnd(100, 600, 50);
    const da = dtRnd(2, 6), db = dtRnd(2, 6);
    const c = a+b, opts = [a+b, a-b, -(a+b), Math.abs(a)+Math.abs(b)].filter((v,i,arr)=>arr.indexOf(v)===i);
    p = {a, b, da, db, names:['A','B'], opts:opts.map(v=>dtMoney(v)).concat(['None of the above']), correct:0};
  }
  const [A,B] = p.names, c = p.a+p.b;
  return {type:'pvadd', p, title:'Adding present values',
    text:R`If the present value of cash flow ${A} is ${dtMoney(p.a)}, and the present value of cash flow ${B} is ${dtMoney(p.b)}, and if the duration of cash flow ${A} is ${p.da} years while the duration of cash flow ${B} is ${p.db} years, then the present value of the combined cash flow ${A}+${B} is:`,
    parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts:p.opts, correct:p.correct,
      sol:R`Present values are already in today’s money, so they are **additive**: $PV_{${A}+${B}} = ${dtT(p.a,0)} + (${dtT(p.b,0)}) = ${dtT(c,0)}$. The durations are a distractor — duration measures timing/interest-rate sensitivity, it plays no role when adding PVs. **Answer: ${dtMoney(c)}.**`}]};
};

DT_GEN.perp = function(p){
  if(!p){
    const month = Math.random()<.6;
    const C = month ? dtRnd(5000, 20000, 1000) : dtRnd(50000, 300000, 10000);
    const nom = month ? dtPick([.036,.042,.048,.054,.06,.066,.072]) : dtRnd(.02, .06, .005);
    const pv = C/(month ? nom/12 : nom);
    const opts = [pv, pv*10, month ? C/nom : pv/10];
    p = {C, per:month?'month':'year', nom, opts:opts.map(v=>dtMoney(v, 'USD', 0)).concat(['None of the above']), correct:0};
  }
  const m = p.per==='month' ? 12 : 1, r = p.nom/m, pv = p.C/r;
  return {type:'perp', p, title:'Retirement perpetuity',
    text:R`You would like to have enough money saved to receive ${dtMoney(p.C)} per ${p.per} forever after retirement so that you and your family can lead a good life. How much would you need to save in your retirement fund to achieve this goal? Assume that the perpetuity payments start one ${p.per} from the date of your retirement. The interest rate is ${dtP(p.nom, p.nom*1000%1?2:1)}% nominal annual with ${p.per==='month'?'monthly':'annual'} compounding.`,
    parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts:p.opts, correct:p.correct, fields:[{l:'Amount needed today', u:'USD', ans:pv}],
      sol:(m===12 ? R`Payments are monthly, so use the **monthly** rate: $r_m = \frac{${dtT(p.nom,4)}}{12} = ${dtT(r,4)}$.` : R`Annual payments, annual compounding: $r = ${dtT(r,4)}$.`) +
        R` A perpetuity whose first payment comes one period from now is worth $PV = \frac{C}{r} = \frac{${dtT(p.C,0)}}{${dtT(r,4)}} = ${dtT(pv,2)}$. **Answer: ${dtMoney(pv, 'USD', 2)}.**` +
        (m===12 ? R` Trap: dividing by the annual rate gives $${dtT(p.C/p.nom,2)}$ — that would be an *annual* payment of ${dtMoney(p.C)}.` : '')}]};
};

DT_GEN.fwd = function(p){
  if(!p){
    let r = dtRnd(.4, 4.2, .01); const tab = DT_MATS.map((m,i)=>{ if(i) r += dtRnd(-.02, .18, .01); return dtR(r, 2); });
    const a = dtPick([1,2,3,4]), len = dtPick([1,2,3,4].filter(l=>a+l<=7 && a+l!==6 || a+l===6));
    p = {tab, a, len, firm:dtPick(['Tesla','Lufthansa','Siemens','BMW','SAP','Airbus']), b2:dtPick(['cont','ann','q'])};
  }
  const a = p.a, b = p.a+p.len, sa = dtSpot(p.tab, a), sb = dtSpot(p.tab, b), ra = sa.r/100, rb = sb.r/100;
  const fSA = 2*(Math.pow(Math.pow(1+rb/2, 2*b)/Math.pow(1+ra/2, 2*a), 1/(2*p.len))-1);
  const nm = {cont:'continuous', ann:'annual', q:'quarterly'}[p.b2];
  let f2, sol2;
  if(p.b2==='cont'){ f2 = (rb*b - ra*a)/p.len;
    sol2 = R`With continuous compounding the exponents simply add up: $e^{r_{${b}}\cdot ${b}} = e^{r_{${a}}\cdot ${a}}\, e^{f\cdot ${p.len}}$, so $f = \frac{r_{${b}}\cdot ${b} - r_{${a}}\cdot ${a}}{${p.len}} = \frac{${dtT(rb,5)}\cdot ${b} - ${dtT(ra,5)}\cdot ${a}}{${p.len}} = ${dtT(f2*100,4)}\%$. **≈ ${dtF(f2*100,4)}% nominal annual with continuous compounding.**`; }
  else if(p.b2==='ann'){ f2 = Math.pow(Math.pow(1+rb, b)/Math.pow(1+ra, a), 1/p.len)-1;
    sol2 = R`Now the quotes are effective annual rates: $(1+r_{${b}})^{${b}} = (1+r_{${a}})^{${a}}(1+f)^{${p.len}}$, so $f = \left(\frac{${dtT(1+rb,5)}^{${b}}}{${dtT(1+ra,5)}^{${a}}}\right)^{1/${p.len}} - 1 = ${dtT(f2*100,4)}\%$. **≈ ${dtF(f2*100,4)}% nominal annual with annual compounding.**`; }
  else { f2 = 4*(Math.pow(Math.pow(1+rb/4, 4*b)/Math.pow(1+ra/4, 4*a), 1/(4*p.len))-1);
    sol2 = R`Same no-arbitrage idea with quarters: $\left(1+\frac{r_{${b}}}{4}\right)^{4\cdot${b}} = \left(1+\frac{r_{${a}}}{4}\right)^{4\cdot${a}}\left(1+\frac{f}{4}\right)^{4\cdot${p.len}}$, so $f = 4\left[\left(\frac{(1+${dtT(rb/4,6)})^{${4*b}}}{(1+${dtT(ra/4,6)})^{${4*a}}}\right)^{1/${4*p.len}} - 1\right] = ${dtT(f2*100,4)}\%$. **≈ ${dtF(f2*100,4)}% nominal annual with quarterly compounding.**`; }
  const used = R`Rates used: $r_{${a}} = ${sa.r.toFixed(3).replace(/0$/,'')}\%$ (${sa.how}), $r_{${b}} = ${sb.r.toFixed(3).replace(/0$/,'')}\%$ (${sb.how}).`;
  return {type:'fwd', p, title:'Forward rate from the spot curve',
    text:R`Current spot rates expressed in percent as nominal annual with semiannual compounding are given in the following table:

${dtTable(p.tab)}

You are the CFO of ${p.firm} and would like to sign a contract **today** to borrow money in **${DT_WORD[a]} year${a>1?'s':''} from now** for **${DT_WORD[p.len]} year${p.len>1?'s':''}**. If some rates are missing for some maturities use the averages (e.g. for the 6-year maturity use the average of the 5- and 7-year rates).`,
    parts:[
      {id:'a', label:'a) Forward rate', pts:3, q:'What interest rate do you expect that you will have to pay for this loan? In which units is your answer expressed (compounding frequency)?', fields:[{l:'Forward rate', u:'%', ans:fSA*100, tol:.006}],
        sol:used + R` No arbitrage: borrowing for ${b} years must cost the same as ${a} years plus the forward loan for ${p.len}.

$$\left(1+\tfrac{r_{${b}}}{2}\right)^{2\cdot ${b}} = \left(1+\tfrac{r_{${a}}}{2}\right)^{2\cdot ${a}}\left(1+\tfrac{f}{2}\right)^{2\cdot ${p.len}}$$

$$f = 2\left[\left(\frac{${dtT(1+rb/2,6)}^{${2*b}}}{${dtT(1+ra/2,6)}^{${2*a}}}\right)^{1/${2*p.len}} - 1\right] = ${dtT(fSA*100,4)}\%$$

**≈ ${dtF(fSA*100,4)}% nominal annual with semiannual compounding** — always state the units, they earn points.`},
      {id:'b', label:`b) ${nm[0].toUpperCase()+nm.slice(1)} quotes`, pts:3, q:`Solve the problem again, but now as if the rates in the table were nominal annual with ${nm} compounding.`, fields:[{l:'Forward rate', u:'%', ans:f2*100, tol:.006}], sol:sol2}
    ]};
};

DT_GEN.mort = function(p){
  if(!p){
    const P = dtRnd(200000, 2000000, 50000), nom = dtRnd(.03, .066, .003), n = dtPick([240,300,360]);
    const r = nom/12, pay = P*r/(1-Math.pow(1+r,-n));
    p = {P, nom, n, name:dtPick(['Sarah','John','Alex','Mia','Jonas']), cur:dtPick(['USD','€']), opts:[pay, P/n*(1+nom*n/24), pay*1.06].map(v=>dtMoney(v, 'USD', 2)).concat(['None of the above']), correct:0};
  }
  const cur = p.cur||'USD', r = p.perMonth!=null ? p.perMonth : p.nom/12;
  if(p.pay){ // number of payments (2019)
    const k = p.P/p.pay, n = Math.log(1/(1-k*r))/Math.log(1+r);
    return {type:'mort', p, title:'Mortgage — number of payments',
      text:R`${p.name} has taken a ${dtMoney(p.P, cur)} mortgage on the house at an interest rate of ${dtF(r*100, 2)}% per month. The mortgage is paid back in equal monthly payments of ${dtMoney(p.pay, cur)} each. How many months are needed to pay it back?`,
      parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts:p.opts, correct:p.correct, fields:[{l:'Months', u:'', ans:n, tol:1}],
        sol:R`Annuity: $P = \text{PMT}\cdot\frac{1-(1+r)^{-n}}{r}$ → solve for $n$: $n = \frac{\ln\left(\frac{1}{1 - \frac{P}{\text{PMT}}\, r}\right)}{\ln(1+r)} = \frac{\ln\left(\frac{1}{1-${dtT(k,0)}\cdot ${dtT(r,4)}}\right)}{\ln(${dtT(1+r,4)})} = ${dtT(n,1)}$ → **≈ ${Math.round(n)} months.**`}]};
  }
  const pay = p.P*r/(1-Math.pow(1+r,-p.n));
  const rateTxt = p.perMonth!=null ? `${dtF(r*100, 2)}% per month` : `${dtF(p.nom*100, p.nom*1000%1>1e-6?2:1)}% per year nominal annual with monthly compounding`;
  return {type:'mort', p, title:'Mortgage payment (annuity)',
    text:R`${p.name} has taken a ${dtMoney(p.P, cur)} mortgage on the house at an interest rate of ${rateTxt}. If the mortgage calls for ${p.n} equal monthly payments, what is the amount of each payment? The first payment is due one month from now.`,
    parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts:p.opts, correct:p.correct, fields:[{l:'Monthly payment', u:cur, ans:pay}],
      sol:(p.perMonth!=null ? R`The rate is already per month: $r = ${dtT(r,4)}$.` : R`Monthly rate: $r = \frac{${dtT(p.nom,4)}}{12} = ${dtT(r,6)}$.`) +
        R` Ordinary annuity (first payment in one month), $n = ${p.n}$:

$$\text{PMT} = P\cdot\frac{r}{1-(1+r)^{-n}} = ${dtT(p.P,0)}\cdot\frac{${dtT(r,6)}}{1-(${dtT(1+r,6)})^{-${p.n}}} = ${dtT(pay,2)}$$

**Answer: ${dtMoney(pay, cur, 2)} per month.**`}]};
};

DT_GEN.bond = function(p){
  if(!p){
    let r = dtRnd(.4, 4.2, .01); const tab = DT_MATS.map((m,i)=>{ if(i) r += dtRnd(-.02, .16, .01); return dtR(r, 2); });
    const freq = dtPick([1,2]), T = freq===1 ? dtPick([3,4]) : dtPick([2,2.5,3]);
    const F = dtPick([1000,1300,5000,10000]), c = dtPick([.02,.025,.03,.035,.04,.05]);
    p = {tab, F, c, T, freq};
  }
  const n = Math.round(p.T*p.freq), C = p.F*p.c/p.freq, k = n-1;
  const rows = []; let pvK = 0, price = 0;
  for(let j=1;j<=n;j++){
    const t = j/p.freq, s = dtSpot(p.tab, t), cf = C + (j===n ? p.F : 0), df = Math.pow(1+s.r/200, 2*t), pv = cf/df;
    rows.push({t, s, cf, df, pv}); if(j<n) pvK += pv; price += pv;
  }
  const last = rows[n-1];
  const tl = `[[tab:Cash flows of the bond\nt|0|${rows.map(x=>x.t).join('|')}\nCF|0|${rows.map(x=>dtT(x.cf, x.cf%1?2:0)).join('|')}]]`;
  const line = x=>R`- $t=${x.t}$: $r = ${dtT(x.s.r,3)}\%$ (${x.s.how}) → $\frac{${dtT(x.cf,2)}}{(1+${dtT(x.s.r/200,6)})^{${2*x.t}}} = ${dtT(x.pv,2)}$`;
  return {type:'bond', p, title:'Government bond priced off the spot curve',
    text:R`A US government bond with a face value of ${dtMoney(p.F)} has a coupon rate of ${dtF(p.c*100, p.c*1000%10?1:0)}% with **${p.freq===1?'annual':'semiannual'} coupons**, and matures in **${p.T===2.5?'two years and six months':p.T%1?p.T+' years':DT_WORD[p.T]+' years'}** from now. The first coupon is due in ${p.freq===1?'one year':'six months'} from now. The rates below are nominal annual rates with semiannual compounding, as usual on the US Treasury website.

${dtTable(p.tab)}

If some rates are missing for some maturities use the averages (e.g. for the 1.5-year maturity use the average of the 1- and 2-year rates).`,
    parts:[
      {id:'a', label:'a) Diagram', pts:2, q:'Draw the diagram representation of the cash flow stream offered by this bond.', self:true,
        sol:`Coupon = ${dtF(p.c*100,1)}% × ${dtF(p.F,0)}${p.freq===2?' / 2':''} = ${dtF(C,2)} per ${p.freq===2?'half-year':'year'}; the last date pays coupon + face value.\n\n${tl}`},
      {id:'b', label:`b) PV of the first ${k} coupons`, pts:4, q:`What is the present value of the first ${DT_WORD[k]||k} coupons?`, fields:[{l:`PV of ${k} coupons`, u:'USD', ans:pvK}],
        sol:R`Discount every coupon with the spot rate of **its own** date; semiannual quotes → $DF_t = (1+\tfrac{r_t}{2})^{2t}$.

${rows.slice(0,k).map(line).join('\n')}

**Sum = ${dtF(pvK,2)}**`},
      {id:'c', label:'c) PV of the final payment', pts:3, q:'What is the present value of the payment that this bond gives at the date of its maturity (the last payment)?', fields:[{l:'PV of last payment', u:'USD', ans:last.pv}],
        sol:R`The last payment is coupon + face value $= ${dtT(last.cf,2)}$ at $t = ${last.t}$.

${line(last)}

**Answer: ${dtF(last.pv,2)}**`},
      {id:'d', label:'d) Market price', pts:2, q:'Estimate the market price of this bond.', fields:[{l:'Price', u:'USD', ans:price}],
        sol:R`Price = PV of all cash flows $= ${dtT(pvK,2)} + ${dtT(last.pv,2)} = ${dtT(price,2)}$. **≈ ${dtMoney(price,'USD',2)}** (${price<p.F?'below par: the coupon is lower than the spot rates':'above par: the coupon is higher than the spot rates'}).`}
    ]};
};

// project with an explicit start and a perpetuity tail: p.cf = {year: CF} for the explicit years, p.tail = {s, cf, g} → CF_s = cf, then × (1+g) forever
function dtProjCF(p, t){ if(t>=p.tail.s) return p.tail.cf*Math.pow(1+p.tail.g, t-p.tail.s); return p.cf[t]||0; }
function dtProjSeg(p, a, b){ // PV of years a…b (b == null → till eternity)
  const r = p.r; let pv = 0;
  const end = b==null ? p.tail.s-1 : b;
  for(let t=a;t<=end;t++) pv += dtProjCF(p,t)/Math.pow(1+r,t);
  if(b==null){ const start = Math.max(a, p.tail.s); const cf = dtProjCF(p, start); pv += cf/(r-p.tail.g)/Math.pow(1+r, start-1); }
  return pv;
}
DT_GEN.proj = function(p){
  if(!p){ // FT 2025 pattern: zeros and a fixed amount in years 1–5, doubling from year 6, then a growing perpetuity
    const x = dtPick([50,100,150,200]), N = dtPick([11,12,13]), g = dtPick([.02,.03,.04,.05]), r = dtPick([.06,.07,.08,.09]);
    const cf = {1:0, 2:x, 3:0, 4:x, 5:0, 6:x}; for(let t=7;t<=N;t++) cf[t] = cf[t-1]*2;
    const tail = {s:N+1, cf:cf[N]*2, g};
    const pp = {r, cf, tail, segs:[[1,5],[6,N],[N+1,null]], name:dtPick(['AAA','CCC','DDD','XYZ'])};
    const inflow = dtProjSeg(pp,1,5)+dtProjSeg(pp,6,N)+dtProjSeg(pp,N+1,null);
    pp.I = dtR(inflow*dtPick([.7,.8,.9,1.1,1.25]), -3);
    p = pp;
  }
  const r = p.r, segs = p.segs, pvs = segs.map(([a,b])=>dtProjSeg(p,a,b)), tot = pvs.reduce((s,v)=>s+v,0), npv = tot - p.I;
  const lastT = p.tail.s + 2;
  const listing = p.listing || (()=>{
    const out = []; const N = p.tail.s-1;
    for(let t=1;t<=Math.min(7,N);t++) out.push(`Year ${t}: ${dtMoney(dtProjCF(p,t),'USD',dtProjCF(p,t)%1?2:0)}${t===7&&p.cf[6]?' (100% more than in year 6)':''}`);
    if(N>7) out.push('… increases at the rate of 100% each year …', `Year ${N-1}: ${dtMoney(dtProjCF(p,N-1))}`, `Year ${N}: ${dtMoney(dtProjCF(p,N))}`);
    out.push(`Year ${N+1}: ${dtMoney(dtProjCF(p,N+1))}`, `Year ${N+2}: ${dtMoney(dtProjCF(p,N+2),'USD',2)} (${dtF(p.tail.g*100,0)}% ${p.tail.g<0?'less':'more'} than in year ${N+1})`, `… and then continues to ${p.tail.g<0?'decrease':'grow'} at the rate of ${dtF(Math.abs(p.tail.g)*100,0)}% till eternity.`);
    return out.join('\n');
  })();
  const yrs = Array.from({length:lastT+1}, (_,t)=>t);
  const tl = `[[tab:Timeline (t = 0 is today)\nt|${yrs.slice(0,Math.ceil(yrs.length/2)).join('|')}\nCF|${yrs.slice(0,Math.ceil(yrs.length/2)).map(t=>t?dtT(dtProjCF(p,t),dtProjCF(p,t)%1?2:0):'-'+dtT(p.I,p.I%1?2:0)).join('|')}]]\n\n[[tab:continued\nt|${yrs.slice(Math.ceil(yrs.length/2)).join('|')}|\\dots\nCF|${yrs.slice(Math.ceil(yrs.length/2)).map(t=>dtT(dtProjCF(p,t),dtProjCF(p,t)%1?2:0)).join('|')}|\\to\\infty]]`;
  const segSol = ([a,b], i)=>{
    if(b!=null){
      const terms = []; for(let t=a;t<=b;t++){ const cf = dtProjCF(p,t); if(cf) terms.push(R`\frac{${dtT(cf,cf%1?2:0)}}{${dtT(1+r,2)}^{${t}}}`); }
      return R`$PV_{${a}\text{–}${b}} = ${terms.join(' + ')||'0'} = ${dtT(pvs[i],2)}$` + (p.tail.g===-.05||b-a>4 && terms.length>4 ? '' : '');
    }
    const s0 = Math.max(a, p.tail.s), pre = []; for(let t=a;t<s0;t++) pre.push(t);
    const cfs = dtProjCF(p, s0), at = cfs/(r-p.tail.g);
    return (pre.length ? R`Year${pre.length>1?'s':''} ${pre.join(', ')} separately: ${pre.map(t=>R`$\frac{${dtT(dtProjCF(p,t),2)}}{${dtT(1+r,2)}^{${t}}} = ${dtT(dtProjCF(p,t)/Math.pow(1+r,t),2)}$`).join(', ')}. ` : '') +
      R`From year ${s0} on: ${p.tail.g===0?'level':'growing'} perpetuity with first payment $C_{${s0}} = ${dtT(cfs,2)}$, $g = ${dtT(p.tail.g*100,0)}\%$:

$$V_{${s0-1}} = \frac{C_{${s0}}}{r-g} = \frac{${dtT(cfs,2)}}{${dtT(r,3)} - (${dtT(p.tail.g,2)})} = ${dtT(at,2)}$$

The formula values the stream **one year before its first payment** (year ${s0-1}), so discount ${s0-1} years: $\frac{${dtT(at,2)}}{${dtT(1+r,2)}^{${s0-1}}} = ${dtT(at/Math.pow(1+r,s0-1),2)}$.` +
      (pre.length ? R` Together: **${dtF(pvs[i],2)}**` : R` **= ${dtF(pvs[i],2)}**`);
  };
  const parts = [
    {id:'a', label:'a) Diagram', pts:2, q:'Draw the diagram representation of the whole cash flow stream (including the investment) on paper, then enter the cash flow of every year — the investment at t = 0 with a minus sign.', sol:tl,
     grid:(()=>{ const ts = Array.from({length:p.tail.s+1}, (_,t)=>t); const ans = ts.map(t=>t ? dtProjCF(p,t) : -p.I);
       return {cols:ts.map(t=>`t = ${t}`), rows:['CF'], ans:[ans], tol:[ans.map(a=>Math.max(.5, Math.abs(a)*.001))], u:'USD'}; })()}
  ];
  segs.forEach(([a,b], i)=>{
    const L = dtLetters[i+1];
    const q = b==null ? `What is the present value of the cash flows received from year ${a} till eternity, including the cash flow received in year ${a}?`
      : i===0 ? `What is the present value of the first ${DT_WORD[b]||b} years of the project excluding the initial investment (years ${a}–${b})?`
      : `What is the present value of the ${b-a+1} cash flows received from year ${a} till year ${b} (both included)?`;
    parts.push({id:L, label:`${L}) PV years ${a}–${b==null?'∞':b}`, pts:0, q, fields:[{l:`PV ${a}–${b==null?'∞':b}`, u:'USD', ans:pvs[i]}], sol:segSol([a,b], i)});
  });
  const eL = dtLetters[segs.length+1];
  parts.push({id:eL, label:`${eL}) NPV`, pts:2, q:`What is the total net present value of project ${p.name} (including the initial investment)? Should you invest?`, fields:[{l:'NPV', u:'USD', ans:npv}],
    sol:R`$NPV = -${dtT(p.I,2)} + ${pvs.map(v=>dtT(v,2)).join(' + ')} = ${dtT(npv,2)}$. **${Math.abs(npv)<1 ? 'NPV = 0: the project earns exactly the cost of capital.' : npv>0 ? 'NPV > 0 → invest.' : 'NPV < 0 → do not invest.'}**`});
  if(p.irr) parts.push({id:dtLetters[segs.length+2], label:`${dtLetters[segs.length+2]}) IRR`, pts:2, q:'What is the approximate internal rate of return of this project?', fields:[{l:'IRR', u:'%', ans:r*100, tol:.05}],
    sol:R`The IRR is the rate at which $NPV = 0$. At $r = ${dtT(r*100,0)}\%$ the NPV is ${dtF(npv,2)} ≈ 0, so **IRR ≈ ${dtF(r*100,0)}%**.`});
  return {type:'proj', p, title:`Project ${p.name} — irregular cash flows`,
    text:R`If you invest ${dtMoney(p.I,'USD',p.I%1?2:0)} today (year 0) into project ${p.name} you are offered the following cash flow stream:

${listing.split('\n').map(l=>'- '+l).join('\n')}

Opportunity cost of capital is ${dtF(r*100, r*1000%10?1:0)}% nominal annual with annual compounding.`, parts};
};

DT_GEN.fisher = function(p){
  if(!p) p = {real:dtRnd(.01,.2,.01), inf:dtRnd(.01,.04,.005)};
  const nom = (1+p.real)*(1+p.inf)-1, d = 365*(Math.pow(1+nom, 1/365)-1);
  return {type:'rates', p, title:'Real vs nominal rate (Fisher)',
    text:R`The real rate of interest is ${dtP(p.real,p.real*1000%10?1:0)}% per year and the inflation is ${dtP(p.inf,p.inf*1000%10?1:0)}% per year (both expressed with annual compounding).`,
    parts:[
      {id:'a', label:'a) Nominal rate', pts:2, q:'What is the nominal rate of interest expressed as nominal annual with annual compounding?', fields:[{l:'Nominal rate', u:'%', ans:nom*100, tol:.006}],
        sol:R`Fisher: $1+r_{nom} = (1+r_{real})(1+\pi) = ${dtT(1+p.real,3)}\cdot${dtT(1+p.inf,3)} = ${dtT(1+nom,5)}$ → **$r_{nom} = ${dtT(nom*100,3)}\%$** (not simply ${dtP(p.real+p.inf,1)}% — the cross term counts).`},
      {id:'b', label:'b) Daily compounding', pts:2, q:'How much would that nominal rate be if expressed with daily compounding?', fields:[{l:'Nominal (daily)', u:'%', ans:d*100, tol:.006}],
        sol:R`The effective annual rate must stay $${dtT(1+nom,5)}$: $\left(1+\frac{j}{365}\right)^{365} = ${dtT(1+nom,5)}$ → $j = 365\left[${dtT(1+nom,5)}^{1/365} - 1\right] = ${dtT(d*100,4)}\%$. **≈ ${dtF(d*100,4)}% nominal annual with daily compounding** — lower than ${dtF(nom*100,3)}% because interest compounds more often.`}
    ]};
};

DT_GEN.port3 = function(p){
  if(!p){
    const names = shuffle(['Nvidia','Apple','Microsoft','Alphabet','Amazon','Meta']).slice(0,3);
    p = {names, V:names.map(()=>dtRnd(600, 4800, 100)), ER:names.map(()=>dtRnd(.04,.25,.01)), SD:names.map(()=>dtRnd(.15,.40,.01)), rho:[dtRnd(.1,.8,.05), dtRnd(.1,.8,.05), dtRnd(.1,.8,.05)]};
  }
  const tot = p.V.reduce((a,b)=>a+b,0), w = p.V.map(v=>v/tot), er = w.reduce((s,x,i)=>s+x*p.ER[i],0);
  const pairs = [[0,1],[0,2],[1,2]];
  const varTerms = w.map((x,i)=>x*x*p.SD[i]*p.SD[i]), covTerms = pairs.map(([i,j],k)=>2*w[i]*w[j]*p.SD[i]*p.SD[j]*p.rho[k]);
  const v = varTerms.concat(covTerms).reduce((a,b)=>a+b,0), sd = Math.sqrt(v);
  const N = p.names;
  const tab = `[[tab:Given\n|\\text{${N[0]}}|\\text{${N[1]}}|\\text{${N[2]}}\n\\text{Value of the firm (bn)}|${p.V.map(x=>dtT(x,x%1?1:0)).join('|')}\n\\text{Expected return}|${p.ER.map(x=>dtPT(x,0)).join('|')}\n\\text{Std. deviation}|${p.SD.map(x=>dtPT(x,0)).join('|')}]]`;
  const parts = [
    {id:'a', label:'a) Value weights', pts:3, q:'How much of your money (in % of your total investment) do you need to invest into each of these three stocks to make your portfolio value weighted?', fields:N.map((n,i)=>({l:n, u:'%', ans:w[i]*100, tol:.06})),
      sol:R`Weight = firm value / total value, total $= ${p.V.map(x=>dtT(x,x%1?1:0)).join(' + ')} = ${dtT(tot,tot%1?1:0)}$:
${N.map((n,i)=>R`- ${n}: $\frac{${dtT(p.V[i],p.V[i]%1?1:0)}}{${dtT(tot,tot%1?1:0)}} = ${dtPT(w[i],2)}$`).join('\n')}`},
    {id:'b', label:'b) Expected return', pts:3, q:'What is the expected return of this value-weighted portfolio?', fields:[{l:'E(Rp)', u:'%', ans:er*100, tol:.06}],
      sol:R`$E(R_p) = \sum w_i E(R_i) = ${w.map((x,i)=>R`${dtT(x,4)}\cdot${dtT(p.ER[i],2)}`).join(' + ')} = ${dtPT(er,2)}$`},
    {id:'c', label:'c) Standard deviation', pts:5, q:'What is the standard deviation of this value-weighted portfolio?', fields:[{l:'σp', u:'%', ans:sd*100, tol:.08}],
      sol:R`$$\sigma_p^2 = \sum_i w_i^2\sigma_i^2 + 2\sum_{i<j} w_i w_j \sigma_i\sigma_j\rho_{ij}$$
${N.map((n,i)=>R`- $w^2\sigma^2$ ${n}: $${dtT(w[i],4)}^2\cdot${dtT(p.SD[i],2)}^2 = ${dtT(varTerms[i],6)}$`).join('\n')}
${pairs.map(([i,j],k)=>R`- ${N[i]}–${N[j]}: $2\cdot${dtT(w[i],4)}\cdot${dtT(w[j],4)}\cdot${dtT(p.SD[i],2)}\cdot${dtT(p.SD[j],2)}\cdot${dtT(p.rho[k],2)} = ${dtT(covTerms[k],6)}$`).join('\n')}

$\sigma_p^2 = ${dtT(v,6)}$ → **$\sigma_p = ${dtPT(sd,2)}$** — below the weighted average of the single σ’s (${dtP(w.reduce((s,x,i)=>s+x*p.SD[i],0),2)}%) because the correlations are below 1: diversification.`}
  ];
  if(p.d){
    const better = N.filter((n,i)=>p.ER[i]>=er && p.SD[i]<=sd);
    parts.push({id:'d', label:'d) Portfolio or single stock?', pts:2, q:'Given the expected return and standard deviation you calculated, would you rather invest into this portfolio, or does one of the single stocks offer a better risk-return combination?', self:true,
      sol:better.length ? `Compare each stock with the portfolio (${dtP(er,2)}% / ${dtP(sd,2)}%): **${better.join(' and ')}** offer${better.length>1?'':'s'} at least the portfolio’s expected return with no more risk — ${better.length>1?'they dominate':'it dominates'} the value-weighted portfolio on this one-period risk-return view. Mention that diversification still removes firm-specific risk, which a single stock keeps.`
        : `No single stock has both a higher expected return and a lower standard deviation than the portfolio (${dtP(er,2)}% / ${dtP(sd,2)}%), so the diversified portfolio offers the better risk-return trade-off.`});
  }
  return {type:'port', p, title:'Value-weighted three-stock portfolio',
    text:R`You observe the following three stocks:

${tab}

Correlation coefficients: ${N[0]}–${N[1]} ${p.rho[0]} · ${N[0]}–${N[2]} ${p.rho[1]} · ${N[1]}–${N[2]} ${p.rho[2]}.`, parts};
};

DT_GEN.port2 = function(p){
  if(!p) p = {names:['Costco','Home Depot'], ER:[dtRnd(.08,.2,.01), dtRnd(.1,.25,.01)], SD:[dtRnd(.1,.3,.01), dtRnd(.12,.35,.01)], V:[dtRnd(50,800,10), dtRnd(5,900,5)], vu:['bn','bn'], rho:dtRnd(-.9,.9,.1)};
  const N = p.names, V = p.V.map((v,i)=>v*(p.vu[i]==='m'?1/1000:1)), wv = V[0]/(V[0]+V[1]);
  const er = w=>w*p.ER[0]+(1-w)*p.ER[1];
  const sd = w=>Math.sqrt(w*w*p.SD[0]**2 + (1-w)**2*p.SD[1]**2 + 2*w*(1-w)*p.rho*p.SD[0]*p.SD[1]);
  const sdSol = w=>R`$\sigma_p = \sqrt{${dtT(w,4)}^2\cdot${dtT(p.SD[0],2)}^2 + ${dtT(1-w,4)}^2\cdot${dtT(p.SD[1],2)}^2 + 2\cdot${dtT(w,4)}\cdot${dtT(1-w,4)}\cdot(${dtT(p.rho,2)})\cdot${dtT(p.SD[0],2)}\cdot${dtT(p.SD[1],2)}} = ${dtPT(sd(w),2)}$`;
  return {type:'port', p, title:'Two stocks — equal vs value weighted',
    text:R`${N[0]} stock has an expected return of ${dtP(p.ER[0],0)}% and a standard deviation of ${dtP(p.SD[0],0)}% during all economic conditions. ${N[1]} stock has an expected return of ${dtP(p.ER[1],0)}% and a standard deviation of ${dtP(p.SD[1],0)}%. The market capitalization of ${N[0]} is ${dtMoney(p.V[0])} ${p.vu[0]==='m'?'million':'billion'} and of ${N[1]} ${dtMoney(p.V[1])} ${p.vu[1]==='m'?'million':'billion'}. The correlation coefficient between their returns is ${p.rho}.`,
    parts:[
      {id:'a', label:'a) E(R) equally weighted', pts:4, q:'Calculate the expected return of an equally weighted portfolio of both stocks.', fields:[{l:'E(Rp)', u:'%', ans:er(.5)*100, tol:.03}], sol:R`$0.5\cdot${dtT(p.ER[0],2)} + 0.5\cdot${dtT(p.ER[1],2)} = ${dtPT(er(.5),2)}$`},
      {id:'b', label:'b) E(R) value weighted', pts:4, q:'Calculate the expected return of a value-weighted portfolio of both stocks.', fields:[{l:'E(Rp)', u:'%', ans:er(wv)*100, tol:.03}],
        sol:R`Same units first (${p.vu.includes('m')?'million vs billion!':'both in billions'}): $w_{1} = \frac{${dtT(V[0],3)}}{${dtT(V[0],3)}+${dtT(V[1],3)}} = ${dtT(wv,6)}$. $E(R_p) = ${dtT(wv,4)}\cdot${dtT(p.ER[0],2)} + ${dtT(1-wv,4)}\cdot${dtT(p.ER[1],2)} = ${dtPT(er(wv),2)}$`},
      {id:'c', label:'c) σ equally weighted', pts:5, q:'Calculate the standard deviation of the equally weighted portfolio.', fields:[{l:'σp', u:'%', ans:sd(.5)*100, tol:.05}], sol:sdSol(.5) + (p.rho<0?' — the negative correlation makes the portfolio far less risky than either stock.':'')},
      {id:'d', label:'d) σ value weighted', pts:5, q:'Calculate the standard deviation of the value-weighted portfolio.', fields:[{l:'σp', u:'%', ans:sd(wv)*100, tol:.05}], sol:sdSol(wv)}
    ]};
};

DT_GEN.capm = function(p){
  if(!p) p = Math.random()<.5 ? {mrp:dtRnd(.04,.09,.01), beta:dtRnd(.6,2,.1)} : {rf:dtRnd(.01,.04,.005), mrp:dtRnd(.02,.08,.01), stocks:[['Apple',dtRnd(.6,2,.01)],['Microsoft',dtRnd(.6,2,.01)]]};
  if(p.stocks) return {type:'capm', p, title:'CAPM expected returns',
    text:R`${p.stocks.map(s=>`${s[0]} has beta = ${s[1]}`).join(', ')}. The market risk premium is ${dtP(p.mrp,1)}% and the risk-free rate is ${dtP(p.rf,1)}%. What is the expected return of each stock according to the CAPM?`,
    parts:[{id:'a', label:'Expected returns', pts:0, q:'Show the formula and both results.', fields:p.stocks.map(s=>({l:s[0], u:'%', ans:(p.rf+s[1]*p.mrp)*100, tol:.006})),
      sol:R`CAPM: $E(R_i) = r_f + \beta_i\,(r_m - r_f)$.
${p.stocks.map(s=>R`- ${s[0]}: $${dtT(p.rf*100,2)}\% + ${s[1]}\cdot${dtT(p.mrp*100,2)}\% = ${dtT((p.rf+s[1]*p.mrp)*100,2)}\%$`).join('\n')}

Note: the market risk premium is already $r_m - r_f$ — do not subtract $r_f$ again.`}]};
  const rp = p.beta*p.mrp;
  const opts = p.opts || [`Less than ${dtP(rp,1)}%`, `${dtP(rp,1)}%`, `Greater than ${dtP(rp,1)}%`, `${dtP(rp+.016,1)}%`, 'Cannot be determined'];
  return {type:'capm', p, title:'CAPM risk premium',
    text:R`If the market risk premium $(r_m - r_f)$ is ${dtP(p.mrp,0)}%, then according to the CAPM, the risk premium of a stock with beta value of ${p.beta} must be:`,
    parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts, correct:p.correct!=null?p.correct:1,
      sol:R`Risk premium of the stock $= E(R_i) - r_f = \beta\,(r_m - r_f) = ${p.beta}\cdot${dtT(p.mrp*100,0)}\% = ${dtT(rp*100,1)}\%$. You do **not** need $r_f$ for the premium. ${p.note||''}`}]};
};

DT_GEN.dur = function(p){
  if(!p) p = {F:dtPick([1000,5000,10000]), c:dtRnd(.02,.07,.005), T:dtPick([3,4,5]), y:dtRnd(.02,.06,.005)};
  const cfs = Array.from({length:p.T}, (_,i)=>({t:i+1, cf:p.F*p.c + (i+1===p.T?p.F:0)}));
  cfs.forEach(x=>{ x.pv = x.cf/Math.pow(1+p.y, x.t); });
  const P = cfs.reduce((s,x)=>s+x.pv,0), D = cfs.reduce((s,x)=>s+x.t*x.pv,0)/P;
  const opts = p.opts || [`${dtF(D,2)} years`, `${dtF(D,2)}%`, `${p.T} years`, `${p.T}%`, 'None of the above'];
  return {type:'dur', p, title:'Macaulay duration of a bond',
    text:R`A bond has ${dtMoney(p.F)} face value, a coupon rate of ${dtP(p.c,1)}% and matures in ${p.T} years. Coupons are paid annually and the first coupon is due in one year from now. The yield to maturity of the bond is ${dtP(p.y,1)}% nominal annual with annual compounding. What is the duration of this bond?`,
    parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts, correct:p.correct!=null?p.correct:0, fields:[{l:'Duration', u:'years', ans:D, tol:.011}],
      sol:R`[[tab:Weights of the cash flows
t|CF|PV = CF/(1+y)^t|t\cdot PV
${cfs.map(x=>`${x.t}|${dtT(x.cf,2)}|${dtT(x.pv,2)}|${dtT(x.t*x.pv,2)}`).join('\n')}
\Sigma||${dtT(P,2)}|${dtT(cfs.reduce((s,x)=>s+x.t*x.pv,0),2)}]]

$D = \frac{\sum t\cdot PV_t}{P} = \frac{${dtT(cfs.reduce((s,x)=>s+x.t*x.pv,0),2)}}{${dtT(P,2)}} = ${dtT(D,2)}$ **years** — duration is measured in years (not %), and it is below the maturity of ${p.T} years because coupons arrive earlier.`}]};
};

DT_GEN.irr = function(p){
  if(!p){
    const I = dtRnd(1000000, 3000000, 10000), c1 = dtRnd(300000, 1500000, 50000), c2 = dtRnd(800000, 2500000, 50000), k = dtRnd(.06,.16,.01);
    p = {I, cfs:[c1,c2], k, name:dtPick(['Amazon','Lufthansa','Tesla','Siemens'])};
  }
  const cf = [-p.I].concat(p.cfs);
  let lo = -.99, hi = 5; const f = r=>cf.reduce((s,c,t)=>s+c/Math.pow(1+r,t),0);
  for(let i=0;i<200;i++){ const m = (lo+hi)/2; if(f(lo)*f(m)<=0) hi = m; else lo = m; }
  const irr = (lo+hi)/2;
  let opts = p.opts, correct = p.correct, decision = '';
  if(p.k!=null){
    const npv = f(p.k), alt = irr + (irr>p.k ? -1 : 1)*dtRnd(.02,.04,.0001);
    const lab = x=>`${dtF(x*100,2)}%`, acc = irr>p.k;
    if(!opts){ const o = [[irr,false],[irr,true],[alt,false],[alt,true]].map(([x,a])=>`The IRR is roughly ${lab(x)} and the project should ${a?'':'not '}be accepted.`); opts = o; correct = acc?1:0; }
    decision = R` NPV at the cost of capital: $${dtT(-p.I,0)} + ${p.cfs.map((c,t)=>R`\frac{${dtT(c,0)}}{${dtT(1+p.k,2)}^{${t+1}}}`).join(' + ')} = ${dtT(npv,0)}$. **IRR ${acc?'>':'<'} ${dtP(p.k,0)}% and NPV ${npv>0?'> 0 → accept':'< 0 → reject'} the project.**`;
  }
  const quad = p.cfs.length===2 ? R` With $x = 1+IRR$: $${dtT(p.I,0)}x^2 - ${dtT(p.cfs[0],0)}x - ${dtT(p.cfs[1],0)} = 0$ → $x = \frac{${dtT(p.cfs[0],0)} + \sqrt{${dtT(p.cfs[0],0)}^2 + 4\cdot${dtT(p.I,0)}\cdot${dtT(p.cfs[1],0)}}}{2\cdot${dtT(p.I,0)}} = ${dtT(1+irr,5)}$.` : '';
  return {type:'irr', p, title:'Internal rate of return',
    text:p.text || R`${p.name} is considering investing in a new project. The project needs an initial investment of ${dtMoney(p.I)} in year 0 and will generate a payoff of ${dtMoney(p.cfs[0])} in year 1 and a final payoff of ${dtMoney(p.cfs[1])} in year 2. The cost of capital is ${dtP(p.k,0)}%. Which statement is true regarding this project?`,
    parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and show why.', opts, correct, fields:[{l:'IRR', u:'%', ans:irr*100, tol:.02}],
      sol:R`IRR solves $0 = -${dtT(p.I,2)} + ${p.cfs.map((c,t)=>R`\frac{${dtT(c,0)}}{(1+IRR)^{${t+1}}}`).join(' + ')}$.` + quad + R` **IRR ≈ ${dtF(irr*100,2)}%.**` + decision}]};
};

// decision rules under uncertainty — the course convention for Hurwicz: H = α·best + (1−α)·worst (α = optimism, as in FT 2025, 2019 and the simulation)
function dtUtil(u, x){ return u==='sq' ? x*x : Math.sqrt(x); }
DT_GEN.dec = function(p){
  if(!p){
    const W0 = dtRnd(10000, 200000, 5000), pr = dtPick([[.45,.30,.25],[.5,.25,.25],[.25,.5,.25],[.3,.4,.3],[.4,.35,.25]]);
    const mk = [dtRnd(-.3,-.1,.05), dtRnd(.05,.12,.01), dtRnd(.2,.4,.05)], bd = dtRnd(.02,.05,.005);
    const mixes = shuffle([.3,.4,.5,.6,.7]).slice(0,2).sort((a,b)=>b-a);
    const strat = [{n:'I', d:'100% bonds', r:[bd,bd,bd]}, {n:'II', d:'100% market portfolio', r:mk}].concat(mixes.map((w,i)=>({n:['III','IV'][i], d:`${w*100}% market / ${100-w*100}% bonds`, r:mk.map(x=>dtR(w*x+(1-w)*bd,6))})));
    p = {W0, cur:'€', states:[{n:'Recession',p:pr[0]},{n:'Stable',p:pr[1]},{n:'Boom',p:pr[2]}], strat, unit:'wealth', alpha:dtPick([.3,.4,.5,.6,.7]),
      rules:['matrix','maximin','hurwicz','laplace','eu'], u:'sqrt',
      intro:`You would like to invest ${dtMoney(W0,'€')} and can split it between a well-diversified value-weighted market portfolio and bonds. Your options:`,
      env:`If a recession takes place, the market portfolio returns ${dtP(mk[0],0)}%; if the economy stays stable it grows ${dtP(mk[1],0)}%; in a boom it grows ${dtP(mk[2],0)}%. Bonds grow by ${dtP(bd,1)}% no matter what happens. You estimate a ${dtP(pr[0],0)}% chance of a recession, ${dtP(pr[1],0)}% that markets stay stable and ${dtP(pr[2],0)}% of a boom.`};
  }
  const S = p.strat, Z = p.states, cur = p.cur||'€';
  const val = (s,j)=> p.unit==='wealth' ? p.W0*(1+s.r[j]) : s.r[j]*100;
  const M = S.map(s=>Z.map((_,j)=>val(s,j)));
  const show = x=> p.unit==='wealth' ? dtT(x,2) : dtT(x,2)+'\\%';
  const fieldU = p.unit==='wealth' ? cur : '%';
  const tolV = x=> p.unit==='wealth' ? Math.max(1, Math.abs(x)*.0005) : .02;
  const best = arr=>{ const m = Math.max(...arr); return arr.findIndex(v=>Math.abs(v-m)<1e-9); };
  const sname = i=>`${S[i].n} (${S[i].d})`;
  const opts = S.map((s,i)=>sname(i));
  const parts = []; let L = 0;
  const add = (o)=>{ o.id = dtLetters[L]; o.label = dtLetters[L]+') '+o.label; L++; parts.push(o); };
  const grid = {rows:S.map(s=>s.n), cols:Z.map(z=>z.n+(z.p!=null?` (${dtP(z.p,0)}%)`:'')), ans:M, u:fieldU, tol:M.map(r=>r.map(tolV))};
  const mTab = `[[tab:Outcome matrix ${p.unit==='wealth'?'(final values in '+(cur==='€'?'€':'USD')+')':'(returns)'}\n\\text{Strategy}|${Z.map(z=>`\\text{${z.n}}`).join('|')}\n${S.map((s,i)=>`\\text{${s.n}}|${M[i].map(show).join('|')}`).join('\n')}]]`;
  (p.rules).forEach(rule=>{
    const R0 = typeof rule==='string' ? {k:rule} : rule;
    const k = R0.k;
    if(k==='matrix') add({label:'Outcome matrix', pts:R0.pts||8, q:`Construct the outcome matrix${p.unit==='wealth'?' (final portfolio values)':' (returns per strategy and state)'}.`, grid,
      sol:(p.unit==='wealth' ? R`Final value $= W_0\cdot\left(1 + \sum_k w_k r_k\right)$, e.g. ${S[S.length-1].n}: $${dtT(p.W0,0)}\cdot(1 + ${dtT(S[S.length-1].r[0],4)}) = ${show(M[S.length-1][0])}$ in a ${Z[0].n.toLowerCase()}.` : R`Mixed strategies earn the weighted average of their parts' returns.`) + '\n\n' + mTab});
    if(k==='maximin'||k==='maximax'){
      const ext = M.map(r=>k==='maximin'?Math.min(...r):Math.max(...r)), b = best(ext);
      add({label:k==='maximin'?'Maximin':'Maximax', pts:R0.pts||2, q:`How would you invest according to the ${k==='maximin'?'Maximin':'Maximax'} rule?`, opts, correct:b,
        fields:S.map((s,i)=>({l:`${k==='maximin'?'min':'max'} ${s.n}`, u:fieldU, ans:ext[i], tol:tolV(ext[i])})),
        sol:R`${k==='maximin'?'Pessimist: take each strategy’s **worst** outcome, then pick the best of these minima.':'Optimist: take each strategy’s **best** outcome, then pick the highest.'}
${S.map((s,i)=>R`- ${s.n}: $${show(ext[i])}$`).join('\n')}

**→ ${sname(b)}.**`});
    }
    if(k==='hurwicz'){
      const a = R0.a!=null ? R0.a : p.alpha;
      const H = M.map(r=>a*Math.max(...r)+(1-a)*Math.min(...r)), b = best(H);
      add({label:`Hurwicz (α = ${a})`, pts:R0.pts||4, q:`How would you invest according to the Hurwicz principle if α = ${a}?`, opts, correct:b,
        fields:S.map((s,i)=>({l:`H ${s.n}`, u:fieldU, ans:H[i], tol:tolV(H[i])})),
        sol:R`Course convention: $H = \alpha\cdot\text{best} + (1-\alpha)\cdot\text{worst}$ ($\alpha$ = degree of optimism). Write this formula down in the exam.
${S.map((s,i)=>R`- ${s.n}: $${a}\cdot${show(Math.max(...M[i]))} + ${dtR(1-a,2)}\cdot${show(Math.min(...M[i]))} = ${show(H[i])}$`).join('\n')}

**→ ${sname(b)}.**`, flag:R0.flag});
    }
    if(k==='laplace'){
      const Lv = M.map(r=>r.reduce((x,y)=>x+y,0)/r.length), b = best(Lv);
      add({label:'Laplace', pts:R0.pts||4, q:'How would you invest according to the Laplace rule?', opts, correct:b,
        fields:S.map((s,i)=>({l:`Ø ${s.n}`, u:fieldU, ans:Lv[i], tol:tolV(Lv[i])})),
        sol:R`No probabilities → treat all ${Z.length} states as equally likely and take the plain average.
${S.map((s,i)=>R`- ${s.n}: $\frac{${M[i].map(show).join(' + ')}}{${Z.length}} = ${show(Lv[i])}$`).join('\n')}

**→ ${sname(b)}.**`});
    }
    if(k==='ev'){
      const E = M.map(r=>r.reduce((s,x,j)=>s+Z[j].p*x,0)), b = best(E);
      add({label:'Expected value', pts:R0.pts||4, q:'How would you invest according to the maximum expected value rule?', opts, correct:b,
        fields:S.map((s,i)=>({l:`E ${s.n}`, u:fieldU, ans:E[i], tol:tolV(E[i])})),
        sol:R`Weight each outcome with its probability (${Z.map(z=>`${z.n} ${dtP(z.p,0)}%`).join(', ')}).
${S.map((s,i)=>R`- ${s.n}: $${M[i].map((x,j)=>`${Z[j].p}\\cdot${show(x)}`).join(' + ')} = ${show(E[i])}$`).join('\n')}

**→ ${sname(b)}.**`});
    }
    if(k==='eu'){
      const u = R0.u || p.u, on = R0.on || 'wealth';
      const X = S.map(s=>Z.map((_,j)=> on==='wealth' ? (p.W0||100)*(1+s.r[j]) : s.r[j]*100));
      const EU = X.map(r=>r.reduce((s,x,j)=>s+Z[j].p*dtUtil(u,x),0)), b = best(EU);
      const uTex = u==='sq' ? 'x^2' : '\\sqrt{x}';
      add({label:`Expected utility${R0.who?' — '+R0.who:''}`, pts:R0.pts||7, q:`${R0.q||''}How would ${R0.who?R0.who.toLowerCase().replace(/^you$/,'you'):'you'} invest to maximize expected utility with $U(x) = ${uTex}$${on==='return'?' (applied to the returns in %)':''}?`, opts, correct:b,
        fields:S.map((s,i)=>({l:`EU ${s.n}`, u:'', ans:EU[i], tol:Math.max(.02, Math.abs(EU[i])*.0005)})),
        sol:R`$EU = \sum_s p_s\,U(x_s)$ with ${Z.map(z=>`$p_{\\text{${z.n}}} = ${z.p}$`).join(', ')}${on==='wealth'?' and $x$ = final wealth':' and $x$ = return in %'}.
${S.map((s,i)=>R`- ${s.n}: $${X[i].map((x,j)=>`${Z[j].p}\\cdot ${u==='sq'?`(${dtT(x,2)})^2`:`\\sqrt{${dtT(x,2)}}`}`).join(' + ')} = ${dtT(EU[i],2)}$`).join('\n')}

**→ ${sname(b)}.** ${u==='sq' ? 'A convex utility (x²) means risk-seeking: the spread of outcomes is rewarded.' : 'The concave √ utility means risk aversion: a sure outcome beats a risky one with a similar mean.'}${R0.note?' '+R0.note:''}`, flag:R0.flag});
    }
  });
  return {type:'dec', p, title:'Decisions under uncertainty',
    text:R`${p.intro}

${S.map(s=>`- **${s.n}.** ${s.desc||s.d}`).join('\n')}

${p.env}`, parts};
};

DT_GEN.ear = function(p){
  if(!p) p = {A:{nom:.10, m:365}, B:{nom:.11, m:12}};
  const e = x=>Math.pow(1+x.nom/x.m, x.m)-1, mw = {365:'daily',12:'monthly',4:'quarterly',2:'semiannually',1:'annually'};
  const eA = e(p.A), eB = e(p.B);
  return {type:'rates', p, title:'Effective annual rates',
    text:R`Investment A pays ${dtP(p.A.nom,0)}% annual nominal interest, compounded ${mw[p.A.m]}. Investment B pays ${dtP(p.B.nom,0)}% annual nominal interest, compounded ${mw[p.B.m]}.`,
    parts:[
      {id:'a', label:'a) EAR of A', pts:p.pts?p.pts[0]:4, q:'What is the effective annual rate for Investment A?', opts:p.optsA, correct:p.cA, fields:[{l:'EAR A', u:'%', ans:eA*100, tol:.006}],
        sol:R`$EAR = \left(1+\frac{j}{m}\right)^m - 1 = \left(1+\frac{${p.A.nom}}{${p.A.m}}\right)^{${p.A.m}} - 1 = ${dtT(eA*100,4)}\%$`, flag:p.flagA},
      {id:'b', label:'b) EAR of B', pts:p.pts?p.pts[1]:4, q:'What is the effective annual rate for Investment B?', opts:p.optsB, correct:p.cB, fields:[{l:'EAR B', u:'%', ans:eB*100, tol:.006}],
        sol:R`$EAR = \left(1+\frac{${p.B.nom}}{${p.B.m}}\right)^{${p.B.m}} - 1 = ${dtT(eB*100,4)}\%$`},
      {id:'c', label:'c) Which is better?', pts:p.pts?p.pts[2]:2, q:'Which is the better investment and why?', opts:p.optsC||['Investment B is better since the nominal interest rate quoted is higher','Investment A is better since the compounding frequency is higher','Investment B is better since the effective annual rate is higher','There is no difference between the two investments'], correct:p.cC!=null?p.cC:(eB>eA?2:1),
        sol:R`Compare offers by their **effective** rates: ${dtP(eA,2)}% vs ${dtP(eB,2)}%. ${eB>eA?'B wins because its effective rate is higher — not because its quoted rate is higher.':'A wins.'}`}
    ]};
};

DT_GEN.ret = function(p){
  if(!p) p = Math.random()<.5 ? {kind:'div', P0:100, D:dtRnd(2,8,1), P1:dtRnd(95,115,1)} : {kind:'tot', inv:dtRnd(200,2000,100), dP:dtRnd(-.3,.3,.05), D:dtRnd(2,20,1), stock:dtPick(['Pfizer','BASF','Nike'])};
  if(p.kind==='div'){
    const r = (p.D + p.P1 - p.P0)/p.P0;
    return {type:'ret', p, title:'Expected return of a stock',
      text:R`A company’s stock is selling for ${dtMoney(p.P0)} per share today. It is expected to pay a dividend of ${dtMoney(p.D)} per share at the end of the present year${p.g?` and the dividend is expected to grow at a rate of ${dtP(p.g,0)}%`:''}, and then be sold for ${dtMoney(p.P1)} per share at the end of the first year. Calculate the expected rate of return for the shareholders.`,
      parts:[{id:'a', label:'Expected return', pts:0, q:'Show the formula.', fields:[{l:'Expected return', u:'%', ans:r*100, tol:.02, alt:p.alt}],
        sol:R`One-year holding return = dividend yield + capital gain: $r = \frac{D_1 + P_1 - P_0}{P_0} = \frac{${p.D} + ${p.P1} - ${p.P0}}{${p.P0}} = ${dtPT(r,1)}$.`, flag:p.flag}]};
  }
  const r = p.dP + p.D/p.inv, end = p.inv*(1+r);
  return {type:'ret', p, title:'Total return with a dividend',
    text:R`You have invested ${dtMoney(p.inv)} into a stock of ${p.stock}. Over the next year, the stock price will go ${p.dP<0?'down':'up'} by ${dtP(Math.abs(p.dP),0)}%, and at the end of the year you receive a ${dtMoney(p.D)} dividend. What is the total return on the investment over that year, and how many dollars will you have in a year from now?`,
    parts:[{id:'a', label:'Return and final amount', pts:0, q:'Show the calculation.', fields:[{l:'Total return', u:'%', ans:r*100, tol:.02},{l:'Amount in one year', u:'USD', ans:end, tol:1}],
      sol:R`Total return = price change + dividend yield $= ${dtPT(p.dP,0)} + \frac{${p.D}}{${p.inv}} = ${dtPT(r,1)}$. Amount: $${p.inv}\cdot(1 ${r<0?'-':'+'} ${dtT(Math.abs(r),3)}) = ${dtT(end,2)}$.`}]};
};

// static multiple choice (concept questions from the exams)
DT_GEN.mc = function(p){
  return {type:p.type||'concept', p, title:p.title, text:p.text, parts:[{id:'a', label:'Answer', pts:0, q:'Mark the correct answer and explain.', opts:p.opts, correct:p.correct, sol:p.sol, flag:p.flag}]};
};

/* ---------- build an exam question from its definition (exam file) ---------- */
function dtBuild(def){
  const q = DT_GEN[def.gen](JSON.parse(JSON.stringify(def.p||null)) || null);
  q.n = def.n; q.pts = def.pts;
  if(def.title) q.title = def.title;
  if(def.text) q.text = def.text;
  if(def.points){ q.parts.forEach((pt,i)=>{ if(def.points[i]!=null) pt.pts = def.points[i]; }); }
  if(q.parts.length===1 && !q.parts[0].pts) q.parts[0].pts = def.pts;
  // spread unassigned part points (generator pts 0) over the rest of the question
  const free = q.parts.filter(pt=>!pt.pts);
  if(free.length){ const used = q.parts.reduce((s,pt)=>s+(pt.pts||0),0); free.forEach(pt=>{ pt.pts = Math.max(0, (def.pts-used)/free.length); }); }
  if(def.flags) Object.entries(def.flags).forEach(([id,f])=>{ const pt = q.parts.find(x=>x.id===id); if(pt) pt.flag = f; });
  if(def.alt) Object.entries(def.alt).forEach(([id,v])=>{ const pt = q.parts.find(x=>x.id===id); if(pt && pt.fields) pt.fields[0].alt = v; });
  if(def.solAdd) Object.entries(def.solAdd).forEach(([id,s])=>{ const pt = q.parts.find(x=>x.id===id); if(pt) pt.sol += '\n\n'+s; });
  q.src = def.src;
  // random tasks put the right option first → shuffle; past exams keep the original a–e order
  if(!def.p || def.rand) q.parts.forEach(pt=>{ if(pt.opts && q.type!=='dec'){ const o = dtShuffleOpts(pt.opts, pt.correct); pt.opts = o.opts; pt.correct = o.correct; } });
  return q;
}
function dtExamQuestions(e){ if(!e.__q) e.__q = e.q.map(dtBuild); return e.__q; }

/* ============================================================ RENDERING ============================================================ */
// state of a checked part: {got, max} — kept per exam (key) so scores and the radar survive reloads
function dtFmtAns(f){ return f.u==='%' ? dtF(f.ans, 2)+'%' : f.u==='years'||f.u==='months'||f.u==='' ? dtF(f.ans, 2)+(f.u?' '+f.u:'') : dtF(f.ans, 2)+' '+f.u; }
function dtTol(f){ return f.tol!=null ? f.tol : f.u==='%' ? .02 : Math.max(.6, Math.abs(f.ans)*.0015); }
function dtOk(f, v){ return [f.ans].concat(f.alt||[]).some(a=>Math.abs(v-a) <= (f.tol!=null?f.tol:dtTol({...f, ans:a}))+1e-9); }
function dtRenderQuestion(box, q, store, onScore){
  const st = store.get();
  box.innerHTML = `
    <div class="q-card dt-qcard"><div class="q-title">${q.n?`Question ${q.n} · `:''}${esc(q.title)} <span class="pts-badge">${dtF(q.pts,q.pts%1?1:0)} P</span>${q.src==='self'?'<span class="dt-src">solutions self-computed (no official key)</span>':''}</div><div class="q-text">${richHtml(q.text)}</div></div>
    ${q.parts.map((pt,pi)=>`<div class="ans-card dt-part" data-part="${pt.id}">
      <div class="q-title">${esc(pt.label)} <span class="pts-badge">${dtF(pt.pts,pt.pts%1?1:0)} P</span><span class="dt-got"></span></div>
      ${pt.q?`<div class="q-text">${richHtml(pt.q)}</div>`:''}
      ${pt.opts?`<div class="dt-opts">${pt.opts.map((o,i)=>`<label class="dt-opt"><input type="radio" name="${q.n||'q'}-${pt.id}-${box.dataset.uid}" value="${i}"><span class="letter">${'abcde'[i]}.</span><span>${mathText(o)}</span></label>`).join('')}</div>`:''}
      ${pt.fields?`<div class="drill-fields dt-fields">${pt.fields.map((f,i)=>`<label>${esc(f.l)} <input type="text" inputmode="decimal" data-f="${i}">${f.u?`<em>${esc(f.u)}</em>`:''}</label>`).join('')}</div>`:''}
      ${pt.grid?`<div class="dt-grid-wrap"><table class="dt-grid"><thead><tr><th></th>${pt.grid.cols.map(c=>`<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${pt.grid.rows.map((r,i)=>`<tr><th>${esc(r)}</th>${pt.grid.cols.map((_,j)=>`<td><input type="text" inputmode="decimal" data-g="${i}-${j}"></td>`).join('')}</tr>`).join('')}</tbody></table><span class="dt-grid-u">${pt.grid.u==='%'?'returns in %':'values in '+pt.grid.u}</span></div>`:''}
      <div class="ans-actions">
        ${pt.self ? `<span class="mk-rated">Draw it on paper, then compare and rate yourself:</span><button class="btn ghost" data-act="sol">Show solution</button>` : `<button class="btn" data-act="check">Check</button><button class="btn ghost" data-act="sol">Show solution</button>`}
      </div>
      ${pt.self?`<div class="ans-actions dt-self" hidden><button class="btn ghost" data-rate="1">Full points</button><button class="btn ghost" data-rate=".5">Half</button><button class="btn ghost" data-rate="0">Missed it</button></div>`:''}
      <div class="ans-feedback"></div>
      <div class="sol-card" hidden><div class="q-title">Solution ${esc(pt.label)}</div><div class="sol-body">${richHtml(pt.sol)}${pt.flag?`<div class="dt-flag"><b>⚠ Note on the official solution:</b> ${mathText(pt.flag)}</div>`:''}</div></div>
    </div>`).join('')}`;
  const setGot = (card, got, max)=>{ card.querySelector('.dt-got').innerHTML = got==null ? '' : ` · <b>${dtF(got, got%1?1:0)}/${dtF(max, max%1?1:0)}</b>`; };
  q.parts.forEach(pt=>{
    const card = box.querySelector(`.dt-part[data-part="${pt.id}"]`), fb = card.querySelector('.ans-feedback'), sol = card.querySelector('.sol-card');
    const prev = st[pt.id]; if(prev) setGot(card, prev.got, prev.max);
    const showSol = ()=>{ sol.hidden = false; const sr = card.querySelector('.dt-self'); if(sr) sr.hidden = false; };
    card.querySelector('[data-act="sol"]').addEventListener('click', showSol);
    card.querySelectorAll('[data-rate]').forEach(b=>b.addEventListener('click', ()=>{
      const got = pt.pts*Number(b.dataset.rate); const s = store.get(); s[pt.id] = {got, max:pt.pts}; store.set(s); setGot(card, got, pt.pts); onScore && onScore(pt, got);
      card.querySelectorAll('[data-rate]').forEach(x=>x.classList.toggle('active', x===b));
    }));
    const ck = card.querySelector('[data-act="check"]');
    if(ck) ck.addEventListener('click', ()=>{
      let n = 0, ok = 0; const miss = [];
      if(pt.opts){
        n++; const sel = card.querySelector('.dt-opts input:checked');
        card.querySelectorAll('.dt-opt').forEach((l,i)=>{ l.classList.toggle('st-ok', i===pt.correct); l.classList.toggle('st-bad', sel && +sel.value===i && i!==pt.correct); });
        if(sel && +sel.value===pt.correct) ok++; else miss.push(`answer ${'abcde'[pt.correct]}`);
      }
      (pt.fields||[]).forEach((f,i)=>{
        const inp = card.querySelector(`[data-f="${i}"]`), v = dtNum(inp.value); n++;
        const good = !isNaN(v) && dtOk(f, v); if(good) ok++; else miss.push(`${f.l} = ${dtFmtAns(f)}`);
        inp.classList.toggle('st-ok', good); inp.classList.toggle('st-bad', !good);
      });
      if(pt.grid){
        let gOk = 0, gN = 0;
        pt.grid.ans.forEach((row,i)=>row.forEach((a,j)=>{ const inp = card.querySelector(`[data-g="${i}-${j}"]`), v = dtNum(inp.value); gN++; const good = !isNaN(v) && Math.abs(v-a)<=pt.grid.tol[i][j]+1e-9; if(good) gOk++; inp.classList.toggle('st-ok', good); inp.classList.toggle('st-bad', !good); }));
        n += 1; ok += gOk/gN; if(gOk<gN) miss.push(`${gN-gOk} of ${gN} cells`);
      }
      const got = Math.round(pt.pts*ok/n*2)/2;
      const s = store.get(); s[pt.id] = {got, max:pt.pts}; store.set(s); setGot(card, got, pt.pts);
      fb.className = 'ans-feedback show '+(got>=pt.pts-1e-9?'good':'warn');
      fb.innerHTML = got>=pt.pts-1e-9 ? `<b>Correct — ${dtF(got,got%1?1:0)}/${dtF(pt.pts,pt.pts%1?1:0)} P.</b> In the exam, write the formula and the steps too.` : `<b>${dtF(got,got%1?1:0)}/${dtF(pt.pts,pt.pts%1?1:0)} P.</b> Expected: ${esc(miss.join(' · '))}. Rounding within ±0.2% is accepted.`;
      onScore && onScore(pt, got);
      if(got<pt.pts-1e-9) showSol();
    });
    card.addEventListener('keydown', ev=>{ if(ev.key==='Enter' && ck){ ev.preventDefault(); ck.click(); } });
  });
}
let dtUid = 0;
function dtStore(key){ return {get:()=>ls(key, {}), set:v=>lsSet(key, v)}; }
// one exam (or mock) page: question tabs + score + 90-min timer
function dtExamView(div, e, qs, key, opts={}){
  const score = ()=>{ const s = ls(key, {}); let got = 0, any = false; qs.forEach(q=>q.parts.forEach(pt=>{ const r = s[q.n+'-'+pt.id]; if(r){ got += r.got; any = true; } })); return any ? got : null; };
  div.innerHTML = `
    <div class="page-header">
      <div class="eyebrow">${icon(opts.icon||'doc')} ${esc(opts.eyebrow||'Exam Prep')}${e.latest?' · newest exam':''}</div>
      <h2>${esc(e.title)}</h2>
      <p>${e.desc ? mathText(e.desc) : ''}</p>
      ${e.notes&&e.notes.length?`<details class="exam-note dt-notes"><summary><b>⚠ ${e.notes.length} note${e.notes.length>1?'s':''} on this exam</b> (answer key checked against our own calculation)</summary><ul class="sum-list">${e.notes.map(n=>`<li>${mathText(n)}</li>`).join('')}</ul></details>`:''}
      <div class="exam-toolbar"><span class="exam-score" data-score></span><button class="btn ghost" data-timer>⏱ Start 90-min timer</button><span class="exam-timer" data-clock></span>${opts.extra||''}<button class="btn ghost" data-reset>Reset answers</button></div>
    </div>
    <div class="page-body">
      <div class="ex-tabs">${qs.map((q,i)=>`<button class="ex-tab${i?'':' active'}" data-q="${i}"><b>Q${q.n}</b><span>${esc(q.title)}</span><i>${dtF(q.pts,q.pts%1?1:0)} P</i></button>`).join('')}</div>
      ${qs.map((q,i)=>`<section class="ex-panel${i?'':' active'}" data-q="${i}"></section>`).join('')}
    </div>`;
  const total = qs.reduce((s,q)=>s+q.pts,0);
  const upd = ()=>{ const g = score(); div.querySelector('[data-score]').innerHTML = g==null ? `${dtF(total,0)} points · no checks yet` : `Checked so far: <b>${dtF(g, g%1?1:0)}</b> / ${dtF(total,0)} points`; };
  upd();
  const load = (i)=>{
    const panel = div.querySelector(`.ex-panel[data-q="${i}"]`); if(panel.dataset.loaded) return; panel.dataset.loaded = '1'; panel.dataset.uid = ++dtUid;
    const q = qs[i];
    const store = {get:()=>{ const s = ls(key, {}); const o = {}; q.parts.forEach(pt=>{ if(s[q.n+'-'+pt.id]) o[pt.id] = s[q.n+'-'+pt.id]; }); return o; },
                   set:(o)=>{ const s = ls(key, {}); Object.entries(o).forEach(([id,v])=>{ s[q.n+'-'+id] = v; }); lsSet(key, s); }};
    dtRenderQuestion(panel, q, store, ()=>{ upd(); dtLogType(q.type); });
  };
  div.querySelectorAll('.ex-tab').forEach(b=>b.addEventListener('click', ()=>{
    div.querySelectorAll('.ex-tab').forEach(x=>x.classList.toggle('active', x===b));
    div.querySelectorAll('.ex-panel').forEach(p=>p.classList.toggle('active', p.dataset.q===b.dataset.q));
    load(+b.dataset.q); requestAnimationFrame(updateHlIslandVisibility);
  }));
  load(0);
  examTimer(div.querySelector('[data-timer]'), div.querySelector('[data-clock]'), key+'-timer');
  div.querySelector('[data-reset]').addEventListener('click', ()=>{ lsSet(key, {}); div.querySelectorAll('.ex-panel').forEach(p=>{ p.dataset.loaded=''; p.innerHTML=''; }); load(+div.querySelector('.ex-tab.active').dataset.q); upd(); });
}
function dtLogType(){ /* radar reads exam/mock/drill stores directly; hook kept for future per-type logs */ }

/* ---------- scores per task type (radar, plan, home) ---------- */
function dtTypeScore(type){
  let got = 0, max = 0;
  DT_EXAMS.forEach(e=>{ const s = ls('dt-x-'+e.id, {}); dtExamQuestions(e).forEach(q=>{ if(q.type!==type) return; q.parts.forEach(pt=>{ const r = s[q.n+'-'+pt.id]; if(r){ got += r.got; max += r.max; } }); }); });
  const mock = ls('dt-mock', null), ms = ls('dt-mock-res', {});
  if(mock) mock.forEach((d,i)=>{ if(d.gen && DT_GEN[d.gen] && dtGenType(d.gen, d.p)===type) Object.entries(ms).forEach(([k,r])=>{ if(k.startsWith((i+1)+'-')){ got += r.got; max += r.max; } }); });
  const dr = ls('dt-drill-stats', {})[type]; if(dr){ got += dr.got; max += dr.max; }
  return max ? got/max : null;
}
function dtGenType(gen, p){ return gen==='port2'||gen==='port3' ? 'port' : gen==='ear'||gen==='fisher' ? 'rates' : gen==='mc' ? (p&&p.type)||'concept' : gen; }
function dtExamScore(e){ const s = ls('dt-x-'+e.id, {}); const v = Object.values(s); return v.length ? {got:v.reduce((a,r)=>a+r.got,0), max:v.reduce((a,r)=>a+r.max,0)} : null; }

/* ============================================================ PAGES ============================================================ */
function buildDTExams(){
  DT_EXAMS.forEach(e=>registerPage('dt-'+e.id, (div)=>dtExamView(div, e, dtExamQuestions(e), 'dt-x-'+e.id)));
}
function buildDTHome(){
  registerPage('dt-home', (div)=>{
    const types = DT_TYPES;
    const cell = (t, e)=>{ const hits = e.q.filter(d=>dtGenType(d.gen, d.p)===t.id); return hits.length ? `<td class="dt-hit">${hits.map(d=>`Q${d.n} · ${d.pts}`).join('<br>')}</td>` : '<td class="dt-miss">–</td>'; };
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('home')} Decision Theory & Investments</div><h2>Decision Theory & Investments</h2>
        <p>Prof. Raša Karapandža · ${DT_TOPICS.length} classes so far, plus an exam tool built from ${DT_EXAMS.length} past exams. The exam reuses the same ~12 task types every year with new numbers — so the fastest route is: drill each type until it is automatic, then write full exams against the clock.</p></div>
      <div class="page-body">
        <div class="exam-card">
          <div class="exam-card-head"><h3>Exam at a glance</h3><span class="exam-date">Fri 18 Dec 2026 · 09:00–10:30 · ${dtDaysLeft()} days</span></div>
          <div class="exam-grid">
            <div class="exam-col"><div class="exam-label">Format (FT 2025 exam)</div>
              <ul class="exam-facts">
                <li><b>90 minutes · 90 points · 12 tasks</b> — about one point per minute.</li>
                <li><b>Allowed:</b> calculator + one DIN A4 cheat sheet, handwritten on both sides (collected after the exam). The formula sheet in this hub is a template for it.</li>
                <li><b>Show every step and the formula</b> — also in multiple choice: partial points are given for the working.</li>
                <li><b>Cash-flow questions need a timeline</b> (cash flow diagram) — it carries its own points.</li>
              </ul></div>
            <div class="exam-col"><div class="exam-label">Point mass</div>
              <ul class="exam-facts">
                <li><b>Decision rules (outcome matrix, Maximin, Hurwicz, Laplace, expected utility): 25 P</b> — the biggest single task, always last.</li>
                <li><b>Project NPV with irregular cash flows: 13 P</b> · <b>bond off the spot curve: 11 P</b> · <b>3-stock portfolio: 11 P</b>.</li>
                <li>Small ones (2–6 P): PV addition, perpetuity, forward rate, mortgage, Fisher, CAPM, duration, IRR.</li>
                <li>${mathText(R`**Hurwicz:** write $H = \alpha\cdot\text{best} + (1-\alpha)\cdot\text{worst}$ explicitly — one old solution used α the other way round.`)}</li>
              </ul></div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px">
            <button class="btn" onclick="navTo('dt-${DT_EXAMS[0].id}')">Start with the newest exam →</button>
            <button class="btn ghost" onclick="navTo('dt-drill')">Task Drills</button>
            <button class="btn ghost" onclick="navTo('dt-mock')">Mock Exam</button>
            <button class="btn ghost" onclick="navTo('dt-cheat')">Formula Sheet</button>
            <button class="btn ghost" onclick="navTo('plan')">Study plan</button>
          </div>
        </div>
        ${(()=>{ const s = dtTypeScore('dec'); const hits = []; DT_EXAMS.forEach(e=>e.q.forEach(d=>{ if(dtGenType(d.gen, d.p)==='dec') hits.push({e, d}); }));
          return `<div class="drill-card glass dt-dec-focus"><div class="qtag">Biggest single task · 25 of 90 points · always last</div><h3 style="margin:4px 0 6px">Decision rules & expected utility</h3>
            <p style="margin:0 0 10px">Outcome matrix, Maximin, Maximax, Hurwicz, Laplace, expected value and expected utility — more than a quarter of the exam, and the same scheme every year. Make it automatic early, so the last 25 minutes of the exam are safe.${s!=null?` Your score so far: <b>${Math.round(s*100)}%</b>.`:''}</p>
            <div class="chip-row"><button class="chip" onclick="dtDrillOpen('dec')">Drill with fresh numbers</button>${hits.map(({e,d})=>`<button class="chip" onclick="navTo('dt-${e.id}')">${esc(e.short)} · Q${d.n}</button>`).join('')}</div></div>`; })()}
        <div class="nav-section-label" style="padding-left:0;margin-top:20px;">Lectures</div>
        <div class="topic-grid">
          ${DT_TOPICS.map(t=>{ const s = dtTopicScore(t); return `<div class="topic-card" onclick="navTo('${t.id}')"><div class="num">${esc(t.date)}</div><h4>${esc(t.title)}</h4><p>${t.quiz.length} quiz questions${s!=null?` · ${Math.round(s*100)}%`:''}</p></div>`; }).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Past exams</div>
        <div class="topic-grid">
          ${DT_EXAMS.map(e=>{ const s = dtExamScore(e); return `<div class="topic-card" onclick="navTo('dt-${e.id}')"><div class="num">${esc(e.when)}${e.latest?' · NEWEST':''}</div><h4>${esc(e.title)}</h4><p>${esc(e.kind)}${s?` · ${dtF(s.got,s.got%1?1:0)}/${dtF(s.max,0)} P checked`:''}</p></div>`; }).join('')}
        </div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Which task comes up when (question number · points)</div>
        <div class="dt-map-wrap"><table class="dt-map"><thead><tr><th>Task type</th>${DT_EXAMS.map(e=>`<th>${esc(e.short)}</th>`).join('')}<th>Your score</th></tr></thead><tbody>
          ${types.map(t=>{ const s = dtTypeScore(t.id); return `<tr><th><a onclick="dtDrillOpen('${t.id}')">${esc(t.label)}</a></th>${DT_EXAMS.map(e=>cell(t,e)).join('')}<td>${s==null?'–':Math.round(s*100)+'%'}</td></tr>`; }).join('')}
        </tbody></table></div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Tools</div>
        <div class="tool-tiles">
          <div class="tool-tile" onclick="navTo('dt-drill')"><div class="ic">${icon('logic')}</div><h4>Task Drills</h4><p>Every exam task type with fresh numbers, checked to ±0.2%, with the full worked solution.</p></div>
          <div class="tool-tile" onclick="navTo('dt-mock')"><div class="ic">${icon('timer')}</div><h4>Mock Exam</h4><p>A new 90-point exam in the FT 2025 layout — new numbers every time, 90-minute timer.</p></div>
          <div class="tool-tile" onclick="navTo('dt-cheat')"><div class="ic">${icon('cheat')}</div><h4>Formula Sheet</h4><p>Everything the exam needs on one page — the template for your handwritten A4 sheet.</p></div>
        </div>
      </div>`;
  });
}

/* ---------- drills ---------- */
let dtDrillKind = 'mixed';
function dtDrillOpen(k){ dtDrillKind = k; navTo('dt-drill'); const pg = document.getElementById('page-dt-drill'); if(pg && pg.__set) pg.__set(k); }
const DT_DRILL_KINDS = [
  {id:'pvadd', gen:'pvadd', pts:2}, {id:'perp', gen:'perp', pts:4}, {id:'fwd', gen:'fwd', pts:6}, {id:'mort', gen:'mort', pts:4},
  {id:'bond', gen:'bond', pts:11}, {id:'proj', gen:'proj', pts:13}, {id:'rates', gen:'fisher', pts:4}, {id:'rates2', type:'rates', gen:'ear', pts:10, label:'Effective annual rates'},
  {id:'port', gen:'port3', pts:11}, {id:'port2', type:'port', gen:'port2', pts:18, label:'Two stocks: equal vs value weighted'}, {id:'capm', gen:'capm', pts:3},
  {id:'dur', gen:'dur', pts:3}, {id:'irr', gen:'irr', pts:4}, {id:'dec', gen:'dec', pts:25}, {id:'ret', gen:'ret', pts:4}
];
function dtRandomEar(){ const ms = [365,12,4,2]; const A = {nom:dtRnd(.04,.12,.005), m:dtPick(ms)}; let B; do{ B = {nom:dtR(A.nom+dtPick([-.005,.005,.01,-.01]),3), m:dtPick(ms)}; }while(B.m===A.m); return {A, B}; }
function buildDTDrill(){
  registerPage('dt-drill', (div)=>{
    const label = k=>k.label || (DT_TYPES.find(t=>t.id===(k.type||k.id))||{}).label || k.id;
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('logic')} Practice</div><h2>Task Drills</h2><p>Each exam task type with fresh numbers. Solve on paper with your calculator, type the results (thousands separators, % and currency are fine), check. Every part shows the full worked solution — the same steps the exam wants to see.</p></div>
      <div class="page-body">
        <div class="chip-row dt-kinds"><button class="chip" data-k="mixed">Mixed</button>${DT_DRILL_KINDS.map(k=>`<button class="chip" data-k="${k.id}">${esc(label(k))}</button>`).join('')}</div>
        <div class="bk-score-row"><span class="bk-live dt-live"></span><span class="dt-saved"></span><button class="btn ghost dt-new">New numbers →</button><button class="btn ghost dt-reset">Reset session</button></div>
        <div class="dt-drill-box"></div>
      </div>`;
    const box = div.querySelector('.dt-drill-box');
    let sGot = 0, sMax = 0, curK = null;
    const lbl = ()=>{
      div.querySelector('.dt-live').textContent = `This session: ${dtF(sGot, sGot%1?1:0)}/${dtF(sMax, sMax%1?1:0)} P`;
      const st = ls('dt-drill-stats', {}), t = curK && (curK.type||curK.id), r = t && st[t];
      div.querySelector('.dt-saved').textContent = r ? `${label(curK)}: ${Math.round(r.got/r.max*100)}% overall` : '';
    };
    const next = ()=>{
      curK = dtDrillKind==='mixed' ? dtPick(DT_DRILL_KINDS) : DT_DRILL_KINDS.find(k=>k.id===dtDrillKind);
      const p = curK.gen==='ear' ? dtRandomEar() : null;
      const q = dtBuild({gen:curK.gen, p, pts:curK.pts}); q.n = null;
      box.dataset.uid = ++dtUid; box.innerHTML = '';
      const seen = {};
      dtRenderQuestion(box, q, {get:()=>({}), set:()=>{}}, (pt, got)=>{
        const t = curK.type||curK.id, prev = seen[pt.id];
        const st = ls('dt-drill-stats', {}); st[t] = st[t] || {got:0, max:0};
        if(prev){ st[t].got -= prev.got; st[t].max -= prev.max; sGot -= prev.got; sMax -= prev.max; } // a re-check replaces the earlier result
        st[t].got += got; st[t].max += pt.pts; lsSet('dt-drill-stats', st); seen[pt.id] = {got, max:pt.pts}; sGot += got; sMax += pt.pts; lbl();
      });
      lbl();
    };
    const set = (k)=>{ dtDrillKind = k; div.querySelectorAll('.dt-kinds .chip').forEach(c=>c.classList.toggle('active', c.dataset.k===k)); next(); };
    div.querySelector('.dt-kinds').addEventListener('click', ev=>{ const c = ev.target.closest('.chip'); if(c) set(c.dataset.k); });
    div.querySelector('.dt-new').addEventListener('click', next);
    div.querySelector('.dt-reset').addEventListener('click', ()=>{ sGot = 0; sMax = 0; next(); });
    div.__set = set;
    set(dtDrillKind);
  });
}

/* ---------- mock exam (FT 2025 layout, new numbers) ---------- */
const DT_MOCK_LAYOUT = [['pvadd',2],['perp',4],['fwd',6],['mort',4],['bond',11],['proj',13],['fisher',4],['port3',11],['capm',3],['dur',3],['irr',4],['dec',25]];
function dtNewMock(){ const defs = DT_MOCK_LAYOUT.map(([g,pts],i)=>({n:i+1, gen:g, pts, rand:true, p:DT_GEN[g](null).p})); lsSet('dt-mock', defs); lsSet('dt-mock-res', {}); lsSet('dt-mock-res-timer', null); return defs; }
function buildDTMock(){
  registerPage('dt-mock', (div)=>{
    const render = ()=>{
      const defs = ls('dt-mock', null) || dtNewMock();
      const qs = defs.map(dtBuild);
      dtExamView(div, {title:'Mock Exam', desc:'A full exam in the FT 2025 layout — 12 tasks, 90 points — with new numbers. Write it on paper in 90 minutes, then type in your results question by question. **New mock** creates another set (your current answers are cleared).'}, qs, 'dt-mock-res', {icon:'timer', eyebrow:'Practice', extra:'<button class="btn" data-newmock>New mock</button>'});
      div.querySelector('[data-newmock]').addEventListener('click', ()=>{ dtNewMock(); render(); });
    };
    render();
  });
}

function buildDTCheat(){
  registerPage('dt-cheat', (div)=>{
    div.innerHTML = `<div class="page-header"><div class="eyebrow">${icon('cheat')} Reference</div><h2>Formula Sheet</h2><p>Every formula the past exams need, in the order of the exam. You may bring one handwritten A4 sheet (both sides) — use this as the template.</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><button class="btn" onclick="printCheat()">Print / save as PDF (A4)</button></div></div>
      <div class="page-body"><div id="dt-cheat-body" class="cheat-print"></div>
        <div class="nav-section-label" style="padding-left:0;margin-top:28px;">Build your own A4 sheet</div>
        <p class="dt-sheet-intro">Tick what you still need on your handwritten sheet — formulas you know by heart can go. Your selection is saved on this device; print it as the template to copy by hand.</p>
        <div class="glass dt-sheet-builder"></div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin:12px 0"><button class="btn dt-sheet-print">Print my selection</button><button class="btn ghost dt-sheet-all">Select all</button><span class="dt-sheet-count"></span></div>
        <div class="cheat-print dt-mysheet"></div></div>`;
    renderCheat(div.querySelector('#dt-cheat-body'), DT_CHEAT, '', 'dt-cheat');
    const keys = []; DT_CHEAT.forEach((b,bi)=>b.items.forEach((_,ii)=>keys.push(bi+'-'+ii)));
    const sel = ()=>{ const v = ls('dt-sheet-sel', null); return new Set(v || keys); };
    const builder = div.querySelector('.dt-sheet-builder'), mine = div.querySelector('.dt-mysheet');
    builder.innerHTML = DT_CHEAT.map((b,bi)=>`<div class="dt-sheet-block"><h4>${esc(b.h)}</h4>${b.items.map((it,ii)=>`<label class="dt-sheet-item"><input type="checkbox" data-key="${bi}-${ii}"><span>${mathText(it)}</span></label>`).join('')}</div>`).join('');
    const draw = ()=>{
      const S = sel(); builder.querySelectorAll('input[data-key]').forEach(c=>c.checked = S.has(c.dataset.key));
      const blocks = DT_CHEAT.map((b,bi)=>({...b, items:b.items.filter((_,ii)=>S.has(bi+'-'+ii))})).filter(b=>b.items.length);
      mine.innerHTML = cheatHtml(blocks, '');
      div.querySelector('.dt-sheet-count').textContent = `${S.size} of ${keys.length} formulas selected`;
    };
    builder.addEventListener('change', ev=>{ const c = ev.target.closest('input[data-key]'); if(!c) return; const S = sel(); if(c.checked) S.add(c.dataset.key); else S.delete(c.dataset.key); lsSet('dt-sheet-sel', [...S]); draw(); });
    div.querySelector('.dt-sheet-all').addEventListener('click', ()=>{ lsSet('dt-sheet-sel', keys); draw(); });
    div.querySelector('.dt-sheet-print').addEventListener('click', ()=>{ div.classList.add('dt-only-mine'); printCheat(); setTimeout(()=>div.classList.remove('dt-only-mine'), 800); });
    draw();
  });
}

/* ---------- lecture pages (summary first, quiz, flashcards optional) ---------- */
function dtDrillLabel(id){ const k = DT_DRILL_KINDS.find(x=>x.id===id); return k ? k.label || (DT_TYPES.find(t=>t.id===(k.type||k.id))||{}).label || id : id; }
function dtTopicScore(t){ return knowledgeScore(null, 0, 'quiz-'+t.id, t.quiz.length); }
const __buildTopicPageMK = buildTopicPage;
buildTopicPage = function(t){
  if(!t.id.startsWith('dt-c')) return __buildTopicPageMK(t);
  registerPage(t.id, (div)=>{
    div.innerHTML = `
      <div class="page-header"><div class="eyebrow">${icon('summary')} Decision Theory & Investments · ${esc(t.date)}</div><h2>${esc(t.title)}</h2><p>${esc(t.examWeight)}</p></div>
      <div class="page-body">
        ${t.drills&&t.drills.length?`<div class="chip-row"><span class="chip-label">Practise it:</span>${t.drills.map(d=>`<button class="chip" onclick="dtDrillOpen('${d}')">Drill · ${esc(dtDrillLabel(d))}</button>`).join('')}</div>`:''}
        <div class="tabbar"><button class="tabbtn active" data-tab="sum">Summary</button><button class="tabbtn" data-tab="qz">Quiz</button><button class="tabbtn fc-side" data-tab="fc">Flashcards (optional)</button></div>
        <div class="tabpanel active" id="${t.id}-sum"></div><div class="tabpanel" id="${t.id}-qz"></div><div class="tabpanel" id="${t.id}-fc"></div>
      </div>`;
    div.querySelectorAll('.tabbtn').forEach(btn=>{
      btn.onclick = ()=>{
        div.querySelectorAll('.tabbtn').forEach(b=>b.classList.remove('active'));
        div.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
        btn.classList.add('active');
        const panel = div.querySelector(`#${t.id}-${btn.dataset.tab}`); panel.classList.add('active');
        if(btn.dataset.tab==='fc' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderFlashcards(panel, t.cards, 'fc-'+t.id); }
        if(btn.dataset.tab==='qz' && !panel.dataset.loaded){ panel.dataset.loaded='1'; renderQuiz(panel, shuffledQuiz(t), 'quiz-'+t.id); }
      };
    });
    renderSummary(div.querySelector(`#${t.id}-sum`), t.title, t.summary, t.id);
  });
};

/* ============================================================ WIRING (sidebar, search, home card, radar, plan) ============================================================ */
const __buildSidebarNavMK = buildSidebarNav;
buildSidebarNav = function(subjId){
  if(subjId!=='dt') return __buildSidebarNavMK(subjId);
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  DT_NAV.forEach(section=>{
    html += `<div class="nav-section-label">${section.sec}</div>`;
    section.items.forEach(it=>{ html += `<div class="nav-item" data-page="${it.id}" onclick="navTo('${it.id}')">${icon(it.icon)}<span>${esc(it.label)}</span></div>`; });
  });
  nav.innerHTML = html;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.page===location.hash.replace('#','')));
};
const __buildSearchIndexMK = buildSearchIndex;
buildSearchIndex = function(){
  const idx = __buildSearchIndexMK();
  const add = (e)=>{ e.norm = searchNorm(e.title+' '+e.text); idx.push(e); };
  DT_EXAMS.forEach(e=>dtExamQuestions(e).forEach(q=>add({type:'Exam task', rank:2, title:`${e.short} Q${q.n} · ${q.title}`, text:texPlain(q.text), where:`Decision Theory & Investments · ${e.title}`, page:'dt-'+e.id})));
  DT_TOPICS.forEach(t=>{
    const where = `Decision Theory & Investments · ${t.date}`;
    add({type:'Topic', rank:0, title:t.title, text:t.examWeight, where, page:t.id, tab:'sum'});
    t.summary.trim().split(/\n\n+/).forEach(p=>add({type:'Summary', rank:1, title:t.title, text:texPlain(searchFlat(p)), where, page:t.id, tab:'sum'}));
    t.cards.forEach(c=>add({type:'Flashcard', rank:3, title:texPlain(c.q), text:texPlain(c.a), where:`${where} · ${t.title}`, page:t.id, tab:'fc'}));
    t.quiz.forEach(q=>add({type:'Quiz', rank:4, title:texPlain(q.q), text:texPlain(q.exp||''), where:`${where} · ${t.title}`, page:t.id, tab:'qz'}));
  });
  DT_TYPES.forEach(t=>add({type:'Drill', rank:1, title:t.label, text:t.desc||'', where:'Decision Theory & Investments · Task Drills', page:'dt-drill'}));
  DT_CHEAT.forEach(b=>b.items.forEach(it=>add({type:'Cheat sheet', rank:2, title:b.h, text:texPlain(it), where:'Decision Theory & Investments · Formula Sheet', page:'dt-cheat'})));
  DT_NAV.forEach(sec=>sec.items.forEach(it=>add({type:'Page', rank:0, title:it.label, text:sec.sec, where:`Decision Theory & Investments · ${sec.sec}`, page:it.id})));
  return idx;
};
const __buildHomeCardsMK = buildHomeCards;
buildHomeCards = function(){
  __buildHomeCardsMK();
  const wrap = document.getElementById('home-cards');
  const s = SUBJECTS.find(x=>x.id==='dt');
  const html = `<div class="subj-card" onclick="selectSubject('dt',true)">
      <div class="banner" style="background:var(--tile-banner)">${homeIcon('stat')}</div>
      <div class="body"><span class="tag" style="background:var(--bg2);color:var(--ink-soft)">DECISION THEORY</span><h3>${s.label}</h3><p>${s.short}</p>
        <div class="stats"><span>${DT_TOPICS.length} classes · ${DT_TOPICS.reduce((n,t)=>n+t.quiz.length,0)} quiz questions</span><span>${DT_EXAMS.length} past exams interactive</span><span>${DT_DRILL_KINDS.length} drill types · mock exam</span><span>${dtDaysLeft()} days to 18 Dec</span></div></div></div>`;
  const ph = [...wrap.querySelectorAll('.subj-card.soon')].find(c=>{ const tag = c.querySelector('.tag'); return tag && tag.textContent==='DECISION THEORY'; });
  if(ph) ph.outerHTML = html; else wrap.insertAdjacentHTML('beforeend', html);
};
const __fcMasteryLectureMK = fcMasteryLecture;
fcMasteryLecture = function(subjId){
  if(subjId!=='dt') return __fcMasteryLectureMK(subjId);
  return {gotit:0, partial:0, dontknow:0, total:0, pct:0};
};
const __radarAxesMK = radarAxes;
radarAxes = function(mode){
  if(mode==='dt') return DT_TYPES.map(t=>({label:t.short, page:'dt-drill', score:dtTypeScore(t.id)}));
  return __radarAxesMK(mode);
};
const __planDaysLeftMK = planDaysLeft;
planDaysLeft = function(subj){ if(subj==='dt') return Math.max(1, Math.ceil((PLAN_EXAM_DT - planStart())/86400000)); return __planDaysLeftMK(subj); };
const __planItemPoolMK = planItemPool;
planItemPool = function(){
  const items = __planItemPoolMK();
  DT_TOPICS.forEach(t=>{ const s = dtTopicScore(t); items.push({subj:'dt', label:`${t.date} · ${t.title} — summary + quiz`, page:t.id, weight:s==null ? 1 : 1-s, size:t.quiz.length + Math.round(t.summary.split(/\s+/).length/120)}); });
  DT_TYPES.forEach(t=>{ const s = dtTypeScore(t.id); items.push({subj:'dt', label:`Drill · ${t.label}`, page:'dt-drill', drill:t.id, weight:s==null ? 1 : 1-s, size:t.pts, mustPrio:t.id==='dec' && (s==null || s<.8)}); });
  DT_EXAMS.forEach(e=>{ const s = dtExamScore(e); items.push({subj:'dt', label:`${e.title} — write it in 90 min, then check`, page:'dt-'+e.id, weight:s ? Math.max(.2, 1-s.got/90) : .9, size:12}); });
  items.push({subj:'dt', label:'Mock Exam — 90 min, new numbers', page:'dt-mock', weight:.8, size:12});
  items.forEach(i=>{ i.large = false; i.prio = false; });
  const bySize = items.map(i=>i.size).sort((a,b)=>b-a);
  const sizeCut = bySize[Math.floor(items.length/3)-1];
  items.forEach(i=>{ i.large = i.size>=sizeCut; });
  items.slice().sort((a,b)=> b.weight-a.weight || b.size-a.size).slice(0, Math.ceil(items.length/3)).forEach(i=>{ if(i.weight>=.4) i.prio = true; });
  items.forEach(i=>{ if(i.mustPrio){ i.prio = true; i.large = true; } });
  return items;
};
const __planScheduleMK = planSchedule;
planSchedule = function(item, idx){
  if(item.subj==='dt' && (item.page==='dt-mock' || item.page.startsWith('dt-') && item.page!=='dt-drill' && !item.page.startsWith('dt-c'))){
    const h = planDaysLeft('dt'), i = DT_EXAMS.findIndex(e=>'dt-'+e.id===item.page);
    if(item.page==='dt-mock') return Array.from(new Set([Math.max(1,h-4), Math.max(1,h-1)]));
    return [Math.max(1, h-5-i*3)];
  }
  return __planScheduleMK(item, idx);
};
const __buildStudyPlanMK = buildStudyPlan;
buildStudyPlan = function(){
  __buildStudyPlanMK();
  const build = lazyPages['plan'];
  if(build) lazyPages['plan'] = ()=>{ build(); dtPatchPlanPage(document.getElementById('page-plan')); };
};
function dtPatchPlanPage(div){
  if(div.__dtPatched) return; div.__dtPatched = true;
  const eb = div.querySelector('.page-header .eyebrow'); if(eb) eb.textContent = 'S2/2 · Math II, Statistics, Marketing, Decision Theory, Bookkeeping & FSA';
  const p = div.querySelector('.page-header p'); if(p) p.textContent = 'See where you are weak, then follow a day-by-day plan up to your exams: Math II and Statistics on 14 December (Quantitative Analytics II), Marketing on 16 December, Decision Theory & Investments on 18 December, Bookkeeping and Financial Statement Analysis on 21 December. Weak chapters and task types show up more often; mock exams, past exams and mixed drills sit near the end.';
  const tabs = div.querySelector('.radar-tabs');
  if(tabs){ const bk = tabs.querySelector('[data-subj="bk"]'); const b = '<button class="tabbtn" data-subj="dt">Decision Theory</button>'; if(bk) bk.insertAdjacentHTML('beforebegin', b); else tabs.insertAdjacentHTML('beforeend', b); }
  const bkLab = div.querySelector('.plan-exam-val[data-subj="bk"]');
  const lab = `<label>Decision Theory & Investments — exam date <span class="plan-exam-val" data-subj="dt"></span></label>`;
  if(bkLab) bkLab.parentElement.insertAdjacentHTML('beforebegin', lab);
  renderPlanDays(div);
}
const __renderPlanDaysMK = renderPlanDays;
renderPlanDays = function(div){
  __renderPlanDaysMK(div);
  const fmt = {day:'numeric', month:'short', year:'numeric'};
  div.querySelectorAll('.plan-exam-val[data-subj="dt"]').forEach(el=>{ el.textContent = `${PLAN_EXAM_DT.toLocaleDateString('en-GB', fmt)} · ${planDaysLeft('dt')}d`; });
  div.querySelectorAll('.plan-subj-tag').forEach(el=>{ if(el.textContent==='DT') el.textContent = 'DECISION THEORY'; });
};
const __renderRadarMK = renderRadar;
renderRadar = function(div){
  __renderRadarMK(div);
  if(div.dataset.radarSubj==='dt'){ const reco = div.querySelector('.radar-reco'); if(reco) reco.innerHTML = reco.innerHTML.replace(/Rate flashcards and finish quizzes|Finish the lecture quizzes and the Exam-Format Trainer/, 'Check past-exam tasks and do the Task Drills'); }
};
