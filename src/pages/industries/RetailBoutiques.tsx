import { ArrowRight, CheckCircle, Store } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WALKTHROUGH_URL = "https://calendly.com/hello-alignmentseo/30min";

const RetailBoutiques = () => {
  return (
    <div className="min-h-screen font-body" style={{ background: "#f6f1ea", color: "#2b2b2b" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-24 md:pt-24 md:pb-32" style={{ background: "#d2a6a0" }}>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium mb-8" style={{ borderColor: "rgba(0,0,0,0.15)", background: "rgba(0,0,0,0.05)", color: "#2b2b2b" }}>
            <Store className="w-3.5 h-3.5" /> Retail Boutique Visibility System
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-[1.1] mb-6" style={{ color: "#2b2b2b" }}>
            Turn Local Searches Into Store Visits, Reviews, and Referrals
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "rgba(43,43,43,0.7)" }}>
            When shoppers search for boutiques nearby, Google shows a small group first.
            This system helps your boutique appear there and turns those visits into reviews and referrals that strengthen discovery over time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WALKTHROUGH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:opacity-90"
              style={{ background: "#6f9c98", color: "#ffffff" }}
            >
              Book Your Boutique's Visibility Review <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/google-score"
              className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-base font-semibold transition hover:opacity-80"
              style={{ borderColor: "#6f9c98", background: "transparent", color: "#6f9c98" }}
            >
              Check Your Boutique's Visibility
            </Link>
          </div>
        </div>
      </section>

      {/* Visual Recognition Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
              Where Is Your Boutique Right Now
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-lg mb-3" style={{ color: "#2b2b2b" }}>Busy Events. Limited Discovery.</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
                Events bring customers into the store but most new visitors come through word of mouth or existing followers.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-lg mb-3" style={{ color: "#2b2b2b" }}>Beautiful Store. Quiet Website.</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
                Your boutique may have a great website but it does not guide visitors toward visiting the store.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-lg mb-3" style={{ color: "#2b2b2b" }}>Loyal Customers. Slow Growth.</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
                You have repeat shoppers but new customers are not discovering the boutique consistently.
              </p>
            </div>
          </div>
          <div className="text-center mt-10 space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
              Most boutique owners recognize one of these immediately.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
              That is usually when boutique owners realize discovery is the real problem.
            </p>
            <a
              href={WALKTHROUGH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition hover:opacity-90 mt-2"
              style={{ background: "#6f9c98", color: "#ffffff" }}
            >
              Book Your Boutique's Visibility Review <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* The Social Media Trap */}
      <section className="px-6 py-16 md:py-20" style={{ background: "#adccc9" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-6" style={{ color: "#2b2b2b" }}>
            The Social Media Trap
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.75)" }}>
            <p>Many boutique owners rely heavily on social media.</p>
            <p>Most posts reach the same people who already follow the store.</p>
            <p>Without new followers promotions repeat to the same audience.</p>
            <p className="font-semibold" style={{ color: "#2b2b2b" }}>Social media maintains relationships with existing customers.</p>
            <p className="font-semibold" style={{ color: "#2b2b2b" }}>Local search introduces new customers.</p>
          </div>
        </div>
      </section>

      {/* How Visibility Changes That */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
              How Visibility Changes That
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
              The visibility structure focuses on shoppers already searching for boutiques nearby.
            </p>
            <p className="text-sm leading-relaxed mt-2" style={{ color: "rgba(43,43,43,0.65)" }}>
              The structure includes
            </p>
          </div>
          <div className="space-y-3 max-w-xl mx-auto">
            {[
              "Google Business Profile optimization",
              "Website structure that encourages store visits",
              "Event visibility for in store events",
              "Review growth and response guidance",
              "Clear calls to action that encourage visits",
              "Customer list growth systems that support events and repeat visits",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#6f9c98" }} />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.75)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Boutique Owners Should Focus First */}
      <section className="px-6 py-16 md:py-20" style={{ background: "#adccc9" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
              Where Boutique Owners Should Focus First
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.75)" }}>
              Most boutique growth problems are not marketing problems. They are focus problems.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-lg mb-3" style={{ color: "#2b2b2b" }}>Where is money leaking</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
                If someone searches for boutiques nearby and your store does not appear that visit goes somewhere else.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-lg mb-3" style={{ color: "#2b2b2b" }}>What already works</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
                Events, loyal customers, and certain product categories usually drive most revenue.
              </p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-lg mb-3" style={{ color: "#2b2b2b" }}>What produces the most profit</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
                High margin and signature items should be easier for customers to discover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Niche Positioning */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-6" style={{ color: "#2b2b2b" }}>
            Niche Positioning
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
            <p>Boutiques that try to appeal to everyone weaken their identity.</p>
            <p>Stores with a clear style or specialty are easier to remember and recommend.</p>
            <p>However niche positioning only works if new people continue discovering the store.</p>
            <p className="font-semibold" style={{ color: "#2b2b2b" }}>Visibility ensures new customers can find you.</p>
          </div>
        </div>
      </section>

      {/* What Most Boutique Websites Get Wrong */}
      <section className="px-6 py-16 md:py-20" style={{ background: "#adccc9" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-6" style={{ color: "#2b2b2b" }}>
            What Most Boutique Websites Get Wrong
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.75)" }}>
            <p>Many boutique websites look beautiful but do very little to bring new customers into the store.</p>
            <p>Events are difficult to find.</p>
            <p>Reviews are not being strengthened.</p>
            <p>Promotions only reach existing followers.</p>
            <p>The boutique may already have everything needed to grow but discovery is limited.</p>
          </div>
        </div>
      </section>

      {/* The Missed Discovery Problem */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-heading mb-6" style={{ color: "#2b2b2b" }}>
            The Missed Discovery Problem
          </h2>
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(43,43,43,0.65)" }}>
            <p>Many boutiques believe they need better marketing.</p>
            <p>Often the real issue is that customers simply cannot discover the store online.</p>
            <p>Even a few additional shoppers each week can create meaningful growth.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
              Three Clear Levels
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Local Presence Setup */}
            <div className="rounded-2xl p-8 flex flex-col" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-xl mb-1" style={{ color: "#2b2b2b" }}>Local Presence Setup</h3>
              <p className="text-2xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
                $750 <span className="text-sm font-normal" style={{ color: "rgba(43,43,43,0.5)" }}>one time</span>
              </p>
              <div className="space-y-2 text-sm mb-6" style={{ color: "rgba(43,43,43,0.65)" }}>
                <p>Stops structural leakage.</p>
                <p>Corrects visibility problems.</p>
                <p>Stabilizes your online presence.</p>
              </div>
              <p className="text-sm mb-4" style={{ color: "rgba(43,43,43,0.65)" }}>
                Best for boutiques that want to stabilize visibility before focusing on growth.
              </p>
              <a
                href={WALKTHROUGH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:opacity-80 mt-auto"
                style={{ borderColor: "#6f9c98", background: "transparent", color: "#6f9c98" }}
              >
                Book a Visibility Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Boutique Discovery Engine */}
            <div className="rounded-2xl p-8 flex flex-col relative" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)", outline: "2px solid #6f9c98" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full px-4 py-1 text-xs font-semibold" style={{ background: "#6f9c98", color: "#ffffff" }}>
                  Recommended
                </span>
              </div>
              <p className="text-xs font-semibold mb-3" style={{ color: "rgba(43,43,43,0.5)" }}>
                This is the level that typically creates meaningful growth for boutiques.
              </p>
              <h3 className="font-heading text-xl mb-1" style={{ color: "#2b2b2b" }}>Boutique Discovery Engine</h3>
              <p className="text-2xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
                $2,250 <span className="text-sm font-normal" style={{ color: "rgba(43,43,43,0.5)" }}>one time</span>
              </p>
              <p className="text-sm mb-4" style={{ color: "rgba(43,43,43,0.65)" }}>
                Designed to increase discovery and bring new shoppers into the store.
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(43,43,43,0.5)" }}>Includes everything in Setup plus</p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Mobile first website structure",
                  "Event visibility sections",
                  "Boutique brand positioning",
                  "Customer capture systems",
                  "Discovery optimized boutique pages",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "rgba(43,43,43,0.75)" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6f9c98" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-sm mb-6" style={{ color: "rgba(43,43,43,0.65)" }}>
                For boutiques that want consistent discovery instead of relying on occasional events or social media spikes.
              </p>
              <a
                href={WALKTHROUGH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90 mt-auto"
                style={{ background: "#6f9c98", color: "#ffffff" }}
              >
                Book Your Boutique's Visibility Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Ongoing Visibility Management */}
            <div className="rounded-2xl p-8 flex flex-col" style={{ background: "#ffffff", boxShadow: "0 2px 16px -4px rgba(0,0,0,0.08)" }}>
              <h3 className="font-heading text-xl mb-1" style={{ color: "#2b2b2b" }}>Ongoing Visibility Management</h3>
              <p className="text-2xl font-heading mb-4" style={{ color: "#2b2b2b" }}>
                $397 <span className="text-sm font-normal" style={{ color: "rgba(43,43,43,0.5)" }}>per month</span>
              </p>
              <div className="space-y-2 text-sm mb-6" style={{ color: "rgba(43,43,43,0.65)" }}>
                <p>Search visibility is not permanent.</p>
                <p>Inactive profiles lose visibility to active competitors.</p>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "rgba(43,43,43,0.5)" }}>Monthly work includes</p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "Google profile updates",
                  "Event visibility updates",
                  "Professional review responses",
                  "Competitor monitoring",
                  "Visibility checks across search platforms",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "rgba(43,43,43,0.75)" }}>
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6f9c98" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WALKTHROUGH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:opacity-80 mt-auto"
                style={{ borderColor: "#6f9c98", background: "transparent", color: "#6f9c98" }}
              >
                Book a Visibility Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-20 relative overflow-hidden" style={{ background: "#d2a6a0" }}>
          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl mb-4" style={{ color: "#2b2b2b" }}>
              Make Your Boutique Easy To Discover
            </h2>
            <p className="mb-10 max-w-lg mx-auto text-lg" style={{ color: "rgba(43,43,43,0.65)" }}>
              Customers are already searching for boutiques nearby.
              The only question is whether they discover yours.
            </p>
            <a
              href={WALKTHROUGH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition hover:opacity-90"
              style={{ background: "#6f9c98", color: "#ffffff" }}
            >
              Book Your Boutique's Visibility Review <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailBoutiques;
