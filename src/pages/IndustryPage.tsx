import { ArrowRight, Search, Eye, Target, MessageSquare, BarChart3, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";

export interface IndustryConfig {
  slug: string;
  name: string;
  icon: React.ElementType;
  heroTag: string;
  heroTitle: string;
  heroHighlight: string;
  heroDesc: string;
  painPoints: { title: string; desc: string }[];
  roiTicket: string;
  ctaHeadline: string;
  ctaHighlight: string;
  accentHsl?: string;
}

const IndustryPage = ({ config }: { config: IndustryConfig }) => {
  const themeStyle = config.accentHsl
    ? ({ "--accent": config.accentHsl } as React.CSSProperties)
    : undefined;

  return (
    <div className="min-h-screen bg-background font-body" style={themeStyle}>
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-accent mb-6">
            <config.icon className="w-3.5 h-3.5" /> {config.heroTag}
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-foreground leading-[1.15] mb-6">
            {config.heroTitle}{" "}
            <span className="italic text-accent">{config.heroHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">{config.heroDesc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/google-score"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition hover:opacity-90"
            >
              Get Your Free Alignment Scan <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              View Plans
            </a>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="px-6 py-16 md:py-20 bg-muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">What {config.name} businesses often don't see</h2>
          <div className="space-y-6">
            {config.painPoints.map((p) => (
              <div key={p.title}>
                <h3 className="font-heading text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">What I actually do</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            I don't just optimize your website or update your Google profile. I study how your business works, find where customers are slipping away, identify what you do best, and uncover revenue opportunities you may not see from the inside.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              { icon: Target, label: "Find where money is leaking" },
              { icon: Search, label: "Identify what already works" },
              { icon: MessageSquare, label: "Uncover hidden opportunities" },
              { icon: BarChart3, label: "Build visibility that lasts" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-foreground">
                <item.icon className="w-4 h-4 text-accent shrink-0" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="px-6 py-16 md:py-20 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50 mb-4">The math is simple</p>
          <h2 className="font-heading text-2xl md:text-4xl text-primary-foreground mb-6 leading-snug">
            Just 1 or 2 new customers<br />
            <span className="italic">covers the entire cost.</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8 leading-relaxed">
            If your average job is worth {config.roiTicket}, a single new customer pays for your entire monthly investment.
          </p>
          <Link
            to="/google-score"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-base font-medium transition hover:opacity-90"
          >
            See what you're missing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Discovery */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">Customers are already searching</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Every day, people search for businesses like yours. But visibility alone is not enough. The businesses that win are the ones that understand what makes them valuable, present that clearly, and make it effortless for customers to choose them.
          </p>
          <p className="text-foreground leading-relaxed font-medium">
            Visibility is not marketing. It is understanding your business and making sure the right people can find it.
          </p>
        </div>
      </section>

      {/* Why Now */}
      <section className="px-6 py-16 md:py-20 bg-muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">The world changed. Most businesses didn't.</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Customers no longer browse. They search, compare, and decide in seconds.</p>
            <p>The businesses that show up are not always the best. They are the ones with the clearest online presence and the most intentional positioning.</p>
            <p className="text-foreground font-medium">
              I make sure your business is one of them, not by tricks, but by helping you understand and present what already makes you valuable.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* Built for Local */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">Built for local businesses</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            AlignmentSEO was built for local businesses that depend on customers finding them. I study your business, find the gaps, and build the structure that puts you in front of the people already looking for what you offer.
          </p>
          <p className="text-foreground font-medium mb-2">Every system is designed around your specific business, not a template.</p>
          <p className="text-muted-foreground text-sm">You will always speak with me directly. No outsourcing. No handoffs.</p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default IndustryPage;