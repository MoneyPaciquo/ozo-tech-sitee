import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ClipboardCheck, Gauge } from "lucide-react";

const LeadMagnet = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Free Resources</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Know Where You <span className="text-gradient">Stand</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Before you invest in transformation, understand your current state. Our free assessment tools help you identify gaps and prioritize action.
            </p>

            <div className="space-y-6">
              {/* Lead Magnet 1 */}
              <div className="p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Gauge className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">RevOps Maturity Matrix</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Self-assessment tool that scores your operations and recommends the right Ozo.Tech product for your stage.
                    </p>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary p-0 h-auto">
                      Take the Assessment
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Lead Magnet 2 */}
              <div className="p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">Tech Stack Audit Template</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Free PDF template to evaluate if you're overpaying for software and identify redundancies.
                    </p>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary p-0 h-auto">
                      <Download className="h-4 w-4" />
                      Download Free Template
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative">
                <div className="text-center mb-6">
                  <span className="text-6xl font-bold text-gradient">87%</span>
                  <p className="text-muted-foreground mt-2">
                    of companies overspend on their tech stack
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Unused tool licenses",
                    "Overlapping functionality",
                    "Integration gaps",
                    "Manual workarounds",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button variant="hero" size="lg" className="w-full mt-8">
                  Get Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
