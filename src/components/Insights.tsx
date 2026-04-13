import { ArrowRight } from "lucide-react";

const posts = [
  { title: "Why Fractional RevOps Is the Smartest Hire a Founder Can Make in 2026", url: "https://www.openpr.com/news/4465515/why-fractional-revops-is-the-smartest-hire-a-founder-can-make" },
  { title: "The Nigeria Opportunity: Why Smart Brands Are Entering West Africa Now" },
  { title: "Your Email List Is a Revenue Engine You Haven't Turned On Yet" },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label">Insights</p>
        <h2 className="section-heading">Thinking on revenue, operations, and growth.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {posts.map((post, i) => (
            <a 
              key={i} 
              href={post.url || "#"} 
              target={post.url ? "_blank" : undefined}
              rel={post.url ? "noopener noreferrer" : undefined}
              className="bg-card border border-border/50 rounded-xl overflow-hidden group block"
            >
              <div className="h-48 bg-muted/30" />
              <div className="p-6">
                <h3 className="font-bold mb-4 leading-snug group-hover:text-primary transition-colors">{post.title}</h3>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
