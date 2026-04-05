import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="px-6 py-16 md:py-24 bg-primary">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="font-heading text-2xl md:text-4xl text-primary-foreground mb-6 leading-snug">
        If something feels slightly off,<br />
        <span className="italic">it usually is.</span>
      </h2>
      <a
        href="https://calendly.com/hello-alignmentseo/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-base font-medium transition hover:opacity-90"
      >
        Get your free alignment scan <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  </section>
);

export default CTASection;