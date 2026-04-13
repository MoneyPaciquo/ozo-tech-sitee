import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="section-label">Let's Talk</p>
        <h2 className="section-heading">
          If you're building something worth scaling, we should talk.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          We take on a limited number of engagements at a time. If you're ready to build the revenue infrastructure your company deserves — reach out. We'll tell you honestly whether we're the right fit.
        </p>
        <Button size="lg" className="rounded-full text-base px-10 h-13" asChild>
          <a href="https://calendly.com/troy-ozotech/30min" target="_blank" rel="noopener noreferrer">
            Start a Conversation
            <ArrowRight className="h-5 w-5 ml-1" />
          </a>
        </Button>
        <p className="text-muted-foreground text-sm mt-6">
          Prefer email? Reach us at{" "}
          <a href="mailto:troy@ozotech.io" className="text-primary hover:underline">troy@ozotech.io</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
