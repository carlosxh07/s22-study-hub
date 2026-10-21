/* ============================================================ DECISION THEORY & INVESTMENTS DATA (Prof. Raša Karapandža) ============================================================ */
// Exam tool only. Each past-exam task is a generator call (DT_GEN in app_dt.js) with the exam's own numbers, so
// solutions are computed, not typed. Never write the dollar sign in text (KaTeX delimiter) — use USD.
// Answer keys were checked against our own calculation; differences are shown as notes/flags on the task.
const PLAN_EXAM_DT = new Date(2026,11,18); // written exam 18.12.2026, 09:00–10:30

const DT_TYPES = [
  {id:'pvadd', label:'Adding present values', short:'PV add', pts:2, desc:'PVs are additive; duration is a distractor'},
  {id:'perp', label:'Retirement perpetuity', short:'Perpetuity', pts:4, desc:'C / r with the rate per payment period'},
  {id:'fwd', label:'Forward rate from the spot curve', short:'Forward', pts:6, desc:'no arbitrage, semiannual / continuous / annual / quarterly quotes'},
  {id:'mort', label:'Mortgage / annuity', short:'Mortgage', pts:4, desc:'payment or number of months of an ordinary annuity'},
  {id:'bond', label:'Bond priced off the spot curve', short:'Bond', pts:11, desc:'timeline, PV of coupons, PV of last payment, price'},
  {id:'proj', label:'Project NPV with irregular cash flows', short:'Project NPV', pts:13, desc:'timeline, segment PVs, growing perpetuity, NPV'},
  {id:'rates', label:'Fisher & effective rates', short:'Rates', pts:4, desc:'real vs nominal, daily compounding, EAR'},
  {id:'port', label:'Portfolio return & risk', short:'Portfolio', pts:11, desc:'value weights, expected return, standard deviation'},
  {id:'capm', label:'CAPM & beta', short:'CAPM', pts:3, desc:'risk premium, expected return, diversified investor'},
  {id:'dur', label:'Duration & interest-rate risk', short:'Duration', pts:3, desc:'Macaulay duration in years'},
  {id:'irr', label:'Internal rate of return', short:'IRR', pts:4, desc:'two-period IRR via quadratic, accept/reject'},
  {id:'dec', label:'Decision rules & expected utility', short:'Decisions', pts:25, desc:'outcome matrix, Maximin, Maximax, Hurwicz, Laplace, expected value, expected utility'},
  {id:'ret', label:'Stock returns', short:'Returns', pts:4, desc:'holding period return with dividends'}
];

const DT_T25 = [3.52,3.58,3.61,3.74,3.89,3.98,4.05,4.12,4.18,4.24,4.45];
const DT_T19 = [1.52,1.55,1.53,1.56,1.57,1.61,1.64,1.67,1.78,1.84,2.14];
const DT_T18 = [2.32,2.40,2.40,2.54,2.68,2.72,2.72,2.70,2.77,2.85,3.01];
const DT_T17 = [1.18,1.33,1.47,1.69,1.82,1.95,2.16,2.30,2.39,2.59,2.77];
const DT_T16 = [0.41,0.54,0.64,0.85,1.15,1.43,1.89,2.26,2.47,2.87,3.16];
function dtDoubling(cf, from, to){ for(let t=from;t<=to;t++) cf[t] = cf[t-1]*2; return cf; }
const DT_SIM_CF = (()=>{ const cf = {1:200, 2:200, 3:200}; for(let t=4;t<=10;t++) cf[t] = 200*Math.pow(.95, t-3); return cf; })();

const DT_EXAMS = [
/* ---------------------------------------------------------------- FT 2025 ---------------------------------------------------------------- */
{id:'ft25', title:'Exam FT 2025', short:'FT 25', when:'19 Dec 2025', kind:'Real exam · answer key', latest:true,
 desc:'The newest real exam (90 min, 90 points, 12 tasks) — the layout to expect. Write it in 90 minutes on paper, then type in your results task by task.',
 notes:['**Q6 d/e — the key discounts one year too many.** $C_{13}/(r-g) = 640{,}000$ is the value at **year 12** (one year before the first payment), so it must be divided by $1.08^{12}$, not $1.08^{13}$: PV = 254,152.80 and NPV = 77,568.29 (key: 235,326.67 and 58,742.15). Both are accepted here.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:850, b:-320, da:5, db:3, names:['A','B'], opts:['USD 1,170','USD 530','−USD 530','USD 170','None of the above'], correct:1}},
 {n:2, gen:'perp', pts:4, p:{C:15000, per:'month', nom:.048, opts:['USD 3,750,000','USD 37,500,000','USD 312,500','None of the above'], correct:0}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T25, a:3, len:2, firm:'Tesla', b2:'cont'}},
 {n:4, gen:'mort', pts:4, p:{P:1500000, nom:.054, n:360, name:'Sarah', opts:['USD 8,422.96','USD 8,612.19','USD 7,854.32','None of the above'], correct:0}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T25, F:5000, c:.035, T:3, freq:1}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:185000, r:.08, cf:dtDoubling({1:0,2:150,3:0,4:150,5:0,6:150}, 7, 12), tail:{s:13, cf:19200, g:.05}, segs:[[1,5],[6,12],[13,null]], name:'CCC',
   listing:'Year 1: USD 0\nYear 2: USD 150\nYear 3: USD 0\nYear 4: USD 150\nYear 5: USD 0\nYear 6: USD 150\nYear 7: USD 300 (100% more than in year 6)\n… increases at the rate of 100% each year …\nYear 12: USD 9,600\nYear 13: USD 19,200\nYear 14: USD 20,160 (5% more than in year 13)\nYear 15: USD 21,168 (5% more than in year 14)\n… and then continues to grow at the rate of 5% till eternity.'},
   flags:{d:'The answer key divides 640,000 by $1.08^{13}$ and gets 235,326.67. Wrong by one year: $C/(r-g)$ already sits at year 12. Correct: $640{,}000/1.08^{12} = 254{,}152.80$.', e:'Key: NPV = 58,742.15 (follows from the error in d). Correct: 77,568.29 — both accepted here.'},
   alt:{d:[235326.67], e:[58742.15]}},
 {n:7, gen:'fisher', pts:4, p:{real:.03, inf:.025}},
 {n:8, gen:'port3', pts:11, p:{names:['Nvidia','Apple','Microsoft'], V:[4500,4200,3600], ER:[.22,.18,.20], SD:[.35,.28,.30], rho:[.65,.70,.75]}},
 {n:9, gen:'capm', pts:3, p:{mrp:.07, beta:1.8, opts:['Less than 12.6%','12.6%','Greater than 12.6%','14.2%','Cannot be determined'], correct:1}},
 {n:10, gen:'dur', pts:3, p:{F:10000, c:.04, T:4, y:.035, opts:['3.78 years','3.78%','4 years','4%','None of the above'], correct:0}},
 {n:11, gen:'irr', pts:4, p:{I:2850000, cfs:[1200000,2000000], k:.12, name:'Amazon', opts:['The IRR is roughly 7.43% and the project should not be accepted.','The IRR is roughly 7.43% and the project should be accepted.','The IRR is roughly 13.8% and the project should not be accepted.','The IRR is roughly 13.8% and the project should be accepted.'], correct:0}},
 {n:12, gen:'dec', pts:25, p:{W0:25000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Recession',p:.45},{n:'Stable',p:.30},{n:'Boom',p:.25}],
   strat:[{n:'I', d:'100% bonds', desc:'You can invest 100% of your money into bonds.', r:[.035,.035,.035]},
          {n:'II', d:'100% market', desc:'You can invest 100% of your money into the value-weighted market portfolio.', r:[-.20,.12,.35]},
          {n:'III', d:'60% market / 40% bonds', desc:'You can invest 60% of the money into the value-weighted market portfolio and 40% into bonds.', r:[.6*-.2+.4*.035, .6*.12+.4*.035, .6*.35+.4*.035]},
          {n:'IV', d:'40% market / 60% bonds', desc:'You can invest 40% of the money into the value-weighted market portfolio and 60% into bonds.', r:[.4*-.2+.6*.035, .4*.12+.6*.035, .4*.35+.6*.035]}],
   rules:[{k:'matrix',pts:8},{k:'maximin',pts:2},{k:'hurwicz',a:.4,pts:4},{k:'laplace',pts:4},{k:'eu',pts:7,q:'Together with your banking advisor you establish the opinion that it is 45% probable that markets enter a recession, 30% that they remain stable and 25% that they boom. '}],
   intro:'You would like to invest €25,000 which you have received from your grandparents after your graduation. You can choose how much to invest into a well-diversified value-weighted market portfolio and into bonds. You are considering the following four investment opportunities:',
   env:'You estimate that there is a 45% chance of a recession taking place in 1 year from now, 30% that markets will remain stable, and 25% of a booming economy. If a recession takes place, the value-weighted market portfolio will experience a −20% return. If the economy remains stable, markets will grow 12%. If an economic boom happens, markets will grow 35%. Bonds will grow by 3.5% no matter what happens with the economy.'}}
 ]},
/* ---------------------------------------------------------------- SIMULATION ---------------------------------------------------------------- */
{id:'sim', title:'Simulation (solved)', short:'Sim', when:'19 Dec 2024 · in class 12 Dec 2025', kind:'Practice exam · answer key',
 desc:'The simulation with answer key (90 points). The in-class practice of 12 Dec 2025 used exactly these tasks with 60 points — so it shows what Karapandža likes to ask beyond the standard layout: effective rates, stock returns with dividends and a two-stock portfolio.',
 notes:['**Q2 a:** the key marks 10.55%, but its own calculation gives $(1+0.10/365)^{365}-1 = 10.52\\%$ → answer a (10.51%) is the closest.',
        '**Q4:** the key grows the USD 5 dividend by 10% (9.5%). The USD 5 is already paid at the end of this year, so the one-year return is $(5+104-100)/100 = 9\\%$. Both accepted.',
        '**Q6 c:** the key writes −0.0243 for the covariance term; correct is $2\\cdot0.5\\cdot0.5\\cdot(-0.9)\\cdot0.15\\cdot0.18 = -0.01215$. Its final 3.97% is right.',
        '**Q7 e:** the key squares the returns in % (so −15% gives a utility of +225). Squaring final wealth instead gives the same choice (commodities): with $U = x^2$ the investor is risk-seeking.'],
 q:[
 {n:1, gen:'proj', pts:20, points:[2,5,5,5,3], title:'Nvidia mini pipeline — declining cash flows', p:{I:3000, r:.085, cf:DT_SIM_CF, tail:{s:11, cf:139.66, g:0}, segs:[[1,3],[4,10],[11,null]], name:'Nvidia mini pipeline',
   listing:'Year 1: USD 200\nYear 2: USD 200\nYear 3: USD 200\nYear 4: USD 190 (5% less than in year 3)\nYear 5: USD 180.50 (5% less than in year 4) — decreases at the rate of 5% …\nYear 10: USD 139.66\nYear 11: USD 139.66 (the same as in year 10)\n… and then continues to pay USD 139.66 every year till eternity.'},
   text:'Retail shareholders in Nvidia have a chance to invest USD 3,000 today (year 0) into a mini pipeline project of the company that offers the following cash flow stream:\n\n- Year 1: USD 200\n- Year 2: USD 200\n- Year 3: USD 200\n- Year 4: USD 190 (5% less than in year 3)\n- Year 5: USD 180.50 (5% less than in year 4) — decreases at the rate of 5% …\n- Year 10: USD 139.66\n- Year 11: USD 139.66 (the same as in year 10)\n- … and then continues to pay USD 139.66 every year till eternity.\n\nOpportunity cost of capital is 8.5%.'},
 {n:2, gen:'ear', pts:10, p:{A:{nom:.10, m:365}, B:{nom:.11, m:12}, pts:[4,4,2], optsA:['10.51%','10.55%','9.43%','11.19%'], cA:0, optsB:['11.78%','10.85%','11.57%','10.12%'], cB:2, cC:2,
   flagA:'The answer key marks b (10.55%) although its own line computes 10.51%. $(1+0.10/365)^{365}-1 = 10.52\\%$ → a is the right choice.'}},
 {n:3, gen:'mort', pts:7, p:{P:200000, perMonth:.003, n:500, name:'Alex', cur:'€', opts:['842 Euros','773 Euros','519 Euros','680 Euros'], correct:1}},
 {n:4, gen:'ret', pts:6, p:{kind:'div', P0:100, D:5, g:.10, P1:104, alt:[9.5],
   flag:'The key gets 9.5% by growing the dividend: $(104-100)/100 + 5\\cdot1.1/100$. But the USD 5 is the dividend at the end of this year — the 10% growth only concerns later years. The clean one-year return is 9%. Both are accepted here; in the exam, state how you read the question.'}},
 {n:5, gen:'ret', pts:4, p:{kind:'tot', inv:500, dP:-.2, D:3, stock:'Pfizer'}},
 {n:6, gen:'port2', pts:18, points:[4,4,5,5], p:{names:['Costco','Home Depot'], ER:[.20,.25], SD:[.15,.18], V:[50,800], vu:['bn','m'], rho:-.9}},
 {n:7, gen:'dec', pts:25, p:{W0:100, cur:'USD', unit:'return', u:'sq',
   states:[{n:'Boom',p:.25},{n:'Normal',p:.50},{n:'Recession',p:.25}],
   strat:[{n:'1', d:'stocks only', desc:'Stocks only: 10% in a normal economy, 19 points more in a boom, −4% in a recession.', r:[.29,.10,-.04]},
          {n:'2', d:'bonds only', desc:'Bonds only: 5% in a normal economy, 10 points more in a boom, −2% in a recession.', r:[.15,.05,-.02]},
          {n:'3', d:'commodity futures only', desc:'Commodity futures only: 25% in a normal economy, twice as much in a boom, −15% in a recession.', r:[.50,.25,-.15]},
          {n:'4', d:'equal mix', desc:'Invest equally in all three asset classes.', r:[(.29+.15+.5)/3, (.10+.05+.25)/3, (-.04-.02-.15)/3]}],
   rules:[{k:'matrix',pts:3},{k:'maximin',pts:5},{k:'hurwicz',a:.5,pts:5},{k:'laplace',pts:5},{k:'eu',pts:7,u:'sq',on:'return',q:'A consultant estimates a 25% chance of a boom, 50% of a stable economy and 25% of a recession. ',
     note:'The key squares the returns in %, as done here. Squaring final wealth (USD 100m × (1+r)) gives the same choice.'}],
   intro:'You are a fund manager at Vanguard and would like to invest USD 100 million for a short-term horizon in stocks, bonds or commodity futures. "19% more returns than in a normal economy" is read as +19 percentage points (29%), as in the answer key. You have four options:',
   env:'Treat the matrix in returns (%), as the answer key does.'}}
 ]},
/* ---------------------------------------------------------------- 2019 ---------------------------------------------------------------- */
{id:'e19', title:'Exam 2019', short:'2019', when:'17 Dec 2019', kind:'Real exam (Finance 1) · answer key',
 desc:'Real exam from 2019 (then "Finance 1", same professor, same task types, 14 tasks).',
 notes:['**Q5:** the key’s PV of the last payment is 975.47 and the price 1,034.31; exact calculation gives 975.60 and 1,034.44 (rounding in the key — both accepted). Its formula for the 1-year coupon also shows a wrong average, but the number 58.84 is right.',
        '**Q14:** the key builds the outcome matrix in returns and the expected utility in € — the rankings are the same. Here the matrix is in final values (€).'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:400, b:-150, da:4, db:2, names:['X','Y'], opts:['USD 200','USD 250','USD 50','USD 600','None of the above'], correct:1}},
 {n:2, gen:'perp', pts:2, p:{C:250000, per:'year', nom:.025, opts:['USD 1,000,000','USD 10,000,000','USD 100,000','None of the above'], correct:1}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T19, a:2, len:1, firm:'Lufthansa', b2:'ann'}},
 {n:4, gen:'irr', pts:3, p:{I:1735537.19, cfs:[1000000,1000000], name:'Tesla', opts:['8%','9%','10%','11%'], correct:2, text:'Tesla is considering investing USD 1,735,537.19 in a new project. The project will pay USD 1,000,000 in each of the next two years. Calculate the IRR of the project.'}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T19, F:1000, c:.03, T:2.5, freq:2}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:20000, r:.04, cf:Object.assign(dtDoubling({1:0,2:100,3:0,4:100,5:0,6:100}, 7, 13), {14:25600}), tail:{s:15, cf:25600, g:.02}, segs:[[1,5],[6,13],[14,null]], name:'AAA',
   listing:'Year 1: USD 0\nYear 2: USD 100\nYear 3: USD 0\nYear 4: USD 100\nYear 5: USD 0\nYear 6: USD 100\nYear 7: USD 200 (100% more than in year 6)\n… increases at the rate of 100% each year …\nYear 13: USD 12,800\nYear 14: USD 25,600\nYear 15: USD 25,600\nYear 16: USD 26,112 (2% more than in year 15)\n… and then continues to grow at the rate of 2% till eternity.'}},
 {n:7, gen:'fisher', pts:3, points:[1,2], p:{real:.20, inf:.02}},
 {n:8, gen:'port3', pts:11, p:{names:['Apple','Microsoft','Google'], V:[1094,1158,924], ER:[.04,.06,.08], SD:[.20,.25,.15], rho:[.6,.8,.8]}},
 {n:9, gen:'mc', pts:1, p:{type:'capm', title:'Same return, different total risk', text:'Investments A and B both offer an expected rate of return of 12%. If the standard deviation of A is 20% and that of B is 30%, then a well-diversified investor would:',
   opts:['Prefer A to B','Prefer B to A','Cannot answer without knowing betas and the investor’s risk preference'], correct:2,
   sol:'A well-diversified investor has already diversified away the firm-specific risk, so the standard deviation of a single asset does not matter to them — only its **systematic** risk (beta) does. Without the betas you cannot rank A and B → **c**.'}},
 {n:10, gen:'capm', pts:4, p:{rf:.015, mrp:.02, stocks:[['Apple',1.9],['Microsoft',1.23]]}},
 {n:11, gen:'mort', pts:4, p:{P:300000, perMonth:.0005, pay:1500, name:'John', opts:['151 months','305 months','211 months','None of the above'], correct:2}},
 {n:12, gen:'mc', pts:2, p:{type:'dur', title:'Which bond has the most interest-rate risk?', text:'Which of the following U.S. government bonds has the greatest interest rate risk?',
   opts:['An 8-year maturity, 10% coupon bond.','An 8-year maturity, 5% coupon bond.','A 10-year maturity, 5% coupon bond.','A 10-year maturity, 10% coupon bond.','Cannot tell from the information given.'], correct:2,
   sol:'Interest-rate risk grows with **duration**. Duration is longer when maturity is longer and when the coupon is lower (more of the value sits in the distant face value). The 10-year, 5% coupon bond has the longest duration → **c**.'}},
 {n:13, gen:'irr', pts:4, p:{I:1240000, cfs:[500000,1000000], k:.14, name:'Lufthansa', opts:['The IRR is roughly 12.2% and the project should not be accepted.','The IRR is roughly 12.2% and the project should be accepted.','The IRR is roughly 14.47% and the project should not be accepted.','The IRR is roughly 14.47% and the project should be accepted.'], correct:0}},
 {n:14, gen:'dec', pts:24, p:{W0:200000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Stable',p:.4},{n:'Good',p:.3},{n:'Crisis',p:.3}],
   strat:[{n:'I', d:'A only', desc:'Invest in shares of company A only: 10% if the economy stays stable, 10% if things go very well, −15% in a crisis.', r:[.10,.10,-.15]},
          {n:'II', d:'B only', desc:'Invest in shares of company B only: 5% in normal times, 15% in good times, −5% in bad times.', r:[.05,.15,-.05]},
          {n:'III', d:'50% A / 50% B', desc:'Invest 50% in each of the two companies.', r:[.075,.125,-.10]}],
   rules:[{k:'matrix',pts:6},{k:'maximin',pts:2},{k:'hurwicz',a:.3,pts:4},{k:'laplace',pts:4},{k:'eu',pts:8,q:'Together with your banking advisor you estimate that markets remain stable with 40% probability, and slide into a boom or a crisis with 30% each. '}],
   intro:'You would like to invest €200,000 which you have received from your grandparents after your graduation. You consider three ways to split it between two companies:',
   env:'Final values = €200,000 × (1 + return).'}}
 ]},
/* ---------------------------------------------------------------- 2018 ---------------------------------------------------------------- */
{id:'e18', title:'Exam 2018', short:'2018', when:'2018', kind:'Real exam · answer key',
 desc:'Real exam from 2018 with answer key (11 tasks). The decision task here is the biggest ever: 27 points incl. Maximax.',
 notes:['**Q11 d — Hurwicz with α the other way round.** The key computes $H = \\alpha\\cdot\\text{worst} + (1-\\alpha)\\cdot\\text{best}$ and picks 100% market (12,050). Every newer key (FT 2025, 2019, simulation) uses $H = \\alpha\\cdot\\text{best} + (1-\\alpha)\\cdot\\text{worst}$; with α = 0.3 that gives **100% bonds** (10,400). This hub uses the newer convention — in the exam, write your formula down.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:-600, b:450, da:3, db:5, names:['X','Y'], opts:['USD 650','−USD 150','−USD 50','USD 150','I need more data'], correct:1}},
 {n:2, gen:'perp', pts:4, p:{C:10000, per:'month', nom:.06, opts:['USD 2,000,000','USD 20,000,000','USD 166,666.67','None of the above'], correct:0}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T18, a:4, len:2, firm:'Lufthansa', b2:'cont'}},
 {n:4, gen:'mort', pts:4, p:{P:2000000, nom:.04, n:300, name:'John', opts:['USD 10,707.15','USD 10,556.74','USD 8,069.63','None of the above'], correct:1}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T18, F:10000, c:.02, T:4, freq:1}},
 {n:6, gen:'proj', pts:15, points:[2,2,4,3,2,2], p:{I:213113.87, r:.07, cf:dtDoubling({1:40,2:80,3:0,4:300,5:50,6:100}, 7, 13), tail:{s:14, cf:14560, g:.04}, segs:[[1,5],[6,13],[14,null]], name:'BBB', irr:true,
   listing:'Year 1: USD 40\nYear 2: USD 80\nYear 3: USD 0\nYear 4: USD 300\nYear 5: USD 50\nYear 6: USD 100\n… 100% more each year …\nYear 13: USD 12,800\nYear 14: USD 14,560\nYear 15: USD 15,142.40\n… and then continues to receive 4% more till eternity.'}},
 {n:7, gen:'fisher', pts:4, p:{real:.02, inf:.03}},
 {n:8, gen:'port3', pts:11, p:{names:['Apple','Microsoft','Google'], V:[800,804,723], ER:[.20,.15,.25], SD:[.25,.20,.30], rho:[.5,.1,.2]}},
 {n:9, gen:'capm', pts:3, p:{mrp:.08, beta:1.5, opts:['Less than 12%','12%','Greater than 12%','13.6%','Cannot be determined'], correct:1}},
 {n:10, gen:'dur', pts:3, p:{F:1000, c:.05, T:3, y:.03, opts:['2.86 years','2.86%','3 years','3%'], correct:0}},
 {n:11, gen:'dec', pts:27, p:{W0:10000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Recession',p:.5},{n:'Stable',p:.25},{n:'Boom',p:.25}],
   strat:[{n:'1', d:'100% bonds', desc:'Invest 100% of your money into bonds.', r:[.04,.04,.04]},
          {n:'2', d:'100% market', desc:'Invest 100% into the value-weighted market portfolio.', r:[-.25,.10,.40]},
          {n:'3', d:'50% market / 50% bonds', desc:'Invest 50% into the market portfolio and 50% into bonds.', r:[.5*-.25+.5*.04, .5*.10+.5*.04, .5*.40+.5*.04]},
          {n:'4', d:'30% market / 70% bonds', desc:'Invest 30% into the market portfolio and 70% into bonds.', r:[.3*-.25+.7*.04, .3*.10+.7*.04, .3*.40+.7*.04]}],
   rules:[{k:'matrix',pts:8},{k:'maximin',pts:2},{k:'maximax',pts:2},{k:'hurwicz',a:.3,pts:4,flag:'The 2018 key uses α as the weight of the **worst** outcome and picks 100% market (H = 12,050). With the convention of all newer keys, $H = \\alpha\\cdot\\text{best} + (1-\\alpha)\\cdot\\text{worst}$, α = 0.3 gives 100% bonds (10,400 vs 9,450 / 9,925 / 10,115). Write the formula in the exam.'},{k:'laplace',pts:4},{k:'eu',pts:7}],
   intro:'You would like to invest €10,000 which you have received from your grandparents after your graduation. You can choose how much to invest into a well-diversified value-weighted market portfolio and into bonds:',
   env:'You estimate a 50% chance of a recession in 1 year, 25% that markets remain stable and 25% of a boom. In a recession the market portfolio returns −25%, in a stable economy +10%, in a boom +40%. Bonds grow by 4% no matter what.'}}
 ]},
/* ---------------------------------------------------------------- 2017 ---------------------------------------------------------------- */
{id:'e17', title:'Exam 2017', short:'2017', when:'2017', kind:'Real exam · no key (self-computed)', src:'self',
 desc:'Real exam from 2017 without answer key — every solution here is computed by the hub (same formulas as the solved exams).',
 notes:['No official answer key exists for this exam: all solutions are self-computed.','**Q9:** 13.6% is also "greater than 12%", but d is the exact CAPM value → d.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:-400, b:250, da:3, db:5, names:['X','Y'], opts:['USD 650','−USD 150','−USD 50','USD 150','I need more data'], correct:1}},
 {n:2, gen:'perp', pts:2, p:{C:100000, per:'year', nom:.04, opts:['USD 2,500,000','USD 25,000,000','USD 250,000','None of the above'], correct:0}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T17, a:3, len:4, firm:'Lufthansa', b2:'cont'}},
 {n:4, gen:'mort', pts:3, p:{P:400000, perMonth:.002, n:300, name:'John', opts:['USD 1,707.15','USD 1,774.39','USD 8,069.63','None of the above'], correct:1}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T17, F:1300, c:.03, T:2.5, freq:2}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:1000, r:.07, cf:dtDoubling({1:90,2:50,3:0,4:250,5:50,6:100}, 7, 13), tail:{s:14, cf:1000, g:-.10}, segs:[[1,4],[5,13],[14,null]], name:'AAA',
   listing:'Year 1: USD 90\nYear 2: USD 50\nYear 3: USD 0\nYear 4: USD 250\nYear 5: USD 50\nYear 6: USD 100\n… 100% more each year …\nYear 13: USD 12,800\nYear 14: USD 1,000\nYear 15: USD 900\n… and then continues to pay 10% less till eternity.'}},
 {n:7, gen:'fisher', pts:4, p:{real:.17, inf:.02}},
 {n:8, gen:'port3', pts:13, points:[3,3,5,2], p:{names:['Apple','Microsoft','Google'], V:[886,657,723], ER:[.20,.15,.25], SD:[.25,.20,.17], rho:[.5,.7,.2], d:true}},
 {n:9, gen:'capm', pts:3, p:{mrp:.08, beta:1.7, opts:['Less than 12%','12%','Greater than 12%','13.6%','Cannot be determined'], correct:3, note:'13.6% is also "greater than 12%", but d is the exact value — choose d.'}},
 {n:10, gen:'dur', pts:3, p:{F:1000, c:.05, T:3, y:.03, opts:['2.86 years','2.86%','3 years','3%'], correct:0}},
 {n:11, gen:'dec', pts:30, p:{W0:100000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'Stable',p:.5},{n:'Boom',p:.25},{n:'Recession',p:.25}],
   strat:[{n:'1', d:'A only', desc:'Shares of company A only: 10% if the economy stays stable, 30% in a boom, −45% in a crisis.', r:[.10,.30,-.45]},
          {n:'2', d:'B only', desc:'Shares of company B only: 5% in a stable economy, 10% in a boom, −5% in a recession.', r:[.05,.10,-.05]},
          {n:'3', d:'50% A / 50% B', desc:'Invest 50% of the money in each share.', r:[.075,.20,-.25]}],
   rules:[{k:'matrix',pts:8},{k:'maximin',pts:2},{k:'maximax',pts:2},{k:'hurwicz',a:.7,pts:4},{k:'laplace',pts:4},{k:'ev',pts:4},{k:'eu',pts:6}],
   intro:'You would like to invest €100,000 which you have received from your grandparents after your graduation. You consider three ways to distribute it:',
   env:'Together with your banking advisor you estimate that markets remain stable with 50% probability, and slide into a boom or a recession with 25% each.'}}
 ]},
/* ---------------------------------------------------------------- 2016 ---------------------------------------------------------------- */
{id:'e16', title:'Exam 2016', short:'2016', when:'2016', kind:'Real exam · no key (self-computed)', src:'self',
 desc:'Real exam from 2016 without answer key — every solution here is computed by the hub.',
 notes:['No official answer key exists for this exam: all solutions are self-computed.',
        '**Q8:** Google’s expected return is printed as 118% — almost certainly a typo for 18%. The hub calculates with the printed number.',
        '**Q12:** A’s and B’s luck are given separately (30/70 and 90/10). The hub assumes they are independent → four joint states (probabilities 0.27 / 0.03 / 0.63 / 0.07). Say this assumption in the exam.'],
 q:[
 {n:1, gen:'pvadd', pts:2, p:{a:-400, b:350, da:3, db:5, names:['X','Y'], opts:['USD 650','−USD 150','−USD 50','USD 150','I need more data'], correct:2}},
 {n:2, gen:'perp', pts:2, p:{C:50000, per:'year', nom:.002, opts:['USD 2,500,000','USD 25,000,000','USD 250,000','None of the above'], correct:1}},
 {n:3, gen:'fwd', pts:6, p:{tab:DT_T16, a:3, len:4, firm:'Siemens', b2:'q'}},
 {n:4, gen:'mort', pts:3, p:{P:400000, perMonth:.0002, n:240, name:'John', opts:['USD 1,707.15','USD 1,670.69','USD 8,069.63','None of the above'], correct:0}},
 {n:5, gen:'bond', pts:11, p:{tab:DT_T16, F:1300, c:.03, T:2, freq:2}},
 {n:6, gen:'proj', pts:13, points:[2,2,4,3,2], p:{I:1000, r:.05, cf:dtDoubling({1:110,2:70,3:60,4:25,5:50,6:100}, 7, 13), tail:{s:14, cf:1000, g:-.10}, segs:[[1,3],[4,13],[14,null]], name:'AAA',
   listing:'Year 1: USD 110\nYear 2: USD 70\nYear 3: USD 60\nYear 4: USD 25\nYear 5: USD 50\nYear 6: USD 100\n… 100% more each year …\nYear 13: USD 12,800\nYear 14: USD 1,000\nYear 15: USD 900\n… and then continues to pay 10% less till eternity.'}},
 {n:7, gen:'fisher', pts:4, p:{real:.13, inf:.02}},
 {n:8, gen:'port3', pts:14, points:[3,3,6,2], p:{names:['Apple','Microsoft','Google'], V:[613.6,479,553.9], ER:[.20,.15,1.18], SD:[.20,.22,.25], rho:[.5,.7,.2], d:true}},
 {n:9, gen:'mc', pts:2, p:{type:'capm', title:'Return vs beta', text:'Stock A offers an expected return of 10% and stock B 12%. The standard deviation of A is 18% and of B 20%; the beta of A is 1.1 and of B 1.05. A well-diversified investor would:',
   opts:['Prefer A to B','Prefer B to A','Be indifferent','Cannot answer without additional data'], correct:1,
   sol:'For a well-diversified investor only **beta** (systematic risk) matters, not the standard deviation. B offers the higher expected return (12% vs 10%) with the lower beta (1.05 vs 1.1) → **prefer B**.'}},
 {n:10, gen:'capm', pts:3, p:{mrp:.08, beta:1.7, opts:['Less than 12%','12%','Greater than 12%','13.6%','Cannot be determined'], correct:3, note:'13.6% is also "greater than 12%", but d is the exact value — choose d.'}},
 {n:11, gen:'dur', pts:4, p:{F:1000, c:.05, T:3, y:.03, opts:['2.86 years','2.86%','3 years','3%','None of the above'], correct:0}},
 {n:12, gen:'dec', pts:26, p:{W0:50000, cur:'€', unit:'wealth', u:'sqrt',
   states:[{n:'A up · B normal',p:.27},{n:'A up · B good',p:.03},{n:'A down · B normal',p:.63},{n:'A down · B good',p:.07}],
   strat:[{n:'1', d:'A only', desc:'Shares of company A only: +20% with probability 30% (lucky), −45% with probability 70%.', r:[.20,.20,-.45,-.45]},
          {n:'2', d:'B only', desc:'Shares of company B only: +5% with probability 90%, +10% with probability 10%.', r:[.05,.10,.05,.10]},
          {n:'3', d:'50% A / 50% B', desc:'Invest 50% in each share.', r:[.125,.15,-.20,-.175]},
          {n:'4', d:'bonds', desc:'Invest into bonds that return 1%.', r:[.01,.01,.01,.01]}],
   rules:[{k:'matrix',pts:6},{k:'maximin',pts:4},{k:'hurwicz',a:.3,pts:4},{k:'laplace',pts:4},{k:'eu',pts:4,u:'sqrt',who:'You'},{k:'eu',pts:4,u:'sq',who:'Your sibling'}],
   intro:'You and your sibling would like to invest €50,000 (in total) which you have received from your grandparents after your graduation. You consider four possibilities:',
   env:'Your utility function is $U = \\sqrt{x}$, your sibling’s is $U = x^2$. Assumption (not stated in the exam): A’s and B’s outcomes are independent, so there are four joint states.'}}
 ]}
];

/* ---------- formula sheet (template for the handwritten A4 sheet) ---------- */
const DT_CHEAT = [
{h:'Exam rules', items:[
R`90 min · 90 points · calculator · 1 handwritten A4 sheet (both sides, collected) · show formula + steps everywhere (MC too: partial points) · timeline for every cash-flow task`]},
{h:'Rates & compounding', items:[
R`Effective annual rate: $EAR = \left(1+\frac{j}{m}\right)^m - 1$ · continuous: $e^{j}-1$`,
R`Convert quotes via the same EAR: $\left(1+\frac{j_1}{m_1}\right)^{m_1} = \left(1+\frac{j_2}{m_2}\right)^{m_2}$ · daily: $j = 365\left[(1+EAR)^{1/365}-1\right]$`,
R`Fisher: $1+r_{nom} = (1+r_{real})(1+\pi)$ (not just the sum)`,
R`Always state the units: "nominal annual with semiannual compounding"`]},
{h:'Present value', items:[
R`$PV = \frac{C_t}{(1+r)^t}$ · continuous $C_t e^{-rt}$ · PVs are additive (duration is irrelevant for adding)`,
R`$NPV = C_0 + \sum_t \frac{C_t}{(1+r)^t}$ → invest if $NPV > 0$`,
R`Perpetuity (first payment in 1 period): $PV = \frac{C}{r}$ · monthly payments → monthly rate $r = j/12$`,
R`Growing perpetuity: $V_{s-1} = \frac{C_s}{r-g}$ — value **one period before** the first payment $C_s$ → discount $(1+r)^{s-1}$ · declining: $g<0$ → $r-g = r+|g|$`,
R`Annuity: $PV = C\cdot\frac{1-(1+r)^{-n}}{r}$ · payment $C = PV\cdot\frac{r}{1-(1+r)^{-n}}$ · months: $n = \frac{\ln\left(1/(1-\frac{PV}{C}r)\right)}{\ln(1+r)}$`]},
{h:'Spot & forward rates', items:[
R`Missing maturity: average of the neighbours (1.5y = avg 1y & 2y; 6y = avg 5y & 7y)`,
R`Semiannual quotes: $DF_t = \left(1+\frac{r_t}{2}\right)^{-2t}$`,
R`Forward $a\to b$: $\left(1+\frac{r_b}{2}\right)^{2b} = \left(1+\frac{r_a}{2}\right)^{2a}\left(1+\frac{f}{2}\right)^{2(b-a)}$`,
R`Continuous: $f = \frac{r_b\,b - r_a\,a}{b-a}$ · annual: $(1+f)^{b-a} = \frac{(1+r_b)^b}{(1+r_a)^a}$`]},
{h:'Bonds', items:[
R`Coupon $= c\cdot F$ (÷2 if semiannual) · last date pays coupon + face value`,
R`Price = each cash flow discounted with the spot rate of its own date · coupon < rates → below par`,
R`Macaulay duration: $D = \frac{\sum t\cdot PV(CF_t)}{P}$ in **years** · longer maturity / lower coupon → higher duration → more interest-rate risk`]},
{h:'IRR', items:[
R`IRR: $NPV(IRR) = 0$ · 2 periods: $x = 1+IRR$, $C_0x^2 - C_1x - C_2 = 0$, $x = \frac{C_1 + \sqrt{C_1^2 + 4C_0C_2}}{2C_0}$ · accept if IRR > cost of capital (and NPV > 0)`]},
{h:'Portfolio & CAPM', items:[
R`Value weights $w_i = V_i/\sum V$ (same units: million vs billion!) · $E(R_p) = \sum w_iE(R_i)$`,
R`$\sigma_p^2 = \sum w_i^2\sigma_i^2 + 2\sum_{i<j} w_iw_j\sigma_i\sigma_j\rho_{ij}$ · $\sigma_{ij} = \sigma_i\sigma_j\rho_{ij}$`,
R`CAPM: $E(R_i) = r_f + \beta_i(r_m - r_f)$ · risk premium $= \beta_i(r_m-r_f)$ · diversified investors care about beta, not σ`,
R`Holding return: $r = \frac{D_1 + P_1 - P_0}{P_0}$`]},
{h:'Decision rules', items:[
R`Outcome matrix: rows = strategies, columns = states · final value $= W_0(1+\sum_k w_kr_k)$`,
R`Maximin: best of the worst · Maximax: best of the best`,
R`Hurwicz: $H = \alpha\cdot\text{best} + (1-\alpha)\cdot\text{worst}$ (α = optimism) — write it down`,
R`Laplace: equal probabilities → plain average · Expected value: $\sum p_s x_s$`,
R`Expected utility: $EU = \sum p_s U(x_s)$ · $\sqrt{x}$ concave = risk-averse · $x^2$ convex = risk-seeking`]}
];
