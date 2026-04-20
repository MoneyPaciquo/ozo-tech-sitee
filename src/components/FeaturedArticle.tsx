import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedPost } from "@/data/blogPosts";

const FeaturedArticle = () => {
  const post = getFeaturedPost();
  if (!post) return null;

  return (
    <section className="py-20 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="section-label">Featured Article</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mt-3 mb-4">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to={`/blog/${post.slug}`}>
                  Read Full Article <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                View all articles →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Link
              to={`/blog/${post.slug}`}
              className="block bg-card border border-border/50 rounded-xl p-8 hover:border-primary/40 transition-colors"
            >
              <p className="text-xs uppercase tracking-wider text-primary mb-3">Latest Insight</p>
              <p className="text-sm text-muted-foreground mb-2">
                {post.date} · {post.author}
              </p>
              <h3 className="text-xl font-bold leading-snug mb-4">{post.title}</h3>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;
