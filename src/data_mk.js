/* ============================================================ BASIC PRINCIPLES OF MARKETING DATA (Prof. Henkel, Fall Term 2026) ============================================================ */
// Plain text (no KaTeX: never use the dollar sign). Summary markup: "- " bullets, "Term :: Description" vocab rows, "=> A (desc) → B" flows, **bold**.
// New lectures: add a topic to MK_TOPICS (id mk-N), its areas to MK_AREAS and exam-format items to MK_MC with the area id.
const PLAN_EXAM_MK = new Date(2026,11,16); // written exam 16.12.2026 (slot 13:30–16:00, shared with Fundamentals of Consumer Behaviour)

// sessions from the admin slides — lectures without slides yet are listed as "coming"
const MK_SESSIONS = [
  {n:1, date:'Tue 13 Oct', title:'Marketing and Customer Centricity', topic:'mk-1'},
  {n:2, date:'Mon 19 Oct', title:'Understanding the Customer in B2C and B2B Settings', topic:'mk-2'},
  {n:3, date:'21–23 Oct', title:'Experiment participation (no class) — on campus, Burg, Room Bangalore'},
  {n:4, date:'Tue 27 Oct', title:'Marketing Strategy and Planning', topic:'mk-3'},
  {n:5, date:'Wed 4 Nov', title:'Conceptualization of Products and Services — in class: Lecture 03 finished (competitor analysis, PESTEL case, PLC, BCG + exam hints, see Strategy and Planning)', topic:'mk-3'},
  {n:6, date:'Mon 9 Nov', title:'Conceptualizing Products and Services (Lectures 04 + 05)', topic:'mk-4'},
  {n:7, date:'Wed 11 Nov', title:'Marketing Communication and Campaigning (Lecture 06)', topic:'mk-6'},
  {n:8, date:'Mon 16 Nov', title:'Distribution and Omnichannel Management'},
  {n:9, date:'Fri 20 Nov', title:'Guest talk: Daniel Hagemeier, multiple entrepreneur & CEO of group.one (15:30–17:00, New Forum)'},
  {n:10, date:'Mon 23 Nov', title:'End of Lecture 06 (6 Cs not in exam) + Distribution and Omnichannel Management (Lecture 07)', topic:'mk-7'},
  {n:11, date:'Mon 30 Nov', title:'Guest talk: Simon Buehler, Global Employer Branding Lead at DHL (15:30–17:00, New Forum)'},
  {n:12, date:'Mon 7 Dec', title:'Guest talk: Carl Kuhn, Head of Esports & board member at Jung von Matt SPORTS (15:30–17:00, hybrid, Atrium 80)'},
  {n:13, date:'Mon 7 Dec', title:'Exam prep & Q&A session'},
  {n:14, date:'Wed 16 Dec', title:'EXAM'}
];

const MK_AREAS = [
  {id:'def', lec:'mk-1', label:'Marketing & marketing management'},
  {id:'mkt', lec:'mk-1', label:'Framework, markets & what is marketed'},
  {id:'cc', lec:'mk-1', label:'Customer centricity'},
  {id:'val', lec:'mk-1', label:'Emotional connection & customer value'},
  {id:'case', lec:'mk-1', label:'Cases: why 6PM & the stadium work'},
  {id:'need', lec:'mk-2', label:'Needs, need types & Maslow'},
  {id:'mot', lec:'mk-2', label:'Motivation & laddering'},
  {id:'ben', lec:'mk-2', label:'Customer benefits'},
  {id:'sat', lec:'mk-2', label:'Satisfaction & KANO'},
  {id:'ins', lec:'mk-2', label:'Customer insight & journey'},
  {id:'b2b', lec:'mk-2', label:'B2C vs B2B & B2B characteristics'},
  {id:'bc', lec:'mk-2', label:'Buying center, relationship marketing & B2B2C'},
  {id:'spp', lec:'mk-3', label:'Strategic planning process'},
  {id:'int', lec:'mk-3', label:'Resources, competencies, capabilities'},
  {id:'ext', lec:'mk-3', label:'Trends & PESTEL'},
  {id:'five', lec:'mk-3', label:'Porter’s Five Forces'},
  {id:'plc', lec:'mk-3', label:'Product life cycle'},
  {id:'bcg', lec:'mk-3', label:'BCG Matrix'},
  {id:'prod', lec:'mk-4', label:'Products vs services & product components'},
  {id:'ans', lec:'mk-4', label:'Ansoff Matrix'},
  {id:'impr', lec:'mk-4', label:'Product improvement & differentiation'},
  {id:'port', lec:'mk-4', label:'Portfolio dimensions & product lines'},
  {id:'mod', lec:'mk-4', label:'Modification, diversification & bundling'},
  {id:'svc', lec:'mk-5', label:'Service characteristics & relevance'},
  {id:'sdiff', lec:'mk-5', label:'Service differentiation'},
  {id:'sq', lec:'mk-5', label:'Service quality'},
  {id:'dig', lec:'mk-5', label:'New service realities (digital age)'},
  {id:'proc', lec:'mk-6', label:'Communication process & modern communication'},
  {id:'aida', lec:'mk-6', label:'AIDA'},
  {id:'camp', lec:'mk-6', label:'Campaign steps, audience & objectives'},
  {id:'msg', lec:'mk-6', label:'Message & budget'},
  {id:'media', lec:'mk-6', label:'Media, media plan & measurement (CPM)'},
  {id:'imc', lec:'mk-6', label:'Integrated marketing communications (6 Cs not in exam)'},
  {id:'dfun', lec:'mk-7', label:'Role & functions of distribution'},
  {id:'dlev', lec:'mk-7', label:'Channel levels B2C & B2B'},
  {id:'pow', lec:'mk-7', label:'Channel power (5 sources)'},
  {id:'conf', lec:'mk-7', label:'Channel conflicts'},
  {id:'omni', lec:'mk-7', label:'Single → multi → omnichannel'}
];

const MK_TOPICS = [
{id:'mk-1', ch:1, title:'Marketing and Customer Centricity', date:'13 Oct 2026',
examWeight:'Definitions (marketing vs marketing management), the market, the 4Ps framework, Amazon’s customer-centricity principles, product- vs customer-centric organizations and customer value — all classic statement-checking material for the MC part',
summary:R`**Learning goals of lecture 1:** define marketing and marketing management, describe markets and the goal of marketing, know the principles of customer centricity, distinguish product-centric from customer-centric organizations, explain how the emotional connection to a brand affects customer value, and define customer value and the customer value proposition.

**Opening case: why is Achraf Bouzalim a marketing genius?** ("#marketing = to market"). His fashion label 6PM sells limited drops that sell out within minutes, grows almost only through Instagram and TikTok, and keeps its price stable despite the shortage. The facts are only the example — the point is **why this works on people**:
- Scarcity :: what is rare and hard to get is perceived as more valuable; limited drops turn buying into an event and create fear of missing out ("if I wait, it is gone")
- Belonging and identity :: wearing the brand signals "I am part of this group" — customers buy a social identity, not just a hoodie (benefit = image, not only product)
- Social proof and authenticity :: people trust peers, creators and real moments more than paid ads; organic posts and an unplanned celebrity moment (Lamine Yamal showing the logo in the World Cup final) feel genuine, so demand spreads by itself
- Fairness and trust :: keeping the price stable when demand exceeds supply shows the brand is not exploiting its fans — that protects the emotional connection
- Experiences and touchpoints :: pop-ups and a festival let fans meet the brand and each other, which deepens the emotional bond
- Link to the lecture :: this is exactly the "fully connected" customer (+52 % value) — the brand wins through emotional connection and perceived benefits (image, belonging), not through the lowest price

**Marketing** is about identifying and meeting human and social needs in a way that harmonizes with the goals of the organization.
- It is the activity, set of institutions and processes of **creating, communicating, delivering and exchanging offerings** that have value for customers, clients, partners and society at large.
- It is about **co-creating value** among consumers and with business.

**Marketing management** takes place when at least one party to a potential exchange thinks about the means of achieving desired responses from other parties. It is the art and science of **choosing target markets** and **getting, keeping and growing customers** through creating, delivering and communicating **superior customer value**.

**The overall marketing framework** sits inside two environments. The outer one is the socio-cultural environment (culture, politics, trends); inside it is the market environment (market size, competition, innovation cycles). Within the market environment, companies and consumers meet through the four instruments:
- Companies bring :: heritage, vision, resources, competencies, culture
- The instruments in between :: product, price, promotion, place (the 4Ps)
- Consumers/customers bring :: needs, lifestyle, motives, knowledge, routines

**The market as the reference object of marketing.** Traditionally, a "market" was a physical place where buyers and sellers gathered to buy and sell goods. Today a market can be described as a **collection of buyers and sellers who negotiate transactions** that involve a particular product or product class.

**The goal of marketing** is to know and understand the customer so well that the product or service fits him and sells itself. Ideally, marketing should result in a customer who is ready to buy.

**What can be marketed?** Ten types of entities:
- Goods and services
- Events and experiences
- Persons and places
- Properties and organizations
- Information and ideas

**Why should you know Sven before trying to sell him something?** The hashtag is "#customercentricity": you can only sell well if you understand the person you sell to.

**Customer centricity principles at Amazon.** Three principles sit around "CC Principles":
=> Listen (you cannot run any business without listening to customers) → Customer perception counts, not the firm’s perspective → Customer focus
=> Invent (observe the customer to see what they cannot articulate) → Observing difficulties in search, buy and use provides potential for innovation → Customer journey
=> Personalize (make the customer feel home and understood) → Identification and routine behaviour determine trust → Customer experience

**Learning from legends:**
- Jeff Bezos :: "Start with the customer and work backwards."
- Steve Jobs :: "Get closer than ever to your customers. So close that you can tell them what they need well before they realize it themselves."

**Product-centric vs customer-centric organization.** In the product-centric organization the product or service sits in the middle with customers around it; the customer-centric organization puts the customer in the middle with products and services around him.
- Product-centric organization :: product driven, mass-market focused, process oriented, reacting to competitors, price driven, hierarchical organization
- Customer-centric organization :: market driven, customer focused, outcome oriented, making competitors irrelevant, value driven, teamwork

**Case: how to increase the revenues of Deutsche Bank Park?** The question slide shows the Frankfurt stadium at night. The answer slide shows the same arena used beyond football matches:
- Concerts :: the stadium filled with a concert crowd
- Business events :: corporate events and networking in the stands, next to the pitch
- Arena of IoT :: the stadium as a test field where tech partners try out digital solutions (e.g. queue management, stadium navigation)

The principle behind it: don’t define your business by your product ("we host football matches") but by the **needs of different customer groups** — fans want experiences, companies want an impressive place to meet clients, tech firms want a real-world test field. Same asset, more customer groups, more value. That is the customer-centric view: start with the customer and work backwards.

**Customer centricity and customer value.** Magids, Zorfas and Leemon studied more than 400 firms in 30 categories. Customer value is measured in relation to highly satisfied customers (baseline):
- Not emotionally connected :: −18 %
- Highly satisfied but not fully connected :: baseline
- Perceive brand differentiation and satisfied, but not fully connected :: +13 %
- Fully connected: satisfied and able to perceive brand differentiation :: +52 %

The key point: satisfaction alone is only the baseline. Customers who are emotionally fully connected to a brand are worth about half as much again as merely highly satisfied ones.

**Customer value** is the difference between the prospective customer’s evaluation of all the benefits and costs of an offering and her or his evaluation of the costs and benefits of the perceived alternatives.
- Total customer benefit :: the perceived value of the benefits customers expect from a given market offering because of the product, service and image
- Total customer cost :: the perceived bundle of functional, psychological and monetary costs customers will incur in evaluating, obtaining, using and disposing of the given market offering

**The customer value proposition** is based on the difference between the benefits the customer gets and the costs the customer assumes for different choices. The marketer can increase the value of the offering by **raising the benefits and/or reducing the corresponding costs**. The value proposition consists of the **whole cluster of benefits** the company promises to deliver.

**Lessons learned:**
- Marketing identifies and meets human and social needs; marketing management chooses target markets and gets, keeps and grows customers through superior customer value.
- A market is a collection of buyers and sellers negotiating transactions for a product class.
- Customer centricity means listening to customers, observing what they cannot articulate and making them feel understood: the customer’s perception counts, not the firm’s perspective.
- A customer-centric organization is market driven, customer focused, outcome oriented, value driven and team based; a product-centric one is product driven, mass-market focused, process oriented and hierarchical.
- Customer value is the difference between total customer benefit and total customer cost, so value rises when benefits increase or costs decrease.`,
cards:[
{q:R`Definition of marketing`, a:R`Identifying and meeting human and social needs in a way that harmonizes with the goals of the organization; the activity, institutions and processes of creating, communicating, delivering and exchanging offerings that have value for customers, clients, partners and society; co-creating value among consumers and with business.`},
{q:R`Definition of marketing management`, a:R`Takes place when at least one party to a potential exchange thinks about the means of achieving desired responses from other parties. The art and science of choosing target markets and getting, keeping and growing customers through creating, delivering and communicating superior customer value.`},
{q:R`What is a market?`, a:R`Traditionally a physical place where buyers and sellers gathered. Today: a collection of buyers and sellers who negotiate transactions involving a particular product or product class.`},
{q:R`Goal of marketing`, a:R`Know and understand the customer so well that the product or service fits him and sells itself — ideally a customer who is ready to buy.`},
{q:R`Layers of the overall marketing framework`, a:R`Socio-cultural environment (culture, politics, trends) → market environment (market size, competition, innovation cycles) → companies (heritage, vision, resources, competencies, culture) and consumers (needs, lifestyle, motives, knowledge, routines), linked by product, price, promotion, place.`},
{q:R`Ten things that can be marketed`, a:R`Goods, services, events, experiences, persons, places, properties, organizations, information, ideas.`},
{q:R`Amazon’s three customer-centricity principles`, a:R`Listen (customer perception counts → customer focus); Invent (observe what customers cannot articulate; difficulties in search, buy, use → customer journey); Personalize (make the customer feel home and understood; identification and routines determine trust → customer experience).`},
{q:R`"Start with the customer and work backwards" vs "Get closer than ever to your customers …"`, a:R`The first is Jeff Bezos; the second (tell them what they need before they realize it themselves) is Steve Jobs.`},
{q:R`Product-centric organization: six characteristics`, a:R`Product driven, mass-market focused, process oriented, reacting to competitors, price driven, hierarchical organization.`},
{q:R`Customer-centric organization: six characteristics`, a:R`Market driven, customer focused, outcome oriented, making competitors irrelevant, value driven, teamwork.`},
{q:R`Emotional connection and customer value (400+ firms, 30 categories)`, a:R`Relative to highly satisfied customers (baseline): not emotionally connected −18 %; satisfied and perceiving brand differentiation but not fully connected +13 %; fully connected (satisfied and perceiving differentiation) +52 %.`},
{q:R`Customer value`, a:R`Difference between the customer’s evaluation of all benefits and costs of an offering and the evaluation of the costs and benefits of the perceived alternatives.`},
{q:R`Total customer benefit vs total customer cost`, a:R`Benefit: perceived value of benefits expected from the offering because of product, service and image. Cost: perceived bundle of functional, psychological and monetary costs of evaluating, obtaining, using and disposing of the offering.`},
{q:R`Customer value proposition`, a:R`Based on the difference between benefits received and costs assumed for different choices; value rises by raising benefits and/or reducing costs; it is the whole cluster of benefits the company promises to deliver.`},
{q:R`Why does 6PM work on people? (principles, not facts)`, a:R`Scarcity (limited drops → rare = valuable, fear of missing out) · belonging and identity (customers buy group membership and image) · social proof and authenticity (organic posts, an unplanned celebrity moment beat paid ads) · fairness and trust (stable price despite shortage) · experiences (pop-ups, festival) → full emotional connection.`},
{q:R`Deutsche Bank Park: the principle behind more revenue`, a:R`Define the business by customer needs, not by the product: fans want experiences (concerts), companies a place to meet clients (business events), tech firms a test field (Arena of IoT). Same asset, more customer groups.`}
],
quiz:[
{q:R`Which statement matches the course definition of marketing management?`, opts:[R`Choosing target markets and getting, keeping and growing customers through superior customer value`,R`Identifying and meeting human and social needs in a way that harmonizes with the goals of the organization`,R`Setting prices and promotions so that the firm maximizes its short-term revenue in every single market it serves`,R`Coordinating all advertising, sales and distribution activities of the company across every available online and offline channel`], correct:0, exp:R`Marketing management is "the art and science of choosing target markets and getting, keeping, and growing customers through creating, delivering, and communicating superior customer value". Identifying and meeting needs is the definition of marketing itself.`, area:'def'},
{q:R`When does marketing management take place?`, opts:[R`Only when a firm has set up a dedicated marketing department with its own budget, targets and a responsible manager`,R`When at least one party to a potential exchange thinks about means of achieving desired responses from other parties`,R`When a new product is launched on a market where the company has never sold before and needs awareness`,R`When buyers and sellers meet at a physical place`], correct:1, exp:R`The slide: marketing management takes place when at least one party to a potential exchange thinks about the means of achieving desired responses from other parties. No department or launch is required.`, area:'def'},
{q:R`Which pair belongs to the definition of marketing (not marketing management)?`, opts:[R`Choosing target markets; getting, keeping and growing customers through superior value`,R`Market size, competition and innovation cycles of the industry`,R`Co-creating value; offerings with value for society at large`,R`Heritage; vision`], correct:2, exp:R`Marketing is the activity and processes of creating, communicating, delivering and exchanging offerings that have value for customers, clients, partners and society at large, and it is about co-creating value. Target markets belong to marketing management; market size is the market environment; heritage and vision are company factors.`, area:'def'},
{q:R`In the overall marketing framework, which factors belong to the consumer side?`, opts:[R`Heritage, vision, resources, competencies, culture`,R`Culture, politics, trends and values of the society`,R`Market size, competition, innovation cycles`,R`Needs, lifestyle, motives, knowledge, routines`], correct:3, exp:R`Consumers/customers bring needs, lifestyle, motives, knowledge and routines. Heritage to culture are company factors, culture/politics/trends the socio-cultural environment, market size to innovation cycles the market environment.`, area:'mkt'},
{q:R`"Innovation cycles" belong to which layer of the marketing framework?`, opts:[R`The market environment`,R`The socio-cultural environment`,R`The company side`,R`The consumer side`], correct:0, exp:R`The market environment covers market size, competition and innovation cycles. The socio-cultural environment around it covers culture, politics and trends.`, area:'mkt'},
{q:R`How does the course describe a market today?`, opts:[R`A physical place where goods are exchanged for money, typically a weekly market square in a town or city`,R`All current and potential customers of a single company, independent of which products or product classes they buy`,R`A collection of buyers and sellers negotiating transactions for a particular product or product class`,R`The set of all competitors that offer identical or very similar products to the same group of customers`], correct:2, exp:R`Traditionally a market was a physical place; today it is described as a collection of buyers and sellers who negotiate transactions that involve a particular product or product class.`, area:'mkt'},
{q:R`According to the slides, what is the ideal result of marketing?`, opts:[R`A product with the lowest price in its category, so that customers choose it over every competing offer`,R`A customer who is ready to buy, because the offering fits him and sells itself`,R`The largest possible advertising reach in the target group, so that every potential buyer has seen the brand several times`,R`A sales force that can sell any product`], correct:1, exp:R`The goal of marketing is to know and understand the customer so well that the product or service fits him and sells itself; ideally marketing results in a customer who is ready to buy.`, area:'mkt'},
{q:R`Which of these is NOT one of the ten entities that can be marketed?`, opts:[R`Ideas`,R`Persons`,R`Places`,R`Competitors`], correct:3, exp:R`The ten entities are goods, services, events, experiences, persons, places, properties, organizations, information and ideas. Competitors are not on the list.`, area:'mkt'},
{q:R`In Amazon’s customer-centricity principles, which principle leads to innovation along the customer journey?`, opts:[R`Listen`,R`Invent`,R`Personalize`,R`Optimize`], correct:1, exp:R`Invent: observe the customer to see what they cannot articulate; difficulties in search, buy and use provide potential for innovation along the customer journey. Listen leads to customer focus, Personalize to customer experience. "Optimize" is not a principle.`, area:'cc'},
{q:R`"Identification and routine behaviour determine trust" belongs to which Amazon principle?`, opts:[R`Personalize`,R`Listen`,R`Invent`,R`Observe`], correct:0, exp:R`Personalize: make the customer feel home and understood; identification and routine behaviour determine trust, which leads to customer experience.`, area:'cc'},
{q:R`Who said "Start with the customer and work backwards"?`, opts:[R`Steve Jobs`,R`Jeff Bezos`,R`Philip Kotler`,R`Sven Henkel`], correct:1, exp:R`Jeff Bezos (Amazon’s "working backwards"). Steve Jobs’ quote on the slide is "Get closer than ever to your customers …".`, area:'cc'},
{q:R`Which characteristic describes a customer-centric organization?`, opts:[R`Reacting to competitors`,R`Process oriented`,R`Making competitors irrelevant`,R`Mass-market focused with standard offers`], correct:2, exp:R`Customer-centric: market driven, customer focused, outcome oriented, making competitors irrelevant, value driven, teamwork. The other three options are product-centric traits.`, area:'cc'},
{q:R`Which pair names a product-centric trait first and its customer-centric counterpart second?`, opts:[R`Value driven vs price driven`,R`Outcome oriented vs process oriented`,R`Teamwork vs hierarchical organization`,R`Price driven vs value driven`], correct:3, exp:R`Product-centric is price driven, customer-centric value driven. The other pairs are reversed: process oriented, hierarchical and price driven are on the product-centric side.`, area:'cc'},
{q:R`Compared with highly satisfied customers, how much more value do fully connected customers bring in the study of 400+ firms?`, opts:[R`+13 %`,R`+18 %`,R`+52 %`,R`+25 %`], correct:2, exp:R`Fully connected customers (satisfied and able to perceive brand differentiation) bring +52 %. +13 % is for customers who perceive differentiation and are satisfied but not fully connected; −18 % for not emotionally connected customers.`, area:'val'},
{q:R`Which costs belong to total customer cost?`, opts:[R`Functional, psychological and monetary costs`,R`Only the price paid at purchase`,R`Production, distribution and marketing costs of the firm`,R`Fixed and variable costs of the offering`], correct:0, exp:R`Total customer cost is the perceived bundle of functional, psychological and monetary costs of evaluating, obtaining, using and disposing of the offering. It is the customer’s view, not the firm’s cost structure.`, area:'val'},
{q:R`How can a marketer increase customer value according to the slides?`, opts:[R`Only by lowering the price, because the monetary cost is the only cost the customer perceives`,R`Only by adding further product features and technical functions to the offering`,R`By raising benefits and/or reducing the corresponding costs`,R`By increasing advertising spending so that more customers learn about the offering`], correct:2, exp:R`Customer value is benefit minus cost relative to alternatives, so it rises when benefits increase and/or costs decrease. The value proposition is the whole cluster of benefits promised.`, area:'val'},
{q:R`Why do limited "drops" like 6PM’s make customers want the product more?`, opts:[R`Scarcity: what is rare and hard to get is perceived as more valuable and creates fear of missing out`,R`Limited quantities lower production costs, so the brand can offer a lower price than competitors`,R`Customers prefer products that are always available, so drops mainly reduce the risk of overstock`,R`Drops allow the brand to raise prices whenever demand exceeds supply`], correct:0, exp:R`The principle is scarcity: rare goods feel more valuable and buying becomes an event. The price is kept stable on purpose — raising it would feel like exploiting the fans and damage trust.`, area:'case'},
{q:R`Why can organic growth on Instagram and TikTok beat paid advertising for a brand like 6PM?`, opts:[R`Paid ads are forbidden for fashion brands on these platforms`,R`Organic posts reach more people than any paid campaign could`,R`People trust peers, creators and real moments more than ads — social proof and authenticity spread demand by themselves`,R`Organic content is the only way to reach customers older than 40`], correct:2, exp:R`Social proof and authenticity: content shared by real fans or an unplanned celebrity moment feels genuine, so it is more convincing than a paid ad.`, area:'case'},
{q:R`What does the Deutsche Bank Park case illustrate?`, opts:[R`Raising ticket prices for football matches`,R`Using the arena for concerts, business events and digital pilots`,R`Selling the naming rights of the stadium to another bank or a larger sponsor with a longer contract`,R`Reducing the number of home games`], correct:1, exp:R`The answer slide shows the stadium used for concerts, business events and the "Arena of IoT", a test field for partners’ digital solutions — more revenue by serving further customer needs for a venue, not only the product football.`, area:'case'}
]},
{id:'mk-2', ch:2, title:'Understanding the Customer in B2C and B2B Settings', date:'19 Oct 2026',
examWeight:'Needs → motivation → benefits → value, Maslow’s five levels, the five benefit types, satisfaction and the KANO model, the customer insight and its three characteristics, B2C vs B2B, the nine B2B characteristics, the six buying-center roles and relationship marketing — definition-heavy, ideal statement-checking material',
summary:R`**Learning goals of lecture 2 (part 1, the customer in general):** define customer needs, motivations and benefits as drivers of customer value, understand Maslow’s hierarchy of needs and how its five levels relate, define customer satisfaction and interpret it with the KANO model, and explain the customer insight concept with its three characteristics.

**Opening question: why do you buy the latest smartphone every two years — and why does it have to be an iPhone?** ("#NeedsMotivesBenefits"). The phone itself is only the example. The point is that a purchase is driven by layers: a need (staying connected, belonging, recognition), a motivation strong enough to act now, and the benefits the brand promises (function, but above all emotion and social status). Customers rarely buy the device — they buy what it does for them.

**From customer understanding to value contribution.** Three overlapping circles, with customer value in the overlap:
- Customer needs :: "recognizing gaps" — the gap between the state the customer experiences and the state he desires
- Customer motivation :: "driving activity" — what pushes the customer to actually act
- Customer benefits :: "contributing solutions" — what the offering delivers to close the gap
- Customer value :: arises where all three meet

**Needs** are the basic human requirements, such as air, food, water, clothing and shelter.
- Biological needs arise from physiological states of tension such as hunger, thirst or discomfort.
- Psychological needs arise from psychological states of tension such as the need for recognition, esteem or belonging.
- Needs become **wants** when they are directed to specific objects that might satisfy the need.

**Three ways of satisfying customer needs:**
- Responsive marketer :: finds a stated need and fills it
- Anticipative marketer :: looks ahead to needs customers may have in the near future
- Creative marketer :: discovers solutions customers did not ask for but to which they enthusiastically respond; creative marketers are proactive **market-driving** firms, not just market-driven ones

Key rule on the slide: **marketers do not create needs — needs preexist marketers.** Marketing only directs existing needs to specific objects (wants).

**Need categories and related products.** The same product class can serve different psychological needs:
- Need for success :: e.g. a luxury watch or a designer handbag
- Need for belonging :: e.g. the national football team jersey
- Need for recognition :: e.g. a premium car that others notice
- Need for self-actualization :: e.g. running shoes or a smartwatch for personal goals

**Needs as a continuum: everything the customer wants.** On one end are **demands** (rational, explicit), on the other **wishes** (emotional, unconscious). Real needs are a **combination of needs**: every purchase mixes a rational and an emotional share, in different proportions.

**Maslow’s hierarchy of needs** has five levels, from bottom to top. The lower levels must be largely satisfied before higher ones drive behaviour. The slide shows how one category (chocolate) can address every level:
- Physiological :: chocolate against hunger
- Safety :: an extra portion of milk (wholesome, "safe" for children)
- Belonging and love :: thanking others
- Esteem :: "from gourmets for gourmets"
- Self-actualization :: your personal Toblerone edition

**Customer motivation.** A need becomes a **motivation** when it is aroused to a sufficient level of intensity to drive us to act. Motivation has two dimensions:
- Direction :: we select one goal over another
- Intensity :: we pursue the goal with more or less vigor

Motivation researchers often run in-depth interviews with a few dozen consumers to uncover deeper motives triggered by a product. They use psychology-based **projective techniques** to probe the mindset indirectly:
- Word association
- Sentence completion
- Picture interpretation
- Role play

**Motives answer the "why" behind the use of a product — laddering.** Laddering asks "why?" repeatedly until the deepest motive appears. Running-shoe example:
=> "I want the ZoomX technology" (product feature) → Better cushioning (why?) → More training (why?) → Being as fit as my peers (why?) → "It’s not about technology, it’s about winning" (the real motive)

The principle: the feature is only the surface; the strongest motive is emotional and social (winning, keeping up with peers), and that is what communication should address.

**Customer benefits** close the gap that the need describes.
- Core benefits :: relate to fundamental aspects of the company’s products and services; they result from satisfying the basic customer needs with regard to a specific offer (Hamburg’s Elbphilharmonie offers excellent musical productions)
- Additional benefits :: arise from additional services and features extending beyond the basic needs, including promotional tools such as loyalty programs, coupons and temporary price reductions; a need exists here too, but the customer does not necessarily expect it to be met (the Elbphilharmonie offers a very good gastronomic service)

**Five types of customer benefits** (car examples):
- Functional benefits :: originate from the basic functions of the product — getting from A to B
- Economic benefits :: also result from product features — a car that is more fuel-efficient thanks to weight reduction (new materials)
- Process-related benefits :: arise from ease of procurement or processes that facilitate company–customer interactions — a dealer who picks up your car for repair (saves time and money)
- Emotional benefits :: emerge from positive feelings and emotions evoked by the product — the pride of owning a luxury car
- Social benefits :: also linked to positive feelings, but through other people — being invited to exclusive brand events as owner of a luxury car

**Exercise: which benefits do you identify in Netflix?** (the slide only asks; this mapping is self-written). Functional: entertainment on demand. Economic: cheaper than going to the cinema. Process-related: one click, any device, no store visit. Emotional: relaxing and switching off. Social: talking about the same series with friends.

**Customer satisfaction** is a person’s feelings of pleasure or disappointment that result from **comparing the perceived performance (or outcome)** of a product or service **with expectations**.
- Asymmetric effect :: the negative impact of failing to meet expectations is disproportionately stronger than the positive impact of exceeding them — a disappointment hurts more than a positive surprise helps

**The KANO model** plots customer satisfaction (dissatisfaction → neutral → delight) against the presence of a product characteristic (absent → fulfilled). It separates three kinds of characteristics:
- Must-be’s (basic factors) :: expected as a matter of course; if absent they cause strong dissatisfaction, if fulfilled they only bring the customer to neutral — never to delight
- Satisfiers (performance factors) :: satisfaction rises roughly in proportion to how well they are fulfilled ("more is better")
- Delighters (excitement factors) :: not expected; if absent nobody complains, if present they create delight

Link to benefits: basic and performance factors belong to the **core benefits**; excitement factors are **additional benefits**. Car example on the slide: working brake lights are a basic factor, top speed and acceleration a performance factor, a surprising in-car entertainment feature an excitement factor.

**Case: why would most real-estate developers in Germany choose Schindler and not Canny elevators?** ("#customerinsight"; the slide shows only Schindler’s self-description as a firm moving more than 2 billion people a day and helping to organize cities — the reasoning is self-written). The principle: the developer does not buy "an elevator", he buys **reduced risk**. A broken elevator damages his building, his tenants and his reputation for years. A strong brand with proven reliability and service reduces functional and psychological costs, so the higher price is worth it. Price alone does not win when the buyer carries the risk.

**Customer insights get obvious at six o’clock in the morning.** The picture: a person lying awake early in the morning, worrying. A real insight touches what truly keeps people busy — the problems and wishes they think about when nobody is selling to them.

**A customer insight** provides **new knowledge** about a customer’s dynamic network of
- expectations and needs,
- conscious and unconscious decision-making processes,
- underlying motivations and behaviors

before, during and after purchasing a (highly innovative) product or service. A customer insight **shifts the thinking and action of customers**: it leads to a difference in how people think and what actions they take.

**Three characteristics of a "good" customer insight:**
- Novel and not obvious :: it surprises because it was unknown before ("WOW moment") — otherwise one would not call it an insight
- Explanatory and human-contextualized :: it captures aspects that "move" people and thus forms the basis for a meaningful value proposition
- Complete and enduring :: it captures the pre-sales, sales and aftersales phase of the customer journey and holds true over time

The "WOW" example shows a parcel delivered into the boot of a parked car: the non-obvious insight is that people are not at home when parcels arrive, but their car is.

**Customer insights address strong needs and motivations.** A good insight captures, if possible, the **strongest** needs and motivations of consumers. The aim is to discover a relevant "truth" with which the **"why" of a purchase** can be justified.

**Customer delight along the customer journey** (Gardena example):
=> Life situation before the product (to what extent can we offer substantial added value? — Gardena planning tool) → Decision and purchase process (how can we convince customers to actually buy? — Gardena shop and payment) → Life situation after the product (how can we get customers to use it regularly? — Gardena app)

**Lessons learned, part 1:**
- Needs describe a gap between the experienced state and the desired state; Maslow categorizes needs into five hierarchical levels.
- A need becomes a motivation when it is aroused to a sufficient level of intensity to drive us to act.
- Benefits provide a solution to fulfil a need; five types: functional, process-related, economic, emotional and social.
- Satisfaction results from comparing perceived performance with expectations; KANO separates must-be’s, satisfiers and delighters.
- A customer insight is new knowledge that explains the "why" behind a purchase (six o’clock moment); good insights are non-obvious, change behaviour and lead to a new value proposition.

**Learning goals of lecture 2 (part 2, the customer in a specific job environment):** explain differences and similarities between B2C and B2B markets, know the characteristics of B2B marketing, describe the buying center and its roles, and explain relationship marketing and the marketing network in B2B.

**Opening question: whom is Amazon predominantly serving?** ("#definingmarkets"; answer self-written). Not only consumers: Amazon also serves businesses — third-party sellers on its marketplace, advertisers and cloud customers (AWS). One firm can act in B2C and B2B at the same time, which is why markets have to be defined carefully.

**B2C vs B2B markets:**
- Business-to-consumer (B2C) :: oriented towards individual end customers; often called **consumer goods marketing**
- Business-to-business (B2B) :: all organizations that acquire goods and services used in the production of products or services that are sold, rented or supplied to others; often called **industrial goods marketing**

**Nine characteristics of B2B marketing:**
- Fewer but larger buyers :: a few customers account for most of the sales
- Close supplier–customer relationships :: because there are few, important customers, suppliers work closely with them
- Professional purchasing :: trained purchasing agents follow formal procedures
- Multiple buying influence :: many people take part in the decision (the buying center)
- Derived demand :: demand for business goods derives from the demand for consumer goods
- Inelastic demand :: total demand for many business goods reacts little to price changes in the short run
- Fluctuating demand :: business demand swings more strongly than the consumer demand it is derived from
- Geographically concentrated buyers :: business customers cluster in certain regions
- Direct purchasing :: business buyers often buy directly from manufacturers rather than through intermediaries

**The buying center** consists of all individuals and groups who participate in the purchasing decision-making process, who **share some common goals and the risks** arising from the decisions. Six key roles, shown for a logistics firm buying trucks:
- Initiator :: starts the purchase process (example: the department of transport)
- User :: will use the product (the truck driver)
- Influencer :: shapes the decision with opinions or requirements (other drivers)
- Decider :: decides on the product or supplier (the fleet manager)
- Buyer :: carries out the purchase (the owner of the logistics firm)
- Gatekeeper :: controls the flow of information to the others (the owner’s personal assistant)

Note: in the slide example the owner is the buyer while the fleet manager decides — read it as "the fleet manager chooses, the owner signs and pays".

**Relationship marketing in B2B** aims to build **mutually satisfying long-term relationships** with key constituents in order to earn and retain their business. Its ultimate outcome is a unique company asset called a **marketing network**: the company and its supporting stakeholders, with whom it builds mutually profitable business relationships. Stakeholders on the slide:
- Buyers
- Companies
- Sales partners
- Public institutions
- Media and lobbyists

**B2B2C marketing.** Companies following a B2B2C approach directly earn revenue from organizational customers but also manage the customer experience (or the marketing of products and services) to the **customer’s customer**. Hence an organization markets itself **simultaneously to B2B and B2C markets** (slide examples include a payment brand that is paid by banks and merchants but marketed to end users).

**Case: who needs to be considered when introducing a PayPal alternative in Germany?** (5-minute discussion; the slide gives only the stakeholder grid — the examples are self-written). Use the marketing network:
- Buyers :: consumers who must trust and adopt the new way to pay
- Companies :: online shops and merchants that must integrate it at checkout
- Sales partners :: banks and payment providers that carry it
- Public institutions :: regulators and supervisory authorities for payments and data protection
- Media and lobbyists :: shape public trust and political support

The principle: a payment system only works if **every side of the network** joins — no merchants, no users; no users, no merchants.

**Lessons learned, part 2:**
- B2C targets individual end customers; B2B serves organizations buying for production or resale (industrial goods marketing).
- B2B has fewer but larger buyers, derived and inelastic demand, professional purchasing and closer relationships.
- The buying center consists of all individuals and groups that take part in the purchase decision and share its goals and risks: initiators, users, influencers, deciders, buyers and gatekeepers.
- Relationship marketing builds mutually satisfying long-term relationships with key constituents; its outcome is a marketing network of the company and its supporting stakeholders.`,
cards:[
{q:R`Needs → motivation → benefits: which phrase belongs to each circle?`, a:R`Needs = "recognizing gaps"; motivation = "driving activity"; benefits = "contributing solutions"; customer value lies where the three overlap.`},
{q:R`Definition of needs; when do needs become wants?`, a:R`Basic human requirements (air, food, water, clothing, shelter); biological (physiological tension: hunger, thirst, discomfort) or psychological (recognition, esteem, belonging). Needs become wants when directed to specific objects that might satisfy the need.`},
{q:R`Responsive vs anticipative vs creative marketer`, a:R`Responsive: finds a stated need and fills it. Anticipative: looks ahead to needs customers may have in the near future. Creative: discovers solutions customers did not ask for but respond to enthusiastically — proactive, market-driving.`},
{q:R`Do marketers create needs?`, a:R`No — needs preexist marketers. Marketing directs needs to specific objects (wants).`},
{q:R`Demands vs wishes`, a:R`Demands: rational, explicit. Wishes: emotional, unconscious. Real needs are a combination on this continuum.`},
{q:R`Maslow’s five levels (bottom → top) with the chocolate examples`, a:R`Physiological (chocolate against hunger) → safety (extra portion of milk) → belonging and love (thanking others) → esteem ("from gourmets for gourmets") → self-actualization (your personal Toblerone edition).`},
{q:R`Definition of motivation and its two dimensions`, a:R`A need aroused to a sufficient level of intensity to drive us to act. Direction (one goal over another) and intensity (more or less vigor).`},
{q:R`Projective techniques in motivation research`, a:R`Word association, sentence completion, picture interpretation, role play — used in in-depth interviews with a few dozen consumers to probe the mindset indirectly.`},
{q:R`Laddering (running-shoe example)`, a:R`Ask "why?" repeatedly: ZoomX technology → better cushioning → more training → being as fit as my peers → "it’s not about technology, it’s about winning".`},
{q:R`Core vs additional benefits`, a:R`Core: fundamental aspects of the offer, satisfying basic needs (Elbphilharmonie: excellent music). Additional: services and features beyond basic needs, incl. loyalty programs, coupons, temporary price cuts; need exists but is not necessarily expected (Elbphilharmonie: good gastronomy).`},
{q:R`Five types of customer benefits`, a:R`Functional (A to B), economic (fuel-efficient), process-related (car picked up for repair), emotional (pride in a luxury car), social (invitation to exclusive brand events).`},
{q:R`Definition of customer satisfaction + asymmetric effect`, a:R`Feelings of pleasure or disappointment from comparing perceived performance (outcome) with expectations. Failing expectations hurts disproportionately more than exceeding them helps.`},
{q:R`KANO: must-be’s, satisfiers, delighters`, a:R`Must-be’s/basic factors: absent → strong dissatisfaction, fulfilled → only neutral. Satisfiers/performance factors: satisfaction rises with fulfilment. Delighters/excitement factors: absent → no complaint, present → delight. Basic + performance = core benefits; excitement = additional benefits.`},
{q:R`Definition of a customer insight`, a:R`New knowledge about a customer’s dynamic network of expectations and needs, conscious and unconscious decision processes, and underlying motivations and behaviors before, during and after purchase. It shifts how people think and act.`},
{q:R`Three characteristics of a good customer insight`, a:R`Novel and not obvious (WOW moment); explanatory and human-contextualized (moves people → basis for a value proposition); complete and enduring (pre-sales, sales, aftersales; holds over time).`},
{q:R`Customer delight along the customer journey (Gardena)`, a:R`Life situation before (substantial added value? planning tool) → decision and purchase (convince to buy? shop and payment) → life situation after (regular use? app).`},
{q:R`B2C vs B2B`, a:R`B2C: individual end customers, consumer goods marketing. B2B: organizations acquiring goods and services used to produce products or services sold, rented or supplied to others, industrial goods marketing.`},
{q:R`Nine characteristics of B2B marketing`, a:R`Fewer but larger buyers, close supplier–customer relationships, professional purchasing, multiple buying influence, derived demand, inelastic demand, fluctuating demand, geographically concentrated buyers, direct purchasing.`},
{q:R`Buying center: definition and six roles`, a:R`All individuals and groups in the purchase decision who share common goals and risks. Initiator, user, influencer, decider, buyer, gatekeeper (truck example: dept. of transport, driver, other drivers, fleet manager, owner, owner’s PA).`},
{q:R`Relationship marketing and the marketing network`, a:R`Building mutually satisfying long-term relationships with key constituents to earn and retain their business; outcome = marketing network of the company and its supporting stakeholders (buyers, companies, sales partners, public institutions, media/lobbyists).`},
{q:R`B2B2C marketing`, a:R`Earn revenue directly from organizational customers but also manage the experience of the customer’s customer — marketing to B2B and B2C simultaneously.`},
{q:R`Schindler vs a cheaper elevator: the principle`, a:R`The B2B buyer purchases reduced risk (reliability, service, reputation), not the lowest price — the buyer carries the consequences of failure.`}
],
quiz:[
{q:R`Which phrase does the lecture attach to customer motivation?`, opts:[R`"Recognizing gaps"`,R`"Contributing solutions"`,R`"Driving activity"`,R`"Creating value"`], correct:2, exp:R`Needs = recognizing gaps, motivation = driving activity, benefits = contributing solutions; customer value lies in the overlap of all three.`, area:'need'},
{q:R`When do needs become wants?`, opts:[R`When they are directed to specific objects that might satisfy the need`,R`When marketers create them through advertising campaigns that reach a large audience`,R`When they move from the physiological to the psychological level of Maslow’s pyramid`,R`When a customer has enough money to pay for them`], correct:0, exp:R`Needs become wants when directed to specific objects that might satisfy the need. Marketers do not create needs — needs preexist marketers.`, area:'need'},
{q:R`A firm discovers a solution customers never asked for, and they respond enthusiastically. Which type of marketer is this?`, opts:[R`Responsive marketer`,R`Anticipative marketer`,R`Creative marketer`,R`Reactive marketer`], correct:2, exp:R`The creative marketer is a proactive, market-driving firm. Responsive fills a stated need; anticipative looks ahead to needs in the near future.`, area:'need'},
{q:R`In Maslow’s hierarchy, which level sits directly above safety?`, opts:[R`Esteem`,R`Belonging and love`,R`Self-actualization`,R`Physiological`], correct:1, exp:R`Bottom to top: physiological, safety, belonging and love, esteem, self-actualization.`, area:'need'},
{q:R`On the needs continuum, how are "wishes" characterized?`, opts:[R`Rational and explicit`,R`Emotional and unconscious`,R`Biological and physiological`,R`Stated and measurable`], correct:1, exp:R`Demands are rational and explicit; wishes are emotional and unconscious. Real needs combine both.`, area:'need'},
{q:R`Which two dimensions does motivation have according to the slides?`, opts:[R`Direction and intensity`,R`Need and want`,R`Rational and emotional share`,R`Duration and frequency`], correct:0, exp:R`Direction (we select one goal over another) and intensity (we pursue the goal with more or less vigor).`, area:'mot'},
{q:R`What is the purpose of laddering?`, opts:[R`Ranking products by their sales so that the best-selling item is placed on the top shelf`,R`Asking "why?" repeatedly until the deepest motive behind using a product appears`,R`Moving customers step by step up Maslow’s pyramid`,R`Raising prices step by step after launch`], correct:1, exp:R`Laddering: ZoomX technology → better cushioning → more training → as fit as my peers → "it’s about winning". Motives answer the "why".`, area:'mot'},
{q:R`Which is NOT one of the projective techniques named in the lecture?`, opts:[R`Word association with spontaneous answers`,R`Sentence completion of half-finished statements`,R`Online survey with rating scales`,R`Role play in an imagined buying situation`], correct:2, exp:R`Projective techniques probe the mindset indirectly: word association, sentence completion, picture interpretation, role play. A rating-scale survey asks directly.`, area:'mot'},
{q:R`A car dealer picks up your car for repair. Which benefit type is this?`, opts:[R`Functional benefit of the car itself`,R`Economic benefit through lower fuel use`,R`Social benefit of being seen with the brand`,R`Process-related benefit`], correct:3, exp:R`Process-related benefits arise from ease of procurement or processes that facilitate company–customer interactions. Functional = getting from A to B; economic = e.g. fuel efficiency; social = e.g. exclusive brand events.`, area:'ben'},
{q:R`Loyalty programs, coupons and temporary price reductions provide which kind of benefit?`, opts:[R`Core benefits of the offer`,R`Additional benefits`,R`Basic factors in the KANO model`,R`Must-be benefits customers demand`], correct:1, exp:R`They are additional benefits: beyond basic needs; a need exists, but the customer does not necessarily expect it to be met.`, area:'ben'},
{q:R`According to the course, what is customer satisfaction based on?`, opts:[R`The price paid compared with the price of the cheapest competitor in the market`,R`Comparing perceived performance (or outcome) with expectations`,R`The number of benefit types an offering provides`,R`How often the customer repurchases`], correct:1, exp:R`Satisfaction is a person’s feelings of pleasure or disappointment from comparing perceived performance (or outcome) with expectations.`, area:'sat'},
{q:R`What does the asymmetric effect of satisfaction state?`, opts:[R`Missing expectations hurts satisfaction more than exceeding them helps`,R`Exceeding expectations raises satisfaction more than missing them lowers it`,R`Satisfaction rises in direct proportion to performance for all product characteristics`,R`Expectations have no influence on satisfaction once a product has been purchased and used`], correct:0, exp:R`The negative impact of failing expectations is disproportionately stronger than the positive impact of exceeding them.`, area:'sat'},
{q:R`In the KANO model, a characteristic whose absence causes strong dissatisfaction but whose fulfilment only brings neutrality is a …`, opts:[R`Delighter`,R`Satisfier`,R`Must-be`,R`Performance factor`], correct:2, exp:R`Must-be’s (basic factors) are expected; fulfilled they only avoid dissatisfaction. Satisfiers = performance factors rise proportionally; delighters create delight when present.`, area:'sat'},
{q:R`Which of these is one of the three characteristics of a good customer insight?`, opts:[R`It is cheap to collect`,R`It is complete and enduring`,R`It is confirmed by most customers in a survey`,R`It is based on the firm’s product features`], correct:1, exp:R`Good insights are novel and not obvious, explanatory and human-contextualized, and complete and enduring (pre-sales, sales, aftersales; true over time).`, area:'ins'},
{q:R`What does a customer insight do according to the definition?`, opts:[R`It confirms what the company already knew about its customers`,R`It summarizes the sales figures of the last quarter for every segment`,R`It shifts how customers think and what actions they take`,R`It lists all competitors`], correct:2, exp:R`A customer insight provides new knowledge and shifts thinking and action: it leads to a difference in how people think and act.`, area:'ins'},
{q:R`B2B marketing is often referred to as …`, opts:[R`consumer goods marketing`,R`industrial goods marketing`,R`relationship goods marketing`,R`direct marketing`], correct:1, exp:R`B2B = industrial goods marketing; B2C = consumer goods marketing.`, area:'b2b'},
{q:R`"Demand for business goods ultimately comes from demand for consumer goods" describes which B2B characteristic?`, opts:[R`Inelastic demand`,R`Fluctuating demand`,R`Derived demand`,R`Direct purchasing`], correct:2, exp:R`Derived demand. Inelastic = reacts little to price in the short run; fluctuating = swings more strongly than consumer demand.`, area:'b2b'},
{q:R`In the buying-center example, who is the gatekeeper?`, opts:[R`The truck driver who uses the vehicle`,R`The fleet manager who makes the choice`,R`The owner’s personal assistant`,R`The department of transport that starts it`], correct:2, exp:R`The gatekeeper controls the flow of information: the owner’s PA. Driver = user, fleet manager = decider, department of transport = initiator.`, area:'bc'},
{q:R`What is the ultimate outcome of relationship marketing?`, opts:[R`A buying center with shared risks`,R`A loyalty program for key accounts`,R`A lower price level for large buyers`,R`A marketing network`], correct:3, exp:R`Relationship marketing builds mutually satisfying long-term relationships; its outcome is a marketing network — the company and its supporting stakeholders.`, area:'bc'},
{q:R`What characterizes B2B2C marketing?`, opts:[R`Selling only to end consumers through online channels`,R`Selling only to businesses and ignoring end users completely`,R`Earning revenue from organizations while also managing their customers’ experience`,R`Selling business goods to private households at consumer prices`], correct:2, exp:R`B2B2C firms earn revenue from organizational customers but also market to the customer’s customer — simultaneously B2B and B2C.`, area:'bc'}
]},
{id:'mk-3', ch:3, title:'Marketing Strategy and Planning', date:'27 Oct 2026',
examWeight:'The strategic planning process, internal analysis (resources, competencies, capabilities), the four trend types, PESTEL, Porter’s Five Forces, the four product-life-cycle stages and the BCG Matrix with its norm strategies — the classic toolbox, very likely in MC and open questions',
summary:R`**Learning goals of lecture 3:** structure internal, external and mixed perspectives of strategic analysis, assess resources, competencies and capabilities with the Resource-Based View, distinguish the types of trends and scan the macro environment with PESTEL, assess industry structure with Porter’s Five Forces, and apply the product life cycle and the BCG Matrix to a portfolio.

**Opening question: would you give her a 7-digit bank loan to open a 600 m² tattoo studio on Zürich’s Bahnhofstrasse?** ("#marketingstrategy"; the slide asks only — the reasoning is self-written). A gut feeling is not enough. Before such a decision you need both sides of a strategic analysis: **internal** (what does she bring — skills, brand, followers, capital, team?) and **external** (is there demand at this price level, how do trends, rents and competitors look?). Only when both fit is the plan convincing. That is exactly what this lecture’s tools are for.

**The strategic planning process:**
=> Status-quo analysis (against the background of the business mission: internal analysis of resources, competencies, capabilities + external analysis of trends, market, external factors) → Marketing planning (goal formulation → strategy formulation → program formulation) → Marketing implementation (product, price, promotion, place) → Marketing controlling

Controlling feeds back into the earlier steps, so the process is a loop, not a one-way street.

**Overview of the analysis concepts:**
- Internal analysis :: critical assessment of resources and competencies/capabilities
- External analysis :: critical assessment of trends and external factors (PESTEL)
- Mixed perspective :: product life cycle and BCG Matrix (they combine the firm’s position with the market)

**Internal analysis: resources, competencies, capabilities.**
- Resources :: tangible and intangible assets a company possesses — physical (buildings, equipment), financial (capital), human (employees) and intangible (brand name, patents, relationships)
- Competencies :: a specific skill or activity deeply embedded in the organization and its employees, often leading to efficiencies, relational power or a competitive advantage; a combination of operant and operand resources combined with market-directed organizational learning (e.g. the ability to innovate, or expertise in a technology employees are trained to use)
- Capabilities :: the capacity to use and integrate resources and competencies to perform tasks or create value — the "how" of business operations, i.e. the ability to deploy and coordinate resources and competencies to reach goals (e.g. consistently manufacturing to a high standard, managing a complex supply chain, adapting to changing markets)

The **Resource-Based View** explains why firms with unique resources and capabilities outperform others: advantage comes from what the firm has and can do, not only from the market it is in.

**External analysis: types of trends.** A **trend** is a direction or sequence of events with **momentum and durability**. A trend is **more predictable than a fad**. Trends reveal the shape of the future and can provide strategic direction. Four types:
- Technological trends :: lasting technological developments (gene tech, AI) and diffusion of technologies (tech clusters such as Silicon Valley)
- Sociological trends :: lasting societal developments (aging society, sharing economy, LOHAS = lifestyle of health and sustainability)
- Ecological trends :: abuse of resources, climate change (access to sea), biodiversity, CO2 emission standards
- Economic trends :: rise or fall of national currencies (dollar vs yen), increasing Asian market power, distribution of incomes

Note: the lessons-learned slide names only technological, sociological and ecological trends; the trend slide itself shows economic trends as a fourth type.

**Porter’s Five Forces** analyze competition in the market from an **industry perspective**. Existing competition sits in the middle, surrounded by four forces:
- Rivalry among existing competitors :: the firms already fighting for the same customers
- Threat of new entrants :: firms that could enter the market
- Threat of substitutes :: other ways to satisfy the same need
- Bargaining power of suppliers :: how strongly suppliers can dictate prices and terms
- Bargaining power of buyers :: how strongly customers can push prices down

The slide applies this to private business schools: established schools compete with each other, new (online) universities enter, free online learning videos are a substitute, students are the buyers. The principle: a market can be attractive or unattractive **regardless of how good your own product is** — the five forces decide how much profit the industry leaves you.

**External analysis: PESTEL** scans the **macro environment** around the company with six factors:
- Political environment
- Economic environment
- Socio-demographic environment
- Technological environment
- Ecological environment
- Legal environment

Example discussion: autonomous driving in Germany. Each factor can push or block the innovation — e.g. socio-demographic: society is aging, so the need for driver assistance is increasing; legal: whether robotaxi services are permitted; political: how governments regulate AI; ecological: cities’ climate goals; economic: the size and strength of the German market; technological: whether the country keeps up with advanced technology.

**Mixed perspective: the product life cycle** shows sales and profits over time in four stages:
- Introduction :: sales growth tends to be slow; profits are negative or low; promotional expenditures are at their highest ratio to sales because the firm must (1) inform potential consumers, (2) induce product trial and (3) secure distribution in retail outlets; prices tend to be higher because costs are high, and firms focus on the buyers most ready to buy
- Growth :: rapid climb in sales; profits increase as marketing costs are spread over a larger volume
- Maturity :: sales growth slows, then sales decline and profits fall (three phases, see below)
- Decline :: sales decline due to technological advances, shifts in consumer tastes and increased competition; this leads to overcapacity, increased price cutting and profit erosion; products are withdrawn or product ranges and portfolios are reduced

**Three strategies to sustain rapid growth in market share:**
- Improve product quality, add new features, new styling and new models (different sizes, flavors) to protect the main product
- Increase distribution coverage and enter new distribution channels
- Lower prices to attract the next layer of price-sensitive buyers

**Three phases of maturity** (as named on the maturity slide):
- Growth :: sales growth slows; there are no new distribution channels to fill; new competitive forces emerge
- Decaying maturity :: the absolute level of sales declines, consumers begin switching to other products, and the sales slowdown creates overcapacity
- Decline in profits :: increased competition leads to falling prices and/or investments in product refreshes reduce profits

Note: the lessons-learned slide lists the maturity phases as "growth, stability and decaying maturity" (the textbook version) — the maturity slide itself says growth, decaying maturity, decline in profits.

**Mixed perspective: the BCG Matrix** classifies products (business units) by **relative market share** (x-axis, low → high) and **market growth** (y-axis, low → high), each with a norm strategy:
- Question marks (high growth, low share) :: strengthen or liquidate
- Stars (high growth, high share) :: maintain or strengthen
- Cash cows (low growth, high share) :: maintain
- Poor dogs (low growth, low share) :: liquidate

**Cross-financing:** the money earned by cash cows (strong share in a mature market, little investment needed) finances the question marks, so that they can become stars. The slide uses a car maker’s portfolio: the successful SUV in a mature segment is the cash cow, a fading engine type the poor dog, and the funds flow to new models in growing segments.

**Lessons learned:**
- Market success can be realized only if the internal perspective (resources, competencies, capabilities) and the external perspective (trends, PESTEL factors) are combined, joined by mixed tools such as the product life cycle and the BCG Matrix.
- Resources are tangible and intangible assets, competencies are deeply embedded skills, and capabilities are the ability to deploy and coordinate both; the Resource-Based View explains why firms with unique resources and capabilities outperform others.
- Trends are lasting developments and therefore carry long-term strategic decisions.
- PESTEL scans the macro environment, while Porter’s Five Forces analyze competition from an industry perspective: rivalry, new entrants, substitutes and the bargaining power of buyers and suppliers.
- Along the product life cycle, introduction brings slow growth and low or negative profits, growth raises sales and profits, maturity slows and then erodes sales and profits, and in decline firms cut products, channels and prices.
- The BCG Matrix classifies products by relative market share and market growth 

**In class 4 Nov — finishing lecture 3 (from the recording).**

**Who is the real competitor? Lufthansa.** Ask who the firm really earns money with and which job it does for them. Lufthansa earns its profit mainly with international business travellers, not with first class (mostly private, served by Gulf carriers such as Qatar) or domestic flights (lost to FlixTrain and Eurowings). The job to be done is "get me to my meeting", so the core competitor of business class is a video call (Teams). Consequence: fewer but more important and more expensive flights, lounges and cabins redesigned as quiet work spaces. The tool is the same as in strategy class, but the market is defined from the **customer perspective** (a Rolex can be a watch or an investment good).

**PESTEL applied: should a German carmaker invest in autonomous driving?** Rate each field like a traffic light.
- Social / demographic (green) :: the ageing society wants to stay mobile but older people may no longer drive → autonomous taxis; busy business travellers want their own self-driving car to work on the road. Two different markets. Downside: older people have less buying power
- Technological (yellow) :: chips and sensors are expensive and depend on US suppliers, there is no shared car-to-car (car-to-X) platform between brands, and 5G coverage is weak
- Legal (red) :: fully autonomous driving is not allowed in Germany yet (assisted driving only); Waymo runs one predefined route in Munich; liability in accidents is unresolved
- Ecological (two-sided) :: assisted driving saves fuel because the car drives without emotion, but servers and chip production use a lot of energy and CO2
- Political and economic :: political support is needed; Germany could afford the investment but invests elsewhere
- Rule of thumb :: invest only if at least two to three fields are yellow or green; if the product will not be legal for ten years, develop and test abroad instead of launching

**Product life cycle — what Henkel wants to see.** Name the four phases (introduction, growth, maturity, decline), label the axes (x = time, y = sales and profit) and draw both curves.
- Sales curve :: starts at zero, rises through introduction and growth, turns about a third into maturity and falls back towards zero in decline
- Profit curve :: starts negative (development, rent, launch marketing), turns positive about a third into introduction or early growth, peaks at the end of growth, falls and turns negative again in decline (warranties, facelifts, more advertising to keep the product alive)
- Portfolio :: a multi-product firm should have products in every phase and **cross-finance**: profits from mature and declining products fund new ones (iPhone money funds the Vision Pro)
- Keep or kill a weak new product :: do not keep investing just because the CEO believes in it; observe users in product clinics, talk to 6 to 12 of them, then decide (Apple stopped its self-driving car)

**BCG Matrix = the PLC as a portfolio.** Axes: market growth (high/low) and relative market share (low/high). Question marks = introduction (high growth, low share, need investment), stars (high growth, high share), cash cows (high share, low growth, earn the money), poor dogs. Porsche: the 911 (margin above 50%) and combustion SUVs earn the cash that funds electric models. Strategy must differ by market: Europe, US and China (China wants big, electric cars).

**Exam hints from Henkel.**
- Open questions are worth at most 10 points each (about 10 minutes); about half of the points are for simply naming things (phases, axes, fields)
- "Name" = list the terms; "name and explain" = one sentence each; "apply" = a short case, e.g. name all six PESTEL fields and discuss two with one pro and one con
- Answers beyond the requested number are not read: ask for two → only the first two count
- MC: absolute wording ("always", "either … or", "cut X to fund Y") is usually wrong
- Learn the intro and summary slides of each lecture; each lecture has about four core conceptsinto stars, cash cows, question marks and poor dogs.`,
cards:[
{q:R`Steps of the strategic planning process`, a:R`Status-quo analysis (internal: resources, competencies, capabilities; external: trends, market, external factors — against the business mission) → marketing planning (goal → strategy → program formulation) → implementation (4Ps) → controlling (feedback loop).`},
{q:R`Internal vs external vs mixed perspective tools`, a:R`Internal: resources, competencies/capabilities. External: trends, external factors (PESTEL). Mixed: product life cycle, BCG Matrix.`},
{q:R`Resources vs competencies vs capabilities`, a:R`Resources: tangible and intangible assets (physical, financial, human, intangible). Competencies: deeply embedded skills/activities → efficiency, relational power, advantage. Capabilities: capacity to use and integrate resources and competencies — the "how".`},
{q:R`Resource-Based View`, a:R`Explains why firms with unique resources and capabilities outperform others.`},
{q:R`Definition of a trend`, a:R`A direction or sequence of events with momentum and durability; more predictable than a fad; reveals the shape of the future and gives strategic direction.`},
{q:R`Four trend types with examples`, a:R`Technological (gene tech, AI, tech clusters); sociological (aging society, sharing economy, LOHAS); ecological (resource abuse, climate change, biodiversity, CO2 standards); economic (currencies, Asian market power, income distribution).`},
{q:R`Porter’s Five Forces`, a:R`Industry perspective: rivalry among existing competitors, threat of new entrants, threat of substitutes, bargaining power of suppliers, bargaining power of buyers.`},
{q:R`PESTEL`, a:R`Political, economic, socio-demographic, technological, ecological, legal — scans the macro environment (example: autonomous driving in Germany; aging society → more need for driver assistance).`},
{q:R`Product life cycle: introduction stage`, a:R`Slow sales growth; negative or low profits; highest promotion-to-sales ratio (inform, induce trial, secure distribution); higher prices because of high costs; focus on buyers most ready to buy.`},
{q:R`Three strategies to sustain rapid growth`, a:R`Improve quality / add features, styling, models; increase distribution coverage and enter new channels; lower prices to attract the next layer of price-sensitive buyers.`},
{q:R`Maturity phases (slide 18)`, a:R`Growth (sales growth slows, no new channels, new competitors) → decaying maturity (absolute sales decline, switching, overcapacity) → decline in profits (falling prices, refresh investments). Lessons-learned slide: growth, stability, decaying maturity.`},
{q:R`Decline stage`, a:R`Sales fall due to technological advances, taste shifts, competition → overcapacity, price cutting, profit erosion → products withdrawn, ranges/portfolios reduced.`},
{q:R`BCG Matrix: axes and norm strategies`, a:R`x: relative market share, y: market growth. Question marks (high growth, low share): strengthen/liquidate. Stars: maintain/strengthen. Cash cows (low growth, high share): maintain. Poor dogs: liquidate. Cross-finance from cash cows to question marks.`},
{q:R`Tattoo-studio question: the principle`, a:R`A big investment needs internal (her resources, skills, brand) AND external analysis (demand, trends, rents, competition) — only both together justify a strategy.`}
],
quiz:[
{q:R`Which step comes directly after strategy formulation in the strategic planning process?`, opts:[R`Goal formulation`,R`Program formulation`,R`Marketing controlling`,R`Status-quo analysis`], correct:1, exp:R`Marketing planning runs goal formulation → strategy formulation → program formulation, followed by implementation (4Ps) and controlling.`, area:'spp'},
{q:R`Against what background is the status-quo analysis carried out?`, opts:[R`The business mission`,R`The marketing budget`,R`The competitors’ strategies`,R`The 4Ps`], correct:0, exp:R`Status-quo analysis takes place against the background of the business mission and combines internal and external analysis.`, area:'spp'},
{q:R`Which tools does the lecture assign to the mixed perspective?`, opts:[R`PESTEL and the four types of trends`,R`Resources, competencies and capabilities`,R`Product life cycle and BCG Matrix`,R`Five Forces and the PESTEL factors`], correct:2, exp:R`Internal: resources, competencies/capabilities. External: trends, PESTEL. Mixed: product life cycle and BCG Matrix.`, area:'spp'},
{q:R`"The capacity to use and integrate resources and competencies to perform tasks or create value" defines …`, opts:[R`Resources`,R`Competencies`,R`Capabilities`,R`Core benefits`], correct:2, exp:R`Capabilities are the "how": deploying and coordinating resources and competencies. Resources are assets; competencies are deeply embedded skills.`, area:'int'},
{q:R`Which is an intangible resource according to the slides?`, opts:[R`Buildings`,R`Capital`,R`Patents`,R`Equipment`], correct:2, exp:R`Intangible assets: brand name, patents, relationships. Buildings and equipment are physical, capital financial.`, area:'int'},
{q:R`How does a trend differ from a fad?`, opts:[R`A trend is shorter but has a stronger short-term impact on sales`,R`A trend is more predictable and has momentum and durability`,R`A trend affects only technology`,R`A trend is created by marketers through large advertising campaigns`], correct:1, exp:R`A trend is a direction or sequence of events with momentum and durability and is more predictable than a fad.`, area:'ext'},
{q:R`"Aging society" and "sharing economy" are examples of which trend type?`, opts:[R`Technological trends`,R`Ecological trends`,R`Economic trends`,R`Sociological trends`], correct:3, exp:R`Sociological trends: aging society, sharing economy, LOHAS.`, area:'ext'},
{q:R`Which factor is NOT part of PESTEL?`, opts:[R`Legal`,R`Ecological`,R`Psychological`,R`Socio-demographic`], correct:2, exp:R`PESTEL = political, economic, socio-demographic, technological, ecological, legal.`, area:'ext'},
{q:R`From which perspective do Porter’s Five Forces analyze competition?`, opts:[R`From the perspective of a single customer`,R`From an industry perspective`,R`From the macro environment`,R`From the firm’s internal resources`], correct:1, exp:R`The Five Forces analyze competition in the market from an industry perspective; PESTEL covers the macro environment.`, area:'five'},
{q:R`Free online learning videos competing with business schools illustrate which force?`, opts:[R`Threat of substitutes`,R`Threat of new entrants`,R`Bargaining power of suppliers`,R`Rivalry among existing competitors`], correct:0, exp:R`A substitute satisfies the same need in another way. New entrants would be new universities entering the same market.`, area:'five'},
{q:R`In which product-life-cycle stage are promotional expenditures at their highest ratio to sales?`, opts:[R`Growth`,R`Decaying maturity`,R`Introduction`,R`Decline`], correct:2, exp:R`In introduction the firm must inform consumers, induce trial and secure distribution, so promotion relative to sales is highest.`, area:'plc'},
{q:R`Why do profits increase in the growth stage?`, opts:[R`Because prices are raised to the maximum`,R`Because marketing costs are spread over a larger volume`,R`Because competition disappears`,R`Because promotion is stopped`], correct:1, exp:R`Rapid climb in sales; profits rise as marketing costs are spread over a larger volume.`, area:'plc'},
{q:R`Which is NOT one of the three strategies to sustain rapid growth?`, opts:[R`Improving quality and adding new features or models`,R`Entering new distribution channels`,R`Lowering prices for the next layer of price-sensitive buyers`,R`Withdrawing products from the market`], correct:3, exp:R`Withdrawing products belongs to the decline stage.`, area:'plc'},
{q:R`"Absolute sales decline, consumers switch to other products, overcapacity arises" describes …`, opts:[R`the introduction stage`,R`growth maturity`,R`decaying maturity`,R`the growth stage`], correct:2, exp:R`Decaying maturity: absolute sales decline, switching begins, slowdown creates overcapacity.`, area:'plc'},
{q:R`What are the axes of the BCG Matrix?`, opts:[R`Sales and profit over the product’s lifetime`,R`Market growth and relative market share`,R`Perceived price and perceived quality`,R`Market size and intensity of competition`], correct:1, exp:R`y-axis: market growth; x-axis: relative market share. Sales and profit over time is the product life cycle.`, area:'bcg'},
{q:R`Which norm strategy belongs to question marks?`, opts:[R`Maintain`,R`Liquidate immediately`,R`Maintain or strengthen`,R`Strengthen or liquidate`], correct:3, exp:R`Question marks: strengthen/liquidate. Stars: maintain/strengthen. Cash cows: maintain. Poor dogs: liquidate.`, area:'bcg'},
{q:R`In which direction does cross-financing in the BCG Matrix usually flow?`, opts:[R`From question marks to cash cows`,R`From cash cows to question marks`,R`From poor dogs to stars`,R`From stars to poor dogs`], correct:1, exp:R`Cash cows (high share, low growth) generate funds that finance question marks so they can become stars.`, area:'bcg'},
{q:R`Applying the job-to-be-done question, who is the core competitor of Lufthansa business class?`, opts:[R`Gulf carriers such as Qatar and Emirates`,R`Video calls such as Microsoft Teams`,R`Low-cost airlines such as Eurowings`,R`Long-distance trains such as FlixTrain`], correct:1, exp:R`Business travellers fly to get to a meeting; a video call does the same job, so firms cut flight budgets. Gulf carriers compete for first class, FlixTrain and Eurowings for domestic routes.`, area:'ext'},
{q:R`In the autonomous-driving PESTEL case, which field did Henkel rate green?`, opts:[R`Legal, because Waymo is allowed to drive one route in Munich`,R`Technological, because German suppliers produce the chips`,R`Social, because an ageing society wants to stay mobile`,R`Ecological, because chip production is very energy-efficient`], correct:2, exp:R`Ageing society = growth driver (green). Tech is yellow (US-dependent chips, no car-to-X platform, weak 5G), legal is a barrier (not allowed in Germany yet), ecology is two-sided.`, area:'ext'},
{q:R`Why does the profit curve of the product life cycle start below zero?`, opts:[R`Development, rent and launch marketing are paid before sales cover them`,R`Prices in the introduction stage are set below cost to win market share`,R`Warranties and facelifts are paid for during the introduction stage`,R`Competitors copy the product immediately and force prices down at launch`], correct:0, exp:R`Investments come first (development, facilities, big launch campaigns). Warranties and facelifts explain the falling profit later, in maturity and decline.`, area:'plc'},
{q:R`What does Henkel mean by using the portfolio to cross-finance along the life cycle?`, opts:[R`Every product should finance its own marketing budget from its own sales`,R`Profits from mature products fund products in introduction or development`,R`Declining products should always receive the largest marketing budget`,R`New products are financed only with bank loans, never with internal cash`], correct:1, exp:R`A multi-product firm should have products in every phase; e.g. iPhone profits fund the Vision Pro. "Always" statements about budgets are wrong.`, area:'bcg'}
]},
{id:'mk-4', ch:4, title:'Conceptualizing Products', date:'Nov 2026',
examWeight:'Product vs service, the six product components, the Ansoff Matrix, the five starting points for product improvement, the four portfolio dimensions (width, length, depth, consistency), line filling vs stretching, product modification, diversification and bundling — Henkel’s own example MC questions on this lecture ask about portfolio dimensions and product modification',
summary:R`**Learning goals of lecture 4:** distinguish products from services and know the components of a product, use the Ansoff Matrix to structure product-market growth, identify starting points for product improvements, describe the product portfolio in terms of width, length, depth and consistency, and explain and apply product modification.

**Opening question: why is every Advent calendar more expensive than the sum of its parts?** ("#productsandservices"). The chocolates inside are only the example. The point is that customers do not pay for the parts but for the whole offering: packaging and design, the ritual of opening one door per day, the surprise and the brand. The added value sits in the components around the core product.

**Product vs service.**
- Product :: a marketable commodity that aims to create value for target customers; can be tangible (food, apparel, furniture) or intangible (music, software); storable; buying it gives the consumer ownership rights
- Service :: an act one entity performs for another that is essentially intangible and does not result in the ownership of anything; also creates value, but cannot be stored; production and consumption occur simultaneously

**Components of a product** (from the core outwards):
- Product :: the core product itself
- Additional features :: extras beyond the core function
- Packaging / design of the point of sale
- Basic services :: services that come with the product as standard
- Additional services :: value-added services on top
- Brand :: the outer layer that carries image and meaning

The slide example is the SWISS Business Class offering in the airline industry: the seat and flight are the product, everything around it (lounge, food, service, brand) are the further components.

**The product–market growth framework: Ansoff Matrix.** Two axes: current vs new products and current vs new customers.
- Market penetration :: current products for current customers
- Market development :: current products for new customers
- Product development :: new products for current customers
- Diversification :: new products for new customers

Weber example on the slide: the gas grill for camping (Weber Traveler), the gas grill at home (Weber eSpirit), the digital grill (Weber Pulse) and the indoor/electric grill (Weber Q 1400) show how one brand moves through the fields.

**Starting points for product improvements** — five kinds of added value:
- Functional added value :: improving the core function of the product (e.g. 7 seats in a car)
- Processual added value :: simplifying or accelerating processes to save time, money and resources (e.g. ParkNow)
- Economic added value :: monetary benefit, e.g. lower cost from reduced fuel consumption thanks to lighter material
- Emotional added value :: positive feelings through purchase and use (joyful driving, pride of owning)
- Social added value :: social prestige through ownership (e.g. access to a community)

**The product portfolio** encompasses all products a company offers, including its product categories and product lines. The four product-mix dimensions let a company expand its business:
- Width :: the number of different product lines the company carries (P&G: e.g. fabric care, oral care, skin and personal care)
- Length :: the total number of items or brands within a product line
- Depth :: the number of variants offered of each product or brand in a line
- Consistency :: how closely related the product lines are in end use, production requirements and distribution channels

**Product line.** A group of related products sold by the same company. Companies develop a basic platform and modules that can be added to meet different requirements and lower production costs; the aim is to induce up-selling and cross-selling.
- Line filling :: adding more items within the existing range — to reach incremental profits, satisfy the desire for variety and plug holes to keep out competitors
- Line stretching :: extending the line beyond its current range, either as a down-market stretch (cheaper) or an up-market stretch (premium)

**Product modification** changes the characteristics and properties of an existing product **without changing its core function**. Three reasons:
- Quality improvement :: increases functional performance through a "new and improved" product
- Feature improvement :: adds size, weight, materials, supplements or accessories that expand performance, versatility, safety or convenience
- Style improvement :: increases the aesthetic appeal

**Product differentiation** is about standing apart in the customer’s mind; well-differentiated products create competitive advantages. Attributes to differentiate on:
- Core functionality
- Features, form and style
- Performance quality
- Conformance quality
- Durability
- Reliability

**Product diversification** means adding new products to the range:
- Concentric :: new products with technological or marketing synergies with existing lines, even though they appeal to a different customer group
- Horizontal :: complementary products, even though they may need a different manufacturing process

**Product bundling** combines several products into a bundle sold at a lower price:
- Pure bundling :: the products can be bought only as a bundle (Microsoft 365: Word, Excel, PowerPoint only as part of the bundle)
- Mixed bundling :: the products can be bought individually or as a bundle (McDonald’s burger, fries and drink alone or as a discounted menu)
- Mixed components :: selected products can only be bought in a bundle (Gillette razors often only in a starter set with blades and foam)

**Possibly not exam-relevant: product elimination and complexity.** The slide carries Henkel’s own note that it can be removed because Consumer Behaviour covers hyperchoice. Content: the optimum number of variants is 3; beyond three, customers no longer see the variants as differentiating, while complexity costs rise exponentially.

**Lessons learned (Henkel’s summary slide):**
- A product is storable, tangible or intangible and transfers ownership; a service is intangible, not storable and grants no ownership
- The Ansoff Matrix sorts growth options into market penetration, market development, product development and diversification
- Product improvements start from functional, processual, economic, emotional and social added value
- The portfolio is described by width (number of lines), length (number of products), depth (variants per product) and consistency (how closely the lines are related)
- Modification changes characteristics without changing the core function: quality, feature or style improvement`,
cards:[
{q:R`Product vs service`, a:R`Product: tangible or intangible, storable, ownership rights. Service: intangible act, not storable, no ownership, produced and consumed at the same time.`},
{q:R`Six components of a product`, a:R`Product (core), additional features, packaging/design of POS, basic services, additional (value-added) services, brand.`},
{q:R`Ansoff Matrix — four fields`, a:R`Current products/current customers: market penetration. Current products/new customers: market development. New products/current customers: product development. New/new: diversification.`},
{q:R`Five starting points for product improvement`, a:R`Functional (core function), processual (save time/money/resources), economic (monetary benefit), emotional (positive feelings), social (prestige, community).`},
{q:R`Portfolio: width, length, depth, consistency`, a:R`Width = number of product lines. Length = number of items/brands in a line. Depth = variants per product. Consistency = how closely related the lines are (end use, production, distribution).`},
{q:R`Line filling vs line stretching`, a:R`Filling: more items within the existing range (incremental profit, variety, keep competitors out). Stretching: beyond the current range, down-market or up-market.`},
{q:R`Product modification and its three reasons`, a:R`Change characteristics without changing the core function: quality improvement (functional performance), feature improvement (size, materials, accessories → versatility, safety, convenience), style improvement (aesthetics).`},
{q:R`Differentiation attributes`, a:R`Core functionality; features, form and style; performance quality; conformance quality; durability; reliability.`},
{q:R`Concentric vs horizontal diversification`, a:R`Concentric: technological/marketing synergies, different customers. Horizontal: complementary products, possibly a different manufacturing process.`},
{q:R`Pure vs mixed bundling vs mixed components`, a:R`Pure: only as a bundle (Microsoft 365). Mixed: individually or as a bundle (McDonald’s menu). Mixed components: selected products only in a bundle (Gillette starter set).`}
],
quiz:[
{q:R`Which feature distinguishes a product from a service in the lecture?`, opts:[R`A product is always tangible and can therefore be touched before it is bought`,R`A product is storable and its purchase transfers ownership rights to the consumer`,R`A product cannot create value without a service`,R`A product is produced and consumed at the same time`], correct:1, exp:R`Products can be tangible or intangible, but they are storable and their purchase gives ownership rights. Simultaneous production and consumption describes services.`, area:'prod'},
{q:R`Which is the outermost component in the lecture’s product model?`, opts:[R`Additional features`,R`Basic services`,R`Brand`,R`Packaging`], correct:2, exp:R`From the core outwards: product, additional features, packaging/design of POS, basic services, additional services, brand.`, area:'prod'},
{q:R`A grill maker sells its existing gas grill to campers, a group it never targeted before. Which Ansoff field is this?`, opts:[R`Market penetration`,R`Product development`,R`Diversification`,R`Market development (current product, new customers)`], correct:3, exp:R`Current product, new customers = market development.`, area:'ans'},
{q:R`Which Ansoff field combines new products with new customers?`, opts:[R`Market development`,R`Diversification`,R`Product development`,R`Market penetration`], correct:1, exp:R`New products for new customers = diversification.`, area:'ans'},
{q:R`A parking app that saves drivers time and effort delivers mainly which added value?`, opts:[R`Processual added value`,R`Emotional added value`,R`Social added value through prestige and community`,R`Functional added value through a better core function`], correct:0, exp:R`Processual added value simplifies or accelerates processes to save time, money and resources (ParkNow).`, area:'impr'},
{q:R`Lower running costs from lighter material that reduces fuel consumption are an example of …`, opts:[R`functional added value`,R`social added value`,R`economic added value`,R`emotional added value`], correct:2, exp:R`Economic added value = a monetary benefit for the customer.`, area:'impr'},
{q:R`What does product-mix width measure?`, opts:[R`The number of variants of each product`,R`The number of different product lines`,R`The number of items within one line`,R`How closely the lines are related`], correct:1, exp:R`Width = number of product lines; length = items in a line; depth = variants; consistency = relatedness.`, area:'port'},
{q:R`A shampoo brand offered in 12 scents and sizes has a large …`, opts:[R`width`,R`consistency`,R`length`,R`depth`], correct:3, exp:R`Depth = the number of variants offered of each product or brand.`, area:'port'},
{q:R`Adding a cheaper entry model below the current range is …`, opts:[R`line filling`,R`an up-market stretch`,R`a down-market stretch`,R`horizontal diversification`], correct:2, exp:R`Line stretching goes beyond the current range; downward = down-market stretch.`, area:'port'},
{q:R`Which change is NOT a product modification in the lecture’s sense?`, opts:[R`A "new and improved" version with better performance`,R`Moving the product into a new category with a new core function`,R`Adding accessories and materials that increase safety or convenience`,R`A new design that raises aesthetic appeal`], correct:1, exp:R`Modification changes characteristics without changing the core function.`, area:'mod'},
{q:R`McDonald’s sells burger, fries and drink separately or as a cheaper menu. Which bundling form?`, opts:[R`Pure bundling`,R`Mixed components`,R`Horizontal bundling`,R`Mixed bundling`], correct:3, exp:R`Individually or as a bundle = mixed bundling.`, area:'mod'},
{q:R`A firm adds complementary products that need a different manufacturing process. This is …`, opts:[R`horizontal diversification`,R`concentric diversification based on technological synergies`,R`line filling within the existing range`,R`market penetration`], correct:0, exp:R`Horizontal = complementary products; concentric = technological or marketing synergies with existing lines.`, area:'mod'}
]},
{id:'mk-5', ch:5, title:'Conceptualizing Services', date:'Nov 2026',
examWeight:'The four service characteristics (intangibility, inseparability, variability, perishability), service differentiation, the five components of service quality and the new service realities in the digital age — Henkel’s example MC questions cover exactly these three blocks',
summary:R`**Learning goals of lecture 5:** explain why services are gaining relevance, know the distinctive characteristics of services, know the criteria for differentiating services, explain the components of service quality, and discuss the new service realities in the digital age.

**Opening question: why is a cosmetic treatment not always the same?** ("#productsandservices"). The result depends on who treats you, when, where and how — that is the variability of services. App-based technological support is one answer: it standardizes parts of the service.

**Increasing relevance of services.** The global services market is growing strongly (roughly 8 % a year; Henkel’s lessons-learned slide says no exact numbers are required). Growth driver: technological advances; Asia-Pacific is the largest region, North America the fastest growing. Services are transactions between buyer and seller without transferring physical goods; they use resources, experience, skill, ingenuity and intelligence.

**Distinctive characteristics of services:**
- Intangibility :: services cannot be seen, tasted, felt, heard or smelled before they are bought — you only see the result of cosmetic surgery after undergoing it
- Inseparability :: physical goods are manufactured, stored, distributed and consumed later; services are produced and consumed simultaneously — a haircut
- Variability :: quality depends on who provides the service and when, where and to whom — target: uniform guest experiences
- Perishability :: a service cannot be stored — restaurants charge guests for missed reservations

**Differentiation through services:**
- Ease of ordering :: how simple it is for the customer to place an order, covering all aspects of the interaction
- Speed and timing of delivery :: speed, accuracy and care of bringing the product or service to the customer
- Installation, training and consulting :: making a product operational at its planned location; a selling point for novices and complex products (heavy equipment)
- Maintenance and repair :: keeping purchased products in good working order, especially in B2B
- Returns :: a nuisance for everyone involved but unavoidable, especially online — handling them well differentiates

**Components of service quality.** Service quality rests on the premise that customer perceptions and expectations change over time: the customer compares what they expected with what actually happened. When expectations about what a company will deliver rise, the overall perception of quality can also improve — and the same performance can be judged differently at different times. The five components:
- Reliability :: performing the promised service dependably and accurately (on time, error-free records)
- Responsiveness :: willingness to help customers and provide prompt service
- Assurance :: knowledge and courtesy of employees and their ability to convey trust and confidence
- Empathy :: caring, individualized attention to the customer
- Tangibles :: appearance of physical facilities, equipment, personnel and communication materials

**The new service realities in the digital age:**
- Increasing role of technology :: raises service quality and makes service workers more productive, but changes the role and relevance of service workers
- Customer empowerment :: customers arrive with higher, more sophisticated prior knowledge; customer and staff act at eye level
- Customer co-production :: customers take an active role in service delivery — downside: errors become more likely because customers differ in professionalism
- Satisfying employees as well as customers :: a positive employee attitude is essential; training, appreciation and involvement raise employees’ willingness to engage

**Possibly not exam-relevant** (these slides carry Henkel’s note that they can be removed):
- The service aspect of an offering :: five categories from pure tangible good, tangible good with accompanying services, hybrid offering, major service with accompanying minor goods and services, to pure service
- Service blueprint :: maps a service process (example overnight hotel stay: arrive, check-in, room, room service, check-out) with the physical evidence and the staff actions behind each step, to find pain points
- Ensuring service quality despite variability :: hire and train well (competence, courtesy, credibility, reliability, responsiveness, communication skills), standardize the service process (blueprinting, fix pain points, zero-defects culture), monitor satisfaction (surveys, complaint systems, mystery shopping)

**Lessons learned (Henkel’s summary slide):**
- Services are intangible, inseparable, variable and perishable, so they cannot be stored or judged before purchase
- The services market grows at roughly 8–8.7 % a year (no exact numbers required)
- Perceived service quality compares expectation with experience; because expectations shift, the same performance can be judged differently over time
- Technology raises quality and productivity but changes the service worker’s role; customers know more and co-produce`,
cards:[
{q:R`Four characteristics of services (with examples)`, a:R`Intangibility (result of cosmetic surgery only visible afterwards), inseparability (haircut produced and consumed at once), variability (quality depends on who, when, where, to whom), perishability (cannot be stored → no-show fees).`},
{q:R`Five ways to differentiate through services`, a:R`Ease of ordering; speed and timing of delivery; installation, training and consulting; maintenance and repair; returns.`},
{q:R`Five components of service quality`, a:R`Reliability (dependable, accurate), responsiveness (prompt help), assurance (knowledge, courtesy, trust), empathy (individual attention), tangibles (facilities, equipment, staff appearance).`},
{q:R`Why can the same service be judged differently over time?`, a:R`Perceived quality = experience compared with expectations, and expectations change over time.`},
{q:R`Four new service realities in the digital age`, a:R`Increasing role of technology (quality and productivity up, worker role changes); customer empowerment (more prior knowledge, eye level); customer co-production (active role, more errors); satisfying employees as well as customers.`}
],
quiz:[
{q:R`"A haircut is executed and consumed at the same time" illustrates …`, opts:[R`intangibility, because the result cannot be seen beforehand`,R`perishability`,R`inseparability`,R`variability, because quality depends on the hairdresser`], correct:2, exp:R`Inseparability: production and consumption happen simultaneously.`, area:'svc'},
{q:R`Why do some restaurants charge guests for missed reservations?`, opts:[R`Because services are variable`,R`Because services are perishable and an empty table cannot be sold later`,R`Because services are intangible`,R`Because services are inseparable`], correct:1, exp:R`An unused table cannot be stored and sold later — perishability.`, area:'svc'},
{q:R`Which characteristic explains why a hotel chain aims for uniform guest experiences?`, opts:[R`Variability`,R`Perishability`,R`Intangibility`,R`Inseparability`], correct:0, exp:R`Quality depends on who provides the service and when, where and to whom — firms try to reduce that variability.`, area:'svc'},
{q:R`Which is NOT one of the lecture’s service differentiators?`, opts:[R`Ease of ordering`,R`Maintenance and repair`,R`Returns`,R`Brand heritage`], correct:3, exp:R`The five: ease of ordering; speed and timing of delivery; installation, training and consulting; maintenance and repair; returns.`, area:'sdiff'},
{q:R`"The ability to perform the promised service dependably and accurately" is …`, opts:[R`assurance`,R`reliability`,R`responsiveness`,R`empathy`], correct:1, exp:R`Reliability = dependable and accurate, e.g. on time and with error-free records.`, area:'sq'},
{q:R`The appearance of facilities, equipment and staff belongs to which quality component?`, opts:[R`Assurance`,R`Responsiveness`,R`Tangibles`,R`Empathy`], correct:2, exp:R`Tangibles = the physical, visible side of the service.`, area:'sq'},
{q:R`Which statement on perceived service quality matches the lecture?`, opts:[R`It depends only on the objective performance`,R`It compares the customer’s expectations with what actually happened during the service`,R`It cannot change once a customer has formed an opinion`,R`It is measured only by price paid`], correct:1, exp:R`Customers compare what they expected with what occurred; expectations shift over time.`, area:'sq'},
{q:R`What is the downside of customer co-production?`, opts:[R`Customers lose all prior knowledge`,R`Service workers become irrelevant`,R`Errors become more likely because customers differ in their level of professionalism`,R`Technology can no longer be used to support the service encounter at all`], correct:2, exp:R`Customers take an active role, so error probability rises with varying professionalism.`, area:'dig'},
{q:R`Customer empowerment in the digital age means …`, opts:[R`customers enter encounters with more and more sophisticated prior knowledge`,R`customers no longer need any service staff`,R`firms fully control the information customers see`,R`customers co-produce every service alone without any contact with staff members`], correct:0, exp:R`Empowered customers know more beforehand; customer and staff act at eye level.`, area:'dig'}
]},
{id:'mk-6', ch:6, title:'Marketing Communication and Campaigning', date:'Nov 2026',
examWeight:'Traditional vs digital communication (bowling vs pinball), the four characteristics of modern communication, AIDA, the seven campaign steps with objectives, message, four budget methods, media channels, reach/frequency/impact, supply- vs demand-side measurement, CPM and the 6 Cs of IMC — a list-heavy lecture, ideal MC and open-question material',
summary:R`**Learning goals of lecture 6:** understand how digitalization and the characteristics of modern communication shape the communication process (bowling vs pinball), know the AIDA concept, know and explain the seven steps of developing a communication campaign, and know and understand the 6 Cs of integrated marketing communications.

**Opening point: you cannot not communicate.** Every action (or silence) of a brand sends a message, so the question is never whether a company communicates, but what it communicates.

**The traditional communication process:**
=> Sender → Encoding → Message via media → Decoding → Receiver → Response → Feedback

Noise disturbs every step between sender and receiver.

**Digital communication: pinball, not bowling.**
- Bowling (traditional) :: the company rolls its marketing activities through traditional media straight at the customer; one direction, no interaction
- Pinball (digital) :: company activities, social media and customer reactions bounce off each other; other customers react too, so communication is interactive and multi-directional and the company no longer controls the path

**Four characteristics of modern communication:**
- Fragmentation :: the number of media on offer and used by a single user keeps growing over time
- Interaction :: customers respond and talk back
- Democratization :: everyone can publish and influence
- Individualization :: messages are tailored to the individual

**The AIDA concept.** The sender moves the receiver through four stages:
=> Attention → Interest → Desire → Action

AIDA works as a funnel and filter: along the way up to 97 % of the addressed customers get lost.

**Seven steps of developing a communication campaign:**
=> Identify the audience → Determine objectives → Craft the message → Determine the budget → Decide on the media → Measure performance → Manage integrated communication

**Step 1 — identifying the audience:**
- Target group (whom to talk to) :: current users, potential users, deciders, influencers; individuals, groups, particular publics or the general public
- Relevant characteristics :: characteristics of customer segments, experience with the product/service, degree of involvement or interest
- Media use :: the "typical day" (preferred channels), preferred mode of information (text, audio-visual …), need for cognition (how much detail)

**Step 2 — determining objectives** (they build on each other: need → awareness → attitude → purchase):
- Establish need for the category :: satisfy a perceived discrepancy between the current and the desired motivational state
- Build strong brand awareness :: the customer can recognize or recall the brand in sufficient detail
- Build brand attitude :: help customers evaluate the brand’s perceived ability to meet a currently relevant need
- Influence brand purchase intention :: move customers to decide to buy or take purchase-related action

**Step 3 — crafting the message:**
- Message strategy (what to say?) :: appeals, themes or ideas that tie into the brand positioning and establish points of parity or points of difference
- Creative strategy (how to say it?) :: informational appeals (product attributes and services, e.g. quality or value) or transformational appeals (non-product benefits, e.g. image transfer)
- Message source (who should say it?) :: credibility, trustworthiness, reach, popularity, brand congruity

**Step 4 — determining the budget** (four methods):
- Affordable method :: managers invest what they think they can afford — communication is not seen as a strategic investment, the annual budget is uncertain and long-range planning is difficult
- Percentage of sales :: budget = a set percentage of current or expected sales — set by available funds instead of market opportunities, no logical basis for the specific percentage, reinforces trends
- Competitive parity :: aim for a share of voice equal to competitors — ignores differences in image, reputation and resources, and risks communication wars
- Objective-and-task :: (1) define objectives, (2) identify the tasks, (3) estimate their costs — e.g. awareness or image goals, a market-share goal, the number of prospects to win

**Step 5 — deciding on the media:**
- Personal channels (direct interaction, tailored engagement) :: personal selling; word-of-mouth marketing (peer recommendations, viral, buzz); direct and database marketing (phone, personalised e-mail, mail)
- Nonpersonal channels (mass reach, brand atmosphere) :: advertising (TV, print, radio, outdoor, digital display); online and interactive marketing (websites, search, social media); sales promotion (coupons, contests, premiums, samples); events and experiences (sports, arts, trade shows); public relations and publicity
- Hybrid bridge :: influencer marketing links digital mass reach with authentic, trusted peer recommendation
- Strategic media choice :: match the channel to the buyer-readiness stage — nonpersonal channels for broad awareness, influencer and hybrid channels for trust, personal channels for conviction and closing the purchase

**Developing a media plan.** Media selection looks for the most cost-effective way to deliver the desired number and type of exposures to the target audience:
- Reach :: how many people are exposed at least once — matters most for new products, brand extensions, rarely bought items and broad or undefined target markets
- Frequency :: how often they are exposed within a period — matters most with strong competition, complex messages, resistant consumers and frequent purchases
- Impact :: the quality or effectiveness of each exposure

**Step 6 — measuring performance.** Communication effectiveness can be measured from two sides:
- Supply side :: media coverage, e.g. seconds the brand is clearly visible on TV — downside: equating coverage with exposure ignores content and quality
- Demand side :: the effect of the campaign — potential customers reached, recognition and recall of the ad, attitude towards the ad or product, persuasion changes

**Cost per thousand (CPM)** — how expensive is it to reach 1,000 contacts with a medium?
- Formula :: CPM = c / C × 1,000
- c :: the cost of using the medium
- C :: the reach (number of contacts realized with this medium)

**Step 7 — managing integrated marketing communications (IMC).** IMC ensures that a company’s communication activities are consistent with one another and reach the communication goals effectively and cost-efficiently. Four directions of integration:
- Horizontal :: coordinate all relevant marketing actions with the campaign for maximum customer impact
- Vertical :: align communication objectives with the higher-level goals of the marketing strategy
- Internal :: share information from different departments with the communication team
- External :: coordinate with external collaborators

**Not in the exam (Henkel, 23 Nov):** the 6 Cs and the Merck slide (the last two content slides) will not be asked — "you don't have to learn it by heart". The learning-goal and summary slides still list the 6 Cs; Henkel’s statement in class overrides them. Step 7 itself stays part of the seven steps you must know.

**The 6 Cs (integration check) — not in exam:**
- Coverage :: how far each and overlapping communication tools reach the designated target group
- Contribution :: the inherent ability of a communication to create the desired response
- Commonality :: how far common associations are reinforced across options (channels share the same meaning)
- Complementarity :: how far different associations and linkages are emphasized across options
- Conformability :: how well IMC messages work for target groups with different involvement levels
- Cost :: the most cost-effective and cost-efficient programme

The Merck example shows one campaign carried consistently through mass media, social media, fairs, events and outdoor, corporate architecture and samples or give-aways.

**Lessons learned (Henkel’s summary slide):**
- Digital communication has moved from a one-way, non-interactive process to an interactive, multi-directional "pinball process"
- Modern communication: fragmentation, interaction, democratization, individualization
- AIDA moves the receiver from attention through interest and desire to action; as a funnel it loses up to 97 % of addressed customers
- Seven campaign steps: audience, objectives, message, budget, media, measuring performance, managing IMC
- 6 Cs: coverage, contribution, commonality, complementarity, conformability, cost (not in exam, see above)

**In class 23 Nov — end of lecture 6 (from the recording).**

**Exam scope.** Integrated communication and the 6 Cs are **not part of the exam**. What you must know by heart are the **seven steps** of a communication campaign — with them you can explain any campaign case ("you will always find something to talk about").

**Why integration still matters (background, not exam).**
- Small firm :: do not run every channel at once. Pick one core channel you really control (answer within hours, watch the discussions, protect your reputation) and spread the same story via hashtags to the others — echoes the guest talk by Daniel Hagemeier
- Link the channels :: a sponsorship banner alone does nothing. Private-equity firm sponsoring a horse-riding event → banner + pop-up with champagne and a conversation + a give-away with a QR code that leads to the website at home
- One story, not many :: Merck uses one precise core idea, "curiosity", everywhere (trade-fair stands that look like a disco, samples to mix your own colours that deciders take home to their kids, curiosity cubes in schools). Curiosity is narrower and easier to interact with than "innovativeness"
- Synthetic personas :: describe a target customer in detail in one ChatGPT project, then ask it to answer from that persona's perspective to pre-test whether the message lands the same way on every channel

**Modern communication, with Henkel's examples.**
- Fragmentation :: everyone uses different sources (Bloomberg, LinkedIn …) → build the story first, then spread it, keep one core channel
- Interaction :: posts need engagement (comments) or the algorithm and AI search ignore you; what triggers engagement changes every few months (polls, then questions)
- Democratization :: frame content so people can play with it, but inside a narrow, precise corridor
- Individualization :: the #Gönndir campaign at a car-leasing platform — young buyers who share one lease among several friends; the hashtag came from asking young people. Rule: if you want to sound young, ask young people

**AIDA — do not forget the action stage.** Attention and interest often happen outside your control (Google, ChatGPT); desire is measurable on your own website (time on page, steps). But the goal is a purchase, not a long visit. Example: tools like Microsoft Clarity showed that customers aged 65+ explored leasing offers but dropped out at the e-mail form because they wanted to hear a trustworthy voice → a phone option routed via a central line to the dealer raised their share of sales sharply.`,
cards:[
{q:R`Traditional communication process`, a:R`Sender → encoding → message (media) → decoding → receiver → response → feedback; noise disturbs the whole process.`},
{q:R`Bowling vs pinball`, a:R`Bowling: one-way from company via traditional media to the customer. Pinball: company, social media, customers and other customers interact multi-directionally; the firm no longer controls the path.`},
{q:R`Four characteristics of modern communication`, a:R`Fragmentation, interaction, democratization, individualization.`},
{q:R`AIDA`, a:R`Attention → interest → desire → action; funnel and filter, up to 97 % of addressed customers get lost.`},
{q:R`Seven steps of a communication campaign`, a:R`Identify audience → determine objectives → craft message → determine budget → decide on media → measure performance → manage integrated communication.`},
{q:R`Four communication objectives`, a:R`Establish need for the category → build brand awareness → build brand attitude → influence purchase intention.`},
{q:R`Message: three questions`, a:R`Message strategy = what to say (appeals tied to positioning, points of parity/difference). Creative strategy = how (informational vs transformational appeals). Message source = who (credibility, trustworthiness, reach, popularity, brand congruity).`},
{q:R`Four budget methods and one weakness each`, a:R`Affordable (not strategic, uncertain budget); percentage of sales (funds not opportunities, no logical %, reinforces trends); competitive parity (ignores differences, communication wars); objective-and-task (objectives → tasks → costs).`},
{q:R`Reach vs frequency vs impact`, a:R`Reach: people exposed at least once (new products, extensions, rare purchases, broad markets). Frequency: exposures per period (strong competition, complex message, resistance, frequent purchases). Impact: quality of each exposure.`},
{q:R`CPM`, a:R`Cost per thousand = cost of the medium / reach × 1,000.`},
{q:R`Supply- vs demand-side measurement`, a:R`Supply: media coverage (e.g. seconds on screen) — ignores content and quality. Demand: effect of the campaign (reach of potential customers, recognition/recall, attitude, persuasion).`},
{q:R`Four directions of IMC`, a:R`Horizontal (all marketing actions), vertical (with overall marketing strategy), internal (departments share information), external (coordination with collaborators).`},
{q:R`6 Cs of IMC (not in exam per Henkel 23 Nov)`, a:R`Coverage, contribution, commonality, complementarity, conformability, cost.`},
{q:R`What did Henkel say on 23 Nov about the exam scope of lecture 6?`, a:R`The 6 Cs / integrated communication are not in the exam. Learn the seven campaign steps by heart.`}
],
quiz:[
{q:R`What does the "pinball" metaphor describe?`, opts:[R`One-way communication from firm to customer through mass media`,R`Interactive, multi-directional communication between firm, social media, customers and other customers`,R`A campaign that bounces between TV, print and radio to maximise reach and frequency`,R`The loss of customers along the AIDA funnel`], correct:1, exp:R`Digital communication bounces between company, social media and customers; traditional = bowling.`, area:'proc'},
{q:R`Which is NOT one of the four characteristics of modern communication?`, opts:[R`Fragmentation`,R`Democratization`,R`Centralization`,R`Individualization`], correct:2, exp:R`The four: fragmentation, interaction, democratization, individualization.`, area:'proc'},
{q:R`Up to what share of addressed customers can get lost along the AIDA process?`, opts:[R`About 50 % of them`,R`Up to 97 %`,R`About 10 % of them`,R`Up to 75 % of them`], correct:1, exp:R`Lessons-learned slide: AIDA works as funnel and filter, up to 97 % get lost.`, area:'aida'},
{q:R`Which step comes directly after crafting the message?`, opts:[R`Deciding on the media`,R`Identifying the audience`,R`Determining the budget`,R`Measuring performance`], correct:2, exp:R`Audience → objectives → message → budget → media → measuring → managing IMC.`, area:'camp'},
{q:R`Which objective means helping customers evaluate the brand’s ability to meet a currently relevant need?`, opts:[R`Build brand attitude`,R`Build brand awareness`,R`Establish need for the category`,R`Influence purchase intention`], correct:0, exp:R`Brand attitude = evaluation of the brand’s perceived ability to meet a relevant need.`, area:'camp'},
{q:R`An ad that transfers a lifestyle image rather than describing product features uses …`, opts:[R`an informational appeal based on product attributes`,R`a transformational appeal`,R`competitive parity in share of voice`,R`the message source`], correct:1, exp:R`Transformational appeals focus on non-product benefits such as image transfer.`, area:'msg'},
{q:R`Which budget method risks communication wars?`, opts:[R`Affordable method`,R`Percentage of sales`,R`Objective-and-task`,R`Competitive parity`], correct:3, exp:R`Matching competitors’ share of voice ignores differences between firms and can escalate.`, area:'msg'},
{q:R`Which budget method defines objectives first, then tasks, then costs?`, opts:[R`Objective-and-task`,R`Percentage of sales`,R`Competitive parity`,R`Affordable method`], correct:0, exp:R`(1) objectives, (2) tasks, (3) cost estimate.`, area:'msg'},
{q:R`Frequency matters most when …`, opts:[R`a brand extension is launched to a broad market`,R`the product is rarely bought`,R`competition is strong, the message is complex and consumers resist it`,R`the target market is broad, undefined and only reached once`], correct:2, exp:R`Reach matters for new products, extensions, rare purchases and broad markets; frequency for strong competition, complex messages, resistant consumers and frequent purchases.`, area:'media'},
{q:R`A TV spot costs 30,000 and reaches 600,000 contacts. What is the CPM?`, opts:[R`5`,R`20`,R`50`,R`500`], correct:2, exp:R`CPM = 30,000 / 600,000 × 1,000 = 50.`, area:'media'},
{q:R`Why is supply-side measurement criticised?`, opts:[R`It is too expensive to collect`,R`It equates media coverage with advertising exposure and ignores the content and quality of the message`,R`It only measures purchase intention and ignores the media coverage that was bought`,R`It cannot be used for TV`], correct:1, exp:R`Supply side counts coverage (e.g. seconds on screen) but says nothing about the message’s effect.`, area:'media'},
{q:R`Aligning communication objectives with the overarching marketing strategy is which IMC direction?`, opts:[R`Horizontal`,R`Internal`,R`External`,R`Vertical`], correct:3, exp:R`Vertical = with higher-level goals; horizontal = with all marketing actions; internal = departments; external = collaborators.`, area:'imc'}
]},
{id:'mk-7', ch:7, title:'Distribution and Omnichannel Management', date:'23 Nov 2026',
examWeight:'Built from the recording of 23 Nov (no slides yet, check against Lecture 07 once uploaded). Henkel’s own learning goals: role and functions of distribution, five sources of channel power, horizontal / vertical / multichannel conflicts, development single → multi → omnichannel. Expect list MCs (functions, power sources, conflict types) and a short case: which channel model, which power, which conflict',
summary:R`> **Source:** recording of the lecture on 23 Nov, no Lecture 07 slides yet. Terms follow Kotler/Keller (the course textbook); check against the slides as soon as they are on Canvas.

**Learning goals Henkel named:**
- Understand the role and functions of distribution (more than "a shop to sell something")
- Know the different types of channel power
- Distinguish horizontal, vertical and multichannel conflicts
- Follow the development from single-channel to omnichannel distribution, with examples

**Opening case: why does Nespresso keep a shop that costs a fortune in rent?** Almost nobody walks out with bags of capsules, yet the shop pays off:
- Signalling :: a big shop in the best location says "we are successful, you should be with us" (brand prestige)
- Testing :: smell and taste the coffee, try new flavours and the machine yourself
- Experience :: you picture yourself making coffee at home; the cheap machine plus expensive capsules becomes a habit
- Social place :: staff are trained to create a piazza atmosphere, a reason to talk to people (a real need of customers)
- Ordering :: you order on a screen or at the counter and get the capsules delivered; staff and screen use the **same system and data**, so the shop knows your preferences and can recommend. Moving between offline and online without noticing it = **omnichannel**

**Showrooming: risk and opportunity.** People test products in stores (e.g. trying on trainers at a department store) and then buy online.
- Risk :: real estate and staff cost money while sales go online
- Opportunity :: it proves people want to test, touch, discuss and belong; online players such as Amazon (Amazon Fresh) and Zalando fail at running physical shops
- Solution :: turn the store business **B2B**, i.e. rent out shop floor, staff and shop design to digital brands for a monthly fee. Store owners sell access to real estate in prime locations. Amazon itself does only one piece (reach); payment and delivery are done by partners (PayPal, DHL)

**Distribution = a set of interdependent organizations.** Each channel is its own organization with its own logic (a Nespresso flagship store vs a Nespresso corner in an electronics store vs an online shop), but in the customer’s eyes they are interdependent: what you see online you expect offline, and staff must know more than Google. The firm has to decide who the staff are (own, hired, the retailer’s) and how to incentivize them.

**Functions of distribution (channel functions):**
- Market information :: just observe customers in the shop and you learn their real problem (MoMA visitors want the heavy art book but cannot carry it home → organize shipping)
- Promotion :: sampling (new flavour at Nespresso, a cold Coke), QR-code offers, pop-up stores (test running shoes in front of an office building at lunch → sell the first pair offline, the next online)
- Negotiation :: high-investment products are sold in person; it is hard to say no face to face. Prices and new listings are agreed on site
- Ordering :: being there shows what to order (more decaf, a second machine because of queues)
- Financing and risk taking :: OEMs push their stock to dealers at the start of the year (carmakers, fashion), so the assets and risk sit with the dealers. That is why bypassing dealers (agency model to get customer data) worries the CFO. Fix: offer dealers a share of follow-up sales they generated
- Credit provision :: someone must fund e.g. buy-now-pay-later gaps; often the dealer network or a captive bank
- Payment processing :: cash only saves fees but loses customers who no longer carry cash (pizzeria, church collection) → accept card / Apple Pay; the OEM can share the fee with the dealer
- Ownership transfer :: delivery, packaging, quality control, handing over

**Channel levels.**
- Zero-level (direct) :: Canyon sells bikes only online → lower price, but no test rides (only one experience centre), assembly problems when the bike arrives in a box, and local dealers refuse to service Canyon bikes. Tesla has the same service problem. Solve the whole problem, not part of it
- One-level (retailer) :: Riese & Müller sells only through certified, established dealers with a workshop and trained staff (rule: a touchpoint every 50 km) because the **channel has a reputation**, like a communication channel. On started in specialist running shops and later moved to mass retailers once the brand was established
- Two-level (wholesaler + retailer) :: Giant (more than 7 million bikes a year) uses importers or wholesalers per country that adapt to each culture; costs margin (around 30 % to the wholesaler, 40 % to the dealer) but is cheaper than an own workforce in every market. In fashion at least two thirds of the margin sit with the dealer
- B2B zero-level :: Klöckner (steel) built an "Amazon for B2B"; it only worked once they opened the platform to other suppliers, because buyers never source everything from one supplier. Now they earn a share of others’ sales too
- B2B one-level (industrial distributor) :: switch makers around Lüdenscheid (e.g. Busch-Jaeger, Gira, Jung) sell via the electrical wholesaler Sonepar, which serves electricians at 7 a.m., delivers to the construction site and handles billing and certificates
- Parallel channels :: Roche sells standard products through pharma wholesalers (one client, simple) but sends its own representatives to opinion leaders for highly innovative products (AI insulin pump), because that business is built on trust

**Five sources of channel power.**
- Coercive :: threatening to withdraw a resource or end the relationship if intermediaries do not cooperate. Mars (or Haribo) can pull all products from a retailer and leave metres of empty shelf. Strong brands dictate prices; retailers should not depend on one supplier (keep each at around 20 % of risk)
- Reward :: incentives for intermediaries who perform. Thermomix (Vorwerk) lets top sellers build their own network of sellers and share in their commission, because the machine only sells when people see it cook at home
- Legitimate (legal) :: legal requirements or authorization; not everyone may sell insurance or broker real estate. A regional IT firm could sell Google’s software and add the market-specific legal adaptation Google does not want to do
- Expert :: specific knowledge. Jura staffs its corners in electronics stores with its own trained employees and must keep producing knowledge and training
- Referent (reference) :: the partner’s attraction or reputation. A leasing platform needs BYD because young customers want it; a dealer that carries Caterpillar is seen as a good dealer, so other brands want to be sold there too

**Channel conflicts.**
- Horizontal :: between members on the same level. Burger King has no own restaurants; if one franchisee breaks the hygiene rules, every franchisee suffers → same rules and controls for everyone
- Vertical :: between different levels. Haribo per kilo is cheaper at a cash & carry wholesaler than at a supermarket → the retailer complains. Solutions: different pack sizes, or separate lines or brands for different dealers (Mammut premium vs lite line, Boss Orange / Red)
- Multichannel :: between separately run channels. An electronics retailer with separate companies for online and offline: the customer wants the online price in the store, but the store pays rent and staff and does the advice. Solution: one omnichannel organization with shared data and incentives that reward both

**From single channel to omnichannel.**
- Single channel (until about 2002) :: one producer, one exclusive channel. Still used to protect exclusivity: Chanel haute couture only in a few own boutiques, no online
- Multichannel (from about 2012) :: several channels run as **separate businesses** with separate P&Ls and KPIs, competing with each other, no shared database or pricing. Works when assortments do not overlap (Louis Vuitton: cheaper items online, high-end only in store); overlap causes conflicts
- Omnichannel (from about 2016) :: all channels run on **one CRM system**; customers switch seamlessly and **non-linearly** (forward and back) between online and offline. Gucci: order a suit online, it does not fit at a theatre in New York → the New York store already knows your size and alters it

**How to build omnichannel:**
=> Customer service promise (fastest? most exclusive? cheapest?) → technology (cloud, not slow on-premise systems) → trading rules (clear commissions for every partner who sells via your system)

**Omnichannel examples.**
- ViU (eyewear) :: glasses are fashion, so every shop has a community/fashion manager, an optician and a sales expert. Everything is ordered through one online system, whether at home or in any shop; staff use the same tablet as the customer with a little more data
- VeloPlace (bike parts, Switzerland) :: customers search for parts brands (Shimano, Bosch), not bike brands. The largest parts importer runs a platform; customers order parts home or to a partner dealer, who installs and services them. Dealers get a sticker, a terminal and a commission on every transaction they start or service → more traffic for dealers, more sales for the importer

**Communication and sales merge.** Instagram or TikTok are communication channels, but once an influencer sells a product they become sales channels. What counts is the contribution of each touchpoint.

**Takeaways (Henkel’s summary):**
- Distribution channels are sets of interdependent organizations; organized separately, but they must be connected
- Beyond physical movement and handing over, they provide market information, promotion, negotiation, financing and risk taking
- Power imbalances: coercive, reward, legitimate, expert and referent power
- Conflicts occur horizontally, vertically and between separate channels (multichannel)
- Omnichannel means seamless switching between channels, and the journey is not linear`,
cards:[
{q:R`Why does Nespresso keep expensive shops although few people carry capsules out?`, a:R`Signalling/prestige, testing and tasting, experience, social place — and ordering via the same system online/offline (omnichannel).`},
{q:R`Showrooming: risk and opportunity`, a:R`Risk: rent and staff while sales go online. Opportunity: people want to test and belong; turn the store B2B and rent shop floor to digital brands that cannot run shops.`},
{q:R`Distribution as interdependent organizations`, a:R`Each channel is its own organization with its own logic, but customers see them as one, so they must be connected.`},
{q:R`Channel functions`, a:R`Market information, promotion, negotiation, ordering, financing, risk taking, credit provision, payment processing, ownership transfer (physical delivery).`},
{q:R`Zero-, one-, two-level channel`, a:R`Zero: direct (Canyon online). One: via retailer (Riese & Müller certified dealers). Two: wholesaler + retailer (Giant importers per country).`},
{q:R`Five sources of channel power`, a:R`Coercive (threat to withdraw: Mars), reward (incentives: Thermomix), legitimate/legal (authorization: insurance), expert (knowledge: Jura), referent (attractive brand: BYD, Caterpillar).`},
{q:R`Three types of channel conflict`, a:R`Horizontal (same level: Burger King franchisees), vertical (different levels: Haribo cash & carry vs supermarket), multichannel (separate online/offline companies).`},
{q:R`Multichannel vs omnichannel`, a:R`Multichannel: separate channels, separate P&Ls/KPIs, no shared data. Omnichannel: one CRM, seamless, non-linear switching.`},
{q:R`Three steps to build omnichannel`, a:R`Customer service promise → technology (cloud) → trading rules for partners (clear commissions).`},
{q:R`Downside of Canyon’s zero-level model`, a:R`No test rides, assembly at home, no service network (dealers refuse). Solve the whole problem, not part of it.`}
],
quiz:[
{q:R`A Nespresso customer tastes coffee in the shop, orders 20 kg on the shop screen to be delivered home, and the shop already knows her preferences. This is an example of …`, opts:[R`multichannel distribution`,R`omnichannel distribution`,R`single-channel distribution`,R`a vertical channel conflict`], correct:1, exp:R`Same system and data online and offline, seamless switching = omnichannel.`, area:'omni'},
{q:R`According to Henkel, what is the opportunity behind showrooming for a department store?`, opts:[R`Charging customers an entry fee`,R`Turning the business B2B by renting out shop floor and staff to digital brands`,R`Closing all stores and selling only online`,R`Lowering prices to Amazon level`], correct:1, exp:R`People want to test and belong; digital players cannot run shops → sell access to prime locations.`, area:'dfun'},
{q:R`Which is NOT one of the channel functions discussed?`, opts:[R`Market information`,R`Negotiation`,R`Product development`,R`Financing and risk taking`], correct:2, exp:R`Functions: information, promotion, negotiation, ordering, financing, risk, credit, payment, ownership transfer.`, area:'dfun'},
{q:R`Why does a carmaker’s CFO dislike bypassing dealers with an agency model?`, opts:[R`Dealers own the brand name`,R`The stock and its risk would stay on the OEM’s balance sheet instead of the dealers’`,R`Online sales are illegal for cars`,R`Dealers pay higher prices online`], correct:1, exp:R`OEMs push stock to dealers early in the year; dealers carry the assets and risk.`, area:'dfun'},
{q:R`Canyon selling bikes only online is a …`, opts:[R`zero-level channel`,R`one-level channel`,R`two-level channel`,R`vertical marketing system`], correct:0, exp:R`Direct from manufacturer to customer = zero-level.`, area:'dlev'},
{q:R`Why does Riese & Müller sell only through certified dealers with a workshop?`, opts:[R`To save margin`,R`Because the channel carries reputation and must deliver what a premium cargo bike promises`,R`Because the law requires it`,R`To avoid online sales taxes`], correct:1, exp:R`Like a communication channel, a distribution channel has a reputation.`, area:'dlev'},
{q:R`Giant uses importers or wholesalers per country mainly because …`, opts:[R`they adapt sales culturally to each market more cheaply than an own workforce`,R`wholesalers take no margin`,R`it allows direct online sales`,R`Giant has no own brand`], correct:0, exp:R`Two-level channel: margin is lost, but cultural adaptation per market is cheaper this way.`, area:'dlev'},
{q:R`Mars threatens to remove all its products from a retailer’s shelves unless prices change. Which power source?`, opts:[R`Reward power`,R`Expert power`,R`Coercive power`,R`Referent power`], correct:2, exp:R`Threat to withdraw a resource or end the relationship = coercive.`, area:'pow'},
{q:R`Jura staffs its corners in electronics stores with its own trained employees. Which power source does this build on?`, opts:[R`Expert power`,R`Legitimate power`,R`Coercive power`,R`Reward power`], correct:0, exp:R`Specific knowledge and training = expert power.`, area:'pow'},
{q:R`A dealer is seen as a good dealer because it carries Caterpillar. This is …`, opts:[R`reward power`,R`referent power`,R`legitimate power`,R`coercive power`], correct:1, exp:R`Attraction or reputation of the partner = referent (reference) power.`, area:'pow'},
{q:R`One Burger King franchisee breaks the hygiene rules and hurts all other franchisees. Which conflict type?`, opts:[R`Vertical`,R`Multichannel`,R`Horizontal`,R`Omnichannel`], correct:2, exp:R`Same level of the channel = horizontal.`, area:'conf'},
{q:R`A supermarket complains that a cash & carry wholesaler sells Haribo cheaper per kilo. A fitting solution is …`, opts:[R`stop supplying the supermarket`,R`different pack sizes or separate lines for different channel levels`,R`one price for all package sizes`,R`a franchise system`], correct:1, exp:R`Vertical conflict → differentiate packs or lines (Mammut premium vs lite, Boss Orange/Red).`, area:'conf'},
{q:R`What distinguishes multichannel from omnichannel distribution?`, opts:[R`Multichannel has only one channel`,R`Multichannel channels are separate businesses with own P&Ls and no shared data; omnichannel runs all channels on one CRM`,R`Omnichannel has no physical stores`,R`There is no difference`], correct:1, exp:R`Separate vs integrated; omnichannel is seamless and non-linear.`, area:'omni'},
{q:R`Why does Chanel still use a single channel for haute couture?`, opts:[R`To keep price level and exclusivity`,R`Because online shops are too expensive`,R`Because of legal requirements`,R`To reduce channel conflicts with wholesalers`], correct:0, exp:R`Only a few own boutiques, no online → exclusivity.`, area:'omni'}
]}
];

// Exam-format trainer: Henkel’s MC format — 5 statements, any number (1–5) can be correct, 2.5 points per question.
// self-written in the exam format shown on the admin slide; s = [statement, true/false, why]
const MK_MC = [
{lec:'mk-1', area:'def', q:R`Which statements about marketing and marketing management are correct?`, s:[
 [R`Marketing is about identifying and meeting human and social needs in a way that harmonizes with the goals of the organization.`, true, R`Word-for-word the course definition of marketing.`],
 [R`Marketing management is the art and science of choosing target markets and getting, keeping and growing customers.`, true, R`That is the definition of marketing management (through superior customer value).`],
 [R`Marketing management only takes place if both parties to an exchange actively plan their actions.`, false, R`At least ONE party thinking about the means of achieving desired responses is enough.`],
 [R`Marketing is about co-creating value among consumers and with business.`, true, R`Second bullet under the marketing definition.`],
 [R`According to the definition, marketing creates offerings that have value for customers only, not for society at large.`, false, R`The definition names customers, clients, partners and society at large.`]]},
{lec:'mk-1', area:'mkt', q:R`Which statements about the overall marketing framework are correct?`, s:[
 [R`Culture, politics and trends form the socio-cultural environment.`, true, R`Outer layer of the framework.`],
 [R`Competition is part of the socio-cultural environment.`, false, R`Competition belongs to the market environment (with market size and innovation cycles).`],
 [R`Heritage, vision and resources are characteristics of the company side.`, true, R`Company side: heritage, vision, resources, competencies, culture.`],
 [R`Routines and knowledge are characteristics of consumers.`, true, R`Consumer side: needs, lifestyle, motives, knowledge, routines.`],
 [R`Product, price, promotion and place link companies and consumers.`, true, R`The 4Ps sit between the two sides inside the market environment.`]]},
{lec:'mk-1', area:'mkt', q:R`Which statements about markets and the goal of marketing are correct?`, s:[
 [R`Traditionally, a market was a physical place where buyers and sellers gathered.`, true, R`The traditional meaning on the slide.`],
 [R`Today a market can be described as a collection of buyers and sellers who negotiate transactions involving a particular product or product class.`, true, R`The modern description.`],
 [R`The goal of marketing is to make the sales effort as large as possible.`, false, R`The goal is that the offering fits the customer so well that it sells itself.`],
 [R`Ideally, marketing should result in a customer who is ready to buy.`, true, R`Last sentence of the goal of marketing.`],
 [R`Ideas and information cannot be marketed, because they are intangible.`, false, R`Ideas and information are two of the ten marketable entities.`]]},
{lec:'mk-1', area:'mkt', q:R`Which of the following can be marketed according to the course?`, s:[
 [R`Experiences and events`, true, R`Both are on the "what is marketed" flower.`],
 [R`Persons and places`, true, R`Both are on the list.`],
 [R`Properties and organizations`, true, R`Both are on the list.`],
 [R`Information and ideas`, true, R`Both are on the list.`],
 [R`Goods and services`, true, R`The classic pair — all ten entities are marketable, so all five statements are correct.`]]},
{lec:'mk-1', area:'cc', q:R`Which statements about Amazon’s customer-centricity principles are correct?`, s:[
 [R`"Listen" means that the firm’s perspective counts more than the customer’s perception.`, false, R`The reverse: customer perception counts, not the firm’s perspective.`],
 [R`"Invent" means observing the customer to see what they cannot articulate.`, true, R`Invent — observing difficulties in search, buy and use gives innovation potential.`],
 [R`Observing difficulties along search, buy and use links to the customer journey.`, true, R`That is the "Invent" arrow.`],
 [R`"Personalize" means making the customer feel home and understood.`, true, R`Leads to customer experience.`],
 [R`In "Personalize", identification and routine behaviour determine trust.`, true, R`Second arrow of Personalize.`]]},
{lec:'mk-1', area:'cc', q:R`Which statements about customer-centric organizations are correct?`, s:[
 [R`They are market driven and customer focused.`, true, R`First two customer-centric traits.`],
 [R`They are process oriented.`, false, R`Process oriented is product-centric; customer-centric is outcome oriented.`],
 [R`They aim at making competitors irrelevant instead of reacting to them.`, true, R`Reacting to competitors is product-centric.`],
 [R`They are price driven and hierarchical.`, false, R`Both are product-centric traits; customer-centric is value driven and team based.`],
 [R`They put the customer in the middle, surrounded by products and services.`, true, R`The right-hand picture on the slide.`]]},
{lec:'mk-1', area:'cc', q:R`Which statements about the "legends" quotes are correct?`, s:[
 [R`Jeff Bezos: "Start with the customer and work backwards."`, true, R`Bezos, Amazon’s working-backwards idea.`],
 [R`Steve Jobs: "Get closer than ever to your customers."`, true, R`Jobs’ quote continues: so close that you can tell them what they need before they realize it.`],
 [R`Both quotes argue that firms should wait until customers state their needs clearly.`, false, R`Jobs explicitly says: tell them what they need before they realize it themselves.`],
 [R`Both quotes express customer centricity.`, true, R`That is why they are on the customer-centricity slide.`],
 [R`Steve Jobs: "Start with the customer and work backwards."`, false, R`That is Bezos.`]]},
{lec:'mk-1', area:'val', q:R`Which statements about emotional connection and customer value are correct?`, s:[
 [R`Highly satisfied customers who are not fully connected form the baseline.`, true, R`Customer value is measured relative to them.`],
 [R`Customers who are not emotionally connected have 18 % lower customer value than the baseline.`, true, R`−18 %.`],
 [R`Fully connected customers have 52 % higher customer value than highly satisfied customers.`, true, R`+52 %.`],
 [R`Satisfaction alone already guarantees the highest customer value.`, false, R`Satisfaction is only the baseline; full emotional connection adds +52 %.`],
 [R`Perceiving brand differentiation while satisfied but not fully connected brings +31 %.`, false, R`It is +13 %.`]]},
{lec:'mk-1', area:'val', q:R`Which statements about customer value and the value proposition are correct?`, s:[
 [R`Customer value compares the benefits and costs of an offering with those of the perceived alternatives.`, true, R`It is a relative evaluation.`],
 [R`Total customer benefit stems from product, service and image.`, true, R`Definition of total customer benefit.`],
 [R`Total customer cost includes only the monetary price.`, false, R`Functional, psychological and monetary costs.`],
 [R`Total customer cost covers evaluating, obtaining, using and disposing of the offering.`, true, R`The whole life cycle from the customer’s view.`],
 [R`The value proposition is the whole cluster of benefits the company promises to deliver.`, true, R`Last sentence on the slide.`]]},
{lec:'mk-1', area:'case', q:R`Which statements explain why the 6PM approach works on customers?`, s:[
 [R`Limited drops use scarcity: rare products are perceived as more valuable and create fear of missing out.`, true, R`Scarcity principle.`],
 [R`Customers buy 6PM mainly because it is the cheapest option in its category.`, false, R`They buy image and belonging — the value comes from emotional and social benefits, not a low price.`],
 [R`Keeping the price stable despite the shortage protects trust, because fans do not feel exploited.`, true, R`Fairness keeps the emotional connection intact.`],
 [R`Organic content and an unplanned celebrity moment feel more authentic than paid ads, so they convince more.`, true, R`Social proof and authenticity.`],
 [R`Wearing the brand lets customers signal belonging to a group.`, true, R`Identity and belonging — part of the total customer benefit (image).`]]},
{lec:'mk-1', area:'case', q:R`Which statements about the principles behind the lecture cases are correct?`, s:[
 [R`6PM’s fans are an example of "fully connected" customers, who bring the highest customer value.`, true, R`Emotional connection, not satisfaction alone (+52 %).`],
 [R`Pop-ups and festivals deepen the bond because customers experience the brand and each other.`, true, R`Experiences and touchpoints build emotional connection.`],
 [R`Raising the price during the hype would have been the most customer-centric move.`, false, R`It would exploit the fans and damage trust; customer-centric firms are value driven, not price driven.`],
 [R`The Deutsche Bank Park case suggests increasing revenue only by raising ticket prices for matches.`, false, R`It serves new customer groups (concerts, business events, tech partners) with the same asset.`],
 [R`The stadium case shows a firm defining its business by customer needs instead of by its product.`, true, R`Start with the customer and work backwards.`]]},
{lec:'mk-2', area:'need', q:R`Which statements about customer needs are correct?`, s:[
 [R`Needs are basic human requirements such as air, food, water, clothing and shelter.`, true, R`Definition on the needs slide.`],
 [R`Psychological needs arise from states of tension such as the need for recognition, esteem or belonging.`, true, R`Biological needs: hunger, thirst, discomfort; psychological: recognition, esteem, belonging.`],
 [R`Needs become wants when they are directed to specific objects that might satisfy the need.`, true, R`Needs → wants via specific objects.`],
 [R`Good marketers create new needs that did not exist before.`, false, R`Marketers do not create needs — needs preexist marketers.`],
 [R`A creative marketer is a proactive, market-driving firm rather than only a market-driven one.`, true, R`Creative marketers discover solutions customers did not ask for.`]]},
{lec:'mk-2', area:'need', q:R`Which statements about the needs continuum and Maslow are correct?`, s:[
 [R`Demands are rational and explicit, wishes emotional and unconscious.`, true, R`The two ends of the continuum.`],
 [R`A purchase is driven either by rational or by emotional needs, never by both.`, false, R`The slide speaks of a combination of needs.`],
 [R`Maslow’s hierarchy has five levels.`, true, R`Physiological, safety, belonging and love, esteem, self-actualization.`],
 [R`Esteem is the highest level of Maslow’s hierarchy.`, false, R`Self-actualization is the top level; esteem is directly below.`],
 [R`An anticipative marketer looks ahead to needs customers may have in the near future.`, true, R`Responsive = stated need; anticipative = near-future needs; creative = unasked solutions.`]]},
{lec:'mk-2', area:'mot', q:R`Which statements about customer motivation are correct?`, s:[
 [R`A need becomes a motivation when it is aroused to a sufficient level of intensity to drive us to act.`, true, R`Definition of motivation.`],
 [R`Motivation has a direction and an intensity.`, true, R`Direction: one goal over another; intensity: more or less vigor.`],
 [R`Motivation researchers typically survey thousands of consumers with standardized questionnaires.`, false, R`They run in-depth interviews with a few dozen consumers.`],
 [R`Word association and picture interpretation are projective techniques.`, true, R`Also sentence completion and role play.`],
 [R`In laddering, the deepest motive is usually the technical product feature.`, false, R`The feature is the surface; the deepest motive in the example is "it’s about winning".`]]},
{lec:'mk-2', area:'ben', q:R`Which statements about customer benefits are correct?`, s:[
 [R`Core benefits result from satisfying the basic customer needs with regard to a specific offer.`, true, R`Elbphilharmonie: excellent musical productions.`],
 [R`For additional benefits, the customer always expects the need to be met.`, false, R`A need exists, but the customer does not necessarily expect it to be met.`],
 [R`Coupons and loyalty programs can provide additional benefits.`, true, R`Promotional tools are named on the slide.`],
 [R`The pride of owning a luxury car is a social benefit.`, false, R`Pride is an emotional benefit; social = e.g. invitation to exclusive brand events.`],
 [R`A more fuel-efficient car thanks to lighter materials offers an economic benefit.`, true, R`Economic benefits result from product features.`]]},
{lec:'mk-2', area:'sat', q:R`Which statements about satisfaction and the KANO model are correct?`, s:[
 [R`Satisfaction results from comparing perceived performance with expectations.`, true, R`Definition.`],
 [R`Exceeding expectations has a stronger effect on satisfaction than failing them.`, false, R`The reverse: failing expectations has a disproportionately stronger negative effect.`],
 [R`Fulfilled must-be’s lead to delight.`, false, R`Fulfilled must-be’s only bring the customer to neutral.`],
 [R`For satisfiers, satisfaction rises with the degree of fulfilment.`, true, R`Performance factors: more is better.`],
 [R`Delighters belong to the additional benefits.`, true, R`Excitement factors = additional benefits; basic and performance factors = core benefits.`]]},
{lec:'mk-2', area:'ins', q:R`Which statements about customer insights are correct?`, s:[
 [R`A customer insight provides new knowledge about expectations, needs, decision processes and motivations.`, true, R`Its dynamic network before, during and after purchase.`],
 [R`A good customer insight is novel and not obvious.`, true, R`WOW moment — otherwise it would not be called an insight.`],
 [R`A good customer insight only covers the moment of purchase.`, false, R`Complete and enduring: pre-sales, sales and aftersales phase.`],
 [R`A good insight captures, if possible, the strongest needs and motivations of consumers.`, true, R`To justify the "why" of a purchase.`],
 [R`A customer insight changes how customers think and act.`, true, R`It shifts thinking and action.`]]},
{lec:'mk-2', area:'b2b', q:R`Which statements about B2C and B2B markets are correct?`, s:[
 [R`B2C marketing is often called consumer goods marketing.`, true, R`B2B = industrial goods marketing.`],
 [R`B2B covers organizations that acquire goods used to produce products or services sold, rented or supplied to others.`, true, R`Definition of B2B.`],
 [R`B2B markets typically have more but smaller buyers than B2C markets.`, false, R`Fewer but larger buyers.`],
 [R`Demand in B2B markets is derived from consumer demand.`, true, R`Derived demand.`],
 [R`B2B purchasing is typically done by trained, professional buyers.`, true, R`Professional purchasing.`]]},
{lec:'mk-2', area:'bc', q:R`Which statements about the buying center and relationship marketing are correct?`, s:[
 [R`Members of the buying center share some common goals and the risks arising from the decision.`, true, R`Definition of the buying center.`],
 [R`The gatekeeper is the person who finally signs the purchase.`, false, R`The gatekeeper controls the information flow (the owner’s PA in the example).`],
 [R`Initiator, user, influencer, decider, buyer and gatekeeper are the six roles.`, true, R`All six.`],
 [R`Relationship marketing aims at mutually satisfying long-term relationships with key constituents.`, true, R`To earn and retain their business.`],
 [R`The ultimate outcome of relationship marketing is the marketing network.`, true, R`Company + supporting stakeholders.`]]},
{lec:'mk-2', area:'bc', q:R`Which statements about B2B2C and the marketing network are correct?`, s:[
 [R`A B2B2C firm earns revenue directly from organizational customers.`, true, R`And also manages the experience of their customers.`],
 [R`A B2B2C firm ignores the end customer, because it is not paid by them.`, false, R`It manages the customer’s customer experience — marketing to B2B and B2C simultaneously.`],
 [R`Public institutions and media/lobbyists belong to the stakeholders of the marketing network.`, true, R`Next to buyers, companies and sales partners.`],
 [R`A new payment system only succeeds if every side of its network joins — users and merchants.`, true, R`The principle of the PayPal discussion.`],
 [R`Relationship marketing focuses on single transactions with as many new buyers as possible.`, false, R`It is about long-term relationships.`]]},
{lec:'mk-3', area:'spp', q:R`Which statements about the strategic planning process are correct?`, s:[
 [R`The status-quo analysis combines internal and external analysis.`, true, R`Against the background of the business mission.`],
 [R`Marketing planning consists of goal, strategy and program formulation.`, true, R`In this order.`],
 [R`Marketing implementation works with product, price, promotion and place.`, true, R`The 4Ps.`],
 [R`Marketing controlling is the first step of the process.`, false, R`Controlling comes last and feeds back into earlier steps.`],
 [R`The product life cycle is an instrument of the internal analysis only.`, false, R`It belongs to the mixed perspective (with the BCG Matrix).`]]},
{lec:'mk-3', area:'int', q:R`Which statements about resources, competencies and capabilities are correct?`, s:[
 [R`Resources are tangible and intangible assets a company possesses.`, true, R`Physical, financial, human and intangible.`],
 [R`A brand name is an intangible resource.`, true, R`Like patents and relationships.`],
 [R`Competencies are deeply embedded skills that can lead to a competitive advantage.`, true, R`Definition of competencies.`],
 [R`Capabilities describe what a company owns, not how it uses it.`, false, R`Capabilities are the "how": deploying and coordinating resources and competencies.`],
 [R`The Resource-Based View explains why firms with unique resources and capabilities outperform others.`, true, R`Lessons-learned slide.`]]},
{lec:'mk-3', area:'ext', q:R`Which statements about trends and PESTEL are correct?`, s:[
 [R`A trend is a direction or sequence of events with momentum and durability.`, true, R`Definition.`],
 [R`A fad is more predictable than a trend.`, false, R`A trend is more predictable than a fad.`],
 [R`LOHAS is an example of a sociological trend.`, true, R`Lifestyle of health and sustainability.`],
 [R`PESTEL scans the macro environment of the company.`, true, R`Six factors.`],
 [R`The "S" in PESTEL stands for suppliers.`, false, R`Socio-demographic environment; suppliers are one of Porter’s forces.`]]},
{lec:'mk-3', area:'five', q:R`Which statements about Porter’s Five Forces are correct?`, s:[
 [R`The Five Forces analyze competition from an industry perspective.`, true, R`Definition on the slide.`],
 [R`The threat of substitutes is one of the five forces.`, true, R`With new entrants, supplier and buyer power, rivalry.`],
 [R`The bargaining power of buyers is one of the five forces.`, true, R`Buyers sit on the right of the diagram.`],
 [R`Political and legal factors are two of the five forces.`, false, R`They belong to PESTEL.`],
 [R`Existing competition sits in the center of the framework.`, true, R`Surrounded by the four other forces.`]]},
{lec:'mk-3', area:'plc', q:R`Which statements about the product life cycle are correct?`, s:[
 [R`In the introduction stage, profits are negative or low.`, true, R`High costs and high promotion.`],
 [R`In the introduction stage, prices tend to be lower because firms want to attract the mass market.`, false, R`Prices tend to be higher because costs are high; focus on buyers most ready to buy.`],
 [R`In the growth stage, profits increase as marketing costs are spread over a larger volume.`, true, R`Rapid climb in sales.`],
 [R`Lowering prices to attract the next layer of price-sensitive buyers is a growth strategy.`, true, R`One of the three strategies to sustain rapid growth.`],
 [R`In the decline stage, overcapacity and price cutting lead to profit erosion.`, true, R`Products are withdrawn or ranges reduced.`]]},
{lec:'mk-3', area:'bcg', q:R`Which statements about the BCG Matrix are correct?`, s:[
 [R`The BCG Matrix uses relative market share and market growth.`, true, R`x: relative market share; y: market growth.`],
 [R`Cash cows have a high relative market share in a low-growth market.`, true, R`Norm strategy: maintain.`],
 [R`Stars should be liquidated.`, false, R`Stars: maintain/strengthen; poor dogs: liquidate.`],
 [R`Question marks have high market growth but low relative market share.`, true, R`Norm strategy: strengthen or liquidate.`],
 [R`Cross-financing means that cash cows finance question marks.`, true, R`So that question marks can become stars.`]]},
{lec:'mk-3', area:'plc', q:R`Lecture example question (Henkel, 4 Nov): Regarding the stages of the product life cycle, which statements are correct?`, s:[
 [R`In the introduction stage, profits are usually positive but low.`, false, R`Profits are negative at first, because development and launch costs come before sales.`],
 [R`In the growth stage, investments in product quality improvements are cut to allow for higher investments in marketing communications.`, false, R`Either-or statement. Sometimes the product needs quality, sometimes marketing, not one at the cost of the other.`],
 [R`During maturity, growth slows and new competitive forces emerge.`, true, R`Henkel: true.`],
 [R`In the decline stage, sales and profits decline; in consequence, firms reduce marketing budgets and reduce prices further.`, false, R`Too general. Strong or luxury brands avoid price cuts and sometimes marketing budgets must rise. Henkel wanted to double-check this one with the TA, so it is the uncertain statement.`],
 [R`In multi-product companies, the profits from products in the decline phase should always be used to increase the marketing budgets of products in the maturity phase.`, false, R`"Always" is always wrong. The money should go where the portfolio needs it, usually to products in development or introduction.`]]},
{lec:'mk-3', area:'bcg', q:R`Lecture example question (Henkel, 4 Nov): Regarding the BCG Matrix, which statements are correct?`, s:[
 [R`Poor dogs are high-growth products with a high market share that should always receive the largest investment budget.`, false, R`Poor dogs have low growth and low share. Henkel: "completely stupid".`],
 [R`Stars operate in high-growth markets and have a high relative market share.`, true, R`Correct.`],
 [R`Cash cows have a high relative market share in low-growth markets and generate cash for other units.`, true, R`Correct.`],
 [R`Question marks have a low relative market share in high-growth markets and require careful investment decisions.`, true, R`Correct.`],
 [R`The BCG Matrix uses relative market share and market growth to classify products or business units.`, true, R`Correct.`]]},
{lec:'mk-4', area:'port', q:R`Lecture example question (Henkel, Lecture 04 slides): When it comes to changes in the product portfolio, which of the following statements are correct?`, s:[
 [R`Product mix width refers to the number of different product lines.`, true, R`Width = number of product lines.`],
 [R`Product mix length refers to the number of products within one line.`, true, R`Length = total number of items or brands within a line.`],
 [R`Product line depth describes the number of variants of a product within a line.`, true, R`Depth = variants per product or brand.`],
 [R`Consistency refers to whether all variants of a product line can be sold at a comparable price level.`, false, R`Consistency = how closely related the lines are in end use, production requirements and distribution channels — not price.`],
 [R`A company’s product mix width must always be equal to its depth.`, false, R`"Always" + an invented rule: the dimensions are independent.`]]},
{lec:'mk-4', area:'mod', q:R`Lecture example question (Henkel, Lecture 04 slides): Which of the following statements correctly describe product modification?`, s:[
 [R`Feature improvement changes the core function of the product by moving it into a completely new product category.`, false, R`Modification never changes the core function; feature improvement adds size, materials, accessories.`],
 [R`Product modification means changing the characteristics and properties of an existing product without changing its core function.`, true, R`Definition from the slide.`],
 [R`Style improvement primarily adds technical accessories that increase the product’s safety or convenience.`, false, R`That is feature improvement; style improvement raises aesthetic appeal.`],
 [R`Quality improvement aims to increase functional performance, for example through a "new and improved" product version.`, true, R`Definition of quality improvement.`],
 [R`Product modification always requires replacing the existing product with a completely new product line.`, false, R`"Always" + new line contradicts "existing product".`]]},
{lec:'mk-5', area:'svc', q:R`Lecture example question (Henkel, Lecture 05 slides): Which of the following statements correctly describe the typical characteristics of services?`, s:[
 [R`Perishability: Services cannot be stored for later sale or use.`, true, R`Correct definition.`],
 [R`Intangibility: Services cannot be seen, tasted, or touched before they are bought.`, true, R`Correct definition.`],
 [R`Variability: Service quality is largely independent of the person or brand who or that provides it.`, false, R`The opposite: quality depends on who provides it and when, where, to whom.`],
 [R`Inseparability: Production and consumption of services typically occur simultaneously.`, true, R`Correct definition.`],
 [R`Since empathy is a human trait and cannot be learned, it should not be considered as a distinct dimension of service quality.`, false, R`Empathy is one of the five components of service quality.`]]},
{lec:'mk-5', area:'sq', q:R`Lecture example question (Henkel, Lecture 05 slides): In relation to service quality and its components, which of the following statements are correct?`, s:[
 [R`Assurance refers to the knowledge and courtesy of employees and their ability to convey trust and confidence during the service encounter.`, true, R`Correct definition of assurance.`],
 [R`Tangibles mainly describe the emotional warmth of employees and their ability to make customers feel personally understood.`, false, R`That is empathy; tangibles = physical appearance of facilities, equipment, staff.`],
 [R`Because customers’ expectations can change over time, the same service performance may be evaluated differently at different points in time.`, true, R`Core premise of service quality on the slide.`],
 [R`Reliability refers to the ability to perform the promised service dependably and accurately, for example by providing the service at the promised time and keeping error-free records.`, true, R`Correct definition of reliability.`],
 [R`Responsiveness refers to the physical appearance of facilities, equipment, and employees during the service encounter.`, false, R`That is tangibles; responsiveness = willingness to help and prompt service.`]]},
{lec:'mk-5', area:'dig', q:R`Lecture example question (Henkel, Lecture 05 slides): Referring to new service realities in the digital age, which of the following statements are correct?`, s:[
 [R`Technology in services only improves productivity but does not influence service quality.`, false, R`Technology raises both quality and productivity.`],
 [R`Customer empowerment means that customers usually enter service encounters with higher and more sophisticated prior knowledge.`, true, R`Definition from the slide.`],
 [R`Customer co-production reduces the probability of service errors because customers always act professionally.`, false, R`The opposite: errors become more likely; "always" is a warning sign.`],
 [R`In the digital age, service workers become irrelevant because technology fully replaces the human service role.`, false, R`Their role and relevance change; they are not replaced.`],
 [R`Employee satisfaction is less relevant in digital services because customer experience is mainly shaped by technology.`, false, R`Satisfying employees as well as customers is one of the four new realities.`]]},
{lec:'mk-4', area:'ans', q:R`Which statements about the Ansoff Matrix and product improvement are correct?`, s:[
 [R`Selling an existing product to a new customer group is market development.`, true, R`Current product, new customers.`],
 [R`Diversification combines new products with current customers.`, false, R`That is product development; diversification = new products, new customers.`],
 [R`Market penetration means selling current products to current customers.`, true, R`Correct.`],
 [R`Social added value arises from prestige through ownership, e.g. access to a community.`, true, R`Correct.`],
 [R`Economic added value means positive feelings during use, such as the joy of driving.`, false, R`That is emotional added value; economic = monetary benefit.`]]},
{lec:'mk-4', area:'mod', q:R`Which statements about product lines, diversification and bundling are correct?`, s:[
 [R`Line filling adds items within the existing range, e.g. to keep competitors out.`, true, R`Correct.`],
 [R`An up-market stretch extends the line beyond its current range towards premium.`, true, R`Line stretching goes beyond the range, up or down.`],
 [R`Concentric diversification adds complementary products that always need the same manufacturing process.`, false, R`Concentric = technological or marketing synergies; complementary products = horizontal, possibly a different process.`],
 [R`With pure bundling, the products can only be bought as a bundle.`, true, R`Correct (Microsoft 365).`],
 [R`With mixed bundling, products can only be bought individually.`, false, R`Mixed bundling = individually or as a bundle.`]]},
{lec:'mk-5', area:'sdiff', q:R`Which statements about differentiation through services are correct?`, s:[
 [R`Ease of ordering covers all aspects of the customer’s interaction when placing an order.`, true, R`Correct.`],
 [R`Installation, training and consulting are a true selling point for technology novices and complex products.`, true, R`Correct.`],
 [R`Maintenance and repair are irrelevant in business-to-business settings.`, false, R`They matter especially in B2B.`],
 [R`Returns are unavoidable, especially for online purchases, so handling them can differentiate a firm.`, true, R`Correct.`],
 [R`Speed and timing of delivery refer only to how fast the product arrives, not to accuracy or care.`, false, R`Speed, accuracy and care of the delivery process.`]]},
{lec:'mk-6', area:'proc', q:R`Which statements about modern marketing communication are correct?`, s:[
 [R`Digital communication follows a pinball rather than a bowling logic.`, true, R`Interactive and multi-directional.`],
 [R`Fragmentation means that the number of media offered and used by a single user grows.`, true, R`Correct.`],
 [R`In the traditional communication process, noise only affects the feedback loop.`, false, R`Noise disturbs the whole process between sender and receiver.`],
 [R`Democratization and individualization are characteristics of modern communication.`, true, R`Together with fragmentation and interaction.`],
 [R`In the pinball logic the company fully controls how its message travels.`, false, R`Customers and other customers react and redirect it.`]]},
{lec:'mk-6', area:'camp', q:R`Which statements about the steps of a communication campaign are correct?`, s:[
 [R`The campaign starts with identifying the audience.`, true, R`Step 1.`],
 [R`Determining the budget comes before crafting the message.`, false, R`Message (step 3) comes before budget (step 4).`],
 [R`Need for cognition describes how much detail the target group wants.`, true, R`Part of analysing media use.`],
 [R`Building brand awareness means fostering the customer’s ability to recognize or recall the brand.`, true, R`Correct.`],
 [R`Managing integrated communication is the final step.`, true, R`Step 7.`]]},
{lec:'mk-6', area:'msg', q:R`Which statements about message and budget are correct?`, s:[
 [R`Creative strategy answers the question "what to say?".`, false, R`Message strategy = what; creative strategy = how; message source = who.`],
 [R`Credibility, trustworthiness and brand congruity are criteria for the message source.`, true, R`Also reach and popularity.`],
 [R`With the percentage-of-sales method, the budget is set by available funds rather than market opportunities.`, true, R`Correct weakness.`],
 [R`The affordable method treats communication as a strategic investment.`, false, R`It does NOT see communication as a strategic investment.`],
 [R`Competitive parity aims for a share of voice equal to competitors.`, true, R`Correct.`]]},
{lec:'mk-6', area:'media', q:R`Which statements about media planning and measurement are correct?`, s:[
 [R`Reach matters most for new products and broad or undefined target markets.`, true, R`Correct.`],
 [R`Frequency describes the quality or effectiveness of each exposure.`, false, R`That is impact; frequency = how often within a period.`],
 [R`CPM is calculated as the cost of the medium divided by its reach, times 1,000.`, true, R`CPM = c / C × 1,000.`],
 [R`Recognition and recall of an ad are demand-side measures.`, true, R`Demand side measures the effect.`],
 [R`Influencer marketing bridges digital mass reach and trusted peer recommendation.`, true, R`Hybrid channel on the slide.`]]},
{lec:'mk-6', area:'imc', q:R`Which statements about integrated marketing communications are correct?`, s:[
 [R`Vertical integration aligns communication objectives with the higher-level marketing strategy.`, true, R`Correct.`],
 [R`External integration means sharing information between internal departments.`, false, R`That is internal integration; external = with collaborators.`],
 [R`Horizontal integration coordinates all relevant marketing actions with the communication campaign.`, true, R`Correct.`],
 [R`Managing integrated communication is the seventh and last step of developing a communication campaign.`, true, R`Audience → objectives → message → budget → media → measuring → managing IMC.`],
 [R`IMC ensures that communication activities are consistent with one another and reach the goals effectively and cost-efficiently.`, true, R`Definition on the IMC slide.`]]},
{lec:'mk-7', area:'dfun', q:R`Which statements about the role and functions of distribution are correct?`, s:[
 [R`Distribution channels are sets of interdependent organizations.`, true, R`Henkel’s first takeaway.`],
 [R`Besides physical movement, channels provide market information, promotion, negotiation, financing and risk taking.`, true, R`Takeaway slide.`],
 [R`A shop that sells little directly can still be profitable through signalling, testing, experience and ordering (Nespresso).`, true, R`The opening case.`],
 [R`Showrooming is purely a threat and offers no opportunity to physical retailers.`, false, R`It shows people want to test; retailers can sell shop floor access B2B.`],
 [R`Because each channel is its own organization, customers expect each channel to offer a completely different experience.`, false, R`Customers see channels as interdependent and expect consistency.`]]},
{lec:'mk-7', area:'dlev', q:R`Which statements about channel levels are correct?`, s:[
 [R`A manufacturer that sells only through its own online shop uses a zero-level channel.`, true, R`Canyon.`],
 [R`A zero-level channel solves testing, assembly and service automatically.`, false, R`Canyon’s downside: no test rides, assembly, no service network.`],
 [R`In a two-level channel, a wholesaler and a retailer stand between manufacturer and customer.`, true, R`Giant’s country importers plus dealers.`],
 [R`A distribution channel can carry a reputation, which is why premium brands select certified dealers.`, true, R`Riese & Müller.`],
 [R`In B2B, a firm may use a wholesaler for standard products and its own sales reps for innovative products at the same time.`, true, R`Roche: parallel channels.`]]},
{lec:'mk-7', area:'pow', q:R`Which statements about sources of channel power are correct?`, s:[
 [R`Coercive power means threatening to withdraw resources or end the relationship if intermediaries do not cooperate.`, true, R`Definition (Mars example).`],
 [R`Offering intermediaries extra commission for selling well is an example of reward power.`, true, R`Thermomix.`],
 [R`Expert power rests on specific knowledge, e.g. a brand training the staff who sell its machines.`, true, R`Jura.`],
 [R`Referent power rests on legal authorization to sell a product.`, false, R`That is legitimate (legal) power; referent = attractiveness/reputation.`],
 [R`A retailer should build its business on a single strong supplier to maximise bargaining power.`, false, R`Spread risk across suppliers to avoid being exposed to coercive power.`]]},
{lec:'mk-7', area:'conf', q:R`Which statements about channel conflicts are correct?`, s:[
 [R`A conflict between franchisees on the same level is a horizontal conflict.`, true, R`Burger King.`],
 [R`A conflict between a wholesaler and a retailer about prices is a vertical conflict.`, true, R`Haribo cash & carry vs supermarket.`],
 [R`Separate lines or pack sizes for different dealers can reduce vertical conflicts.`, true, R`Mammut lite vs premium, Boss lines.`],
 [R`Multichannel conflicts arise because separately run channels compete for the same customer with different prices.`, true, R`Separate online/offline companies.`],
 [R`Channel conflicts only occur between manufacturer and retailer.`, false, R`Absolute wording; horizontal and multichannel conflicts exist too.`]]},
{lec:'mk-7', area:'omni', q:R`Which statements about single-, multi- and omnichannel distribution are correct?`, s:[
 [R`In multichannel distribution, channels are separate businesses with separate P&Ls and KPIs.`, true, R`Henkel: keep that in mind.`],
 [R`Omnichannel distribution runs all channels on one shared CRM system.`, true, R`Seamless switching.`],
 [R`In omnichannel, the customer journey runs linearly from online to offline.`, false, R`It is non-linear: customers step forward and back.`],
 [R`Single-channel distribution can still make sense to protect exclusivity.`, true, R`Chanel haute couture.`],
 [R`Omnichannel requires no particular technology, only more shops.`, false, R`Service promise → cloud technology → trading rules.`]]}
];

// open-answer part (15 points): self-written practice questions with model answers
const MK_OPEN = [
{lec:'mk-1', q:R`Define marketing and marketing management and explain the difference.`, a:R`Marketing identifies and meets human and social needs in a way that harmonizes with the organization’s goals; it covers creating, communicating, delivering and exchanging offerings with value for customers, clients, partners and society, and co-creating value. Marketing management is the managerial side: it takes place when at least one party to a potential exchange thinks about how to achieve desired responses from others — the art and science of choosing target markets and getting, keeping and growing customers through superior customer value. Marketing is the overall activity; marketing management is the deliberate planning and steering of it.`},
{lec:'mk-1', q:R`Contrast a product-centric with a customer-centric organization (at least four characteristics each).`, a:R`Product-centric: the product sits in the middle; product driven, mass-market focused, process oriented, reacting to competitors, price driven, hierarchical. Customer-centric: the customer sits in the middle with products and services around him; market driven, customer focused, outcome oriented, making competitors irrelevant, value driven, teamwork.`},
{lec:'mk-1', q:R`Explain Amazon’s three customer-centricity principles.`, a:R`Listen: you cannot run a business without listening to customers — the customer’s perception counts, not the firm’s perspective (customer focus). Invent: observe customers to see what they cannot articulate; difficulties in search, buy and use show innovation potential along the customer journey. Personalize: make the customer feel home and understood; identification and routine behaviour build trust (customer experience).`},
{lec:'mk-1', q:R`Why is customer satisfaction not enough? Use the evidence from the lecture.`, a:R`In a study of more than 400 firms in 30 categories, highly satisfied but not fully connected customers are only the baseline. Customers who are not emotionally connected are worth 18 % less; those who are satisfied and perceive brand differentiation but are not fully connected 13 % more; fully connected customers (satisfied and perceiving differentiation) 52 % more. Emotional connection, not satisfaction alone, drives customer value.`},
{lec:'mk-1', q:R`Define customer value and explain two ways a firm can increase it.`, a:R`Customer value is the difference between the customer’s evaluation of all benefits and costs of an offering and the evaluation of the perceived alternatives. Total customer benefit comes from product, service and image; total customer cost is functional, psychological and monetary costs of evaluating, obtaining, using and disposing. A firm raises value by increasing benefits (e.g. better service, stronger image) and/or reducing costs (e.g. lower price, less effort or risk when buying and using).`},
{lec:'mk-1', q:R`Explain with the 4Ps why the 6PM approach works on customers. Focus on the underlying principles.`, a:R`Product: limited drops use scarcity — rare goods feel more valuable and create fear of missing out; customers buy identity and belonging, not just clothing. Promotion: organic content and real moments (e.g. a star unintentionally showing the logo) work through social proof and authenticity, which people trust more than ads. Place: pop-ups and events create experiences and a community feeling. Price: stable despite the shortage, which signals fairness and protects trust. Together this builds a fully connected customer, the group with the highest customer value.`},
{lec:'mk-1', q:R`What principle does the Deutsche Bank Park case illustrate, and how could you apply it to another business?`, a:R`Define the business by the needs of customer groups, not by the product: the stadium serves fans (concerts), companies (business events) and tech firms (test field) with the same asset. Application, e.g. a café: also a co-working space in the morning, an event location in the evening. That is customer centricity — start with the customer and work backwards.`},
{lec:'mk-2', q:R`Explain how needs, motivation and benefits together create customer value. Use the laddering example.`, a:R`Needs are the gap between the experienced and the desired state ("recognizing gaps"); they become wants when directed at specific objects. A need becomes a motivation when it is aroused strongly enough to drive action ("driving activity"), with a direction and an intensity. Benefits are what the offering contributes to close the gap ("contributing solutions"): functional, economic, process-related, emotional, social. Customer value arises where all three meet. Laddering shows that the surface feature (ZoomX technology) leads via better cushioning and more training to being as fit as one’s peers — "it’s about winning". The deepest motive is emotional and social, so that is what the offer must address.`},
{lec:'mk-2', q:R`Describe the KANO model and link it to core and additional benefits.`, a:R`KANO plots satisfaction (dissatisfaction → neutral → delight) against the fulfilment of a characteristic. Must-be’s (basic factors) cause strong dissatisfaction when missing but only neutrality when fulfilled. Satisfiers (performance factors) raise satisfaction in proportion to fulfilment. Delighters (excitement factors) are unexpected; missing them causes no complaint, offering them creates delight. Basic and performance factors belong to the core benefits, excitement factors to the additional benefits. Because of the asymmetric effect, firms must first secure the must-be’s, since failing expectations hurts more than exceeding them helps.`},
{lec:'mk-2', q:R`What is a customer insight and what makes it a good one?`, a:R`A customer insight is new knowledge about a customer’s dynamic network of expectations and needs, conscious and unconscious decision processes and underlying motivations before, during and after purchase; it shifts how people think and act. A good insight is (1) novel and not obvious (WOW moment), (2) explanatory and human-contextualized — it captures what moves people and so forms the basis for a value proposition — and (3) complete and enduring, covering pre-sales, sales and aftersales and holding over time. It should address the strongest needs and motivations and explain the "why" of a purchase.`},
{lec:'mk-2', q:R`Name the characteristics of B2B marketing and describe the six roles of the buying center with an example.`, a:R`B2B: fewer but larger buyers, close supplier–customer relationships, professional purchasing, multiple buying influence, derived, inelastic and fluctuating demand, geographically concentrated buyers, direct purchasing. The buying center comprises everyone in the purchase decision who shares its goals and risks. Truck purchase: initiator (department of transport), user (truck driver), influencer (other drivers), decider (fleet manager), buyer (owner of the logistics firm), gatekeeper (owner’s PA, controls information).`},
{lec:'mk-2', q:R`A start-up wants to launch a PayPal alternative in Germany. Which stakeholders must it consider, and why?`, a:R`Using the marketing network of relationship marketing: buyers (consumers must trust and adopt it), companies (merchants must integrate it at checkout), sales partners (banks and payment providers), public institutions (regulators for payments and data protection) and media/lobbyists (public trust, political support). A payment system is B2B2C: revenue comes from merchants, but the end-user experience decides adoption. It only works if every side joins, so long-term, mutually satisfying relationships with all of them are needed.`},
{lec:'mk-3', q:R`Describe the strategic planning process and assign the analysis tools of the lecture to it.`, a:R`Status-quo analysis against the business mission: internal analysis (resources, competencies, capabilities; Resource-Based View) and external analysis (trends, PESTEL; Five Forces for the industry), plus the mixed perspective (product life cycle, BCG Matrix). Then marketing planning: goal formulation → strategy formulation → program formulation. Then implementation via product, price, promotion, place, and finally marketing controlling, which feeds back into the earlier steps.`},
{lec:'mk-3', q:R`Would you give a 7-digit loan for a 600 m² tattoo studio on Zürich’s Bahnhofstrasse? Structure your answer with the lecture’s tools.`, a:R`Internal: does the founder have the resources (capital, team, brand, followers), competencies (artistic skill, reputation) and capabilities (running a large studio, steady quality) to fill 600 m²? External: trends (tattoos as mainstream, premium self-expression), PESTEL (economy and purchasing power in Zürich, legal hygiene rules, socio-demographics), Five Forces (rivalry of existing studios, low barriers for new entrants, substitutes, buyer power, supplier power of the landlord — top rent). Only if internal strengths match an attractive external situation is the loan justified; otherwise a smaller location first.`},
{lec:'mk-3', q:R`Explain the BCG Matrix, its norm strategies and the idea of cross-financing.`, a:R`The BCG Matrix classifies products by relative market share (x) and market growth (y). Stars (high/high): maintain or strengthen. Cash cows (high share, low growth): maintain — they generate funds. Question marks (low share, high growth): strengthen or liquidate. Poor dogs (low/low): liquidate. Cross-financing: the surplus of cash cows is invested in promising question marks so they become stars, which later turn into cash cows when the market matures.`},
{lec:'mk-3', q:R`Describe the four stages of the product life cycle and three strategies to sustain growth.`, a:R`Introduction: slow sales growth, negative or low profits, highest promotion-to-sales ratio (inform, induce trial, secure distribution), higher prices. Growth: rapid sales climb, profits rise as marketing costs spread over more volume. Maturity: sales growth slows, then absolute sales fall (switching, overcapacity) and profits decline through falling prices and refresh investments. Decline: technological advances, taste shifts and competition → overcapacity, price cuts, profit erosion → withdrawal or reduced ranges. Growth strategies: improve quality and add features/models; increase distribution coverage and enter new channels; lower prices for the next layer of price-sensitive buyers.`},
{lec:'mk-3', q:R`A German carmaker considers investing in autonomous driving. Name all six PESTEL fields and discuss two of them with one pro and one con each. (Exam style as announced by Henkel on 4 Nov)`, a:R`Fields: political, economic, social/demographic, technological, ecological, legal. Social: pro: the ageing society wants to stay mobile but older people may no longer drive, which creates demand for autonomous taxis (and busy professionals want to work while being driven); con: older people have less buying power for expensive cars. Technological: pro: assistance systems already work and the technology keeps improving; con: chips and sensors are expensive and depend on US suppliers, there is no shared car-to-car platform and 5G coverage is weak. (Alternatives: legal: currently not allowed in Germany, liability unclear vs Waymo’s permitted route in Munich shows it can be approved; ecological: smoother driving saves energy vs high server and chip-production emissions.) Only discuss as many fields and arguments as asked; extra ones are not read.`},
{lec:'mk-3', q:R`Draw and explain the product life cycle. Why does the profit curve start and end below zero, and what should a multi-product firm do with it?`, a:R`x-axis time, y-axis sales and profit; four phases: introduction, growth, maturity, decline. Sales start at zero, rise, turn during maturity and fall in decline. Profit starts negative because development, facilities and launch marketing are paid before sales cover them, turns positive in early growth, peaks at the end of growth and falls (and can turn negative) in maturity and decline because of price pressure, warranties, facelifts and the advertising needed to keep the product in the market. A multi-product firm should hold products in every phase and use the cash from mature products (cash cows) to finance new ones (question marks), e.g. iPhone profits fund the Vision Pro; this is the same logic as the BCG Matrix.`},
{lec:'mk-4', q:R`Explain the four dimensions of a product portfolio and illustrate them with an example company.`, a:R`Width = number of product lines (P&G: fabric care, oral care, skin and personal care). Length = number of items or brands within a line (several brands within hair care). Depth = number of variants of each product (one shampoo in many scents and sizes). Consistency = how closely the lines are related in end use, production and distribution (P&G’s lines are all household goods sold through the same retailers → high consistency).`},
{lec:'mk-4', q:R`Use the Ansoff Matrix to describe four growth options for a grill manufacturer.`, a:R`Market penetration: sell more of the current gas grill to current customers (promotions, accessories). Market development: sell the current grill to new customers, e.g. campers. Product development: new products for current customers, e.g. a digital grill with app. Diversification: new products for new customers, e.g. an indoor electric grill for city apartments.`},
{lec:'mk-4', q:R`Name the five starting points for product improvement and give one example each.`, a:R`Functional (better core function: 7 seats), processual (save time/money/resources: ParkNow parking app), economic (monetary benefit: lower fuel consumption from lighter material), emotional (positive feelings: joy of driving, pride of owning), social (prestige through ownership: access to a community).`},
{lec:'mk-5', q:R`Explain the four characteristics of services and the consequence of each for marketing.`, a:R`Intangibility: services cannot be seen or tested before purchase → provide tangible cues and trust signals. Inseparability: produced and consumed at the same time → the provider is part of the service. Variability: quality depends on who, when, where and to whom → standardize, train staff, aim for uniform experiences. Perishability: services cannot be stored → manage demand, e.g. no-show fees for missed reservations.`},
{lec:'mk-5', q:R`Name and define the five components of service quality, and explain why the same service can be judged differently over time.`, a:R`Reliability (dependable, accurate delivery as promised), responsiveness (willingness to help, prompt service), assurance (knowledge, courtesy, conveying trust and confidence), empathy (caring, individual attention), tangibles (appearance of facilities, equipment, staff, materials). Perceived quality compares expectations with experience; expectations change over time, so the same performance can be rated differently later.`},
{lec:'mk-6', q:R`Describe the seven steps of developing a communication campaign.`, a:R`(1) Identify the audience: target group, its characteristics and media use. (2) Determine objectives: category need, brand awareness, brand attitude, purchase intention. (3) Craft the message: what to say (message strategy), how (informational vs transformational), who (source credibility etc.). (4) Determine the budget: affordable, percentage of sales, competitive parity, objective-and-task. (5) Decide on the media: personal, nonpersonal and hybrid channels; media plan with reach, frequency, impact. (6) Measure performance: supply vs demand side, CPM. (7) Manage integrated communication: horizontal, vertical, internal, external.`},
{lec:'mk-6', q:R`Compare the four methods for setting the communication budget and recommend one.`, a:R`Affordable: spend what seems affordable — not strategic, uncertain budget, hard to plan long term. Percentage of sales: fixed % of current or expected sales — driven by funds, not opportunities, no logical basis for the %, reinforces trends (less sales → less advertising). Competitive parity: match competitors’ share of voice — ignores differences in image, reputation, resources; risk of communication wars. Objective-and-task: define objectives, identify tasks, estimate costs — the only method that starts from what communication should achieve, so it is the most logical recommendation.`},
{lec:'mk-6', q:R`Explain AIDA and why the action stage must not be overlooked online.`, a:R`AIDA: the receiver passes attention → interest → desire → action; it is a funnel and filter in which up to 97 % of addressed customers get lost. Online, attention and interest often arise outside the firm’s control (search engines, AI assistants); desire can be measured on the own website (time spent, steps, pages). But the goal is the purchase, not a long visit: firms must find where customers drop out before acting and remove that barrier — e.g. older customers who stopped at the e-mail form converted once they could reach a trustworthy person by phone.`},
{lec:'mk-7', q:R`Name the five sources of channel power and give one example each.`, a:R`Coercive: threat to withdraw resources or end the relationship (Mars pulls all products from a retailer). Reward: incentives for intermediaries (Thermomix commission and own seller networks). Legitimate/legal: authorization or legal requirements (only licensed sellers may sell insurance). Expert: specific knowledge (Jura trains and employs the staff in its store corners). Referent: attractiveness or reputation of a partner (dealers carrying Caterpillar are seen as good dealers).`},
{lec:'mk-7', q:R`Distinguish horizontal, vertical and multichannel conflicts and suggest a solution for each.`, a:R`Horizontal: between members on the same level, e.g. one Burger King franchisee ignores hygiene rules and harms all others → same rules for everyone plus controls. Vertical: between levels, e.g. a supermarket vs a cash & carry wholesaler selling Haribo cheaper per kilo → different pack sizes or separate lines per channel. Multichannel: between separately run channels, e.g. separate online and offline companies of an electronics retailer where customers demand the online price in store → one omnichannel organization with shared data and incentives that reward both.`},
{lec:'mk-7', q:R`Explain the development from single-channel to omnichannel distribution and illustrate omnichannel with an example.`, a:R`Single channel: one producer, one exclusive channel (still used for exclusivity, e.g. Chanel haute couture). Multichannel: several channels run as separate businesses with own P&Ls and KPIs and no shared data; works without overlapping assortments, but overlaps create conflicts. Omnichannel: all channels on one CRM system, customers switch seamlessly and non-linearly. Example: at Nespresso a customer tastes coffee in the shop, orders capsules on the screen for home delivery and the system knows her preferences. Building it: customer service promise → cloud technology → clear trading rules for partners.`}
];

const MK_CHEAT = [
{h:'Exam format', items:[
R`Written exam 16.12.2026 · 75 points: MC 60 + open questions 15 · plus experiment 7.5 + guest lectures 7.5 = 90`,
R`MC: 5 statements per question, 1–5 can be correct, 2.5 points · 5/5 → 2.5 · 4/5 → 1.5 · 3/5 → 1 · 2/5 → 0.5 · 1/5 → 0.25 · no minus points`,
R`Readings (Kotler, Keller & Chernev, Marketing Management, 16th ed.) and company presentations are exam-relevant · guest talk questions too`]},
{h:'L1 · Definitions', items:[
R`Marketing: identify and meet human and social needs, in harmony with the organization’s goals · create, communicate, deliver, exchange offerings with value for customers, clients, partners, society · co-create value`,
R`Marketing management: ≥ 1 party thinks about means to achieve desired responses · choose target markets, get, keep, grow customers through superior customer value`,
R`Market: physical place (traditional) → collection of buyers and sellers negotiating transactions for a product (class)`,
R`Goal: offering fits the customer so well that it sells itself → customer ready to buy`]},
{h:'L1 · Framework & entities', items:[
R`Socio-cultural env.: culture, politics, trends · market env.: market size, competition, innovation cycles`,
R`Company: heritage, vision, resources, competencies, culture · 4Ps · consumer: needs, lifestyle, motives, knowledge, routines`,
R`Marketable (10): goods, services, events, experiences, persons, places, properties, organizations, information, ideas`]},
{h:'L1 · Customer centricity', items:[
R`Amazon: Listen → perception counts, not firm’s view → customer focus · Invent → see what they cannot articulate, search/buy/use → customer journey · Personalize → feel home & understood, identification & routines → trust → customer experience`,
R`Bezos: "Start with the customer and work backwards" · Jobs: "Get closer than ever … tell them what they need before they realize it"`,
R`Product-centric: product driven, mass market, process, reacting to competitors, price driven, hierarchical`,
R`Customer-centric: market driven, customer focused, outcome, competitors irrelevant, value driven, teamwork`]},
{h:'L1 · Customer value', items:[
R`Emotional connection (400+ firms, 30 categories) vs highly satisfied: not connected −18 % · differentiation + satisfied +13 % · fully connected +52 %`,
R`Customer value = evaluation of benefits − costs vs perceived alternatives · benefit: product, service, image · cost: functional, psychological, monetary (evaluate, obtain, use, dispose)`,
R`Value proposition: whole cluster of benefits promised · raise benefits and/or reduce costs`]},
{h:'L1 · Cases', items:[
R`6PM — why it works: scarcity (drops → rare = valuable, FOMO) · belonging & identity (buy image) · social proof & authenticity (organic, real moments > ads) · fairness (stable price) · experiences (pop-ups) → fully connected customers`,
R`Deutsche Bank Park — principle: define the business by customer needs, not the product → concerts, business events, tech test field with the same asset`]},
{h:'L2 · Needs, motivation, benefits', items:[
R`Needs = "recognizing gaps" · motivation = "driving activity" · benefits = "contributing solutions" → value in the overlap`,
R`Needs: basic requirements; biological (hunger, thirst) vs psychological (recognition, esteem, belonging) · wants = needs directed at specific objects · marketers do NOT create needs`,
R`Responsive (stated need) · anticipative (near-future needs) · creative (unasked solutions, market-driving)`,
R`Continuum: demands (rational, explicit) ↔ wishes (emotional, unconscious) → combination`,
R`Maslow: physiological → safety → belonging & love → esteem → self-actualization`,
R`Motivation = need aroused to sufficient intensity to act · direction + intensity · projective techniques: word association, sentence completion, picture interpretation, role play · laddering: "why?" until "it’s about winning"`,
R`Core benefits (basic needs) vs additional (beyond, not necessarily expected; coupons, loyalty) · 5 types: functional, economic, process-related, emotional, social`]},
{h:'L2 · Satisfaction & insight', items:[
R`Satisfaction = perceived performance vs expectations · asymmetric: failing hurts more than exceeding helps`,
R`KANO: must-be’s (absent → dissatisfied, fulfilled → neutral) · satisfiers (proportional) · delighters (present → delight) · basic + performance = core, excitement = additional`,
R`Insight: new knowledge on needs, decision processes, motivations before/during/after purchase; shifts thinking and action · good = novel & not obvious, explanatory & human-contextualized, complete & enduring · "six o’clock moment"`,
R`Journey (Gardena): life before → decision & purchase → life after`]},
{h:'L2 · B2B', items:[
R`B2C = consumer goods marketing · B2B = industrial goods marketing`,
R`B2B: fewer but larger buyers, close relationships, professional purchasing, multiple buying influence, derived, inelastic, fluctuating demand, geographically concentrated, direct purchasing`,
R`Buying center (share goals & risks): initiator, user, influencer, decider, buyer, gatekeeper`,
R`Relationship marketing → marketing network: buyers, companies, sales partners, public institutions, media/lobbyists · B2B2C: revenue from organizations + manage the customer’s customer`]},
{h:'L3 · Strategy & planning', items:[
R`Status quo (internal + external, vs mission) → goal → strategy → program → 4Ps → controlling`,
R`Internal: resources (physical, financial, human, intangible), competencies (embedded skills), capabilities (the "how") · RBV · external: trends, PESTEL · mixed: PLC, BCG`,
R`Trend = direction with momentum & durability, more predictable than a fad · technological, sociological, ecological, economic`,
R`PESTEL: political, economic, socio-demographic, technological, ecological, legal · Five Forces (industry): rivalry, new entrants, substitutes, supplier power, buyer power`,
R`PLC: intro (slow sales, low/neg. profit, max promo ratio, high price) → growth (rapid sales, profits up; quality/features, channels, lower prices) → maturity (slowing, decaying, profits fall) → decline (overcapacity, price cuts, withdraw)`,
R`BCG (share × growth): question marks strengthen/liquidate · stars maintain/strengthen · cash cows maintain · poor dogs liquidate · cross-finance cash cows → question marks`]},
{h:'L3 · In class 4 Nov (Henkel’s hints)', items:[
R`Competitor = whoever does the same job for your profitable customers: Lufthansa business class vs Teams (job: get to the meeting)`,
R`PESTEL exam: name 6 → explain in one sentence → apply (discuss 2 fields, 1 pro + 1 con) · invest if ≥ 2–3 fields yellow/green`,
R`Autonomous driving: social green (ageing) · tech yellow (US chips, no car-to-X, 5G) · legal red (not allowed in DE) · eco two-sided`,
R`PLC: axes time vs sales + profit · profit starts negative (development, rent, launch marketing), negative again late (warranties, facelifts, ads)`,
R`Portfolio: products in every phase, cross-finance new ones from mature ones (iPhone → Vision Pro) = BCG logic`,
R`Open questions ≤ 10 P (~10 min), ~50% for naming · extra items beyond the requested number are not read · MC: "always" / either-or = usually false`]},
{h:'L4 · Products', items:[
R`Product: tangible/intangible, storable, ownership · service: intangible act, not storable, no ownership, produced = consumed`,
R`Components: product → features → packaging/POS → basic services → additional services → brand`,
R`Ansoff: penetration (old/old) · market development (old product, new customers) · product development (new product, old customers) · diversification (new/new)`,
R`Improvement: functional · processual · economic · emotional · social added value`,
R`Portfolio: width = # lines · length = # items in a line · depth = # variants · consistency = relatedness of lines`,
R`Line filling (within range) vs stretching (down-/up-market) · modification = no core change: quality, feature, style`,
R`Diversification: concentric (synergies) vs horizontal (complementary) · bundling: pure, mixed, mixed components`]},
{h:'L5 · Services', items:[
R`Intangibility · inseparability · variability · perishability`,
R`Differentiate via ordering ease, delivery speed/timing, installation/training/consulting, maintenance/repair, returns`,
R`Quality: reliability · responsiveness · assurance · empathy · tangibles · perceived = experience vs expectation (shifts over time)`,
R`Digital: technology (quality + productivity, worker role changes) · empowerment · co-production (more errors) · satisfy employees too`]},
{h:'L6 · Communication', items:[
R`Bowling (one-way) → pinball (multi-directional) · fragmentation, interaction, democratization, individualization`,
R`AIDA: attention → interest → desire → action · funnel, up to 97 % lost`,
R`7 steps: audience → objectives → message → budget → media → measure → manage IMC`,
R`Objectives: category need → awareness → attitude → purchase intention · message: what / how (informational vs transformational) / who`,
R`Budget: affordable · % of sales · competitive parity · objective-and-task`,
R`Reach (new, broad) · frequency (competition, complex, frequent purchase) · impact · CPM = c / C × 1,000`,
R`IMC: horizontal, vertical, internal, external · 6 Cs NOT in exam (Henkel 23 Nov)`,
R`23 Nov: learn the 7 steps by heart · AIDA: don’t forget action (find where users drop out) · one core channel for small firms`]},
{h:'L7 · Distribution & omnichannel (23 Nov, from recording)', items:[
R`Distribution = interdependent organizations · Nespresso shop: signalling, testing, experience, social place, ordering in one system`,
R`Functions: information, promotion, negotiation, ordering, financing, risk, credit, payment, ownership transfer`,
R`Levels: zero (Canyon online) · one (Riese & Müller certified dealers) · two (Giant importer + dealer) · B2B parallel (Roche wholesaler + own reps)`,
R`Power: coercive (Mars) · reward (Thermomix) · legitimate (insurance licence) · expert (Jura) · referent (BYD, Caterpillar)`,
R`Conflicts: horizontal (Burger King franchisees) · vertical (Haribo cash & carry vs supermarket → packs/lines) · multichannel (separate online/offline firms)`,
R`Single (Chanel) → multi (separate P&Ls, ~2012) → omni (one CRM, seamless, non-linear, ~2016) · build: service promise → cloud tech → trading rules`]}
];
