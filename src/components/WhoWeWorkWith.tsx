import faithAvatar from "@/assets/faith-growth-stage-operator.webp";

const clientTypes = [
  {
    title: "The Pre-Launch Founder",
    description: "You have a product, a vision, and early momentum. What you don't have is the revenue infrastructure to scale it. We build it before you need it.",
  },
  {
    title: "Faith: Growth-Stage Operator",
    description: "You're generating revenue but the systems aren't keeping up. Processes are manual, pipelines are inconsistent, and reporting is a guessing game. We fix the engine while it runs.",
    avatar: faithAvatar,
    alt: "Illustrative avatar of Faith, a growth-stage operations leader who manages revenue systems, pipelines, and reporting for a scaling company",
    personaNote: "Illustrative persona — not a client or testimonial",
  },
  {
    title: "The Agency or Consultancy",
    description: "You're delivering for clients but the internal operations are holding you back. We embed and build the infrastructure that lets you grow without breaking.",
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label">Our Clients</p>
        <h2 className="section-heading max-w-3xl">
          We work with a select group of companies at critical inflection points.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {clientTypes.map((c) => (
            <div key={c.title} className="bg-card border border-border/50 rounded-xl p-8 flex flex-col">
              {c.avatar && (
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={c.avatar}
                    alt={c.alt}
                    loading="lazy"
                    className="h-20 w-20 rounded-full object-cover border border-primary/40 shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
                    {c.personaNote && (
                      <p className="text-primary text-xs font-medium mt-1">{c.personaNote}</p>
                    )}
                  </div>
                </div>
              )}
              {!c.avatar && <h3 className="text-lg font-bold mb-3">{c.title}</h3>}
              <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
