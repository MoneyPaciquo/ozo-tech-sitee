import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/data/blogPosts";

const Insights = () => {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="insights" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label">Latest Insights</p>
          <h2 className="section-heading">Thinking on revenue, operations, and growth.</h2>
          <p className="text-muted-foreground mt-4">
            Stay ahead with insights on revenue operations and growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) =>
            !post.comingSoon ? (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-card border border-border/50 rounded-xl overflow-hidden group block"
              >
                <div className="h-48 bg-muted/30" />
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="font-bold mb-4 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={post.slug}
                className="bg-card border border-border/50 rounded-xl overflow-hidden block opacity-60"
              >
                <div className="h-48 bg-muted/30" />
                <div className="p-6">
                  <h3 className="font-bold mb-4 leading-snug">{post.title}</h3>
                  <span className="text-muted-foreground text-sm">Coming soon</span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <Link to="/blog">
              Visit the Blog
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Insights;
