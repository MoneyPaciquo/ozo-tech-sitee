const services = [
  {
    num: "01",
    title: "Fractional RevOps",
    description: "We embed inside your organization as your outsourced revenue operations function — aligning sales, marketing, and delivery into a single, accountable engine. CRM architecture, pipeline design, reporting infrastructure, and operational workflows built to scale.",
    note: "Best for: Growth-stage companies, agencies, and pre-launch ventures",
  },
  {
    num: "02",
    title: "Web Development & Digital Infrastructure",
    description: "From concept to conversion-optimized build — we develop across Shopify, WooCommerce, Webflow, WordPress, and AI-assisted platforms. Every build is designed with one objective: turn visitors into revenue.",
    note: "Platforms: Shopify · WooCommerce · Webflow · WordPress · Wix · Lovable",
  },
  {
    num: "03",
    title: "Email Marketing & Automation",
    description: "We design, build, and manage the full email lifecycle — from welcome sequences to post-purchase flows. Revenue sitting in your list is revenue you haven't collected yet. We collect it.",
    note: "Platforms: Omnisend · Brevo · Klaviyo",
  },
  {
    num: "04",
    title: "Go-To-Market Strategy",
    description: "Whether you're launching a product, entering a new market, or scaling an existing offer — we build the GTM playbook that maps your path from zero to traction. Includes positioning, channel strategy, distributor pipeline, and launch sequencing.",
    note: "Specialization: US market · Nigeria & West Africa · Emerging market entry",
  },
  {
    num: "05",
    title: "RFP & Bid Strategy",
    description: "Government and institutional contracts represent some of the most consistent, high-value revenue available — and most companies leave them on the table. We research, strategize, and write competitive bid responses that position our clients to win.",
    note: "Sectors: Government · Nonprofit · Healthcare · Education",
  },
  {
    num: "06",
    title: "Strategic Communications & Proposal Development",
    description: "How you present is as important as what you offer. We craft the proposals, one-sheeters, capability decks, and outreach materials that open rooms — and close deals.",
    note: "",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label">What We Do</p>
        <h2 className="section-heading max-w-3xl">
          A full-stack revenue operation — without the full-time overhead.
        </h2>
        <p className="text-muted-foreground text-lg mb-14 max-w-2xl">
          We operate as a fractional extension of your team, deploying only what you need, exactly when you need it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.num} className="bg-card border border-border/50 rounded-xl p-6 border-l-4 border-l-primary hover:border-l-primary/80 transition-all">
              <span className="text-primary font-mono text-sm font-bold">{s.num}</span>
              <h3 className="text-lg font-bold mt-2 mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
              {s.note && <p className="text-xs text-muted-foreground/60 italic">{s.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
