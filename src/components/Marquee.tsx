const brands = [
  "WrightOne Media Group",
  "Orbitrex",
  "XPLabs",
  "Oval",
  "Lululemon*",
];

const Marquee = () => {
  return (
    <section className="py-12 border-y border-border/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-sm text-muted-foreground text-center">
          Trusted by forward-thinking brands across technology, eCommerce, media, and emerging markets.
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <span key={i} className="mx-10 text-lg font-semibold text-muted-foreground/50 select-none">
              {brand}
            </span>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-4">
        <p className="text-xs text-muted-foreground/40 text-center">*via WrightOne Media Group</p>
      </div>
    </section>
  );
};

export default Marquee;
