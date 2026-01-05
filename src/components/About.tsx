import { User, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-mono text-primary mb-2 block">About</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Operational Excellence, <span className="text-gradient">Delivered.</span>
            </h2>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Ozo.Tech was architected on a single conviction: scalable growth is a byproduct of superior operational infrastructure. We bridge the gap between creative ambition and bottom-line reality by delivering the "backbone" that powers award-winning strategy, high-velocity content, and immersive experiential media agencies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our pedigree is built on hands-on leadership within the e-commerce, hospitality, and health-tech sectors. From orchestrating complex production workflows for global media houses to transforming fragmented digital guest journeys into high-output revenue engines, we specialize in the architectural rigor necessary for modern brands to thrive at scale.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Briefcase, title: "E-Commerce Expertise", desc: "Project management and content operations for DTC brands." },
                { icon: User, title: "Fractional Leadership", desc: "RevOps and Sales Ops for high-growth SaaS teams." },
                { icon: Award, title: "Bio-Ops Infrastructure", desc: "Clinic operations and patient management systems." },
              ].map((item) => (
                <div 
                  key={item.title}
                  className="flex gap-4 p-4 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm"
                >
                  <item.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
