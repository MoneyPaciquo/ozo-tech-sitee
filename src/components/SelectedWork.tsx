const cases = [
  {
    title: "Strategic Communications & RevOps | Media & Events Firm",
    description: "Embedded as Fractional RevOps Consultant for a leading strategic communications firm. Coordinated technical deliverables, built operational workflows, and served as the operational bridge between the firm and its institutional client base.",
    result: "Streamlined cross-party communications, accelerated deliverable timelines",
  },
  {
    title: "eCommerce Migration | Research Compounds Brand",
    description: "Managed full Shopify-to-WooCommerce migration for an established research compounds brand — preserving 80% of original site design while rebuilding the backend for compliance, payment processing, and performance.",
    result: "Full migration delivered within 10 business days",
  },
  {
    title: "Email Marketing Infrastructure | Health & Wellness eCommerce",
    description: "Built end-to-end email automation architecture for market leaders in the telehealth and wellness space — welcome sequences, cart abandonment flows, post-purchase nurture, and list segmentation strategy.",
    result: "Automated revenue flows active across full customer lifecycle",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label">Work</p>
        <h2 className="section-heading">
          Engagements built on outcomes, not activity.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {cases.map((c, i) => (
            <div key={i} className="bg-card border border-border/50 rounded-xl p-8">
              <h3 className="text-lg font-bold mb-3">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{c.description}</p>
              <p className="text-primary text-sm font-medium">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
