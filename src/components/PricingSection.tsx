import { useState, useMemo } from "react";
import { CheckCircle, ArrowRight, Calculator } from "lucide-react";

const SCAN_URL = "https://calendly.com/hello-alignmentseo/30min";

const tier1Features = [
  "Website properly connected to Google profile",
  "Clear service categories aligned to what customers search for",
  "Accurate pricing presentation when applicable",
  "Clean and consistent listings across directories",
  "Removal of duplicate or conflicting listings",
];

const tier2Extras = [
  "Mobile-first website built to convert",
  "Clear pricing and service positioning",
  "Service pages aligned to customer search behavior",
  "Immediate click-to-call visibility",
  "FAQ alignment",
  "Structured service architecture",
  "Condition or service-specific pages designed to capture relevant searches",
];

const tier3Handles = [
  "Google profile updates and posts",
  "Service refinements and FAQ adjustments",
  "Professional review responses",
  "Visibility checks across modern search platforms",
  "Monthly performance summary",
];

const tier3Office = [
  "Ask satisfied customers if they are open to leaving a review",
  "Provide occasional updated photos or service changes",
];

const GrowCalculator = () => {
  const [customerValue, setCustomerValue] = useState(450);
  const [customersPerMonth, setCustomersPerMonth] = useState(4);
  const [months, setMonths] = useState(12);

  const totalValue = useMemo(() => customerValue * customersPerMonth * months, [customerValue, customersPerMonth, months]);

  return (
    <div className="rounded-lg bg-card p-8 mt-5 border border-border">
      <div className="text-center mb-8">
        <p className="text-xs font-medium uppercase tracking-widest text-accent mb-2">The math</p>
        <h3 className="text-xl md:text-2xl font-heading text-foreground">What visibility is worth</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Estimated value of one new customer</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
              <input
                type="number"
                max={50000}
                value={customerValue}
                onChange={(e) => setCustomerValue(Number(e.target.value))}
                className="w-full rounded-md border border-border bg-background pl-8 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Desired new customers per month</label>
            <input
              type="number"
              min={1}
              max={100}
              value={customersPerMonth}
              onChange={(e) => setCustomersPerMonth(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Months</label>
            <input
              type="number"
              min={1}
              max={60}
              value={months}
              onChange={(e) => setMonths(Math.max(1, Number(e.target.value)))}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center rounded-md border border-accent/20 bg-accent/5 p-8">
          <Calculator className="w-6 h-6 text-accent mb-3" />
          <p className="text-muted-foreground text-sm mb-1">Projection</p>
          <p className="text-3xl md:text-4xl font-heading text-foreground mb-2">${totalValue.toLocaleString()}</p>
          <p className="text-muted-foreground text-xs mt-4 max-w-xs">
            Even modest improvement in visibility can exceed the cost of setup.
          </p>
        </div>
      </div>
    </div>
  );
};

const PricingSection = () => (
  <section id="pricing" className="px-6 py-16 md:py-20">
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Clear plans. No surprises.</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Choose the level that matches your goal.</p>
      </div>

      <div className="space-y-6">
        {/* Fix */}
        <div className="rounded-lg bg-card border border-border p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Fix</p>
          <h3 className="font-heading text-xl text-foreground mb-2">Local Presence Setup</h3>
          <div className="flex items-baseline gap-1 mb-5">
            <span className="text-3xl font-heading text-foreground">$750</span>
            <span className="text-muted-foreground text-sm">one-time</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Stops structural leakage. Corrects visibility errors. Stabilizes your online presence.
          </p>
          <ul className="space-y-3 mb-6">
            {tier1Features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            Book a review <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grow */}
        <div className="rounded-lg bg-primary text-primary-foreground border border-accent/20 p-8 md:p-10">
          <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/50 mb-2">Grow</p>
          <h3 className="font-heading text-xl text-primary-foreground mb-2">Complete Visibility System</h3>
          <div className="flex items-baseline gap-1 mb-5">
            <span className="text-3xl font-heading text-accent">$2,250</span>
            <span className="text-primary-foreground/50 text-sm">one-time</span>
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
            One-time build. Structured to increase qualified new customer inquiries. This is the growth engine.
          </p>
          <p className="text-primary-foreground/70 text-sm font-medium mb-3">Includes everything in Fix plus:</p>
          <ul className="space-y-3 mb-6">
            {tier2Extras.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            Book a review <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <GrowCalculator />

        {/* Protect */}
        <div className="rounded-lg bg-card border border-border p-8">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Protect</p>
          <h3 className="font-heading text-xl text-foreground mb-2">Ongoing Visibility Management</h3>
          <div className="flex items-baseline gap-1 mb-5">
            <span className="text-3xl font-heading text-foreground">$397</span>
            <span className="text-muted-foreground text-sm">per month</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Search position is not permanent. Inactive profiles lose visibility to active competitors.
          </p>
          <p className="text-foreground text-sm font-medium mb-3">What I handle monthly:</p>
          <ul className="space-y-3 mb-6">
            {tier3Handles.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-foreground text-sm font-medium mb-3">What your office does:</p>
          <ul className="space-y-3 mb-6">
            {tier3Office.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-accent/50 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href={SCAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            Book a review <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;