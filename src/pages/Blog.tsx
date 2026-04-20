import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/data/blogPosts";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Blog | OZO.TECH — Insights on Revenue Operations & Growth"
        description="Insights on revenue operations, go-to-market strategy, and growth from OZO.TECH — a fractional RevOps consultancy based in Los Angeles."
        canonical="/blog"
      />
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="section-label">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Insights on revenue, operations, and growth.
            </h1>
            <p className="text-muted-foreground text-lg">
              Strategy, systems, and stories from inside the work — written for founders and operators
              building real revenue engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) =>
              !post.comingSoon ? (
                <article
                  key={post.slug}
                  className="bg-card border border-border/50 rounded-xl p-8 group hover:border-primary/40 transition-colors flex flex-col"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.date} · {post.author}
                  </p>
                  <h2 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-6 flex-1">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 self-start"
                  >
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              ) : (
                <div
                  key={post.slug}
                  className="bg-card border border-border/50 rounded-xl p-8 opacity-60 flex flex-col"
                >
                  <p className="text-sm text-muted-foreground mb-2">Coming Soon</p>
                  <h2 className="text-xl font-bold mb-3 leading-snug">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
              )
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
