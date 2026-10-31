import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CALENDLY = "https://calendly.com/troy-ozotech/30min";

const includes = [
  { title: "CRM architecture", text: "Clean pipeline stages, shared definitions, and data rules your sales, marketing, and delivery teams all work from." },
  { title: "Pipeline design", text: "Clear handoffs and ownership from first touch to closed deal and onboarding, so prospects stop getting lost between teams." },
  { title: "Reporting infrastructure", text: "Dashboards and a metric dictionary leadership can trust, replacing manual spreadsheets and guesswork." },
  { title: "Operational workflows", text: "Automations and processes built to scale, so manual workarounds don't break as the business grows." },
];

const steps = [
  { title: "Diagnose", text: "A structured discovery to find where revenue is leaking, where systems are missing, and where the highest-leverage opportunities sit." },
  { title: "Build", text: "We build the infrastructure, automations, pipelines, and materials ourselves, with speed and precision." },
  { title: "Scale", text: "Once the engine is running, we optimize for growth and move with you into new markets and channels." },
];

const audiences = [
  { title: "Pre-launch founders", text: "Build the revenue infrastructure before you need it." },
  { title: "Growth-stage companies", text: "Fix manual processes, inconsistent pipelines, and unreliable reporting while the engine runs." },
  { title: "Agencies & consultancies", text: "Build the internal operations that let you grow without breaking." },
];

const FractionalRevOps = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO
      title="Fractional RevOps for Growth-Stage Companies | OZO.TECH"
      description="OZO.TECH's fractional RevOps embeds inside your team as your revenue operations function: CRM architecture, pipeline design, reporting, and workflows built to scale."
      canonical="/fractional-revops"
    />
    <Navbar />
    <main className="pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <p className="section-label">Fractional RevOps</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
          Fractional RevOps: a revenue operations function, without the full-time overhead.
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          We embed inside your organization as your outsourced revenue operations function, aligning sales,
          marketing, and delivery into a single, accountable engine.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Start a Conversation <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="section-heading">What the engagement includes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {includes.map((i) => (
            <div key={i.title} className="bg-card border border-border/50 border-l-4 border-l-primary rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">{i.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="section-heading">How we work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="bg-card border border-border/50 rounded-xl p-6">
              <span className="text-primary font-mono text-sm font-bold">0{idx + 1}</span>
              <h3 className="text-lg font-bold mt-2 mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="section-heading">Who it's for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.title} className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-8">
          New to the concept? Read{" "}
          <Link to="/blog/why-fractional-revops-smartest-hire-2026" className="text-primary hover:underline">
            why fractional RevOps is the smartest hire a founder can make
          </Link>{" "}
          or start with{" "}
          <Link to="/blog/revops-101-beginners-guide-revenue-operations" className="text-primary hover:underline">
            RevOps 101
          </Link>.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 text-center bg-card/50 border border-border/50 rounded-xl p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to build your revenue engine?</h2>
        <p className="text-muted-foreground mb-6">
          We take on a limited number of engagements at a time, and we'll tell you honestly whether we're the right fit.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
            Start a Conversation <ArrowRight className="h-4 w-4 ml-1" />
          </a>
        </Button>
      </section>
    </main>
    <Footer />
  </div>
);

export default FractionalRevOps;
