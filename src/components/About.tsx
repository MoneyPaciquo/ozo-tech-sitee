const stats = [
  { value: "10+", label: "Years Operating Experience" },
  { value: "3", label: "Continents" },
  { value: "6", label: "Platforms" },
  { value: "$XM", label: "Client Revenue Influenced" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-4xl mx-auto px-6">
        <p className="section-label">About OZO.TECH</p>
        <h2 className="section-heading">Built by operators. Run for founders.</h2>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-16">
          <p>
            OZO.TECH is a fractional revenue operations firm headquartered in Los Angeles, with experience spanning North America, Europe, Australia, and emerging markets across West Africa.
          </p>
          <p>
            We were built on a simple observation: the companies that win aren't always the ones with the best product. They're the ones with the best infrastructure — the systems, communications, and pipelines that turn potential into performance.
          </p>
          <p>
            Our team brings cross-industry expertise across technology, eCommerce, media, government contracting, and international business. We work with a focused portfolio of clients at any given time — because depth of engagement matters more to us than volume.
          </p>
          <p className="text-foreground font-semibold">We don't chase accounts. We build partnerships.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border/50 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
