import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post || post.comingSoon || !post.content) {
    return <Navigate to="/blog" replace />;
  }

  const related = getRelatedPosts(post.slug, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`${post.title} | OZO.TECH Blog`}
        description={post.metaDescription}
        canonical={`/blog/${post.slug}`}
        type="article"
        publishedAt={post.publishedAt}
        author={post.author}
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="text-primary text-sm font-medium inline-flex items-center gap-1 mb-8 hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>

          <header className="mb-10">
            <p className="text-sm text-muted-foreground mb-3">
              By <span className="text-foreground">{post.author}</span> · {post.date}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert max-w-none text-foreground leading-relaxed">
            {post.content}
          </div>

          {/* CTA back to home */}
          <section className="mt-16 bg-card/50 border border-border/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Fix the <span className="text-gradient">Leak</span>?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              See how OZO.TECH helps growth-stage companies build the revenue infrastructure they need to scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/">
                  <Home className="h-4 w-4 mr-1" /> Back to Homepage
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/blog">More Articles</Link>
              </Button>
            </div>
          </section>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-20">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="bg-card border border-border/50 rounded-xl p-6 group hover:border-primary/40 transition-colors block"
                >
                  <p className="text-sm text-muted-foreground mb-2">{r.date}</p>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{r.excerpt}</p>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-1">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
