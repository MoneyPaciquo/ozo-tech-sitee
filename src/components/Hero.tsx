import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(220_100%_50%/0.12),transparent_70%)]" />
      {/* Grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 animate-fade-up">
          We engineer revenue infrastructure for companies built to scale.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          OZO.TECH is a fractional revenue operations firm. We embed inside growth-stage companies and build the systems, strategy, and pipelines that turn traction into dominance.
        </p>
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Button size="lg" className="rounded-full text-base px-8 h-12" asChild>
            <a href="https://calendly.com/troy-ozotech/30min" target="_blank" rel="noopener noreferrer">
              Start a Conversation
              <ArrowRight className="h-5 w-5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
