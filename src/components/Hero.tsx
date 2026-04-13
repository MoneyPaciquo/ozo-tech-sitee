import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

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
