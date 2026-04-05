import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SCAN_URL = "https://calendly.com/hello-alignmentseo/30min";

const problems = [
  "Duplicate Google Business Profiles splitting your visibility in half",
  "Missing or incorrect phone number on key directories",
  "Business hours that don't match across Google, Yelp, and your website",
  "Fewer than 20 reviews while competitors have 150+",
  "Wrong or missing service categories costing you qualified searches",
  "An old address still showing up on maps",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-20 pb-14 md:pt-32 md:pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-[1.1] mb-6">
            You're losing customers<br />
            <span className="italic text-accent">you never knew you had.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Duplicate listings, outdated information, and misaligned profiles are quietly redirecting your customers to competitors. Every day this stays unfixed, it costs you real revenue.
          </p>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition hover:opacity-90"
          >
            See your alignment gaps <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section className="px-6 py-14 md:py-18 bg-muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">Sound familiar?</h2>
          <div className="space-y-4">
            {problems.map((problem) => (
              <div key={problem} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-foreground leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 leading-relaxed">
            If even one of these applies, your Google Business Profile is actively working against you. Most business owners I audit have three or more.
          </p>
        </div>
      </section>

      {/* The Cost */}
      <section className="px-6 py-14 md:py-18">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">What misalignment actually costs</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Every inconsistency in your online presence is a signal to Google that your business data can't be trusted. Google responds by reducing your visibility. You don't get a notification. You just stop showing up.
            </p>
            <p>
              The customers who would have called you find someone else instead. Not because that business is better. Because Google decided they were more reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study / Credibility */}
      <section className="px-6 py-14 md:py-18 bg-muted">
        <div className="max-w-2xl mx-auto">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-heading text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
              "We had a duplicate listing we didn't know existed. It had been siphoning calls for over a year. Within 30 days of Kristina cleaning it up, our map views increased 40% and the phone started ringing again."
            </p>
            <p className="text-muted-foreground text-sm">
              Local service business, 2 locations, recovered after a single alignment audit
            </p>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="px-6 py-14 md:py-18">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-10">How the alignment process works</h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Full-spectrum audit",
                desc: "I review your Google Business Profile, directory listings, website, and competitor landscape. I find every inconsistency, duplicate, and missed opportunity."
              },
              {
                step: "02",
                title: "Actionable breakdown",
                desc: "You receive a clear report showing exactly what's wrong, what it's costing you, and what to fix first. No jargon, no filler."
              },
              {
                step: "03",
                title: "Alignment execution",
                desc: "I fix the structural issues, consolidate duplicates, correct listings, and build the foundation that makes Google trust your business."
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="text-sm font-medium text-accent mt-1 shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="px-6 py-14 md:py-18 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Most problems are invisible until someone shows you.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
            The alignment review takes 15 minutes. You'll walk away knowing exactly where your profile stands and what's silently costing you business.
          </p>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium transition hover:opacity-90"
          >
            Find out what's working against you <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="px-6 py-14 md:py-18">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-6">Built for local businesses that depend on being found</h2>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>Service businesses where one missed call is a lost job.</p>
            <p>Multi-location operators who can't afford listing inconsistencies.</p>
            <p>Owners who know they should be getting more calls but can't figure out why they're not.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-14 md:py-20 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-heading text-primary-foreground mb-4 leading-snug">
            Every day your profile stays misaligned,<br />
            <span className="italic">someone else gets the call.</span>
          </h2>
          <p className="text-primary-foreground/70 mb-8">Book a 30-minute alignment review. I'll show you exactly what I find.</p>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-8 py-4 text-base font-medium transition hover:opacity-90"
          >
            Book your alignment review <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
