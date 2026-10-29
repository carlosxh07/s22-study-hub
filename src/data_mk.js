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
  {n:5, date:'Wed 4 Nov', title:'Conceptualization of Products and Services'},
  {n:6, date:'Mon 9 Nov', title:'Marketing Communication and Campaigning (I/II)'},
  {n:7, date:'Wed 11 Nov', title:'Marketing Communication and Campaigning (II/II)'},
  {n:8, date:'Mon 16 Nov', title:'Distribution and Omnichannel Management'},
  {n:9, date:'Fri 20 Nov', title:'Guest talk: Daniel Hagemeier, multiple entrepreneur & CEO of group.one (15:30–17:00, New Forum)'},
  {n:10, date:'Mon 23 Nov', title:'Setting and Managing Prices'},
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
  {id:'bcg', lec:'mk-3', label:'BCG Matrix'}
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
- The BCG Matrix classifies products by relative market share and market growth into stars, cash cows, question marks and poor dogs.`,
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
{q:R`In which direction does cross-financing in the BCG Matrix usually flow?`, opts:[R`From question marks to cash cows`,R`From cash cows to question marks`,R`From poor dogs to stars`,R`From stars to poor dogs`], correct:1, exp:R`Cash cows (high share, low growth) generate funds that finance question marks so they can become stars.`, area:'bcg'}
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
 [R`Cross-financing means that cash cows finance question marks.`, true, R`So that question marks can become stars.`]]}
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
{lec:'mk-3', q:R`Describe the four stages of the product life cycle and three strategies to sustain growth.`, a:R`Introduction: slow sales growth, negative or low profits, highest promotion-to-sales ratio (inform, induce trial, secure distribution), higher prices. Growth: rapid sales climb, profits rise as marketing costs spread over more volume. Maturity: sales growth slows, then absolute sales fall (switching, overcapacity) and profits decline through falling prices and refresh investments. Decline: technological advances, taste shifts and competition → overcapacity, price cuts, profit erosion → withdrawal or reduced ranges. Growth strategies: improve quality and add features/models; increase distribution coverage and enter new channels; lower prices for the next layer of price-sensitive buyers.`}
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
R`BCG (share × growth): question marks strengthen/liquidate · stars maintain/strengthen · cash cows maintain · poor dogs liquidate · cross-finance cash cows → question marks`]}
];
