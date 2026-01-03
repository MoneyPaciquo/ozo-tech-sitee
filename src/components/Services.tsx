import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Cog, PieChart, Check } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Revenue Architecture",
    subtitle: "From $0 to $10M",
    description: "Designing and implementing your complete tech stack from the ground up. We build the infrastructure that scales with your growth.",
    features: [
      "Complete CRM implementation",
      "Tech stack selection & integration",
      "Data architecture design",
      "Custom automation workflows",
    ],
  },
  {
    icon: Cog,
    title: "Sales Ops as a Service",
    subtitle: "The Heavy Lifting",
    description: "Handling the day-to-day CRM management, data hygiene, and operational tasks so your team can focus on selling.",
    features: [
      "Ongoing CRM administration",
      "Lead routing optimization",
      "Pipeline management",
      "Process documentation",
    ],
  },
  {
    icon: PieChart,
    title: "Data Intelligence",
    subtitle: "From Chaos to Clarity",
    description: "Turning messy spreadsheets and scattered data into actionable board decks and executive insights.",
    features: [
      "Custom dashboard creation",
      "Revenue forecasting",
      "Cohort analysis",
      "Board-ready reporting",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Fractional Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            The Fractional <span className="text-gradient">Model</span>
          </h2>
          <p className="text-muted-foreground">
            Executive-level RevOps expertise without the executive-level salary. We become an extension of your team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                index === 1
                  ? "border-primary/50 bg-primary/5 shadow-[0_0_40px_hsl(180_100%_50%/0.1)]"
                  : "border-border/50 card-gradient hover:border-primary/30"
              }`}
            >
              {index === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                  Most Popular
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl mb-1">{service.title}</h3>
              <p className="text-primary text-sm font-medium mb-3">{service.subtitle}</p>
              <p className="text-muted-foreground text-sm mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={index === 1 ? "hero" : "heroOutline"}
                className="w-full"
              >
                Schedule Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
