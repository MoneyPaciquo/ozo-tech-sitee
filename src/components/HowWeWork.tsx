import { Search, Wrench, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Search,
    title: "Diagnose",
    description: "Every engagement begins with a structured discovery process. We identify where revenue is leaking, where systems are missing, and where the highest-leverage opportunities sit.",
  },
  {
    icon: Wrench,
    title: "Build",
    description: "We don't produce strategy decks that collect dust. We build — the infrastructure, the automations, the pipelines, the materials — and we do it with speed and precision.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Once the engine is running, we optimize for growth. New markets, new channels, new opportunities — we move with you as the business expands.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label">Our Approach</p>
        <h2 className="section-heading max-w-3xl">
          We don't consult from a distance. We operate from the inside.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {pillars.map((p, i) => (
            <div key={p.title} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
