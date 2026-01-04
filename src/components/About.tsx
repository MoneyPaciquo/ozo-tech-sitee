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
                Ozo.Tech was founded on the principle that modern businesses need 
                operational infrastructure that scales. With hands-on experience 
                managing operations for leading e-commerce and health-tech brands, 
                we bring battle-tested strategies to every engagement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our portfolio includes managing operations for{" "}
                <a 
                  href="https://www.pepads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  PepAds
                </a>{" "}
                and{" "}
                <a 
                  href="https://nextlevellabs.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  NextLevel Labs
                </a>
                —driving content strategy, project management, and operational 
                efficiency at scale.
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
