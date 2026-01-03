import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Tech-Enabled RevOps Consultancy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Your Revenue Engine,{" "}
            <span className="text-gradient">Optimized.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Ozo.Tech bridges the gap between your sales tech stack and your bottom line through fractional leadership and battle-tested digital assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl">
              Start Your RevOps Audit
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Products
            </Button>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Target, label: "Strategy", desc: "Fractional Leadership" },
              { icon: Zap, label: "Execution", desc: "Digital Products" },
              { icon: TrendingUp, label: "Scale", desc: "Automations" },
            ].map((pillar) => (
              <div
                key={pillar.label}
                className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                <pillar.icon className="h-8 w-8 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-1">{pillar.label}</h3>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
