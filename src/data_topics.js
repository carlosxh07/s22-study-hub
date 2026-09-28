/* ============================================================ MATH II DATA — TOPICS ============================================================ */
// Math is written as $…$ (inline) or $$…$$ (display) and rendered with KaTeX. All strings use String.raw (R`…`) so backslashes stay intact.
const R = String.raw;

const M2_TOPICS = [
{id:'m2-1', title:'Vectors and Vector Algebra', ch:1, examWeight:'Basis for everything — directly tested in "Linear Dependence and Independence" (old exams)',
summary:R`Some economic objects cannot be described by one number. A stock has a price, a risk and a dividend, a household consumes food, clothing and entertainment. We therefore collect several real numbers along their dimensions in a vector.

A (column) vector $a$ is an ordered list of $m$ real numbers $a_i \in \mathbb{R}$. The number of components is its dimension, so $a$ is an m-vector of order $(m\times 1)$. The transposed row vector is $a^T = (a_1\ a_2\ \cdots\ a_m)$ of order $(1\times m)$. Every component is a scalar.

Order relations only work component by component:
- $a > b \Leftrightarrow a_i > b_i$ for all $i$ (every component must be larger)
- $a = b \Leftrightarrow a_i = b_i$ for all $i$
- Two stocks with one component larger and one smaller cannot be ranked — "which stock is the best?" has no answer without a weighting

Vector algebra works component-wise:
- Sum and difference :: $c = a \pm b \Leftrightarrow c_i = a_i \pm b_i$ (only for vectors of the same dimension)
- Scalar multiplication :: $\lambda a = (\lambda a_1, \dots, \lambda a_m)^T$, e.g. doubling output doubles every input
- Scalar product :: $a^T b = a_1 b_1 + a_2 b_2 + \dots + a_m b_m$ is a single number, and $a^T b = b^T a$
- Transpose twice :: $(a^T)^T = a$

Geometrically every point of $\mathbb{R}^2$ is a vector. Any vector $c$ can be built from two basis vectors $a$ and $b$ by addition and scalar multiplication. The standard basis is $B = \{e_1, e_2\}$ with the unit vectors $e_1 = (1,0)^T$ and $e_2 = (0,1)^T$, which together form the identity matrix $I$.

The length (norm) of a vector is $|a| = \sqrt{a^T a} = \sqrt{a_1^2 + a_2^2 + \dots + a_m^2}$. A unit vector has length 1, and you get one by dividing a vector by its length: $a / |a|$.

Linear dependence is the key concept of the course:
- Linearly dependent :: at least one vector is a linear combination of the others, $a_i = \lambda_1 a_1 + \dots + \lambda_n a_n$. Equivalently $\lambda_1 a_1 + \dots + \lambda_n a_n = 0$ has a non-trivial solution (not all $\lambda_i = 0$)
- Linearly independent :: $\lambda_1 a_1 + \dots + \lambda_n a_n = 0$ holds only for the trivial solution $\lambda_1 = \dots = \lambda_n = 0$

To test independence, write the vector equation $\sum \lambda_i a_i = 0$ as a linear equation system in the $\lambda_i$ and solve it with the Gaussian algorithm.
=> Set up $\sum \lambda_i a_i = 0$ → Solve for the $\lambda_i$ (Gauss) → Only $\lambda = 0$ (independent) → Other solutions exist (dependent)

Example from the slides: $a_1 = (1,0,2)^T$, $a_2 = (-1,1,3)^T$, $a_3 = (5,-2,0)^T$ are dependent because $a_3 = 3a_1 - 2a_2$, i.e. $3a_1 - 2a_2 - a_3 = 0$. Careful: $a_4 = (0,2)^T, a_5 = (4,0)^T, a_6 = (2,0)^T$ look independent, but $a_5 = 0\cdot a_4 + 2a_6$, so the set is dependent. In $\mathbb{R}^2$ three vectors are always dependent.

Finance application (risk-free portfolio): the stocks EON, BMW and SAP pay different amounts in boom, recession and crisis. A risk-free portfolio pays the same in every state. It can be built exactly when the payoff vectors span the whole space, i.e. when they are linearly independent.`,
cards:[
{q:R`What is an m-vector and what is its order?`, a:R`An ordered list of $m$ real numbers $a_1, \dots, a_m$ written as a column. Its order is $(m\times 1)$; the transposed row vector $a^T$ has order $(1\times m)$.`},
{q:R`When is vector $a$ larger than vector $b$?`, a:R`Only if every component is larger: $a > b \Leftrightarrow a_i > b_i$ for all $i$. If some components are larger and others smaller, the vectors cannot be ranked.`},
{q:R`How do you add two vectors and multiply by a scalar?`, a:R`Component-wise: $c_i = a_i \pm b_i$ (same dimension needed) and $\lambda a = (\lambda a_1, \dots, \lambda a_m)^T$.`},
{q:R`What is the scalar product $a^T b$?`, a:R`$a^T b = a_1b_1 + a_2b_2 + \dots + a_mb_m$, a single number (a $1\times1$ result). It is symmetric: $a^T b = b^T a$.`},
{q:R`Formula for the length (norm) of a vector?`, a:R`$|a| = \sqrt{a^T a} = \sqrt{a_1^2 + \dots + a_m^2}$.`},
{q:R`What is a unit vector and how do you get one?`, a:R`A vector of length 1. Divide any vector by its length: $a/|a|$. The standard unit vectors $e_1, e_2, \dots$ form the identity matrix $I$.`},
{q:R`Definition: linearly dependent vectors`, a:R`At least one vector can be written as a linear combination of the others. Equivalently $\lambda_1 a_1 + \dots + \lambda_n a_n = 0$ has a non-trivial solution (not all $\lambda_i = 0$).`},
{q:R`Definition: linearly independent vectors`, a:R`$\lambda_1 a_1 + \dots + \lambda_n a_n = 0$ holds only for the trivial solution $\lambda_1 = \dots = \lambda_n = 0$.`},
{q:R`How do you test vectors for linear independence in the exam?`, a:R`Set up $\sum \lambda_i a_i = 0$ as a linear equation system in the $\lambda_i$ → Solve with Gauss → Only the trivial solution means independent; a free parameter (zero row) means dependent.`},
{q:R`Are $a_1 = (1,2)^T$ and $a_2 = (3,1)^T$ independent?`, a:R`Yes. $\lambda_1 + 3\lambda_2 = 0$ and $2\lambda_1 + \lambda_2 = 0$ only allow $\lambda_1 = \lambda_2 = 0$.`},
{q:R`How many vectors of $\mathbb{R}^m$ can be independent at most?`, a:R`At most $m$. Any $m+1$ vectors in $\mathbb{R}^m$ are dependent.`},
{q:R`Why does a risk-free portfolio need independent payoff vectors?`, a:R`A risk-free portfolio pays the same amount in every state. With independent payoff vectors (full rank) every payoff profile, including $(1,1,1)^T$, can be combined; with dependent vectors some profiles cannot be reached.`},
{q:R`Write the rules $(\alpha+\beta)a$ and $\alpha(a+b)$.`, a:R`$(\alpha+\beta)a = \alpha a + \beta a$ and $\alpha(a+b) = \alpha a + \alpha b$.`}
],
quiz:[
{q:R`$a = (1,2,3)^T$, $b = (4,5,6)^T$. What is $a^T b$?`, opts:[R`32`,R`$(4,10,18)^T$`,R`21`,R`It is not defined`], correct:0, exp:R`$1\cdot4 + 2\cdot5 + 3\cdot6 = 4+10+18 = 32$.`},
{q:R`$a = (1,2,3)^T$ and $c = (7,8,9,10)^T$. What is $2a + c$?`, opts:[R`Not defined, the dimensions differ`,R`$(9,12,15,10)^T$`,R`$(9,12,15)^T$`,R`$(16,20,24)^T$`], correct:0, exp:R`Vector addition needs the same dimension; $a$ is a 3-vector, $c$ a 4-vector.`},
{q:R`What is the length of $a = (3,4)^T$?`, opts:[R`5`,R`7`,R`25`,R`12`], correct:0, exp:R`$\sqrt{9+16} = 5$.`},
{q:R`$\lambda_1 a_1 + \lambda_2 a_2 + \lambda_3 a_3 = 0$ has the solution $\lambda = (1,-2,-1)$. The vectors are…`, opts:[R`linearly dependent`,R`linearly independent`,R`orthogonal`,R`unit vectors`], correct:0, exp:R`A non-trivial solution exists, so they are dependent (here $a_1 - 2a_2 = a_3$).`},
{q:R`Three vectors in $\mathbb{R}^2$ are…`, opts:[R`always linearly dependent`,R`always independent`,R`independent if none is zero`,R`dependent only if two are equal`], correct:0, exp:R`At most 2 vectors of $\mathbb{R}^2$ can be independent.`},
{q:R`Stock A = (price 66.6, risk 12.3, dividend 3.67), stock B = (121.6, 11.2, 1.32). Which statement is correct?`, opts:[R`Neither $A > B$ nor $B > A$ holds`,R`$B > A$ because the price is higher`,R`$A > B$ because the dividend is higher`,R`$A = B$`], correct:0, exp:R`The order relation requires every component to be larger, which is not the case.`},
{q:R`Which rule is FALSE for vectors?`, opts:[R`$a^T b \ne b^T a$`,R`$a + b = b + a$`,R`$(a^T)^T = a$`,R`$\alpha(a+b) = \alpha a + \alpha b$`], correct:0, exp:R`The scalar product is symmetric: $a^T b = b^T a$.`},
{q:R`How do you normalise $a = (6,8)^T$ to a unit vector?`, opts:[R`$(0.6, 0.8)^T$`,R`$(6/14, 8/14)^T$`,R`$(1,1)^T$`,R`$(0.36, 0.64)^T$`], correct:0, exp:R`$|a| = 10$, so $a/|a| = (0.6, 0.8)^T$.`}
]},

{id:'m2-2', title:'Matrices and Matrix Algebra', ch:2, examWeight:'Tool for every exercise — IKEA/supply-chain style set-ups appear in "Economic Application" tasks',
summary:R`A linear equation system has exactly one of three outcomes:
- (a) exactly one solution (consistent, determined)
- (b) infinitely many solutions (consistent, underdetermined)
- (c) no solution (inconsistent, overdetermined)

A system with $m$ equations and $n$ variables is written compactly as $A \cdot x = b$:
- Coefficient matrix :: $A_{(m\times n)}$, the element $a_{ij}$ sits in row $i$ and column $j$ (e.g. $a_{21}$ multiplies $x_1$ in the 2nd equation)
- Solution vector :: $x_{(n\times 1)}$
- Right-hand side :: $b_{(m\times 1)}$

If $m = n$ the matrix is quadratic of order $n$. Its main diagonal $a_{11}, a_{22}, \dots, a_{nn}$ matters because we transpose along it and compute determinants with main and secondary diagonals.

Sum and scalar multiple work element-wise: $A + B = (a_{ij} + b_{ij})$ for matrices of the same order, and $\alpha A = (\alpha a_{ij})$.

Matrix multiplication: the element in row $i$ and column $j$ of $A\cdot B$ is the sum of products of row $i$ of $A$ with column $j$ of $B$. It needs matching inner dimensions: $A_{(m\times n)} \cdot B_{(n\times p)} = C_{(m\times p)}$.

Rules of arithmetic for matrices:
- Commutative law does NOT hold :: $A\cdot B \ne B\cdot A$ in general (often only one product is even defined, or the orders differ: $(2\times3)(3\times2) = 2\times2$ but $(3\times2)(2\times3) = 3\times3$)
- Multiply from the same side :: from $A + B = C$ follows $D\cdot A + D\cdot B = D\cdot C$ (left) or $A\cdot D + B\cdot D = C\cdot D$ (right), never mixed
- Transpose of a product :: $(A\cdot B)^T = B^T \cdot A^T$ (order reverses), and transposing turns $A_{(4\times2)}$ into $A^T_{(2\times4)}$
- Identity :: $A\cdot I = I\cdot A = A$
- Inverse :: $A\cdot A^{-1} = A^{-1}\cdot A = I$
- Associative and distributive laws hold :: $(A+B)+C = A+(B+C)$, $(\alpha+\beta)A = \alpha A + \beta A$, $\alpha(A+B) = \alpha A + \alpha B$

Controlling — IKEA's production programme. With factor prices $f$ (row), technology matrix $T$ (inputs per product), product prices $p$ (row) and production programme $x$ (column):
- Demand for input factors :: $d = T\cdot x$
- Revenues :: $R = p\cdot x$
- Costs per unit of each product :: $c = f\cdot T$
- Profit per unit :: $u = p - c$
- Total costs :: $C = f\cdot T\cdot x$
- Profits :: $P = R - C = (p - f\cdot T)\cdot x$

Supply chain management — multi-stage production. Each stage has its own matrix: $U$ (inputs per component), $V$ (components per device), $W$ (devices per output). The technology matrix of the whole process is the product $T = U\cdot V\cdot W$. The input demand for a production programme $p$ is then simply $T\cdot p$.
=> Inputs I (matrix U) → Components C (matrix V) → Devices D (matrix W) → Outputs O

In the slide example $T = U\cdot V\cdot W$ gives $T = \begin{pmatrix}90&80\\78&74\\57&56\end{pmatrix}$, so 70 units of $O_1$ and 120 of $O_2$ need $T\cdot(70,120)^T = (15{,}900;\ 14{,}340;\ 10{,}710)^T$ units of $I_1, I_2, I_3$.

Corporate finance preview: if the cash-flow matrix $A$ (states × assets) has an inverse, $A\cdot A^{-1} = I$ means that the columns of $A^{-1}$ are portfolios that pay exactly 1 in one state and 0 in all others (coupon stripping). This is picked up again in chapter 4.`,
cards:[
{q:R`Three possible outcomes of a linear equation system?`, a:R`Exactly one solution (determined), infinitely many solutions (underdetermined), or no solution (inconsistent). The first two are consistent.`},
{q:R`Write the system $3x_1 - 2x_2 + 3x_3 = 5$, $5x_1 + x_2 + 2x_3 = -2$ as $A\cdot x = b$. Order of $A$?`, a:R`$A = \begin{pmatrix}3&-2&3\\5&1&2\end{pmatrix}$ of order $(2\times3)$, $x = (x_1,x_2,x_3)^T$, $b = (5,-2)^T$.`},
{q:R`When can you multiply $A\cdot B$ and what order does the result have?`, a:R`When the inner dimensions match: $A_{(m\times n)}\cdot B_{(n\times p)} = C_{(m\times p)}$. Element $c_{ij}$ = row $i$ of $A$ times column $j$ of $B$.`},
{q:R`Does $A\cdot B = B\cdot A$ hold?`, a:R`No, the commutative law does not apply. Often the products have different orders or only one is defined.`},
{q:R`$(A\cdot B)^T = ?$`, a:R`$B^T\cdot A^T$ — transposing reverses the order of the factors.`},
{q:R`You have $A + B = C$ and want to multiply by $D$. What is allowed?`, a:R`Multiply every term from the same side: $DA + DB = DC$ or $AD + BD = CD$. Mixing sides is wrong because matrix multiplication is not commutative.`},
{q:R`What is the main diagonal and why does it matter?`, a:R`The elements $a_{11}, a_{22}, \dots, a_{nn}$ of a quadratic matrix. We transpose along it and use it (with the secondary diagonal) for determinants.`},
{q:R`IKEA: how do you get the input demand, unit costs and total costs?`, a:R`Input demand $d = T\cdot x$; unit costs $c = f\cdot T$; total costs $C = f\cdot T\cdot x$; revenues $R = p\cdot x$; profit $P = R - C$.`},
{q:R`Multi-stage production with stage matrices $U, V, W$: technology matrix?`, a:R`$T = U\cdot V\cdot W$ (multiply in production order). The input demand for programme $p$ is $T\cdot p$.`},
{q:R`What does $A\cdot I$ equal?`, a:R`$A\cdot I = I\cdot A = A$ — the identity matrix is the neutral element of multiplication.`},
{q:R`How do you transpose $A_{(4\times2)}$?`, a:R`Rows become columns: $A^T$ has order $(2\times4)$, $a^T_{ij} = a_{ji}$.`},
{q:R`Coupon stripping idea in one sentence?`, a:R`Each column of $A^{-1}$ is a portfolio that pays 1 in exactly one state and 0 in the others, because $A\cdot A^{-1} = I$.`}
],
quiz:[
{q:R`$A$ is $(2\times3)$ and $B$ is $(3\times2)$. What is the order of $B\cdot A$?`, opts:[R`$(3\times3)$`,R`$(2\times2)$`,R`$(3\times2)$`,R`Not defined`], correct:0, exp:R`$(3\times2)\cdot(2\times3) = (3\times3)$.`},
{q:R`Which rule is correct?`, opts:[R`$(AB)^T = B^TA^T$`,R`$(AB)^T = A^TB^T$`,R`$AB = BA$`,R`$A + B = C \Rightarrow AD + DB = DC$`], correct:0, exp:R`Transposing a product reverses the order.`},
{q:R`$\begin{pmatrix}1&2\\3&4\end{pmatrix}\cdot\begin{pmatrix}1\\1\end{pmatrix} = ?$`, opts:[R`$(3,7)^T$`,R`$(4,6)^T$`,R`$(1,2,3,4)^T$`,R`$(2,6)^T$`], correct:0, exp:R`Row 1: $1+2 = 3$, row 2: $3+4 = 7$.`},
{q:R`Three production stages with matrices $U$ (inputs→components), $V$ (components→devices), $W$ (devices→outputs). The technology matrix is…`, opts:[R`$U\cdot V\cdot W$`,R`$W\cdot V\cdot U$`,R`$U + V + W$`,R`$U^T V^T W^T$`], correct:0, exp:R`Multiply in the order of the production process so that the dimensions chain: inputs × outputs.`},
{q:R`IKEA: factor prices $f$ (row), technology $T$, programme $x$. Total costs are…`, opts:[R`$f\cdot T\cdot x$`,R`$T\cdot f\cdot x$`,R`$x\cdot T\cdot f$`,R`$p\cdot x$`], correct:0, exp:R`$f\cdot T$ gives the cost per product unit; times $x$ gives total costs. $p\cdot x$ would be revenues.`},
{q:R`$x_1 + 2x_2 = 2$ and $2x_1 - x_2 = 4$ has…`, opts:[R`exactly one solution`,R`no solution`,R`infinitely many solutions`,R`only the trivial solution`], correct:0, exp:R`Two independent equations in two variables: determined ($x_1 = 2$, $x_2 = 0$).`},
{q:R`$3x_1 + 5x_2 = 6$ and $3x_1 + 5x_2 = 7$ is…`, opts:[R`inconsistent`,R`underdetermined`,R`determined`,R`homogeneous`], correct:0, exp:R`Same left-hand side, different right-hand side: a contradiction, no solution.`},
{q:R`Per-unit profit vector $u$ given prices $p$, factor prices $f$ and technology $T$:`, opts:[R`$u = p - f\cdot T$`,R`$u = p\cdot T - f$`,R`$u = f\cdot T - p$`,R`$u = p\cdot x$`], correct:0, exp:R`Price minus unit cost, where unit cost is $c = f\cdot T$.`}
]},

{id:'m2-3', title:'Linear Equation Systems', ch:3, examWeight:'Exam Exercise 1 (solvability with a, b) and Exercise 2 (dynamic market shares) — ~28 points every year',
summary:R`A system $A\cdot x = b$ is homogeneous if $b = 0$ and inhomogeneous if $b \ne 0$. Each linearly independent equation binds one degree of freedom. The degrees of freedom are $n - m$ (variables minus independent equations).

With $n$ variables and $m$ linearly independent equations the system is:
- Determined :: $n = m$, unique solution
- Overdetermined :: $n < m$, no solution
- Underdetermined :: $n > m$, infinitely many solutions

The Gaussian algorithm has an elimination phase and a substitution phase (the prof works in tableaux and usually goes straight to the identity form, i.e. Gauss-Jordan):
- Choice of pivot row $r$ :: every row is used exactly once as pivot row
- Choice of pivot column $c$ :: pick a coefficient $a_{rc} \ne 0$ in the pivot row; every column is used once
- Step 3a :: divide the pivot row by the pivot element $a_{rc}$
- Step 3b :: set all other entries of the pivot column to zero
- Step 3c :: transform all remaining entries with the rectangle rule $\tilde a_{ij} = a_{ij} - \dfrac{a_{ic}\cdot a_{rj}}{a_{rc}}$ and $\tilde b_i = b_i - \dfrac{a_{ic}\cdot b_r}{a_{rc}}$

Pick pivot elements that keep numbers simple — ideally a 1 or $-1$, or a row with many zeros.

At the end, the remaining rows tell you what kind of system you have:
- Zero row with RHS 0 :: $0 = 0$ is a tautology, the equations are linearly dependent → infinitely many solutions
- Zero row with RHS $\ne 0$ :: $0 = -5$ is a contradiction → inconsistent, no solution
- A pivot in every row and column :: unique solution

Exam Exercise 1 — solvability with parameters $a$ and $b$. Apply Gauss only until you get a triangular form; you do not need to solve the system. The last row looks like $(\ldots)\cdot x_k = (\ldots)$:
=> Coefficient with a ≠ 0 (unique solution for every b) → Coefficient = 0 and RHS = 0 (infinitely many solutions) → Coefficient = 0 and RHS ≠ 0 (inconsistent)

Example Exam 2024: the last row becomes $(a+4)\,x_2 = -2 + 4b$. So unique for $a \ne -4$ and any $b$; infinitely many for $a = -4$ and $b = \tfrac12$; inconsistent for $a = -4$ and $b \ne \tfrac12$.

The rank $rk(A)$ is the maximum number of linearly independent rows (= columns). Count how many pivot steps Gauss manages on $A$ without the right-hand side.
- $rk(A) \le \min\{m, n\}$
- Regular matrix :: full rank, $rk(A) = \min\{m, n\}$; for a quadratic matrix all rows and columns are independent
- Singular matrix :: $rk(A)$ is smaller, some rows are linear combinations of others
- A zero row after Gauss lowers the rank by one

Macroeconomics — input-output analysis (Leontief). Each sector's output covers intermediate goods for all sectors plus consumption: supply = demand. For agriculture: $x_A = 0.2x_A + 0.4x_I + 0\cdot x_S + 800$. Rearranged, $(I - A)\,x = c$. In the slide example the outputs are $x_A = 5{,}000$, $x_I = 8{,}000$, $x_S = 6{,}400$, a multiple of the consumption demand (800; 1,200; 600) because of intermediate goods. Working hours and wages then follow by multiplying outputs with hours or wages per unit, e.g. wage rate $= 380{,}000 / 37{,}400 = 10.16$ € per hour. A crisis changes $c$ and you re-solve.

Marketing — dynamic market shares (Markov process). The transition matrix $T$ is built so that each ROW collects the incoming customers of one firm and each COLUMN (outgoing customers of one firm) sums to 1.
- Next period :: $s_{t+1} = T\cdot s_t$, and two periods ahead $s_{t+2} = T\cdot T\cdot s_t$
- Steady state :: $s = T\cdot s$, market shares no longer change
- Steady-state system :: $(T - I)\,s = 0$ is linearly dependent (adding the equations gives $x_1 + x_2 + x_3 = x_1 + x_2 + x_3$), so replace one equation by $x_1 + x_2 + x_3 = 1$
- Interpretation :: customers still switch, but the number leaving each firm equals the number arriving

=> Read graph (arrows = % leaving) → Write T (rows = incoming, columns sum to 1) → Next period s₂ = T·s₁ → Steady state: s = T·s plus shares sum to 1 → Gauss → Interpret

Supply chain — material procurement. Set up equations bottom-up: start with the lowest stage (components) and ask "how much of c is required?". E.g. $c_3 = 2s_1 + s_3 + 2s_4$, $s_1 = f_1 + 3f_2 + 10$. Arrows in the graph do not mean anything by themselves — the text defines them. Then substitute the known final demand.

Types of linear equation systems:
- Without reflows :: one equation at a time (e.g. $3x = 6$)
- With reflows, closed system :: market shares, needs $x_A + x_B + x_C = 1$
- With reflows, open system :: supply chain (how much is required?) and input-output analysis (supply = demand)

Strategic management — internal accounting prices (cost-center accounting). Internal accounting prices $p_i$ are set so that every cost center breaks even: revenues = primary costs + costs of internal products received. For cost center $i$: $\text{quantity}_i \cdot p_i = \text{primary costs}_i + \sum_j (\text{units received from } j)\cdot p_j$. Solve the system with Gauss (in the slides: $p_1 = 234.47$, $p_2 = 1{,}552$, $p_3 = 197.44$, $p_4 = 4.10$). Total costs are $c_i = p_i\cdot\text{quantity}_i$, and conversely $p_i = c_i / \text{output}_i$.`,
cards:[
{q:R`Homogeneous vs. inhomogeneous system?`, a:R`Homogeneous: $A\cdot x = 0$ (always has at least the trivial solution). Inhomogeneous: $A\cdot x = b$ with $b \ne 0$.`},
{q:R`Degrees of freedom of a linear equation system?`, a:R`$n - m$: number of variables minus number of linearly independent equations. Each independent equation binds one degree of freedom.`},
{q:R`Determined, overdetermined, underdetermined — conditions?`, a:R`Determined: $n = m$ (unique solution). Overdetermined: $n < m$ (no solution). Underdetermined: $n > m$ (infinitely many solutions). $m$ = independent equations.`},
{q:R`Rectangle rule of the Gaussian algorithm?`, a:R`$\tilde a_{ij} = a_{ij} - \dfrac{a_{ic}\,a_{rj}}{a_{rc}}$ and $\tilde b_i = b_i - \dfrac{a_{ic}\,b_r}{a_{rc}}$ for all $i \ne r$, $j \ne c$ ($r$ = pivot row, $c$ = pivot column).`},
{q:R`The three pivot steps (3a–3c)?`, a:R`3a: divide the pivot row by the pivot element. 3b: set the rest of the pivot column to zero. 3c: transform all other entries with the rectangle rule.`},
{q:R`Final tableau has a row $0\ 0\ 0 \mid 0$. Meaning?`, a:R`A tautology: the equations are linearly dependent, one equation is redundant → infinitely many solutions (if the rest is consistent).`},
{q:R`Final tableau has a row $0\ 0\ 0 \mid -5$. Meaning?`, a:R`A contradiction ($0 = -5$): the system is inconsistent and has no solution.`},
{q:R`Exam Ex. 1: how do you decide unique / infinite / inconsistent with parameters $a$, $b$?`, a:R`Gauss until triangular form (do not solve). Last row: $k(a)\,x = r(a,b)$. Unique if $k(a) \ne 0$ (any $b$). Infinite if $k(a) = 0$ and $r = 0$. Inconsistent if $k(a) = 0$ and $r \ne 0$.`},
{q:R`What is the rank of a matrix and how do you compute it?`, a:R`The maximum number of linearly independent rows/columns. Run Gauss on $A$ without the RHS and count the successful pivot steps (rows that are not zero).`},
{q:R`Regular vs. singular matrix?`, a:R`Regular: full rank $rk(A) = \min\{m,n\}$. Singular: lower rank, some rows are linear combinations of others. Only a regular quadratic matrix has an inverse.`},
{q:R`Input-output analysis: equilibrium equation?`, a:R`Supply = demand: $x = A\cdot x + c$ (output = intermediate goods for all sectors + consumption), i.e. $(I - A)\,x = c$.`},
{q:R`How is the transition matrix $T$ for market shares built?`, a:R`Rows = incoming customers of each firm, columns = outgoing customers of each firm. Each column sums to 1. Then $s_{t+1} = T\cdot s_t$.`},
{q:R`How do you compute the steady state of market shares?`, a:R`Solve $s = T\cdot s$. These equations are linearly dependent, so drop one and add $x_1 + x_2 + x_3 = 1$. Solve with Gauss.`},
{q:R`What characterises the steady state?`, a:R`Market shares no longer change. Customers still switch, but the number leaving each firm equals the number of new customers coming in.`},
{q:R`Market shares after two periods?`, a:R`$s_3 = T\cdot T\cdot s_1 = T\cdot s_2$.`},
{q:R`Material procurement: how do you set up the equations?`, a:R`Bottom-up: start at the lowest stage (components) and ask how much of each component is required for the next stages, e.g. $c_3 = 2s_1 + s_3 + 2s_4$. The text defines the arrows, not the picture.`},
{q:R`Internal accounting price: principle?`, a:R`Each cost center breaks even: quantity × own price = primary costs + Σ (internal units received × their prices). Solve the resulting system for all $p_i$.`},
{q:R`Closed vs. open system with reflows?`, a:R`Closed: the total is fixed (market shares, $\sum x_i = 1$). Open: external demand drives the system (supply chain, input-output analysis).`}
],
quiz:[
{q:R`After Gauss the last row reads $(a+4)\,x_2 = 4b - 2$. For which values is the system inconsistent?`, opts:[R`$a = -4$ and $b \ne \tfrac12$`,R`$a \ne -4$`,R`$a = -4$ and $b = \tfrac12$`,R`$a = 4$ and $b = 2$`], correct:0, exp:R`Coefficient zero ($a = -4$) with a non-zero RHS ($4b - 2 \ne 0$) gives a contradiction.`},
{q:R`Same row $(a+4)\,x_2 = 4b - 2$. When does the system have infinitely many solutions?`, opts:[R`$a = -4$ and $b = \tfrac12$`,R`$a \ne -4$ and any $b$`,R`$a = -4$ and any $b$`,R`Never`], correct:0, exp:R`Both sides zero: $0 = 0$, the row is redundant.`},
{q:R`A system has 4 variables and 3 independent equations. It is…`, opts:[R`underdetermined with 1 degree of freedom`,R`overdetermined`,R`determined`,R`inconsistent`], correct:0, exp:R`$n - m = 4 - 3 = 1$ degree of freedom, infinitely many solutions.`},
{q:R`The rank of $\begin{pmatrix}1&2\\2&4\end{pmatrix}$ is…`, opts:[R`1`,R`2`,R`0`,R`4`], correct:0, exp:R`Row 2 = 2 × row 1, so only one independent row.`},
{q:R`In the transition matrix of a Markov process, what sums to 1?`, opts:[R`Each column (outgoing customers of one firm)`,R`Each row`,R`The main diagonal`,R`All elements together`], correct:0, exp:R`With $s_{t+1} = T\cdot s_t$, column $j$ says where firm $j$'s customers go; together that is 100%.`},
{q:R`$T = \begin{pmatrix}0.2&0&0.2\\0.2&0.4&0.2\\0.6&0.6&0.6\end{pmatrix}$, $s_1 = (0.3, 0.4, 0.3)^T$. Share of firm 1 in $t = 2$?`, opts:[R`12%`,R`32%`,R`20%`,R`30%`], correct:0, exp:R`$0.2\cdot0.3 + 0\cdot0.4 + 0.2\cdot0.3 = 0.12$ (Exam 2023).`},
{q:R`Why can you drop one equation of $s = T\cdot s$?`, opts:[R`The equations are linearly dependent`,R`It is always the zero equation`,R`$T$ is the identity`,R`The steady state is unique anyway`], correct:0, exp:R`Adding all equations yields a tautology; replace one by $x_1 + x_2 + x_3 = 1$.`},
{q:R`Pivot row $r$, pivot column $c$. The new entry $\tilde a_{ij}$ ($i\ne r$, $j \ne c$) is…`, opts:[R`$a_{ij} - a_{ic}a_{rj}/a_{rc}$`,R`$a_{ij}/a_{rc}$`,R`$a_{ij} - a_{rc}$`,R`$a_{ic}a_{rj} - a_{ij}$`], correct:0, exp:R`The rectangle rule.`},
{q:R`Input-output: agriculture sells 0.2 of its output to itself, 0.4 of industry's output goes to agriculture… Which form does the equilibrium take?`, opts:[R`$(I - A)\,x = c$`,R`$A\cdot x = c$`,R`$(A - I)\,c = x$`,R`$x = A^{-1} c$`], correct:0, exp:R`$x = A x + c \Rightarrow (I - A)x = c$.`},
{q:R`Internal accounting prices are chosen so that…`, opts:[R`every cost center breaks even`,R`total profit is maximal`,R`primary costs are zero`,R`all prices are equal`], correct:0, exp:R`Revenues = primary + secondary costs for each cost center.`}
]},

{id:'m2-4', title:'Matrix Inversion', ch:4, examWeight:'Exam Exercise 4 "Economic Application of the Inverse" (coupon stripping) — 15–17 points every year',
summary:R`If a matrix $X$ with $A\cdot X = I$ exists, then $X$ is the inverse $A^{-1}$ of the regular quadratic matrix $A$. Rules:
- $A\cdot A^{-1} = A^{-1}\cdot A = I$
- $(A\cdot A^{-1})^T = (A^{-1})^T\cdot A^T = I^T = I$
- $(A^{-1})^T = (A^T)^{-1}$
- $(A\cdot B)^{-1} = B^{-1}\cdot A^{-1}$ (order reverses)
- $(A^{-1})^{-1} = A$
- $\det A^{-1} = 1/\det A$

Calculating the inverse: solve $A\cdot X = I$, i.e. run the Gaussian algorithm on the tableau $[\,A \mid I\,]$ with three right-hand sides at once.
=> Write [A | I] (RHS1, RHS2, RHS3) → Pivot on each column once → Left side becomes I → Right side is A⁻¹

Each pivot operation turns its column into a unit vector $i_r$ (a 1 in the pivot row, 0 elsewhere). On the right-hand side the pivot row becomes $a_{rj}/a_{rc}$ and all other rows follow the rectangle rule $\tilde a_{ij} = a_{ij} - a_{ic}a_{rj}/a_{rc}$.

Pivots outside the main diagonal: sometimes you must pivot on an off-diagonal element (e.g. because the diagonal entry is 0). Then the left side ends up as a permutation matrix $P$ instead of $I$. Each off-diagonal pivot is an implicit row exchange: sort the ROWS back so that the left side becomes $I$ — the columns must not be changed. The sorting follows the columns you chose during the inversion.

Existence of the inverse:
- Necessary condition :: $A$ is quadratic
- Sufficient condition :: rows and columns of $A$ are linearly independent, $A$ is regular (full rank, $\det A \ne 0$)
- If the last remaining pivot element is zero, the inverse does not exist (singular matrix); the rank is the number of successful pivot steps

Check your result: $A\cdot A^{-1}$ must give $I$. In the exam multiply at least one row and column as a check.

Operations management — general production programme (Leontief with a direct demand matrix $D$). Total output $x$ covers the direct demand of the factories plus the net output (sales) $b$:
- $x = D\cdot x + b$
- From total to net output :: $b = (I - D)\cdot x$
- From net to total output :: $x = (I - D)^{-1}\cdot b = T\cdot b$
- Total demand matrix :: $T = (I - D)^{-1}$

Interpreting $T$:
- Column $j$ :: units of each input needed to deliver one unit of net output of product $j$ (efficiency of factory $j$)
- Row $i$ :: how much of product $i$ the other factories use (importance of factory $i$)
- Main diagonal :: always $\ge 1$, because at least the unit itself must be produced

Corporate finance — risk-free coupons and portfolio (coupon stripping), the standard Exam Exercise 4. The cash-flow matrix $A$ has states (boom, recession, crisis) in the rows and assets (EON, BMW, SAP) in the columns. A portfolio $x$ (number of stocks, negative = sell) pays $A\cdot x$.
- Portfolio for the cash flow $e_k$ (1 € in state $k$, 0 € otherwise) :: $x = A^{-1} e_k$ = column $k$ of $A^{-1}$
- Risk-free coupon paying 1 € in every state :: $x = A^{-1}(1,1,\dots,1)^T$ = the row sums of $A^{-1}$ (add up the columns)
- Positive entry = buy (purchase) stocks, negative entry = sell (short) stocks
- Rank :: if $A^{-1}$ exists, $A$ is regular, all rows and columns are independent, and $rk(A) = n$ (3 for three assets)
- When it is not possible :: if the payoff vectors are linearly dependent ($A$ singular), not every coupon can be generated

Worked example (Exam 2025): $A = \begin{pmatrix}4&3&6\\3&2&4\\-2&-2&-6\end{pmatrix}$ gives $A^{-1} = \begin{pmatrix}-2&3&0\\5&-6&1\\-1&1&-0.5\end{pmatrix}$. Crisis coupon $(0,0,1)^T$ = column 3: buy 1 BMW, sell 0.5 SAP. Risk-free coupon $(1,1,1)^T$ = row sums $(1, 0, -0.5)^T$: buy 1 EON, sell 0.5 SAP. $rk(A) = 3$.`,
cards:[
{q:R`Definition of the inverse $A^{-1}$?`, a:R`The matrix with $A\cdot A^{-1} = A^{-1}\cdot A = I$. It exists only for regular quadratic matrices.`},
{q:R`$(A\cdot B)^{-1} = ?$`, a:R`$B^{-1}\cdot A^{-1}$ — the order reverses.`},
{q:R`$(A^{-1})^T = ?$`, a:R`$(A^T)^{-1}$ — inverting and transposing can be swapped.`},
{q:R`How do you calculate $A^{-1}$ with Gauss?`, a:R`Write the tableau $[\,A\mid I\,]$, pivot on every column once until the left side is $I$; the right side is then $A^{-1}$.`},
{q:R`You pivoted outside the main diagonal and the left side is a permutation matrix. What now?`, a:R`Sort the rows back so the left side becomes $I$ (never swap columns). The right side, sorted the same way, is $A^{-1}$.`},
{q:R`Necessary and sufficient condition for the inverse to exist?`, a:R`Necessary: $A$ is quadratic. Sufficient: rows/columns linearly independent ($A$ regular, full rank, $\det A \ne 0$).`},
{q:R`The last remaining pivot element is 0 while inverting. Meaning?`, a:R`$A$ is singular, the inverse does not exist. The rank equals the number of successful pivot steps.`},
{q:R`Total demand matrix in the production programme?`, a:R`$T = (I - D)^{-1}$ with direct demand matrix $D$. Total output $x = T\cdot b$ for net output $b$; conversely $b = (I - D)\,x$.`},
{q:R`How do you interpret column $j$ and row $i$ of $T = (I-D)^{-1}$?`, a:R`Column $j$: inputs needed per unit net output of $j$ (efficiency). Row $i$: how much of product $i$ the others use (importance). Diagonal elements are $\ge 1$.`},
{q:R`Coupon stripping: portfolio paying 1 € only in the crisis?`, a:R`Column "crisis" of $A^{-1}$ (i.e. $A^{-1}\cdot e_{crisis}$). Positive = buy, negative = sell that many stocks.`},
{q:R`Coupon stripping: risk-free portfolio paying 1 € in every state?`, a:R`$A^{-1}\cdot(1,1,1)^T$ = add up the columns of $A^{-1}$, i.e. the row sums. Each row belongs to one asset.`},
{q:R`Rank of the cash-flow matrix if $A^{-1}$ exists (3 assets)?`, a:R`$rk(A) = 3$: the matrix is regular, all rows and columns are linearly independent.`},
{q:R`When is it impossible to create risk-free coupons?`, a:R`When the asset payoffs are linearly dependent ($A$ singular, $\det A = 0$): then $A^{-1}$ does not exist and not every payoff can be replicated.`},
{q:R`How can you check your inverse quickly?`, a:R`Multiply $A\cdot A^{-1}$ (at least one row by one column): you must get the entries of $I$.`}
],
quiz:[
{q:R`$A^{-1} = \begin{pmatrix}-2&3&0\\5&-6&1\\-1&1&-0.5\end{pmatrix}$ (rows EON, BMW, SAP; columns boom, recession, crisis). Portfolio for 1 € in the crisis only?`, opts:[R`Buy 1 BMW, sell 0.5 SAP`,R`Sell 2 EON, buy 3 BMW`,R`Buy 1 EON, sell 0.5 SAP`,R`Sell 1 SAP`], correct:0, exp:R`Column 3 of $A^{-1}$: $(0, 1, -0.5)^T$ (Exam 2025).`},
{q:R`Same $A^{-1}$. Risk-free coupon of 1 € in every state?`, opts:[R`Buy 1 EON, sell 0.5 SAP`,R`Buy 1 BMW, sell 0.5 SAP`,R`Buy 1 of each`,R`Sell 2 EON`], correct:0, exp:R`Row sums: EON $-2+3+0 = 1$, BMW $5-6+1 = 0$, SAP $-1+1-0.5 = -0.5$.`},
{q:R`$(A\cdot B)^{-1}$ equals…`, opts:[R`$B^{-1}A^{-1}$`,R`$A^{-1}B^{-1}$`,R`$A^T B^T$`,R`$(BA)^T$`], correct:0, exp:R`Order reverses, like for the transpose.`},
{q:R`Which statement about the total demand matrix is correct?`, opts:[R`$x = (I-D)^{-1}\,b$`,R`$b = (I-D)^{-1}\,x$`,R`$x = D\cdot b$`,R`$T = I - D$`], correct:0, exp:R`Total output from net output uses the inverse of $(I - D)$.`},
{q:R`While inverting a $3\times3$ matrix the last pivot element is 0. The rank is…`, opts:[R`2`,R`3`,R`0`,R`1`], correct:0, exp:R`Only two pivot steps succeeded, so $rk(A) = 2$ and $A^{-1}$ does not exist.`},
{q:R`Main-diagonal elements of $T = (I - D)^{-1}$ are…`, opts:[R`at least 1`,R`always 0`,R`negative`,R`exactly 1`], correct:0, exp:R`At least the unit itself must be produced.`},
{q:R`When you pivot off the main diagonal while inverting, you must…`, opts:[R`sort the rows back at the end`,R`sort the columns back`,R`start again`,R`transpose the result`], correct:0, exp:R`Off-diagonal pivots are implicit row exchanges; columns must not be changed.`},
{q:R`A necessary condition for $A^{-1}$ to exist is that $A$ is…`, opts:[R`quadratic`,R`symmetric`,R`triangular`,R`positive definite`], correct:0, exp:R`Only square matrices can have an inverse; being regular is the sufficient condition.`}
]},

{id:'m2-5', title:'Determinants', ch:5, examWeight:'Exam Exercise 3 — Laplace determinant (5×5) or Cramer\'s rule, 12–16 points',
summary:R`Every quadratic matrix has a determinant, a real number. It is used to:
- solve linear equation systems (Cramer's rule)
- compute eigenvalues via $\det(A - \lambda I) = 0$
- decide between maximum and minimum (main section determinants of the Hessian)
- tell whether a system has a unique solution ($\det A \ne 0$) — a qualitative and a quantitative component

Small determinants:
- Order 1 :: $\det(a_{11}) = a_{11}$
- Order 2 :: $\det A = a_{11}a_{22} - a_{12}a_{21}$
- Order 3 (Sarrus) :: $\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$

Sarrus' rule: copy the first two columns to the right, add the three products along the main diagonals and subtract the three products along the secondary diagonals. It only works up to order 3.

Rules of arithmetic for determinants:
- Linearly dependent rows (or columns) :: $\det A = 0$, and vice versa
- A row or column full of zeros :: $\det A = 0$
- Transpose :: $\det A = \det A^T$, so every rule for rows also holds for columns
- Product :: $\det(A\cdot B) = \det A\cdot\det B$
- Inverse :: $\det A^{-1} = 1/\det A$, because $\det I = 1$
- Exchanging two neighbouring rows or columns :: only the sign changes
- Two determinants that differ in one row only :: can be added by adding that row; multiplying one row by $\lambda$ multiplies the determinant by $\lambda$

Main section determinants (MSD), also called leading principal minors, are the determinants of the upper-left sub-matrices: $|A_1| = a_{11}$, $|A_2| = \begin{vmatrix}a_{11}&a_{12}\\a_{21}&a_{22}\end{vmatrix}$, $|A_3| = \det A$ for a $3\times3$ matrix. They decide definiteness in chapter 6.

Method of Laplace (cofactor expansion) — Exam Exercise 3. Expand along a row $i$ or column $j$:
$$\det A = \sum_{j=1}^{m} a_{ij}\,(-1)^{i+j}\,|A_{ij}| \quad\text{(row } i\text{)}\qquad \det A = \sum_{i=1}^{m} a_{ij}\,(-1)^{i+j}\,|A_{ij}| \quad\text{(column } j\text{)}$$
$|A_{ij}|$ is the minor: the determinant after deleting row $i$ and column $j$. The sign $(-1)^{i+j}$ follows a chessboard pattern starting with $+$ in the top-left corner.
=> Pick the row/column with the most zeros → Expand: element × sign × minor → Repeat (5×5 → 4×4 → 3×3) → Sarrus for 3×3 (or keep expanding to 2×2)

Exam tip: it is enough to expand with Laplace down to $3\times3$ and then use Sarrus. Always write down the sign $(-1)^{i+j}$ explicitly — sign mistakes are the most common error. Example Exam 2025: expanding the $5\times5$ matrix along the first column (only $a_{51} = 1$ is non-zero), then along the column with a single 2, gives $\det A = 8$.

Cramer's rule solves $A\cdot x = b$ when $\det A \ne 0$:
$$x_j = \frac{\det A_j}{\det A}$$
where $A_j$ is $A$ with column $j$ replaced by the right-hand side $b$. For a $3\times3$ system you need four determinants ($\det A$, $\det A_1$, $\det A_2$, $\det A_3$), usually with Sarrus. Check your solution by inserting it into one equation.

Economic application — macroeconomic equilibrium (IS-LM in changes). Goods market: $dY = c\,dY - b_0\,di + dG$. Money market: $dM = a_0\,dY - a_1\,di$. Endogenous: $dY$, $di$. Exogenous: $dM$, $dG$.
$$\begin{pmatrix}1-c & b_0\\ a_0 & -a_1\end{pmatrix}\begin{pmatrix}dY\\ di\end{pmatrix} = \begin{pmatrix}dG\\ dM\end{pmatrix},\qquad \det A = -(1-c)a_1 - b_0a_0 < 0$$
- Expansionary monetary policy ($dM > 0$) :: $dY = \frac{-b_0}{\det A}dM > 0$ and $di = \frac{1-c}{\det A}dM < 0$ — income rises, the interest rate falls
- Expansionary fiscal policy ($dG > 0$) :: $dY = \frac{-a_1}{\det A}dG > 0$ and $di = \frac{-a_0}{\det A}dG > 0$ — income and interest rate both rise`,
cards:[
{q:R`Determinant of a $2\times2$ matrix?`, a:R`$\det A = a_{11}a_{22} - a_{12}a_{21}$ (main diagonal minus secondary diagonal).`},
{q:R`Sarrus' rule?`, a:R`For $3\times3$ only: copy the first two columns to the right; add the three main-diagonal products, subtract the three secondary-diagonal products.`},
{q:R`When is a determinant 0?`, a:R`When rows (or columns) are linearly dependent, e.g. a zero row, two equal rows, or one row a multiple of another. And vice versa.`},
{q:R`$\det(A\cdot B)$ and $\det A^{-1}$?`, a:R`$\det(AB) = \det A\cdot\det B$ and $\det A^{-1} = 1/\det A$.`},
{q:R`What happens to $\det A$ if you swap two neighbouring rows?`, a:R`Only the sign changes.`},
{q:R`$\det A$ vs. $\det A^T$?`, a:R`They are equal, so every rule for rows also holds for columns.`},
{q:R`Laplace expansion along row $i$?`, a:R`$\det A = \sum_j a_{ij}(-1)^{i+j}|A_{ij}|$, where $|A_{ij}|$ deletes row $i$ and column $j$. Signs follow a chessboard starting with $+$.`},
{q:R`Best strategy for a $5\times5$ Laplace determinant in the exam?`, a:R`Expand along the row/column with the most zeros, write the sign $(-1)^{i+j}$ explicitly, reduce to $3\times3$ and finish with Sarrus.`},
{q:R`Cramer's rule?`, a:R`$x_j = \det A_j / \det A$, where $A_j$ is $A$ with column $j$ replaced by $b$. Needs $\det A \ne 0$.`},
{q:R`Main section determinants of a $3\times3$ matrix?`, a:R`$|A_1| = a_{11}$, $|A_2|$ = upper-left $2\times2$ determinant, $|A_3| = \det A$.`},
{q:R`Sign of the cofactor for $a_{23}$?`, a:R`$(-1)^{2+3} = -1$.`},
{q:R`Macro model: effect of $dM > 0$ on $dY$ and $di$?`, a:R`With $\det A = -(1-c)a_1 - b_0a_0 < 0$: $dY = -b_0\,dM/\det A > 0$, $di = (1-c)\,dM/\det A < 0$. Income up, interest rate down.`},
{q:R`Macro model: effect of $dG > 0$?`, a:R`$dY = -a_1\,dG/\det A > 0$ and $di = -a_0\,dG/\det A > 0$. Income and interest rate both rise.`},
{q:R`Four uses of the determinant named in the lecture?`, a:R`Solving LES (Cramer), eigenvalues ($\det(A - \lambda I) = 0$), max/min via main section determinants, and checking whether a system has a unique solution.`}
],
quiz:[
{q:R`$\det\begin{pmatrix}3&-2\\5&8\end{pmatrix} = ?$`, opts:[R`34`,R`14`,R`-34`,R`24`], correct:0, exp:R`$3\cdot8 - (-2)\cdot5 = 24 + 10 = 34$.`},
{q:R`$\det\begin{pmatrix}1&2&3\\0&1&4\\5&6&0\end{pmatrix} = ?$`, opts:[R`1`,R`-1`,R`0`,R`5`], correct:0, exp:R`Sarrus: $0 + 40 + 0 - 15 - 24 - 0 = 1$.`},
{q:R`$\det A = 4$, $\det B = 2$. $\det(AB) = ?$`, opts:[R`8`,R`6`,R`2`,R`16`], correct:0, exp:R`Product rule.`},
{q:R`$\det A = -2$. $\det A^{-1} = ?$`, opts:[R`$-0.5$`,R`2`,R`$-2$`,R`$0.5$`], correct:0, exp:R`$1/\det A$.`},
{q:R`Cramer: $\det A = 24$, $\det A_1 = 72$, $\det A_2 = -24$, $\det A_3 = 48$. The solution is…`, opts:[R`$x = (3,-1,2)$`,R`$x = (72,-24,48)$`,R`$x = (1/3,-1,1/2)$`,R`$x = (2,-1,3)$`], correct:0, exp:R`$x_j = \det A_j/\det A$ (Exam 2022/2024).`},
{q:R`Sign of the cofactor of $a_{51}$ in a $5\times5$ expansion?`, opts:[R`$+$`,R`$-$`,R`depends on $a_{51}$`,R`0`], correct:0, exp:R`$(-1)^{5+1} = (-1)^6 = +1$.`},
{q:R`Swapping two neighbouring rows turns $\det A = 4$ into…`, opts:[R`$-4$`,R`4`,R`0`,R`$1/4$`], correct:0, exp:R`Only the sign changes.`},
{q:R`Sarrus' rule works for matrices of order…`, opts:[R`at most 3`,R`any order`,R`exactly 2`,R`at least 3`], correct:0, exp:R`For larger matrices use Laplace first.`},
{q:R`Expansionary monetary policy in the lecture's model leads to…`, opts:[R`higher income, lower interest rate`,R`higher income, higher interest rate`,R`lower income, lower interest rate`,R`no change`], correct:0, exp:R`$dY > 0$, $di < 0$.`},
{q:R`A matrix has two identical rows. Its determinant is…`, opts:[R`0`,R`1`,R`the product of the diagonal`,R`negative`], correct:0, exp:R`Identical rows are linearly dependent.`}
]},

{id:'m2-6', title:'(Un)constrained Optimization', ch:6, examWeight:'Exam Exercise 5 — extreme values with the Hessian or Lagrange + bordered Hessian, 14–19 points',
summary:R`A quadratic form is a homogeneous polynomial whose terms are all of order 2: $q(x,y) = a x^2 + 2b\,xy + c\,y^2$. In matrix form $q = x^T A x$ with the symmetric matrix $A = \begin{pmatrix}a&b\\b&c\end{pmatrix}$ — split the mixed term $2bxy$ half/half onto the secondary diagonal.

Definiteness of $q(x,y)$ ($q = 0$ at $x = y = 0$ always):
- Positive definite :: $q > 0$ for all $(x,y)\ne 0$ → minimum; condition $a > 0$ and $ac - b^2 > 0$
- Negative definite :: $q < 0$ for all $(x,y)\ne 0$ → maximum; condition $a < 0$ and $ac - b^2 > 0$
- Positive semidefinite :: $q \ge 0$, condition $a > 0$ and $ac - b^2 = 0$ (possibly after swapping $a$ and $c$)
- Negative semidefinite :: $q \le 0$, condition $a < 0$ and $ac - b^2 = 0$
- Indefinite :: $ac - b^2 < 0$ → saddle point; also if $a = c = 0$, because then $q = 2bxy$

Examples: $3x^2 + 4xy + 2y^2$ has $a = 3$, $b = 2$, $c = 2$, $ac - b^2 = 2 > 0$ → positive definite. $9x^2 + 6xy + y^2$ has $ac - b^2 = 0$ → positive semidefinite. $3x^2 + 24xy - 2y^2$ → indefinite.

For more variables use the main section determinants (MSD) of the symmetric matrix:
- All MSD positive $(+,+,+,\dots)$ :: positive definite → minimum
- MSD alternate starting with minus $(-,+,-,\dots)$ :: negative definite → maximum
- Any other pattern $(+,-,+)$, $(+,0,+)$, $(-,-,-)$, … :: no optimum (indefinite)

Optimization without constraints (Exam Exercise 5). Necessary condition: all first partial derivatives equal zero. Sufficient condition: the second-order total differential $d^2z = f''_{xx}dx^2 + 2f''_{xy}dx\,dy + f''_{yy}dy^2$ is positive (negative) definite, which you check with the Hessian matrix
$$H = \begin{pmatrix} f''_{x_1x_1} & \cdots & f''_{x_1x_n}\\ \vdots & \ddots & \vdots\\ f''_{x_nx_1} & \cdots & f''_{x_nx_n}\end{pmatrix}$$
evaluated at each stationary point. $H$ is always symmetric because cross derivatives are identical.
=> First derivatives = 0 → Solve for all stationary points (watch x² terms: two points!) → Hessian H → Evaluate H at each point → MSD signs → Min / Max / no extremum

Exam 2024/2025: $f = \tfrac23x_1^3 + 8x_1x_2 - 6x_1x_3 + 2x_2^2 + 3x_3^2$. From $f'_{x_2} = 0$: $x_2 = -2x_1$; from $f'_{x_3} = 0$: $x_3 = x_1$; into $f'_{x_1} = 2x_1^2 - 22x_1 = 0$ gives two points $(0,0,0)$ and $(11,-22,11)$. At $(0,0,0)$: $|H_1| = 0$, $|H_2| = -64$ → indefinite, no extremum. At $(11,-22,11)$: $|H_1| = 44$, $|H_2| = 112$, $|H_3| = 528$ → positive definite → minimum.

Optimization under a constraint — Lagrange. Problem: min/max $f(x,y)$ s.t. $g(x,y) = 0$.
$$\mathcal{L}(\lambda,x,y) = f(x,y) - \lambda\,g(x,y)$$
Necessary conditions: $\mathcal{L}'_\lambda = -g = 0$, $\mathcal{L}'_x = f'_x - \lambda g'_x = 0$, $\mathcal{L}'_y = f'_y - \lambda g'_y = 0$. Solve for $x$, $y$ and $\lambda$. The multiplier $\lambda$ measures how much the optimal value changes when the constraint is relaxed by one unit (e.g. +1 € budget).

Sufficient condition — bordered Hessian:
$$|\bar H| = \begin{vmatrix} 0 & g'_x & g'_y\\ g'_x & \mathcal{L}''_{xx} & \mathcal{L}''_{xy}\\ g'_y & \mathcal{L}''_{yx} & \mathcal{L}''_{yy}\end{vmatrix}$$
with $\mathcal{L}''_{xx} = f''_{xx} - \lambda g''_{xx}$ etc. The convention used in the course's official solutions:
- $|\bar H| < 0$ :: "positive definite" → minimum
- $|\bar H| > 0$ :: "negative definite" → maximum

The course applies the same sign rule to the $4\times4$ bordered Hessian with three variables (Exam 2022: $|\bar H| = -72$ → minimum at $(1,-1,2)$, $|\bar H| = 72$ → maximum at $(-1,-1,0)$).

Applications from the slides:
- Utility maximization :: $U = x_A x_B$ with budget $2x_A + x_B = 10$; the optimum sets MRS = price ratio; $\lambda$ = marginal utility of one more €
- Cost minimization :: Volkswagen must build $C = K^2 + L = 30$ cars at costs $20L + K$; Lagrange gives the cheapest input mix, $\lambda$ = marginal costs
- Minimum-variance portfolio :: minimise $x^T V x$ (variance-covariance matrix $V$) s.t. $x_1 + x_2 + x_3 = 1$; check with the bordered Hessian`,
cards:[
{q:R`What is a quadratic form (2 variables) and its matrix?`, a:R`$q = ax^2 + 2bxy + cy^2 = x^TAx$ with $A = \begin{pmatrix}a&b\\b&c\end{pmatrix}$ (mixed term split onto the secondary diagonal).`},
{q:R`Conditions for positive definite (2 variables)?`, a:R`$a > 0$ and $ac - b^2 > 0$ → minimum.`},
{q:R`Conditions for negative definite (2 variables)?`, a:R`$a < 0$ and $ac - b^2 > 0$ → maximum.`},
{q:R`When is $ax^2 + 2bxy + cy^2$ semidefinite or indefinite?`, a:R`Semidefinite: $ac - b^2 = 0$ (sign of $a$ decides positive/negative). Indefinite: $ac - b^2 < 0$, or $a = c = 0$ (then $q = 2bxy$).`},
{q:R`MSD pattern for a minimum? For a maximum?`, a:R`Minimum: all positive $(+,+,+)$. Maximum: alternating starting with minus $(-,+,-)$. Anything else: no optimum.`},
{q:R`Necessary condition for an extremum of $f(x_1,\dots,x_n)$?`, a:R`All first partial derivatives equal zero (stationary point).`},
{q:R`Sufficient condition without constraints?`, a:R`The Hessian (second-order total differential) is positive definite (minimum) or negative definite (maximum) at the stationary point.`},
{q:R`Why is the Hessian always symmetric?`, a:R`Cross derivatives are identical: $f''_{xy} = f''_{yx}$.`},
{q:R`Exam trap in Exercise 5 with an $x^3$ term?`, a:R`$f'_x$ contains $x^2$, so you usually get TWO stationary points (e.g. $(0,0,0)$ and another). Check the Hessian at each point separately.`},
{q:R`Lagrange function?`, a:R`$\mathcal{L} = f(x,y) - \lambda\,g(x,y)$ for the constraint $g(x,y) = 0$. Set $\mathcal{L}'_\lambda = \mathcal{L}'_x = \mathcal{L}'_y = 0$.`},
{q:R`Meaning of the Lagrange multiplier $\lambda$?`, a:R`The change of the optimal value when the constraint is relaxed by one unit (e.g. marginal utility of 1 € more budget, or marginal costs).`},
{q:R`Bordered Hessian for $f(x,y)$ s.t. $g = 0$?`, a:R`$\begin{vmatrix}0 & g'_x & g'_y\\ g'_x & \mathcal{L}''_{xx} & \mathcal{L}''_{xy}\\ g'_y & \mathcal{L}''_{xy} & \mathcal{L}''_{yy}\end{vmatrix}$ with $\mathcal{L}'' = f'' - \lambda g''$.`},
{q:R`Course convention: bordered Hessian sign → min or max?`, a:R`$|\bar H| < 0$: "positive definite" → minimum. $|\bar H| > 0$: "negative definite" → maximum.`},
{q:R`Is $3x^2 + 4xy + 2y^2$ definite?`, a:R`$a = 3$, $b = 2$, $c = 2$: $a > 0$ and $ac - b^2 = 6 - 4 = 2 > 0$ → positive definite.`},
{q:R`Minimum-variance portfolio set-up?`, a:R`Minimise the variance $x^TVx$ with the variance-covariance matrix $V$ s.t. $x_1 + x_2 + x_3 = 1$ (Lagrange), then verify with the bordered Hessian.`}
],
quiz:[
{q:R`$q = -3x^2 + 4xy - 4y^2$ is…`, opts:[R`negative definite`,R`positive definite`,R`indefinite`,R`semidefinite`], correct:0, exp:R`$a = -3 < 0$, $b = 2$, $c = -4$: $ac - b^2 = 12 - 4 = 8 > 0$.`},
{q:R`$q = 8x^2 + 8xy + 2y^2$ is…`, opts:[R`positive semidefinite`,R`positive definite`,R`indefinite`,R`negative definite`], correct:0, exp:R`$a = 8$, $b = 4$, $c = 2$: $ac - b^2 = 16 - 16 = 0$.`},
{q:R`MSD of the Hessian at a point: $|H_1| = -2$, $|H_2| = 5$, $|H_3| = -8$. The point is a…`, opts:[R`maximum`,R`minimum`,R`saddle point`,R`cannot tell`], correct:0, exp:R`Alternating starting with minus → negative definite.`},
{q:R`MSD: $|H_1| = 2$, $|H_2| = 15/4$, $|H_3| = -3/4$. Result?`, opts:[R`no optimum`,R`minimum`,R`maximum`,R`semidefinite minimum`], correct:0, exp:R`$(+,+,-)$ is neither pattern.`},
{q:R`MSD: $|H_1| = 0$, $|H_2| = -64$. Result?`, opts:[R`indefinite, no extremum`,R`minimum`,R`maximum`,R`need $|H_3|$ first`], correct:0, exp:R`$|H_2| < 0$ already rules out both definite patterns (Exam 2025 at $(0,0,0)$).`},
{q:R`$f = x^3 + \dots$: why do Exercise-5 functions often have two stationary points?`, opts:[R`$f'_x$ is quadratic in $x$`,R`the Hessian is symmetric`,R`there are 3 variables`,R`the constraint is binding`], correct:0, exp:R`Factorising e.g. $2x_1(x_1 - 11) = 0$ gives two solutions.`},
{q:R`Bordered Hessian determinant $= 100$ (course convention). The point is a…`, opts:[R`maximum`,R`minimum`,R`saddle point`,R`corner solution`], correct:0, exp:R`$|\bar H| > 0$ → "negative definite" → maximum.`},
{q:R`In $\mathcal{L} = f - \lambda g$, $\lambda$ measures…`, opts:[R`the change of the optimum per unit relaxation of the constraint`,R`the slope of $f$`,R`the Hessian determinant`,R`the number of constraints`], correct:0, exp:R`E.g. marginal utility of income or marginal costs.`},
{q:R`Matrix of $q = 2x^2 - 2xy + 3y^2 + 4z^2$?`, opts:[R`$\begin{pmatrix}2&-1&0\\-1&3&0\\0&0&4\end{pmatrix}$`,R`$\begin{pmatrix}2&-2&0\\0&3&0\\0&0&4\end{pmatrix}$`,R`$\begin{pmatrix}2&-2&0\\-2&3&0\\0&0&4\end{pmatrix}$`,R`$\begin{pmatrix}4&-2&0\\-2&6&0\\0&0&8\end{pmatrix}$`], correct:0, exp:R`Split $-2xy$ into $-1$ and $-1$ on the secondary diagonal.`}
]},

{id:'m2-7', title:'Linear Optimization', ch:7, examWeight:'Exam Exercise 6 — simplex with a minimum/maximum constraint, 16–20 points (largest exercise)',
summary:R`Underdetermined systems have fewer independent equations than variables ($m < n$) and therefore $n - m$ degrees of freedom and infinitely many solutions. If you fix $n - m$ variables, the remaining $m$ equations give a unique solution for the other $m$ variables. Applications: co-production processes and linear optimization.

Co-production process: one process yields several products at once (an oil refinery gives fuel oil, motor fuel, gas and tar).
- Inelastic dissociation :: co-products come out in fixed proportions
- Elastic dissociation :: the proportions can be changed
- Fixed mixing :: finished goods need defined proportions of intermediates
- Flexible mixing :: intermediates are used in whatever quantities are available

A basis solution comes from the canonical form. If $rk(A) = m$, choose $m$ independent columns as basis variables and transform them into unit vectors (Gauss). Setting all non-basis variables to zero gives the basis solution: basis variables = right-hand side $\tilde b_i$, non-basis variables = 0.

General solution of an underdetermined (inhomogeneous) system: solve for the basis variables in terms of the free variables. Example: $x = (100, \tfrac{200}{3}, 0, 250)^T + x_3\,(0, -\tfrac13, 1, 0)^T$ = a particular solution plus multiples of a solution of the homogeneous system. Economically meaningful only if all $x_i \ge 0$.

Elementary basis exchange: exactly one basis variable leaves and one non-basis variable enters. The pivot element sits in the column of the entering variable and the row of the leaving variable. After the Gauss step the system is in canonical form again. Graphically you move from one corner to a neighbouring corner.

Inequalities become equations with slack variables:
- Maximum constraint $a\cdot x \le h$ :: add slack $y \ge 0$: $a\cdot x + y = h$ (unused capacity)
- Minimum constraint $a\cdot x \ge m$ :: multiply by $-1$: $-a\cdot x \le -m$, then $-a\cdot x + y = -m$ (surplus above the minimum)
- All variables including slacks are non-negative

A linear optimization problem consists of a linear objective function and linear constraints; it needs degrees of freedom ($n > m$). The optimum always lies in a corner of the feasible region, and corners are basis solutions.

Simplex tableau: add the objective function as the $z$-row, written as $z - 50x_1 - 40x_2 - 0x_3 - \dots = 0$, so the objective coefficients enter with a MINUS sign. The $z$-row is never used as pivot row. Start with the slacks as basis (all $x = 0$).

Choosing the pivot element (the optimality criterion):
- Pivot column :: the most negative value in the $z$-row
- Pivot row :: smallest ratio $b_i / a_{ic}$ over rows with positive $a_{ic}$
- If the RHS is positive, the pivot element must be positive
- Optimum reached :: all entries of the $z$-row are non-negative ($\ge 0$); the $z$-RHS is the optimal value

Minimum constraints make a RHS negative (e.g. $-10$). That basis solution is not feasible, so the optimality criterion does not apply yet. First choose ANY negative pivot element in that row (e.g. $-1$) to make every RHS non-negative, then continue with the optimality criterion.
=> Formulate max z and constraints → Add slack variables (≥ constraints × −1) → Tableau with z-row (−objective coefficients) → Negative RHS? pivot on a negative element first → Pivot: most negative z entry, smallest ratio → Stop when z-row ≥ 0 → Read off solution and interpret all slacks

Reading the final tableau (always interpret EVERY slack variable in the exam):
- Basis variable :: value = its RHS
- Non-basis variable :: value 0
- Slack = 0 :: the constraint is binding (machine fully used / minimum exactly met)
- Slack > 0 :: capacity left over (e.g. "machine B could run 48 more hours") or production above the minimum

Exam 2023 example: max $z = 5x_1 + 10x_2$ s.t. $4x_1 + 5x_2 \le 200$, $6x_1 + 3x_2 \le 240$, $x_1 \ge 20$. Pivot first on the $-1$ in the minimum row, then on $x_2$. Optimum: $x_1 = 20$, $x_2 = 24$, $z = 340$ €; $x_4 = 48$ free hours on machine B; machine A and the minimum constraint are binding.

Minimization: $\min z = \max(-z)$ — multiply the objective by $-1$ and maximize, then flip the sign of the result.

Open-constrained (unbounded) solutions: if a column has a negative $z$-entry and all its coefficients $a_{ic} \le 0$, the objective can grow without limit — the problem cannot be optimized.

Graphical solution (2 variables): draw each constraint as a line, shade the feasible region, move the objective line $z = c_1x_1 + c_2x_2$ parallel outward; the last corner touched is optimal. Changing the objective coefficients (e.g. $z = 10x_1 + 40x_2$ instead of $50x_1 + 40x_2$) tilts the line and can move the optimum to another corner.`,
cards:[
{q:R`Degrees of freedom of an underdetermined system?`, a:R`$n - m$ (variables minus independent equations). Fixing $n - m$ variables leaves a unique solution for the other $m$.`},
{q:R`What is a basis solution?`, a:R`Bring $m$ basis variables into canonical form (unit vectors). Non-basis variables = 0, basis variables = their right-hand side.`},
{q:R`Elementary basis exchange?`, a:R`Exactly one basis variable leaves and one non-basis variable enters. Pivot = column of the entering variable, row of the leaving variable. Graphically: move to a neighbouring corner.`},
{q:R`General solution of an underdetermined system?`, a:R`Particular solution + free variable(s) × homogeneous solution, e.g. $x = (100, 200/3, 0, 250)^T + x_3(0, -1/3, 1, 0)^T$. Meaningful only if all $x_i \ge 0$.`},
{q:R`How do you handle a maximum constraint $ax \le h$?`, a:R`Add a slack variable: $ax + y = h$, $y \ge 0$ = unused capacity.`},
{q:R`How do you handle a minimum constraint $ax \ge m$?`, a:R`Multiply by $-1$: $-ax \le -m$, then $-ax + y = -m$. The start tableau then has a negative RHS.`},
{q:R`How is the objective function written in the simplex tableau?`, a:R`As $z - c_1x_1 - c_2x_2 - \dots = 0$: the coefficients appear with a minus sign in the $z$-row. The $z$-row is never a pivot row.`},
{q:R`Optimality criterion — which pivot column and row?`, a:R`Column: most negative entry in the $z$-row. Row: smallest ratio RHS / positive coefficient in that column.`},
{q:R`When is the tableau optimal (maximization)?`, a:R`When all entries in the $z$-row are non-negative. The $z$-RHS is then the maximum.`},
{q:R`A RHS is negative (minimum constraint). What do you do first?`, a:R`The basis solution is infeasible; pivot on ANY negative element of that row (e.g. $-1$) until all RHS are $\ge 0$, then use the optimality criterion.`},
{q:R`Slack variable = 0 in the final tableau means…`, a:R`The constraint is binding: the machine has no capacity left, or the minimum is met exactly.`},
{q:R`Slack variable > 0 in the final tableau means…`, a:R`Capacity left over (e.g. 48 free machine hours) or production above the minimum by that amount.`},
{q:R`How do you minimize with the simplex method?`, a:R`$\min z = \max(-z)$: maximize the negative objective, then flip the sign.`},
{q:R`When is a solution open-constrained (unbounded)?`, a:R`If a column with a negative $z$-entry has only coefficients $\le 0$: $z$ can grow without limit.`},
{q:R`Where does the optimum of a linear program lie?`, a:R`In a corner of the feasible region; corners correspond to basis solutions.`},
{q:R`Inelastic vs. elastic dissociation?`, a:R`Inelastic: co-products in fixed proportions. Elastic: the proportions of the outputs can be changed.`}
],
quiz:[
{q:R`Max $z = 3x_1 + 2x_2$. How does the $z$-row of the start tableau look?`, opts:[R`$-3\ \ -2\ \ 0\ \ 0 \mid 0$`,R`$3\ \ 2\ \ 0\ \ 0 \mid 0$`,R`$-3\ \ -2\ \ 1\ \ 1 \mid 0$`,R`$0\ \ 0\ \ -3\ \ -2 \mid 0$`], correct:0, exp:R`$z - 3x_1 - 2x_2 = 0$.`},
{q:R`Constraint $x_2 \ge 10$ becomes the tableau row…`, opts:[R`$0\ \ -1\ \ \dots\ \ 1 \mid -10$`,R`$0\ \ 1\ \ \dots\ \ 1 \mid 10$`,R`$0\ \ 1\ \ \dots\ \ -1 \mid -10$`,R`$0\ \ -1\ \ \dots\ \ -1 \mid 10$`], correct:0, exp:R`$-x_2 + x_5 = -10$.`},
{q:R`$z$-row: $-4, -1, 0, 0, 0$. Which column enters first (if all RHS $\ge 0$)?`, opts:[R`$x_1$`,R`$x_2$`,R`a slack`,R`any`], correct:0, exp:R`Most negative entry: $-4$.`},
{q:R`Pivot column $x_1$ with coefficients 3, 2, 0 and RHS 80, 120, 10. Pivot row?`, opts:[R`Row 1 (ratio 26.7)`,R`Row 2 (ratio 60)`,R`Row 3`,R`The $z$-row`], correct:0, exp:R`Smallest ratio among positive coefficients: $80/3$ vs. $120/2$.`},
{q:R`Final $z$-row $0\ 0\ 2\ 0\ 3 \mid 340$. This means…`, opts:[R`optimal, $z = 340$`,R`not optimal yet`,R`unbounded`,R`infeasible`], correct:0, exp:R`All entries $\ge 0$.`},
{q:R`In the optimum $x_4 = 48$ is the slack of machine B. Interpretation?`, opts:[R`Machine B has 48 hours of capacity left`,R`Machine B is binding`,R`48 units of product B are produced`,R`Profit is 48`], correct:0, exp:R`Slack > 0 = unused capacity (Exam 2023).`},
{q:R`A system has 6 equations and 7 variables. Degrees of freedom?`, opts:[R`1`,R`6`,R`7`,R`13`], correct:0, exp:R`$n - m = 7 - 6 = 1$ (co-production example).`},
{q:R`$\min z$ is solved as…`, opts:[R`$\max(-z)$`,R`$\max(1/z)$`,R`$\max z$ with reversed constraints`,R`$\min(-z)$`], correct:0, exp:R`Flip the sign of the objective.`},
{q:R`Column with $z$-entry $-2$ and coefficients $-1$, 0, $-3$. The problem is…`, opts:[R`open-constrained (unbounded)`,R`optimal`,R`infeasible`,R`degenerate but bounded`], correct:0, exp:R`No positive coefficient limits the entering variable.`},
{q:R`Why does the optimality criterion not apply while a RHS is negative?`, opts:[R`The current basis solution is infeasible`,R`The $z$-row is negative`,R`The system is inconsistent`,R`There are no slacks`], correct:0, exp:R`Non-negativity is violated; first pivot on a negative element to repair it.`}
]}
];

const M2_CHEAT = [
{h:"Vectors & matrices", items:[
R`Scalar product $a^Tb = \sum a_ib_i$ · length $|a| = \sqrt{a^Ta}$ · unit vector $a/|a|$`,
R`Dependent ⇔ $\sum\lambda_ia_i = 0$ has non-trivial solution · independent ⇔ only $\lambda = 0$`,
R`$A_{(m\times n)}B_{(n\times p)} = C_{(m\times p)}$ · $AB \ne BA$ · $(AB)^T = B^TA^T$ · $AI = IA = A$`,
R`IKEA: $d = Tx$ · unit cost $c = fT$ · $C = fTx$ · $R = px$ · supply chain $T = U\cdot V\cdot W$`]},
{h:"Gauss, rank, solvability", items:[
R`Rectangle rule: $\tilde a_{ij} = a_{ij} - a_{ic}a_{rj}/a_{rc}$; pivot row ÷ pivot element; pivot column → unit vector`,
R`$n = m$ determined · $n > m$ underdetermined ($n - m$ degrees of freedom) · $n < m$ overdetermined`,
R`Last row $k(a)\,x = r(b)$: $k \ne 0$ unique · $k = 0, r = 0$ infinitely many · $k = 0, r \ne 0$ inconsistent`,
R`Rank = number of successful pivot steps · regular: $rk = \min\{m,n\}$ · singular otherwise`]},
{h:"Market shares & input-output", items:[
R`$T$: rows = incoming, columns sum to 1 · $s_{t+1} = T s_t$ · $s_{t+2} = T^2 s_t$`,
R`Read graph (arrows = % leaving) → Write T (columns sum to 1) → s₂ = T·s₁ → Steady state s = Ts plus Σx = 1 → Gauss → Interpret`,
R`Steady state: shares constant, customers still switch but inflow = outflow for every firm`,
R`Leontief: $x = Ax + c \Rightarrow (I - A)x = c$ · internal prices: quantity·$p_i$ = primary costs + Σ received·$p_j$`]},
{h:"Inverse & coupon stripping", items:[
R`Gauss on $[A \mid I] \to [I \mid A^{-1}]$ · off-diagonal pivots: sort ROWS back`,
R`$(AB)^{-1} = B^{-1}A^{-1}$ · $(A^{-1})^T = (A^T)^{-1}$ · $\det A^{-1} = 1/\det A$`,
R`Coupon for state $k$ = column $k$ of $A^{-1}$ · risk-free (1,1,1) = row sums of $A^{-1}$ · + buy, − sell · $rk(A) = n$`,
R`Total demand $T = (I - D)^{-1}$ · $x = Tb$ · $b = (I - D)x$ · diagonal of $T \ge 1$`]},
{h:"Determinants & Cramer", items:[
R`$2\times2$: $a_{11}a_{22} - a_{12}a_{21}$ · Sarrus ($3\times3$ only): 3 main diagonals − 3 secondary diagonals`,
R`Laplace: $\det A = \sum_j a_{ij}(-1)^{i+j}|A_{ij}|$ · chessboard signs, start + · expand along most zeros`,
R`$\det = 0$ ⇔ dependent rows · swap neighbours → sign flips · $\det A^T = \det A$ · $\det AB = \det A\det B$`,
R`Cramer: $x_j = \det A_j/\det A$ ($A_j$: column $j$ replaced by $b$)`]},
{h:"Optimization", items:[
R`$ax^2 + 2bxy + cy^2$: pos. def. $a > 0, ac - b^2 > 0$ · neg. def. $a < 0, ac - b^2 > 0$ · semidef. $ac - b^2 = 0$ · indef. $ac - b^2 < 0$`,
R`MSD $(+,+,+)$ minimum · $(-,+,-)$ maximum · anything else no optimum`,
R`First derivatives = 0 → All stationary points → Hessian at each point → MSD signs → Min / Max / none`,
R`$\mathcal{L} = f - \lambda g$ · bordered Hessian $|\bar H| < 0$ minimum, $|\bar H| > 0$ maximum (course convention)`]},
{h:"Linear optimization (simplex)", items:[
R`$\le$: $+$ slack · $\ge$: multiply by $-1$, then $+$ slack (negative RHS) · $z$-row: $-c_j$`,
R`Negative RHS: pivot on any negative element first · then column = most negative $z$, row = smallest ratio RHS/positive coefficient`,
R`Optimal when $z$-row $\ge 0$ · basis var = RHS, non-basis = 0 · slack 0 = binding, slack > 0 = capacity left`,
R`$\min z = \max(-z)$ · column with $z < 0$ and all $a_{ic} \le 0$ → unbounded`]}
];
