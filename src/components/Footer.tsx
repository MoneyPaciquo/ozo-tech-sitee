import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Products: [
      "Clean Slate Kit",
      "GTM Blueprint",
      "Dashboard Library",
      "RevOps Sprint Course",
    ],
    Services: [
      "Revenue Architecture",
      "Sales Ops as a Service",
      "Data Intelligence",
      "Custom Solutions",
    ],
    Resources: [
      "Blog",
      "Case Studies",
      "Free Templates",
      "RevOps Maturity Matrix",
    ],
    Company: [
      "About",
      "Careers",
      "Contact",
      "Privacy Policy",
    ],
  };

  return (
    <footer className="border-t border-border/50 bg-card/30">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Fix the <span className="text-gradient">Leak</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join forward-thinking companies that trust Ozo.Tech to optimize their revenue operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your RevOps Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo & Description */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="font-bold text-primary-foreground text-sm">O</span>
                </div>
                <span className="font-semibold text-lg">
                  OZO<span className="text-primary">.TECH</span>
                </span>
              </a>
              <p className="text-sm text-muted-foreground mb-4">
                Tech-enabled RevOps consultancy bridging strategy and execution.
              </p>
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ozo.Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
