import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog", internal: true },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight">
            OZO<span className="text-primary">.TECH</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button size="sm" className="rounded-full" asChild>
              <a href="https://calendly.com/troy-ozotech/30min" target="_blank" rel="noopener noreferrer">
                Start a Conversation
                <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border/30">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="block py-3 text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <Button size="sm" className="rounded-full mt-4 w-full" asChild>
              <a href="https://calendly.com/troy-ozotech/30min" target="_blank" rel="noopener noreferrer">
                Start a Conversation <ArrowRight className="h-4 w-4 ml-1" />
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
