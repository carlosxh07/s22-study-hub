/* ============================================================ STATISTICS TUTORIALS (Prof. Dr. Mehdi Hosseinkouchack, sheets received 21.10.2026) ============================================================ */
// The sheets come WITHOUT solutions → every solution here is self-written (flagged in the hub) and follows Weiss / the lecture slides.
// Rich text like BK_TUTS ("- " bullets, "Term :: text", **bold**, [[t:caption\nHead|Head\ncell|cell]] tables) plus $…$ math and ```code``` blocks.
// warn = a mistake or ambiguity on the sheet itself.
const ST_TUTS = [
{n:1, topic:'st-1', title:'The nature of statistics',
intro:R`Sheet 1 has a review part, four textbook exercises (Weiss 1.8, 1.13, 1.25, 1.43) and a first Python exercise. Self-study: 1.14, 1.15, 1.47.`,
tasks:[
{id:'r1', q:R`Review 1. What is a population and what is a sample (in statistics)?`,
sol:R`- Population :: the collection of all individuals or items under consideration in a statistical study
- Sample :: the part of the population from which information is actually obtained`},
{id:'r2', q:R`Review 2. What are descriptive statistics and what are inferential statistics?`,
sol:R`- Descriptive statistics :: methods for organizing and summarizing information — graphs, tables, averages, measures of variation, percentiles
- Inferential statistics :: methods for drawing and measuring the reliability of conclusions about a population based on information obtained from a sample`},
{id:'r3', q:R`Review 3. Population of three persons A, B and C.
(a) List all possible samples of size 2 when sampling without replacement.
(b) List all possible samples of size 2 when sampling with replacement.`,
sol:R`(a) Without replacement a person can be chosen only once: **AB, AC, BC** — 3 samples ($\binom{3}{2} = 3$).

(b) With replacement a person can be chosen twice: **AA, AB, AC, BB, BC, CC** — 6 samples if order does not matter. If the order of drawing counts, there are $3 \cdot 3 = 9$ ordered samples (AA, AB, AC, BA, BB, BC, CA, CB, CC).`,
warn:R`The sheet does not say whether order matters for (b). In Weiss a sample is a set of members, so the unordered list (6) is the expected answer; mention the 9 ordered ones if asked.`},
{id:'r4', q:R`Review 4. What is simple random sampling and why is it important?`,
sol:R`Simple random sampling: a sampling procedure for which **each possible sample of a given size is equally likely** to be the one selected.

Why it matters: it is the basic probability sampling design. It avoids selection bias, tends to give representative samples, and only with random sampling can probability theory measure how reliable a conclusion is — the basis of all inferential methods in the course.`},
{id:'r5', q:R`Review 5. Provide a scenario of your own in which a sample is not representative.`,
sol:R`Example: to estimate how many hours EBS students exercise per week, you ask 50 people in the university gym on a Monday evening. Gym visitors exercise more than the average student, so the sample over-represents active students — the estimate is biased upwards.

Other classic cases: an online poll that only reaches people who choose to answer (self-selection), or a phone survey of landline owners only.`},
{id:'1', q:R`(1.8) Professional athlete salaries. Average salaries (in million USD) for 2005 and 2011:

[[t:Average salary (USD millions)
Sport|2005|2011
Baseball (MLB)|2.48|3.31
Basketball (NBA)|4.04|5.15
Football (NFL)|1.40|1.90]]

Is this statistic descriptive or inferential? Explain your answer.`,
sol:R`**Descriptive.** The table simply summarizes (averages) the salaries of the players in each league for the two years. Nothing is concluded about a larger population from a sample — the numbers describe the data that were collected.`},
{id:'2', q:R`(1.13) Thoughts on evolution. Percentage of U.S. adults, by education level, who believe evolution is a scientific theory well supported by evidence:

[[t:Education and support for evolution
Education|Percentage
Postgraduate education|65%
College graduate|52%
Some college education|32%
High school or less|20%]]

(a) Descriptive or inferential? Explain.
(b) If inferential, identify the sample and the population.`,
sol:R`(a) **Inferential.** It is impossible to ask every U.S. adult. The percentages come from a survey, and the author uses them to conclude something about all U.S. adults — that support for Darwinism increases with education.

(b)
- Population :: all U.S. adults (split into the four education levels)
- Sample :: the U.S. adults who were actually surveyed`},
{id:'3', q:R`(1.25) Medical testing on animals. "59% of Americans between the ages of 18 and 29 oppose medical testing on animals." The 59% was computed from sample data.
(a) Identify the population. (b) Identify the sample. (c) Is the statement in quotes descriptive or inferential? (d) How would you rephrase it to make clear that 59% comes from a sample?`,
sol:R`- (a) Population :: all Americans aged 18–29
- (b) Sample :: the Americans aged 18–29 who were surveyed
- (c) Inferential :: the sample percentage is stated as if it were true for all Americans aged 18–29
- (d) Rephrased :: "59% of the Americans aged 18–29 **who were surveyed** oppose medical testing on animals" (or: "an estimated 59% …, based on a sample")`},
{id:'4', q:R`(1.43) Oklahoma state officials: Governor (G), Lieutenant Governor (L), Secretary of State (S), Attorney General (A), Treasurer (T).
(a) List the 10 possible samples (without replacement) of size 3.
(b) With simple random sampling, what are the chances of getting the first sample on your list? The second? The tenth?`,
sol:R`(a) $\binom{5}{3} = 10$ samples:
**G,L,S · G,L,A · G,L,T · G,S,A · G,S,T · G,A,T · L,S,A · L,S,T · L,A,T · S,A,T**

(b) In simple random sampling every possible sample is equally likely, so each one — the first, the second, the tenth — has probability $\frac{1}{10} = 0.1$ (10%).`},
{id:'c1', q:R`Python 1–2. Review the basic operations and check object types: x = 5, y = 2.5, name = "John", l = [1, 2, 3, 4]. What type is each object?`,
sol:R`\`\`\`
print(7 + 2, 7 - 2, 7 * 2, 7 / 2, 7 ** 2)   # 9 5 14 3.5 49   (** = exponent)
x = 5;        print(type(x))      # <class 'int'>   whole number
y = 2.5;      print(type(y))      # <class 'float'> decimal number
name = "John"; print(type(name))  # <class 'str'>   text
l = [1, 2, 3, 4]; print(type(l))  # <class 'list'>  ordered collection
\`\`\`
Note: 7 / 2 always gives a float (3.5); 7 // 2 is integer division (3).`},
{id:'c2', q:R`Python 3. Closing values 10–14 January 2022:

[[t:Closing values
Stock|Mon|Tue|Wed|Thu|Fri
AAPL|172.2|175.0|175.5|172.2|172.2
PG|160.5|158.7|159.0|158.3|159.6]]

Plot both stocks in one diagram with legend, title and axis labels.`,
sol:R`\`\`\`
import matplotlib.pyplot as plt
days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
aapl = [172.2, 175.0, 175.5, 172.2, 172.2]
pg   = [160.5, 158.7, 159.0, 158.3, 159.6]
plt.plot(days, aapl, marker="o", label="AAPL")
plt.plot(days, pg, marker="o", label="PG")
plt.title("Closing values, 10-14 January 2022")
plt.xlabel("Day")
plt.ylabel("Closing value (USD)")
plt.legend()
plt.show()
\`\`\``}
]},

{n:2, topic:'st-2', title:'Organizing data',
intro:R`Sheet 2: variable types, frequency distributions, grouping methods, histograms and distribution shapes (Weiss 2.7, 2.28, 2.44, 2.54–2.56, 2.69, 2.151), plus pie and bar charts in Python. Self-study: 2.8, 2.26, 2.60, 2.64, 2.103.`,
tasks:[
{id:'r1', q:R`Review 1–2. What are the two main types of variables? What are discrete and continuous variables? Give examples.`,
sol:R`- Qualitative (categorical) variable :: values are categories, not numbers — e.g. gender, eye colour, field of study
- Quantitative (numerical) variable :: values are numbers — e.g. height, number of siblings
- Discrete variable :: quantitative, the possible values can be listed (usually counts) — e.g. number of siblings, number of cars sold
- Continuous variable :: quantitative, the possible values form an interval — e.g. height, weight, time`},
{id:'r2', q:R`Review 3–4. Which graphs are used for qualitative data? What is the difference between single-value grouping, limit grouping and cutpoint grouping?`,
sol:R`Qualitative data: **pie charts** (share of each category as a slice, angle = relative frequency × 360°) and **bar charts** (bar height = frequency or relative frequency).

- Single-value grouping :: each class is one value — for discrete data with relatively few distinct values (e.g. 0, 1, 2, 3 bedrooms)
- Limit grouping :: classes with lower and upper limits, e.g. 20–29, 30–39 — for whole-number data with many distinct values
- Cutpoint grouping :: classes "40 – under 46": the lower cutpoint belongs to the class, the upper one does not — for continuous data recorded with decimals`},
{id:'r3', q:R`Review 5–6. What is a histogram, which kinds do you know, and why do the bars of a bar chart not touch?`,
sol:R`A **histogram** shows grouped quantitative data: the classes lie on the horizontal axis, the bar heights show frequency, relative frequency or percent. Kinds: frequency histogram, relative-frequency histogram, percent histogram (with single-value, limit or cutpoint grouping).

Bars of a bar chart are separated because the categories are distinct and have no numerical order or continuity. Histogram bars touch because the classes are adjacent intervals on a number line.`},
{id:'r4', q:R`Review 7–8. Describe the curves for bell-shaped, triangular, reverse-J-shaped and uniform distributions, and a symmetric trimodal distribution.`,
sol:R`- Bell shaped :: one peak in the middle, falls off symmetrically to both sides (normal curve)
- Triangular :: rises in a straight line to a peak in the middle, then falls in a straight line
- Reverse J shaped :: highest at the far left, then falls steadily to the right (right skewed)
- Uniform :: flat — all values equally frequent, a rectangle
- Symmetric trimodal :: three peaks, the left and right peaks mirror each other around the middle peak`},
{id:'1', q:R`(2.7) Earthquakes on 10 May 2013:

[[t:Earthquake list (4 of 105)
Time|Magnitude|Depth (km)|NST|Region
03:46:54|1.6|16.7|25|N. California
15:19:57|1.8|7.7|11|Tennessee
19:57:02|1.5|7.0|15|Nevada
23:12:03|2.4|11.0|6|Puerto Rico]]

Identify the type of data in each of the five columns.`,
sol:R`- (a) Time :: quantitative, continuous — clock time is measured on a continuous scale
- (b) Magnitude :: quantitative, continuous
- (c) Depth :: quantitative, continuous
- (d) NST (number of stations) :: quantitative, discrete — a count
- (e) Region :: qualitative`},
{id:'2', q:R`(2.28) Colleges of 25 students in one course section:

[[t:College of each student
 | | | |
ENG|ENG|BUS|BUS|ENG
LIB|LIB|ENG|ENG|ENG
BUS|BUS|ENG|BUS|ENG
LIB|BUS|BUS|BUS|ENG
ENG|ENG|LIB|ENG|BUS]]

(a) Frequency distribution (b) relative-frequency distribution (c) pie chart (d) bar chart.`,
sol:R`[[t:Frequency and relative frequency (n = 25)
College|Frequency|Relative frequency|Pie angle
BUS|9|0.36|129.6°
ENG|12|0.48|172.8°
LIB|4|0.16|57.6°
Total|25|1.00|360°]]

(c) Pie chart: three slices with the angles above (relative frequency × 360°).
(d) Bar chart: one separate bar per college, heights 9, 12, 4 (or 0.36, 0.48, 0.16).`},
{id:'3', q:R`(2.44) State three of the most important guidelines for choosing the classes when grouping a quantitative data set.`,
sol:R`- 1. Number of classes :: small enough for a clear summary, large enough to show the important features — usually 5 to 20
- 2. Each observation must belong to one and only one class
- 3. Whenever feasible, all classes should have the same width`},
{id:'4', q:R`(2.54–2.56) Which grouping is probably best?
(a) number of bedrooms per single-family dwelling (b) ages of householders as whole numbers (c) additional sleep to the nearest tenth of an hour for 100 patients`,
sol:R`- (a) Single-value grouping :: discrete with only a few possible values
- (b) Limit grouping :: whole numbers with many distinct values (e.g. 20–29, 30–39 …)
- (c) Cutpoint grouping :: continuous data with decimals`},
{id:'5', q:R`(2.69) Data set (n = 20):

[[t:Data
 | | | |
50.0|53.4|44.5|55.2|51.2
56.8|52.5|51.6|48.6|56.9
54.3|51.0|43.5|57.5|65.4
41.6|57.8|54.2|52.5|50.7]]

Use cutpoint grouping with a first class of 40 – under 46. (a) Frequency distribution (b) relative-frequency distribution (c) frequency histogram (d) percent histogram.`,
sol:R`Class width 6 (46 − 40), so the classes are 40–<46, 46–<52, 52–<58, 58–<64, 64–<70.

[[t:Cutpoint grouping (n = 20)
Class|Frequency|Relative frequency|Percent
40 – under 46|3|0.15|15%
46 – under 52|6|0.30|30%
52 – under 58|10|0.50|50%
58 – under 64|0|0.00|0%
64 – under 70|1|0.05|5%
Total|20|1.00|100%]]

(c) Frequency histogram: touching bars over the cutpoints 40, 46, 52, 58, 64, 70 with heights 3, 6, 10, 0, 1.
(d) Percent histogram: the same shape with heights 15, 30, 50, 0, 5 %. Note the empty class 58–64 is kept — it shows the gap before the value 65.4.`},
{id:'6', q:R`(2.151) Snow goose nests: relative-frequency histograms of the distance (m) from snow goose nests to the nearest snowy owl nest, for two years three years apart. Year 1 has a large peak at 200–400 m and a second, smaller group of bars around 2,000 m; Year 2 is highest in the first class (0–200 m) and falls steadily to about 1,000 m.
For each histogram: (a) modality (b) symmetry (c) if unimodal and nonsymmetric, right or left skewed?`,
sol:R`- Year 1 :: (a) bimodal — a main peak at about 200–400 m and a second, smaller peak around 2,000 m · (b) nonsymmetric · (c) not asked, since it is not unimodal
- Year 2 :: (a) unimodal — the peak is the first class · (b) nonsymmetric · (c) **right skewed** (reverse-J shape: long tail to the right)`},
{id:'c1', q:R`Python 1. Seats in the German Bundestag — construct a pie chart.

[[t:Seat distribution
Party|SPD|CDU/CSU|Grüne|FDP|AfD|Linke|Independent
Seats|206|197|118|92|80|39|4]]`,
sol:R`\`\`\`
import matplotlib.pyplot as plt
parties = ["SPD", "CDU/CSU", "Grüne", "FDP", "AfD", "Linke", "Independent"]
seats = [206, 197, 118, 92, 80, 39, 4]
plt.pie(seats, labels=parties, autopct="%1.1f%%")
plt.title("Seats in the German Bundestag")
plt.show()
\`\`\`
736 seats in total, e.g. SPD 206/736 = 28.0 %.`},
{id:'c2', q:R`Python 2. 1,000 students by subject — bar chart of the relative frequencies.

[[t:Students per subject
Subject|Business|Engineering|Law|Medicine|Psychology|Sports
Students|250|125|100|175|150|200]]`,
sol:R`\`\`\`
import matplotlib.pyplot as plt
subjects = ["Business", "Engineering", "Law", "Medicine", "Psychology", "Sports"]
counts = [250, 125, 100, 175, 150, 200]
rel = [c / sum(counts) for c in counts]   # 0.25, 0.125, 0.10, 0.175, 0.15, 0.20
plt.bar(subjects, rel)
plt.title("Students by subject")
plt.ylabel("Relative frequency")
plt.show()
\`\`\``}
]},

{n:3, topic:'st-3', title:'Descriptive measures',
intro:R`Sheet 3: measures of center and variation, quartiles and boxplots, Chebyshev’s rule, the empirical rule and z-scores (Weiss 3.19, 3.63, 3.108, 3.121, 3.217) plus a Python exercise. Self-study: 3.9–3.14, 3.17, 3.61, 3.64, 3.100, 3.101, 3.158–3.160.

Review data: first set $x_1 = 0,\ x_2 = 2,\ x_3 = 4,\ x_4 = 4$ · second set $(5, -1, 1, 3, 12)$.`,
tasks:[
{id:'r1', q:R`Review 1–2. For each review set find $n$ and $\sum x_i$. Name the three most important measures of center and compute them for both sets.`,
sol:R`- Mean :: $\bar{x} = \frac{\sum x_i}{n}$, the arithmetic average
- Median :: the middle value of the ordered data (mean of the two middle values if $n$ is even)
- Mode :: the most frequent value

[[t:Results
Set|n|Σx|Mean|Median|Mode
0, 2, 4, 4|4|10|2.5|(2 + 4)/2 = 3|4
5, −1, 1, 3, 12|5|20|4|3 (ordered: −1, 1, 3, 5, 12)|none — every value occurs once]]`},
{id:'r2', q:R`Review 3. Second set only: (a) range (b) sample standard deviation (c) which measure of variation is usually preferable?`,
sol:R`(a) Range = max − min = $12 - (-1) = 13$.

(b) $\bar{x} = 4$, deviations $1, -5, -3, -1, 8$, squared $1, 25, 9, 1, 64$, sum $= 100$:
$s^2 = \frac{100}{n-1} = \frac{100}{4} = 25 \Rightarrow s = 5$

(c) The **standard deviation**: it uses every observation, while the range depends only on the two most extreme values and is very sensitive to outliers.`},
{id:'r3', q:R`Review 4–5. What is the pth percentile, what are quartiles? Third set $(0, 1, 4, 5, 7, 5, 10, 8)$: (a) five-number summary (b) IQR (c) lower and upper limit (d) potential outliers (e) boxplot.`,
sol:R`The **pth percentile** divides the bottom p% of the ordered data from the top (100 − p)%. **Quartiles** split the data into four parts: $Q_1$ = 25th, $Q_2$ = 50th (median), $Q_3$ = 75th percentile.

Ordered: 0, 1, 4, 5, 5, 7, 8, 10 ($n = 8$, even → halves without the median).
- (a) Five-number summary :: Min = 0, $Q_1$ = median of 0, 1, 4, 5 = 2.5, $Q_2$ = (5 + 5)/2 = 5, $Q_3$ = median of 5, 7, 8, 10 = 7.5, Max = 10
- (b) IQR :: $7.5 - 2.5 = 5$
- (c) Limits :: lower $2.5 - 1.5 \cdot 5 = -5$, upper $7.5 + 1.5 \cdot 5 = 15$
- (d) Outliers :: none — all data lie between −5 and 15
- (e) Boxplot :: box from 2.5 to 7.5 with a line at 5, whiskers to the adjacent values 0 and 10`,
warn:R`The sheet writes the upper limit as Q2 + 1.5·IQR. The correct rule (lecture and Weiss) is Q3 + 1.5·IQR — with Q2 you would get 12.5 instead of 15.`},
{id:'r4', q:R`Review 6–7. Explain Chebyshev’s rule and the empirical rule and fill the gaps (2 standard deviations: at least ___ %; 3 standard deviations: between ___ and ___; empirical rule: ___ %, ___ %, ___ %).`,
sol:R`- Chebyshev’s rule :: for **any** data set and any $k > 1$, at least $1 - \frac{1}{k^2}$ of the observations lie within $k$ standard deviations of the mean
- k = 2 :: at least $1 - \frac14 = $ **75%** between $\bar{x} - 2s$ and $\bar{x} + 2s$
- k = 3 :: at least 89% between $\bar{x} - 3s$ and $\bar{x} + 3s$
- Empirical rule :: only for roughly **bell-shaped** data — approximately **68%** within 1, **95%** within 2, **99.7%** within 3 standard deviations of the mean`},
{id:'r5', q:R`Review 8–10. Symbols for the population mean and standard deviation and for the sample mean and standard deviation. What is a standardized variable / the z-score?`,
sol:R`- Population (parameters) :: mean $\mu$, standard deviation $\sigma$
- Sample (statistics) :: mean $\bar{x}$, standard deviation $s$
- Standardized variable :: $z = \frac{x - \mu}{\sigma}$ — always has mean 0 and standard deviation 1
- z-score :: the value of $z$ for one observation: how many standard deviations it lies above (positive) or below (negative) the mean`},
{id:'1', q:R`(3.19) Days to hatch for seven species of frog and toad eggs: 6, 7, 11, 6, 5, 5, 11. Find (a) the mean (b) the median (c) the mode(s).`,
sol:R`- (a) Mean :: $\bar{x} = \frac{51}{7} \approx 7.29$ days
- (b) Median :: ordered 5, 5, 6, 6, 7, 11, 11 → middle (4th) value = **6** days
- (c) Modes :: 5, 6 and 11 each occur twice → three modes: **5, 6 and 11** days`},
{id:'2', q:R`(3.63) Ages of five Australian residents: 29, 35, 70, 14, 52.
(a) Range (b) sample standard deviation with the defining formula (c) with the computing formula (d) compare.`,
sol:R`(a) Range = 70 − 14 = **56** years.

(b) Defining formula: $\bar{x} = \frac{200}{5} = 40$, deviations $-11, -5, 30, -26, 12$, squares $121, 25, 900, 676, 144$, sum $1866$.
$s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n - 1}} = \sqrt{\frac{1866}{4}} = \sqrt{466.5} \approx$ **21.60** years

(c) Computing formula: $\sum x_i^2 = 841 + 1225 + 4900 + 196 + 2704 = 9866$, $\sum x_i = 200$.
$s = \sqrt{\frac{\sum x_i^2 - (\sum x_i)^2 / n}{n - 1}} = \sqrt{\frac{9866 - 8000}{4}} = \sqrt{466.5} \approx$ **21.60**

(d) Same result — both formulas are algebraically identical. The computing formula avoids calculating every deviation, which is faster and has fewer rounding errors when $\bar{x}$ is not a round number.`},
{id:'3', q:R`(3.108) Chebyshev’s rule, mean 10, standard deviation 3. (a) At least 75% of the observations lie between ___ and ___. (b) At least ___ of the observations lie between 1 and 19.`,
sol:R`- (a) :: 75% = $1 - \frac{1}{k^2}$ → $k = 2$: $10 \pm 2 \cdot 3$ → between **4 and 16**
- (b) :: 1 and 19 are $10 \pm 9 = 10 \pm 3 \cdot 3$ → $k = 3$: at least $1 - \frac19 = \frac89 \approx$ **88.9%**`},
{id:'4', q:R`(3.121) Empirical rule, mean 25, standard deviation 5, roughly bell shaped. Approximately (a) 68% (b) 95% (c) 99.7% of the observations lie between ___ and ___.`,
sol:R`- (a) 68% :: $25 \pm 5$ → **20 and 30**
- (b) 95% :: $25 \pm 10$ → **15 and 35**
- (c) 99.7% :: $25 \pm 15$ → **10 and 40**`},
{id:'5', q:R`(3.217) A patient recently diagnosed with Alzheimer’s scores 45 on a cognitive test with mean 52 and standard deviation 5. (a) Find the z-score. (b) What can you conclude?`,
sol:R`(a) $z = \frac{45 - 52}{5} = $ **−1.4**

(b) The patient scores 1.4 standard deviations **below** the mean — clearly below average, but within two standard deviations, so by Chebyshev / the empirical rule not an unusual (outlying) score. The test alone does not point to severe impairment.`},
{id:'c1', q:R`Python. Hours of sleep of n = 12 students before the statistics exam: (4, 1, 0, 5, 7, 5, 10, 8, 10, 7, 8, 18).
(a) list in ascending order (b) mean and sample standard deviation (c) min, max, range (d) $Q_1$, $Q_2$, $Q_3$, IQR (e) boxplot — left or right skewed?`,
sol:R`\`\`\`
import numpy as np
import matplotlib.pyplot as plt
data = [4, 1, 0, 5, 7, 5, 10, 8, 10, 7, 8, 18]
print(sorted(data))                     # [0, 1, 4, 5, 5, 7, 7, 8, 8, 10, 10, 18]
print(np.mean(data))                    # 6.9167
print(np.std(data, ddof=1))             # 4.6993  (ddof=1 → sample sd, divides by n-1)
print(min(data), max(data), max(data) - min(data))   # 0 18 18
q1, q2, q3 = np.percentile(data, [25, 50, 75])
print(q1, q2, q3, q3 - q1)              # 4.75 7.0 8.5 3.75
plt.boxplot(data); plt.title("Hours of sleep"); plt.show()
\`\`\`
**By hand (lecture method):** median = (7 + 7)/2 = 7, $Q_1$ = median of 0, 1, 4, 5, 5, 7 = 4.5, $Q_3$ = median of 7, 8, 8, 10, 10, 18 = 9, IQR = 4.5. numpy interpolates between values and gives 4.75 and 8.5 instead — in the exam, use the lecture method.

(e) Upper limit $9 + 1.5 \cdot 4.5 = 15.75$ → **18 is a potential outlier** and is drawn as a single point on the right. Without it the picture leans the other way: the lower half of the box (4.5 to 7) and the lower whisker (down to 0) are longer than the upper ones (7 to 9, up to 10), and the mean 6.92 is almost equal to the median 7. So the bulk of the data is roughly symmetric to slightly **left skewed**, with one extreme value on the right. Say both parts in an answer — "right skewed" only because of the single value 18 would be too quick.`,
warn:R`numpy.percentile uses linear interpolation by default, so its quartiles differ from the lecture’s median-of-halves method (4.75/8.5 vs 4.5/9). Both are valid definitions; the exam follows the lecture. The sheet asks "left or right skewed?" although the data give no clear answer — see (e).`}
]}
];
