/* ============================================================ STATISTICS — PAST EXAMS (Prof. Dr. Hosseinkouchack) ============================================================ */
// Source: Statistics/PDFs (added 19.11.2026): Exam Dec 2025 (90 min, with solutions), Exam March 2025 (75 min, with solutions), Mock Exam 01 (90 min, with solutions).
// Same flow as ST_TUTS: write, reveal, rate (st-exam-state, keys "n-id"). One task = one exercise of the exam, with its points.
// All official answers recomputed; key errors are flagged in `warn`.
const ST_EXAM_INFO = R`**What the real exams look like.** Three exams with official solutions: December 2025 (90 minutes, 90 points, the newest and the format of your exam slot), March 2025 (75 minutes, 75 points) and Mock Exam 01 (90 minutes, 90 points). One point is about one minute.
- Always there :: probability rules (9–10 P), descriptive statistics of a small data set (10 P), a discrete random variable from a table (10–11 P), normal distribution with percentile (12–14 P), confidence intervals z **and** t with interpretation (14–15 P)
- Almost always :: Bayes (10 P), binomial or Poisson (5–9 P), counting rules (5–10 P)
- Allowed aid :: the **Weiss formula card** (chapters 3–8) plus **Table II** (z) and **Table IV** (t) are attached to the exam. You do not need to memorise formulas, but you have to recognise the right one fast
- How they grade :: the setup counts. Write the formula with your numbers first (e.g. $1 - \sum_{x=0}^{4} P(X=x)$), then the result. For binomial sums the key sometimes stops at the formula
- Conventions in the keys :: quartiles with the median in both halves when $n$ is odd (as in the hub), $z_{0.05} = 1.645$, $z_{0.025} = 1.96$, $t$ from Table IV with $df = n - 1$`;

const ST_EXAMS = [
/* ------------------------------------------------------------ DECEMBER 2025 ------------------------------------------------------------ */
{n:1, short:'Dec 2025', title:'Exam December 2025 (90 min, 90 P)', src:'official',
intro:R`The newest exam and the one closest to yours: 9 exercises, 90 points, 90 minutes. Try it under exam conditions first: 90 minutes, formula card and tables only, then compare exercise by exercise. One key error is flagged (exercise 6: wrong table value).`,
tasks:[
{id:'1', pts:9, topic:'st-4', q:R`**1. (9 P)** At a local bookstore, a visitor buys a novel (event N) with probability $P(N) = 0.40$, a magazine (event M) with probability $P(M) = 0.35$, and both with probability $0.10$.
(a) What is the probability that a visitor buys none of these items? (3 P)
(b) Are "buying a novel" and "buying a magazine" independent? Justify with probability rules. (3 P)
(c) What is the probability that a visitor buys only a novel? (3 P)`,
sol:R`(a) Complement of "N or M", with the general addition rule:
$P(\text{neither}) = 1 - P(N \text{ or } M) = 1 - (0.40 + 0.35 - 0.10) = 1 - 0.65 = $ **0.35**

(b) Independent would mean $P(N \,\&\, M) = P(N)\cdot P(M)$. Here $0.10 \ne 0.40 \cdot 0.35 = 0.14$, so **not independent**.

(c) Only a novel = novel minus both: $0.40 - 0.10 = $ **0.30**`,
warn:R`The official key writes "Pr(N or M) ≠ Pr(N) Pr(M)". The test uses P(N and M) = 0.10, not "or". Write it with "and" in the exam.`},
{id:'2', pts:10, topic:'st-3', q:R`**2. (10 P)** Healthcare expenditure (% of GDP), 2022: Germany 11.3, Mexico 5.7, Japan 10.9, Kenya 4.2, Australia 9.5.
(a) Interquartile range. (3 P)
(b) Sample mean. (2 P)
(c) Sample range. (2 P)
(d) Sample standard deviation. (3 P)`,
sol:R`Sort first: 4.2, 5.7, 9.5, 10.9, 11.3 ($n = 5$, median 9.5).

(a) $n$ odd, so the median goes into both halves: bottom 4.2, 5.7, 9.5 → $Q_1 = 5.7$; top 9.5, 10.9, 11.3 → $Q_3 = 10.9$. $IQR = 10.9 - 5.7 = $ **5.2**

(b) $\bar h = (11.3 + 5.7 + 10.9 + 4.2 + 9.5)/5 = 41.6/5 = $ **8.32**

(c) Range $= 11.3 - 4.2 = $ **7.1**

(d) Deviations 2.98, −2.62, 2.58, −4.12, 1.18 → squares 8.8804, 6.8644, 6.6564, 16.9744, 1.3924 → sum 40.768.
$s = \sqrt{40.768/(5-1)} = \sqrt{10.192} \approx $ **3.19** (divide by $n - 1$, it is a sample)`},
{id:'3', pts:10, topic:'st-4', q:R`**3. (10 P)** About 43% of men and 10% of women are smokers; 50.40% of the population are men, 49.60% women.
(a) What percentage of the population smokes? (4 P)
(b) What percentage of the smokers are women? (6 P)
Hint: rule of total probability and Bayes's rule.`,
sol:R`Events: $S$ = smoker, $W$ = woman, $M$ = man. Given: $P(S|M) = 0.43$, $P(S|W) = 0.10$, $P(M) = 0.504$, $P(W) = 0.496$.

(a) Total probability: $P(S) = 0.504 \cdot 0.43 + 0.496 \cdot 0.10 = 0.21672 + 0.0496 = $ **0.26632**, about 26.6%

(b) Bayes: $P(W|S) = \frac{P(S|W)P(W)}{P(S)} = \frac{0.0496}{0.26632} \approx $ **0.1862**, about 18.6% of smokers are women`},
{id:'4', pts:10, topic:'st-5', q:R`**4. (10 P)** Battery lifetime $Y$ (minutes):

[[t:Distribution of Y
y|350|370|390|410|430
P(Y = y)|0.120|0.160|0.550|0.140|0.030]]

(a) Expected lifetime. (3 P)
(b) $P(Y < 380)$. (2 P)
(c) $P(Y \ge 410)$. (2 P)
(d) Standard deviation. (3 P)`,
sol:R`(a) $\mu = 350(0.12) + 370(0.16) + 390(0.55) + 410(0.14) + 430(0.03) = 42 + 59.2 + 214.5 + 57.4 + 12.9 = $ **386**

(b) Below 380 are 350 and 370: $0.12 + 0.16 = $ **0.28**

(c) 410 and 430: $0.14 + 0.03 = $ **0.17**

(d) $\sigma^2 = \sum (y-\mu)^2 P(y) = 1296(0.12) + 256(0.16) + 16(0.55) + 576(0.14) + 1936(0.03) = 155.52 + 40.96 + 8.8 + 80.64 + 58.08 = 344$ → $\sigma = \sqrt{344} \approx $ **18.55**`},
{id:'5', pts:9, topic:'st-5', q:R`**5. (9 P)** A 20-question quiz, four answer choices each. To win, at least 50% must be correct. The contestant guesses on every question.
(a) Probability of winning. (3 P)
(b) Expected number of correct answers. (3 P)
(c) Standard deviation of the number of correct answers. (3 P)`,
sol:R`$X$ = number correct, $X \sim \text{Bin}(n = 20, p = 0.25)$.

(a) At least 50% = at least 10: $P(X \ge 10) = \sum_{i=10}^{20} \binom{20}{i} 0.25^i\, 0.75^{20-i} \approx $ **0.0139**. The key stops at the sum; writing the sum correctly is what earns the points

(b) $\mu = np = 20 \cdot 0.25 = $ **5**

(c) $\sigma = \sqrt{np(1-p)} = \sqrt{20 \cdot 0.25 \cdot 0.75} = \sqrt{3.75} \approx $ **1.94**`},
{id:'6', pts:12, topic:'st-6', q:R`**6. (12 P)** Daily high temperatures $T \sim N(25, 4^2)$ (°C).
(a) Probability that a day is above 30 °C. (4 P)
(b) In a 30-day month, on how many days do you expect less than 20 °C? (4 P)
(c) Temperature at the 90th percentile. (4 P)`,
sol:R`(a) $z = (30 - 25)/4 = 1.25$. Table II: area left of 1.25 is 0.8944. $P(T > 30) = 1 - 0.8944 = $ **0.1056**

(b) $z = (20 - 25)/4 = -1.25$, area left 0.1056. Expected days: $30 \cdot 0.1056 \approx $ **3.17 days**

(c) Area left 0.90 → $z = 1.28$ (1.285 between 1.28 and 1.29 is also fine): $x = 25 + 1.28 \cdot 4 = $ **30.12** (key: 30.14)`,
warn:R`Error in the official key: it uses 0.8531 for z = 1.25. 0.8531 is the area for z = 1.05. Correct is Φ(1.25) = 0.8944, so (a) is 0.1056, not 0.1469, and (b) is 30 × 0.1056 ≈ 3.17 days, not 4.41.`},
{id:'7', pts:15, topic:'st-8', q:R`**7. (15 P)** Sugar content (grams) is normally distributed. Sample of $n = 25$ bottles, $\bar x = 35.4$.
(a) $\sigma = 3.5$ known: 95% confidence interval for $\mu$. (5 P)
(b) $\sigma$ unknown, $s = 3.8$: 95% confidence interval with the appropriate method. (5 P)
(c) Based on both intervals, is it reasonable to conclude that the true mean exceeds 34 grams? (5 P)`,
sol:R`(a) $\sigma$ known → z-interval, $z_{0.025} = 1.96$:
$35.4 \pm 1.96 \cdot \frac{3.5}{\sqrt{25}} = 35.4 \pm 1.372$ → **(34.028, 36.772)**

(b) $\sigma$ unknown, normal population, small sample → t-interval, $df = 24$, $t_{0.025} = 2.064$:
$35.4 \pm 2.064 \cdot \frac{3.8}{5} = 35.4 \pm 1.569$ → **(33.831, 36.969)**

(c) With $\sigma$ known the whole interval lies above 34, so at 95% confidence the mean exceeds 34. With $\sigma$ unknown the lower bound 33.83 is below 34, so you **cannot** claim it. Name the method and the confidence level in your answer; the t-interval is wider because estimating $\sigma$ adds uncertainty.`},
{id:'8', pts:10, topic:'st-4', q:R`**8. (10 P)** A gift box holds 3 cookies chosen from 7 different types.
(a) How many ways to choose the 3 types? (4 P)
(b) Chocolate chip and oatmeal may not be in the box together. How many selections are possible? (6 P)`,
sol:R`(a) Order does not matter → combinations: $\binom{7}{3} = \frac{7!}{3!\,4!} = $ **35**

(b) Count the forbidden boxes and subtract. A forbidden box contains both chocolate chip and oatmeal, plus 1 of the other 5: $1 \cdot 1 \cdot 5 = 5$. Allowed: $35 - 5 = $ **30**`},
{id:'9', pts:5, topic:'st-5', q:R`**9. (5 P)** A call center receives on average 3 calls per hour (Poisson). Probability of at most 1 call in an hour?`,
sol:R`$\lambda = 3$: $P(X \le 1) = P(0) + P(1) = e^{-3}\frac{3^0}{0!} + e^{-3}\frac{3^1}{1!} = 4e^{-3} \approx $ **0.199**`}
]},
/* ------------------------------------------------------------ MARCH 2025 ------------------------------------------------------------ */
{n:2, short:'Mar 2025', title:'Exam March 2025 (75 min, 75 P)', src:'official',
intro:R`7 exercises, 75 points, 75 minutes. Almost the same structure as December 2025, without the counting and Poisson-only tasks: probability rules, descriptive statistics, Bayes, a discrete random variable, Poisson, normal distribution and both confidence intervals. The key is correct; two small typos are flagged.`,
tasks:[
{id:'1', pts:9, topic:'st-4', q:R`**1. (9 P)** At Burger King a customer buys a burger (B) with $P(B) = 0.4$, a side dish (S) with $P(S) = 0.3$, and both with probability 0.2.
(a) Are B and S independent? Justify with probability rules. (3 P)
(b) Probability of buying a burger or a side dish (or both). (3 P)
(c) Probability of buying only a burger. (3 P)`,
sol:R`(a) $P(B \,\&\, S) = 0.2 \ne P(B)P(S) = 0.4 \cdot 0.3 = 0.12$ → **not independent**

(b) $P(B \text{ or } S) = 0.4 + 0.3 - 0.2 = $ **0.5**

(c) $P(B) - P(B \,\&\, S) = 0.4 - 0.2 = $ **0.2**`},
{id:'2', pts:10, topic:'st-3', q:R`**2. (10 P)** R&D expenditure (% of GDP), 2021: Switzerland 3.4, China 2.4, Germany 3.1, Japan 3.3, United States 3.5.
(a) Interquartile range. (3 P)
(b) Sample average. (2 P)
(c) Sample range. (2 P)
(d) Sample standard deviation. (3 P)`,
sol:R`Sorted: 2.4, 3.1, 3.3, 3.4, 3.5.

(a) Median in both halves: $Q_1 = 3.1$, $Q_3 = 3.4$ → $IQR = $ **0.3**

(b) $\bar e = 15.7/5 = $ **3.14**

(c) $3.5 - 2.4 = $ **1.1**

(d) Squared deviations 0.0676, 0.5476, 0.0016, 0.0256, 0.1296 → sum 0.772. $s = \sqrt{0.772/4} = \sqrt{0.193} \approx $ **0.439**`},
{id:'3', pts:10, topic:'st-4', q:R`**3. (10 P)** An indicator signals market crashes. $P(C) = 0.1$, $P(S|C) = 0.8$, false alarm $P(S|\text{not } C) = 0.2$. What is the probability that a crash is actually happening, given a signal? (Find $P(C|S)$.)`,
sol:R`Bayes, denominator by total probability:
$P(C|S) = \frac{P(S|C)P(C)}{P(S|C)P(C) + P(S|\text{not } C)P(\text{not } C)} = \frac{0.8 \cdot 0.1}{0.8 \cdot 0.1 + 0.2 \cdot 0.9} = \frac{0.08}{0.26} = \frac{4}{13} \approx $ **0.308**

So even after a signal a crash is more likely **not** happening: the many false alarms in the 90% no-crash cases outweigh the hits.`},
{id:'4', pts:10, topic:'st-5', q:R`**4. (10 P)** A game: lose €1, win nothing, or win €1.

[[t:Distribution of X
x|−1|0|1
P(X = x)|0.5|0.2|0.3]]

(a) $\mu$. (2 P) (b) $\sigma$. (3 P) (c) $P(X \ge 1)$. (2 P) (d) $P(-0.5 < X < 3)$. (2 P) (e) $P(X \le -3)$. (1 P)`,
sol:R`(a) $\mu = -1(0.5) + 0(0.2) + 1(0.3) = $ **−0.2**

(b) $\sigma^2 = (-0.8)^2(0.5) + (0.2)^2(0.2) + (1.2)^2(0.3) = 0.32 + 0.008 + 0.432 = 0.76$ → $\sigma \approx $ **0.872**

(c) Only $x = 1$: **0.3**

(d) Values between −0.5 and 3 are 0 and 1: $0.2 + 0.3 = $ **0.5**

(e) No value is ≤ −3: **0**`},
{id:'5', pts:9, topic:'st-5', q:R`**5. (9 P)** A firm receives on average 5 complaints per day (Poisson).
(a) Probability of exactly 3 complaints. (4 P)
(b) Probability of at most 2 complaints. (5 P)`,
sol:R`$\lambda = 5$, $P(X = x) = e^{-\lambda}\frac{\lambda^x}{x!}$.

(a) $P(X = 3) = e^{-5}\frac{5^3}{3!} = e^{-5} \cdot 20.83 \approx $ **0.140**

(b) $P(X \le 2) = e^{-5}\left(\frac{5^0}{0!} + \frac{5^1}{1!} + \frac{5^2}{2!}\right) = e^{-5}(1 + 5 + 12.5) = 18.5\,e^{-5} \approx $ **0.125**`},
{id:'6', pts:12, topic:'st-6', q:R`**6. (12 P)** Daily stock returns $r \sim N(0.005, 0.012^2)$.
(a) Probability of a negative return on a given day. (4 P)
(b) Symmetric interval around the mean that contains 90% of daily returns. (4 P)
(c) 5th percentile of daily returns (worst case, undercut only 5% of the time). (4 P)`,
sol:R`(a) $z = (0 - 0.005)/0.012 = -0.4167 \approx -0.42$. Table II: **0.3372**

(b) 5% in each tail → $z_{0.05} = 1.645$: $0.005 \pm 1.645 \cdot 0.012 = 0.005 \pm 0.01974$ → **(−0.01474, 0.02474)**

(c) Area left 0.05 → $z = -1.645$: $x = 0.005 - 1.645 \cdot 0.012 = $ **−0.01474**, the lower end of the interval in (b)`,
warn:R`Typos in the key: in (b) the interval is written "µ − zσ, µ − zσ" (the second must be +), and in (c) "z0.95 = −1.645" means the z with 95% of the area to its right. The numbers are right.`},
{id:'7', pts:15, topic:'st-8', q:R`**7. (15 P)** Carbon-credit prices are normally distributed. Sample of $n = 26$, $\bar x = 47.80$ USD per ton.
(a) 95% CI with known $\sigma = 6.5$. (5 P)
(b) 95% CI with unknown $\sigma$, sample $s = 7.2$. (5 P)
(c) Based on both intervals, is the mean price likely above 44 USD? (5 P)`,
sol:R`(a) z-interval: $47.80 \pm 1.96 \cdot \frac{6.5}{\sqrt{26}} = 47.80 \pm 2.4985$ → **(45.30, 50.30)**

(b) t-interval, $df = 25$, $t_{0.025} = 2.060$: $47.80 \pm 2.060 \cdot \frac{7.2}{\sqrt{26}} = 47.80 \pm 2.909$ → **(44.89, 50.71)**

(c) Both intervals lie entirely above 44, so at 95% confidence the mean price is above 44 USD. (Compare December 2025, where one of the two intervals included the threshold.)`}
]},
/* ------------------------------------------------------------ MOCK EXAM 01 ------------------------------------------------------------ */
{n:3, short:'Mock 01', title:'Mock Exam 01 (90 min, 90 P)', src:'official',
intro:R`The lecturer's mock exam: 9 exercises plus an extra Bayes question, 90 points. It goes further than the real exams in places (a 5-member jury, a minimum sample size via the sampling distribution), so treat exercises 8 and 9 as the hard end. Key correct; one rounding trap is flagged (7d).`,
tasks:[
{id:'1', pts:10, topic:'st-3', q:R`**1. (10 P)** Ages of $n = 8$ students: 19, 18, 21, 25, 23, 20, 20, 21.
(a) Mode, median and mean. (1.5 P)
(b) Range and sample standard deviation. (3 P)
(c) Five-number summary. (2.5 P)
(d) The oldest person is actually 42, not 25. Recompute mean and median. Which is the better measure of center now? (3 P)`,
sol:R`Sorted: 18, 19, 20, 20, 21, 21, 23, 25.

(a) Mode **20 and 21** (two modes) · median $(20 + 21)/2 = $ **20.5** · mean $167/8 = $ **20.875**

(b) Range $25 - 18 = $ **7**. Shortcut formula: $\sum x_i = 167$, $\sum x_i^2 = 3521$, $s = \sqrt{\frac{3521 - 167^2/8}{7}} = \sqrt{4.982} \approx $ **2.232**

(c) $n$ even: halves 18, 19, 20, 20 and 21, 21, 23, 25 → **Min 18, Q1 19.5, Median 20.5, Q3 22, Max 25**

(d) Mean $(167 + 17)/8 = $ **23**, median stays **20.5**. The **median** is preferable: it is robust to the outlier, the mean is pulled up.`},
{id:'2', pts:14, topic:'st-6', q:R`**2. (14 P)** Connection time is approximately $N(0.25, 0.05^2)$ seconds.
(a) $P(X > 0.2)$. (b) $P(X < 0.3)$. (c) $P(0.1 < X < 0.3)$. (d) Symmetric interval around the mean with 95%. (e) The time exceeded with probability 60%. (f) Mean and standard deviation of the average time for $n = 9$. (g) $P(\bar X < 0.275)$ for $n = 9$. (2 P each)`,
sol:R`(a) $z = -1$: $1 - 0.1587 = $ **0.8413**

(b) $z = 1$: **0.8413**

(c) $z = -3$ and $1$: $0.8413 - 0.0013 = $ **0.8400**

(d) $0.25 \pm 1.96 \cdot 0.05$ → **[0.152, 0.348]**

(e) Exceeded with 60% = 40th percentile. Area left 0.40 → $z = -0.25$: $x = 0.25 - 0.25 \cdot 0.05 = $ **0.2375**

(f) $\mu_{\bar x} = $ **0.25**, $\sigma_{\bar x} = 0.05/\sqrt 9 = $ **0.0167**

(g) $z = (0.275 - 0.25)/0.0167 = 1.5$: **0.9332**`,
warn:R`Typo in the key for (c): it writes 0.8431 for Φ(1). Correct is 0.8413; the final 0.8400 is right.`},
{id:'3', pts:11, topic:'st-5', q:R`**3. (11 P)**

[[t:Distribution of X
x|−2|−1|1|2
P(X = x)|0.15|0.6|0.05|0.2]]

(a) $\mu$. (2 P) (b) $\sigma$. (3 P) (c) $P(X > -0.5)$. (2 P) (d) $P(-1.5 < X < 3)$. (2 P) (e) $P(X = 0)$. (1 P) (f) Left-skewed, right-skewed or symmetric? (1 P)`,
sol:R`(a) $\mu = -2(0.15) - 1(0.6) + 1(0.05) + 2(0.2) = $ **−0.45**

(b) Shortcut $\sigma = \sqrt{\sum x^2 P(x) - \mu^2}$: $\sum x^2P = 4(0.15) + 1(0.6) + 1(0.05) + 4(0.2) = 2.05$, so $\sigma = \sqrt{2.05 - 0.2025} = \sqrt{1.8475} \approx $ **1.359**

(c) $x = 1$ or $2$: $0.05 + 0.2 = $ **0.25**

(d) $x = -1, 1, 2$: $0.6 + 0.05 + 0.2 = $ **0.85**

(e) 0 is not a possible value: **0**

(f) **Right-skewed**: most mass at −1, a longer tail of rarer values to the right; the mean (−0.45) lies right of the peak`},
{id:'4', pts:10, topic:'st-4', q:R`**4. (10 P)** 200 students by gender and hair colour:

[[t:Absolute frequencies
|Brown|Black|Blonde|Σ
Male| |30| |120
Female|20|20|40|80
Σ|100|50| | ]]

(a) Fill in the four missing entries. (2 P)
(b) $P(\text{Brown})$. (c) $P(\text{Brown or Black})$. (d) $P(\text{Female or Black})$. (e) $P(\text{Female}|\text{Black})$. (1 P each)
(f) Are "male" and "brown hair" independent? (2 P)
(g) $P(\text{not Blonde}|\text{not Male})$. (2 P)`,
sol:R`(a) Male brown $100 - 20 = $ **80**, male blonde $120 - 80 - 30 = $ **10**, blonde total $10 + 40 = $ **50**, grand total **200**

(b) $100/200 = $ **0.5**

(c) Mutually exclusive: $(100 + 50)/200 = $ **0.75**

(d) $80/200 + 50/200 - 20/200 = 110/200 = $ **0.55**

(e) $20/50 = $ **0.4**

(f) $P(M \,\&\, \text{Brown}) = 80/200 = 0.40$ vs $P(M)P(\text{Brown}) = 0.6 \cdot 0.5 = 0.30$ → **not independent**

(g) Not male = female (80). Of those, not blonde: $20 + 20 = 40$ → $40/80 = $ **0.5**`},
{id:'5', pts:6, topic:'st-5', q:R`**5. (6 P)** 20% of flights are delayed, independently.
(a) Two flights: probability that at least one is delayed. (2 P)
(b) 10 flights: probability that none is delayed. (2 P)
(c) 500 flights a day: expected number delayed and its standard deviation. (2 P)`,
sol:R`(a) Complement: $1 - 0.8^2 = 1 - 0.64 = $ **0.36** (key: $\binom{2}{1}0.2 \cdot 0.8 + 0.2^2 = 0.32 + 0.04$)

(b) $0.8^{10} \approx $ **0.1074**

(c) $\mu = 500 \cdot 0.2 = $ **100**, $\sigma = \sqrt{500 \cdot 0.2 \cdot 0.8} = \sqrt{80} \approx $ **8.94**`},
{id:'6', pts:5, topic:'st-4', q:R`**6. (5 P)** Shoes: 2 styles (low-top, high-top), 4 colours (black, white, red, blue), 9 sizes (38–46).
(a) How many different shoes? (1 P)
(b) Random choice at each step: probability of a white shoe? (1 P)
(c) Probability of size 40 or smaller? (1 P)
(d) Red is out of stock and only high-tops are available. How many options now? (2 P)`,
sol:R`(a) Multiplication rule: $2 \cdot 4 \cdot 9 = $ **72**

(b) **1/4**

(c) Sizes 38, 39, 40 out of 9: **1/3**

(d) $1 \cdot 3 \cdot 9 = $ **27**`},
{id:'7', pts:14, topic:'st-8', q:R`**7. (14 P)** Sample of $n = 50$ from a population of unknown shape with $\sigma = 10$; $\sum x_i = 6000$.
(a) $\bar x$ and $\sigma_{\bar x}$. (2 P)
(b) Someone claims $\bar x$ is exactly normally distributed. True? (3 P)
(c) 90% confidence interval for $\mu$. (4 P)
(d) Sample size for a margin of error $E = 3$ at 90%. (3 P)
(e) Another sample gives the 99% interval [119, 121]. Interpret it. (2 P)`,
sol:R`(a) $\bar x = 6000/50 = $ **120**, $\sigma_{\bar x} = 10/\sqrt{50} \approx $ **1.414**

(b) **No.** The population shape is unknown, so $\bar x$ is not exactly normal. By the central limit theorem, with $n = 50$ it is **approximately** normal.

(c) $120 \pm 1.645 \cdot 1.414 = 120 \pm 2.33$ → **[117.67, 122.33]** (key with 1.64: [117.68, 122.32])

(d) $n = \left(\frac{z_{0.05}\,\sigma}{E}\right)^2 = \left(\frac{1.645 \cdot 10}{3}\right)^2 = 30.07$ → round **up**: **31**. With the key's 1.64 you get 29.88 → 30.

(e) We are 99% confident that $\mu$ lies between 119 and 121: if we repeated the sampling many times, 99% of the intervals built this way would contain $\mu$. Not: "$\mu$ is in [119, 121] with probability 99%"`,
warn:R`Rounding trap in (d): the key uses z = 1.64 and gets n = 30. With 1.645, the value the lecturer uses in class, n = 30.07 and you must round up to 31. Write down which z you used.`},
{id:'8', pts:10, topic:'st-5', q:R`**8. (10 P)** A jury of 5 (A, B, C, D, R) decides independently. A, B, C and D each vote yes with $p = 0.4$; R flips a fair coin. At least 3 yes votes admit the athlete. Probability that the athlete is admitted?`,
sol:R`Split by how many of A–D vote yes (mutually exclusive cases):
- 2 of A–D and R yes :: $\binom{4}{2}0.4^2\,0.6^2 \cdot \frac12 = 6 \cdot 0.16 \cdot 0.36 \cdot 0.5 = 0.1728$
- 3 of A–D (R irrelevant) :: $\binom{4}{3}0.4^3\,0.6 = 4 \cdot 0.064 \cdot 0.6 = 0.1536$
- 4 of A–D :: $0.4^4 = 0.0256$

Sum: **0.352**. Fun fact from the key: that is below 0.4, so this jury admits less often than a single member of A–D would.`},
{id:'9', pts:10, topic:'st-7', q:R`**9. (10 P)** Daily returns are independent, $r \sim N(1, 1)$.
(a) Over 5 days, probability that on at least 4 days the return is at least 1.5. (5 P)
(b) Minimum number of days $n$ so that the average return is within 0.1 of $\mu_r$ with probability 0.99. (5 P)`,
sol:R`(a) Two steps. First one day: $p = P(r > 1.5) = P(Z > 0.5) = 1 - 0.6915 = 0.3085$. Then binomial over 5 days:
$P(X \ge 4) = \binom{5}{4}0.3085^4 \cdot 0.6915 + 0.3085^5 \approx 0.0313 + 0.0028 = $ **0.0341**

(b) $\bar r \sim N(1, 1/n)$, so $\sigma_{\bar r} = 1/\sqrt n$. Want $P(|\bar r - 1| < 0.1) = 0.99$ → $0.1\sqrt n = z_{0.005} = 2.575$ → $\sqrt n = 25.75$ → $n = 663.06$ → round up: **664 days**`},
{id:'x', pts:0, topic:'st-4', q:R`**Extra question (Bayes).** A blood test detects a disease in 95% of the sick. It gives a false positive for 1% of the healthy. 0.5% of the population has the disease. Probability of having the disease given a positive test?`,
sol:R`$P(D|E) = \frac{0.95 \cdot 0.005}{0.95 \cdot 0.005 + 0.01 \cdot 0.995} = \frac{0.00475}{0.0147} \approx $ **0.323**

Only about one in three positives is really sick: the disease is so rare that false positives among the 99.5% healthy dominate.`}
]}
];
