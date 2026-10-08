/* ============================================================ STATISTICS DATA — TOPICS (slides Stat_01–Stat_08, based on Weiss, Introductory Statistics) ============================================================ */
// Math as $…$ (KaTeX). Never write a dollar sign directly followed by a brace (String.raw would interpolate it).
const PLAN_EXAM_ST = new Date(2026,11,14); // "Quantitative Analytics II": Math II 90 + Statistics 90 — Mon 14.12.2026, 09:00–12:00

const ST_TOPICS = [
{id:'st-1', ch:1, title:'The Nature of Statistics', examWeight:'Definitions and classification: descriptive vs inferential, sampling designs, experimental design vocabulary',
summary:R`Statistics splits into two branches:
- Descriptive statistics :: methods for organizing and summarizing information: graphs, charts, tables and descriptive measures such as averages, measures of variation and percentiles
- Inferential statistics :: methods for drawing conclusions about a population from a sample, and for measuring how reliable those conclusions are

- Population :: the collection of all individuals or items under consideration in a statistical study
- Sample :: the part of the population from which information is obtained

Examples of the classification:
- 1948 baseball season :: the Washington Senators played 153 games, won 56 and lost 97, finished seventh, and Bud Stewart led in hitting with a batting average of .279. Baseball statistics like these are descriptive
- 1948 presidential election :: the table of votes (Truman–Barkley 49.7%, Dewey–Warren 45.2%, …) only summarizes the votes cast, no inferences are made, so the study is descriptive
- Political polling :: interviewing every U.S. voter is unrealistic, so a carefully chosen sample of a few thousand voters is interviewed and conclusions are drawn about all voters, which is inferential

**Simple random sampling** is a sampling procedure for which each possible sample of a given size is equally likely to be the one obtained. The result is a simple random sample.
- With replacement (SRSWR) :: a member of the population can be selected more than once
- Without replacement (SRS) :: a member can be selected at most once

Picking slips out of a box is impractical for large populations. Practical methods are random-number tables (tables of randomly chosen digits) and, preferred today, random-number generators in statistical software or graphing calculators. Check whether a generator samples with or without replacement.

Other sampling designs:
- Systematic random sampling :: divide the population size by the sample size and round down to $m$; pick a random number $k$ between 1 and $m$; select members $k, k+m, k+2m, \dots$
- Cluster sampling :: divide the population into groups (clusters); take a simple random sample of the clusters; use all members of the chosen clusters
- Stratified random sampling with proportional allocation :: divide the population into subpopulations (strata); from each stratum take a simple random sample whose size is proportional to the stratum size (total sample size × stratum size ÷ population size); use all members obtained

**Experimental design.** The individuals or items on which a designed experiment is performed are experimental units; when they are humans they are called subjects.

The three principles of experimental design let a researcher conclude that differences not reasonably attributable to chance are likely caused by the treatments:
- Control :: two or more treatments are compared
- Randomization :: the experimental units are randomly divided into groups, to avoid unintentional selection bias
- Replication :: enough experimental units are used, so that randomization creates similar groups and differences among treatments can be detected

Folic acid study: 4753 women were enrolled before conception and divided randomly into two groups. One took daily multivitamins with 0.8 mg folic acid, the other only trace elements. Each woman is an experimental unit (subject). The folic-acid group is the treatment group; the trace-element group is the control group. A placebo is an inert or innocuous substance; technically both the specified treatment and the placebo are treatments.

Vocabulary of an experiment:
- Response variable :: the characteristic of the experimental outcome that is measured or observed
- Factor :: a variable whose effect on the response variable is of interest
- Levels :: the possible values of a factor
- Treatment :: each experimental condition; in a one-factor experiment the treatments are the levels, in a multifactor experiment each treatment is a combination of levels

Golden Torch cacti: experimental units = the cacti; response variable = weight gain; factors = hydrophilic polymer (2 levels: with, without) and irrigation regime (5 levels: none, light, medium, heavy, very heavy); treatments = all $2 \times 5 = 10$ combinations. 40 cacti were divided randomly into 10 groups of four.

Two designs for assigning units to treatments:
- Completely randomized design :: all experimental units are assigned randomly among all treatments (folic acid study, cactus study)
- Randomized block design :: units that are similar in ways expected to affect the response are grouped into blocks; the random assignment is done separately within each block

Golf balls (five brands, 40 golfers; response = driving distance, factor = brand, five levels = five treatments):
- Completely randomized :: divide the 40 golfers randomly into five groups of 8; each group drives a different brand
- Randomized block by gender :: 20 men and 20 women; within each gender, five random groups of 4, each driving a different brand
- Why blocking helps :: it isolates and removes the systematic variation between men and women, making differences among brands easier to detect, and allows separate analysis per block`,
cards:[
{q:R`Descriptive vs inferential statistics`, a:R`Descriptive: organizing and summarizing information (graphs, tables, averages, measures of variation, percentiles). Inferential: drawing conclusions about a population from a sample and measuring their reliability.`},
{q:R`Population vs sample`, a:R`Population: all individuals or items under consideration. Sample: the part of the population from which information is obtained.`},
{q:R`Simple random sampling`, a:R`Every possible sample of a given size is equally likely to be the one obtained. With replacement (SRSWR) a member can be chosen more than once; without replacement (SRS) at most once.`},
{q:R`Systematic random sampling — steps`, a:R`$m$ = population size ÷ sample size, rounded down. Random $k$ between 1 and $m$. Select members $k, k+m, k+2m, \dots$`},
{q:R`Cluster sampling — steps`, a:R`Divide the population into clusters → simple random sample of clusters → use all members of the chosen clusters.`},
{q:R`Stratified sampling with proportional allocation`, a:R`Divide into strata; from each stratum a simple random sample of size total sample size × stratum size ÷ population size; use all members obtained.`},
{q:R`Three principles of experimental design`, a:R`Control (compare two or more treatments), randomization (random assignment to avoid selection bias), replication (enough units so groups are similar and differences detectable).`},
{q:R`Response variable, factor, levels, treatment`, a:R`Response: the measured outcome. Factor: variable whose effect is studied. Levels: its possible values. Treatment: each experimental condition (a level, or a combination of levels with several factors).`},
{q:R`Cactus study: how many treatments?`, a:R`2 polymer levels × 5 irrigation levels = 10 treatments.`},
{q:R`Completely randomized vs randomized block design`, a:R`Completely randomized: all units assigned randomly among all treatments. Randomized block: similar units are grouped into blocks and assigned randomly within each block.`},
{q:R`Why block golfers by gender?`, a:R`Gender affects driving distance. Blocking isolates and removes that variation, so differences among brands are easier to detect, and each block can be analysed separately.`}
],
quiz:[
{q:R`A newspaper lists the final 1948 election results by party. This study is…`, opts:[R`descriptive, it only summarizes`,R`inferential, it predicts voters`,R`an experiment with a control group`,R`a stratified random sample`], correct:0, exp:R`It summarizes all votes cast; no conclusions about a larger population are drawn.`},
{q:R`A poll of 1,500 voters is used to estimate the share of all voters for a party. This is…`, opts:[R`inferential statistics`,R`descriptive statistics`,R`a designed experiment`,R`a census of the population`], correct:0, exp:R`Conclusions about the population are drawn from a sample.`},
{q:R`Population 1,000, sample size 50. In systematic random sampling, $m$ equals…`, opts:[R`20`,R`50`,R`1,000`,R`25`], correct:0, exp:R`1000 ÷ 50 = 20. Pick $k$ between 1 and 20, then $k, k+20, k+40, \dots$`},
{q:R`A firm randomly picks 8 of its 40 branches and surveys every employee there. Design?`, opts:[R`Cluster sampling`,R`Stratified sampling`,R`Systematic sampling`,R`Simple random sampling`], correct:0, exp:R`Clusters (branches) are sampled; all members of the chosen clusters are used.`},
{q:R`Population: 600 men and 400 women; sample of 50, proportional allocation. How many women?`, opts:[R`20`,R`25`,R`30`,R`40`], correct:0, exp:R`50 × 400/1000 = 20 women (and 30 men).`},
{q:R`Which principle demands randomly dividing units into groups?`, opts:[R`Randomization`,R`Replication`,R`Control`,R`Blocking`], correct:0, exp:R`Randomization avoids unintentional selection bias in forming the groups.`},
{q:R`In the cactus study, "irrigation regime" is a…`, opts:[R`factor with five levels`,R`response variable`,R`treatment with two levels`,R`experimental unit`], correct:0, exp:R`Factors: polymer (2 levels) and irrigation (5 levels); response: weight gain.`},
{q:R`Golf ball study blocked by gender. What is the main benefit?`, opts:[R`Gender variation is removed from the comparison`,R`Fewer golfers are needed in total`,R`No randomization is needed anymore`,R`Each golfer can test every ball`], correct:0, exp:R`Blocking isolates systematic differences between blocks, so treatment differences are easier to detect.`},
{q:R`In the folic acid study, the women who took only trace elements form the…`, opts:[R`control group`,R`treatment group`,R`response variable`,R`placebo factor`], correct:0, exp:R`The group receiving the specified treatment is the treatment group; the other is the control group.`},
{q:R`Which statement on SRSWR is correct?`, opts:[R`A member can be selected more than once`,R`Each member is selected at most once`,R`Only clusters are selected at random`,R`It needs strata of equal size`], correct:0, exp:R`SRSWR = with replacement; SRS (without replacement) selects each member at most once.`}
]},

{id:'st-2', ch:2, title:'Organizing Data', examWeight:'Variable types, frequency tables, choosing the grouping method, graphs and distribution shapes',
summary:R`Types of variables:
- Variable :: a characteristic that varies from one person or thing to another
- Qualitative variable :: non-numerically valued (e.g. political party)
- Quantitative variable :: numerically valued
- Discrete variable :: a quantitative variable whose possible values can be listed; any variable with finitely many values is discrete (e.g. number of TV sets)
- Continuous variable :: a quantitative variable whose possible values form an interval of numbers (e.g. weight)

Data are values of a variable: qualitative, quantitative, discrete or continuous data accordingly.

**Qualitative data.** A frequency distribution lists the distinct values and their frequencies (list values → tally marks → count). A relative-frequency distribution divides each frequency by the total number of observations.

Example: party affiliation of 40 statistics students: Democratic 13 (0.325), Republican 18 (0.450), Other 9 (0.225). The relative frequencies sum to 1.

Graphs for qualitative data:
- Pie chart :: a disk divided into wedges proportional to the relative frequencies; label each slice with value and relative frequency
- Bar chart :: distinct values on the horizontal axis, relative frequencies (or frequencies, percents) on the vertical axis; the bars do **not** touch

**Quantitative data** can be grouped in three ways:
- Single-value grouping :: for discrete data with only a few distinct values. Example: TV sets in 50 households: 0 → 1, 1 → 16, 2 → 14, 3 → 12, 4 → 3, 5 → 2, 6 → 2 (relative 0.02, 0.32, 0.28, 0.24, 0.06, 0.04, 0.04)
- Limit grouping :: for whole-number data with too many distinct values. Example: days to maturity of 40 investments in classes 30–39 (3), 40–49 (1), 50–59 (8), 60–69 (10), 70–79 (7), 80–89 (7), 90–99 (4)
- Cutpoint grouping :: for continuous data expressed with decimals (e.g. weights of 18- to 24-year-old males)

Terms of limit grouping:
- Lower class limit :: the smallest value that could go in a class
- Upper class limit :: the largest value that could go in a class
- Class width :: lower limit of the next-higher class minus the lower limit of the class
- Class mark :: the average of the two class limits

Terms of cutpoint grouping:
- Lower class cutpoint :: the smallest value that could go in a class
- Upper class cutpoint :: the smallest value that could go in the next-higher class (= its lower cutpoint)
- Class width :: the difference between the cutpoints of a class
- Class midpoint :: the average of the two cutpoints

Graphs for quantitative data:
- Histogram :: classes on the horizontal axis, frequencies (relative frequencies, percents) as bar heights; the bars **touch**. Single-value grouping: label with the values centred under the bars; limit or cutpoint grouping: label with the lower class limits (cutpoints), some use class marks or midpoints
- Dotplot :: each observation is a dot above a horizontal axis; equal values are stacked (e.g. prices of 16 DVD players)
- Stem-and-leaf diagram :: each observation splits into a stem (all but the rightmost digit) and a leaf (the rightmost digit); stems in a column left of a vertical rule, leaves to the right in ascending order; you can use one or two lines per stem

The distribution of a data set is a table, graph or formula that gives the values of the observations and how often they occur. Shapes of distributions:
- By number of peaks :: unimodal (one), bimodal (two), multimodal (three or more)
- Symmetric :: bell-shaped, triangular, uniform (rectangular)
- Right skewed :: long tail to the right; left skewed :: long tail to the left
- Reverse-J-shaped :: highest at the left and falling off, e.g. household size

Population data are the values of a variable for the entire population; their distribution is the population distribution, also called the distribution of the variable. Sample data give a sample distribution. For a simple random sample, the sample distribution approximates the population distribution, and the larger the sample, the better the approximation tends to be.

Misleading graphs:
- Truncated graph :: the vertical axis does not start at zero, which exaggerates differences (unemployment rates example)
- Improper scaling :: doubling both width and height of a picture for a doubled quantity makes it look four times as large (homes example)`,
cards:[
{q:R`Discrete vs continuous variable`, a:R`Discrete: possible values can be listed (finitely many values is always discrete). Continuous: possible values form an interval of numbers.`},
{q:R`Frequency vs relative-frequency distribution`, a:R`Frequency: distinct values and how often they occur. Relative frequency: each frequency divided by the total number of observations.`},
{q:R`Bar chart vs histogram`, a:R`Bar chart (qualitative data): bars do not touch. Histogram (quantitative data): bars touch.`},
{q:R`When to use single-value, limit and cutpoint grouping?`, a:R`Single-value: discrete data with few distinct values. Limit: whole numbers with too many distinct values. Cutpoint: continuous data with decimals.`},
{q:R`Class width and class mark in limit grouping`, a:R`Width = lower limit of the next class − lower limit of the class. Mark = average of the two class limits.`},
{q:R`Upper class cutpoint`, a:R`The smallest value that could go in the next-higher class, i.e. the lower cutpoint of the next class.`},
{q:R`Stem-and-leaf diagram`, a:R`Stem = all but the rightmost digit, leaf = the rightmost digit. Stems in a column, leaves in ascending order to the right of a vertical rule.`},
{q:R`Party data: 13 D, 18 R, 9 O out of 40. Relative frequencies?`, a:R`0.325, 0.450, 0.225.`},
{q:R`Shapes of distributions`, a:R`Unimodal, bimodal, multimodal; symmetric (bell-shaped, triangular, uniform); right skewed, left skewed; reverse-J-shaped.`},
{q:R`Sample distribution vs population distribution`, a:R`For a simple random sample, the sample distribution approximates the population distribution — the better, the larger the sample.`},
{q:R`Two kinds of misleading graphs`, a:R`Truncated graphs (axis not starting at 0 exaggerates differences) and improper scaling (doubling width and height makes it look four times as big).`}
],
quiz:[
{q:R`Number of siblings of a student is a…`, opts:[R`discrete quantitative variable`,R`continuous quantitative variable`,R`qualitative variable`,R`categorical cutpoint variable`], correct:0, exp:R`It is numerical and its possible values (0, 1, 2, …) can be listed.`},
{q:R`Weight of a newborn measured in kg with decimals is…`, opts:[R`continuous`,R`discrete`,R`qualitative`,R`a class mark`], correct:0, exp:R`Its possible values form an interval of numbers.`},
{q:R`Classes 50–59, 60–69, 70–79. What is the class mark of 60–69?`, opts:[R`64.5`,R`65`,R`60`,R`10`], correct:0, exp:R`Average of the two class limits: (60 + 69)/2 = 64.5. The class width is 10.`},
{q:R`Which grouping method fits 200 body weights given to one decimal?`, opts:[R`Cutpoint grouping`,R`Limit grouping`,R`Single-value grouping`,R`No grouping at all`], correct:0, exp:R`Continuous data with decimals → cutpoint grouping.`},
{q:R`In which graph must the bars NOT touch?`, opts:[R`Bar chart`,R`Histogram`,R`Relative-frequency histogram`,R`Percent histogram`], correct:0, exp:R`Bar charts (qualitative data) have separated bars; histograms have touching bars.`},
{q:R`Out of 50 households, 16 own exactly one TV. Relative frequency?`, opts:[R`0.32`,R`0.16`,R`0.50`,R`3.125`], correct:0, exp:R`16 / 50 = 0.32.`},
{q:R`A distribution with a long tail to the right is…`, opts:[R`right skewed`,R`left skewed`,R`symmetric`,R`bimodal`], correct:0, exp:R`Skewness is named after the direction of the long tail.`},
{q:R`The observation 87 in a stem-and-leaf diagram has…`, opts:[R`stem 8 and leaf 7`,R`stem 7 and leaf 8`,R`stem 87 and leaf 0`,R`stem 0 and leaf 87`], correct:0, exp:R`Stem = all but the rightmost digit, leaf = the rightmost digit.`},
{q:R`A developer doubles height AND width of a house icon to show "twice as many homes". Problem?`, opts:[R`The area looks four times as large`,R`The vertical axis is truncated`,R`The bars touch each other`,R`The data are qualitative`], correct:0, exp:R`Improper scaling: area grows by a factor of 4.`},
{q:R`When does a sample distribution approximate the population distribution well?`, opts:[R`For a large simple random sample`,R`Only for a very small sample`,R`Only for qualitative data`,R`When the bars of the graph touch`], correct:0, exp:R`For simple random samples the approximation improves with sample size.`}
]},

{id:'st-3', ch:3, title:'Descriptive Measures', examWeight:'Calculate mean, median, mode, s, quartiles, IQR, outliers and z-scores; apply Chebyshev and the empirical rule',
summary:R`**Measures of center**
- Mean :: sum of the observations divided by their number; sample mean $\bar x = \frac{\sum x_i}{n}$
- Median :: arrange the data in increasing order; odd $n$: the middle observation, even $n$: the mean of the two middle observations. In both cases it sits at position $(n+1)/2$
- Mode :: the value(s) with the greatest frequency; if no value occurs more than once, there is no mode

Salary example: Data Set I (13 salaries) has mean 483.85, median 400, mode 300; Data Set II (10 salaries) has mean 474, median 350, mode 300. The mean is pulled by a few high salaries (940, 1050), the median is resistant to extreme values.

Mean and median depend on the shape:
- Right skewed :: mean > median
- Symmetric :: mean = median
- Left skewed :: mean < median

**Measures of variation**
- Range :: Max − Min. Basketball teams: both have mean height 75 in, but team I ranges 72–78 (range 6) and team II 67–84 (range 17)
- Sample standard deviation :: $s = \sqrt{\frac{\sum (x_i - \bar x)^2}{n-1}}$, computing formula $s = \sqrt{\frac{\sum x_i^2 - (\sum x_i)^2/n}{n-1}}$
- Key fact :: the more variation in a data set, the larger its standard deviation. Data Sets I and II both have $\bar x = 50$, but $s = 7.4$ vs $s = 14.2$

Three rules about how data spread around the mean:
- Three-standard-deviations rule :: almost all observations lie within three standard deviations to either side of the mean
- Chebyshev's rule (any data set) :: for any $k \ge 1$ at least $1 - 1/k^2$ of the observations lie within $k$ standard deviations of the mean, i.e. between $\bar x - ks$ and $\bar x + ks$. So at least 75% within 2 s and at least 88.9% within 3 s
- Empirical rule (roughly bell-shaped data) :: about 68% within one, 95% within two and 99.7% within three standard deviations of the mean

PCB concentrations of 60 pelican eggs: $\bar x = 206.45$, $s = 66.42$. Actually within 1 s: 43 of 60 (71.7%), within 2 s: 57 (95.0%), within 3 s: 60 (100%) — close to the empirical rule, as the histogram is roughly bell-shaped.

**Five-number summary and boxplots.** Quartiles: arrange the data, find the median ($Q_2$), split the data into a bottom and a top half — if $n$ is odd, include the median in both halves. $Q_1$ is the median of the bottom half, $Q_3$ the median of the top half.
- Interquartile range :: $IQR = Q_3 - Q_1$
- Five-number summary :: Min, $Q_1$, $Q_2$, $Q_3$, Max
- Lower and upper limits :: $Q_1 - 1.5\cdot IQR$ and $Q_3 + 1.5\cdot IQR$; observations outside are potential outliers
- Adjacent values :: the most extreme observations still inside the limits

To construct a boxplot:
=> Quartiles (Q1, Q2, Q3) → Limits (find potential outliers and adjacent values) → Axis (mark quartiles and adjacent values) → Box (Q1 to Q3, whiskers to adjacent values) → Asterisks (each potential outlier)

TV viewing times of 20 people (5 … 66): $Q_1 = 23$, $Q_2 = 30.5$, $Q_3 = 36.5$, $IQR = 13.5$, limits 2.75 and 56.75. So 66 is a potential outlier; the adjacent values are 5 and 43. In boxplots, right-skewed data have a longer right whisker/box part, left-skewed data a longer left part.

**Populations.** For a finite population of size $N$:
- Population mean :: $\mu = \frac{\sum x_i}{N}$, the mean of the variable
- Population standard deviation :: $\sigma = \sqrt{\frac{\sum (x_i - \mu)^2}{N}}$ (divide by $N$, not $N-1$), or $\sigma = \sqrt{\frac{\sum x_i^2}{N} - \mu^2}$
- Parameter :: a descriptive measure for a population (e.g. $\mu$, $\sigma$)
- Statistic :: a descriptive measure for a sample (e.g. $\bar x$, $s$), used to estimate the parameter (Xenical capsules: weights of all capsules vs a sample of 10)

The standardized variable is $z = \frac{x - \mu}{\sigma}$. The z-score (standard score) of an observation says how many standard deviations it lies above (positive) or below (negative) the mean.`,
cards:[
{q:R`Position of the median`, a:R`Position $(n+1)/2$ in the ordered data: the middle value for odd $n$, the mean of the two middle values for even $n$.`},
{q:R`Mean vs median in skewed data`, a:R`Right skewed: mean > median. Symmetric: equal. Left skewed: mean < median. The median is resistant to extreme values.`},
{q:R`Sample standard deviation (defining and computing formula)`, a:R`$s = \sqrt{\sum (x_i-\bar x)^2/(n-1)} = \sqrt{(\sum x_i^2 - (\sum x_i)^2/n)/(n-1)}$.`},
{q:R`Chebyshev's rule`, a:R`For any data set and $k \ge 1$: at least $1 - 1/k^2$ of the data lie within $k$ standard deviations of the mean (k = 2: 75%, k = 3: 88.9%).`},
{q:R`Empirical rule`, a:R`Roughly bell-shaped data: about 68% within 1 s, 95% within 2 s, 99.7% within 3 s of the mean.`},
{q:R`How are quartiles found?`, a:R`Order the data; $Q_2$ = median; split into halves (odd $n$: median in both halves); $Q_1$ = median of the bottom half, $Q_3$ = median of the top half.`},
{q:R`Lower and upper limits; outliers`, a:R`Lower $= Q_1 - 1.5\,IQR$, upper $= Q_3 + 1.5\,IQR$. Observations outside are potential outliers; the most extreme ones inside are the adjacent values.`},
{q:R`Five-number summary`, a:R`Min, $Q_1$, $Q_2$, $Q_3$, Max.`},
{q:R`Population vs sample standard deviation`, a:R`$\sigma$ divides by $N$ and uses $\mu$; $s$ divides by $n-1$ and uses $\bar x$.`},
{q:R`Parameter vs statistic`, a:R`Parameter: descriptive measure of a population ($\mu$, $\sigma$). Statistic: descriptive measure of a sample ($\bar x$, $s$).`},
{q:R`z-score`, a:R`$z = (x-\mu)/\sigma$: the number of standard deviations an observation lies above (+) or below (−) the mean.`}
],
quiz:[
{q:R`Data: 3, 7, 8, 10, 12. Median?`, opts:[R`8`,R`8.0 and 10`,R`7.5`,R`10`], correct:0, exp:R`n = 5, position (5+1)/2 = 3 → 8.`},
{q:R`Data: 2, 4, 9, 11. Median?`, opts:[R`6.5`,R`9`,R`4`,R`6.0`], correct:0, exp:R`Even n: mean of the two middle values (4 + 9)/2 = 6.5.`},
{q:R`Incomes are strongly right skewed. Which is true?`, opts:[R`The mean exceeds the median`,R`The median exceeds the mean`,R`Mean and median are equal`,R`The mode exceeds the mean`], correct:0, exp:R`A few very high values pull the mean to the right of the median.`},
{q:R`Data 2, 4, 6. Sample standard deviation?`, opts:[R`2`,R`1.63`,R`4`,R`2.83`], correct:0, exp:R`Mean 4; squared deviations 4 + 0 + 4 = 8; 8/(3−1) = 4; √4 = 2.`},
{q:R`By Chebyshev's rule, at least what share of any data set lies within 2 standard deviations?`, opts:[R`75%`,R`95%`,R`68%`,R`88.9%`], correct:0, exp:R`1 − 1/2² = 0.75. 95% is the empirical rule, which needs bell-shaped data.`},
{q:R`Bell-shaped data with mean 50 and s = 5. About what share lies between 40 and 60?`, opts:[R`95%`,R`68%`,R`75%`,R`99.7%`], correct:0, exp:R`40 and 60 are two standard deviations from the mean → empirical rule: about 95%.`},
{q:R`$Q_1 = 23$, $Q_3 = 36.5$. Upper limit for outliers?`, opts:[R`56.75`,R`50.0`,R`59.5`,R`43.0`], correct:0, exp:R`IQR = 13.5; 36.5 + 1.5 · 13.5 = 56.75.`},
{q:R`Which measure is a parameter?`, opts:[R`The population mean μ`,R`The sample mean x̄`,R`The sample standard deviation s`,R`The sample median of 10 values`], correct:0, exp:R`Parameters describe populations; statistics describe samples.`},
{q:R`IQ: μ = 100, σ = 16. z-score of an IQ of 76?`, opts:[R`−1.5`,R`1.5`,R`−24`,R`−0.75`], correct:0, exp:R`(76 − 100)/16 = −1.5: 1.5 standard deviations below the mean.`},
{q:R`Why does the population standard deviation divide by N and not N − 1?`, opts:[R`It uses all values and the true mean μ`,R`Populations are always normally distributed`,R`N − 1 is only for qualitative data`,R`It makes σ always larger than s`], correct:0, exp:R`σ is defined over the whole population around μ; s divides by n − 1 because it uses the estimate x̄.`}
]},

{id:'st-4', ch:4, title:'Probability Concepts', examWeight:'Addition, complement, conditional, multiplication rules, contingency tables, Bayes and counting',
summary:R`**Equally likely outcomes ($f/N$ rule).** If an experiment has $N$ equally likely outcomes and an event can occur in $f$ ways, its probability is $f/N$. Rolling two dice gives 36 equally likely outcomes. In simulations (100 coin tosses) the proportion of heads approaches 0.5.

Basic properties of probabilities:
- Property 1 :: a probability is always between 0 and 1 inclusive
- Property 2 :: an impossible event has probability 0
- Property 3 :: a certain event has probability 1

**Events.** The sample space is the collection of all possible outcomes. An event is any subset of the sample space; it occurs if the outcome is a member of it.
- (not E) :: E does not occur
- (A & B) :: both A and B occur
- (A or B) :: A or B or both occur
- Mutually exclusive :: no two of the events have outcomes in common

Rules of probability:
- Special addition rule :: if A and B are mutually exclusive, $P(A \text{ or } B) = P(A) + P(B)$ (also for more events)
- Complementation rule :: $P(E) = 1 - P(\text{not } E)$
- General addition rule :: $P(A \text{ or } B) = P(A) + P(B) - P(A \,\&\, B)$

**Contingency tables.** A contingency table cross-classifies data by two variables (faculty by age and rank, 1164 members). Dividing each cell by the total gives the joint probability distribution; the row and column totals give the marginal probabilities. Example: $P(R_1) = 430/1164 = 0.369$ (full professors), $P(A_2 \,\&\, R_1) = 52/1164 = 0.045$.

**Conditional probability.** $P(B \mid A)$ is the probability that B occurs given that A occurs; A is the given event.
- Conditional probability rule :: $P(B \mid A) = \frac{P(A \,\&\, B)}{P(A)}$ for $P(A) > 0$
- Example faculty :: $P(R_1 \mid A_4) = 145/253 = 0.573$ (full professor, given age 50–59)
- Example marital status :: $P(M_2 \mid S_1) = 0.281/0.485 = 0.579$ (married, given male)

**Multiplication rule and independence.**
- General multiplication rule :: $P(A \,\&\, B) = P(A)\cdot P(B \mid A)$
- Tree diagram example :: 40 students, 23 female and 17 male, two chosen without replacement: $P(F_1 \,\&\, F_2) = \frac{23}{40}\cdot\frac{22}{39} = 0.324$, $P(F_1 \,\&\, M_2) = \frac{23}{40}\cdot\frac{17}{39} = 0.251$, $P(M_1 \,\&\, M_2) = \frac{17}{40}\cdot\frac{16}{39} = 0.174$
- Independent events :: B is independent of A if $P(B \mid A) = P(B)$
- Special multiplication rule :: A and B are independent exactly when $P(A \,\&\, B) = P(A)\cdot P(B)$; for independent events $A, B, C, \dots$: $P(A \,\&\, B \,\&\, C \dots) = P(A)\,P(B)\,P(C)\cdots$

Do not mix up the two concepts: mutually exclusive events (with positive probabilities) can never be independent, because if one occurs the other cannot.

**Bayes's rule.** If $A_1, \dots, A_k$ are mutually exclusive and exhaustive (exactly one must occur):
- Rule of total probability :: $P(B) = \sum_j P(A_j)\cdot P(B \mid A_j)$
- Bayes's rule :: $P(A_i \mid B) = \frac{P(A_i)\,P(B \mid A_i)}{\sum_j P(A_j)\,P(B \mid A_j)}$

Seniors example: regions Northeast 0.179, Midwest 0.217, South 0.371, West 0.233 with senior shares 0.141, 0.135, 0.130, 0.119. Total probability $P(S) = 0.1305$; Bayes: $P(\text{South} \mid S) = 0.371 \cdot 0.130 / 0.1305 = 0.370$.

**Counting rules.**
- Basic counting rule :: $r$ actions in a definite order with $m_1, m_2, \dots, m_r$ possibilities give $m_1 \cdot m_2 \cdots m_r$ possibilities
- Factorial :: $k! = k(k-1)\cdots 2 \cdot 1$, and $0! = 1$
- Permutations (order matters) :: $_mP_r = \frac{m!}{(m-r)!}$; e.g. 3 of 5 letters: 60 permutations; all $m$ objects among themselves: $m!$
- Combinations (order does not matter) :: $_mC_r = \frac{m!}{r!\,(m-r)!}$; 3 of 5 letters: 10 combinations
- Number of possible samples :: of size $n$ from a population of size $N$: $_NC_n$

Defective TVs: 100 TVs, 6 defective, 5 chosen at random. Exactly 2 defective: $\frac{_6C_2 \cdot {_{94}C_3}}{_{100}C_5} = 0.0267$.`,
cards:[
{q:R`$f/N$ rule`, a:R`For $N$ equally likely outcomes, an event that can occur in $f$ ways has probability $f/N$.`},
{q:R`Mutually exclusive events`, a:R`No two of them have outcomes in common. Then $P(A \text{ or } B) = P(A) + P(B)$.`},
{q:R`General addition rule`, a:R`$P(A \text{ or } B) = P(A) + P(B) - P(A \,\&\, B)$.`},
{q:R`Complementation rule`, a:R`$P(E) = 1 - P(\text{not } E)$.`},
{q:R`Conditional probability rule`, a:R`$P(B \mid A) = P(A \,\&\, B)/P(A)$, for $P(A) > 0$.`},
{q:R`General multiplication rule`, a:R`$P(A \,\&\, B) = P(A)\cdot P(B \mid A)$.`},
{q:R`Independent events`, a:R`$P(B \mid A) = P(B)$; equivalently $P(A \,\&\, B) = P(A)\,P(B)$.`},
{q:R`Rule of total probability`, a:R`For mutually exclusive and exhaustive $A_1..A_k$: $P(B) = \sum P(A_j)\,P(B \mid A_j)$.`},
{q:R`Bayes's rule`, a:R`$P(A_i \mid B) = P(A_i)\,P(B \mid A_i) / \sum P(A_j)\,P(B \mid A_j)$.`},
{q:R`Permutations vs combinations`, a:R`Permutations (order matters): $m!/(m-r)!$. Combinations (order does not matter): $m!/(r!(m-r)!)$.`},
{q:R`Joint vs marginal probabilities`, a:R`Joint: cell ÷ total, e.g. $P(A \,\&\, R)$. Marginal: row or column total ÷ total, e.g. $P(R)$.`}
],
quiz:[
{q:R`Two fair dice. Probability that the sum is 7?`, opts:[R`1/6`,R`7/36`,R`1/12`,R`1/36`], correct:0, exp:R`6 of 36 equally likely outcomes give 7: 6/36 = 1/6.`},
{q:R`P(A) = 0.5, P(B) = 0.4, P(A & B) = 0.2. P(A or B)?`, opts:[R`0.7`,R`0.9`,R`0.2`,R`0.5`], correct:0, exp:R`General addition rule: 0.5 + 0.4 − 0.2 = 0.7.`},
{q:R`P(A) = 0.3 and P(B) = 0.6 are mutually exclusive. P(A & B)?`, opts:[R`0`,R`0.18`,R`0.9`,R`0.3`], correct:0, exp:R`Mutually exclusive events share no outcomes.`},
{q:R`Faculty table: 253 members are aged 50–59, of whom 145 are full professors. P(full professor | 50–59)?`, opts:[R`0.573`,R`0.125`,R`0.337`,R`0.217`], correct:0, exp:R`Conditional probability: 145/253 = 0.573.`},
{q:R`P(A) = 0.4, P(B | A) = 0.5. P(A & B)?`, opts:[R`0.2`,R`0.9`,R`0.8`,R`0.1`], correct:0, exp:R`General multiplication rule: 0.4 · 0.5 = 0.2.`},
{q:R`P(A) = 0.3, P(B) = 0.5, P(A & B) = 0.15. A and B are…`, opts:[R`independent`,R`mutually exclusive`,R`complementary`,R`dependent`], correct:0, exp:R`0.3 · 0.5 = 0.15 = P(A & B) → independent.`},
{q:R`40 students: 23 female, 17 male. Two chosen without replacement. P(both female)?`, opts:[R`0.324`,R`0.331`,R`0.575`,R`0.251`], correct:0, exp:R`23/40 · 22/39 = 0.324.`},
{q:R`How many ways can 3 of 5 people be chosen for a committee (order irrelevant)?`, opts:[R`10`,R`60`,R`15`,R`125`], correct:0, exp:R`Combination: 5!/(3! 2!) = 10. Ordered selections would be 60.`},
{q:R`How many ordered podium results (1st, 2nd, 3rd) among 8 runners?`, opts:[R`336`,R`56`,R`512`,R`24`], correct:0, exp:R`Permutation: 8!/5! = 8 · 7 · 6 = 336.`},
{q:R`Machine A makes 60% of parts (2% defective), B 40% (5% defective). P(A | defective)?`, opts:[R`0.375`,R`0.600`,R`0.032`,R`0.012`], correct:0, exp:R`P(D) = 0.6·0.02 + 0.4·0.05 = 0.032; Bayes: 0.012/0.032 = 0.375.`}
]},

{id:'st-5', ch:5, title:'Discrete Random Variables', examWeight:'Mean and standard deviation of a distribution, binomial and Poisson probabilities',
summary:R`A **random variable** is a quantitative variable whose value depends on chance. A **discrete random variable** has possible values that can be listed (in particular, finitely many).

- Probability distribution :: a listing (or formula) of the possible values and their probabilities
- Probability histogram :: possible values on the horizontal axis, probabilities as bar heights
- Sum of the probabilities :: $\sum P(X = x) = 1$ for every discrete random variable
- Interpretation :: in many independent observations, the proportion of each value approximates its probability (1000 repetitions of three coin tosses look like the probability histogram)

Siblings example: $P(X=0) = 0.200$, $P(1) = 0.425$, $P(2) = 0.275$, $P(3) = 0.075$, $P(4) = 0.025$ (sum 1).

**Mean and standard deviation.**
- Mean (expected value, expectation) :: $\mu = \sum x\,P(X = x)$
- Interpretation of the mean :: in a large number of independent observations, the average approximately equals $\mu$, and gets closer with more observations (busy tellers simulation)
- Standard deviation :: $\sigma = \sqrt{\sum (x-\mu)^2 P(X=x)} = \sqrt{\sum x^2 P(X=x) - \mu^2}$
- Siblings :: $\mu = 1.3$, $\sigma = 0.954$

**Binomial distribution.**
- Factorial :: $k! = k(k-1)\cdots 2 \cdot 1$, $0! = 1$
- Binomial coefficient :: $\binom{n}{x} = \frac{n!}{x!\,(n-x)!}$
- Bernoulli trials :: (1) each trial has two outcomes, success $s$ and failure $f$; (2) the trials are independent; (3) the success probability $p$ is the same on every trial
- Number of outcomes with exactly $x$ successes in $n$ trials :: $\binom{n}{x}$

Example: three people, each alive at 65 with probability 0.8. Outcomes like $ssf$ have probability $0.8 \cdot 0.8 \cdot 0.2 = 0.128$; there are $\binom{3}{2} = 3$ such outcomes, so $P(X = 2) = 3 \cdot 0.128 = 0.384$; $P(X = 3) = 0.512$.

Binomial probability formula: if $X$ is the number of successes in $n$ Bernoulli trials with success probability $p$,
$$P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}, \quad x = 0, 1, \dots, n$$

To use it: identify a success → determine $p$ → determine $n$ → apply the formula.
=> Identify a success → Determine p (success probability) → Determine n (number of trials) → Apply the formula (P(X = x))

- Mean and standard deviation :: $\mu = np$, $\sigma = \sqrt{np(1-p)}$
- Shape :: right skewed for $p < 0.5$, symmetric for $p = 0.5$, left skewed for $p > 0.5$
- Sampling :: the number of sampled members with an attribute (population proportion $p$) is exactly binomial when sampling with replacement, and approximately binomial without replacement if the sample is at most 5% of the population

**Poisson distribution.** For counts of events in a fixed interval:
$$P(X = x) = e^{-\lambda}\frac{\lambda^x}{x!}, \quad x = 0, 1, 2, \dots$$
with $\lambda > 0$ and $e \approx 2.718$.
- Mean and standard deviation :: $\mu = \lambda$, $\sigma = \sqrt{\lambda}$
- Emergency room example :: patients arriving between 6 and 7 p.m. with $\lambda = 6.9$: $P(X = 6) = 0.151$, $P(X = 7) = 0.149$, $P(X = 5) = 0.131$
- Poisson approximation to the binomial :: use $P(X=x) \approx e^{-np}\frac{(np)^x}{x!}$ only if $n \ge 100$ and $np \le 10$

Careful, two slide typos: the Poisson-approximation slide prints "np ≥ 10" — the condition is $np \le 10$ (rare events, small $p$). The ER table prints 0.0131 for $x = 5$; the correct value is 0.131.`,
cards:[
{q:R`Discrete random variable`, a:R`A quantitative variable whose value depends on chance and whose possible values can be listed.`},
{q:R`Mean of a discrete random variable`, a:R`$\mu = \sum x\,P(X=x)$, also called expected value. Long-run average of many independent observations.`},
{q:R`Standard deviation of a discrete random variable`, a:R`$\sigma = \sqrt{\sum (x-\mu)^2P(X=x)} = \sqrt{\sum x^2P(X=x) - \mu^2}$.`},
{q:R`Three conditions for Bernoulli trials`, a:R`Two outcomes per trial (success/failure), independent trials, the same success probability $p$ on every trial.`},
{q:R`Binomial probability formula`, a:R`$P(X=x) = \binom{n}{x}p^x(1-p)^{n-x}$.`},
{q:R`Mean and standard deviation of a binomial variable`, a:R`$\mu = np$, $\sigma = \sqrt{np(1-p)}$.`},
{q:R`When is sampling without replacement approximately binomial?`, a:R`When the sample size is at most 5% of the population size.`},
{q:R`Poisson formula, mean and standard deviation`, a:R`$P(X=x) = e^{-\lambda}\lambda^x/x!$; $\mu = \lambda$, $\sigma = \sqrt{\lambda}$.`},
{q:R`Poisson approximation to the binomial — conditions`, a:R`$n \ge 100$ and $np \le 10$; then use $\lambda = np$. (The slide's "np ≥ 10" is a typo.)`},
{q:R`Siblings distribution 0.2, 0.425, 0.275, 0.075, 0.025: mean?`, a:R`$\mu = 0 + 0.425 + 0.55 + 0.225 + 0.1 = 1.3$; $\sigma = 0.954$.`}
],
quiz:[
{q:R`X takes 0, 1, 2 with probabilities 0.3, 0.5, 0.2. Mean?`, opts:[R`0.9`,R`1.0`,R`0.7`,R`1.2`], correct:0, exp:R`0·0.3 + 1·0.5 + 2·0.2 = 0.9.`},
{q:R`P(X=0) = 0.1, P(X=1) = 0.6, P(X=2) = ?`, opts:[R`0.3`,R`0.7`,R`0.5`,R`It cannot be determined`], correct:0, exp:R`Probabilities of a distribution sum to 1.`},
{q:R`Which is NOT a condition for Bernoulli trials?`, opts:[R`At least 30 trials are performed`,R`Two outcomes per trial`,R`Independent trials`,R`Constant success probability`], correct:0, exp:R`The number of trials can be any n.`},
{q:R`n = 3, p = 0.8. P(exactly 2 successes)?`, opts:[R`0.384`,R`0.128`,R`0.512`,R`0.640`], correct:0, exp:R`3 · 0.8² · 0.2 = 0.384.`},
{q:R`Binomial with n = 100, p = 0.2. Standard deviation?`, opts:[R`4`,R`16`,R`20`,R`2`], correct:0, exp:R`√(100 · 0.2 · 0.8) = √16 = 4; the mean is 20.`},
{q:R`A binomial distribution with p = 0.25 is…`, opts:[R`right skewed`,R`left skewed`,R`symmetric`,R`uniform`], correct:0, exp:R`p < 0.5 → right skewed; p = 0.5 symmetric; p > 0.5 left skewed.`},
{q:R`Poisson with λ = 4. Standard deviation?`, opts:[R`2`,R`4`,R`16`,R`0.5`], correct:0, exp:R`σ = √λ = 2.`},
{q:R`Poisson with λ = 2. P(X = 0)?`, opts:[R`0.135`,R`0.271`,R`0.000`,R`0.500`], correct:0, exp:R`e^−2 · 2⁰/0! = 0.135.`},
{q:R`When may a binomial be approximated by a Poisson distribution?`, opts:[R`n ≥ 100 and np ≤ 10`,R`n ≥ 30 and np ≥ 10`,R`np ≥ 5 and n(1−p) ≥ 5`,R`Only when p = 0.5 exactly`], correct:0, exp:R`Rare events: many trials, small expected count. (np ≥ 5 and n(1−p) ≥ 5 is the normal approximation.)`},
{q:R`Drawing 20 from 10,000 items without replacement: is the count of defectives binomial?`, opts:[R`Approximately, since 20 ≤ 5% of 10,000`,R`Exactly, as there is no replacement`,R`No, it is always Poisson`,R`Only if the defect rate is 0.5`], correct:0, exp:R`Without replacement it is approximately binomial if the sample is at most 5% of the population.`}
]},

{id:'st-6', ch:6, title:'The Normal Distribution', examWeight:'Table II areas, z-scores, percentiles (inverse), z_α, normal approximation with continuity correction',
summary:R`A **density curve** describes the distribution of a continuous variable.
- Property 1 :: it is always on or above the horizontal axis
- Property 2 :: the total area under it equals 1
- Areas = percentages :: the percentage of observations in any range equals (at least approximately) the area under the density curve over that range

A variable is **normally distributed** if its distribution has the shape of a normal curve (bell-shaped, determined by $\mu$ and $\sigma$). Heights of female students are an example: the relative-frequency histogram is well fitted by a normal curve. For a normal variable, the percentage of observations in a range equals the area under its normal curve.

The **standard normal distribution** has mean 0 and standard deviation 1. Standardizing a normally distributed variable gives the standard normal distribution:
$$z = \frac{x - \mu}{\sigma}$$
So areas for any normal variable can be read from the standard normal curve.

Properties of the standard normal curve:
- Property 1 :: total area 1
- Property 2 :: it extends indefinitely in both directions, approaching but never touching the axis
- Property 3 :: symmetric about 0
- Property 4 :: almost all the area lies between −3 and 3

**Table II** gives the area under the standard normal curve to the **left** of a z-score (z to two decimals).
- Area to the left of $z$ :: read it directly
- Area to the right of $z$ :: $1 - $ (area to the left)
- Area between $z_1$ and $z_2$ :: left area of $z_2$ − left area of $z_1$

$z_\alpha$ is the z-score with area $\alpha$ to its **right**. Important values: $z_{0.05} = 1.645$, $z_{0.025} = 1.96$ (area 0.975 to its left), $z_{0.01} = 2.326$, $z_{0.005} = 2.576$.

Percentage or probability for a normal variable:
=> Sketch (the normal curve) → Shade (region of interest, mark x-values) → Standardize (z = (x − μ)/σ) → Table II (area for the z-scores)

IQ example: $\mu = 100$, $\sigma = 16$. Between 115 and 140: $z = 0.94$ and $z = 2.50$; area $0.9938 - 0.8264 = 0.1674$, so 16.74% of people have IQs between 115 and 140.

Empirical rule for normal (bell-shaped) variables: about 68% within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$, 99.7% within $\mu \pm 3\sigma$.

Observations for a given percentage (inverse problem):
=> Sketch (the normal curve) → Shade (region of interest) → Table II backwards (find the z-score for the area) → Back-transform (x = μ + z·σ)

Example: the IQ that marks the top 10%: area to the left 0.90 → $z = 1.28$ → $x = 100 + 1.28 \cdot 16 = 120.48$.

**Assessing normality.** Plot the ordered data against normal scores (normal probability plot).
- Roughly linear :: assume the variable is approximately normally distributed
- Not roughly linear :: assume it is not
- Interpretation :: loosely for small samples, strictly for large samples. Adjusted gross incomes (12 values, 7.8 … 93.1) give a curved plot: incomes are not normal (right skewed)

**Normal approximation to the binomial.**
=> Find n and p → Check (np ≥ 5 and n(1 − p) ≥ 5) → Parameters (μ = np, σ = √(np(1 − p))) → Continuity correction (±0.5, then normal-curve area)

Continuity correction: each binomial value $x$ is the bar from $x - 0.5$ to $x + 0.5$. So $P(X = 8) \approx$ area between 7.5 and 8.5, $P(X \le 8) \approx$ area left of 8.5, $P(X \ge 8) \approx$ area right of 7.5.`,
cards:[
{q:R`Two basic properties of density curves`, a:R`Always on or above the horizontal axis; total area under the curve = 1.`},
{q:R`Standard normal distribution`, a:R`Normal with mean 0 and standard deviation 1. Any normal $x$ becomes standard normal via $z = (x-\mu)/\sigma$.`},
{q:R`What does Table II give?`, a:R`The area under the standard normal curve to the LEFT of $z$. Right area = 1 − left; between = difference of left areas.`},
{q:R`$z_\alpha$ notation; $z_{0.05}$ and $z_{0.025}$`, a:R`$z_\alpha$ has area $\alpha$ to its right. $z_{0.05} = 1.645$, $z_{0.025} = 1.96$.`},
{q:R`IQ μ = 100, σ = 16: share between 115 and 140?`, a:R`z = 0.94 and 2.50 → 0.9938 − 0.8264 = 0.1674 (16.74%).`},
{q:R`How do you find the x-value for a given percentage?`, a:R`Sketch, shade, find z for the area in Table II (backwards), then $x = \mu + z\sigma$.`},
{q:R`Normal probability plot — interpretation`, a:R`Roughly linear → approximately normal; clearly curved → not normal. Loosely for small, strictly for large samples.`},
{q:R`Normal approximation to the binomial — conditions and parameters`, a:R`$np \ge 5$ and $n(1-p) \ge 5$; $\mu = np$, $\sigma = \sqrt{np(1-p)}$; use the continuity correction.`},
{q:R`Continuity correction for $P(X \le 8)$ and $P(X = 8)$`, a:R`$P(X \le 8)$: area left of 8.5. $P(X = 8)$: area between 7.5 and 8.5.`}
],
quiz:[
{q:R`Area under the standard normal curve to the left of z = 1.00?`, opts:[R`0.8413`,R`0.1587`,R`0.6826`,R`0.3413`], correct:0, exp:R`Table II gives left areas: 0.8413.`},
{q:R`Area to the right of z = 1.96?`, opts:[R`0.0250`,R`0.9750`,R`0.0500`,R`0.4750`], correct:0, exp:R`1 − 0.9750 = 0.0250, which is why z₀.₀₂₅ = 1.96.`},
{q:R`$z_{0.05}$ equals…`, opts:[R`1.645`,R`1.960`,R`2.326`,R`0.050`], correct:0, exp:R`Area 0.05 to the right ↔ 0.95 to the left → 1.645.`},
{q:R`Heights: μ = 64, σ = 2.5. z-score of 69?`, opts:[R`2.00`,R`5.00`,R`−2.00`,R`0.50`], correct:0, exp:R`(69 − 64)/2.5 = 2.`},
{q:R`IQ μ = 100, σ = 16. Percentage with IQ above 116?`, opts:[R`15.87%`,R`84.13%`,R`34.13%`,R`2.28%`], correct:0, exp:R`z = 1.00, right area 1 − 0.8413 = 0.1587.`},
{q:R`Normal variable: what share lies within μ ± 2σ?`, opts:[R`About 95%`,R`About 68%`,R`At least 75% only`,R`About 99.7%`], correct:0, exp:R`Empirical rule for normal variables.`},
{q:R`IQ μ = 100, σ = 16. Which IQ marks the 90th percentile?`, opts:[R`About 120.5`,R`About 126.3`,R`About 116.0`,R`About 110.0`], correct:0, exp:R`Left area 0.90 → z = 1.28 → 100 + 1.28 · 16 = 120.48.`},
{q:R`A normal probability plot of a sample is clearly curved. Conclusion?`, opts:[R`The variable is not approximately normal`,R`The variable is exactly normal`,R`The sample size is too large`,R`The mean equals the median`], correct:0, exp:R`Only a roughly linear plot supports normality.`},
{q:R`Binomial n = 40, p = 0.1. Normal approximation allowed?`, opts:[R`No, np = 4 is below 5`,R`Yes, n is at least 30`,R`Yes, n(1 − p) = 36 ≥ 5`,R`No, p must be exactly 0.5`], correct:0, exp:R`Both np and n(1−p) must be at least 5.`},
{q:R`Normal approximation: P(X ≥ 30) uses the area…`, opts:[R`to the right of 29.5`,R`to the right of 30.5`,R`to the left of 30.5`,R`between 29.5 and 30.5`], correct:0, exp:R`The bar for x = 30 starts at 29.5, so "30 or more" starts there.`}
]},

{id:'st-7', ch:7, title:'Sampling Distribution of the Sample Mean', examWeight:'μ of x̄, σ/√n, when x̄ is normal, central limit theorem; probabilities for x̄',
summary:R`**Sampling error** is the error that results from using a sample to estimate a population characteristic (e.g. $\bar x$ for $\mu$).

The **sampling distribution of the sample mean** is the distribution of the variable $\bar x$ for a given sample size: the distribution of all possible sample means.

Basketball example: heights of the five starting players A 76, B 78, C 79, D 81, E 86 inches, $\mu = 80$. For $n = 2$ there are 10 possible samples, with means from 77.0 (A, B) to 83.5 (D, E). As $n$ grows the possible means cluster closer to $\mu$:
- Share of sample means within 1 inch of μ :: n = 1: 40%, n = 2: 30%, n = 3: 50%, n = 4: 80%, n = 5: 100%
- Key fact :: the larger the sample size, the smaller the sampling error tends to be

**Mean and standard deviation of $\bar x$** for samples of size $n$:
- Mean of the sample mean :: $\mu_{\bar x} = \mu$
- Standard deviation of the sample mean (standard error) :: $\sigma_{\bar x} = \frac{\sigma}{\sqrt n}$

So quadrupling the sample size halves $\sigma_{\bar x}$. IQs with $\sigma = 16$: for $n = 4$, $\sigma_{\bar x} = 8$; for $n = 16$, $\sigma_{\bar x} = 4$.

**Shape of the sampling distribution.**
- Normal population :: if $x$ is normally distributed with mean $\mu$ and standard deviation $\sigma$, then $\bar x$ is normally distributed with mean $\mu$ and standard deviation $\sigma/\sqrt n$, for every sample size (1000 samples of four IQs give a normal histogram)
- Central limit theorem (CLT) :: for a relatively large sample size, $\bar x$ is approximately normally distributed, whatever the distribution of the variable; the approximation improves as $n$ grows. Household size is reverse-J-shaped, yet 1000 sample means for $n = 30$ look normal

Summary of the sampling distribution of $\bar x$:
- Mean :: $\mu_{\bar x} = \mu$
- Standard deviation :: $\sigma_{\bar x} = \sigma/\sqrt n$
- If $x$ is normal :: $\bar x$ is normal for any $n$
- If $n$ is large :: $\bar x$ is approximately normal for any distribution of $x$

To find a probability for $\bar x$, standardize with the standard error:
$$z = \frac{\bar x - \mu}{\sigma/\sqrt n}$$
Example: IQ, $n = 16$: $P(\bar x > 104)$: $z = (104-100)/4 = 1.00$, area $1 - 0.8413 = 0.1587$.`,
cards:[
{q:R`Sampling error`, a:R`The error from using a sample to estimate a population characteristic, e.g. $\bar x$ instead of $\mu$.`},
{q:R`Sampling distribution of the sample mean`, a:R`The distribution of $\bar x$ over all possible samples of a given size.`},
{q:R`Mean and standard deviation of $\bar x$`, a:R`$\mu_{\bar x} = \mu$ and $\sigma_{\bar x} = \sigma/\sqrt n$.`},
{q:R`Sample size and sampling error`, a:R`The larger the sample size, the smaller the sampling error tends to be.`},
{q:R`Central limit theorem`, a:R`For a relatively large sample size, $\bar x$ is approximately normal regardless of the distribution of $x$; better with larger $n$.`},
{q:R`When is $\bar x$ exactly normal?`, a:R`When the variable $x$ itself is normally distributed — for every sample size.`},
{q:R`IQ σ = 16: $\sigma_{\bar x}$ for n = 4 and n = 16?`, a:R`16/2 = 8 and 16/4 = 4.`},
{q:R`z-score for a sample mean`, a:R`$z = (\bar x - \mu)/(\sigma/\sqrt n)$.`}
],
quiz:[
{q:R`Population σ = 20, samples of size 25. Standard deviation of x̄?`, opts:[R`4`,R`0.8`,R`20`,R`100`], correct:0, exp:R`20/√25 = 4.`},
{q:R`To halve the standard deviation of x̄, the sample size must be…`, opts:[R`quadrupled`,R`doubled`,R`halved`,R`squared`], correct:0, exp:R`σ/√(4n) = (σ/√n)/2.`},
{q:R`The mean of the sampling distribution of x̄ equals…`, opts:[R`the population mean μ`,R`μ divided by √n`,R`the sample median`,R`the sample standard deviation`], correct:0, exp:R`μ_x̄ = μ.`},
{q:R`A population is strongly skewed. Samples of size 50 are taken. The distribution of x̄ is…`, opts:[R`approximately normal (CLT)`,R`just as skewed as the population`,R`exactly normal`,R`uniform`], correct:0, exp:R`The central limit theorem applies for large samples.`},
{q:R`A population is normal. Samples of size 3 are taken. The distribution of x̄ is…`, opts:[R`normal`,R`approximately normal only`,R`unknown, n is too small`,R`skewed`], correct:0, exp:R`Normal populations give normal x̄ for every sample size.`},
{q:R`IQ μ = 100, σ = 16, n = 16. P(x̄ > 104)?`, opts:[R`0.1587`,R`0.4013`,R`0.8413`,R`0.0228`], correct:0, exp:R`σ_x̄ = 4, z = 1.00, right area 0.1587. (0.4013 would ignore √n.)`},
{q:R`Five basketball players (μ = 80). Samples of size 2 without replacement — how many possible samples?`, opts:[R`10`,R`25`,R`20`,R`5`], correct:0, exp:R`₅C₂ = 10.`},
{q:R`What does the central limit theorem NOT say?`, opts:[R`That x is normal for large samples`,R`That x̄ is roughly normal for large n`,R`That the approximation improves with n`,R`That it holds for any population shape`], correct:0, exp:R`The CLT is about the sample mean x̄, not about the variable x itself.`}
]},

{id:'st-8', ch:8, title:'Confidence Intervals for One Population Mean', examWeight:'z-interval (σ known), t-interval (σ unknown), margin of error, required sample size, interpretation',
summary:R`- Point estimate :: the value of a statistic used to estimate a parameter (e.g. $\bar x$ for $\mu$)
- Confidence interval (CI) :: an interval of numbers obtained from a point estimate
- Confidence level :: the confidence that the parameter lies in the interval
- Confidence-interval estimate :: the confidence level together with the interval

Interpretation: with 95% confidence, about 95% of all possible samples give an interval that contains $\mu$. In the slide example, 25 samples of 36 new mobile homes produced 25 95%-intervals; 24 contained $\mu$, one (sample 15) did not.

**σ known: one-mean z-interval.** About 95% of all samples have means within 2 (exactly 1.96) standard deviations $\sigma/\sqrt n$ of $\mu$; in general $100(1-\alpha)\%$ lie within $z_{\alpha/2}$ standard deviations.

Assumptions: simple random sample; normal population or large sample; $\sigma$ known.
=> Confidence level 1 − α → Find z_α/2 (Table II) → Interval (x̄ ± z_α/2 · σ/√n) → Interpret

Common values: 90% → $z_{0.05} = 1.645$, 95% → $z_{0.025} = 1.96$, 99% → $z_{0.005} = 2.576$. The interval is exact for normal populations and approximately correct for large samples from non-normal populations.

When to use the z-interval:
- Small samples (n < 15) :: only if the variable is normal or very close to it
- Moderate samples (15 ≤ n < 30) :: unless there are outliers or the variable is far from normal
- Large samples (n ≥ 30) :: essentially without restriction; if outliers are present and their removal is not justified, compare the intervals with and without them; if the effect is substantial, use another procedure or take another sample
- Justified removal :: if removing the outliers is justified and the remaining data fit the conditions above, the procedure can be used

Fundamental principle of data analysis: before any inference procedure, look at the sample data. If a condition appears violated, do not apply the procedure; use a more appropriate one if it exists. (Ages of 50 people in the labor force are checked this way before computing a z-interval.)

**Margin of error and sample size.**
- Margin of error :: $E = z_{\alpha/2}\cdot\frac{\sigma}{\sqrt n}$; the interval is $\bar x \pm E$ and has length $2E$
- Confidence vs accuracy :: for fixed $n$, a lower confidence level gives a smaller $E$ (better accuracy)
- Sample size vs accuracy :: for a fixed confidence level, a larger $n$ gives a smaller $E$
- Required sample size :: $n = \left(\frac{z_{\alpha/2}\cdot\sigma}{E}\right)^2$, always rounded **up** to the next whole number

**σ unknown: one-mean t-interval.** If $x$ is normal, the studentized version
$$t = \frac{\bar x - \mu}{s/\sqrt n}$$
has the t-distribution with $df = n - 1$ degrees of freedom.

Properties of t-curves:
- Property 1 :: total area 1
- Property 2 :: they extend indefinitely, approaching but never touching the axis
- Property 3 :: symmetric about 0
- Property 4 :: the more degrees of freedom, the more they look like the standard normal curve (t-curves have fatter tails, so $t_{\alpha/2} > z_{\alpha/2}$)

Assumptions: simple random sample; normal population or large sample; $\sigma$ **unknown** (the slide prints "σ known" here — a typo; with σ known you would use the z-interval).
=> Confidence level 1 − α → Find t_α/2 (Table IV, df = n − 1) → Interval (x̄ ± t_α/2 · s/√n) → Interpret

Pickpocket losses (25 offenses): the normal probability plot is roughly linear, so the t-interval is appropriate. With $\bar x = 515.72$, $s = 259.64$, $df = 24$, $t_{0.025} = 2.064$: $515.72 \pm 2.064 \cdot 259.64/5 = 515.72 \pm 107.18$, i.e. 408.54 to 622.90 (95%).

Chicken consumption: the normal probability plot of the original data shows an outlier; after removing it the plot is roughly linear. If removal is not justified, compare the intervals with and without the outlier.`,
cards:[
{q:R`Point estimate vs confidence interval`, a:R`Point estimate: a single statistic (e.g. $\bar x$). Confidence interval: an interval from the point estimate with a stated confidence level.`},
{q:R`Meaning of "95% confidence"`, a:R`About 95% of all possible samples produce an interval that contains $\mu$ (24 of 25 in the mobile-homes example).`},
{q:R`z-interval: assumptions and formula`, a:R`SRS, normal population or large sample, $\sigma$ known. $\bar x \pm z_{\alpha/2}\,\sigma/\sqrt n$.`},
{q:R`$z_{\alpha/2}$ for 90%, 95%, 99%`, a:R`1.645, 1.96, 2.576.`},
{q:R`Margin of error`, a:R`$E = z_{\alpha/2}\,\sigma/\sqrt n$; half the length of the interval.`},
{q:R`Required sample size`, a:R`$n = (z_{\alpha/2}\sigma/E)^2$, rounded UP.`},
{q:R`Effect of confidence level and sample size on E`, a:R`Lower confidence → smaller E. Larger n → smaller E.`},
{q:R`t-interval: assumptions, formula, df`, a:R`SRS, normal population or large sample, $\sigma$ unknown. $\bar x \pm t_{\alpha/2}\,s/\sqrt n$, $df = n-1$.`},
{q:R`Four properties of t-curves`, a:R`Area 1; never touch the axis; symmetric about 0; approach the standard normal curve as df grows.`},
{q:R`Fundamental principle of data analysis`, a:R`Look at the sample data first; if a condition of the procedure seems violated, do not use it — use a more appropriate procedure.`},
{q:R`z-interval sample-size guidelines`, a:R`n < 15: only (near-)normal data. 15–30: unless outliers or far from normal. n ≥ 30: essentially always; check the effect of outliers.`}
],
quiz:[
{q:R`x̄ = 50, σ = 10, n = 25, 95% confidence. z-interval?`, opts:[R`46.08 to 53.92`,R`46.71 to 53.29`,R`30.40 to 69.60`,R`48.04 to 51.96`], correct:0, exp:R`E = 1.96 · 10/5 = 3.92.`},
{q:R`Which is the margin of error of a z-interval?`, opts:[R`z_α/2 · σ/√n`,R`z_α · σ/n`,R`t_α/2 · σ · √n`,R`(z_α/2 · σ/E)²`], correct:0, exp:R`E = z_α/2 · σ/√n; the last option is the sample-size formula.`},
{q:R`σ = 12, E = 2, 95% confidence. Required sample size?`, opts:[R`139`,R`138`,R`12`,R`97`], correct:0, exp:R`(1.96 · 12/2)² = 138.3 → round UP to 139.`},
{q:R`Keeping n fixed, you raise the confidence level from 95% to 99%. The interval becomes…`, opts:[R`wider`,R`narrower`,R`unchanged`,R`centered elsewhere`], correct:0, exp:R`Higher confidence → larger z → larger margin of error.`},
{q:R`σ is unknown, n = 20, data roughly normal. Which procedure?`, opts:[R`t-interval with df = 19`,R`z-interval with σ = s`,R`t-interval with df = 20`,R`No interval is possible`], correct:0, exp:R`σ unknown → t with df = n − 1.`},
{q:R`n = 25, 95% t-interval. Critical value from Table IV?`, opts:[R`2.064`,R`2.060`,R`1.960`,R`1.711`], correct:0, exp:R`df = 24, t₀.₀₂₅ = 2.064 (2.060 is df = 25; 1.711 is t₀.₀₅).`},
{q:R`As the degrees of freedom grow, t-curves…`, opts:[R`approach the standard normal curve`,R`become more right skewed`,R`get fatter tails`,R`move their center to the right`], correct:0, exp:R`Property 4 of t-curves.`},
{q:R`A 95% CI for μ is 408.5 to 622.9. Correct interpretation?`, opts:[R`We are 95% confident μ lies in this interval`,R`95% of all data lie in this interval`,R`μ lies in it with probability 0.95 for sure`,R`95% of sample means equal 515.7`], correct:0, exp:R`The confidence refers to the method: 95% of such intervals contain μ.`},
{q:R`n = 10, the data contain a clear outlier, σ known. What do you do?`, opts:[R`Not use the z-interval as is`,R`Use the z-interval anyway`,R`Use a t-interval with df = 10`,R`Double the confidence level`], correct:0, exp:R`Small samples need (near-)normal data without outliers; apply the fundamental principle of data analysis.`},
{q:R`Doubling the sample size changes the margin of error by the factor…`, opts:[R`1/√2 ≈ 0.71`,R`1/2 = 0.50`,R`2 (it doubles)`,R`√2 ≈ 1.41`], correct:0, exp:R`E ∝ 1/√n.`}
]}
];

/* ============================================================ STATISTICS CHEAT SHEET ============================================================ */
const ST_CHEAT = [
{h:"Sampling & design", items:[
R`Systematic: $m = \lfloor N/n \rfloor$, start $k \in [1, m]$, then $k + m, k + 2m, \dots$ · Cluster: sample clusters, take all · Stratified: $n_h = n \cdot N_h/N$`,
R`Principles: control · randomization · replication · Completely randomized vs randomized block (randomize within blocks)`]},
{h:"Organizing data", items:[
R`Single-value (few discrete values) · limit (whole numbers) · cutpoint (decimals) · class mark = avg of limits`,
R`Bar chart: bars apart · histogram: bars touch · shapes: right skewed tail right, mean > median`]},
{h:"Descriptive measures", items:[
R`Median at $(n+1)/2$ · $s = \sqrt{\frac{\sum x^2 - (\sum x)^2/n}{n-1}}$ · $\sigma = \sqrt{\frac{\sum x^2}{N} - \mu^2}$`,
R`Chebyshev: $\ge 1 - 1/k^2$ · empirical 68 / 95 / 99.7 · $z = (x - \mu)/\sigma$`,
R`Quartiles: odd $n$ → median in both halves · $IQR = Q_3 - Q_1$ · limits $Q_1 - 1.5 IQR$, $Q_3 + 1.5 IQR$`]},
{h:"Probability", items:[
R`$P(A \text{ or } B) = P(A) + P(B) - P(A \& B)$ · $P(E) = 1 - P(\text{not } E)$`,
R`$P(B|A) = P(A \& B)/P(A)$ · $P(A \& B) = P(A)P(B|A)$ · independent: $P(A \& B) = P(A)P(B)$`,
R`Total: $P(B) = \sum P(A_j)P(B|A_j)$ · Bayes: $P(A_i|B) = P(A_i)P(B|A_i)/P(B)$`,
R`$_mP_r = \frac{m!}{(m-r)!}$ · $_mC_r = \frac{m!}{r!(m-r)!}$ · samples: $_NC_n$`]},
{h:"Discrete distributions", items:[
R`$\mu = \sum x P(x)$ · $\sigma = \sqrt{\sum x^2 P(x) - \mu^2}$`,
R`Binomial: $\binom{n}{x}p^x(1-p)^{n-x}$ · $\mu = np$ · $\sigma = \sqrt{np(1-p)}$ · w/o replacement OK if $n \le 5\% N$`,
R`Poisson: $e^{-\lambda}\lambda^x/x!$ · $\mu = \lambda$ · $\sigma = \sqrt\lambda$ · approx. binomial if $n \ge 100$, $np \le 10$`]},
{h:"Normal distribution", items:[
R`Table II = area LEFT of $z$ · right = 1 − left · between = difference`,
R`$z_{0.05} = 1.645$ · $z_{0.025} = 1.96$ · $z_{0.01} = 2.326$ · $z_{0.005} = 2.576$`,
R`Percentile: area → $z$ → $x = \mu + z\sigma$ · Binomial approx: $np, n(1-p) \ge 5$, continuity ±0.5`]},
{h:"Sampling distribution & CIs", items:[
R`$\mu_{\bar x} = \mu$ · $\sigma_{\bar x} = \sigma/\sqrt n$ · normal $x$ → normal $\bar x$ · large $n$ → CLT`,
R`z-interval ($\sigma$ known): $\bar x \pm z_{\alpha/2}\sigma/\sqrt n$ · $E = z_{\alpha/2}\sigma/\sqrt n$ · $n = (z_{\alpha/2}\sigma/E)^2$ ↑`,
R`t-interval ($\sigma$ unknown): $\bar x \pm t_{\alpha/2} s/\sqrt n$, $df = n - 1$`]}
];

/* ============================================================ TABLE IV (t) — exactly as in the handout ============================================================ */
// [df, t0.10, t0.05, t0.025, t0.01, t0.005]
const ST_TTABLE = [[1,3.078,6.314,12.706,31.821,63.657],[2,1.886,2.92,4.303,6.965,9.925],[3,1.638,2.353,3.182,4.541,5.841],[4,1.533,2.132,2.776,3.747,4.604],[5,1.476,2.015,2.571,3.365,4.032],[6,1.44,1.943,2.447,3.143,3.707],[7,1.415,1.895,2.365,2.998,3.499],[8,1.397,1.86,2.306,2.896,3.355],[9,1.383,1.833,2.262,2.821,3.25],[10,1.372,1.812,2.228,2.764,3.169],[11,1.363,1.796,2.201,2.718,3.106],[12,1.356,1.782,2.179,2.681,3.055],[13,1.35,1.771,2.16,2.65,3.012],[14,1.345,1.761,2.145,2.624,2.977],[15,1.341,1.753,2.131,2.602,2.947],[16,1.337,1.746,2.12,2.583,2.921],[17,1.333,1.74,2.11,2.567,2.898],[18,1.33,1.734,2.101,2.552,2.878],[19,1.328,1.729,2.093,2.539,2.861],[20,1.325,1.725,2.086,2.528,2.845],[21,1.323,1.721,2.08,2.518,2.831],[22,1.321,1.717,2.074,2.508,2.819],[23,1.319,1.714,2.069,2.5,2.807],[24,1.318,1.711,2.064,2.492,2.797],[25,1.316,1.708,2.06,2.485,2.787],[26,1.315,1.706,2.056,2.479,2.779],[27,1.314,1.703,2.052,2.473,2.771],[28,1.313,1.701,2.048,2.467,2.763],[29,1.311,1.699,2.045,2.462,2.756],[30,1.31,1.697,2.042,2.457,2.75],[31,1.309,1.696,2.04,2.453,2.744],[32,1.309,1.694,2.037,2.449,2.738],[33,1.308,1.692,2.035,2.445,2.733],[34,1.307,1.691,2.032,2.441,2.728],[35,1.306,1.69,2.03,2.438,2.724],[36,1.306,1.688,2.028,2.434,2.719],[37,1.305,1.687,2.026,2.431,2.715],[38,1.304,1.686,2.024,2.429,2.712],[39,1.304,1.685,2.023,2.426,2.708],[40,1.303,1.684,2.021,2.423,2.704],[41,1.303,1.683,2.02,2.421,2.701],[42,1.302,1.682,2.018,2.418,2.698],[43,1.302,1.681,2.017,2.416,2.695],[44,1.301,1.68,2.015,2.414,2.692],[45,1.301,1.679,2.014,2.412,2.69],[46,1.3,1.679,2.013,2.41,2.687],[47,1.3,1.678,2.012,2.408,2.685],[48,1.299,1.677,2.011,2.407,2.682],[49,1.299,1.677,2.01,2.405,2.68],[50,1.299,1.676,2.009,2.403,2.678],[51,1.298,1.675,2.008,2.402,2.676],[52,1.298,1.675,2.007,2.4,2.674],[53,1.298,1.674,2.006,2.399,2.672],[54,1.297,1.674,2.005,2.397,2.67],[55,1.297,1.673,2.004,2.396,2.668],[56,1.297,1.673,2.003,2.395,2.667],[57,1.297,1.672,2.002,2.394,2.665],[58,1.296,1.672,2.002,2.392,2.663],[59,1.296,1.671,2.001,2.391,2.662],[60,1.296,1.671,2.0,2.39,2.66],[61,1.296,1.67,2.0,2.389,2.659],[62,1.295,1.67,1.999,2.388,2.657],[63,1.295,1.669,1.998,2.387,2.656],[64,1.295,1.669,1.998,2.386,2.655],[65,1.295,1.669,1.997,2.385,2.654],[66,1.295,1.668,1.997,2.384,2.652],[67,1.294,1.668,1.996,2.383,2.651],[68,1.294,1.668,1.995,2.382,2.65],[69,1.294,1.667,1.995,2.382,2.649],[70,1.294,1.667,1.994,2.381,2.648],[71,1.294,1.667,1.994,2.38,2.647],[72,1.293,1.666,1.993,2.379,2.646],[73,1.293,1.666,1.993,2.379,2.645],[74,1.293,1.666,1.993,2.378,2.644],[75,1.293,1.665,1.992,2.377,2.643],[80,1.292,1.664,1.99,2.374,2.639],[85,1.292,1.663,1.988,2.371,2.635],[90,1.291,1.662,1.987,2.368,2.632],[95,1.291,1.661,1.985,2.366,2.629],[100,1.29,1.66,1.984,2.364,2.626],[200,1.286,1.653,1.972,2.345,2.601],[300,1.284,1.65,1.968,2.339,2.592],[400,1.284,1.649,1.966,2.336,2.588],[500,1.283,1.648,1.965,2.334,2.586],[600,1.283,1.647,1.964,2.333,2.584],[700,1.283,1.647,1.963,2.332,2.583],[800,1.283,1.647,1.963,2.331,2.582],[900,1.282,1.647,1.963,2.33,2.581],[1000,1.282,1.646,1.962,2.33,2.581],[2000,1.282,1.646,1.961,2.328,2.578]];
