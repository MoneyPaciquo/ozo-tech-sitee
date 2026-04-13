import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "why-fractional-revops-smartest-hire-2026",
    title: "Why Fractional RevOps Is the Smartest Hire a Founder Can Make in 2026",
    excerpt: "As economic pressures reshape how companies build their teams, a growing number of founders are turning to fractional Revenue Operations. Here's why it's the smartest move in 2026.",
    date: "April 13, 2026",
  },
  {
    slug: "",
    title: "The Nigeria Opportunity: Why Smart Brands Are Entering West Africa Now",
    excerpt: "Coming soon.",
    date: "",
  },
  {
    slug: "",
    title: "Your Email List Is a Revenue Engine You Haven't Turned On Yet",
    excerpt: "Coming soon.",
    date: "",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="section-label">Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
            Thinking on revenue, operations, and growth.
          </h1>

          <div className="space-y-8">
            {posts.map((post, i) => (
              post.slug ? (
                <Link
                  key={i}
                  to={`/blog/${post.slug}`}
                  className="block bg-card border border-border/50 rounded-xl p-8 group hover:border-primary/30 transition-colors"
                >
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ) : (
                <div
                  key={i}
                  className="block bg-card border border-border/50 rounded-xl p-8 opacity-60"
                >
                  <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                  <p className="text-muted-foreground text-sm">Coming soon</p>
                </div>
              )
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
