/* ============================================================ STATISTICS TUTORIALS (Prof. Dr. Mehdi Hosseinkouchack, sheets received 21.10.2026) ============================================================ */
// Sheets 1–3 arrived without solutions; on 26.10.2026 the official tutorial slides ("Tut N+S", Dr. Balázs Cserna) came for TUT 1–8.
// src:'official' = checked against / based on those slides; TUT 1 slides leave the answers blank → self-written. Our own explanations are added on top.
// Rich text like BK_TUTS ("- " bullets, "Term :: text", **bold**, [[t:caption\nHead|Head\ncell|cell]] tables) plus $…$ math and ```code``` blocks.
// warn = a mistake or ambiguity on the sheet itself.
const ST_TUTS = [
{n:1, topic:'st-1', title:'The nature of statistics', src:'self',
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

{n:2, topic:'st-2', title:'Organizing data', src:'official',
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
sol:R`Official answer: **both distributions are unimodal, non-symmetric and right skewed.**
- Year 1 :: one clear peak at 200–400 m, then a long tail to the right; the small bump around 2,000 m (at most about 5% per class) is too small to count as a second mode
- Year 2 :: the peak is the first class (0–200 m) and the bars fall steadily — a reverse-J shape, long tail to the right

How to decide quickly: find the highest bar (modality), then look on which side the long tail is — tail to the right = right skewed.`,
warn:R`Our first version called Year 1 bimodal because of the small group of bars around 2,000 m. The tutorial solution treats it as unimodal — follow that in the exam.`},
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

{n:3, topic:'st-3', title:'Descriptive measures', src:'official',
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

(b) Official answer: a z-score of −1.4 means the patient scores 1.4 standard deviations **below** the average — a **rather low score**, so the patient's cognitive condition is poor (consistent with the diagnosis).

Reading a z-score in general: the sign says below/above the mean, the size says how many standard deviations away. Only beyond about ±2 would a score count as unusual.`},
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
]},

{n:4, topic:'st-4', title:'Probability concepts', src:'official',
intro:R`Sheet 4: sample spaces and events, Venn diagrams, the probability rules, a contingency table, total probability and Bayes, and the counting rules (Weiss 4.79, 4.81, 4.83, 4.85, 4.126, 4.114, 4.217, 4.246, 4.254, 4.257). Self-study: 4.15, 4.19, 4.20, 4.44, 4.211–4.214, 4.221, 4.250.

**The toolbox for this sheet:**
- Complement :: $P(\text{not } E) = 1 - P(E)$
- General addition rule :: $P(A \text{ or } B) = P(A) + P(B) - P(A \,\&\, B)$ — the overlap would otherwise be counted twice
- Special addition rule :: mutually exclusive ($A \,\&\, B$ impossible) → $P(A \text{ or } B) = P(A) + P(B)$
- Conditional probability :: $P(B|A) = \frac{P(A \,\&\, B)}{P(A)}$ — "zoom into A, then ask how much of A is also B"
- General multiplication rule :: $P(A \,\&\, B) = P(A)\cdot P(B|A)$
- Total probability :: $P(B) = \sum_j P(A_j)\,P(B|A_j)$ for mutually exclusive, exhaustive $A_j$
- Bayes :: $P(A_i|B) = \frac{P(A_i)\,P(B|A_i)}{\sum_j P(A_j)\,P(B|A_j)}$ — turns $P(B|A)$ around into $P(A|B)$
- Independence :: $P(B|A) = P(B)$, equivalently $P(A \,\&\, B) = P(A)\,P(B)$`,
tasks:[
{id:'r1', q:R`Review 1. What is a sample space and what is an event?`,
sol:R`- Sample space :: the collection of **all possible outcomes** of an experiment, written $\Omega$
- Event :: any collection of outcomes, i.e. any **subset** of the sample space (written A, B, …)

An event **occurs** exactly when the outcome of the experiment is a member of the event. Example: rolling a die, $\Omega = \{1,\dots,6\}$, the event "even" is $\{2, 4, 6\}$ — it occurs if you roll a 2, 4 or 6.`},
{id:'r2', q:R`Review 2–3. Draw Venn diagrams for (a) the complement of A (b) "A and B" (c) "A or B" — and for two mutually exclusive and two non-mutually exclusive events.`,
sol:R`Draw a rectangle for $\Omega$ and circles for the events, then shade:
- Not A :: everything inside the rectangle **outside** circle A — written $A^c$
- A & B :: only the **overlap** of the two circles — written $A \cap B$
- A or B :: written $A \cup B$: **both circles completely**, overlap included — "A or B" means A or B **or both**, not "either A or B"
- Mutually exclusive :: two circles that **do not touch**: $A \cap B = \varnothing$ (disjoint)
- Not mutually exclusive :: two **overlapping** circles: $A \cap B \neq \varnothing$`},
{id:'1', q:R`(4.79) A and B are mutually exclusive with $P(A) = 0.25$ and $P(B) = 0.40$. Find $P(A \text{ or } B)$.`,
sol:R`**Idea:** mutually exclusive → no overlap → simply add (special addition rule).

$P(A \text{ or } B) = P(A) + P(B) = 0.25 + 0.40 = $ **0.65**`},
{id:'2', q:R`(4.81) $P(E) = 0.35$. Find $P(\text{not } E)$.`,
sol:R`**Idea:** an event and its complement together cover everything, so their probabilities add up to 1.

$P(\text{not } E) = 1 - P(E) = 1 - 0.35 = $ **0.65**`},
{id:'3', q:R`(4.83) $P(C) = 0.35$, $P(D) = 0.40$, $P(C \,\&\, D) = 0.30$. Find $P(C \text{ or } D)$.`,
sol:R`**Idea:** C and D overlap, so adding $P(C) + P(D)$ counts the overlap twice — subtract it once (general addition rule).

$P(C \text{ or } D) = 0.35 + 0.40 - 0.30 = $ **0.45**

Plausibility check: "C or D" contains D, so the result must be at least $P(D) = 0.40$ ✓.`},
{id:'4', q:R`(4.85) $P(A) = \frac16$, $P(A \text{ or } B) = \frac14$, $P(A \,\&\, B) = \frac{1}{15}$. (a) Find $P(B)$. (b) Are A and B mutually exclusive?`,
sol:R`(a) **Idea:** the general addition rule has one unknown — solve it for $P(B)$:
$P(B) = P(A \text{ or } B) - P(A) + P(A \,\&\, B) = \frac14 - \frac16 + \frac{1}{15} = \frac{15 - 10 + 4}{60} = \frac{9}{60} = $ **3/20 = 0.15**

(b) **No.** Mutually exclusive would mean $A \,\&\, B = \varnothing$, and the empty set has probability 0. But $P(A \,\&\, B) = \frac{1}{15} > 0$ — so A and B can happen together.`},
{id:'5', q:R`(4.126) $P(A) = 0.75$ and $P(A \,\&\, B) = 0.25$. Find $P(B|A)$.`,
sol:R`**Idea:** given A, the "new world" is A. Which share of A is also B?

$P(B|A) = \frac{P(A \,\&\, B)}{P(A)} = \frac{0.25}{0.75} = $ **1/3 ≈ 0.333**`},
{id:'6', q:R`(4.114) Farms by acreage and tenure of operator (frequencies in thousands); six entries are missing:

[[t:Number of farms (thousands)
Acreage|Full owner T1|Part owner T2|Tenant T3|Total
Under 50 (A1)|?|70|44|?
50 – under 180 (A2)|492|130|38|660
180 – under 500 (A3)|198|?|?|368
500 – under 1000 (A4)|51|84|14|149
1000 or more (A5)|41|114|17|172
Total|1521|541|?|?]]

(a) Fill in the six missing entries. (b) How many cells does the table have? (c) How many farms have under 50 acres? (d) How many are tenant operated? (e) Part owner and 500–1000 acres? (f) Not full-owner operated? (g) Tenant operated with 180 acres or more?`,
sol:R`(a) **Idea:** every row adds up to its row total and every column to its column total — find a row or column with only one gap first.
- Full owner, under 50 :: column: $1521 - 492 - 198 - 51 - 41 = $ **739**
- Row total under 50 :: $739 + 70 + 44 = $ **853**
- Part owner, 180–500 :: column: $541 - 70 - 130 - 84 - 114 = $ **143**
- Tenant, 180–500 :: row: $368 - 198 - 143 = $ **27**
- Tenant total :: $44 + 38 + 27 + 14 + 17 = $ **140**
- Grand total :: $1521 + 541 + 140 = $ **2202** (check: $853 + 660 + 368 + 149 + 172 = 2202$ ✓)

(b) **15 cells** — 5 acreage rows × 3 tenure columns (totals are not cells).

- (c) Under 50 acres :: row total A1 = **853** thousand
- (d) Tenant operated :: column total T3 = **140** thousand
- (e) Part owner & 500–1000 acres :: one cell (A4, T2) = **84** thousand
- (f) Not full-owner operated :: part owners + tenants = $541 + 140 = $ **681** thousand (or $2202 - 1521$)
- (g) Tenant & 180 acres or more :: A3 + A4 + A5 in T3 = $27 + 14 + 17 = $ **58** thousand`},
{id:'7', q:R`(4.217) Smoking. Roughly 43% of men and 10% of women are smokers; 50.40% of the world population are men, 49.60% women. (a) What percentage of the world population smokes? (b) What percentage of women smoke? (c) What percentage of smokers are women?`,
sol:R`**First translate the text into probabilities** (M = man, W = woman, S = smoker). "43% of men smoke" is a **conditional** probability — it is about men only:
- $P(M) = 0.504$, $P(W) = 1 - 0.504 = 0.496$
- $P(S|M) = 0.43$, $P(S|W) = 0.10$

(b) is therefore just read off: $P(S|W) = $ **10%**.

(a) **Total probability** — split the population into men and women and add the smokers of both groups:
$P(S) = P(M)\,P(S|M) + P(W)\,P(S|W) = 0.504 \cdot 0.43 + 0.496 \cdot 0.10 = 0.21672 + 0.0496 = $ **0.26632 ≈ 26.6%**

(c) Now the condition is turned around — "of the smokers, how many are women?" → **Bayes**:
$P(W|S) = \frac{P(W)\,P(S|W)}{P(S)} = \frac{0.0496}{0.26632} \approx $ **0.1862 ≈ 18.6%**

Mind the difference: 10% of women smoke ($P(S|W)$), but only 18.6% of smokers are women ($P(W|S)$).`},
{id:'8', q:R`(4.246) Tesla Model S (2013): choices for roof (3), exterior colour (9), seat fabric/colour (4), interior trim (5) and wheels (5). How many possibilities altogether?`,
sol:R`**Idea:** several choices one after another, each combinable with every other → **basic counting rule**: multiply.

$3 \cdot 9 \cdot 4 \cdot 5 \cdot 5 = $ **2,700** possibilities`},
{id:'9', q:R`(4.254) A movie festival jury picks the 1st, 2nd and 3rd place winners from 27 films. How many possibilities?`,
sol:R`**Ask two questions first:**
- Does order matter? **Yes** — 1st place is not the same as 3rd → permutations
- Repetition? **No** — a film can win only one place → without repetition

$_{27}P_3 = \frac{27!}{(27-3)!} = 27 \cdot 26 \cdot 25 = $ **17,550** (calculator: 27 nPr 3)`},
{id:'10', q:R`(4.257) The IRS audits the returns of 3 people from a group of 18. Use combination notation and evaluate.`,
sol:R`- Does order matter? **No** — being audited first or third makes no difference → combinations
- Repetition? **No** — a person is audited once

$_{18}C_3 = \binom{18}{3} = \frac{18!}{3!\,15!} = \frac{18 \cdot 17 \cdot 16}{3 \cdot 2 \cdot 1} = $ **816** (calculator: 18 nCr 3)

Compare with 9: there, every group of 3 films could be ranked in $3! = 6$ ways, so permutations = combinations × 6.`}
]},

{n:5, topic:'st-5', title:'Discrete random variables', src:'official',
intro:R`Sheet 5: probability distributions, mean and standard deviation of a discrete random variable, and the binomial distribution (Weiss 5.39, 5.80), plus two extra exercises from the tutorial slides. Self-study: 5.27–5.30, 5.37, 5.79.

**The toolbox:**
- Mean (expected value) :: $\mu = \sum x \cdot P(X = x)$ — the long-run average over many repetitions
- Standard deviation :: $\sigma = \sqrt{\sum x^2 \cdot P(X = x) - \mu^2}$ (computing formula)
- Binomial :: $P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}$, $x = 0, 1, \dots, n$; mean $np$, standard deviation $\sqrt{np(1-p)}$`,
tasks:[
{id:'r1', q:R`Review 1. X = number of dots on a fair die, $P(X = x) = \frac16$ for $x = 1, \dots, 6$. (a) $\sum P(X = x)$ (b) the mean $\mu$ (c) the standard deviation $\sigma$ — and interpret.`,
sol:R`(a) $6 \cdot \frac16 = $ **1** — the probabilities of all possible values must always add up to 1 (something happens for sure).

(b) $\mu = (1 + 2 + 3 + 4 + 5 + 6)\cdot\frac16 = \frac{21}{6} = $ **3.5**. Interpretation: over many rolls the average number of dots approaches 3.5 — a value the die can never show, which is fine for a mean.

(c) $\sum x^2 P(X=x) = (1 + 4 + 9 + 16 + 25 + 36)\cdot\frac16 = \frac{91}{6}$, so
$\sigma^2 = \frac{91}{6} - 3.5^2 = \frac{35}{12}$ and $\sigma = \sqrt{35/12} \approx$ **1.708**. Interpretation: a typical roll lies about 1.7 dots away from the mean 3.5.`},
{id:'r2', q:R`Review 2. X follows a binomial distribution. (a) What assumptions are needed? What are n and p? (b) Which values can X take, and what are its mean and standard deviation?`,
sol:R`(a) The four conditions (Bernoulli trials):
- 1 :: exactly **n trials**, fixed from the beginning
- 2 :: each trial has only **two outcomes**, success or failure
- 3 :: the trials are **independent**
- 4 :: the success probability **p stays the same** for every trial

n = number of trials, p = success probability per trial; X counts the successes.

(b) X can take **0, 1, …, n**. Mean $\mu = np$, standard deviation $\sigma = \sqrt{np(1-p)}$.`},
{id:'1', q:R`(5.39) Roulette. 38 numbers: 18 red, 18 black, 2 green. You bet USD 1 on red: win USD 1 if red, otherwise lose the USD 1. X = amount won:

[[t:Distribution of X
x|1|−1
P(X = x)|0.474|0.526]]

(a) Verify the distribution. (b) Expected value of X. (c) Average loss per play? (d) Expected loss after 100 and 1,000 bets? (e) Is roulette profitable?`,
sol:R`(a) Red: $P(X = 1) = \frac{18}{38} \approx 0.474$. Not red (18 black + 2 green): $P(X = -1) = \frac{20}{38} \approx 0.526$. Both add up to 1 ✓.

(b) $\mu = 1 \cdot \frac{18}{38} + (-1)\cdot\frac{20}{38} = -\frac{2}{38} \approx$ **−0.0526**

(c) On average you lose about **USD 0.053 (5.3 cents) per play** — the two green numbers are the casino's edge.

(d) Expected values add up: 100 bets → $100 \cdot (-0.0526) \approx$ **−USD 5.26**; 1,000 bets → **−USD 52.63**.

(e) **No** — the expected payoff is negative. Single evenings can end with a win, but the more you play, the closer your average gets to −5.3 cents per dollar.`},
{id:'2', q:R`(5.80) A student guesses on all 15 multiple-choice questions (5 options each). Passing = 40% or better. Find the probability that the student (a) gets at least 5 correct (b) passes (c) gets an "A" (80% or better). (d) Expected number correct? (e) Standard deviation?`,
sol:R`**First check that X = number correct is binomial:** n = 15 fixed ✓, each answer right or wrong ✓, independent guesses ✓, $p = \frac15 = 0.2$ each time ✓. So $P(X = x) = \binom{15}{x} 0.2^x\,0.8^{15-x}$.

(a) "At least 5" has many terms (5 to 15) — use the **complement**, which has only five:
$P(X \ge 5) = 1 - P(X \le 4) = 1 - [P(0) + P(1) + P(2) + P(3) + P(4)] \approx$ **0.1643**

(b) 40% of 15 = 6 questions: $P(X \ge 6) = P(X \ge 5) - P(X = 5) = 0.1643 - \binom{15}{5}0.2^5\,0.8^{10} = 0.1643 - 0.1032 \approx$ **0.0611** (6.1%)

(c) 80% of 15 = 12: $P(X \ge 12) = P(12) + P(13) + P(14) + P(15) \approx$ **0.000001** (about 1 in a million)

(d) $\mu = np = 15 \cdot 0.2 = $ **3** questions

(e) $\sigma = \sqrt{np(1-p)} = \sqrt{15 \cdot 0.2 \cdot 0.8} = \sqrt{2.4} \approx$ **1.55** questions`},
{id:'x1', q:R`Extra (tutorial slides). Which of these random variables are binomial?
(a) X = number of failed throws until a six appears.
(b) Y = number of matching balls in a 6-from-49 lottery.
(c) Z = number of returned items out of 100 random orders, if 15% are returned on average.`,
sol:R`Check the conditions one by one — one "no" is enough:
- (a) Not binomial :: the number of trials is **not fixed** — you keep throwing until the six comes
- (b) Not binomial :: the success probability **changes** — drawn balls are not put back (6/49 for the first ball, then 5/48 if it matched)
- (c) **Binomial** :: n = 100 fixed, each item returned or not, p = 0.15 for every item (independent orders)`},
{id:'x2', q:R`Extra (tutorial slides). A shoe shop expects 15% of ordered pairs to be returned.
(a) Probability that exactly 3 of 20 pairs are returned? (b) Probability that at least 3 of 10 pairs are returned? (c) Mean and standard deviation of returns out of 1,000 pairs?`,
sol:R`X = returned pairs is binomial with p = 0.15.

(a) n = 20: $P(X = 3) = \binom{20}{3}0.15^3\,0.85^{17} \approx$ **0.2428**

(b) n = 10, complement: $P(X \ge 3) = 1 - [P(0) + P(1) + P(2)] = 1 - (0.1969 + 0.3474 + 0.2759) \approx$ **0.1798**

(c) $\mu = 1000 \cdot 0.15 = $ **150** pairs, $\sigma = \sqrt{1000 \cdot 0.15 \cdot 0.85} \approx$ **11.29** pairs`,
warn:R`The tutorial slide for (b) plugs in 0.2 and 0.8 instead of 0.15 and 0.85 and gets 0.3222 — with the stated 15% the answer is 0.1798. The slide also asks "at least 2" in one place and "at least 3" in the next; "at least 2" would be $1 - 0.1969 - 0.3474 = 0.4557$.`}
]},

{n:6, topic:'st-6', title:'The normal distribution', src:'official',
intro:R`Sheet 6: normal curves, standardizing, areas from Table II, percentiles, $z_\alpha$ (Weiss 6.70, 6.83, 6.111). Self-study: 6.19, 6.24, 6.65, 6.66, 6.95.

**One recipe for every normal question:**
- 1 :: sketch the curve and shade the area you want
- 2 :: standardize: $z = \frac{x - \mu}{\sigma}$
- 3 :: Table II gives the area **to the left** of z — "right of" = 1 − table value, "between" = difference of two table values
- Backwards (percentile) :: find the area inside the table, read off z, then go back: $x = \mu + z\sigma$`,
tasks:[
{id:'r1', q:R`Review 1–2. What are the parameters of a normal curve? Sketch the normal curves with (a) μ = 3, σ = 3 (b) μ = 1, σ = 3 (c) μ = 3, σ = 1.`,
sol:R`The two parameters are the **mean μ** (where the centre/peak is) and the **standard deviation σ** (how wide the bell is).
- (a) vs (b) :: same width (σ = 3), but (b) is **shifted two units to the left** (centre 1 instead of 3)
- (a) vs (c) :: same centre (3), but (c) is **much narrower and taller** (σ = 1) — the total area must stay 1, so a narrow curve has to be higher`},
{id:'r2', q:R`Review 3–4. What is the standard normal distribution, how do you get to it from any normal distribution, and what are its four basic properties?`,
sol:R`The **standard normal distribution** is the normal distribution with $\mu = 0$ and $\sigma = 1$. If X is normal with mean μ and standard deviation σ, then $Z = \frac{X - \mu}{\sigma}$ is standard normal — that is why one table (Table II) is enough for every normal distribution.

Properties of the standard normal curve:
- 1 :: the total area under it is **1**
- 2 :: it extends indefinitely in both directions, approaching the horizontal axis
- 3 :: it is **symmetric about 0**
- 4 :: almost all of the area (≈ 99.73%) lies between −3 and 3`},
{id:'r3', q:R`Review 5. With Table II, find the area under the standard normal curve
(a) to the left of (i) −1.56 (ii) 2.24 (iii) 0
(b) to the right of (i) −1.07 (ii) 0.6 (iii) 0
(c) between (i) −2.18 and 1.44 (ii) 0.59 and 1.51`,
sol:R`- (a)(i) :: left of −1.56 = table value **0.0594**
- (a)(ii) :: left of 2.24 = **0.9875**
- (a)(iii) :: left of 0 = **0.5** (symmetry — 0 is the median)
- (b)(i) :: right of −1.07 = $1 - 0.1423 = $ **0.8577**
- (b)(ii) :: right of 0.6 = $1 - 0.7257 = $ **0.2743**
- (b)(iii) :: right of 0 = **0.5**
- (c)(i) :: $0.9251 - 0.0146 = $ **0.9105**
- (c)(ii) :: $0.9345 - 0.7224 = $ **0.2121**

**Why "1 −" for right areas:** the table only gives left areas, and the total is 1.`},
{id:'r4', q:R`Review 6. Find each shaded area under the standard normal curve:
(a) between −1.28 and 1.28 (b) between −1.64 and 1.64 (c) both tails outside ±1.96 (d) both tails outside ±2.33.`,
sol:R`**Idea:** use symmetry — find one tail, double it.
- (a) :: one tail beyond 1.28 = $1 - 0.8997 = 0.1003$ → middle $1 - 2 \cdot 0.1003 = $ **0.7994** (≈ 80%)
- (b) :: one tail beyond 1.64 = $1 - 0.9495 = 0.0505$ → middle $1 - 2 \cdot 0.0505 = $ **0.8990** (≈ 90%)
- (c) :: one tail beyond 1.96 = $1 - 0.9750 = 0.025$ → both tails **0.05**
- (d) :: one tail beyond 2.33 = $1 - 0.9901 = 0.0099$ → both tails **0.0198** (≈ 2%)

Remember these pairs — 1.28/80%, 1.645/90%, 1.96/95%, 2.33/98%, 2.575/99% — they come back as the z-values of confidence intervals.`},
{id:'r5', q:R`Review 7. X is normal with μ = 15 and σ = 4. Which percentage of all values (a) is at most 20 (b) is at least 16 (c) lies between 9 and 12?`,
sol:R`- (a) :: $z = \frac{20 - 15}{4} = 1.25$ → left area **0.8944** (89.44%)
- (b) :: $z = \frac{16 - 15}{4} = 0.25$ → right area $1 - 0.5987 = $ **0.4013** (40.13%)
- (c) :: $z_1 = \frac{9 - 15}{4} = -1.5$, $z_2 = \frac{12 - 15}{4} = -0.75$ → $0.2266 - 0.0668 = $ **0.1598** (15.98%)`},
{id:'r6', q:R`Review 8. Find the z-score with an area of 0.75 to its left.`,
sol:R`**Backwards:** look for 0.75 **inside** Table II. The closest values are 0.7486 (z = 0.67) and 0.7517 (z = 0.68); 0.7486 is closer, so **z ≈ 0.67**.

That is the upper quartile of the standard normal distribution (and by symmetry −0.67 is the lower quartile).`},
{id:'r7', q:R`Review 9. X is normal with mean 6 and standard deviation 2. (a) Quartiles (b) 85th percentile (c) the value that 65% of all values exceed (d) the two values that cut off 2.5% in each tail. Interpret.`,
sol:R`**Recipe:** find the z for the standard normal curve, then $x = \mu + z\sigma = 6 + 2z$.
- (a) Quartiles :: $z = -0.67, 0, 0.67$ → $Q_1 = 6 - 1.34 = $ **4.66**, $Q_2 = $ **6**, $Q_3 = $ **7.34** — the middle 50% of values lie between 4.66 and 7.34
- (b) 85th percentile :: area 0.85 → closest z = 1.04 (0.8508) → $6 + 2 \cdot 1.04 = $ **8.08**: 85% of all values are at most 8.08
- (c) "Exceeded by 65%" = 35% lie below = 35th percentile → z ≈ −0.39 → $6 - 0.78 = $ **5.22**
- (d) z = ±1.96 → $6 - 3.92 = $ **2.08** and $6 + 3.92 = $ **9.92**: the middle 95% of values lie between 2.08 and 9.92`,
warn:R`The tutorial slide prints the lower value in (d) as 2.03 — the correct result is $6 - 2 \cdot 1.96 = 2.08$ (the upper value 9.92 is right).`},
{id:'r8', q:R`Review 10. What does $z_\alpha$ signify?`,
sol:R`$z_\alpha$ is the z-score with an area of **α to its right** under the standard normal curve (so $1 - \alpha$ to its left). Example: $z_{0.025} = 1.96$, $z_{0.05} = 1.645$. It is the notation used for confidence intervals ($z_{\alpha/2}$).`},
{id:'1', q:R`(6.70) The standard normal curve is split into eight regions at −3, −2, −1, 0, 1, 2, 3. (a) Find the area of each region. (b) Complete the table with the percentage of the total area.`,
sol:R`**Idea:** take the cumulative areas from the table and subtract neighbours: left of −3 = 0.0013, left of −2 = 0.0228, left of −1 = 0.1587, left of 0 = 0.5. The right half is the mirror image.

[[t:Regions of the standard normal curve
Region|Area|Percentage
−∞ to −3|0.0013|0.13%
−3 to −2|0.0215|2.15%
−2 to −1|0.1359|13.59%
−1 to 0|0.3413|34.13%
0 to 1|0.3413|34.13%
1 to 2|0.1359|13.59%
2 to 3|0.0215|2.15%
3 to ∞|0.0013|0.13%
Total|1.0000|100%]]

This is the empirical rule in exact form: $2 \cdot 34.13 = 68.26\%$ within 1σ, $+ 2 \cdot 13.59 \Rightarrow 95.44\%$ within 2σ, $+ 2 \cdot 2.15 \Rightarrow 99.74\%$ within 3σ.`},
{id:'2', q:R`(6.83) Complete the table: $z_{0.10}$, $z_{0.05}$, $z_{0.025}$, $z_{0.01}$, $z_{0.005}$ (the first is 1.28).`,
sol:R`$z_\alpha$ has α to its **right**, so look up $1 - \alpha$ inside the table:

[[t:Important z-values
z₀.₁₀|z₀.₀₅|z₀.₀₂₅|z₀.₀₁|z₀.₀₀₅
1.28|1.645|1.96|2.33|2.575
90% quantile|95% quantile|97.5% quantile|99% quantile|99.5% quantile]]

For 0.95 and 0.995 the table lies exactly between two values (0.9495/0.9505 and 0.9949/0.9951), hence 1.645 and 2.575.`},
{id:'3', q:R`(6.111) Distances of raptor nests to the nearest marshland are normal with mean 4.38 km and standard deviation 0.86 km. Y = distance of a random nest. (a) $P(Y > 5)$ (b) $P(3 \le Y \le 6)$.`,
sol:R`(a) $z = \frac{5 - 4.38}{0.86} \approx 0.72$ → $P(Y > 5) = 1 - P(Z \le 0.72) = 1 - 0.7642 = $ **0.2358**

(b) $z_1 = \frac{3 - 4.38}{0.86} \approx -1.60$, $z_2 = \frac{6 - 4.38}{0.86} \approx 1.88$ →
$P(3 \le Y \le 6) = 0.9699 - 0.0548 = $ **0.9151**

For a continuous variable "≤" and "<" give the same probability — a single point has area 0.`}
]},

{n:7, topic:'st-7', title:'The sampling distribution of the sample mean', src:'official',
intro:R`Sheet 7: why $\bar{x}$ is a random variable, its mean and standard deviation, when it is normal, the central limit theorem (Weiss 7.24, 7.25, 7.47, 7.63, 7.66, 7.79), plus an extra exercise from the tutorial slides. Self-study: 7.30, 7.46, 7.50, 7.64.

**The three facts behind the whole chapter:**
- Centre :: $\mu_{\bar{x}} = \mu$ — sample means are centred on the population mean, whatever n is
- Spread :: $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$ — larger samples, less variation (quadruple n → half the spread)
- Shape :: normal population → $\bar{x}$ normal for every n; any population and n ≥ 30 → $\bar{x}$ approximately normal (**central limit theorem**)`,
tasks:[
{id:'r1', q:R`Review 1. For the sample mean $\bar{x} = \frac1n\sum x_i$ explain (a) why it is a random variable (b) its mean (c) its standard deviation (d) its distribution in small and large samples.`,
sol:R`(a) Which members end up in the sample is random, so the observations $x_1, \dots, x_n$ are random — and so is their sum and their average. A different sample gives a different $\bar{x}$.

(b) $\mu_{\bar{x}} = \mu$: on average the sample mean hits the population mean.

(c) $\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$ (also called the standard error).

(d) Three cases:
- Normal population :: $\bar{x}$ is **exactly normal for any n**
- Any population, large n (n ≥ 30) :: $\bar{x}$ is **approximately normal** (central limit theorem)
- Non-normal population, small n :: the distribution of $\bar{x}$ **cannot be specified in general**`},
{id:'r2', q:R`Review 2. What is the central limit theorem?`,
sol:R`If the observations come from **any** distribution with mean μ and standard deviation σ, then for a relatively large sample size the sample mean $\bar{x}$ is **approximately normally distributed** with mean μ and standard deviation $\sigma/\sqrt{n}$ — equivalently, $\frac{\bar{x} - \mu}{\sigma/\sqrt{n}}$ is approximately standard normal. The approximation improves as n grows.

Why it matters: it lets us use the normal table for $\bar{x}$ even when we know nothing about the shape of the population.`},
{id:'r3', q:R`Review 3. A graph shows the normal curve of a variable and, superimposed, the sampling-distribution curves of $\bar{x}$ for two sample sizes: curve A (somewhat narrower than the population curve) and curve B (the narrowest and tallest). All three have the same centre.
(a) Why are all three centred at the same place? (b) Which curve belongs to the larger sample size? (c) Why is the spread different? (d) Which curve tends to produce less sampling error? (e) Why are both sampling-distribution curves normal?`,
sol:R`- (a) :: $\mu_{\bar{x}} = \mu$ does **not depend on n**, so every curve is centred at μ
- (b) :: **Curve B** — $\sigma/\sqrt{n}$ shrinks as n grows, so the larger sample gives the narrower curve
- (c) :: because the spread $\sigma/\sqrt{n}$ **depends on n**
- (d) :: **Curve B** — the smaller the spread of $\bar{x}$, the closer sample means tend to lie to μ, i.e. the smaller the sampling error
- (e) :: the variable itself is **normally distributed**, so $\bar{x}$ is normal for every sample size`},
{id:'r4', q:R`Review 4. What happens to the possible sample means (relative to μ) as the sample size increases? Why does that matter when estimating μ?`,
sol:R`The possible sample means **cluster more closely around μ** as n increases. So the larger the sample, the smaller the sampling error tends to be — a bigger sample gives a more reliable estimate of the population mean.`},
{id:'1', q:R`(7.24) A sample is taken without replacement from a population of size N, and the sample size equals N. (a) How many possible samples are there? (b) What are the possible sample means? (c) How are the sample and the population related?`,
sol:R`(a) Combinations without repetition with n = N: $\binom{N}{N} = $ **1** sample — there is only one way to take everybody.

(b) That one sample mean **equals the population mean μ**.

(c) The sample **is** the population — a census.`},
{id:'2', q:R`(7.25) A random sample of size 1 is taken from a population of size N. (a) How many possible samples? (b) How are the possible sample means related to the possible observations of the variable? (c) What is the difference between a random sample of size 1 and selecting a member at random?`,
sol:R`(a) $\binom{N}{1} = $ **N** samples.

(b) Each sample mean is a single observation, so the possible sample means are **exactly the population values** — the distribution of $\bar{x}$ is the distribution of the variable itself.

(c) **None** — it is the same thing.`},
{id:'3', q:R`(7.47) Baby weight: mean birth weight 3,369 g, standard deviation 581 g. (a) Identify population and variable. (b) For samples of size 200, mean and standard deviation of all possible sample means. (c) Repeat for n = 400.`,
sol:R`(a) Population: **all babies** (born in the period studied); variable: **birth weight**.

(b) $\mu_{\bar{x}} = $ **3,369 g**, $\sigma_{\bar{x}} = \frac{581}{\sqrt{200}} \approx$ **41.08 g**

(c) $\mu_{\bar{x}} = $ **3,369 g**, $\sigma_{\bar{x}} = \frac{581}{\sqrt{400}} = $ **29.05 g**

Doubling n does **not** halve the spread — it divides it by $\sqrt2$. To halve it you need four times the sample.`},
{id:'4', q:R`(7.63) A variable is normally distributed with mean μ and standard deviation σ. (a) Identify the distribution of $\bar{x}$. (b) Does (a) depend on the sample size? (c) Mean and standard deviation of $\bar{x}$? (d) Does (c) depend on the normality assumption?`,
sol:R`(a) $\bar{x}$ is **normal** with mean μ and standard deviation $\sigma/\sqrt{n}$.

(b) **No** — an average of normal variables is always normal, for any n. Only its standard deviation depends on n.

(c) $\mu_{\bar{x}} = \mu$, $\sigma_{\bar{x}} = \sigma/\sqrt{n}$.

(d) **No** — these two formulas hold for **any** distribution of the variable. Normality only matters for the **shape** of the distribution of $\bar{x}$.`},
{id:'5', q:R`(7.66) By the central limit theorem, $\bar{x}$ is approximately normal for a relatively large sample. (a) Which rule of thumb decides whether n is large? (b) Roughly, which property of the variable's distribution determines how large n must be?`,
sol:R`(a) **n ≥ 30.**

(b) **How far the distribution is from normal.** A variable that is already close to normal (symmetric, bell-shaped) needs only a small n; a strongly skewed variable or one with outliers needs a larger n.`},
{id:'6', q:R`(7.79) A variable has mean μ and standard deviation σ. For large n, approximately ___% of all possible samples have means within (a) $\frac{\sigma}{\sqrt n}$ (b) $\frac{2\sigma}{\sqrt n}$ (c) $\frac{3\sigma}{\sqrt n}$ (d) $z_{\alpha/2}\frac{\sigma}{\sqrt n}$ of μ. Justify.`,
sol:R`For large n, $\bar{x}$ is approximately normal (central limit theorem) with standard deviation $\sigma/\sqrt{n}$, so the **empirical rule** applies to $\bar{x}$ — in units of $\sigma/\sqrt n$:
- (a) :: **68%**
- (b) :: **95%**
- (c) :: **99.7%**
- (d) :: $\mathbf{100(1-\alpha)\%}$ — the middle area between $-z_{\alpha/2}$ and $z_{\alpha/2}$

(d) is exactly the idea behind a confidence interval (sheet 8).`},
{id:'x1', q:R`Extra (tutorial slides). IQ is normal with mean 100 and standard deviation 7. What is the probability that the average IQ of 25 random people does not exceed 103.5?`,
sol:R`**Work with $\bar{x}$, not with single people:** $\mu_{\bar{x}} = 100$, $\sigma_{\bar{x}} = \frac{7}{\sqrt{25}} = 1.4$.

$z = \frac{103.5 - 100}{1.4} = 2.5$ → $P(\bar{x} \le 103.5) = P(Z \le 2.5) = $ **0.9938**

For a single person the same 103.5 would only be $z = 0.5$ (69%) — averages vary much less than individuals.`}
]},

{n:8, topic:'st-8', title:'Confidence intervals for one mean', src:'official',
intro:R`Sheet 8: point and interval estimates, interpreting a confidence interval, the z-interval (σ known) and the t-interval (σ unknown), margin of error and sample size (Weiss 8.85, 8.109, 8.113, 8.133). Self-study: 8.17, 8.51, 8.73.

**The two procedures:**
- z-interval (σ known) :: $\bar{x} \pm z_{\alpha/2}\frac{\sigma}{\sqrt n}$ — exact for a normal population, approximate for large n
- t-interval (only s known) :: $\bar{x} \pm t_{\alpha/2}\frac{s}{\sqrt n}$ with **df = n − 1** — exact for a normal population
- Useful z-values :: $z_{0.10} = 1.28$, $z_{0.05} = 1.645$, $z_{0.025} = 1.96$, $z_{0.01} = 2.33$, $z_{0.005} = 2.575$ (the sheet rounds 1.645 to 1.64 and 2.575 to 2.57)`,
tasks:[
{id:'r1', q:R`Review 1–2. What is a point estimate, and why compute a confidence interval in addition?`,
sol:R`A **point estimate** is the value of a statistic used to estimate a parameter — e.g. $\bar{x}$ for μ, $s$ for σ.

Because of sampling error the point estimate is a random variable that is (almost) never exactly equal to the true parameter, and on its own it says nothing about how far off it might be. A **confidence interval** adds that information: a range of plausible values together with a confidence level.`},
{id:'r2', q:R`Review 3–4. How do you interpret a $(1-\alpha)$ confidence interval for μ? What is wrong with "the probability that μ lies between 5 and 10 is 0.95" for a computed 95% interval [5, 10]?`,
sol:R`**Interpretation:** if we took many samples and computed the interval each time, about $(1-\alpha)\cdot100\%$ of these intervals would contain μ. 1 − α is the confidence level, α the error probability.

**What is wrong:** μ is a fixed number, and once the interval is computed it is fixed too — μ either lies in [5, 10] or not; no probability is left. The 95% describes the **method** before the sample is drawn. Correct wording: "We are 95% confident that μ lies between 5 and 10."`},
{id:'r3', q:R`Review 5. n = 50, $\bar{x} = 41.4$, σ = 12.1 known. (a) 95% CI for μ (b) 90% CI (c) compare.`,
sol:R`σ is known → z-interval; n = 50 is large, so normality of the population is not needed.

(a) $z_{0.025} = 1.96$: $E = 1.96 \cdot \frac{12.1}{\sqrt{50}} = 3.35$ → **[38.05, 44.75]**

(b) $z_{0.05} = 1.64$: $E = 1.64 \cdot \frac{12.1}{\sqrt{50}} = 2.81$ → **[38.59, 44.21]**

(c) The 95% interval is **longer**: more confidence costs precision. The 90% interval is shorter (more precise) but you are less confident that it contains μ.`},
{id:'r4', q:R`Review 6–7. How do (a) the confidence level (b) the standard deviation (c) the sample size affect the length of the interval? What does the margin of error $E = z_{\alpha/2}\frac{\sigma}{\sqrt n}$ tell us?`,
sol:R`Length $L = 2E = 2\,z_{\alpha/2}\frac{\sigma}{\sqrt n}$ — read the answers off the formula:
- (a) Confidence level ↑ :: α ↓ → $z_{\alpha/2}$ ↑ → **longer**
- (b) σ ↑ :: **longer** — noisier data, less precision
- (c) n ↑ :: **shorter** — but only with $\sqrt n$: four times the data for half the length

The **margin of error** E is half the length of the interval. It tells how accurately $\bar{x}$ estimates μ: we are $(1-\alpha)$ confident that the estimate is off by at most E.`},
{id:'1', q:R`(8.85) The mean head circumference of 15 infants was 34.8 cm. (a) Assuming a normal distribution with σ = 2.1 cm, find a 90% CI for the mean head circumference of all infants. (b) Margin of error? (c) Meaning of E? (d) Sample size needed for E = 0.5 cm at 95%?`,
sol:R`(a) n = 15 is small, but the population is normal and σ is known → z-interval. $z_{0.05} = 1.64$:
$34.8 \pm 1.64 \cdot \frac{2.1}{\sqrt{15}} = 34.8 \pm 0.89$ → **[33.91, 35.69] cm**

(b) $E = 1.64 \cdot \frac{2.1}{\sqrt{15}} \approx$ **0.89 cm**

(c) We can be 90% confident that the sample mean 34.8 cm is within 0.89 cm of the true mean head circumference of all infants.

(d) Solve $E = z_{\alpha/2}\frac{\sigma}{\sqrt n}$ for n: $n = \left(\frac{z_{\alpha/2}\,\sigma}{E}\right)^2 = \left(\frac{1.96 \cdot 2.1}{0.5}\right)^2 = 67.77$ → **always round up: n = 68** infants (67 would give an E slightly above 0.5).`},
{id:'2', q:R`(8.109) A variable has mean 100 and standard deviation 16. Four observations have mean 108 and sample standard deviation 12. Find the observed value of (a) the standardized version of $\bar{x}$ (b) the studentized version of $\bar{x}$.`,
sol:R`- (a) Standardized (uses σ) :: $z = \frac{\bar{x} - \mu}{\sigma/\sqrt n} = \frac{108 - 100}{16/\sqrt4} = \frac{8}{8} = $ **1**
- (b) Studentized (uses s instead of σ) :: $t = \frac{\bar{x} - \mu}{s/\sqrt n} = \frac{108 - 100}{12/\sqrt4} = \frac{8}{6} \approx$ **1.333**

The studentized version follows a t-distribution with $n - 1 = 3$ degrees of freedom (normal population).`},
{id:'3', q:R`(8.113) Why is there more variation in the possible values of the studentized version of $\bar{x}$ than in the standardized version?`,
sol:R`In the standardized version only the **numerator** $\bar{x}$ varies from sample to sample — σ is a fixed number. In the studentized version **both** $\bar{x}$ **and** s change with every sample, so there are two sources of variation. That is why the t-distribution has fatter tails than the standard normal curve (and why $t_{\alpha/2} > z_{\alpha/2}$, especially for small n).`},
{id:'4', q:R`(8.133) A random sample of 42 bags (18 oz) of Chips Ahoy! cookies had a mean of 1,261.6 chips per bag and a standard deviation of 117.6. (a) 95% CI for the mean number of chips per bag; interpret ($t_{0.025} \approx 2.02$ for df = 41). (b) Can you conclude that the average bag contains at least 1,000 chips?`,
sol:R`(a) σ unknown, only s → **t-interval**, df = 42 − 1 = 41:
$E = 2.02 \cdot \frac{117.6}{\sqrt{42}} \approx 36.65$ → $1261.6 \pm 36.65$ = **[1,224.95; 1,298.25]** chips

Interpretation: we can be 95% confident that the mean number of chips in all 18-oz bags lies between about 1,225 and 1,298.

(b) **Yes** — the whole interval lies above 1,000, so 1,000 is not a plausible value for the mean; the average bag contains (well) more than 1,000 chips.`,
warn:R`The tutorial slide writes the upper bound of the interval with $z_{\alpha/2}$ — both bounds use the same $t_{\alpha/2} = 2.02$.`}
]}

];
