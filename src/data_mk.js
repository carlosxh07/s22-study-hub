/* ============================================================ BASIC PRINCIPLES OF MARKETING DATA (Prof. Henkel, Fall Term 2026) ============================================================ */
// Plain text (no KaTeX: never use the dollar sign). Summary markup: "- " bullets, "Term :: Description" vocab rows, "=> A (desc) → B" flows, **bold**.
// New lectures: add a topic to MK_TOPICS (id mk-N), its areas to MK_AREAS and exam-format items to MK_MC with the area id.
const PLAN_EXAM_MK = new Date(2026,11,16); // written exam 16.12.2026 (slot 13:30–16:00, shared with Fundamentals of Consumer Behaviour)

// sessions from the admin slides — lectures without slides yet are listed as "coming"
const MK_SESSIONS = [
  {n:1, date:'Tue 13 Oct', title:'Marketing and Customer Centricity', topic:'mk-1'},
  {n:2, date:'Mon 19 Oct', title:'Understanding the Customer in B2C and B2B Settings'},
  {n:3, date:'21–23 Oct', title:'Experiment participation (no class) — on campus, Burg, Room Bangalore'},
  {n:4, date:'Tue 27 Oct', title:'Marketing Strategy and Planning'},
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
  {id:'case', lec:'mk-1', label:'Cases: why 6PM & the stadium work'}
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
 [R`The stadium case shows a firm defining its business by customer needs instead of by its product.`, true, R`Start with the customer and work backwards.`]]}
];

// open-answer part (15 points): self-written practice questions with model answers
const MK_OPEN = [
{lec:'mk-1', q:R`Define marketing and marketing management and explain the difference.`, a:R`Marketing identifies and meets human and social needs in a way that harmonizes with the organization’s goals; it covers creating, communicating, delivering and exchanging offerings with value for customers, clients, partners and society, and co-creating value. Marketing management is the managerial side: it takes place when at least one party to a potential exchange thinks about how to achieve desired responses from others — the art and science of choosing target markets and getting, keeping and growing customers through superior customer value. Marketing is the overall activity; marketing management is the deliberate planning and steering of it.`},
{lec:'mk-1', q:R`Contrast a product-centric with a customer-centric organization (at least four characteristics each).`, a:R`Product-centric: the product sits in the middle; product driven, mass-market focused, process oriented, reacting to competitors, price driven, hierarchical. Customer-centric: the customer sits in the middle with products and services around him; market driven, customer focused, outcome oriented, making competitors irrelevant, value driven, teamwork.`},
{lec:'mk-1', q:R`Explain Amazon’s three customer-centricity principles.`, a:R`Listen: you cannot run a business without listening to customers — the customer’s perception counts, not the firm’s perspective (customer focus). Invent: observe customers to see what they cannot articulate; difficulties in search, buy and use show innovation potential along the customer journey. Personalize: make the customer feel home and understood; identification and routine behaviour build trust (customer experience).`},
{lec:'mk-1', q:R`Why is customer satisfaction not enough? Use the evidence from the lecture.`, a:R`In a study of more than 400 firms in 30 categories, highly satisfied but not fully connected customers are only the baseline. Customers who are not emotionally connected are worth 18 % less; those who are satisfied and perceive brand differentiation but are not fully connected 13 % more; fully connected customers (satisfied and perceiving differentiation) 52 % more. Emotional connection, not satisfaction alone, drives customer value.`},
{lec:'mk-1', q:R`Define customer value and explain two ways a firm can increase it.`, a:R`Customer value is the difference between the customer’s evaluation of all benefits and costs of an offering and the evaluation of the perceived alternatives. Total customer benefit comes from product, service and image; total customer cost is functional, psychological and monetary costs of evaluating, obtaining, using and disposing. A firm raises value by increasing benefits (e.g. better service, stronger image) and/or reducing costs (e.g. lower price, less effort or risk when buying and using).`},
{lec:'mk-1', q:R`Explain with the 4Ps why the 6PM approach works on customers. Focus on the underlying principles.`, a:R`Product: limited drops use scarcity — rare goods feel more valuable and create fear of missing out; customers buy identity and belonging, not just clothing. Promotion: organic content and real moments (e.g. a star unintentionally showing the logo) work through social proof and authenticity, which people trust more than ads. Place: pop-ups and events create experiences and a community feeling. Price: stable despite the shortage, which signals fairness and protects trust. Together this builds a fully connected customer, the group with the highest customer value.`},
{lec:'mk-1', q:R`What principle does the Deutsche Bank Park case illustrate, and how could you apply it to another business?`, a:R`Define the business by the needs of customer groups, not by the product: the stadium serves fans (concerts), companies (business events) and tech firms (test field) with the same asset. Application, e.g. a café: also a co-working space in the morning, an event location in the evening. That is customer centricity — start with the customer and work backwards.`}
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
R`Deutsche Bank Park — principle: define the business by customer needs, not the product → concerts, business events, tech test field with the same asset`]}
];
