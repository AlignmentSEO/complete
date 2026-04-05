import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, Send, ArrowRight, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const planLabels: Record<string, string> = {
  setup: "Visibility Setup",
  "90day": "90-Day Launch",
  growth: "Growth and Optimization",
};

const depositAmounts: Record<string, number> = {
  setup: 200,
  "90day": 500,
  growth: 500,
};

const intentOptions = [
  { value: "talk", label: "Talk first (book 15-minute walkthrough)" },
  { value: "start", label: "Start a package (pay deposit to begin)" },
  { value: "not-ready", label: "Not ready yet (send score and next steps)" },
];

const Intake = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "";
  const practiceParam = searchParams.get("practice") || "";

  const [formData, setFormData] = useState({
    practiceName: practiceParam,
    contactName: "",
    email: "",
    phone: "",
    intent: "",
    multipleLocations: "",
    locationDetails: "",
    surroundingCities: "",
    cityDetails: "",
    highValueServices: "",
    serviceDetails: "",
    seasonalCampaigns: "",
    campaignDetails: "",
    competitors: "",
    competitorDetails: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = () => {
    const lines = [
      `Selected Plan: ${planLabels[plan] || "Not specified"}`,
      `Intent: ${intentOptions.find((o) => o.value === formData.intent)?.label || "Not selected"}`,
      "",
      `Practice Name: ${formData.practiceName}`,
      `Contact Name: ${formData.contactName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      "",
      `Multiple Locations: ${formData.multipleLocations}`,
      formData.locationDetails ? `Location Details: ${formData.locationDetails}` : "",
      "",
      `Serves Surrounding Cities: ${formData.surroundingCities}`,
      formData.cityDetails ? `City Details: ${formData.cityDetails}` : "",
      "",
      `High-Value Services to Emphasize: ${formData.highValueServices}`,
      formData.serviceDetails ? `Service Details: ${formData.serviceDetails}` : "",
      "",
      `Seasonal Campaigns Planned: ${formData.seasonalCampaigns}`,
      formData.campaignDetails ? `Campaign Details: ${formData.campaignDetails}` : "",
      "",
      `Competitors to Evaluate: ${formData.competitors}`,
      formData.competitorDetails ? `Competitor Details: ${formData.competitorDetails}` : "",
      "",
      formData.additionalNotes ? `Additional Notes: ${formData.additionalNotes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(
      `Implementation Intake: ${formData.practiceName || "New Client"} - ${planLabels[plan] || "General"}`
    );
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:kristinakassotis@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const radioClasses =
    "flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm cursor-pointer transition hover:border-accent/40";
  const radioActiveClasses =
    "flex items-center gap-3 rounded-xl border-2 border-accent bg-accent/5 px-4 py-3 text-sm cursor-pointer transition";

  const RadioOption = ({
    field,
    value,
    label,
  }: {
    field: string;
    value: string;
    label: string;
  }) => (
    <label
      className={
        formData[field as keyof typeof formData] === value
          ? radioActiveClasses
          : radioClasses
      }
    >
      <input
        type="radio"
        name={field}
        value={value}
        checked={formData[field as keyof typeof formData] === value}
        onChange={() => update(field, value)}
        className="sr-only"
      />
      <span
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          formData[field as keyof typeof formData] === value
            ? "border-accent"
            : "border-muted-foreground/30"
        }`}
      >
        {formData[field as keyof typeof formData] === value && (
          <span className="w-2 h-2 rounded-full bg-accent" />
        )}
      </span>
      <span className="text-card-foreground">{label}</span>
    </label>
  );

  // ── Post-submit confirmation ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-background font-body">
        <Navbar />
        <section className="px-6 py-20 md:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/15 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-4">
              Intake Submitted
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Your email client should have opened with your responses. Please
              send the email to complete your intake.
            </p>

            {/* Branch: Talk first */}
            {formData.intent === "talk" && (
              <div className="rounded-2xl bg-card p-8 text-left space-y-5" style={{ boxShadow: "var(--shadow-card)" }}>
                <h2 className="font-heading text-xl text-card-foreground">Book Your 15-Minute Walkthrough</h2>
                <a
                  href="https://calendly.com/alignmentseo/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  <Calendar className="w-4 h-4" /> Schedule on Calendly
                </a>
                <p className="text-muted-foreground text-sm">
                  Or call directly:{" "}
                  <a href="tel:3134237225" className="text-accent font-medium hover:underline">
                    (313) 423-7225
                  </a>
                </p>
              </div>
            )}

            {/* Branch: Start a package */}
            {formData.intent === "start" && (
              <div className="rounded-2xl bg-card p-8 text-left space-y-6" style={{ boxShadow: "var(--shadow-card)" }}>
                <div>
                  <h2 className="font-heading text-xl text-card-foreground mb-1">
                    Deposit to Begin: ${depositAmounts[plan] || 500}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {planLabels[plan] || "Selected package"}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
                    <p className="text-sm font-semibold text-card-foreground mb-1">
                      Preferred: Zelle (no processing fees)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Zelle to: kristinakassotis@gmail.com
                    </p>
                  </div>
                  <div className="rounded-xl border border-border p-5">
                    <p className="text-sm font-semibold text-card-foreground mb-1">
                      PayPal (processing fees apply)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      PayPal: kristinakassotis@gmail.com
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-muted-foreground text-sm mb-3">
                    Want to schedule a kickoff call?
                  </p>
                  <a
                    href="https://calendly.com/alignmentseo/15min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline"
                  >
                    <Calendar className="w-4 h-4" /> Book on Calendly
                  </a>
                </div>
              </div>
            )}

            {/* Branch: Not ready yet */}
            {formData.intent === "not-ready" && (
              <div className="space-y-5">
                <p className="text-muted-foreground text-base">
                  We will email you a summary and next steps shortly.
                </p>
                <Link
                  to="/google-score"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  Get My Free AI Visibility Score <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Fallback if no intent selected */}
            {!formData.intent && (
              <p className="text-muted-foreground text-sm">
                I will review your responses and follow up within one business day.
              </p>
            )}
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden px-6 pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Step 2
          </span>
          <h1 className="text-3xl md:text-5xl font-heading text-white leading-[1.1] mb-4">
            Implementation Intake &{" "}
            <span className="text-accent">Strategic Expansion Review</span>
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            This information helps me build your visibility system accurately
            and identify any expansion opportunities specific to your practice.
          </p>
          {plan && planLabels[plan] && (
            <div className="mt-6 inline-block rounded-full px-5 py-2 text-sm font-semibold text-accent-foreground" style={{ background: "var(--gradient-gold)" }}>
              Selected Plan: {planLabels[plan]}
            </div>
          )}
        </div>
      </section>

      {/* Form */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-2xl mx-auto space-y-10">
          {/* Practice Info */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-6">
              Practice Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Practice Name
                </label>
                <input
                  type="text"
                  value={formData.practiceName}
                  onChange={(e) => update("practiceName", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Your practice name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Contact Name
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) => update("contactName", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="you@practice.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                    placeholder="313-000-0000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Intent Dropdown */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              What do you want to do next?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              This helps us prepare the right next step for you.
            </p>
            <select
              value={formData.intent}
              onChange={(e) => update("intent", e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 appearance-none"
              required
            >
              <option value="">Select an option...</option>
              {intentOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Q1: Multiple Locations */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              Do you operate from more than one physical location?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Additional locations may benefit from dedicated visibility setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <RadioOption field="multipleLocations" value="yes" label="Yes" />
              <RadioOption field="multipleLocations" value="no" label="No" />
              <RadioOption
                field="multipleLocations"
                value="planning"
                label="Planning to expand"
              />
            </div>
            {(formData.multipleLocations === "yes" ||
              formData.multipleLocations === "planning") && (
              <textarea
                value={formData.locationDetails}
                onChange={(e) => update("locationDetails", e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 min-h-[80px]"
                placeholder="Please list additional locations or planned locations"
              />
            )}
          </div>

          {/* Q2: Surrounding Cities */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              Do you actively serve surrounding cities or only your primary zip
              code?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Understanding your service area helps define visibility radius.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <RadioOption
                field="surroundingCities"
                value="primary-only"
                label="Primary zip only"
              />
              <RadioOption
                field="surroundingCities"
                value="surrounding"
                label="Surrounding cities too"
              />
            </div>
            {formData.surroundingCities === "surrounding" && (
              <textarea
                value={formData.cityDetails}
                onChange={(e) => update("cityDetails", e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 min-h-[80px]"
                placeholder="List the cities or areas you actively serve"
              />
            )}
          </div>

          {/* Q3: High-Value Services */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              Are there specific high-value services you want emphasized?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Some services benefit from dedicated visibility pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <RadioOption
                field="highValueServices"
                value="yes"
                label="Yes, specific services"
              />
              <RadioOption
                field="highValueServices"
                value="no"
                label="No specific priority"
              />
            </div>
            {formData.highValueServices === "yes" && (
              <textarea
                value={formData.serviceDetails}
                onChange={(e) => update("serviceDetails", e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 min-h-[80px]"
                placeholder="List services you want to emphasize (e.g. spinal decompression, sports injury, pediatric care)"
              />
            )}
          </div>

          {/* Q4: Seasonal Campaigns */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              Are you planning seasonal campaigns or promotions in the next 90
              days?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Campaigns can be aligned with your visibility schedule for
              stronger impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <RadioOption
                field="seasonalCampaigns"
                value="yes"
                label="Yes"
              />
              <RadioOption
                field="seasonalCampaigns"
                value="no"
                label="Not currently"
              />
              <RadioOption
                field="seasonalCampaigns"
                value="maybe"
                label="Open to it"
              />
            </div>
            {(formData.seasonalCampaigns === "yes" ||
              formData.seasonalCampaigns === "maybe") && (
              <textarea
                value={formData.campaignDetails}
                onChange={(e) => update("campaignDetails", e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 min-h-[80px]"
                placeholder="Describe any planned promotions or seasonal pushes"
              />
            )}
          </div>

          {/* Q5: Competitors */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              Are there competitors you want us to evaluate during optimization?
            </h2>
            <p className="text-muted-foreground text-sm mb-5">
              Competitor evaluation helps calibrate your positioning strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <RadioOption
                field="competitors"
                value="yes"
                label="Yes, I have names"
              />
              <RadioOption
                field="competitors"
                value="no"
                label="No preference"
              />
            </div>
            {formData.competitors === "yes" && (
              <textarea
                value={formData.competitorDetails}
                onChange={(e) => update("competitorDetails", e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 min-h-[80px]"
                placeholder="List competitor names and locations if known"
              />
            )}
          </div>

          {/* Additional Notes */}
          <div
            className="rounded-2xl bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-heading text-xl text-card-foreground mb-2">
              Anything else I should know?
            </h2>
            <textarea
              value={formData.additionalNotes}
              onChange={(e) => update("additionalNotes", e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/30 min-h-[100px]"
              placeholder="Additional context, goals, or questions"
            />
          </div>

          {/* Advisory Note */}
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Based on your responses, I may recommend optional visibility
              expansions to ensure full alignment. No pricing is included here.
              Recommendations will be provided separately after review.
            </p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={!formData.intent}
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-accent-foreground transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: "var(--gradient-gold)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Submit Intake <Send className="w-4 h-4" />
            </button>
            <p className="text-muted-foreground text-xs mt-4">
              Your responses will open in your email client for review before
              sending.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Intake;
