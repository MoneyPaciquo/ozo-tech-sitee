import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";

const tiers = [
  {
    tier: "Tier 1",
    type: "DIY",
    title: "Digital Products",
    description: "Self-serve templates and playbooks for teams ready to roll up their sleeves.",
    cta: "Browse Products",
    highlight: false,
  },
  {
    tier: "Tier 2",
    type: "DWY",
    title: "Guided Implementation",
    description: "Courses and coaching to implement best practices with expert guidance.",
    cta: "Start Learning",
    highlight: true,
  },
  {
    tier: "Tier 3",
    type: "DFY",
    title: "Fractional Services",
    description: "Done-for-you RevOps leadership. We become your embedded growth partner.",
    cta: "Book a Call",
    highlight: false,
  },
];

const Escalator = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">The Escalator Model</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Grow With <span className="text-gradient">Ozo.Tech</span>
          </h2>
          <p className="text-muted-foreground">
            Start wherever you are. As you scale, we scale with you—from self-serve tools to hands-on partnership.
          </p>
        </div>

        {/* Escalator Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((item, index) => (
              <div
                key={item.tier}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  item.highlight
                    ? "border-primary bg-primary/5 lg:-translate-y-4 shadow-[0_0_60px_hsl(180_100%_50%/0.15)]"
                    : "border-border/50 bg-card/50"
                }`}
              >
                {/* Step Number */}
                <div className={`absolute -top-4 left-6 px-3 py-1 rounded-full text-xs font-bold ${
                  item.highlight 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {item.tier}
                </div>

                {/* Type Badge */}
                <div className="mt-4 mb-4">
                  <span className="font-mono text-primary text-sm">{item.type}</span>
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{item.description}</p>

                {/* CTA */}
                <Button
                  variant={item.highlight ? "hero" : "heroOutline"}
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href={item.tier === "Tier 3" ? "https://calendly.com/troy-ozotech/30min" : item.tier === "Tier 1" ? "#products" : "#services"} target={item.tier === "Tier 3" ? "_blank" : undefined} rel={item.tier === "Tier 3" ? "noopener noreferrer" : undefined}>
                    {item.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>

                {/* Arrow to next tier */}
                {index < 2 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background border border-border items-center justify-center z-10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Escalator;
