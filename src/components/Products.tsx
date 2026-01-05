import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Map, BarChart3, Wrench, Sparkles, Database, ShoppingBag } from "lucide-react";

const products = [
  {
    icon: ShoppingBag,
    name: "The Shopify Growth Vault (SOPs & Templates)",
    description: "The exact framework used to manage project operations and SOPs for high-growth e-commerce brands.",
    tag: "E-Commerce",
    comingSoon: true,
  },
  {
    icon: FileCheck,
    name: "The Clean Slate Kit",
    description: "Comprehensive CRM data hygiene template and automation logic for spotless databases.",
    tag: "Data Hygiene",
    comingSoon: false,
  },
  {
    icon: Map,
    name: "GTM Blueprint",
    description: "Plug-and-play documentation suite for SDR/AE handoffs and go-to-market strategy.",
    tag: "Go-To-Market",
    comingSoon: false,
  },
  {
    icon: BarChart3,
    name: "Dashboard Library",
    description: "Pre-built Looker Studio & HubSpot dashboard wireframes for SaaS metrics (LTV, CAC, Churn).",
    tag: "Analytics",
    comingSoon: false,
  },
  {
    icon: Wrench,
    name: "RevOps Sprint Course",
    description: "4-week guided implementation to transform your revenue operations from chaos to clarity.",
    tag: "Course",
    comingSoon: false,
  },
  {
    icon: Sparkles,
    name: "AI Automation Pack",
    description: "LLM-powered lead routing and data cleaning automation templates for modern stacks.",
    tag: "AI-Powered",
    comingSoon: false,
  },
  {
    icon: Database,
    name: "Tech Stack Audit Template",
    description: "Self-assessment framework to identify if you're overpaying for software.",
    tag: "Free",
    comingSoon: false,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Digital Products</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            The Ozo.Tech <span className="text-gradient">Shop</span>
          </h2>
          <p className="text-muted-foreground">
            Battle-tested templates and courses organized by pain point. Start with DIY, scale to done-for-you.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative p-6 rounded-xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Tag */}
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                {product.tag}
              </span>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <product.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

              {/* CTA */}
              <div className="flex items-center justify-end mt-auto pt-4 border-t border-border/50">
                {product.comingSoon ? (
                  <Button variant="outline" size="sm" className="text-primary border-primary/50">
                    Join Waitlist
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="heroOutline" size="lg">
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
