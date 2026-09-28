/* ============================================================ MATH II DATA — PAST EXAMS (interactive, 2022–2025) ============================================================ */
// Tableaux inside solutions: [[tab:caption \n header \n row \n …]] — cells separated by |, each cell is TeX.
// checks: regex tested against the normalised answer (lower case, no spaces, − → -, ≠ → !=, decimal comma → point, subscripts → digits)
const M2_EXAMS = [
/* ---------------------------------------------------------------- 2025 ---------------------------------------------------------------- */
{id:'e25', year:'2025', title:'Exam 2025', latest:true, ex:[
{n:1, title:'Solvability of a Linear Equation System', pts:12, topic:'m2-3', type:'solv',
 given:R`$$\begin{aligned} x_1 \phantom{+2a\,x_2} + 2x_3 &= 6\\ 2x_1 + 2a\,x_2 - 4x_3 &= 8\\ 2x_2 + 2x_3 &= 2b\end{aligned}$$ with parameters $a$ and $b$. For which values of $a$ and $b$ does the system (a) have a unique solution, (b) have infinitely many solutions, (c) is it inconsistent?`,
 parts:[
 {id:'a', label:'(a) Unique solution', pts:6, q:R`Bring the system into triangular form with the Gaussian algorithm (do not solve it) and state for which $a$, $b$ the solution is unique.`,
  hints:[R`Pivot on $x_1$ in row 1: row 2 − 2·row 1 gives $0\ \ 2a\ \ {-8} \mid -4$. Row 3 has no $x_1$.`,
         R`Now eliminate $x_3$ between rows 2 and 3: row 2 + 4·row 3 gives $(2a+8)\,x_2 = -4 + 8b$.`,
         R`The last row decides: the solution is unique if the coefficient $2a + 8 \ne 0$.`],
  checks:[{name:'Triangular form', label:'(2a+8)·x₂ = 8b − 4 (or equivalent)', rx:/2a\+8|a\+4|8b-4|-4\+8b|4b-2/, miss:'Show the last row: (2a+8)x₂ = −4 + 8b'},
          {name:'Condition on a', label:'a ≠ −4', rx:/a!=-4|a\+4!=0|2a\+8!=0|-4!=a/, miss:'State a ≠ −4'},
          {name:'b arbitrary', label:'b ∈ ℝ (any b)', rx:/b(∈|in|el)r|anyb|allb|beliebig|barbitrary|bany|bisany|forallb|every b|everyb/, miss:'Say that b can be any real number'}],
  sol:R`[[tab:Start
x_1|x_2|x_3|RHS
1|0|2|6
2|2a|-4|8
0|2|2|2b]]
[[tab:Row 2 − 2·row 1
x_1|x_2|x_3|RHS
1|0|2|6
0|2a|-8|-4
0|2|2|2b]]
[[tab:Row 2 + 4·row 3
x_1|x_2|x_3|RHS
1|0|2|6
0|2a+8|0|-4+8b
0|2|2|2b]]
The row $(2a+8)\,x_2 = -4 + 8b$ decides. **Unique solution for $a \ne -4$ and any $b \in \mathbb{R}$.**`},
 {id:'b', label:'(b) Infinitely many', pts:3, q:R`For which $a$ and $b$ are there infinitely many solutions?`,
  hints:[R`The coefficient must vanish: $2a + 8 = 0$.`, R`Then the row reads $0 = -4 + 8b$. It is a tautology if the right side is zero too.`],
  checks:[{name:'a = −4', label:'a = −4', rx:/a=-4/, miss:'Set 2a + 8 = 0 → a = −4'},
          {name:'b = ½', label:'b = 1/2', rx:/b=(1\/2|0\.5)/, miss:'Solve −4 + 8b = 0 → b = ½'}],
  sol:R`With $a = -4$ the row becomes $0\cdot x_2 = -4 + 8b$. For $b = \tfrac12$ this is $0 = 0$ (linearly dependent, one degree of freedom). **Infinitely many solutions for $a = -4$ and $b = \tfrac12$.**`},
 {id:'c', label:'(c) Inconsistent', pts:3, q:R`For which $a$ and $b$ is the system inconsistent?`,
  hints:[R`Coefficient zero, right-hand side not zero.`],
  checks:[{name:'a = −4', label:'a = −4', rx:/a=-4/, miss:'Coefficient zero: a = −4'},
          {name:'b ≠ ½', label:'b ≠ 1/2', rx:/b!=(1\/2|0\.5)/, miss:'State b ≠ ½'}],
  sol:R`For $a = -4$ and $b \ne \tfrac12$ the row reads $0 = -4 + 8b \ne 0$, a contradiction. **Inconsistent for $a = -4$ and $b \ne \tfrac12$.**`}
 ]},
{n:2, title:'Dynamic Market Shares', pts:16, topic:'m2-3', type:'market',
 given:R`Porsche, BMW and Maserati. Transitions per period: Porsche keeps 50%, loses 10% to BMW and 40% to Maserati. BMW keeps 60%, loses 40% to Maserati (0% to Porsche). Maserati keeps 40%, loses 40% to BMW and 20% to Porsche.`,
 parts:[
 {id:'a', label:'(a) Next period', pts:6, q:R`Market shares in $t = 1$: BMW 60%, Maserati 20%, Porsche 20%. Calculate the market shares in $t = 2$.`,
  hints:[R`Write the transition matrix with rows = incoming customers. Row BMW: $0.6$ from BMW, $0.4$ from Maserati, $0.1$ from Porsche.`,
         R`$s_2 = T\cdot s_1$: BMW $= 0.6\cdot0.6 + 0.4\cdot0.2 + 0.1\cdot0.2$.`],
  checks:[{name:'BMW', label:'BMW 46%', rx:/46|0\.46/, miss:'BMW: 0.6·60% + 0.4·20% + 0.1·20% = 46%'},
          {name:'Maserati', label:'Maserati 40%', rx:/40%|0\.4\b|0\.40/, miss:'Maserati: 0.4·60% + 0.4·20% + 0.4·20% = 40%'},
          {name:'Porsche', label:'Porsche 14%', rx:/14|0\.14/, miss:'Porsche: 0·60% + 0.2·20% + 0.5·20% = 14%'}],
  sol:R`Order $(B, M, P)$: $$T = \begin{pmatrix}0.6&0.4&0.1\\0.4&0.4&0.4\\0&0.2&0.5\end{pmatrix},\qquad s_2 = T\cdot\begin{pmatrix}0.6\\0.2\\0.2\end{pmatrix} = \begin{pmatrix}0.46\\0.40\\0.14\end{pmatrix}$$ Every column sums to 1. **BMW 46%, Maserati 40%, Porsche 14%.**`},
 {id:'b', label:'(b) Steady state', pts:10, q:R`Set up the linear equation system for the flow of customers, calculate the steady state and say what characterises it.`,
  hints:[R`Steady state: $s = T\cdot s$, e.g. $x_B = 0.6x_B + 0.4x_M + 0.1x_P$. Bring everything to one side.`,
         R`These equations are linearly dependent — add $x_B + x_M + x_P = 1$ (you may keep all equations, Gauss produces a zero row).`,
         R`Rows: $0.4x_B - 0.4x_M - 0.1x_P = 0$, $-0.4x_B + 0.6x_M - 0.4x_P = 0$, $-0.2x_M + 0.5x_P = 0$, $x_B + x_M + x_P = 1$.`],
  checks:[{name:'Sum = 1', label:'x_B + x_M + x_P = 1', rx:/x?b\+x?m\+x?p=1|=1/, miss:'Add the normalisation x_B + x_M + x_P = 1'},
          {name:'BMW 44%', label:'x_B = 44%', rx:/44/, miss:'x_B = 0.44'},
          {name:'Maserati 40%', label:'x_M = 40%', rx:/0\.4|40/, miss:'x_M = 0.40'},
          {name:'Porsche 16%', label:'x_P = 16%', rx:/16/, miss:'x_P = 0.16'},
          {name:'Interpretation', label:'shares constant, inflow = outflow', rx:/notchange|constant|donotchange|nochange|inflow|same|unchanged|equal/, miss:'Interpret: shares no longer change, customers still switch but inflow = outflow'}],
  sol:R`$$\begin{aligned}x_B &= 0.6x_B + 0.4x_M + 0.1x_P\\ x_M &= 0.4x_B + 0.4x_M + 0.4x_P\\ x_P &= 0\,x_B + 0.2x_M + 0.5x_P\\ 1 &= x_B + x_M + x_P\end{aligned}$$
[[tab:Start
x_B|x_M|x_P|RHS
1|1|1|1
0.4|-0.4|-0.1|0
-0.4|0.6|-0.4|0
0|-0.2|0.5|0]]
[[tab:Pivot row 1, xB
x_B|x_M|x_P|RHS
1|1|1|1
0|-0.8|-0.5|-0.4
0|1|0|0.4
0|-0.2|0.5|0]]
[[tab:Pivot row 3, xM
x_B|x_M|x_P|RHS
1|0|1|0.6
0|0|-0.5|-0.08
0|1|0|0.4
0|0|0.5|0.08]]
[[tab:Pivot on xP
x_B|x_M|x_P|RHS
1|0|0|0.44
0|0|1|0.16
0|1|0|0.4
0|0|0|0]]
The zero row shows the linear dependency. **$x_B = 44\%$, $x_M = 40\%$, $x_P = 16\%$.** In the steady state the market shares no longer change: customers still switch, but for every firm the number of customers leaving equals the number of new customers arriving.`}
 ]},
{n:3, title:'Calculation of a Determinant', pts:12, topic:'m2-5', type:'det',
 given:R`Calculate with the method of Laplace: $$\det A = \begin{vmatrix}0&5&0&2&4\\0&2&0&0&1\\0&1&0&6&4\\0&8&2&12&4\\1&0&0&5&4\end{vmatrix}$$`,
 parts:[
 {id:'a', label:'Laplace → det A', pts:12, q:R`Expand with Laplace (it is enough to go down to $3\times3$ and use Sarrus).`,
  hints:[R`Column 1 contains only one non-zero element, $a_{51} = 1$, with sign $(-1)^{5+1} = +1$.`,
         R`The remaining $4\times4$ minor has column 2 $= (0,0,0,2)^T$: expand along it — $a_{42} = 2$ with sign $(-1)^{4+2} = +1$.`,
         R`You are left with $2\cdot\begin{vmatrix}5&2&4\\2&0&1\\1&6&4\end{vmatrix}$. Sarrus: $0 + 2 + 48 - 0 - 30 - 16 = 4$.`],
  checks:[{name:'First expansion', label:'expand along column 1 (a₅₁ = 1)', rx:/column1|col1|firstcolumn|a51|1st column|spalte1/, miss:'Start with column 1: only a₅₁ = 1 is non-zero'},
          {name:'3×3 minor', label:'2 · |5 2 4; 2 0 1; 1 6 4|', rx:/2\*?\|?\(?5,?2,?4|524|2·|=4\b|=2\*4/, miss:'Reduce to 2·det(5 2 4 / 2 0 1 / 1 6 4)'},
          {name:'Result', label:'det A = 8', rx:/det\w*=8\b|=8$|\b8$/, miss:'Final result: det A = 8'}],
  sol:R`Expand along column 1 (only $a_{51} = 1$, sign $+$): $$\det A = 1\cdot(-1)^{6}\begin{vmatrix}5&0&2&4\\2&0&0&1\\1&0&6&4\\8&2&12&4\end{vmatrix}$$ Expand along column 2 (only $a_{42} = 2$, sign $(-1)^{6} = +$): $$\det A = 2\cdot\begin{vmatrix}5&2&4\\2&0&1\\1&6&4\end{vmatrix}$$ Sarrus: $5\cdot0\cdot4 + 2\cdot1\cdot1 + 4\cdot2\cdot6 - 4\cdot0\cdot1 - 5\cdot1\cdot6 - 2\cdot2\cdot4 = 0 + 2 + 48 - 0 - 30 - 16 = 4$.

Or with Laplace along row 2 of the $3\times3$: $2\cdot\big[2\cdot(-1)\cdot\begin{vmatrix}2&4\\6&4\end{vmatrix} + 1\cdot(-1)\cdot\begin{vmatrix}5&2\\1&6\end{vmatrix}\big] = 2\,[(-2)(8-24) - (30-2)] = 2\,(32 - 28)$.

**$\det A = 8$.**`}
 ]},
{n:4, title:'Economic Application of the Inverse', pts:15, topic:'m2-4', type:'inverse',
 given:R`Cash flows (€ per stock) of EON, BMW, SAP in boom, recession, crisis: $$A = \begin{pmatrix}4&3&6\\3&2&4\\-2&-2&-6\end{pmatrix}\ \begin{matrix}\text{boom}\\\text{recession}\\\text{crisis}\end{matrix}$$ Which assets must the bank buy/sell for a coupon paying 1 € in the crisis and 0 € otherwise? Which for a risk-free coupon of 1 € in every state? Calculate $A^{-1}$. What is the rank of $A$?`,
 parts:[
 {id:'a', label:'(a) Inverse', pts:8, q:R`Calculate $A^{-1}$ with the Gaussian algorithm on $[A \mid I]$.`,
  hints:[R`Pivot on $a_{11} = 4$: row 1 becomes $1\ \ 0.75\ \ 1.5 \mid 0.25\ \ 0\ \ 0$.`,
         R`Second pivot: $x_2$ in row 2 (element $-0.25$). Third pivot: $x_3$ in row 3.`,
         R`Check: row 1 of $A$ times column 1 of your inverse must be 1: $4\cdot(-2) + 3\cdot5 + 6\cdot(-1) = 1$.`],
  checks:[{name:'Row 1', label:'−2, 3, 0', rx:/-2,?3,?0|\(-2;?3;?0/, miss:'Row 1 of A⁻¹: (−2, 3, 0)'},
          {name:'Row 2', label:'5, −6, 1', rx:/5,?-6,?1/, miss:'Row 2 of A⁻¹: (5, −6, 1)'},
          {name:'Row 3', label:'−1, 1, −0.5', rx:/-1,?1,?-(0\.5|1\/2)/, miss:'Row 3 of A⁻¹: (−1, 1, −0.5)'}],
  sol:R`[[tab:Start [A | I]
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
4|3|6|1|0|0
3|2|4|0|1|0
-2|-2|-6|0|0|1]]
[[tab:Pivot 4
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0.75|1.5|0.25|0|0
0|-0.25|-0.5|-0.75|1|0
0|-0.5|-3|0.5|0|1]]
[[tab:Pivot −0.25
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0|0|-2|3|0
0|1|2|3|-4|0
0|0|-2|2|-2|1]]
[[tab:Pivot −2
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0|0|-2|3|0
0|1|0|5|-6|1
0|0|1|-1|1|-0.5]]
$$A^{-1} = \begin{pmatrix}-2&3&0\\5&-6&1\\-1&1&-0.5\end{pmatrix}$$ Rows = EON, BMW, SAP; columns = boom, recession, crisis.`},
 {id:'b', label:'(b) Crisis coupon', pts:3, q:R`Which assets for the cash flow $(0, 0, 1)^T$ (1 € in the crisis only)?`,
  hints:[R`$x = A^{-1}\cdot(0,0,1)^T$ is simply the third column of $A^{-1}$.`],
  checks:[{name:'BMW', label:'buy 1 BMW', rx:/buy1bmw|1bmw|bmw:?\+?1|purchase1bmw/, miss:'Buy 1 BMW'},
          {name:'SAP', label:'sell 0.5 SAP', rx:/sell(0\.5|1\/2|half|ahalf)|(0\.5|half)sap|sap:?-0\.5|-0\.5sap/, miss:'Sell half a SAP stock'},
          {name:'EON', label:'no EON', rx:/0eon|noeon|eon:?0|eon=0/, miss:'EON: 0 stocks'}],
  sol:R`Third column of $A^{-1}$: $(0,\ 1,\ -0.5)^T$. **Buy 1 BMW, sell 0.5 SAP, no EON.** Check crisis: $-2\cdot1 - 6\cdot(-0.5) = 1$ ✓, boom: $3 - 3 = 0$ ✓.`},
 {id:'c', label:'(c) Risk-free coupon', pts:2, q:R`Which assets for the risk-free coupon $(1,1,1)^T$?`,
  hints:[R`$A^{-1}\cdot(1,1,1)^T$ = add up the columns of $A^{-1}$ (row sums).`],
  checks:[{name:'EON', label:'buy 1 EON', rx:/buy1eon|1eon|eon:?\+?1\b/, miss:'EON: −2 + 3 + 0 = 1 → buy 1'},
          {name:'SAP', label:'sell 0.5 SAP', rx:/sell(0\.5|1\/2|half|ahalf)|(0\.5|half)sap|sap:?-0\.5/, miss:'SAP: −1 + 1 − 0.5 = −0.5 → sell half'}],
  sol:R`Row sums: EON $-2+3+0 = 1$, BMW $5-6+1 = 0$, SAP $-1+1-0.5 = -0.5$. **Buy 1 EON and sell 0.5 SAP.**`},
 {id:'d', label:'(d) Rank', pts:2, q:R`What is the rank of $A$ and why?`,
  hints:[R`The inverse exists — what does that say about the rows and columns?`],
  checks:[{name:'rk = 3', label:'rk(A) = 3', rx:/rk\(?a?\)?=3|rank(is|=|of|ofa|a)*3|=3/, miss:'rk(A) = 3'},
          {name:'Reason', label:'regular / independent / inverse exists', rx:/regular|independ|inverseexist|fullrank/, miss:'Reason: A⁻¹ exists → A regular, rows/columns independent'}],
  sol:R`Since $A^{-1}$ exists, $A$ is regular (full rank): all rows and columns are linearly independent. **$rk(A) = 3$.**`}
 ]},
{n:5, title:'Unconstrained Optimization', pts:18, topic:'m2-6', type:'hessian',
 given:R`$f(x_1,x_2,x_3) = \tfrac23x_1^3 + 8x_1x_2 - 6x_1x_3 + 2x_2^2 + 3x_3^2$. Calculate the extreme values and decide with the Hessian matrix whether they are minima or maxima.`,
 parts:[
 {id:'a', label:'(a) Stationary points', pts:8, q:R`Set the first derivatives to zero and find all stationary points.`,
  hints:[R`$f'_{x_1} = 2x_1^2 + 8x_2 - 6x_3$, $f'_{x_2} = 8x_1 + 4x_2$, $f'_{x_3} = -6x_1 + 6x_3$.`,
         R`From the last two: $x_2 = -2x_1$ and $x_3 = x_1$. Insert into $f'_{x_1} = 0$.`,
         R`$2x_1^2 - 16x_1 - 6x_1 = 2x_1(x_1 - 11) = 0$ — two solutions!`],
  checks:[{name:'x₂ = −2x₁', label:'x₂ = −2x₁', rx:/x2=-2x1/, miss:'From f′x₂ = 0: x₂ = −2x₁'},
          {name:'x₃ = x₁', label:'x₃ = x₁', rx:/x3=x1/, miss:'From f′x₃ = 0: x₃ = x₁'},
          {name:'P₁', label:'(0, 0, 0)', rx:/\(0[,;]0[,;]0\)/, miss:'First stationary point (0, 0, 0)'},
          {name:'P₂', label:'(11, −22, 11)', rx:/\(11[,;]-22[,;]11\)/, miss:'Second stationary point (11, −22, 11)'}],
  sol:R`$$f'_{x_1} = 2x_1^2 + 8x_2 - 6x_3 = 0,\quad f'_{x_2} = 8x_1 + 4x_2 = 0 \Rightarrow x_2 = -2x_1,\quad f'_{x_3} = -6x_1 + 6x_3 = 0 \Rightarrow x_3 = x_1$$ Into (1): $2x_1^2 - 16x_1 - 6x_1 = 2x_1(x_1 - 11) = 0$. **Stationary points $P_1 = (0,0,0)$ and $P_2 = (11,-22,11)$.**`},
 {id:'b', label:'(b) Hessian & type', pts:10, q:R`Set up the Hessian and classify both points with the main section determinants.`,
  hints:[R`$H = \begin{pmatrix}4x_1 & 8 & -6\\ 8 & 4 & 0\\ -6 & 0 & 6\end{pmatrix}$ — only $h_{11}$ depends on the point.`,
         R`At $(0,0,0)$: $|H_1| = 0$ and $|H_2| = 0\cdot4 - 64 = -64 < 0$ → neither pattern.`,
         R`At $(11,-22,11)$: $|H_1| = 44$, $|H_2| = 176 - 64 = 112$, $|H_3| = 44\cdot24 - 8\cdot48 - 6\cdot24$.`],
  checks:[{name:'Hessian', label:'H = (4x₁ 8 −6; 8 4 0; −6 0 6)', rx:/4x1/, miss:'h₁₁ = 4x₁, h₁₂ = 8, h₁₃ = −6, h₂₂ = 4, h₂₃ = 0, h₃₃ = 6'},
          {name:'P₁ indefinite', label:'(0,0,0): |H₂| = −64 → no extremum', rx:/-64|indefinit|noextrem|saddle/, miss:'At (0,0,0): |H₂| = −64 < 0 → indefinite'},
          {name:'P₂ MSD', label:'44, 112, 528', rx:/112|528/, miss:'At (11,−22,11): |H₁| = 44, |H₂| = 112, |H₃| = 528'},
          {name:'Minimum', label:'minimum at (11, −22, 11)', rx:/min/, miss:'Positive definite → minimum at (11, −22, 11)'}],
  sol:R`$$H = \begin{pmatrix}4x_1 & 8 & -6\\ 8 & 4 & 0\\ -6 & 0 & 6\end{pmatrix}$$
- At $P_1 = (0,0,0)$: $|H_1| = 0$, $|H_2| = -64 < 0$, $|H_3| = 0 + 0 + 0 - 144 - 384 - 0 = -528 < 0$ → indefinite → **no extremum** at $(0,0,0)$.
- At $P_2 = (11,-22,11)$: $|H_1| = 44 > 0$, $|H_2| = 44\cdot4 - 64 = 112 > 0$, $|H_3| = 1056 - 384 - 144 = 528 > 0$ → positive definite → **minimum at $(11,-22,11)$**.

Note: the official 2025 sheet prints $|H_3| = -66$ at $P_1$ (typo); the 2024 sheet with the identical function shows the correct $-528$. Either way $|H_2| < 0$ already decides.`}
 ]},
{n:6, title:'Linear Optimization', pts:17, topic:'m2-7', type:'lp',
 given:R`Two products run through machines A and B (hours per unit): A: $3$ and $0.5$ (capacity 80 h); B: $2$ and $1$ (capacity 120 h). Profit: 4 € (product 1), 1 € (product 2). At least 10 units of product 2 must be produced (contracts). Maximize profit, solve with linear optimization and interpret all slack variables.`,
 parts:[
 {id:'a', label:'(a) Formulate', pts:5, q:R`Set up the linear optimization problem with slack variables and the start tableau.`,
  hints:[R`$\max z = 4x_1 + x_2$ s.t. $3x_1 + 0.5x_2 \le 80$, $2x_1 + x_2 \le 120$, $x_2 \ge 10$.`,
         R`Minimum constraint: multiply by $-1$: $-x_2 + x_5 = -10$. The $z$-row gets $-4$ and $-1$.`],
  checks:[{name:'Objective', label:'z = 4x₁ + x₂', rx:/z=4x1\+x2/, miss:'max z = 4x₁ + x₂'},
          {name:'Machine A', label:'3x₁ + 0.5x₂ ≤ 80', rx:/3x1\+0\.5x2(\+x3)?(<=|≤|=)80/, miss:'3x₁ + 0.5x₂ ≤ 80'},
          {name:'Machine B', label:'2x₁ + x₂ ≤ 120', rx:/2x1\+x2(\+x4)?(<=|≤|=)120/, miss:'2x₁ + x₂ ≤ 120'},
          {name:'Minimum', label:'x₂ ≥ 10 → −x₂ + x₅ = −10', rx:/x2(>=|≥)10|-x2\+x5=-10/, miss:'x₂ ≥ 10, in the tableau −x₂ + x₅ = −10'}],
  sol:R`$$\max z = 4x_1 + x_2\quad\text{s.t.}\quad 3x_1 + 0.5x_2 \le 80,\quad 2x_1 + x_2 \le 120,\quad x_2 \ge 10,\quad x_1,\dots,x_5 \ge 0$$
[[tab:Start tableau
 |x_1|x_2|x_3|x_4|x_5|RHS
z|-4|-1|0|0|0|0
 |3|0.5|1|0|0|80
 |2|1|0|1|0|120
 |0|-1|0|0|1|-10]]
The RHS $-10$ makes this basis solution infeasible — the optimality criterion only works once every RHS is non-negative.`},
 {id:'b', label:'(b) Solve', pts:8, q:R`Solve with the simplex method. Which pivots do you choose?`,
  hints:[R`First repair the negative RHS: pivot on the $-1$ in the $x_2$ column of the last row.`,
         R`Then the optimality criterion: most negative $z$-entry is $-4$ ($x_1$); ratios $75/3 = 25$ vs. $110/2 = 55$.`,
         R`Next $z$-entry $-\tfrac13$ in the $x_5$ column; ratios $25/\tfrac16 = 150$ vs. $60/\tfrac23 = 90$ → row 2.`],
  checks:[{name:'x₁ = 10', label:'x₁ = 10', rx:/x1=([^,;]*=)?10\b/, miss:'x₁ = 10'},
          {name:'x₂ = 100', label:'x₂ = 100', rx:/x2=100/, miss:'x₂ = 100'},
          {name:'z = 140', label:'profit 140 €', rx:/z=140|140€|140eur|profit(of|is|=)?140/, miss:'z = 140 €'}],
  sol:R`[[tab:Pivot −1 (repair RHS)
 |x_1|x_2|x_3|x_4|x_5|RHS
z|-4|0|0|0|-1|10
 |3|0|1|0|0.5|75
 |2|0|0|1|1|110
 |0|1|0|0|-1|10]]
[[tab:Pivot 3 (x₁ enters)
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|0|\tfrac43|0|-\tfrac13|110
 |1|0|\tfrac13|0|\tfrac16|25
 |0|0|-\tfrac23|1|\tfrac23|60
 |0|1|0|0|-1|10]]
[[tab:Pivot ⅔ (x₅ enters) — optimal
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|0|1|\tfrac12|0|140
 |1|0|\tfrac12|-\tfrac14|0|10
 |0|0|-1|\tfrac32|1|90
 |0|1|-1|\tfrac32|0|100]]
All $z$-entries $\ge 0$ → optimal. **$x_1 = 10$, $x_2 = 100$, $z = 140$ €.**

Note: the official sheet prints $0.25$ for the $x_3$ entry of the $x_1$-row; correct is $\tfrac12$ (from $x_1 = 10 - \tfrac12x_3 + \tfrac14x_4$). The result is unaffected.`},
 {id:'c', label:'(c) Interpret', pts:4, q:R`Interpret the result and all slack variables.`,
  hints:[R`Basis variables: $x_1, x_2, x_5$. Non-basis (= 0): $x_3, x_4$.`, R`$x_5$ is the surplus above the minimum of 10 units.`],
  checks:[{name:'Machines binding', label:'x₃ = x₄ = 0: both machines fully used', rx:/x3=x4=0|x3=0|binding|nocapacity|fullyused/, miss:'x₃ = x₄ = 0: both machine constraints are binding'},
          {name:'x₅ = 90', label:'x₅ = 90 above the minimum', rx:/x5=90|90units|90above/, miss:'x₅ = 90: 90 units more than the minimum of 10'}],
  sol:R`The company produces **10 units of product 1 and 100 units of product 2** for a profit of **140 €**. $x_3 = x_4 = 0$: the constraints for **both machines are binding**, no capacity left. $x_5 = 90$: product 2 exceeds the contractual minimum of 10 units by 90 units.`}
 ]}
]},

/* ---------------------------------------------------------------- 2024 ---------------------------------------------------------------- */
{id:'e24', year:'2024', title:'Exam 2024', ex:[
{n:1, title:'Solvability of a Linear Equation System', pts:12, topic:'m2-3', type:'solv',
 given:R`$$\begin{aligned} x_1 \phantom{+a\,x_2} + 2x_3 &= 6\\ x_1 + a\,x_2 - 2x_3 &= 4\\ 2x_2 + 2x_3 &= 2b\end{aligned}$$ For which $a$, $b$ is the solution (a) unique, (b) infinite, (c) inconsistent?`,
 parts:[
 {id:'a', label:'(a) Unique solution', pts:6, q:R`Triangular form with Gauss and the condition for a unique solution.`,
  hints:[R`Row 2 − row 1: $0\ \ a\ \ {-4} \mid -2$.`, R`Row 2 + 2·row 3 removes $x_3$: $(a+4)\,x_2 = -2 + 4b$.`],
  checks:[{name:'Last row', label:'(a+4)x₂ = 4b − 2', rx:/a\+4|4b-2|-2\+4b/, miss:'Last row: (a+4)x₂ = −2 + 4b'},
          {name:'a ≠ −4', label:'a ≠ −4', rx:/a!=-4|a\+4!=0/, miss:'a ≠ −4'},
          {name:'b any', label:'b ∈ ℝ', rx:/b(∈|in|el)r|anyb|allb|beliebig|barbitrary|bany/, miss:'b arbitrary'}],
  sol:R`[[tab:Start
x_1|x_2|x_3|RHS
1|0|2|6
1|a|-2|4
0|2|2|2b]]
[[tab:Row 2 − row 1
x_1|x_2|x_3|RHS
1|0|2|6
0|a|-4|-2
0|2|2|2b]]
[[tab:Row 2 + 2·row 3
x_1|x_2|x_3|RHS
1|0|2|6
0|a+4|0|-2+4b
0|2|2|2b]]
**Unique solution for $a \ne -4$ and any $b \in \mathbb{R}$.**`},
 {id:'b', label:'(b) Infinitely many', pts:3, q:R`When infinitely many solutions?`, hints:[R`$a + 4 = 0$ and $-2 + 4b = 0$.`],
  checks:[{name:'a = −4', label:'a = −4', rx:/a=-4/, miss:'a = −4'},{name:'b = ½', label:'b = 1/2', rx:/b=(1\/2|0\.5)/, miss:'b = ½'}],
  sol:R`**$a = -4$ and $b = \tfrac12$**: the row reads $0 = 0$.`},
 {id:'c', label:'(c) Inconsistent', pts:3, q:R`When inconsistent?`, hints:[R`Coefficient zero, RHS non-zero.`],
  checks:[{name:'a = −4', label:'a = −4', rx:/a=-4/, miss:'a = −4'},{name:'b ≠ ½', label:'b ≠ 1/2', rx:/b!=(1\/2|0\.5)/, miss:'b ≠ ½'}],
  sol:R`**$a = -4$ and $b \ne \tfrac12$**: $0 = -2 + 4b \ne 0$.`}
 ]},
{n:2, title:'Dynamic Market Shares', pts:16, topic:'m2-3', type:'market',
 given:R`Porsche keeps 80%, loses 10% to BMW and 10% to Maserati. BMW keeps 40%, loses 50% to Maserati and 10% to Porsche. Maserati keeps 50%, loses 40% to BMW and 10% to Porsche.`,
 parts:[
 {id:'a', label:'(a) Next period', pts:6, q:R`$t = 1$: Porsche 20%, BMW 60%, Maserati 20%. Market shares in $t = 2$?`,
  hints:[R`Porsche row: $0.8$ (stay), $0.1$ from BMW, $0.1$ from Maserati.`],
  checks:[{name:'Porsche', label:'24%', rx:/24/, miss:'Porsche: 0.8·20% + 0.1·60% + 0.1·20% = 24%'},
          {name:'BMW', label:'34%', rx:/34/, miss:'BMW: 0.1·20% + 0.4·60% + 0.4·20% = 34%'},
          {name:'Maserati', label:'42%', rx:/42/, miss:'Maserati: 0.1·20% + 0.5·60% + 0.5·20% = 42%'}],
  sol:R`$$T = \begin{pmatrix}0.8&0.1&0.1\\0.1&0.4&0.4\\0.1&0.5&0.5\end{pmatrix}\ (P, B, M),\qquad s_2 = T\begin{pmatrix}0.2\\0.6\\0.2\end{pmatrix} = \begin{pmatrix}0.24\\0.34\\0.42\end{pmatrix}$$ **Porsche 24%, BMW 34%, Maserati 42%.**`},
 {id:'b', label:'(b) Steady state', pts:10, q:R`Linear equation system, steady state, characteristics.`,
  hints:[R`$x_P = 0.8x_P + 0.1x_B + 0.1x_M$ → $0.2x_P - 0.1x_B - 0.1x_M = 0$.`, R`Add $x_P + x_B + x_M = 1$ and pivot on it first.`],
  checks:[{name:'Sum', label:'x_P + x_B + x_M = 1', rx:/=1/, miss:'Add x_P + x_B + x_M = 1'},
          {name:'Porsche', label:'x_P = 1/3', rx:/1\/3|33\.3|0\.333/, miss:'x_P = ⅓'},
          {name:'BMW', label:'x_B = 30%', rx:/0\.3\b|30%|30\b/, miss:'x_B = 0.3'},
          {name:'Maserati', label:'x_M = 11/30', rx:/11\/30|36\.6|36\.7|0\.36/, miss:'x_M = 11/30 ≈ 36.7%'},
          {name:'Interpretation', label:'shares constant', rx:/notchange|constant|nochange|inflow|same|unchanged|equal/, miss:'Shares no longer change; inflow = outflow'}],
  sol:R`[[tab:Start
x_P|x_B|x_M|RHS
1|1|1|1
0.2|-0.1|-0.1|0
-0.1|0.6|-0.4|0
-0.1|-0.5|0.5|0]]
[[tab:Pivot row 1, xP
x_P|x_B|x_M|RHS
1|1|1|1
0|-0.3|-0.3|-0.2
0|0.7|-0.3|0.1
0|-0.4|0.6|0.1]]
[[tab:Pivot −0.3, xB
x_P|x_B|x_M|RHS
1|0|0|\tfrac13
0|1|1|\tfrac23
0|0|-1|-\tfrac{11}{30}
0|0|1|\tfrac{11}{30}]]
[[tab:Pivot on xM
x_P|x_B|x_M|RHS
1|0|0|\tfrac13
0|1|0|0.3
0|0|1|\tfrac{11}{30}
0|0|0|0]]
**$x_P = 33.\overline{3}\%$, $x_B = 30\%$, $x_M = 36.\overline{6}\%$.** Steady state: shares stay constant although customers keep switching — for each firm, customers leaving = customers arriving.`}
 ]},
{n:3, title:"Cramer's Rule", pts:12, topic:'m2-5', type:'cramer',
 given:R`Solve with Cramer's rule: $$\begin{aligned}2x_1 + 6x_2 + 2x_3 &= 4\\ 2x_1 + 2x_2 + 5x_3 &= 14\\ x_1 - x_2 + x_3 &= 6\end{aligned}$$`,
 parts:[
 {id:'a', label:'det A', pts:3, q:R`Calculate $\det A$ (Sarrus).`, hints:[R`$2\cdot2\cdot1 + 6\cdot5\cdot1 + 2\cdot2\cdot(-1) - 2\cdot2\cdot1 - 2\cdot5\cdot(-1) - 6\cdot2\cdot1$.`],
  checks:[{name:'det A', label:'det A = 24', rx:/24/, miss:'det A = 24'}],
  sol:R`$\det A = 4 + 30 - 4 - 4 + 10 - 12 = $ **24**.`},
 {id:'b', label:'det A₁, A₂, A₃', pts:6, q:R`Replace each column by $b = (4, 14, 6)^T$ and calculate the three determinants.`,
  hints:[R`$A_1 = \begin{pmatrix}4&6&2\\14&2&5\\6&-1&1\end{pmatrix}$, $A_2 = \begin{pmatrix}2&4&2\\2&14&5\\1&6&1\end{pmatrix}$, $A_3 = \begin{pmatrix}2&6&4\\2&2&14\\1&-1&6\end{pmatrix}$.`],
  checks:[{name:'A₁', label:'72', rx:/72/, miss:'det A₁ = 72'},{name:'A₂', label:'−24', rx:/-24/, miss:'det A₂ = −24'},{name:'A₃', label:'48', rx:/48/, miss:'det A₃ = 48'}],
  sol:R`$\det A_1 = 8 + 180 - 28 - 24 + 20 - 84 = 72$; $\det A_2 = 28 + 20 + 24 - 28 - 60 - 8 = -24$; $\det A_3 = 24 + 84 - 8 - 8 + 28 - 72 = 48$.`},
 {id:'c', label:'Solution', pts:3, q:R`Give $x_1, x_2, x_3$.`, hints:[R`$x_j = \det A_j / \det A$.`],
  checks:[{name:'x₁', label:'x₁ = 3', rx:/x1=([^,;]*=)?3\b/, miss:'x₁ = 72/24 = 3'},{name:'x₂', label:'x₂ = −1', rx:/x2=([^,;]*=)?-1\b/, miss:'x₂ = −24/24 = −1'},{name:'x₃', label:'x₃ = 2', rx:/x3=([^,;]*=)?2\b/, miss:'x₃ = 48/24 = 2'}],
  sol:R`**$x_1 = 72/24 = 3$, $x_2 = -24/24 = -1$, $x_3 = 48/24 = 2$.** Check row 3: $3 + 1 + 2 = 6$ ✓.`}
 ]},
{n:4, title:'Economic Application of the Inverse', pts:15, topic:'m2-4', type:'inverse',
 given:R`$$A = \begin{pmatrix}2&3&3\\3&4&2\\-2&-3&-4\end{pmatrix}\ \begin{matrix}\text{boom}\\\text{recession}\\\text{crisis}\end{matrix}\quad(\text{columns EON, BMW, SAP})$$ Crisis coupon $(0,0,1)^T$, risk-free coupon $(1,1,1)^T$, inverse and rank.`,
 parts:[
 {id:'a', label:'(a) Inverse', pts:8, q:R`Calculate $A^{-1}$.`,
  hints:[R`Pivot $a_{11} = 2$: row 1 → $1\ \ 1.5\ \ 1.5 \mid 0.5\ \ 0\ \ 0$; row 3 becomes $0\ \ 0\ \ {-1} \mid 1\ \ 0\ \ 1$.`, R`Then pivot on $-0.5$ ($x_2$, row 2) and finally on $-1$ ($x_3$, row 3).`],
  checks:[{name:'Row 1', label:'−10, 3, −6', rx:/-10,?3,?-6/, miss:'Row 1: (−10, 3, −6)'},{name:'Row 2', label:'8, −2, 5', rx:/8,?-2,?5/, miss:'Row 2: (8, −2, 5)'},{name:'Row 3', label:'−1, 0, −1', rx:/-1,?0,?-1/, miss:'Row 3: (−1, 0, −1)'}],
  sol:R`[[tab:Start
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
2|3|3|1|0|0
3|4|2|0|1|0
-2|-3|-4|0|0|1]]
[[tab:Pivot 2
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|1.5|1.5|0.5|0|0
0|-0.5|-2.5|-1.5|1|0
0|0|-1|1|0|1]]
[[tab:Pivot −0.5
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0|-6|-4|3|0
0|1|5|3|-2|0
0|0|-1|1|0|1]]
[[tab:Pivot −1
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0|0|-10|3|-6
0|1|0|8|-2|5
0|0|1|-1|0|-1]]
$$A^{-1} = \begin{pmatrix}-10&3&-6\\8&-2&5\\-1&0&-1\end{pmatrix}$$`},
 {id:'b', label:'(b) Crisis coupon', pts:3, q:R`Portfolio for $(0,0,1)^T$?`, hints:[R`Third column of $A^{-1}$.`],
  checks:[{name:'EON', label:'sell 6 EON', rx:/sell6eon|6eon|eon:?-6|-6eon/, miss:'Sell 6 EON'},{name:'BMW', label:'buy 5 BMW', rx:/buy5bmw|5bmw|bmw:?\+?5/, miss:'Buy 5 BMW'},{name:'SAP', label:'sell 1 SAP', rx:/sell1sap|1sap|sap:?-1|-1sap|onesap/, miss:'Sell 1 SAP'}],
  sol:R`Column 3: $(-6, 5, -1)^T$. **Sell 6 EON, buy 5 BMW, sell 1 SAP.**`},
 {id:'c', label:'(c) Risk-free coupon', pts:2, q:R`Portfolio for $(1,1,1)^T$?`, hints:[R`Row sums of $A^{-1}$.`],
  checks:[{name:'EON', label:'sell 13 EON', rx:/13/, miss:'EON: −10 + 3 − 6 = −13'},{name:'BMW', label:'buy 11 BMW', rx:/11/, miss:'BMW: 8 − 2 + 5 = 11'},{name:'SAP', label:'sell 2 SAP', rx:/2sap|sap:?-2|-2sap|sell2/, miss:'SAP: −1 + 0 − 1 = −2'}],
  sol:R`Row sums: $-13$, $11$, $-2$. **Sell 13 EON, buy 11 BMW, sell 2 SAP.**`},
 {id:'d', label:'(d) Rank', pts:2, q:R`Rank of $A$?`, hints:[R`The inverse exists.`],
  checks:[{name:'rk = 3', label:'rk(A) = 3', rx:/=3|rank(is|of|ofa)*3/, miss:'rk(A) = 3'},{name:'Reason', label:'regular / independent', rx:/regular|independ|inverseexist|fullrank/, miss:'A⁻¹ exists → regular, independent rows/columns'}],
  sol:R`$A^{-1}$ exists → $A$ is regular, all rows and columns are linearly independent. **$rk(A) = 3$.**`}
 ]},
{n:5, title:'Unconstrained Optimization', pts:18, topic:'m2-6', type:'hessian', note:'Identical to Exam 2025, Exercise 5 — the prof reused it.',
 given:R`$f(x_1,x_2,x_3) = \tfrac23x_1^3 + 8x_1x_2 - 6x_1x_3 + 2x_2^2 + 3x_3^2$. Extreme values and their type (Hessian).`,
 parts:[
 {id:'a', label:'(a) Stationary points', pts:8, q:R`All stationary points.`, hints:[R`$x_2 = -2x_1$, $x_3 = x_1$, then $2x_1(x_1 - 11) = 0$.`],
  checks:[{name:'P₁', label:'(0,0,0)', rx:/\(0[,;]0[,;]0\)/, miss:'(0, 0, 0)'},{name:'P₂', label:'(11,−22,11)', rx:/\(11[,;]-22[,;]11\)/, miss:'(11, −22, 11)'}],
  sol:R`**$(0,0,0)$ and $(11,-22,11)$** — see Exam 2025 for the full derivation.`},
 {id:'b', label:'(b) Hessian & type', pts:10, q:R`Classify with the Hessian.`, hints:[R`At $(0,0,0)$: $|H_2| = -64$. At $(11,-22,11)$: $44, 112, 528$.`],
  checks:[{name:'P₁', label:'no extremum at (0,0,0)', rx:/-64|-528|indefinit|noextrem/, miss:'(0,0,0): indefinite'},{name:'P₂', label:'minimum', rx:/min/, miss:'(11,−22,11): minimum'}],
  sol:R`$(0,0,0)$: $|H_1| = 0$, $|H_2| = -64$, $|H_3| = -528$ → **indefinite, no extremum**. $(11,-22,11)$: $|H_1| = 44$, $|H_2| = 112$, $|H_3| = 528$ → **minimum**.`}
 ]},
{n:6, title:'Linear Optimization', pts:17, topic:'m2-7', type:'lp',
 given:R`Machine A: $3$ h and $0.5$ h per unit, capacity 90 h. Machine B: $2$ h and $1$ h, capacity 120 h. Profit 4 € and 1 €. Storage: at most 60 units of product 2.`,
 parts:[
 {id:'a', label:'(a) Formulate', pts:5, q:R`Optimization problem and start tableau.`, hints:[R`All three constraints are $\le$ — no negative RHS this time.`],
  checks:[{name:'Objective', label:'z = 4x₁ + x₂', rx:/z=4x1\+x2/, miss:'max z = 4x₁ + x₂'},{name:'A', label:'3x₁ + 0.5x₂ ≤ 90', rx:/3x1\+0\.5x2(\+x3)?(<=|≤|=)90/, miss:'3x₁ + 0.5x₂ ≤ 90'},{name:'B', label:'2x₁ + x₂ ≤ 120', rx:/2x1\+x2(\+x4)?(<=|≤|=)120/, miss:'2x₁ + x₂ ≤ 120'},{name:'Storage', label:'x₂ ≤ 60', rx:/x2(\+x5)?(<=|≤|=)60/, miss:'x₂ ≤ 60'}],
  sol:R`$$\max z = 4x_1 + x_2\ \text{ s.t. }\ 3x_1 + 0.5x_2 \le 90,\ 2x_1 + x_2 \le 120,\ x_2 \le 60$$
[[tab:Start tableau
 |x_1|x_2|x_3|x_4|x_5|RHS
z|-4|-1|0|0|0|0
 |3|0.5|1|0|0|90
 |2|1|0|1|0|120
 |0|1|0|0|1|60]]`},
 {id:'b', label:'(b) Solve', pts:8, q:R`Simplex steps and optimal solution.`, hints:[R`Pivot column $x_1$ ($-4$); ratios $90/3 = 30$, $120/2 = 60$ → row 1.`, R`Then $x_2$ ($-\tfrac13$); ratios $180$, $90$, $60$ → row 3.`],
  checks:[{name:'x₁', label:'x₁ = 20', rx:/x1=20/, miss:'x₁ = 20'},{name:'x₂', label:'x₂ = 60', rx:/x2=60/, miss:'x₂ = 60'},{name:'z', label:'z = 140', rx:/140/, miss:'z = 140 €'}],
  sol:R`[[tab:Pivot 3 (x₁ enters)
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|-\tfrac13|\tfrac43|0|0|120
 |1|\tfrac16|\tfrac13|0|0|30
 |0|\tfrac23|-\tfrac23|1|0|60
 |0|1|0|0|1|60]]
[[tab:Pivot 1 (x₂ enters) — optimal
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|0|\tfrac43|0|\tfrac13|140
 |1|0|\tfrac13|0|-\tfrac16|20
 |0|0|-\tfrac23|1|-\tfrac23|20
 |0|1|0|0|1|60]]
**$x_1 = 20$, $x_2 = 60$, $z = 140$ €.**`},
 {id:'c', label:'(c) Interpret', pts:4, q:R`Interpret all slack variables.`, hints:[R`Which slack is a basis variable?`],
  checks:[{name:'x₄ = 20', label:'machine B: 20 h left', rx:/x4=20|20h|20hours/, miss:'x₄ = 20: machine B has 20 hours left'},{name:'Binding', label:'x₃ = x₅ = 0 binding', rx:/x3=x5=0|binding/, miss:'x₃ = x₅ = 0: machine A and storage are binding'}],
  sol:R`20 units of product 1 and 60 of product 2, profit **140 €**. $x_4 = 20$: **machine B has 20 hours left**. $x_3 = x_5 = 0$: machine A and the storage limit are **binding**.`}
 ]}
]},

/* ---------------------------------------------------------------- 2023 ---------------------------------------------------------------- */
{id:'e23', year:'2023', title:'Exam 2023', ex:[
{n:1, title:'Solvability of Linear Equation Systems', pts:12, topic:'m2-3', type:'solv',
 given:R`$$\begin{aligned} x_1 \phantom{+a\,x_2} + 4x_3 &= b\\ x_1 + a\,x_2 + 2x_3 &= 3\\ 2x_1 - 2x_2 + 2x_3 &= 0\end{aligned}$$ Unique / infinite / inconsistent?`,
 parts:[
 {id:'a', label:'(a) Unique solution', pts:6, q:R`Triangular form and condition for uniqueness.`,
  hints:[R`Row 2 − row 1: $0\ \ a\ \ {-2} \mid 3 - b$. Row 3 − 2·row 1: $0\ \ {-2}\ \ {-6} \mid -2b$.`, R`Row 3 − 3·row 2 removes $x_3$: $(-2 - 3a)\,x_2 = -2b - 9 + 3b = b - 9$.`],
  checks:[{name:'Last row', label:'(−2−3a)x₂ = b − 9', rx:/-2-3a|3a\+2|b-9/, miss:'Last row: (−2 − 3a)x₂ = b − 9'},{name:'a ≠ −2/3', label:'a ≠ −2/3', rx:/a!=-2\/3|a!=-0\.66|a!=-0\.67/, miss:'a ≠ −⅔'},{name:'b any', label:'b ∈ ℝ', rx:/b(∈|in|el)r|anyb|allb|beliebig|barbitrary|bany/, miss:'b arbitrary'}],
  sol:R`[[tab:Start
x_1|x_2|x_3|RHS
1|0|4|b
1|a|2|3
2|-2|2|0]]
[[tab:Pivot on x₁
x_1|x_2|x_3|RHS
1|0|4|b
0|a|-2|3-b
0|-2|-6|-2b]]
[[tab:Row 3 − 3·row 2
x_1|x_2|x_3|RHS
1|0|4|b
0|a|-2|3-b
0|-2-3a|0|b-9]]
$-2 - 3a = 0 \Leftrightarrow a = -\tfrac23$. **Unique for $a \ne -\tfrac23$, any $b$.**`},
 {id:'b', label:'(b) Infinitely many', pts:3, q:R`Infinitely many solutions?`, hints:[R`$b - 9 = 0$.`],
  checks:[{name:'a', label:'a = −2/3', rx:/a=-2\/3/, miss:'a = −⅔'},{name:'b', label:'b = 9', rx:/b=9/, miss:'b = 9'}],
  sol:R`**$a = -\tfrac23$ and $b = 9$.**`},
 {id:'c', label:'(c) Inconsistent', pts:3, q:R`Inconsistent?`, hints:[R`Coefficient zero, RHS $b - 9 \ne 0$.`],
  checks:[{name:'a', label:'a = −2/3', rx:/a=-2\/3/, miss:'a = −⅔'},{name:'b', label:'b ≠ 9', rx:/b!=9/, miss:'b ≠ 9'}],
  sol:R`**$a = -\tfrac23$ and $b \ne 9$.**`}
 ]},
{n:2, title:'Dynamic Market Shares', pts:16, topic:'m2-3', type:'market',
 given:R`Fitness centres Treff (T), Outback (O), Vitafit (V). Treff keeps 20%, 60% go to Vitafit, 20% to Outback. Outback keeps 40%, 60% go to Vitafit. Vitafit keeps 60%, 20% go to Treff, 20% to Outback.`,
 parts:[
 {id:'a', label:'(a) Next period', pts:6, q:R`$x_T = 0.3$, $x_O = 0.4$, $x_V = 0.3$ in $t = 1$. Shares in $t = 2$?`,
  hints:[R`Rows = incoming, columns (outgoing) sum to 1. Row T: $0.2$ from T, $0$ from O, $0.2$ from V.`, R`If your shares do not add up to 100%, you have built $T$ the wrong way round.`],
  checks:[{name:'T', label:'12%', rx:/12/, miss:'T: 0.2·0.3 + 0·0.4 + 0.2·0.3 = 12%'},{name:'O', label:'28%', rx:/28/, miss:'O: 0.2·0.3 + 0.4·0.4 + 0.2·0.3 = 28%'},{name:'V', label:'60%', rx:/60|0\.6/, miss:'V: 0.6·0.3 + 0.6·0.4 + 0.6·0.3 = 60%'}],
  sol:R`$$T = \begin{pmatrix}0.2&0&0.2\\0.2&0.4&0.2\\0.6&0.6&0.6\end{pmatrix},\quad s_2 = T\begin{pmatrix}0.3\\0.4\\0.3\end{pmatrix} = \begin{pmatrix}0.12\\0.28\\0.60\end{pmatrix}$$ **T 12%, O 28%, V 60%.** Built the other way round you would get 32%/34%/32% — which does not add up to 100%, a sign that it is wrong.`},
 {id:'b', label:'(b) Steady state', pts:10, q:R`System for the steady state and its characteristics.`,
  hints:[R`$x_T = 0.2x_T + 0.2x_V$ → $0.8x_T - 0.2x_V = 0$. $x_O = 0.2x_T + 0.4x_O + 0.2x_V$ → $-0.2x_T + 0.6x_O - 0.2x_V = 0$.`, R`Drop the redundant third equation and use $x_T + x_O + x_V = 1$.`],
  checks:[{name:'T', label:'x_T = 15%', rx:/15/, miss:'x_T = 0.15'},{name:'O', label:'x_O = 25%', rx:/25/, miss:'x_O = 0.25'},{name:'V', label:'x_V = 60%', rx:/60|0\.6/, miss:'x_V = 0.60'},{name:'Interpretation', label:'no change in shares', rx:/notchange|constant|nochange|same|unchanged|nochanges/, miss:'Shares no longer change although customers switch'}],
  sol:R`[[tab:Start
x_T|x_O|x_V|RHS
0.8|0|-0.2|0
-0.2|0.6|-0.2|0
1|1|1|1]]
[[tab:Pivot 0.8
x_T|x_O|x_V|RHS
1|0|-0.25|0
0|0.6|-0.25|0
0|1|1.25|1]]
[[tab:Pivot 0.6
x_T|x_O|x_V|RHS
1|0|-0.25|0
0|1|-\tfrac{5}{12}|0
0|0|\tfrac53|1]]
[[tab:Pivot 5/3
x_T|x_O|x_V|RHS
1|0|0|0.15
0|1|0|0.25
0|0|1|0.6]]
**$x_T = 15\%$, $x_O = 25\%$, $x_V = 60\%$.** No more change in market shares, although customers still switch every period.`}
 ]},
{n:3, title:"Cramer's Rule", pts:13, topic:'m2-5', type:'cramer',
 given:R`$$\begin{aligned}4x_1 + 2x_2 + 3x_3 &= 2\\ 3x_1 + 4x_2 - 4x_3 &= 4\\ x_1 \phantom{+2x_2} - 2x_3 &= -4\end{aligned}$$`,
 parts:[
 {id:'a', label:'det A', pts:3, q:R`$\det A$?`, hints:[R`Sarrus with $A = \begin{pmatrix}4&2&3\\3&4&-4\\1&0&-2\end{pmatrix}$ — watch the zero.`],
  checks:[{name:'det A', label:'−40', rx:/-40/, miss:'det A = −40'}],
  sol:R`$\det A = -32 - 8 + 0 - 12 - 0 + 12 = $ **−40**.`},
 {id:'b', label:'det A₁, A₂, A₃', pts:7, q:R`The three replaced determinants.`, hints:[R`$b = (2, 4, -4)^T$ replaces column $j$.`],
  checks:[{name:'A₁', label:'80', rx:/80/, miss:'det A₁ = 80'},{name:'A₂', label:'−140', rx:/-140/, miss:'det A₂ = −140'},{name:'A₃', label:'−40', rx:/-40/, miss:'det A₃ = −40'}],
  sol:R`$\det A_1 = \begin{vmatrix}2&2&3\\4&4&-4\\-4&0&-2\end{vmatrix} = 80$, $\det A_2 = \begin{vmatrix}4&2&3\\3&4&-4\\1&-4&-2\end{vmatrix} = -140$, $\det A_3 = \begin{vmatrix}4&2&2\\3&4&4\\1&0&-4\end{vmatrix} = -40$.`},
 {id:'c', label:'Solution', pts:3, q:R`$x_1, x_2, x_3$?`, hints:[R`Divide by $\det A = -40$.`],
  checks:[{name:'x₁', label:'−2', rx:/x1=([^,;]*=)?-2\b/, miss:'x₁ = 80/(−40) = −2'},{name:'x₂', label:'3.5', rx:/x2=([^,;]*=)?(3\.5|7\/2)/, miss:'x₂ = −140/(−40) = 3.5'},{name:'x₃', label:'1', rx:/x3=([^,;]*=)?1\b/, miss:'x₃ = −40/(−40) = 1'}],
  sol:R`**$x_1 = -2$, $x_2 = 3.5$, $x_3 = 1$.** Check row 3: $-2 - 2 = -4$ ✓.`}
 ]},
{n:4, title:'Economic Application of the Inverse', pts:15, topic:'m2-4', type:'inverse',
 given:R`$$A = \begin{pmatrix}5&8&4\\4&6&2\\-3&-5&-2\end{pmatrix}\ \begin{matrix}\text{boom}\\\text{recession}\\\text{crisis}\end{matrix}\quad(\text{EON, BMW, SAP})$$`,
 parts:[
 {id:'a', label:'(a) Inverse', pts:8, q:R`$A^{-1}$?`, hints:[R`Pivot 5: row 1 → $1\ \ 1.6\ \ 0.8 \mid 0.2\ \ 0\ \ 0$.`, R`Next pivot $-0.4$ ($x_2$, row 2), then $1$ ($x_3$, row 3).`],
  checks:[{name:'Row 1', label:'1, 2, 4', rx:/1,?2,?4/, miss:'Row 1: (1, 2, 4)'},{name:'Row 2', label:'−1, −1, −3', rx:/-1,?-1,?-3/, miss:'Row 2: (−1, −1, −3)'},{name:'Row 3', label:'1, −0.5, 1', rx:/1,?-(0\.5|1\/2),?1/, miss:'Row 3: (1, −0.5, 1)'}],
  sol:R`[[tab:Pivot 5
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|1.6|0.8|0.2|0|0
0|-0.4|-1.2|-0.8|1|0
0|-0.2|0.4|0.6|0|1]]
[[tab:Pivot −0.4
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0|-4|-3|4|0
0|1|3|2|-2.5|0
0|0|1|1|-0.5|1]]
[[tab:Pivot 1
x_1|x_2|x_3|RHS_1|RHS_2|RHS_3
1|0|0|1|2|4
0|1|0|-1|-1|-3
0|0|1|1|-0.5|1]]
$$A^{-1} = \begin{pmatrix}1&2&4\\-1&-1&-3\\1&-0.5&1\end{pmatrix}$$`},
 {id:'b', label:'(b) Crisis coupon', pts:3, q:R`Portfolio for $(0,0,1)^T$?`, hints:[R`Column 3.`],
  checks:[{name:'EON', label:'buy 4 EON', rx:/4eon|eon:?\+?4/, miss:'Buy 4 EON'},{name:'BMW', label:'sell 3 BMW', rx:/3bmw|bmw:?-3/, miss:'Sell 3 BMW'},{name:'SAP', label:'buy 1 SAP', rx:/1sap|sap:?\+?1|onesap/, miss:'Buy 1 SAP'}],
  sol:R`Column 3: $(4, -3, 1)^T$. **Buy 4 EON, sell 3 BMW, buy 1 SAP.**`},
 {id:'c', label:'(c) Risk-free coupon', pts:2, q:R`Portfolio for $(1,1,1)^T$?`, hints:[R`Row sums.`],
  checks:[{name:'EON', label:'buy 7 EON', rx:/7eon|eon:?\+?7|buy7/, miss:'EON: 1 + 2 + 4 = 7'},{name:'BMW', label:'sell 5 BMW', rx:/5bmw|bmw:?-5|sell5/, miss:'BMW: −1 − 1 − 3 = −5'},{name:'SAP', label:'buy 1.5 SAP', rx:/1\.5/, miss:'SAP: 1 − 0.5 + 1 = 1.5'}],
  sol:R`Row sums $7, -5, 1.5$: **buy 7 EON, sell 5 BMW, buy 1.5 SAP.**`},
 {id:'d', label:'(d) Rank', pts:2, q:R`Rank of $A$?`, hints:[R`Inverse exists.`],
  checks:[{name:'rk', label:'3', rx:/=3|rank(is|of|ofa)*3/, miss:'rk(A) = 3'},{name:'Reason', label:'regular', rx:/regular|independ|inverseexist|fullrank/, miss:'Regular, independent'}],
  sol:R`**$rk(A) = 3$** — $A^{-1}$ exists, $A$ is regular.`}
 ]},
{n:5, title:'Extreme Values of Functions with Many Variables', pts:17, topic:'m2-6', type:'hessian',
 given:R`$f(x,y,z) = \tfrac13x^3 + xy - 6xz + \tfrac14y^2 + \tfrac32z^2$. Extreme values and their type (Hessian determinant).`,
 parts:[
 {id:'a', label:'(a) Stationary points', pts:7, q:R`All stationary points.`,
  hints:[R`$f'_x = x^2 + y - 6z$, $f'_y = x + \tfrac12y$, $f'_z = -6x + 3z$.`, R`$y = -2x$, $z = 2x$; then $x^2 - 2x - 12x = x(x - 14) = 0$.`],
  checks:[{name:'y', label:'y = −2x', rx:/y=-2x/, miss:'y = −2x'},{name:'z', label:'z = 2x', rx:/z=2x/, miss:'z = 2x'},{name:'P₁', label:'(0,0,0)', rx:/\(0[,;]0[,;]0\)/, miss:'(0, 0, 0)'},{name:'P₂', label:'(14,−28,28)', rx:/\(14[,;]-28[,;]28\)/, miss:'(14, −28, 28)'}],
  sol:R`$f'_x = x^2 + y - 6z = 0$, $f'_y = x + \tfrac12y = 0 \Rightarrow y = -2x$, $f'_z = -6x + 3z = 0 \Rightarrow z = 2x$. Then $x(x - 14) = 0$: **$(0,0,0)$ and $(14,-28,28)$.**`},
 {id:'b', label:'(b) Hessian & type', pts:10, q:R`Classify both points.`,
  hints:[R`$H = \begin{pmatrix}2x&1&-6\\1&0.5&0\\-6&0&3\end{pmatrix}$.`, R`At $(14,-28,28)$: $|H_1| = 28$, $|H_2| = 14 - 1$.`],
  checks:[{name:'Hessian', label:'h₁₁ = 2x', rx:/2x/, miss:'H = (2x 1 −6; 1 0.5 0; −6 0 3)'},{name:'P₁', label:'(0,0,0): |H₂| = −1 → none', rx:/-1\b|indefinit|noextrem/, miss:'(0,0,0): |H₂| = −1 < 0 → indefinite'},{name:'P₂ MSD', label:'28, 13, 21', rx:/13|21/, miss:'28 > 0, 13 > 0, 21 > 0'},{name:'Minimum', label:'minimum at (14,−28,28)', rx:/min/, miss:'Positive definite → minimum'}],
  sol:R`$$H = \begin{pmatrix}2x&1&-6\\1&0.5&0\\-6&0&3\end{pmatrix}$$
- $(0,0,0)$: $|H_1| = 0$, $|H_2| = -1$, $|H_3| = 0 + 0 + 0 - 18 - 0 - 3 = -21$ → **indefinite, no extremum**.
- $(14,-28,28)$: $|H_1| = 28$, $|H_2| = 14 - 1 = 13$, $|H_3| = 42 - 3 - 18 = 21$ → all positive → **minimum at $(14,-28,28)$**.`}
 ]},
{n:6, title:'Linear Optimization', pts:17, topic:'m2-7', type:'lp',
 given:R`Machine A: 4 h and 5 h per unit, capacity 200 h. Machine B: 6 h and 3 h, capacity 240 h. Profit 5 € (product 1), 10 € (product 2). At least 20 units of product 1 (old contracts).`,
 parts:[
 {id:'a', label:'(a) Formulate', pts:5, q:R`Problem and start tableau.`, hints:[R`$x_1 \ge 20$ becomes $-x_1 + x_5 = -20$.`],
  checks:[{name:'Objective', label:'z = 5x₁ + 10x₂', rx:/z=5x1\+10x2/, miss:'max z = 5x₁ + 10x₂'},{name:'A', label:'4x₁ + 5x₂ ≤ 200', rx:/4x1\+5x2(\+x3)?(<=|≤|=)200/, miss:'4x₁ + 5x₂ ≤ 200'},{name:'B', label:'6x₁ + 3x₂ ≤ 240', rx:/6x1\+3x2(\+x4)?(<=|≤|=)240/, miss:'6x₁ + 3x₂ ≤ 240'},{name:'Minimum', label:'x₁ ≥ 20', rx:/x1(>=|≥)20|-x1\+x5=-20/, miss:'x₁ ≥ 20'}],
  sol:R`[[tab:Start tableau
 |x_1|x_2|x_3|x_4|x_5|RHS
z|-5|-10|0|0|0|0
 |4|5|1|0|0|200
 |6|3|0|1|0|240
 |-1|0|0|0|1|-20]]`},
 {id:'b', label:'(b) Solve', pts:8, q:R`Simplex steps.`, hints:[R`Negative RHS first: pivot on the $-1$ in column $x_1$.`, R`Then $x_2$ ($-10$): ratios $120/5 = 24$, $120/3 = 40$.`],
  checks:[{name:'x₁', label:'x₁ = 20', rx:/x1=20/, miss:'x₁ = 20'},{name:'x₂', label:'x₂ = 24', rx:/x2=24/, miss:'x₂ = 24'},{name:'z', label:'z = 340', rx:/340/, miss:'z = 340 €'}],
  sol:R`[[tab:Pivot −1 (repair RHS)
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|-10|0|0|-5|100
 |0|5|1|0|4|120
 |0|3|0|1|6|120
 |1|0|0|0|-1|20]]
[[tab:Pivot 5 (x₂ enters) — optimal
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|0|2|0|3|340
 |0|1|\tfrac15|0|\tfrac45|24
 |0|0|-\tfrac35|1|\tfrac{18}{5}|48
 |1|0|0|0|-1|20]]
**$x_1 = 20$, $x_2 = 24$, $z = 340$ €.**`},
 {id:'c', label:'(c) Interpret', pts:4, q:R`Interpret all slacks.`, hints:[R`$x_4$ is in the basis.`],
  checks:[{name:'x₄', label:'machine B 48 h left', rx:/x4=48|48h|48hours|48more/, miss:'x₄ = 48: machine B could run 48 more hours'},{name:'Binding', label:'x₃ = x₅ = 0', rx:/x3=x5=0|binding/, miss:'x₃ = x₅ = 0: machine A and the minimum are binding'}],
  sol:R`20 units of product 1 and 24 of product 2, profit **340 €**. $x_4 = 48$: **machine B could run 48 more hours**. $x_3 = x_5 = 0$: machine A is fully used ($4\cdot20 + 5\cdot24 = 200$) and the minimum of 20 units is met exactly.`}
 ]}
]},

/* ---------------------------------------------------------------- 2022 ---------------------------------------------------------------- */
{id:'e22', year:'2022', title:'Exam 2022', ex:[
{n:1, title:'Solvability of Linear Equation Systems', pts:13, topic:'m2-3', type:'solv',
 given:R`$$\begin{aligned} x_1 \phantom{-x_2} + 2x_3 &= b\\ 3x_1 - x_2 + 5x_3 &= 14\\ x_1 + a\,x_2 + x_3 &= 6\end{aligned}$$`,
 parts:[
 {id:'a', label:'(a) Unique solution', pts:7, q:R`Triangular form and uniqueness condition.`,
  hints:[R`Row 2 − 3·row 1: $0\ \ {-1}\ \ {-1} \mid 14 - 3b$. Row 3 − row 1: $0\ \ a\ \ {-1} \mid 6 - b$.`, R`Row 3 − row 2 removes $x_3$: $(a + 1)\,x_2 = 2b - 8$.`],
  checks:[{name:'Last row', label:'(a+1)x₂ = 2b − 8', rx:/a\+1|2b-8/, miss:'Last row: (a+1)x₂ = 2b − 8'},{name:'a ≠ −1', label:'a ≠ −1', rx:/a!=-1\b|a\+1!=0/, miss:'a ≠ −1'},{name:'b any', label:'b ∈ ℝ', rx:/b(∈|in|el)r|anyb|allb|beliebig|barbitrary|bany/, miss:'b arbitrary'}],
  sol:R`[[tab:Pivot on x₁
x_1|x_2|x_3|RHS
1|0|2|b
0|-1|-1|14-3b
0|a|-1|6-b]]
[[tab:Row 3 − row 2
x_1|x_2|x_3|RHS
1|0|2|b
0|-1|-1|14-3b
0|a+1|0|2b-8]]
**Unique for $a \ne -1$ and any $b$.**`},
 {id:'b', label:'(b) Infinitely many', pts:3, q:R`Infinitely many solutions?`, hints:[R`$a + 1 = 0$ and $2b - 8 = 0$.`],
  checks:[{name:'a', label:'a = −1', rx:/a=-1\b/, miss:'a = −1'},{name:'b', label:'b = 4', rx:/b=4\b/, miss:'b = 4'}],
  sol:R`**$a = -1$ and $b = 4$.**`},
 {id:'c', label:'(c) Inconsistent', pts:3, q:R`Inconsistent?`, hints:[R`$a = -1$, $2b - 8 \ne 0$.`],
  checks:[{name:'a', label:'a = −1', rx:/a=-1\b/, miss:'a = −1'},{name:'b', label:'b ≠ 4', rx:/b!=4\b/, miss:'b ≠ 4'}],
  sol:R`**$a = -1$ and $b \ne 4$.**`}
 ]},
{n:2, title:"Cramer's Rule", pts:11, topic:'m2-5', type:'cramer', note:'Same system as Exam 2024, Exercise 3.',
 given:R`$$\begin{aligned}2x_1 + 6x_2 + 2x_3 &= 4\\ 2x_1 + 2x_2 + 5x_3 &= 14\\ x_1 - x_2 + x_3 &= 6\end{aligned}$$`,
 parts:[
 {id:'a', label:'Full solution', pts:11, q:R`Solve with Cramer's rule.`, hints:[R`$\det A = 24$.`, R`$\det A_1 = 72$, $\det A_2 = -24$, $\det A_3 = 48$.`],
  checks:[{name:'det A', label:'24', rx:/24/, miss:'det A = 24'},{name:'x₁', label:'3', rx:/x1=([^,;]*=)?3\b/, miss:'x₁ = 3'},{name:'x₂', label:'−1', rx:/x2=([^,;]*=)?-1\b/, miss:'x₂ = −1'},{name:'x₃', label:'2', rx:/x3=([^,;]*=)?2\b/, miss:'x₃ = 2'}],
  sol:R`$\det A = 24$, $\det A_1 = 72$, $\det A_2 = -24$, $\det A_3 = 48$ → **$x = (3, -1, 2)$.**`}
 ]},
{n:3, title:'Dynamic Market Shares', pts:16, topic:'m2-3', type:'market',
 given:R`Aral (A), BP (B), Shell (S). Aral keeps 40%, 40% go to BP, 20% to Shell. BP keeps 60%, 40% go to Aral. Shell keeps 50%, 40% go to Aral, 10% to BP.`,
 parts:[
 {id:'a', label:'(a) Set up', pts:6, q:R`Linear equation system for the flow of customers.`,
  hints:[R`$x_A = 0.4x_A + 0.4x_B + 0.4x_S$ (all incoming to Aral).`, R`Add $x_A + x_B + x_S = 1$.`],
  checks:[{name:'Aral', label:'x_A = 0.4x_A + 0.4x_B + 0.4x_S', rx:/xa=0\.4xa\+0\.4xb\+0\.4xs/, miss:'x_A = 0.4x_A + 0.4x_B + 0.4x_S'},{name:'BP', label:'x_B = 0.4x_A + 0.6x_B + 0.1x_S', rx:/xb=0\.4xa\+0\.6xb\+0\.1xs/, miss:'x_B = 0.4x_A + 0.6x_B + 0.1x_S'},{name:'Shell', label:'x_S = 0.2x_A + 0.5x_S', rx:/xs=0\.2xa\+(0xb\+)?0\.5xs/, miss:'x_S = 0.2x_A + 0.5x_S'},{name:'Sum', label:'x_A + x_B + x_S = 1', rx:/xa\+xb\+xs=1/, miss:'x_A + x_B + x_S = 1'}],
  sol:R`$$\begin{aligned}x_A &= 0.4x_A + 0.4x_B + 0.4x_S\\ x_B &= 0.4x_A + 0.6x_B + 0.1x_S\\ x_S &= 0.2x_A + 0\,x_B + 0.5x_S\\ 1 &= x_A + x_B + x_S\end{aligned}$$ The first three are linearly dependent — one (e.g. the first) is redundant.`},
 {id:'b', label:'(b) Steady state', pts:10, q:R`Calculate the steady state.`,
  hints:[R`Use the sum row, BP and Shell: $-0.4x_A + 0.4x_B - 0.1x_S = 0$, $-0.2x_A + 0.5x_S = 0$.`],
  checks:[{name:'Aral', label:'40%', rx:/40|0\.4\b/, miss:'x_A = 40%'},{name:'BP', label:'44%', rx:/44/, miss:'x_B = 44%'},{name:'Shell', label:'16%', rx:/16/, miss:'x_S = 16%'}],
  sol:R`[[tab:Start
x_A|x_B|x_S|RHS
1|1|1|1
-0.4|0.4|-0.1|0
-0.2|0|0.5|0]]
[[tab:Pivot xA
x_A|x_B|x_S|RHS
1|1|1|1
0|0.8|0.3|0.4
0|0.2|0.7|0.2]]
[[tab:Pivot 0.8
x_A|x_B|x_S|RHS
1|0|\tfrac58|0.5
0|1|\tfrac38|0.5
0|0|\tfrac58|0.1]]
[[tab:Pivot ⅝
x_A|x_B|x_S|RHS
1|0|0|0.40
0|1|0|0.44
0|0|1|0.16]]
**$x_A = 40\%$, $x_B = 44\%$, $x_S = 16\%$.**`}
 ]},
{n:4, title:'Economic Application of the Inverse (4 assets)', pts:17, topic:'m2-4', type:'inverse',
 given:R`$$A = \begin{pmatrix}2&1&2&-1\\2&0&2&1\\1&2&0&-1\\0&-1&1&-1\end{pmatrix}\ \begin{matrix}\text{boom}\\\text{recovery}\\\text{recession}\\\text{crisis}\end{matrix}\quad(\text{EON, BMW, SAP, Metro})$$ Coupon of 1 € in the recession only, risk-free coupon, inverse and rank.`,
 parts:[
 {id:'a', label:'(a) Inverse', pts:10, q:R`Calculate $A^{-1}$ ($4\times4$).`,
  hints:[R`Pivot $a_{11} = 2$, then $-1$ in row 2 ($x_2$), then $-1$ in row 3 ($x_3$), then $-0.5$ in row 4 ($x_4$).`, R`After three pivots row 4 reads $0\ \ 0\ \ 0\ \ {-0.5} \mid -1\ \ 0.5\ \ 1\ \ 1$.`],
  checks:[{name:'Row 1', label:'−8, 5, 7, 6', rx:/-8,?5,?7,?6/, miss:'Row 1: (−8, 5, 7, 6)'},{name:'Row 2', label:'5, −3, −4, −4', rx:/5,?-3,?-4,?-4/, miss:'Row 2: (5, −3, −4, −4)'},{name:'Row 3', label:'7, −4, −6, −5', rx:/7,?-4,?-6,?-5/, miss:'Row 3: (7, −4, −6, −5)'},{name:'Row 4', label:'2, −1, −2, −2', rx:/2,?-1,?-2,?-2/, miss:'Row 4: (2, −1, −2, −2)'}],
  sol:R`[[tab:Pivot 2
x_1|x_2|x_3|x_4|R_1|R_2|R_3|R_4
1|0.5|1|-0.5|0.5|0|0|0
0|-1|0|2|-1|1|0|0
0|1.5|-1|-0.5|-0.5|0|1|0
0|-1|1|-1|0|0|0|1]]
[[tab:Pivot −1
x_1|x_2|x_3|x_4|R_1|R_2|R_3|R_4
1|0|1|0.5|0|0.5|0|0
0|1|0|-2|1|-1|0|0
0|0|-1|2.5|-2|1.5|1|0
0|0|1|-3|1|-1|0|1]]
[[tab:Pivot −1
x_1|x_2|x_3|x_4|R_1|R_2|R_3|R_4
1|0|0|3|-2|2|1|0
0|1|0|-2|1|-1|0|0
0|0|1|-2.5|2|-1.5|-1|0
0|0|0|-0.5|-1|0.5|1|1]]
[[tab:Pivot −0.5
x_1|x_2|x_3|x_4|R_1|R_2|R_3|R_4
1|0|0|0|-8|5|7|6
0|1|0|0|5|-3|-4|-4
0|0|1|0|7|-4|-6|-5
0|0|0|1|2|-1|-2|-2]]`},
 {id:'b', label:'(b) Recession coupon', pts:3, q:R`Portfolio for $(0,0,1,0)^T$?`, hints:[R`Third column of $A^{-1}$.`],
  checks:[{name:'EON', label:'buy 7 EON', rx:/7eon|eon:?\+?7|buy7/, miss:'Buy 7 EON'},{name:'BMW', label:'sell 4 BMW', rx:/4bmw|bmw:?-4/, miss:'Sell 4 BMW'},{name:'SAP', label:'sell 6 SAP', rx:/6sap|sap:?-6/, miss:'Sell 6 SAP'},{name:'Metro', label:'sell 2 Metro', rx:/2metro|metro:?-2/, miss:'Sell 2 Metro'}],
  sol:R`Column 3: $(7, -4, -6, -2)^T$. **Buy 7 EON, sell 4 BMW, sell 6 SAP, sell 2 Metro.** Check boom: $14 - 4 - 12 + 2 = 0$ ✓, recession: $7 - 8 - 0 + 2 = 1$ ✓.`},
 {id:'c', label:'(c) Risk-free coupon', pts:2, q:R`Portfolio for $(1,1,1,1)^T$?`, hints:[R`Row sums of $A^{-1}$.`],
  checks:[{name:'EON', label:'buy 10 EON', rx:/10eon|eon:?\+?10|buy10/, miss:'EON: −8 + 5 + 7 + 6 = 10'},{name:'BMW', label:'sell 6 BMW', rx:/6bmw|bmw:?-6/, miss:'BMW: −6'},{name:'SAP', label:'sell 8 SAP', rx:/8sap|sap:?-8/, miss:'SAP: −8'},{name:'Metro', label:'sell 3 Metro', rx:/3metro|metro:?-3/, miss:'Metro: −3'}],
  sol:R`Row sums $10, -6, -8, -3$: **buy 10 EON, sell 6 BMW, sell 8 SAP, sell 3 Metro.** Check crisis: $0 + 6 - 8 + 3 = 1$ ✓.`},
 {id:'d', label:'(d) Rank', pts:2, q:R`Rank of $A$?`, hints:[R`Four assets, the inverse exists.`],
  checks:[{name:'rk', label:'4', rx:/=4|rank(is|of|ofa)*4/, miss:'rk(A) = 4'}],
  sol:R`**$rk(A) = 4$** — regular matrix, all rows and columns independent.`}
 ]},
{n:5, title:'Extreme Values and Conditions (Lagrange)', pts:14, topic:'m2-6', type:'lagrange',
 given:R`Relative extreme values of $f(x,y,z) = -3x + 4y + z$ under the constraint $g(x,y,z) = x^3 + y^4 - z = 0$ (Lagrange). Type of the extreme values?`,
 parts:[
 {id:'a', label:'(a) Stationary points', pts:7, q:R`Lagrange function and stationary points.`,
  hints:[R`$\mathcal{L} = -3x + 4y + z - \lambda(x^3 + y^4 - z)$. Start with $\mathcal{L}'_z = 1 + \lambda = 0$.`, R`$\lambda = -1$: $\mathcal{L}'_x = -3 + 3x^2 = 0$ gives $x = \pm1$; $\mathcal{L}'_y = 4 + 4y^3 = 0$ gives $y = -1$.`],
  checks:[{name:'λ', label:'λ = −1', rx:/λ=-1|lambda=-1|l=-1/, miss:'λ = −1'},{name:'P₁', label:'(1, −1, 2)', rx:/\(1[,;]-1[,;]2\)/, miss:'P₁ = (1, −1, 2)'},{name:'P₂', label:'(−1, −1, 0)', rx:/\(-1[,;]-1[,;]0\)/, miss:'P₂ = (−1, −1, 0)'}],
  sol:R`$$\mathcal{L}'_z = 1 + \lambda = 0 \Rightarrow \lambda = -1,\quad \mathcal{L}'_x = -3 - 3\lambda x^2 = 0 \Rightarrow x = \pm1,\quad \mathcal{L}'_y = 4 - 4\lambda y^3 = 0 \Rightarrow y = -1,\quad z = x^3 + y^4$$ **$P_1 = (1,-1,2)$ and $P_2 = (-1,-1,0)$, $\lambda = -1$.**`},
 {id:'b', label:'(b) Bordered Hessian', pts:7, q:R`Classify both points with the bordered Hessian.`,
  hints:[R`Border: $(3x^2, 4y^3, -1)$. $\mathcal{L}''_{xx} = -6\lambda x = 6x$, $\mathcal{L}''_{yy} = -12\lambda y^2 = 12y^2$, all cross terms 0.`, R`Expand the $4\times4$ along the last row (only the $-1$ in column 1).`],
  checks:[{name:'P₁', label:'|H̄| = −72 → minimum', rx:/-72/, miss:'At P₁: |H̄| = −72'},{name:'P₂', label:'|H̄| = 72 → maximum', rx:/[^-]72|^72/, miss:'At P₂: |H̄| = 72'},{name:'Types', label:'P₁ min, P₂ max', rx:/min.*max|max.*min/, miss:'P₁ minimum, P₂ maximum'}],
  sol:R`$$|\bar H(P_1)| = \begin{vmatrix}0&3&-4&-1\\3&6&0&0\\-4&0&12&0\\-1&0&0&0\end{vmatrix} = 1\cdot\begin{vmatrix}3&-4&-1\\6&0&0\\0&12&0\end{vmatrix} = -72$$ → "positive definite" → **minimum at $(1,-1,2)$**.
$$|\bar H(P_2)| = \begin{vmatrix}0&3&-4&-1\\3&-6&0&0\\-4&0&12&0\\-1&0&0&0\end{vmatrix} = 72$$ → "negative definite" → **maximum at $(-1,-1,0)$** (course sign convention).`}
 ]},
{n:6, title:'Linear Optimization', pts:19, topic:'m2-7', type:'lp',
 given:R`Machine A: 2 h and 5 h per unit, capacity 70 h. Machine B: 3 h and 2 h, capacity 80 h. Profit 3 € and 2 €. At least 10 units of product 2.`,
 parts:[
 {id:'a', label:'(a) Formulate', pts:6, q:R`Problem and start tableau.`, hints:[R`$x_2 \ge 10$ → $-x_2 + x_5 = -10$.`],
  checks:[{name:'Objective', label:'z = 3x₁ + 2x₂', rx:/z=3x1\+2x2/, miss:'max z = 3x₁ + 2x₂'},{name:'A', label:'2x₁ + 5x₂ ≤ 70', rx:/2x1\+5x2(\+x3)?(<=|≤|=)70/, miss:'2x₁ + 5x₂ ≤ 70'},{name:'B', label:'3x₁ + 2x₂ ≤ 80', rx:/3x1\+2x2(\+x4)?(<=|≤|=)80/, miss:'3x₁ + 2x₂ ≤ 80'},{name:'Minimum', label:'x₂ ≥ 10', rx:/x2(>=|≥)10|-x2\+x5=-10/, miss:'x₂ ≥ 10'}],
  sol:R`[[tab:Start tableau
 |x_1|x_2|x_3|x_4|x_5|RHS
z|-3|-2|0|0|0|0
 |2|5|1|0|0|70
 |3|2|0|1|0|80
 |0|-1|0|0|1|-10]]`},
 {id:'b', label:'(b) Solve', pts:9, q:R`Simplex steps.`, hints:[R`Pivot the $-1$ in column $x_2$ first.`, R`Then $x_1$ ($-3$): ratios $20/2 = 10$ and $60/3 = 20$ → row 1.`],
  checks:[{name:'x₁', label:'x₁ = 10', rx:/x1=([^,;]*=)?10\b/, miss:'x₁ = 10'},{name:'x₂', label:'x₂ = 10', rx:/x2=([^,;]*=)?10\b/, miss:'x₂ = 10'},{name:'z', label:'z = 50', rx:/z=50|50€|profit(of|is|=)?50/, miss:'z = 50 €'}],
  sol:R`[[tab:Pivot −1 (repair RHS)
 |x_1|x_2|x_3|x_4|x_5|RHS
z|-3|0|0|0|-2|20
 |2|0|1|0|5|20
 |3|0|0|1|2|60
 |0|1|0|0|-1|10]]
[[tab:Pivot 2 (x₁ enters) — optimal
 |x_1|x_2|x_3|x_4|x_5|RHS
z|0|0|\tfrac32|0|\tfrac{11}{2}|50
 |1|0|\tfrac12|0|\tfrac52|10
 |0|0|-\tfrac32|1|-\tfrac{11}{2}|30
 |0|1|0|0|-1|10]]
**$x_1 = 10$, $x_2 = 10$, $z = 50$ €.**`},
 {id:'c', label:'(c) Interpret', pts:4, q:R`Interpret all slacks.`, hints:[R`$x_4$ is a basis variable.`],
  checks:[{name:'x₄', label:'machine B 30 h left', rx:/x4=30|30h|30hours|30more/, miss:'x₄ = 30: machine B has 30 hours left'},{name:'Binding', label:'x₃ = x₅ = 0', rx:/x3=x5=0|binding/, miss:'x₃ = x₅ = 0: machine A and the minimum are binding'}],
  sol:R`10 units of each product, profit **50 €**. $x_4 = 30$: **machine B could run 30 more hours**. $x_3 = x_5 = 0$: machine A and the minimum of 10 units are binding.`}
 ]}
]}
];

/* exercise types of the exam — used for the problem bank, radar and simulator */
const M2_TYPES = [
{id:'solv',    label:'Solvability & Gauss', topic:'m2-3', match:/solvab|systems? of equations|equations and matrices|solving a linear|linear dependence|gaussian|equations with many right/i},
{id:'market',  label:'Market shares & economic LES', topic:'m2-3', match:/market share|leontief|economic application(?! of the inverse)|internal accounting|supply chain|co-production|economic exercise/i},
{id:'det',     label:"Determinant & Cramer", topic:'m2-5', match:/determinant|cramer/i},
{id:'inverse', label:'Inverse & its application', topic:'m2-4', match:/inverse/i},
{id:'hessian', label:'Extreme values (Hessian / Lagrange)', topic:'m2-6', match:/optimization with many|optimization under|extreme|stationary|unconstrained|^optimization$/i},
{id:'under',   label:'Underdetermined systems', topic:'m2-7', match:/underdetermined|general solution|inhomogeneous/i},
{id:'lp',      label:'Linear optimization (simplex)', topic:'m2-7', match:/linear optimization/i}
];
