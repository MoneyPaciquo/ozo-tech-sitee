import { Link } from "react-router-dom";
import img1 from "@/assets/blog/revops101-RalUaNs1VTY.webp.asset.json";
import img2 from "@/assets/blog/revops101-6mfe-iZBmBm.webp.asset.json";
import img3 from "@/assets/blog/revops101-YFGhOe8FKCj.webp.asset.json";

export const revops101HeroUrl = img1.url;

export const revops101Content = (
<>
<p className="mb-5">Growth rarely stalls because a team lacks activity. It stalls when teams work from different definitions, tools, and priorities.</p>
<p className="mb-5">Marketing reports leads. Sales reports opportunities. Customer success reports renewals. Leadership tries to reconcile the numbers after the fact. That is not a revenue system. It is several functions operating beside one another.</p>
<p className="mb-5">Revenue operations, RevOps, brings those functions together around a shared way to plan, execute, measure, and improve growth. It is not a new dashboard or a renamed sales team. It is the operating infrastructure behind a more predictable customer journey.</p>
<nav aria-label="Table of contents" className="bg-card border border-border/50 rounded-xl p-6 my-10"><p className="section-label !mb-3">Table of Contents</p><ol className="list-decimal pl-5 space-y-2 text-muted-foreground"><li><a href="#what-is-revenue-operations" className="hover:text-primary transition-colors">What is revenue operations?</a></li><li><a href="#what-revops-is-and-what-it-is-not" className="hover:text-primary transition-colors">What RevOps is, and what it is not</a></li><li><a href="#the-core-responsibilities-of-a-revops-function" className="hover:text-primary transition-colors">The core responsibilities of a RevOps function</a></li><li><a href="#a-simple-revops-framework-plan-connect-measure-improve" className="hover:text-primary transition-colors">A simple RevOps framework: plan, connect, measure, improve</a></li><li><a href="#how-to-get-started-a-practical-90-day-sequence" className="hover:text-primary transition-colors">How to get started: a practical 90-day sequence</a></li><li><a href="#who-needs-revops" className="hover:text-primary transition-colors">Who needs RevOps?</a></li><li><a href="#the-takeaway" className="hover:text-primary transition-colors">The takeaway</a></li></ol></nav>
<h2 id="what-is-revenue-operations" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">What is revenue operations?</h2>
<p className="mb-5">Revenue operations aligns the people, processes, data, and technology involved in generating and retaining revenue. It connects the customer lifecycle (from first interaction through sale, onboarding, renewal, and expansion) so the teams responsible for each part can work toward shared outcomes.</p>
<p className="mb-5">A useful way to think about it:</p>
<ul className="list-disc pl-6 space-y-2 mb-6">
<li><strong>Marketing</strong> creates and captures demand.</li>
<li><strong>Sales</strong> turns qualified demand into customers.</li>
<li><strong>Customer success</strong> helps customers realize value and stay.</li>
<li><strong>RevOps</strong> designs the processes, systems, and feedback loops that connect the work.</li>
</ul>
<p className="mb-5">That does not mean RevOps takes over the other teams’ jobs. It makes the handoffs, definitions, reporting, and tools work across them.</p>
<p className="mb-5"><a href="https://www.salesforce.com/sales/revenue-lifecycle-management/what-is-revenue-operations/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Salesforce describes RevOps</a> as coordinating the revenue journey across functions. The practical point is simple: when teams share an operating model, leadership can see where revenue is created, where it slows down, and what needs to change.</p>
<h2 id="what-revops-is-and-what-it-is-not" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">What RevOps is, and what it is not</h2>
<p className="mb-5">RevOps is a cross-functional business function. It can own revenue planning, lifecycle processes, CRM governance, forecasting, and performance reporting. Its scope depends on the company’s size and structure. It may report to a CRO, COO, or CEO; there is no single org chart that works for every business.</p>
<p className="mb-5">RevOps is <strong>not</strong>:</p>
<ul className="list-disc pl-6 space-y-2 mb-6">
<li>Just sales operations with a broader name.</li>
<li>A software implementation project.</li>
<li>A dashboard that shows numbers without defining them.</li>
<li>A team responsible for fixing every growth problem on its own.</li>
</ul>
<p className="mb-5">A CRM can support RevOps, but it cannot create alignment by itself. A forecast can reveal a gap, but it cannot repair an unclear qualification process. The operating rules have to come first.</p>
<h2 id="the-core-responsibilities-of-a-revops-function" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">The core responsibilities of a RevOps function</h2>
<p className="mb-5">A practical RevOps function focuses on a few connected areas.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">1. Revenue planning</h3>
<p className="mb-5">RevOps translates the growth plan into operational requirements: revenue targets, pipeline needs, capacity, segments, routes to market, and a regular review cadence. The goal is to connect ambition to the work and resources needed to deliver it.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">2. Lifecycle and process design</h3>
<p className="mb-5">RevOps maps how a prospect becomes a customer, and how that customer is onboarded, retained, and expanded. For each stage, teams need to agree on the definition, owner, entry and exit criteria, required information, and next action.</p>
<p className="mb-5">If a “qualified opportunity” means one thing to marketing and another to sales, the pipeline report will not settle the disagreement. Shared definitions will.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">3. Handoffs and ownership</h3>
<p className="mb-5">Every transition between teams needs a clear owner and a clear expectation. For example: What information must accompany a lead? How quickly should it be reviewed? What happens when it does not meet the agreed criteria?</p>
<p className="mb-5">These details prevent interested prospects from getting lost between teams, and keep customers from having to repeat the same context after a sale.</p>
<img src={img1.url} alt="Three luminous cyan streams connect into a continuous path against a dark background" loading="lazy" className="w-full rounded-xl border border-border/50 my-10" />
<h3 className="text-xl font-semibold mt-8 mb-3">4. Data, systems, and reporting</h3>
<p className="mb-5">RevOps governs the systems and information used to run the revenue process. That may include a CRM, marketing automation, sales tools, customer-success software, billing systems, and analytics.</p>
<p className="mb-5">The aim is not to collect every possible data point. It is to maintain reliable information that helps teams make decisions. That includes setting data rules, managing integrations, reducing duplicate records, and making sure reports use consistent definitions.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">5. Forecasting and continuous improvement</h3>
<p className="mb-5">RevOps builds the cadence for reviewing pipeline, forecast changes, conversion, retention, and performance against plan. It also investigates the cause of a gap rather than just reporting it.</p>
<p className="mb-5">A useful review asks: Where did deals slow down? Which stage has the weakest conversion? Are customers reaching value after onboarding? What change should the team test next?</p>
<h2 id="a-simple-revops-framework-plan-connect-measure-improve" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">A simple RevOps framework: plan, connect, measure, improve</h2>
<p className="mb-5">You do not need an elaborate operating model to begin. Start with four steps.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">1. Plan the revenue motion</h3>
<p className="mb-5">Define your target customers, how you will reach them, and how the business earns revenue. Set goals that reflect your model: new sales, recurring revenue, retention, expansion, or a combination.</p>
<p className="mb-5">Then work backward. What level of qualified pipeline, team capacity, and customer volume would support those goals?</p>
<h3 className="text-xl font-semibold mt-8 mb-3">2. Connect the customer lifecycle</h3>
<p className="mb-5">Map the journey from first touch to renewal. Keep the stages understandable and specific to your business. At each handoff, document who owns the next action and what information they need.</p>
<p className="mb-5">A lifecycle might include:</p>
<p className="mb-5"><strong>Engage → Qualify → Sell → Onboard → Adopt → Renew or Expand</strong></p>
<p className="mb-5">For each stage, write down the definition, owner, required evidence, and next action. This turns a process diagram into a tool teams can actually use.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">3. Measure what helps you decide</h3>
<p className="mb-5">Start with a small scorecard that covers outcomes and the health of the process. Depending on your business, it may include:</p>
<ul className="list-disc pl-6 space-y-2 mb-6">
<li><strong>Revenue or bookings:</strong> Define whether you mean signed deals, recognized revenue, or cash collected.</li>
<li><strong>Pipeline created and conversion:</strong> Track qualified pipeline and how opportunities move between stages.</li>
<li><strong>Win rate and sales-cycle length:</strong> Measure how often the defined opportunity set closes and how long it takes.</li>
<li><strong>Forecast accuracy:</strong> Compare the forecast with the result, and note whether estimates consistently run high or low.</li>
<li><strong>Retention and expansion:</strong> Track renewals, churn, and growth within existing accounts.</li>
</ul>
<p className="mb-5">For recurring-revenue businesses, net revenue retention (NRR) is one useful measure. It compares revenue from an existing customer base at the end of a period with the starting revenue, accounting for expansion, contraction, and churn. State the formula and time period so everyone interprets it the same way.</p>
<p className="mb-5">For every metric, document its purpose, formula, source, owner, and review cadence. A number without a definition is not a shared metric.</p>
<img src={img2.url} alt="Soft cyan light and particles converge around a central glow, suggesting a trusted source of revenue data" loading="lazy" className="w-full rounded-xl border border-border/50 my-10" />
<h3 className="text-xl font-semibold mt-8 mb-3">4. Improve the constraint</h3>
<p className="mb-5">Use the scorecard to locate the biggest constraint, then make one focused improvement. That might mean clarifying qualification criteria, improving response routing, cleaning up a CRM stage, or tightening the handoff from sales to onboarding.</p>
<p className="mb-5">Change the process, train the people who use it, and check whether the result improved. More automation is not always the answer. Automating a confusing process simply helps confusion move faster.</p>
<h2 id="how-to-get-started-a-practical-90-day-sequence" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">How to get started: a practical 90-day sequence</h2>
<p className="mb-5">You can build a solid foundation without trying to redesign every system at once.</p>
<p className="mb-5"><strong>Days 1–30: Diagnose.</strong> Talk with leaders and frontline team members across marketing, sales, customer success, and finance. Map the customer lifecycle, inventory key tools, review data quality, and identify the three biggest sources of friction. Baseline the metrics you can trust.</p>
<p className="mb-5"><strong>Days 31–60: Standardize.</strong> Agree on lifecycle definitions, ownership, and handoff expectations. Clean up the most important CRM fields. Publish a simple metric dictionary and set a regular forecast and performance review cadence.</p>
<p className="mb-5"><strong>Days 61–90: Operate and refine.</strong> Put the new process into use, train the teams, and review results against the baseline. Fix the next constraint based on what the data and people closest to the work reveal.</p>
<img src={img3.url} alt="Cyan light trails become more ordered as they move across a near-black field, representing a focused RevOps roadmap" loading="lazy" className="w-full rounded-xl border border-border/50 my-10" />
<h2 id="who-needs-revops" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">Who needs RevOps?</h2>
<p className="mb-5">A company does not need a large RevOps department to benefit from RevOps thinking. It needs coordination as soon as growth depends on reliable handoffs, useful reporting, and repeatable processes.</p>
<p className="mb-5">Pre-launch teams can establish the basics before inconsistent practices become hard to unwind. Growth-stage companies can replace manual workarounds with clearer pipelines and reporting. Agencies and consultancies can align sales promises with delivery capacity and client onboarding.</p>
<p className="mb-5">The structure should fit the business. A small company may assign RevOps responsibilities to one person or bring in fractional support. The core requirement stays the same: someone must own the shared revenue system, not just one team’s tools.</p>
<h2 id="the-takeaway" className="text-2xl font-bold mt-12 mb-4 scroll-mt-24">The takeaway</h2>
<p className="mb-5">RevOps turns separate activities into a connected operating system. Start with a lifecycle map, shared definitions, clear ownership, a reliable source of truth, and a review cadence. Then improve the constraint that has the greatest effect on revenue.</p>
<p className="mb-5">The goal is not more process for its own sake. It is a business where teams can see what is happening, act on it, and learn from the result.</p>
<p className="mb-5">For a closer look at embedded support, read OZO.TECH’s guide to <Link to="/blog/why-fractional-revops-smartest-hire-2026" className="text-primary hover:underline">fractional RevOps</Link>. If lifecycle marketing is a priority, explore how <Link to="/blog/email-list-revenue-engine" className="text-primary hover:underline">email can become a revenue engine</Link>. Learn more about OZO.TECH’s approach at <Link to="/" className="text-primary hover:underline">ozotech.io</Link>.</p>
<h3 className="text-xl font-semibold mt-8 mb-3">Further reading</h3>
<ul className="list-disc pl-6 space-y-2 mb-6">
<li><a href="https://www.gartner.com/en/articles/revops-the-modern-operating-model-for-fast-forward-organizations" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gartner: RevOps as a modern operating model</a></li>
<li><a href="https://www.clari.com/blog/revenue-operations-framework/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Clari: The revenue operations framework</a></li>
</ul>
</>
);
