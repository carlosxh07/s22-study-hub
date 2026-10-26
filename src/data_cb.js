/* ============================================================ FUNDAMENTALS OF CONSUMER BEHAVIOR DATA (Prof. Dr. Franziska Krause, Fall Term 2026) ============================================================ */
// Plain text (no KaTeX: never use the dollar sign, write USD). Summary markup: "- " bullets, "Term :: Description" vocab rows, "=> A (desc) → B" flows, **bold**.
// Topics: lectures (kind 'lec', id cb-N) and the assigned readings (kind 'read', id cb-rN = reading for lecture session N).
// Readings are exam-relevant ("Readings & company presentations are relevant and will be included in the exam").
// New lecture slides: add a topic cb-N, its areas to CB_AREAS, items to CB_MC / CB_OPEN and set `topic` in CB_SESSIONS.
const PLAN_EXAM_CB = new Date(2026,11,16); // written exam 16.12.2026 (slot 13:30–16:00, shared with Basic Principles of Marketing)

const CB_SESSIONS = [
  {n:1, date:'Mon 19 Oct', title:'LS 1 · Consumer Decision Making 1', topic:'cb-1'},
  {n:2, date:'21–23 Oct', title:'Experiment part I on campus (no class) — Burg, Room Bangalore; part II online 2–15 Nov'},
  {n:3, date:'Mon 26 Oct', title:'LS 2 · Irrational Decision Making 2, Personas & Customer Journeys', reading:'cb-r2'},
  {n:4, date:'Fri 30 Oct', title:'LS 3 · Perception & Sensory Marketing', reading:'cb-r3'},
  {n:5, date:'Wed 4 Nov', title:'LS 4 · Marketing Analytics', reading:'cb-r4'},
  {n:'6+7', date:'Tue 10 Nov', title:'Guest talk: "The Power of A and B testing" — Florian Knieß, co-founder & CRO/CMO, Aybee (Schloss Forum)'},
  {n:8, date:'Wed 11 Nov', title:'LS 5 · Consumer Learning', reading:'cb-r5'},
  {n:9, date:'Tue 17 Nov', title:'Guest talk: "The Case of Gaming: Using Customer Data to Define Strategy" — Hendrik Walter, Andreas Teller, Matthias Mück, OC&C (Schloss Forum)'},
  {n:10, date:'Wed 18 Nov', title:'LS 6 · Affect, Attitudes & Motivation', reading:'cb-r6'},
  {n:'11+12', date:'Mon 23 Nov', title:'Guest talk: "The Impact of Technology & AI on Consumer Behavior" — Dr. Philip Bradonjic, Oracle (Schloss Forum)'},
  {n:13, date:'Wed 2 Dec', title:'LS 7 · Intersection of Technology & Consumer Choice', reading:'cb-r7'},
  {n:14, date:'Tue 8 Dec', title:'LS 8 · Exam prep & Q&A session'},
  {n:15, date:'Wed 16 Dec', title:'WRITTEN EXAM'}
];

const CB_AREAS = [
  {id:'why', lec:'cb-1', label:'Influences, segmentation & why CB matters'},
  {id:'types', lec:'cb-1', label:'Types of decision making'},
  {id:'heur', lec:'cb-1', label:'Heuristics (habitual shortcuts)'},
  {id:'bias', lec:'cb-1', label:'Biases'},
  {id:'irr', lec:'cb-r2', label:'Beliefs, goals & pressures'},
  {id:'sens', lec:'cb-r3', label:'Sensory marketing'},
  {id:'ab', lec:'cb-r4', label:'A/B tests & targeting'},
  {id:'star', lec:'cb-r5', label:'Loyalty & learning (Starbucks)'},
  {id:'emo', lec:'cb-r6', label:'Emotional motivators'},
  {id:'ai', lec:'cb-r7', label:'AI vs human recommendations'}
];

const CB_TOPICS = [
/* ------------------------------------------------------------ LS 1 ------------------------------------------------------------ */
{id:'cb-1', kind:'lec', ch:1, title:'Consumer Decision Making 1', date:'19 Oct 2026',
examWeight:'Definition of consumer behaviour, why it matters (interchangeable brands), the three types of decision making, the impulsive-to-extensive continuum, the five cognitive stages, heuristics and biases — plus the course and grading facts',
summary:R`**Learning outcomes of session 1:**
- Factors :: consumers are influenced by multiple factors, and marketers need to understand them when segmenting the market
- Process :: consumers walk through a decision-making process with three categories: cognitive, habitual, affective
- Cognitive decisions :: the outcome of a series of stages that ends with selecting one product over competing products
- Shortcuts :: we cannot always go through complex decision processes, so we use shortcuts
- Heuristics :: knowing them makes it easier to make smart decisions
- Biases :: many biases exist, and they can lead to better or worse decisions

**Why do people buy a Porsche?** Ferdinand Porsche: "We build cars that nobody needs but everybody wants." The purchase is not explained by need — consumer behaviour is about the desires, meanings and motives behind a choice.

**What influences consumer behaviour?** The classic answers are demographic and socio-economic: income, age, lifestyle, social class, family structure, geography, gender. Marketers use these to split the market into groups — **market segmentation**.

**Same market segment?** King Charles III and Ozzy Osbourne are both male, born in 1948, raised in the UK, married twice, live in a castle and are wealthy and famous. On demographics they are identical — yet they buy, live and consume completely differently. Demographics alone do not explain behaviour.

That is why the course adds the **psychological factors**: learning, preferences, motivation, attitudes, perception, and the problems and challenges a consumer faces.

**Why is this important?**
- There is an increasing need to understand consumers
- Creating customer insight is essential
- Product similarity is driving marketing communication

**Interchangeability of brands and products.**
- Fact I :: about 85% of all products tested by Stiftung Warentest are rated "good"
- Fact II :: 64% of German consumers perceive brands as interchangeable (Stiftung Warentest, 2022)
- Examples :: smartphones of different brands look almost the same; coffee packs of different brands look and promise almost the same

**Transformation of competition.** When products are interchangeable, consumers show lower interest in product information, lower loyalty and become price-oriented. Competition therefore shifts **from product competition to communication competition**: brands win through how they communicate and which meaning they create, not through product features.

**Definition.** Consumer behaviour is the process whereby individuals decide **what, when, where, how and from whom** to purchase goods or services.

**Focus of the course:** the interaction between the **individual** (consumer) and the **company** — both directions, with an academic and an applied focus.

**Learning outcomes of the course:** improve your understanding of consumer behaviour; learn about internal and external influences on consumers; extend your theoretical knowledge for making descriptive and prognostic statements on consumer behaviour.

**Basics of consumer behaviour (model).** The consumer is exposed to stimuli, which pass a filter into the person:
=> Stimuli (emotional, cognitive, physical) → Filter (only part of the stimuli gets through) → Inner processes (cognitive and activating) → Decision process → Behaviour
- Cognitive processes :: reception, perception and evaluation, learning, memory and retrieval (short-term and long-term memory)
- Activating processes :: emotion, motivation, attitude

**Additional contents of the course:** customer journeys, the personas concept, consumer learning, social media, customer analytics.

**Three types of consumer decision making:**
- Cognitive :: deliberate, rational, sequential
- Habitual :: behavioural, unconscious, automatic
- Affective :: emotional, instantaneous

**Different types of decisions (Katona 1960, Krugman 1967).** Katona orders four decision types by the extent of cognitive control; Krugman’s involvement runs from low to high along the same axis:
- Impulsive decisions :: lowest cognitive control, e.g. a chocolate bar at the checkout
- Habitualised decisions :: e.g. the usual coffee brand, the usual petrol station
- Limited decisions :: some deliberate comparison, e.g. perfume, sunglasses
- Extensive decisions :: highest cognitive control and involvement, e.g. a smartphone, a car

Limited and extensive decisions are the **cognitive buying decisions**.

**From impulsive to extensive buying decisions.** Four dimensions decide where a purchase lies:
- Perceived product differences :: low → impulsive · high → extensive
- Frequency of the same buying decision :: high → impulsive · low → extensive
- Time pressure during the buying process :: high → impulsive · low → extensive
- Involvement :: low → impulsive · high → extensive

**Cognitive decision making** runs through five stages:
=> Recognition of need → Information search → Evaluation of alternatives → Purchase decision → Post-purchase evaluation

**Habitual decision making.** We cannot go through this process for each decision — we would spend our entire lives deciding. Habitual choices are made with little or no conscious effort, using shortcuts:
- Heuristics :: mental rules of thumb that lead to a speedy decision
- Usually helpful :: most of the time heuristics are extremely useful
- But :: they can also lead to errors in judgment = irrational decisions

**Typical heuristics on the slides:**
- Covariation :: the perceived association between events that may or may not actually influence one another — consumers infer quality from one cue, e.g. a solid-feeling car interior or the sound of the door is taken as a sign of a well-built car
- Country of origin :: the origin works as a quality signal — "High quality, made in Germany"
- Familiar brand names :: a known brand is chosen because it is familiar and therefore feels safe; well-known logos act as a shortcut for trust
- Higher prices :: price is used as a signal for quality ("higher price = better product", price-quality inference)

**Biases in decision making:**
- Loss aversion :: losses weigh more than equal gains — losing USD 10 on the street hurts more than finding USD 10 pleases (the value curve is steeper for losses)
- Mere exposure effect :: the more often we are exposed to something, the more we like it — familiarity alone increases liking ("not sure if attractive or mere exposure")
- Sunk cost fallacy :: we continue something because of what we already invested, although it no longer makes sense — staying in a terrible movie because the tickets were expensive

**Course facts.**
- Grading :: 90 points: written exam 75 (multiple choice 60 + open questions 15) + experiment participation 7.5 + guest lecture participation 7.5
- MC part :: 24 questions with 5 statements each, 2.5 points per question, 1–5 statements can be correct · 5/5 → 2.5, 4/5 → 1.5, 3/5 → 1, 2/5 → 0.5, 1/5 → 0.25, 0/5 → 0
- Exam :: 16.12.2026, recap and Q&A on 08.12.2026 · readings and company presentations are exam-relevant
- Literature :: most chapters from Michael R. Solomon, "Consumer Behavior: Buying, Having, and Being" (12th edition, 2018)
- Readings :: must be prepared before each session (McKinsey, two Harvard cases, two HBR articles, one California Management Review article)

**Reading for next week:** McKinsey report by Cummings, Dhar and Welch, "Irrational consumption: How consumers really make decisions".`,
cards:[
{q:R`Definition of consumer behaviour`, a:R`The process whereby individuals decide what, when, where, how and from whom to purchase goods or services.`},
{q:R`Why are King Charles III and Ozzy Osbourne on the slide?`, a:R`Identical demographics (male, born 1948, raised in the UK, married twice, castle, wealthy and famous) but completely different behaviour → demographics alone are not enough; psychological factors matter.`},
{q:R`Interchangeability: the two facts`, a:R`About 85% of products tested by Stiftung Warentest are rated "good"; 64% of German consumers perceive brands as interchangeable (2022).`},
{q:R`Transformation of competition`, a:R`Interchangeable products → lower interest in product information, lower loyalty, price-oriented consumers → shift from product competition to communication competition.`},
{q:R`Three types of decision making`, a:R`Cognitive (deliberate, rational, sequential) · habitual (behavioural, unconscious, automatic) · affective (emotional, instantaneous).`},
{q:R`Katona’s four decision types`, a:R`Impulsive, habitualised, limited, extensive — ordered by increasing cognitive control (Krugman: involvement low → high). Limited + extensive = cognitive buying decisions.`},
{q:R`Four dimensions: impulsive vs extensive buying decision`, a:R`Perceived product differences (low → high), frequency of the same decision (high → low), time pressure (high → low), involvement (low → high).`},
{q:R`Five stages of cognitive decision making`, a:R`Recognition of need → information search → evaluation of alternatives → purchase decision → post-purchase evaluation.`},
{q:R`Heuristics`, a:R`Mental rules of thumb used in habitual decisions; usually helpful, but they can cause errors in judgment (irrational decisions). Examples: covariation, country of origin, familiar brand names, higher prices.`},
{q:R`Loss aversion · mere exposure · sunk cost fallacy`, a:R`Losses weigh more than equal gains · repeated exposure alone increases liking · continuing because of past investment (staying in a bad movie because tickets were expensive).`},
{q:R`Basics model: cognitive vs activating processes`, a:R`Cognitive: reception, perception and evaluation, learning, memory and retrieval. Activating: emotion, motivation, attitude. Stimuli (emotional, cognitive, physical) → filter → processes → decision → behaviour.`},
{q:R`Grading of the course`, a:R`90 points: exam 75 (MC 60 = 24 × 2.5, open 15) + experiment 7.5 (both parts, no partial credit) + 3 guest lectures × 2.5 (in person, QR code).`}
],
quiz:[
{q:R`Which definition of consumer behaviour does the course use?`, opts:[R`The process whereby individuals decide what, when, where, how and from whom to purchase goods or services`,R`The sum of all purchases a household makes in one year, measured in money and grouped by product class`,R`The way companies plan their prices, products and promotion to reach the target group in the market`,R`The study of how people react to advertising, measured through recall and recognition after exposure`], correct:0, exp:R`Consumer behaviour is the process whereby individuals decide what, when, where, how and from whom to purchase goods or services. The other options describe spending statistics, the marketing mix and advertising research.`, area:'why'},
{q:R`What does the King Charles III vs Ozzy Osbourne slide show?`, opts:[R`Celebrities are the most effective endorsers for products that are bought by older male consumers in the UK`,R`Identical demographics can go with completely different behaviour, so demographics alone fall short`,R`Wealthy consumers always choose the same brands, which makes them an easy segment`,R`Consumers born in the same year form one generation with shared buying habits`], correct:1, exp:R`Both are male, born in 1948, raised in the UK, married twice, live in a castle and are wealthy and famous — yet they consume completely differently. Psychological factors (learning, motivation, attitudes, perception …) are needed.`, area:'why'},
{q:R`According to Stiftung Warentest (2022), what share of German consumers perceive brands as interchangeable?`, opts:[R`85%`,R`52%`,R`64%`,R`37%`], correct:2, exp:R`64% perceive brands as interchangeable. 85% is the share of tested products rated "good".`, area:'why'},
{q:R`Interchangeable products lead to a transformation of competition. Which one?`, opts:[R`From price competition to quality competition, because consumers now read more tests`,R`From national to global competition, because brands sell through the same online shops`,R`From communication competition to product competition, because features decide again`,R`From product competition to communication competition, because products no longer differ`], correct:3, exp:R`Lower interest in product information, lower loyalty and price-oriented consumers → competition moves from the product to communication.`, area:'why'},
{q:R`Which pair describes habitual decision making?`, opts:[R`Behavioural, unconscious, automatic`,R`Deliberate, rational, sequential`,R`Emotional and instantaneous`,R`Planned, compared and documented`], correct:0, exp:R`Habitual = behavioural, unconscious, automatic. Cognitive = deliberate, rational, sequential. Affective = emotional, instantaneous.`, area:'types'},
{q:R`In Katona’s classification, which decision types together form the "cognitive buying decisions"?`, opts:[R`Impulsive and habitualised decisions`,R`Habitualised and limited decisions`,R`Limited and extensive decisions`,R`Impulsive and extensive decisions`], correct:2, exp:R`Limited and extensive decisions involve deliberate thinking and form the cognitive buying decisions; cognitive control rises from impulsive to extensive.`, area:'types'},
{q:R`Which situation pushes a purchase towards an extensive buying decision?`, opts:[R`High time pressure and a decision the consumer makes every week`,R`Low involvement and products that look and work almost the same`,R`Big perceived differences, a rare decision, little time pressure, high involvement`,R`A familiar brand at the checkout that is picked up quickly, without comparing it to any of the alternatives`], correct:2, exp:R`Extensive decisions: high perceived product differences, low frequency of the same decision, low time pressure, high involvement. The other options describe impulsive or habitual buying.`, area:'types'},
{q:R`What is the correct order of the cognitive decision process?`, opts:[R`Information search → recognition of need → evaluation → purchase → post-purchase evaluation`,R`Recognition of need → information search → evaluation of alternatives → purchase → post-purchase evaluation`,R`Recognition of need → evaluation of alternatives → information search → purchase → post-purchase evaluation`,R`Recognition of need → information search → purchase → evaluation of alternatives → post-purchase evaluation`], correct:1, exp:R`Need recognition starts the process; information is searched, alternatives are evaluated, the purchase is made and evaluated afterwards.`, area:'types'},
{q:R`In the basics model, which processes are "activating" processes?`, opts:[R`Reception, perception and evaluation`,R`Learning, memory and retrieval`,R`Emotion, motivation and attitude`,R`Filter, decision and behaviour`], correct:2, exp:R`Activating processes: emotion, motivation, attitude. Cognitive processes: reception, perception and evaluation, learning, memory and retrieval.`, area:'types'},
{q:R`A buyer judges a used car as well built because the door closes with a solid sound. Which heuristic is this?`, opts:[R`Covariation`,R`Country of origin`,R`Mere exposure`,R`Sunk cost`], correct:0, exp:R`Covariation: a perceived association between cues that may or may not be related — one cue (door sound, interior feel) is taken as a sign of overall quality.`, area:'heur'},
{q:R`"High quality — made in Germany" is used as a shortcut. Which heuristic?`, opts:[R`Familiar brand names`,R`Country of origin`,R`Higher prices`,R`Loss aversion`], correct:1, exp:R`The country of origin works as a quality signal, so the consumer does not need to check the product in detail.`, area:'heur'},
{q:R`Why can heuristics lead to irrational decisions?`, opts:[R`Because consumers apply them only to expensive products where mistakes are costly`,R`Because they are rules of thumb that save effort but can cause errors in judgment`,R`Because they are always wrong and should be avoided in every buying situation`,R`Because companies are legally required to make them visible on the package`], correct:1, exp:R`Heuristics are mental rules of thumb; most of the time they are extremely helpful, but they can also lead to errors in judgment.`, area:'heur'},
{q:R`Finding USD 10 feels less good than losing USD 10 feels bad. Which bias?`, opts:[R`Mere exposure effect`,R`Sunk cost fallacy`,R`Loss aversion`,R`Covariation`], correct:2, exp:R`Loss aversion: losses weigh more heavily than equal gains — the value curve is steeper on the loss side.`, area:'bias'},
{q:R`You stay in a terrible movie because the tickets were expensive. Which bias?`, opts:[R`Loss aversion`,R`Mere exposure effect`,R`Country of origin`,R`Sunk cost fallacy`], correct:3, exp:R`Sunk cost fallacy: past investments that cannot be recovered keep you going, although only future costs and benefits should count.`, area:'bias'},
{q:R`A song you disliked at first grows on you after hearing it on the radio many times. Which bias?`, opts:[R`Mere exposure effect`,R`Loss aversion`,R`Sunk cost fallacy`,R`Higher-price heuristic`], correct:0, exp:R`Mere exposure: repeated exposure alone increases liking.`, area:'bias'},
{q:R`How many points does the written exam carry, and how is the MC part scored?`, opts:[R`90 points; each MC question has 4 options and exactly one is right`,R`75 points; 24 MC questions with 5 statements, partial points`,R`60 points; every wrong tick gives minus points so that students stop guessing`,R`75 points; only all-correct answers earn points, otherwise zero`], correct:1, exp:R`Exam 75 = MC 60 (24 × 2.5, partial points 1.5/1/0.5/0.25, no minus points) + open questions 15. Experiment 7.5 and guest lectures 7.5 make the total of 90.`, area:'why'}
]},

/* ------------------------------------------------------------ READING LS 2 ------------------------------------------------------------ */
{id:'cb-r2', kind:'read', ch:2, title:'Irrational Consumption', date:'for LS 2 · 26 Oct',
source:'McKinsey & Company report by Cummings, Dhar and Welch (2015)',
examWeight:'Why the "Pac-Man" view of consumers is wrong, and the three levers from behavioural economics: beliefs, goals and pressures — with the examples',
summary:R`**Core idea.** It is attractive to think that consumers choose what they most prefer — logical decision makers with plenty of time and full insight. But decision making does not unfold like a game of **Pac-Man** (systematically eating information pellets on the way to the optimal choice). Many factors, often unrelated to the decision itself, strongly influence choice and consumption. Most marketers know this, yet still work with a linear, simplified ("Pac-Mannish") view of the consumer decision journey.

**Behavioural economics (BE)** has deepened our understanding of decision making. Many marketers know **nudges**: small changes in how options are presented that influence choices. Applying BE more thoughtfully lets companies build stronger customer relationships.

**1. The bedrock of belief.** A shopper’s mind is not a clean slate: information and experience are filtered through beliefs. Information inconsistent with beliefs is likely to be rejected, and even experience is malleable — the same wine tastes better from a 100-USD bottle than from a 10-USD bottle.
- Healthy food :: the belief "healthy = unpalatable" is a purchase barrier and lowers satisfaction during consumption; the product is not bad, the belief overrides the experience
- Timing of disclosure :: let people have the experience first, then tell them about the health claim
- Presentation :: flavour claims on the front (relevant to everyone), health claims on a side panel for involved, deliberate shoppers
- Packaging cues :: great chocolate comes in fancy boxes; large pack sizes and simple containers signal value
- Other cues :: information on origin, manufacturing and ingredients changes perceived quality and even taste; concrete floors (vs tiles) make retail prices look like better deals; messages that make people feel guilty can improve product perception, because guilt is associated with pleasure
- Method :: start BE-based marketing by asking where beliefs come from; use simple **observational research** to find gaps between what customers say and what they do — interviews and focus groups miss incidental cues because consumers are not aware of them

**2. Accounting for goals.** Needs are not fixed: their strength depends on which **goal is active** (being a good parent, getting in shape, making a good impression). Active goals steer what information people notice — much advertising is wasted because it addresses the wrong goal.
- Media company paywall :: many readers hit the paywall in the morning, when they are busy with kids and getting organised; showing subscription offers later in the day significantly increased conversion
- Activating vs appealing :: activating an exercise goal raises purchases of sports drinks even without workout plans; appealing to a goal focuses on product and message, activating a goal uses the situation (sports music in the background, a cheap fitness tracker in the beverage aisle)

**3. Consumer pressures.** Research shows when biases are strongest:
- Decision fatigue :: after a series of (even unrelated) choices, people choose differently
- Time pressure :: under time pressure people decide very differently
- Iconic product case :: in a lab test every participant picked a cheaper, feature-rich competitor, yet in real stores the iconic product kept a large share. Reason: real shoppers choose quickly, start with the iconic product and only look further if it fails. The company did not embellish the icon (that would hurt its recognisability) but fixed a known pain point with small internal changes and redesigned its other low-cost products to fight the cheap brands.

**Capturing the value.** Only testing **real products with real consumers in real-world situations** shows how customers behave. Start with tractable, small experiments that build insight and credibility, then scale up.`,
cards:[
{q:R`The "Pac-Man" view of consumers`, a:R`The simplified idea that consumers systematically digest information on a linear path to the optimal choice. Reality: many unrelated factors influence choice.`},
{q:R`Nudge`, a:R`A small change in how options are presented that influences consumers’ choices.`},
{q:R`Three BE levers in the McKinsey report`, a:R`Beliefs (experience is filtered through beliefs) · goals (the active goal decides what people notice) · pressures (decision fatigue, time pressure).`},
{q:R`Healthy food and beliefs: two remedies`, a:R`Timing of disclosure (experience first, health claim afterwards) and presentation (flavour on the front, health claim on a side panel).`},
{q:R`Paywall example`, a:R`Readers hit the paywall in the morning but are busy with other goals; moving subscription offers to later in the day raised conversion.`},
{q:R`Activating vs appealing to goals`, a:R`Appealing focuses on product and message; activating changes the situation (sports music, a fitness tracker in the drinks aisle) and opens more opportunities.`},
{q:R`Iconic product case`, a:R`Lab: everyone chose cheaper competitors; stores: icon kept share because shoppers decide fast and start with the icon. Response: keep the icon recognisable, fix a pain point internally, redesign other low-cost products.`}
],
quiz:[
{q:R`What do the authors mean by a "Pac-Mannish" view of the consumer?`, opts:[R`Consumers move through a linear journey, digesting information on the way to the optimal choice`,R`Consumers jump randomly between brands and cannot be predicted by any kind of market research at all`,R`Consumers only react to price promotions and ignore all other information in the store`,R`Consumers are chased by too many ads and close their minds to all marketing messages`], correct:0, exp:R`The Pac-Man view is the linear, simplified model of a logical consumer with time and full insight. The report argues that many unrelated factors shape real choices.`, area:'irr'},
{q:R`According to the report, why does the same wine taste better from a 100-USD bottle?`, opts:[R`Expensive wines are always produced with better grapes and longer ageing in wooden barrels`,R`Experience is filtered through beliefs, so the belief "expensive = good" changes the taste`,R`Consumers compare the label with test reports and then rate the wine more favourably`,R`The glass and the temperature are better when an expensive bottle is served at a dinner`], correct:1, exp:R`A shopper’s mind is not a clean slate: information and experience are refracted through beliefs, so even the taste experience is malleable.`, area:'irr'},
{q:R`How should a firm present a healthy snack when consumers believe "healthy = unpalatable"?`, opts:[R`Put the health claim in large letters on the front so every shopper notices it immediately`,R`Avoid any information about ingredients so shoppers cannot form beliefs about the snack`,R`Let people taste it first, then reveal the health claim, and keep flavour claims on the front`,R`Lower the price until the belief no longer matters for the purchase decision of shoppers`], correct:2, exp:R`Timing of disclosure (experience first) and presentation (flavour on the front for everyone, health claims on a side panel for deliberate shoppers).`, area:'irr'},
{q:R`Which retail cue makes products look like better deals, according to the report?`, opts:[R`Tiled floors`,R`Concrete floors`,R`Soft music`,R`Bright lighting`], correct:1, exp:R`Concrete flooring (vs tile) leads consumers to perceive products as better deals.`, area:'irr'},
{q:R`Why did the media company move its subscription offers to later in the day?`, opts:[R`Because servers were overloaded in the morning and pages loaded too slowly for readers`,R`Because readers had used up their free articles only in the evening on most weekdays`,R`Because in the morning readers were focused on other goals like getting kids to school`,R`Because advertising space was cheaper in the evening, so the offer reached more people`], correct:2, exp:R`Many readers hit the paywall in the morning, but their active goals were elsewhere. Showing offers later, when they were less distracted, significantly increased conversion.`, area:'irr'},
{q:R`What is the difference between activating and appealing to a goal?`, opts:[R`Activating uses the situation (e.g. sports music in the aisle); appealing focuses on product and message`,R`Appealing is used for new customers, while activating is used only for loyal customers who already buy the brand regularly`,R`Activating means lowering the price; appealing means improving the product’s quality and design`,R`There is no difference — the report uses both terms for the same advertising technique`], correct:0, exp:R`Appealing to goals focuses attention on the product and the message; activating goals opens the door to situational factors such as background music or a fitness tracker in the beverage aisle.`, area:'irr'},
{q:R`In the iconic-product case, why did lab results differ from real store sales?`, opts:[R`The lab used a different price level than the stores, so competitors looked cheaper`,R`In stores shoppers decide fast and start with the icon; the lab had no time pressure`,R`The lab only invited loyal customers of the competing brands, which biased the result`,R`Real stores did not stock the competing products, so shoppers simply had no alternatives to choose from on the shelf`], correct:1, exp:R`Time constraints: in real stores shoppers decide fast, start with the icon and only consider others if it disappoints.`, area:'irr'},
{q:R`What did the company in the iconic-product case decide?`, opts:[R`Add many features to the iconic product so it beats the low-price competitors in the lab`,R`Cut the price of the iconic product to the level of the cheapest competitor in the category`,R`Keep the icon recognisable, fix a pain point inside, redesign other low-cost products`,R`Stop selling the iconic product and replace it with a completely new, feature-rich product line under the same brand`], correct:2, exp:R`Embellishing the icon risked its recognisability. The two-pronged approach: defend the icon with small internal fixes and compete with other portfolio products at the low end.`, area:'irr'}
]},

/* ------------------------------------------------------------ READING LS 3 ------------------------------------------------------------ */
{id:'cb-r3', kind:'read', ch:3, title:'Sensory Marketing', date:'for LS 3 · 30 Oct',
source:'Harvard Business case note by Aradhna Krishna (2019): "Note on Sensory Marketing: Shaping Consumer Perception and Behavior"',
examWeight:'Definition of sensory marketing, why it cuts through clutter, sensation vs perception, the seven ways senses influence behaviour with their examples, and what managers should do',
summary:R`**What is sensory marketing?** Krishna’s classic example: Hershey’s milk chocolate as a plain slab vs as a **Hershey’s Kiss** — identical formula, very different personality. Unwrapping feels like a present, the shape melts like a teardrop on the tongue, small wrapped pieces allow several treats without guilt, and the name "Kiss" sounds romantic. Hershey’s does not have to say any of this — **the product says it by itself**.

- Definition :: marketing that engages the consumers’ senses and affects their perception, judgment and behaviour
- Embodied cognition :: we perceive the world through our senses, and bodily sensations affect decisions without conscious awareness
- From monologue to conversation :: communication went from monologues (companies talk at consumers) to dialogues (feedback) to multidimensional conversations, where products find their own voice and consumers respond viscerally and subconsciously
- Managerial goal :: design products and communication with **subconscious triggers** that shape perceptions of abstract qualities such as sophistication or quality

**Why is it needed?** Consumers are surrounded by ads everywhere (TV, YouTube, social media, print, buses, stores). In this clutter an ad may not be noticed, not be read fully, and if read, it is discounted as the marketer’s claim. If the **product speaks for itself**, the consumer draws her own inferences — there is no deliberate advertising, no focused attention needed, and the message is more credible. Persuasion becomes visceral.

**Examples.**
- Dippin’ Dots :: little pellets of ice cream that feel "tingly and almost crunchy" — a new sensation that allows a much higher price per ounce
- Potato chip :: made bigger than the mouth so you must bite it; the crunch sound makes the chip taste crisper and fresher (experiment with amplified sound), and the sound tempts people nearby to eat chips too
- BMW M5 (2014) :: engine sound amplified through the speakers to feel sportier; car makers design the feel of knobs, the door sound, acceleration sound and the new-car smell
- iPod Touch (2007) :: the name "Touch" made people want to touch it and feel attached — an alphanumeric name would not have worked as well
- Sonic signatures :: Intel’s sound made an invisible chip known worldwide; THX did the same for cinema sound; "Hello Moto" advertised Motorola to users and everyone nearby, for free

**Sensation vs perception.**
- Sensation :: the stimulus hits the receptor cells of a sense organ — biochemical and neurological
- Perception :: the awareness or understanding of the sensory information (Latin perceptio: apprehension with the mind or senses)
- Café wall illusion :: the lines are parallel (sensation) but look slanted (perception), because we learned that planks bend under blocks
- l and r :: Japanese newborns can tell l and r apart, Japanese adults cannot — the brain learned to ignore the difference

**Seven ways sensory marketing affects consumers:**
- Sensory signatures :: attention, recognition, attachment, emotion — Tiffany’s robin’s egg blue (luxury, sophistication, love); Louboutin’s Chinese-red soles (won a lawsuit for exclusive use)
- Memory :: smell is the only sense directly connected to emotion and memory (amygdala–hippocampus); people can distinguish about 10,000 scents; a pine-scented pencil’s selling points were remembered two weeks later (3.67 of 10 vs 0.87 unscented); scent also boosts the picture-memory effect and helps both encoding and retrieval
- Perceived efficacy :: Listerine "hurts", so it seems to work — the painless Listerine Zero was pulled; sounds added to vacuum cleaners make them seem more powerful
- Human-sounding voices :: more human automated voices raise human expectations (politeness) — positive feedback from a human-like voice seems less accurate, negative feedback more accurate
- Mental interaction and purchase intention :: a spoon on the side of the viewer’s dominant hand in a yogurt ad increases mental product interaction and purchase intention; touch screens (iPad ordering in airports) raise purchases of tempting food
- Changing perception itself :: an ad that addresses several senses ("stimulate your senses") creates more positive sensory thoughts and better taste ratings than one about taste only
- Ownership :: the **endowment effect** — we value what we own more; merely touching (even imagined touch, or touching on a tablet) creates a feeling of ownership and raises willingness to buy
- Compliance :: train toilets redesigned like a guest bathroom were left cleaner; loud music and intense scent keep older customers out of Abercrombie & Fitch; classical music keeps vagrants out of metro stations

**Neuroscience.** Neuro-marketing (e.g. fMRI) shows how the brain reacts to ads, brands and products — emotional engagement, attention, memory. Dopamine and phenylethylamine flood the brain at a familiar face or sound (celebrity endorsements). Critics warn it may reduce informed decision making and raises ethical questions, because tactics work below awareness.

**What should managers do?**
- Identify what is already sensorially appealing about the product (logo, design, smell, sound, jingle) and build on it systematically
- Choose the sense(s) that fit the essence of the product — do **not** hype every sense
- Historic examples :: lemon scent in dish detergent signals cleanliness; Singapore Airlines’ consistent sensory branding with its signature scent Stefan Floridian Waters (rose, lavender, citrus) in perfume, hot towels and cabins; El Bulli’s molecular gastronomy
- Cutting edge :: sensory science departments; sensory marketing as "the way marketing is done" — the product tells consumers why to buy it
- Experimental culture :: design, test and evaluate every sensory change (Ventoso sailboat case: customers said they wanted technical boats, but a multisensory interview revealed unconscious preferences, e.g. "fast, yet safe")
- Services too :: a bank designed logos, interiors and cheque books around "safety"
- Benefits :: implicit communication can build loyalty, reduce price competition and shift the focus from price cuts to product design
- Care :: avoid mixed messages and sensory overload — an angular piece of cheese is perceived as sharper in taste`,
cards:[
{q:R`Definition of sensory marketing`, a:R`Marketing that engages the consumers’ senses and affects their perception, judgment and behaviour.`},
{q:R`Why does sensory marketing cut through clutter?`, a:R`The product speaks for itself: no ad to notice or read, the consumer draws her own inferences, so the message is more credible and persuasion is visceral.`},
{q:R`Sensation vs perception`, a:R`Sensation: stimulus hits the receptor cells (biochemical, neurological). Perception: awareness or understanding of that information — e.g. café wall illusion, l/r for Japanese adults.`},
{q:R`Scent and memory: the pencil study`, a:R`Pine-scented pencil: 3.67 of 10 selling points recalled after two weeks vs 0.87 for an unscented pencil — without re-introducing the scent.`},
{q:R`Listerine Zero`, a:R`Painless version pulled from the market: customers believed the product worked because it hurt (perceived efficacy).`},
{q:R`Endowment effect and touch`, a:R`We value what we own more; mere touch, imagined touch or touching on a tablet creates a feeling of ownership and raises willingness to buy.`},
{q:R`Sensory signatures: examples`, a:R`Tiffany blue, Louboutin red soles, BMW engine sound, Intel sound, THX, "Hello Moto", Singapore Airlines’ Stefan Floridian Waters scent.`},
{q:R`Managerial rules for sensory marketing`, a:R`Build on existing sensory assets, choose senses that fit the product’s essence (don’t hype every sense), test every change, avoid mixed messages and overload.`}
],
quiz:[
{q:R`What makes the Hershey’s Kiss an example of sensory marketing?`, opts:[R`It has a different recipe than the plain slab, which makes it taste sweeter and creamier`,R`Shape, wrapping and name tell consumers what the product stands for without any ad claim`,R`It is advertised with a large TV campaign that describes its taste in great detail`,R`It is cheaper per gram than the slab, which makes consumers perceive it as a better deal`], correct:1, exp:R`Same formula, different personality: shape, wrapping and the name "Kiss" create the experience. The product communicates by itself — that is the essence of sensory marketing.`, area:'sens'},
{q:R`Why is a product that "speaks for itself" more persuasive than an ad?`, opts:[R`Because ads are no longer allowed to make claims about the taste or quality of food products`,R`Because the consumer infers the qualities herself instead of doubting a marketer claim`,R`Because sensory cues are always cheaper to design and produce than a full advertising campaign in several media`,R`Because consumers read sensory messages more carefully than the text on a package`], correct:1, exp:R`Ads may not be noticed or read and are met with scepticism. When the product speaks, the consumer draws her own inferences, which is more credible and needs no focused attention.`, area:'sens'},
{q:R`What did the potato chip experiment show?`, opts:[R`Bigger chips are perceived as cheaper per gram by most buyers`,R`Louder crunch made chips taste crisper and fresher`,R`Salt matters more than sound`,R`People eat fewer chips when they wear headphones`], correct:1, exp:R`Participants with amplified crunch sounds rated the chips as crisper and fresher — sound changes taste perception.`, area:'sens'},
{q:R`Which statement correctly distinguishes sensation from perception?`, opts:[R`Sensation is the brain’s interpretation; perception is the stimulus hitting the receptor cells`,R`Sensation: the stimulus hits receptor cells; perception: the understanding of it`,R`Sensation only concerns vision and hearing; perception concerns smell, taste and touch`,R`Both terms mean the same, the note uses them as synonyms for subconscious processing`], correct:1, exp:R`Sensation is biochemical and neurological (light on the receptors, sound vibrating hair cells). Perception is the understanding — which can differ, as illusions show.`, area:'sens'},
{q:R`Why is smell especially powerful for memory?`, opts:[R`It is the only sense with a direct connection to emotion and memory`,R`It is the sense that people can control most consciously in shops`,R`It works only in combination with sound, which doubles its effect`,R`It is processed faster than vision, so it reaches the brain first`], correct:0, exp:R`Olfactory processing is directly linked to the amygdala–hippocampus complex; scent memories persist over very long periods.`, area:'sens'},
{q:R`Why was the painless Listerine Zero pulled from the market?`, opts:[R`It was less effective against bacteria`,R`Customers felt it only worked if it hurt`,R`Its production costs were far too high`,R`Regulators banned its new formula`], correct:1, exp:R`Perceived efficacy: the burning sensation signals that the mouthwash is working.`, area:'sens'},
{q:R`What is the endowment effect, and how does touch relate to it?`, opts:[R`People value what they own more; even imagined touch creates a feeling of ownership`,R`People value objects less once they own them; touching reduces the wish to buy`,R`People value gifts more than purchases; touching the gift wrap raises perceived value`,R`People value expensive objects more, and touching them reveals the true quality and therefore the fair price`], correct:0, exp:R`Owning raises value; mere touch, imagined touch or touching on a tablet produces perceived ownership and a greater willingness to buy.`, area:'sens'},
{q:R`What does Krishna advise managers about using the senses?`, opts:[R`Engage all five senses in every product, because more stimulation always increases sales`,R`Use only visual cues, because the other senses cannot be controlled in a store or online`,R`Find the senses that fit the product’s essence, build on existing assets and test changes`,R`Leave sensory design to external consultants, because it does not affect brand identity`], correct:2, exp:R`Hyping every sense "will probably not work". Identify existing sensory value, pick fitting senses, design and test each change, avoid mixed messages and overload.`, area:'sens'},
{q:R`How did Singapore Airlines use sensory marketing?`, opts:[R`It replaced all seat-back screens with music to create a calm and quiet cabin experience`,R`It used a signature scent in perfume, hot towels and cabins, matching uniforms and decor`,R`It offered the same meal on every flight so travellers would remember the airline’s taste`,R`It used a loud engine sound in its ads to make its planes seem more powerful than others`], correct:1, exp:R`Stefan Floridian Waters (rose, lavender, citrus) was worn by flight attendants, blended into hot towels and used in planes and lounges; uniforms matched the brand colours and decor.`, area:'sens'}
]},

/* ------------------------------------------------------------ READING LS 4 ------------------------------------------------------------ */
{id:'cb-r4', kind:'read', ch:4, title:'When A/B Testing Doesn’t Tell the Whole Story', date:'for LS 4 · 4 Nov',
source:'Harvard Business Review article by Eva Ascarza (2021)',
examWeight:'How A/B tests work, why the average effect can mislead, the field experiments on churn, and the shift from prediction to prescription ("for whom is it effective?")',
summary:R`**A/B test.** Marketers measure a campaign’s return on investment by targeting customers with two different interventions (or one intervention vs none) and comparing the results of the two randomly assigned groups. With the right analysis A/B tests are useful — but they can be highly misleading.

**Arts organisation example.** To fight declining membership retention, the organisation sends a small gift with the renewal notice to "at risk" members — first as a pilot with a random gift group and a control group.
- Average result :: no difference in retention → you would cancel the gift program
- Closer look :: for members who had visited the venue in the last year the gift **significantly increased** renewal; for members who had not visited for a long time it **reduced** renewal, probably because it reminded them how little they used the membership
- Lesson :: the average effect hides which customers respond positively or negatively — it can lead to the wrong campaign decisions

**Field experiments on churn.** Companies usually identify "high risk" customers (likely to cancel) and test retention campaigns on them. Ascarza ran field experiments with two large companies, over 14,000 customers, random intervention vs control, plus rich customer data (activity, engagement, tenure, location …).
- Finding :: the customers with the highest churn risk were **not** the best targets — there was little correlation between churn risk and sensitivity to the intervention
- High-sensitivity group :: a distinct group responded strongly, with almost no overlap with the high-risk group
- ROI :: spending the same budget on the high-sensitivity group would have reduced churn by an additional 5% and 8% in the two companies
- Telecom example :: how recently a customer last engaged predicted churn risk but not sensitivity; **data usage** predicted sensitivity → target heavy data users, not the inactive ones

**From prediction to prescription.** Target interventions on each customer’s **expected response to the intervention**, not on what they would do without it. Marketers should act like doctors, who give treatments to the patients most likely to respond to them, not randomly to those most likely to die.
- Use A/B data :: not only to measure the overall effect, but to explore which types of customers are most sensitive
- Combine data :: historical transaction and demographic data with the A/B test results — most firms already have this data

**Key question:** stop asking "Is this intervention effective?" and start asking **"For whom is this intervention most effective?"**`,
cards:[
{q:R`What is an A/B test?`, a:R`Two randomly assigned customer groups receive different interventions (or intervention vs none); the results are compared to measure the effect.`},
{q:R`Arts organisation gift example`, a:R`Average effect zero, but the gift raised renewal for recent visitors and lowered it for long-inactive members (it reminded them they don’t use it).`},
{q:R`Churn risk vs sensitivity`, a:R`Little correlation: the highest-risk customers were not the most responsive; the high-sensitivity group barely overlapped with the high-risk group.`},
{q:R`ROI gain in Ascarza’s field experiments`, a:R`Same budget on the high-sensitivity group → additional 5% and 8% churn reduction (two companies, 14,000+ customers).`},
{q:R`Telecom: what predicted sensitivity?`, a:R`Data usage — not recency of engagement, which only predicted churn risk.`},
{q:R`Prediction vs prescription`, a:R`Target by expected response to the intervention, not by expected behaviour without it — like a doctor prescribing treatments to patients who respond. Ask "for whom is it most effective?"`}
],
quiz:[
{q:R`Why can the average result of an A/B test be misleading?`, opts:[R`Because random assignment always creates groups of different size and quality`,R`Because it can hide that some customers react positively and others negatively`,R`Because control groups receive no intervention, so they cannot be compared at all`,R`Because results are only valid for online campaigns, not for physical mailings`], correct:1, exp:R`In the arts example the average effect was zero, but the gift helped recent visitors and hurt long-inactive members. Averages cover up who responds how.`, area:'ab'},
{q:R`Why did the gift lower renewal among members who had not visited for a long time?`, opts:[R`The gift was too cheap and annoyed them`,R`It reminded them how rarely they used it`,R`They had already decided to renew anyway`,R`The gift only arrived after the renewal deadline had passed`], correct:1, exp:R`The gift served as a salient reminder of how infrequently they used their membership.`, area:'ab'},
{q:R`What did Ascarza find about high-churn-risk customers?`, opts:[R`They were the most sensitive to retention campaigns and should always be targeted first`,R`They had little overlap with the customers who responded most strongly to the campaigns`,R`They could not be identified with data, so campaigns should be sent to all customers equally`,R`They responded only to price discounts, never to gifts, calls or personal messages`], correct:1, exp:R`There was little correlation between churn risk and sensitivity; the high-sensitivity group had almost no overlap with the high-risk group.`, area:'ab'},
{q:R`In the telecom company, what predicted a customer’s sensitivity to the retention campaign?`, opts:[R`How recently the customer last engaged with the company`,R`How long the customer had been with the company`,R`How much mobile data the customer used`,R`Where the customer lived in the country`], correct:2, exp:R`Recency predicted churn risk but not sensitivity; data usage predicted sensitivity → target heavy data users.`, area:'ab'},
{q:R`How much additional churn reduction would targeting the high-sensitivity group have achieved with the same budget?`, opts:[R`1% and 2%`,R`5% and 8%`,R`15% and 18%`,R`50% and 80%`], correct:1, exp:R`An additional 5% and 8% in the two companies.`, area:'ab'},
{q:R`What does "moving from prediction to prescription" mean?`, opts:[R`Predicting churn more precisely with better algorithms`,R`Targeting by each customer’s expected response`,R`Giving every customer the same campaign to avoid bias`,R`Replacing A/B tests with large surveys about customers’ future intentions`], correct:1, exp:R`Like doctors, marketers should give the "treatment" to those most likely to respond — not to those most likely to churn.`, area:'ab'}
]},

/* ------------------------------------------------------------ READING LS 5 ------------------------------------------------------------ */
{id:'cb-r5', kind:'read', ch:5, title:'Starbucks’s Loyalty Reigns', date:'for LS 5 · 11 Nov',
source:'Darden case by Meghan Murray (2016), "Starbucks’s Loyalty Reigns"',
examWeight:'Why the Starbucks loyalty program and app bind customers: rewards and levels, convenience, personalisation, consistent experience, employees and customer voice — plus the key figures and the risk at the end',
summary:R`**Situation.** In 2013 CEO Howard Schultz saw "a seismic change in consumer behavior", brought about by technology and access to information. Starbucks’ success came not only from the store experience and consistent drinks in white cups with the customer’s first name, but also from the **digital experience**. The question of the case: how much more can an app really do?

**Why the program works on people (the principles):**
- Reinforcement :: every purchase earns "Stars", and rewards (mostly free drinks and food) follow the desired behaviour — buying at Starbucks is rewarded, so it is repeated
- Goals and progress :: the Rewards screen shows how many Stars you have and how many you need for the next level; two levels, **Green** (birthday perk, free refills of brewed coffee and tea) and **Gold** (enough Stars within 12 months → personalised Gold Card, more free items) — status and visible progress keep people collecting
- Convenience and habit :: Mobile Order & Pay lets customers order and pay without talking to anyone; the app works like a prepaid debit card with automatic reload — less effort makes the routine stick
- Personalisation :: custom offers by e-mail, early glimpses of new products, and suggestive selling of food based on purchase history
- Consistency :: the same drink in the same cup with "the same delightful name" in an airport in North Carolina or on King’s Road in London — and rewarded for it
- Belonging and voice :: My Starbucks Idea (2008) let customers suggest and vote on ideas, and Starbucks implemented some (tree planting, recipe changes); social media with 35 million Facebook fans and 11 million Twitter followers; @tweetacoffee to buy a coffee for a friend
- Employees as ambassadors :: benefits from 20 hours a week (401(k), bonuses, health coverage), tuition for veterans’ families — "give them reasons to believe in their work … they’ll elevate the experience for each customer"

**Key steps and figures (brief):**
- App launched 2011 :: first a digital Starbucks Card; 2012 investment of 25 million USD in Square; mobile marketer of the year 2010 and 2012 (SMS, QR codes)
- July 2015 :: 20% of U.S. payments through the app; Mobile Order & Pay reached up to 7 million orders per week within three months
- End of 2015 :: more than 9 of 45 million customers paid by phone each week; mobile payments up to 21% of in-store transactions; more than 20 million Rewards members
- Profitability :: mobile payments are cheaper than credit-card fees; earnings rose from 2.1 to 2.8 billion USD (FY 2014 → 2015)
- Brand strategy :: an international chain cannot win on artisanal attributes (specialty coffee: 37% of cups but 50% of value), so Starbucks focuses on what it controls — consistency, service and a seamless experience

**The future and the risk.** Schultz planned to extend the loyalty platform beyond the four walls of the store (rewards for other purchases with the phone) and launched the Digital Coffee Passport (2016). The case ends with a warning: Starbucks had become dependent on mobile shoppers who use social media to validate their purchases — and may be overlooking other drivers and risks.`,
cards:[
{q:R`Starbucks Rewards levels`, a:R`Green: birthday perk, free in-store refills of brewed coffee and tea. Gold: enough Stars within 12 months → personalised Gold Card, more free food and drinks.`},
{q:R`Learning principles behind Starbucks Rewards`, a:R`Reinforcement (Stars and rewards after purchases), visible progress and status (levels), convenience that turns buying into a habit, personalised offers.`},
{q:R`Mobile Order & Pay`, a:R`Order and pay in the app without talking to staff; up to 7 million orders per week within three months; enables suggestive selling based on purchase history.`},
{q:R`Starbucks key figures 2015`, a:R`20% of U.S. payments via the app (July 2015); 9 of 45 million customers paying by phone each week; 20+ million Rewards members; earnings 2.1 → 2.8 billion USD.`},
{q:R`My Starbucks Idea`, a:R`2008 website where customers suggest and vote on ideas; implemented ideas published under "Ideas in Action" → customer voice and belonging.`},
{q:R`Why does Starbucks focus on consistency?`, a:R`An international chain cannot compete on artisanal attributes, so it controls consistency across stores, service and a seamless experience.`},
{q:R`The risk at the end of the case`, a:R`Dependence on mobile, social-media-validating shoppers may make Starbucks overlook other business drivers and risks.`}
],
quiz:[
{q:R`Which learning principle is at the heart of Starbucks Rewards?`, opts:[R`Classical conditioning: a jingle is paired with coffee until the jingle alone triggers thirst`,R`Reinforcement: purchases earn Stars and rewards, so the rewarded behaviour is repeated`,R`Observational learning: customers copy what they see baristas do behind the counter`,R`Mere exposure: seeing the logo often is enough to create loyalty without any reward`], correct:1, exp:R`Stars and free products reward the desired behaviour (buying at Starbucks) and make it more likely to be repeated; levels and visible progress add a goal.`, area:'star'},
{q:R`What does a customer get at the Gold level?`, opts:[R`Only a birthday perk`,R`A personalised Gold Card and more free items`,R`A lifetime discount of 50% on all drinks and food`,R`Free delivery of every order`], correct:1, exp:R`Gold requires enough Stars every 12 months and brings a free personalised Gold Card and more free food and drinks. Birthday perks and refills are Green-level privileges.`, area:'star'},
{q:R`Why did Starbucks choose to compete on consistency rather than artisanal quality?`, opts:[R`Because artisanal coffee was losing market share and value in the specialty segment`,R`Because a global chain cannot win on artisanal attributes, so it controls what it can`,R`Because regulators required the same recipe in every country where Starbucks operates`,R`Because customers said in several surveys that the taste of the coffee did not matter to them at all`], correct:1, exp:R`Craft brands (e.g. Blue Bottle) won on artisanal attributes. Starbucks controls consistency across stores, service and a seamless experience — the same drink and cup anywhere.`, area:'star'},
{q:R`What share of Starbucks’ U.S. payments came through the app by July 2015?`, opts:[R`5%`,R`10%`,R`20%`,R`45%`], correct:2, exp:R`By July 2015, 20% of U.S. payments came through the mobile app.`, area:'star'},
{q:R`Why were mobile payments especially attractive for Starbucks financially?`, opts:[R`They allowed Starbucks to raise prices in the app`,R`Their fees were lower than credit-card fees`,R`They removed the need for any store staff`,R`They were subsidised by Apple and PayPal`], correct:1, exp:R`Mobile transactions were more profitable because traditional credit-card fees were higher.`, area:'star'},
{q:R`Which principle does My Starbucks Idea use?`, opts:[R`Co-creation: customers suggest and vote on ideas, some are implemented`,R`Price discrimination: loyal customers vote on which prices others should pay`,R`Scarcity: only a few customers may join, which makes membership more desirable`,R`Sunk cost: customers who posted ideas feel they must keep buying to see them realised`], correct:0, exp:R`Customers got a voice: ideas from recipe changes to a tree-planting program were implemented and tracked under "Ideas in Action" — this builds involvement and belonging.`, area:'star'},
{q:R`What risk does the case raise at the end?`, opts:[R`That the app is too expensive to maintain compared to the revenue it brings`,R`That relying on mobile shoppers may hide other drivers and risks`,R`That customers will stop drinking coffee because of rising coffee bean prices`,R`That employees will leave because the app replaces their tasks in the store`], correct:1, exp:R`Starbucks had become "addicted" to mobile shoppers who validate purchases on social media and may be overlooking other business drivers and risks.`, area:'star'}
]},

/* ------------------------------------------------------------ READING LS 6 ------------------------------------------------------------ */
{id:'cb-r6', kind:'read', ch:6, title:'The New Science of Customer Emotions', date:'for LS 6 · 18 Nov',
source:'Harvard Business Review article by Magids, Zorfas and Leemon (2015)',
examWeight:'Emotional motivators, the emotional connection pathway (−18% / baseline / +13% / +52%), the four insights, the fashion retailer case (Fashion Flourishers) and the three-step getting-started process',
summary:R`**Problem and idea.** Firms know emotions drive behaviour but treat them as guesswork. The authors built a lexicon of more than **300 "emotional motivators"** — deep, often unconscious desires — and linked them with big-data analytics to profitable behaviour. Emotional motivators predict a customer’s future value better than any other metric, including brand awareness and customer satisfaction.

**Results of emotional connection:**
- Bank :: a credit card for Millennials designed for emotional connection → usage in the segment +70%, new accounts +40%
- Household cleaner :: market share losses turned into double-digit growth within a year
- Apparel retailer :: same-store sales growth accelerated more than threefold

**Emotional motivators.** Customers are emotionally connected with a brand when it aligns with their motivations and helps them fulfil deep, often unconscious desires. These differ from the reasons customers name. **Ten high-impact motivators** (across all categories):
- Stand out from the crowd :: project a unique social identity, be seen as special
- Have confidence in the future :: see the future as better than the past
- Enjoy a sense of well-being :: life measures up to expectations, balance, stress-free
- Feel a sense of freedom :: act independently, without obligations or restrictions
- Feel a sense of thrill :: visceral pleasure and excitement, fun events
- Feel a sense of belonging :: affiliation with people they relate to or aspire to be like
- Protect the environment :: take action to improve the surroundings
- Be the person I want to be :: ongoing self-improvement, live up to the ideal self-image
- Feel secure :: what they have today will be there tomorrow
- Succeed in life :: lead a meaningful life, worth beyond money

**The emotional connection pathway.** Customer value relative to highly satisfied customers:
=> Unconnected (−18%) → Highly satisfied (baseline) → Perceive brand differentiation (+13%) → Fully connected (+52%)

The jump comes at the last step. Moving customers from highly satisfied to fully connected can have **three times the return** of moving them from unconnected to satisfied — yet firms usually invest in turning dissatisfied customers into satisfied ones. The extra value of fully connected customers varies by category (across nine categories, e.g. household cleaner +82%, discount store +103%, credit card swipes +37%).

**Four insights:**
- Motivators vary by category and brand :: "helps me be creative" drives a home-furnishings store; "feel revived and refreshed" drives fast-food loyalty
- They vary across segments :: Millennials in banking: "protect the environment" and "be the person I want to be"; older customers: "feel secure" and "succeed in life"
- They vary along the customer journey :: banking — "feel secure" matters when attracting customers, "succeed in life" when cross-selling later
- Opportunities exist across the whole experience :: a condiments brand: 60% of its social-network followers were emotionally connected vs 21% of all customers → it invested in its online community

**Fashion retailer case (four-part strategy):**
- 1. Target connected customers :: fully connected customers were 22% of customers but 37% of revenue and spent twice as much (400 USD a year) as highly satisfied ones; the most valuable segment, **"Fashion Flourishers"** (excitement, social acceptance, self-expression), spends 468 USD vs 235 USD, shops more often, advocates more, is less price-sensitive and more digital; spend-to-size ratio 1.9 vs 0.2 for "Can’t Please Them"
- 2. Quantify key motivators :: "feel a sense of belonging", "thrill" and "freedom" had the strongest link to purchases
- 3. Optimise investments across functions :: stores in Flourisher areas (up to 25% more revenue; new stores +20% first-year sales); buy online and pick up in store (speaks to "freedom") although customers said it was unimportant; selfie slide shows of "people like you" in stores ("belonging"); mobile app redesign; merchandising; targeted messages with 40–210% higher response
- 4. Systematise, measure, learn :: emotional connection as a KPI on the senior-management dashboard; result: same-store sales +3.5% (vs 1% average), inventory turns +25%, recommendations +20%, emotional connection score +20%

**Getting started (three phases):**
- First :: inventory existing research, define motivators to probe, quantify them with surveys — understand motivations separate from your brand
- Second :: analyse your best customers (top quartile by purchases, advocacy, loyalty) and find the two or three key motivators linked to your brand
- Third :: make emotional connection a growth lever across the whole firm, with buy-in from the top — not a marketing-only topic`,
cards:[
{q:R`Emotional motivators`, a:R`Deep, often unconscious desires (300+ in the lexicon) that drive behaviour; a better predictor of customer value than awareness or satisfaction.`},
{q:R`Emotional connection pathway (value vs highly satisfied)`, a:R`Unconnected −18% → highly satisfied baseline → perceive brand differentiation +13% → fully connected +52%.`},
{q:R`Where should firms invest according to the pathway?`, a:R`Moving highly satisfied customers to fully connected can return three times as much as moving unconnected customers to satisfied.`},
{q:R`Four insights`, a:R`Motivators vary by category and brand, across segments, along the customer journey, and opportunities exist across the whole experience (not only advertising).`},
{q:R`Fashion Flourishers`, a:R`Most emotionally connected segment (excitement, social acceptance, self-expression): 468 vs 235 USD a year, shop more often, advocate more, less price-sensitive, more digital; spend/size ratio 1.9.`},
{q:R`Retailer’s key motivators and actions`, a:R`Belonging, thrill, freedom → stores near Flourishers, buy online/pick up in store (freedom), selfie slide shows (belonging), app redesign, targeted messages.`},
{q:R`Getting started: three phases`, a:R`1 inventory and quantify motivators; 2 analyse best customers and pick 2–3 key motivators; 3 make emotional connection a firm-wide growth lever with top-management buy-in.`}
],
quiz:[
{q:R`According to the article, what is the best predictor of a customer’s future value?`, opts:[R`Brand awareness`,R`Customer satisfaction`,R`Emotional motivators`,R`Price sensitivity`], correct:2, exp:R`Emotional motivators are a better gauge of future value than any other metric, including brand awareness and customer satisfaction.`, area:'emo'},
{q:R`How much more valuable are fully connected customers than highly satisfied ones, on average?`, opts:[R`+13%`,R`+52%`,R`+18%`,R`+82%`], correct:1, exp:R`+52% on average. +13% is the step "perceive brand differentiation", −18% the unconnected customers; +82% is one category (household cleaner).`, area:'emo'},
{q:R`Where do firms usually invest, and why is that often a mistake?`, opts:[R`In fully connected customers, although they are already loyal and need no attention`,R`In making dissatisfied customers satisfied, although full connection returns up to three times more`,R`In brand awareness campaigns, although awareness is the best predictor of value`,R`In price promotions, although price-sensitive customers are the ones who bring the highest value over their lifetime`], correct:1, exp:R`Moving customers from highly satisfied to fully connected can have three times the return of moving them from unconnected to highly satisfied.`, area:'emo'},
{q:R`For Millennials in banking, which motivators turned out to be key?`, opts:[R`"Feel secure" and "succeed in life"`,R`"Protect the environment" and "be the person I want to be"`,R`"Feel a sense of thrill" and "stand out from the crowd"`,R`"Enjoy a sense of well-being" and "feel a sense of freedom"`], correct:1, exp:R`The model uncovered "protect the environment" and "be the person I want to be"; "feel secure" and "succeed in life" are typical of older groups.`, area:'emo'},
{q:R`Why did the retailer roll out "buy online, pick up in store" although customers said it was unimportant?`, opts:[R`Because it was the cheapest option to reduce delivery costs for online orders`,R`Because it speaks to Flourishers’ desire to feel a sense of freedom`,R`Because competitors had introduced it and the retailer wanted to avoid losing market share`,R`Because store staff asked for it to reduce the number of returns at the checkout`], correct:1, exp:R`What customers say and what drives them differ. The option addressed the motivator "feel a sense of freedom"; a test showed a material lift in sales.`, area:'emo'},
{q:R`What did the retailer’s analysis show about fully connected customers in the category?`, opts:[R`They were 37% of customers and 22% of revenue`,R`They were 22% of customers but 37% of revenue`,R`They were half of all customers and spent the same`,R`They were 10% of customers and 80% of revenue`], correct:1, exp:R`Fully connected customers were just 22% of customers but 37% of revenue, spending about twice as much (400 USD a year) as highly satisfied customers.`, area:'emo'},
{q:R`What is the first step of the "getting started" process?`, opts:[R`Hire a consultancy and build a big-data platform before doing anything else`,R`Inventory existing research and quantify motivators, separate from the brand`,R`Ask customers how your brand makes them feel and use their words in advertising`,R`Move all budget from satisfaction programs to emotional advertising campaigns`], correct:1, exp:R`First inventory existing research, define motivators to probe and quantify them with surveys. Don’t focus on how people say your brand makes them feel — understand motivations separate from the brand.`, area:'emo'}
]},

/* ------------------------------------------------------------ READING LS 7 ------------------------------------------------------------ */
{id:'cb-r7', kind:'read', ch:7, title:'Humans or AI as Recommenders', date:'for LS 7 · 2 Dec',
source:'California Management Review insight by Mazzù, De Angelis, Andria and Baccelloni (2024)',
examWeight:'Algorithm aversion, uniqueness neglect, search vs experience products, transparency → credibility → intention, and which recommender to use for which product',
summary:R`**Starting point.** AI recommendation tools (Amazon, Netflix, Spotify) give personalised suggestions from shopping behaviour, yet consumers often prefer **human** recommendations when subjective judgment is involved.
- Algorithm aversion :: consumers tend to favour human experts over AI in subjective or emotional decisions
- Uniqueness neglect :: consumers believe algorithms cannot address their unique characteristics
- Objective tasks :: where numerical precision or logical reasoning is needed, consumers may prefer AI

**Search vs experience products.**
- Search products :: standardised attributes that can be compared before purchase (e.g. electronics) → AI, which processes large amounts of data and gives accurate, detailed recommendations, fits well; AI voice recommendations even beat text-based online reviews here
- Experience products :: must be experienced first-hand (e.g. spa services, gourmet meals) → human recommendations are seen as more credible, especially from an experienced expert with lived experience and reputation

**Mechanism: transparency and credibility.**
- Transparency :: the perceived ability of the source to provide complete and reliable information
- Credibility :: the perception that the source has the relevant expertise and can be trusted to give an objective opinion
=> Transparency of the source → Credibility → Intention to follow the recommendation

**Findings.** There is a clear interaction between product type, source and response: for search products AI is preferred, because it is perceived as more transparent and credible for fact-based evaluations; for experience products the preference shifts to a highly experienced human expert.

**Managerial implication.** Use AI-driven recommendation systems for search products; use knowledgeable human recommenders for experience products. Manage both sources so that consumers trust them — this shapes preferences, the design of online platforms and purchases across product types.`,
cards:[
{q:R`Algorithm aversion`, a:R`Consumers tend to prefer human experts over AI in subjective or emotional decision contexts.`},
{q:R`Uniqueness neglect`, a:R`The belief that algorithms cannot address a consumer’s unique characteristics — a reason for algorithm aversion.`},
{q:R`Search vs experience products`, a:R`Search: standardised, comparable before purchase (electronics) → AI. Experience: must be experienced (spa, gourmet meal) → human expert.`},
{q:R`Transparency vs credibility`, a:R`Transparency: perceived ability to give complete, reliable information. Credibility: perceived expertise and trustworthiness for an objective opinion. Transparency → credibility → intention to follow.`},
{q:R`Managerial implication`, a:R`AI recommenders for search products, knowledgeable human recommenders for experience products; build trust in both.`}
],
quiz:[
{q:R`What is "uniqueness neglect"?`, opts:[R`Consumers ignore unique products because they prefer well-known brands`,R`Consumers think algorithms cannot account for what makes them unique`,R`Algorithms recommend the same products to everyone and ignore the long tail`,R`Human experts overlook unique product features that only AI systems are able to detect`], correct:1, exp:R`Uniqueness neglect is the perceived inability of algorithms to address a consumer’s unique characteristics — one reason for algorithm aversion.`, area:'ai'},
{q:R`For which product would consumers most likely prefer an AI recommendation?`, opts:[R`A spa treatment`,R`A gourmet dinner`,R`A new laptop`,R`A wine tasting`], correct:2, exp:R`A laptop is a search product with standardised, comparable attributes — AI is seen as more transparent and credible there. Spa, dinner and tasting are experience products.`, area:'ai'},
{q:R`In which order do the mechanisms work according to the study?`, opts:[R`Credibility → transparency → intention to follow`,R`Transparency → credibility → intention to follow`,R`Intention to follow → transparency → credibility`,R`Product type → intention → transparency`], correct:1, exp:R`Perceived transparency of the source leads to higher credibility, which in turn increases the intention to follow the recommendation.`, area:'ai'},
{q:R`When does the preference shift from AI to a human recommender?`, opts:[R`For search products, when the human has a large social media following`,R`For experience products, when the human recommender is highly experienced`,R`For any product, as soon as the AI makes a single visible mistake`,R`For cheap products, because consumers do not trust AI for small purchases`], correct:1, exp:R`For experience products, consumers follow a well-qualified human expert over AI, attributing more transparency and credibility to lived experience.`, area:'ai'},
{q:R`How does the article define credibility?`, opts:[R`The ability to give complete and reliable information`,R`Relevant expertise plus trust to be objective`,R`The number of positive reviews a source has received online`,R`The speed at which a source answers a question`], correct:1, exp:R`Credibility = perceived relevant expertise and trust to offer an objective opinion. Complete and reliable information is transparency.`, area:'ai'}
]}
];

// Exam-format trainer: Krause’s MC format — 5 statements, any number (1–5) can be correct, 2.5 points per question.
// Self-written in the format from the admin slide; s = [statement, true/false, why]
const CB_MC = [
{lec:'cb-1', area:'why', q:R`Which statements about consumer behaviour and why it matters are correct?`, s:[
 [R`Consumer behaviour is the process whereby individuals decide what, when, where, how and from whom to purchase goods or services.`, true, R`The course definition.`],
 [R`According to Stiftung Warentest, about 85% of tested products are rated "good".`, true, R`Fact I of the interchangeability slide.`],
 [R`About 64% of German consumers perceive brands as interchangeable.`, true, R`Fact II (Stiftung Warentest, 2022).`],
 [R`Interchangeable products lead to a shift from communication competition to product competition.`, false, R`The reverse: from product competition to communication competition.`],
 [R`Interchangeable products go along with higher brand loyalty.`, false, R`Lower interest in product information, lower loyalty, price-oriented consumers.`]]},
{lec:'cb-1', area:'why', q:R`Which statements about market segmentation and influences on consumers are correct?`, s:[
 [R`Income, age, social class and geography are classic criteria for segmenting a market.`, true, R`The demographic and socio-economic factors on the slide.`],
 [R`King Charles III and Ozzy Osbourne show that two people with the same demographics always behave the same.`, false, R`They show the opposite: same demographics, completely different behaviour.`],
 [R`Learning, motivation, attitudes and perception also influence consumer behaviour.`, true, R`The psychological factors added on the slide.`],
 [R`In the basics model, emotion, motivation and attitude are activating processes.`, true, R`Cognitive processes are reception, perception and evaluation, learning, memory and retrieval.`],
 [R`In the basics model, all stimuli reach the decision process unfiltered.`, false, R`A filter lets only part of the emotional, cognitive and physical stimuli through.`]]},
{lec:'cb-1', area:'types', q:R`Which statements about the types of decision making are correct?`, s:[
 [R`Cognitive decisions are deliberate, rational and sequential.`, true, R`Type 1.`],
 [R`Habitual decisions are behavioural, unconscious and automatic.`, true, R`Type 2.`],
 [R`Affective decisions are emotional and instantaneous.`, true, R`Type 3.`],
 [R`In Katona’s classification, limited and extensive decisions form the cognitive buying decisions.`, true, R`They involve the most cognitive control.`],
 [R`Impulsive decisions involve the highest degree of cognitive control.`, false, R`Cognitive control and involvement rise from impulsive to extensive decisions.`]]},
{lec:'cb-1', area:'types', q:R`Lena (24) spends three weeks comparing e-bikes in tests and shops before buying one. Which statements are correct?`, s:[
 [R`This is an extensive buying decision.`, true, R`High involvement, rare decision, high perceived differences, low time pressure.`],
 [R`The frequency of this buying decision is low.`, true, R`An e-bike is bought rarely.`],
 [R`Time pressure during the buying process is high.`, false, R`She takes three weeks — low time pressure.`],
 [R`After the purchase, the process ends with the purchase decision.`, false, R`The fifth stage is the post-purchase evaluation.`],
 [R`Her process starts with the recognition of a need.`, true, R`Need recognition → information search → evaluation → purchase → post-purchase evaluation.`]]},
{lec:'cb-1', area:'heur', q:R`Which statements about heuristics are correct?`, s:[
 [R`Heuristics are mental rules of thumb that allow quick decisions.`, true, R`Shortcuts used in habitual decision making.`],
 [R`Heuristics always lead to irrational decisions.`, false, R`Most of the time they are extremely helpful; they CAN lead to errors.`],
 [R`Inferring high quality from "made in Germany" is the country-of-origin heuristic.`, true, R`Origin as a quality signal.`],
 [R`Assuming a more expensive product is better uses price as a quality signal.`, true, R`The "higher prices" heuristic.`],
 [R`Covariation means that consumers check every attribute of a product separately.`, false, R`Covariation is a perceived association between cues — one cue is taken as a sign of overall quality.`]]},
{lec:'cb-1', area:'bias', q:R`Which statements about biases are correct?`, s:[
 [R`Loss aversion means that losing USD 10 hurts more than finding USD 10 pleases.`, true, R`Losses weigh more than equal gains.`],
 [R`The mere exposure effect means that repeated exposure reduces liking because people get bored.`, false, R`Repeated exposure INCREASES liking — familiarity alone makes us like something more.`],
 [R`Staying in a bad movie because the tickets were expensive is an example of loss aversion.`, false, R`That is the sunk cost fallacy.`],
 [R`Biases can lead to better or worse decisions.`, true, R`Learning outcome 6 of the session.`],
 [R`Biases only occur in cognitive (extensive) decisions.`, false, R`Biases and heuristics are typical of habitual, low-effort decisions — and can affect any decision.`]]},
{lec:'cb-1', area:'why', q:R`Which statements about the course and its grading are correct?`, s:[
 [R`The MC part has 24 questions worth 2.5 points each.`, true, R`24 × 2.5 = 60 points.`],
 [R`Experiment participation gives 7.5 points, but only if both parts are completed.`, true, R`No partial credit.`],
 [R`Guest lecture points can be earned by watching a recording later.`, false, R`You must attend in person and scan the QR code.`],
 [R`Readings and company presentations are relevant for the exam.`, true, R`Stated on the admin slide.`],
 [R`Wrong statements in the MC part lead to minus points.`, false, R`0/5 correct gives 0 points — no minus points.`]]},
{lec:'cb-r2', area:'irr', q:R`Which statements about the McKinsey report "Irrational consumption" are correct?`, s:[
 [R`Many marketers still work with a linear, "Pac-Mannish" view of the consumer decision journey.`, true, R`The authors’ criticism.`],
 [R`Nudges are small changes in how options are presented that influence choices.`, true, R`The definition in the report.`],
 [R`Information inconsistent with a consumer’s beliefs is likely to be accepted more readily.`, false, R`It is likely to be rejected.`],
 [R`Focus groups are the best way to uncover how incidental cues affect consumers.`, false, R`Consumers are not aware of these cues; observational research reveals say–do gaps.`],
 [R`Concrete flooring (vs tile) makes consumers perceive products as better deals.`, true, R`One of the retail cue examples.`]]},
{lec:'cb-r2', area:'irr', q:R`FreshBite launches a tasty high-protein snack, but shoppers believe healthy snacks taste bad. Which recommendations follow from the McKinsey report?`, s:[
 [R`Let shoppers taste the snack first and reveal the health claim afterwards.`, true, R`Timing of disclosure.`],
 [R`Put the flavour claim on the front and the health claim on a side panel.`, true, R`Presentation: flavour is relevant to all, health to deliberate shoppers.`],
 [R`Put the health claim as large as possible on the front so nobody misses it.`, false, R`That activates the belief "healthy = unpalatable" during consumption.`],
 [R`Use observation to find gaps between what shoppers say and what they do.`, true, R`Uncovers unstated beliefs.`],
 [R`Beliefs cannot change taste experience, so only the recipe matters.`, false, R`Experience is malleable — beliefs can override it (wine bottle example).`]]},
{lec:'cb-r2', area:'irr', q:R`Which statements about goals and consumer pressures are correct?`, s:[
 [R`The strength of a need depends on which goal is currently active.`, true, R`Needs are not fixed.`],
 [R`Activating an exercise goal can raise sports-drink purchases even without workout plans.`, true, R`Goal activation example.`],
 [R`Activating a goal and appealing to a goal are the same thing.`, false, R`Appealing focuses on product and message; activating uses situational factors.`],
 [R`Decision fatigue means people choose differently after making a series of choices.`, true, R`Even unrelated choices matter.`],
 [R`In the iconic-product case, the company added many new features to the icon.`, false, R`Embellishing was too risky; small internal fixes kept it recognisable.`]]},
{lec:'cb-r3', area:'sens', q:R`Which statements about sensory marketing are correct?`, s:[
 [R`Sensory marketing engages the consumers’ senses and affects their perception, judgment and behaviour.`, true, R`Krishna’s definition.`],
 [R`It works mainly through explicit claims in advertising.`, false, R`It uses subconscious cues given off by the product itself.`],
 [R`It helps a product cut through advertising clutter.`, true, R`The product speaks for itself, no focused attention needed.`],
 [R`Perception is the biochemical stimulation of receptor cells.`, false, R`That is sensation; perception is the awareness or understanding.`],
 [R`Embodied cognition means bodily sensations influence decisions without conscious awareness.`, true, R`The research basis of sensory marketing.`]]},
{lec:'cb-r3', area:'sens', q:R`Which statements about the examples in Krishna’s note are correct?`, s:[
 [R`Amplified crunch sounds made potato chips taste crisper and fresher.`, true, R`Sound affects taste perception.`],
 [R`Listerine Zero was pulled because customers felt a painless mouthwash did not work.`, true, R`Perceived efficacy.`],
 [R`A pine-scented pencil’s selling points were remembered better two weeks later, even without the scent present.`, true, R`3.67 vs 0.87 of 10 points.`],
 [R`Louboutin’s red soles are a sensory signature protected in a lawsuit.`, true, R`Exclusive use of Chinese-red soles on shoes that are otherwise not red.`],
 [R`Krishna recommends engaging all five senses for every product.`, false, R`Hyping every sense will probably not work; pick the senses that fit.`]]},
{lec:'cb-r3', area:'sens', q:R`Which statements about touch, ownership and compliance are correct?`, s:[
 [R`The endowment effect means people value objects more highly once they own them.`, true, R`Definition.`],
 [R`Merely touching a product can create a feeling of ownership.`, true, R`Mere touch → perceived ownership → more likely to buy.`],
 [R`Imagined touch has no effect on perceived ownership.`, false, R`Haptic imagery can have the same effect as physical touch.`],
 [R`Touch screens can raise purchases of tempting food compared with a mouse-based computer.`, true, R`Direct-touch effect (airport iPad ordering).`],
 [R`Train toilets designed like a guest bathroom were left dirtier.`, false, R`They were left much cleaner — sensory cues increased compliance.`]]},
{lec:'cb-r4', area:'ab', q:R`Which statements about Ascarza’s A/B-testing research are correct?`, s:[
 [R`An insignificant average effect can hide subgroups that react positively and negatively.`, true, R`Arts organisation example.`],
 [R`High-churn-risk customers are always the best targets for retention campaigns.`, false, R`Little correlation between risk and sensitivity.`],
 [R`The field experiments covered fewer than 1,000 customers of a single company.`, false, R`More than 14,000 customers of two large companies.`],
 [R`Targeting the high-sensitivity group would have reduced churn by an additional 50% and 80%.`, false, R`An additional 5% and 8%.`],
 [R`In the telecom company, recency of engagement predicted sensitivity to the intervention.`, false, R`Recency predicted churn risk; data usage predicted sensitivity.`]]},
{lec:'cb-r4', area:'ab', q:R`StreamOn (a music subscription) wants to cut churn with a free-month offer. Which steps follow from Ascarza?`, s:[
 [R`Run a randomised pilot with an offer group and a control group.`, true, R`The A/B test is still the starting point.`],
 [R`Combine the test results with customer data to find who responds most.`, true, R`Move from prediction to prescription.`],
 [R`Send the offer only to the customers with the highest predicted churn risk.`, false, R`Risk ≠ sensitivity — target the most responsive customers.`],
 [R`Ask "For whom is this intervention most effective?"`, true, R`The key question of the article.`],
 [R`If the average effect is zero, stop the program immediately.`, false, R`The average can hide strong positive effects in a subgroup.`]]},
{lec:'cb-r5', area:'star', q:R`Which statements about Starbucks’s loyalty program are correct?`, s:[
 [R`Customers collect Stars, which lead to rewards and higher levels.`, true, R`Reinforcement and visible progress.`],
 [R`The Gold level brings a personalised Gold Card and more free food and drinks.`, true, R`Gold requires enough Stars within 12 months.`],
 [R`Mobile Order & Pay lets customers order and pay without speaking to an employee.`, true, R`Up to 7 million orders per week within three months.`],
 [R`Starbucks focuses on consistency across stores, service and a seamless experience.`, true, R`It cannot win on artisanal attributes, so it controls what it can.`],
 [R`By July 2015, 20% of Starbucks’ U.S. payments came through the app.`, true, R`Key figure of the case.`]]},
{lec:'cb-r5', area:'star', q:R`Which statements explain why Starbucks customers stay loyal?`, s:[
 [R`Rewarding each purchase makes repeating the behaviour more likely.`, true, R`Reinforcement — a learning principle.`],
 [R`The same drink, cup and name in every store creates a reliable experience.`, true, R`Consistency across locations.`],
 [R`My Starbucks Idea gave customers a voice in product and store decisions.`, true, R`Co-creation and belonging.`],
 [R`Starbucks saw employees as a cost to minimise, not as brand ambassadors.`, false, R`Schultz: employees are "the true ambassadors of our brand" — generous benefits.`],
 [R`Convenience (prepaid app, auto-reload, ordering ahead) helps turn buying into a habit.`, true, R`Less effort makes the routine stick.`]]},
{lec:'cb-r6', area:'emo', q:R`Which statements about "The New Science of Customer Emotions" are correct?`, s:[
 [R`The authors identified more than 300 emotional motivators.`, true, R`Their lexicon.`],
 [R`Fully connected customers are on average 52% more valuable than highly satisfied ones.`, true, R`Final step of the pathway.`],
 [R`Customers who are not emotionally connected are worth 18% less than highly satisfied ones.`, true, R`−18%.`],
 [R`Customers can usually name their emotional motivators accurately in surveys.`, false, R`Motivators are often unconscious and differ from the reasons customers give.`],
 [R`Turning dissatisfied into satisfied customers yields the highest return.`, false, R`Moving satisfied to fully connected can return three times as much.`]]},
{lec:'cb-r6', area:'emo', q:R`Which statements about the fashion retailer case are correct?`, s:[
 [R`"Fashion Flourishers" are the most emotionally connected and most valuable segment.`, true, R`Spend 468 vs 235 USD; spend/size ratio 1.9.`],
 [R`Flourishers are more price-sensitive than other customers.`, false, R`They are less price-sensitive.`],
 [R`"Belonging", "thrill" and "freedom" were the key motivators for the retailer.`, true, R`Strongest link to purchases.`],
 [R`Buy online, pick up in store was rolled out because customers rated it very important.`, false, R`Customers said it was unimportant; the model showed it speaks to "freedom".`],
 [R`Emotional connection became a KPI on the senior-management dashboard.`, true, R`Systematise, measure and learn.`]]},
{lec:'cb-r6', area:'emo', q:R`Which statements about the four insights on emotional motivators are correct?`, s:[
 [R`Motivators differ by category, e.g. "feel revived and refreshed" for fast-food loyalty.`, true, R`Insight 1.`],
 [R`Motivators are the same for all customer segments of a brand.`, false, R`They vary across segments (Millennials vs older bank customers).`],
 [R`In banking, "feel secure" matters early in the journey, "succeed in life" later when cross-selling.`, true, R`They vary along the customer journey.`],
 [R`Emotional connection can only be built through brand advertising.`, false, R`Opportunities exist across the whole experience (e.g. social media community).`],
 [R`A condiments brand found 60% of its social-network followers were emotionally connected vs 21% of all customers.`, true, R`Insight 4 example.`]]},
{lec:'cb-r7', area:'ai', q:R`Which statements about AI vs human recommendations are correct?`, s:[
 [R`Algorithm aversion means consumers favour AI over human experts in emotional decisions.`, false, R`The reverse: they favour human experts in subjective or emotional decisions.`],
 [R`For search products like electronics, AI recommendations are generally preferred.`, true, R`AI is seen as more transparent and credible for fact-based evaluations.`],
 [R`For experience products, consumers always prefer AI.`, false, R`The preference shifts to a highly experienced human expert.`],
 [R`Transparency leads to credibility, which raises the intention to follow a recommendation.`, true, R`The sequential effect.`],
 [R`Credibility is the perceived ability to provide complete and reliable information.`, false, R`That is transparency; credibility = expertise + trust to be objective.`]]},
{lec:'cb-r4', area:'ab', q:R`A gym tests a free personal-training session for members who might cancel. The average effect on renewals is zero. Following Ascarza, which conclusions are correct?`, s:[
 [R`The zero average may hide one group that renews more and another that renews less because of the offer.`, true, R`Exactly the arts-organisation lesson: the gift raised renewal for recent visitors and lowered it for long-inactive members.`],
 [R`The gym should look for the members who are most sensitive to the offer, using the test data plus its customer data.`, true, R`From prediction to prescription: combine A/B results with historical and demographic data to find who responds.`],
 [R`The offer should go to the members with the highest risk of cancelling, because they have the most to gain.`, false, R`Churn risk and sensitivity to the intervention were barely correlated in Ascarza’s experiments.`],
 [R`A reminder of an unused membership can push inactive members towards cancelling.`, true, R`That is the likely reason the gift reduced renewal for members who had not visited for a long time.`],
 [R`Because the average effect is zero, the test shows that the offer has no effect on anyone.`, false, R`An average of zero only means positive and negative reactions cancel out.`]]},
{lec:'cb-r5', area:'star', q:R`A bakery chain copies Starbucks and launches an app with points, a gold level and pre-ordering. Which statements describe why such a program changes behaviour?`, s:[
 [R`Rewarding every purchase with points reinforces the behaviour, so it is repeated.`, true, R`Reinforcement — the reward follows the desired behaviour.`],
 [R`Showing the points still needed for the next level uses goals and visible progress.`, true, R`Like the Stars counter and the Green/Gold levels.`],
 [R`Pre-ordering and paying in the app lowers the effort and helps the visit become a habit.`, true, R`Convenience — Mobile Order & Pay and auto-reload made the routine stick.`],
 [R`The program works mainly because the bakery offers the lowest prices in town.`, false, R`The case is about reinforcement, progress, convenience, personalisation and belonging — not price leadership.`],
 [R`According to the case, a chain cannot rely on such a program without also delivering a consistent product and service.`, true, R`Starbucks focuses on what it controls: consistency, service and a seamless experience.`]]},
{lec:'cb-r7', area:'ai', q:R`A travel platform wants to recommend (1) hotel rooms by price, size and distance and (2) a guided wine-tasting weekend. Following Mazzù et al., which statements are correct?`, s:[
 [R`For the hotel rooms, an AI recommendation fits well, because the attributes can be compared before the stay.`, true, R`Search products with standardised attributes → AI is seen as transparent and credible.`],
 [R`For the wine-tasting weekend, a recommendation from an experienced human expert is likely to be more persuasive.`, true, R`Experience products → human experts with lived experience are seen as more credible.`],
 [R`Consumers prefer AI for every product, because it processes more data than a human can.`, false, R`Algorithm aversion: for subjective, experience-based choices people favour humans.`],
 [R`If customers believe the AI cannot understand their personal taste, this is called uniqueness neglect.`, true, R`Uniqueness neglect — algorithms are thought unable to address a person’s unique characteristics.`],
 [R`Credibility of the source has no influence on whether customers follow the recommendation.`, false, R`Transparency → credibility → intention to follow the recommendation.`]]},
{lec:'cb-r7', area:'ai', q:R`Which statements about the mechanism behind AI and human recommendations are correct?`, s:[
 [R`Transparency is the perceived ability of a source to provide complete and reliable information.`, true, R`The article’s definition of transparency.`],
 [R`Credibility is the perception that the source has relevant expertise and gives an objective opinion.`, true, R`The article’s definition of credibility.`],
 [R`Higher transparency of a source raises its credibility, which raises the intention to follow it.`, true, R`The mediation chain of the article.`],
 [R`For objective tasks that need numerical precision, consumers may prefer AI.`, true, R`Algorithm aversion is strongest for subjective tasks; for objective ones AI can be preferred.`],
 [R`AI voice recommendations performed worse than text-based online reviews for search products.`, false, R`The opposite: for search products AI voice recommendations even beat text reviews.`]]}
];

// open-answer part (15 points): self-written practice questions with model answers
const CB_OPEN = [
{lec:'cb-1', q:R`Explain why brands are increasingly interchangeable and what this means for competition.`, a:R`About 85% of products tested by Stiftung Warentest are rated "good", and 64% of German consumers perceive brands as interchangeable. Products of different brands (e.g. smartphones, coffee) look and perform almost the same. As a result consumers show less interest in product information, lower loyalty and become price-oriented. Competition therefore shifts from product competition to communication competition: brands differentiate through communication, meaning and emotional connection rather than through product features — which is why understanding consumers and creating customer insight is essential.`},
{lec:'cb-1', q:R`Describe the three types of consumer decision making and place them on the continuum from impulsive to extensive buying decisions.`, a:R`Cognitive decisions are deliberate, rational and sequential; habitual decisions are behavioural, unconscious and automatic; affective decisions are emotional and instantaneous. Where a purchase lies depends on four dimensions: perceived product differences (low → impulsive, high → extensive), frequency of the same buying decision (high → impulsive, low → extensive), time pressure (high → impulsive, low → extensive) and involvement (low → impulsive, high → extensive). Katona orders impulsive, habitualised, limited and extensive decisions by increasing cognitive control; limited and extensive decisions are the cognitive buying decisions.`},
{lec:'cb-1', q:R`Explain heuristics and two biases with one example each. Why should marketers know them?`, a:R`Heuristics are mental rules of thumb used in habitual decisions because we cannot run the full five-stage process (need → search → evaluation → purchase → post-purchase evaluation) for every choice. Examples: country of origin ("made in Germany" = quality), higher price = higher quality, familiar brand names, covariation (a solid door sound signals a well-built car). They are usually helpful but can cause errors. Biases: loss aversion — losing USD 10 hurts more than finding USD 10 pleases; sunk cost fallacy — staying in a bad movie because tickets were expensive; mere exposure — repeated exposure increases liking. Marketers who know them understand why consumers deviate from "rational" choice and can design offers, prices and communication accordingly.`},
{lec:'cb-r2', q:R`Using the McKinsey report, explain how beliefs, goals and pressures shape consumer decisions, with one example each.`, a:R`Beliefs: experience is filtered through beliefs — wine tastes better from an expensive bottle; "healthy = unpalatable" lowers satisfaction, so let people taste first and show health claims less prominently. Goals: the active goal decides what consumers notice — a media company raised conversion by showing subscription offers later in the day instead of the busy morning; activating an exercise goal raises sports-drink sales. Pressures: decision fatigue and time pressure change choices — in real stores shoppers chose an iconic product quickly although a lab test without time pressure favoured cheaper competitors. Lesson: test real products with real consumers in real situations.`},
{lec:'cb-r3', q:R`What is sensory marketing and why is it more credible than advertising? Give three examples of how the senses affect consumers.`, a:R`Sensory marketing engages the consumers’ senses and affects their perception, judgment and behaviour, using subconscious cues given off by the product itself (Hershey’s Kiss). In advertising clutter, ads may be missed and are discounted as marketer claims; when the product speaks for itself, consumers draw their own inferences, which is more credible and needs no focused attention. Examples: sound — louder crunch makes chips taste fresher; smell — scent improves memory for brand information (pine-scented pencil); touch — mere touch creates ownership and raises willingness to buy (endowment effect); perceived efficacy — Listerine’s sting signals that it works.`},
{lec:'cb-r4', q:R`Explain why targeting retention campaigns at high-churn-risk customers can backfire, and what firms should do instead.`, a:R`A/B tests often only report the average effect, which can hide that some customers react positively and others negatively (gift to arts members helped recent visitors but hurt inactive ones). Ascarza’s field experiments with over 14,000 customers showed little correlation between churn risk and sensitivity to the intervention; targeting the high-sensitivity group with the same budget would have cut churn by an additional 5% and 8%. Firms should move from prediction to prescription: combine A/B test results with customer data to find who responds most (telecom: heavy data users), and ask "For whom is this intervention most effective?"`},
{lec:'cb-r5', q:R`Explain with principles of consumer learning why Starbucks Rewards and the app create loyalty.`, a:R`Reinforcement: each purchase earns Stars and rewards, so buying at Starbucks is rewarded and repeated. Goals and status: visible progress towards the next level and Gold status (personalised card, more free items) keep customers collecting. Habit through convenience: prepaid app with auto-reload and Mobile Order & Pay reduce effort, so the routine sticks. Personalisation: tailored offers and suggestive selling based on purchase history. Consistency: the same drink and cup with the customer’s name in every store. Belonging and voice: My Starbucks Idea and social media make customers part of the brand. Result: 20% of U.S. payments via the app by July 2015 and over 20 million members — with the risk of over-relying on mobile shoppers.`},
{lec:'cb-r6', q:R`Describe the emotional connection pathway and explain how a firm can use emotional motivators.`, a:R`Customers move from unconnected (−18% value vs highly satisfied) to highly satisfied (baseline) to perceiving brand differentiation (+13%) to fully connected (+52%). Moving satisfied customers to full connection can return three times as much as moving unconnected ones to satisfied. Firms should identify the emotional motivators (e.g. belonging, freedom, thrill, security) of their most valuable customers, knowing they vary by category, segment and journey stage, and act on them across all functions — the fashion retailer chose store locations near "Fashion Flourishers", introduced buy online/pick up in store (freedom) and selfie slide shows (belonging), and made emotional connection a KPI. Start: inventory and quantify motivators, analyse best customers, commit the whole firm.`},
{lec:'cb-r7', q:R`When should a company use AI and when human recommenders? Explain the mechanism.`, a:R`It depends on the product type. For search products with standardised, comparable attributes (electronics) consumers prefer AI, which processes large amounts of data and is seen as transparent and credible. For experience products (spa, gourmet meals) consumers follow a highly experienced human expert, because of algorithm aversion and uniqueness neglect in subjective decisions. Mechanism: perceived transparency (complete, reliable information) increases credibility (expertise and trust), which increases the intention to follow the recommendation.`}
];

const CB_CHEAT = [
{h:'Exam format', items:[
R`Written exam 16.12.2026 · 75 points: MC 60 (24 × 2.5) + open questions 15 · plus experiment 7.5 + guest lectures 3 × 2.5 = 90`,
R`MC: 5 statements, 1–5 can be correct · 5/5 → 2.5 · 4/5 → 1.5 · 3/5 → 1 · 2/5 → 0.5 · 1/5 → 0.25 · no minus points`,
R`Readings and company presentations are exam-relevant · questions on the guest talks (slides may not be shared) · recap & Q&A 08.12.`]},
{h:'LS 1 · Basics', items:[
R`CB = process whereby individuals decide what, when, where, how and from whom to purchase goods or services`,
R`Segmentation: income, age, lifestyle, social class, family structure, geography, gender — not enough (King Charles vs Ozzy) → learning, preferences, motivation, attitudes, perception`,
R`Interchangeability: 85% of tested products "good" · 64% see brands as interchangeable (2022) → less interest in info, lower loyalty, price focus → product → communication competition`,
R`Model: stimuli (emotional, cognitive, physical) → filter → cognitive (reception, perception & evaluation, learning, memory) + activating (emotion, motivation, attitude) → decision → behaviour`]},
{h:'LS 1 · Decisions', items:[
R`Cognitive (deliberate, rational, sequential) · habitual (behavioural, unconscious, automatic) · affective (emotional, instantaneous)`,
R`Katona: impulsive → habitualised → limited → extensive (cognitive control ↑; Krugman: involvement ↑) · limited + extensive = cognitive buying decisions`,
R`Extensive: high product differences, low frequency, low time pressure, high involvement`,
R`Need recognition → information search → evaluation of alternatives → purchase → post-purchase evaluation`,
R`Heuristics: covariation, country of origin, familiar brand names, higher prices · biases: loss aversion, mere exposure, sunk cost fallacy`]},
{h:'Reading LS 2 · Irrational consumption', items:[
R`Not "Pac-Man" · nudges · beliefs (wine bottle, healthy = unpalatable → experience first, health claim on side panel; concrete floor = deal) · goals (paywall offer later in the day; activate vs appeal) · pressures (decision fatigue, time pressure; iconic product) · test real products, real consumers, real situations`]},
{h:'Reading LS 3 · Sensory marketing', items:[
R`Engages the senses → perception, judgment, behaviour · product speaks for itself → cuts clutter · sensation (receptors) vs perception (understanding)`,
R`Signatures (Tiffany, Louboutin, Intel, Hello Moto) · memory (smell → amygdala–hippocampus; pencil 3.67 vs 0.87) · efficacy (Listerine) · human voices · spoon/hand & touch screens · multisensory ads → taste · endowment & touch · compliance`,
R`Managers: build on existing assets, fitting senses only, test, no mixed messages/overload · Singapore Airlines scent, lemon detergent, El Bulli, Ventoso`]},
{h:'Reading LS 4 · A/B testing', items:[
R`Average effect can hide positive and negative subgroups (gift: recent visitors ↑, inactive ↓) · 14,000+ customers: churn risk ≠ sensitivity → +5% / +8% churn reduction · telecom: data usage predicts sensitivity · prediction → prescription · "For whom is it most effective?"`]},
{h:'Reading LS 5 · Starbucks', items:[
R`Stars, Green/Gold levels, Mobile Order & Pay, personalisation, consistency (same cup & name), My Starbucks Idea, employees as ambassadors · 20% of U.S. payments via app (7/2015) · 20 M+ members · risk: over-reliance on mobile shoppers`]},
{h:'Reading LS 6 · Customer emotions', items:[
R`300+ emotional motivators · pathway −18% → baseline → +13% → +52% · satisfied → fully connected = 3× return · varies by category, segment, journey; across the whole experience · Fashion Flourishers (belonging, thrill, freedom) · start: inventory → best customers → firm-wide`]},
{h:'Reading LS 7 · Humans or AI', items:[
R`Algorithm aversion · uniqueness neglect · search products → AI, experience products → experienced human · transparency → credibility → intention to follow`]}
];


/* ---------- Case Recognizer: situation → which heuristic, bias or decision type (lecture 1) ---------- */
// [situation, group, answer, why]
const CB_CASES = [
 ['Lena tests two used cars. One door closes with a heavy, solid sound, so she assumes the whole car is well built.', 'hb', 'cov', 'One cue (door sound) is taken as a sign of overall quality — covariation.'],
 ['In the supermarket, Tom picks the olive oil labelled "Made in Italy" because Italian oil must be good.', 'hb', 'coo', 'The origin works as a quality signal — country of origin.'],
 ['Abroad, Mia buys a Coca-Cola instead of the unknown local cola, because she knows the brand.', 'hb', 'brand', 'A known name feels safe and works as a trust shortcut — familiar brand names.'],
 ['Jonas chooses the 89-euro wine over the 12-euro wine for a dinner: "the expensive one will be better".', 'hb', 'price', 'Price is used as a signal of quality — higher-price heuristic.'],
 ['A shop says "You lose your 20 euro discount if you don’t order today" instead of "Get 20 euro off today" — and it works better.', 'hb', 'loss', 'Framing as a loss: losses weigh more than equal gains — loss aversion.'],
 ['Sara found a new song annoying at first, but after hearing it in every café for two weeks she likes it.', 'hb', 'mere', 'Repeated exposure alone increases liking — mere exposure effect.'],
 ['Paul keeps paying for a language app he never uses, because he "already paid for six months".', 'hb', 'sunk', 'Past, unrecoverable payments drive the decision — sunk cost fallacy.'],
 ['A brand places its logo on the same bus stop that commuters pass every morning for months.', 'hb', 'mere', 'The strategy relies on repeated exposure building liking — mere exposure.'],
 ['A customer judges a hotel by the thickness of its towels: thick towels → the whole hotel must be high quality.', 'hb', 'cov', 'A single cue stands for overall quality — covariation.'],
 ['A buyer refuses to sell shares below the purchase price, even though the outlook is bad: "I don’t want to realise the loss."', 'hb', 'loss', 'Avoiding the pain of a realised loss — loss aversion.'],
 ['A student finishes a boring, expensive online course "so the money isn’t wasted".', 'hb', 'sunk', 'Continuing because of what was already invested — sunk cost fallacy.'],
 ['German machine tools are marketed abroad with the line "Engineered in Germany".', 'hb', 'coo', 'Country of origin as a quality cue.'],
 ['At the checkout, Ben grabs a chocolate bar he had not planned to buy.', 'kat', 'imp', 'Lowest cognitive control, no planning — impulsive decision.'],
 ['Every Monday Anna buys the same brand of coffee without looking at other brands.', 'kat', 'hab', 'A repeated purchase on autopilot — habitualised decision.'],
 ['Before buying new sunglasses, Max compares three models in one shop for ten minutes.', 'kat', 'lim', 'Some deliberate comparison, but bounded effort — limited decision.'],
 ['Before buying his first car, Leo reads tests for weeks, compares prices and test-drives five models.', 'kat', 'ext', 'High involvement, high perceived differences, rare decision, no time pressure — extensive decision.'],
 ['Julia picks a perfume after trying four scents at the counter.', 'kat', 'lim', 'Deliberate comparison of a few alternatives — limited decision.'],
 ['Tim always fills up at the same petrol station on his way to work.', 'kat', 'hab', 'Routine purchase without new evaluation — habitualised decision.'],
 ['Nora walks through the five stages carefully: she needs a laptop, researches, compares, buys and later reviews her choice.', 't3', 'cog', 'Deliberate, rational, sequential — cognitive decision making.'],
 ['Kai buys concert tickets the second the presale opens because he feels excited.', 't3', 'aff', 'Emotional and instantaneous — affective decision making.'],
 ['Each morning Emma takes the same yoghurt from the shelf without thinking.', 't3', 'hab', 'Behavioural, unconscious, automatic — habitual decision making.'],
 ['Moved by a touching advert, Leon donates on the spot.', 't3', 'aff', 'An emotional, immediate reaction — affective decision making.'],
 ['Before signing a mobile contract, Sophie lists her needs, compares tariffs in a table and decides.', 't3', 'cog', 'Deliberate and sequential evaluation of alternatives — cognitive decision making.']
];
const CB_CASE_OPTS = {
 hb:[['cov','Covariation'],['coo','Country of origin'],['brand','Familiar brand name'],['price','Higher-price heuristic'],['loss','Loss aversion'],['mere','Mere exposure effect'],['sunk','Sunk cost fallacy']],
 kat:[['imp','Impulsive'],['hab','Habitualised'],['lim','Limited'],['ext','Extensive']],
 t3:[['cog','Cognitive'],['hab','Habitual'],['aff','Affective']]
};
const CB_CASE_Q = {hb:'Which heuristic or bias is at work?', kat:'Which decision type (Katona)?', t3:'Which type of decision making?'};
