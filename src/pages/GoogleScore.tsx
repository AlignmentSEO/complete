import { useState, useMemo } from "react";
import { ArrowRight, Shield, CheckCircle, BarChart3, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Types ── */
type RatingLevel = "High" | "Moderate" | "Low";
type YesNo = "yes" | "no" | "";

const ratingColors: Record<RatingLevel, string> = {
  High: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Moderate: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  Low: "bg-rose-400/15 text-rose-300 border-rose-400/20",
};

const ratingDotColors: Record<RatingLevel, string> = {
  High: "bg-emerald-400",
  Moderate: "bg-amber-400",
  Low: "bg-rose-300",
};

const CHIRO_CATEGORIES = [
  "Chiropractor",
  "Sports Chiropractor",
  "Pediatric Chiropractor",
  "Family Chiropractor",
  "Wellness Chiropractor",
  "Chiropractic Clinic",
  "Rehabilitation Center",
  "Pain Management Clinic",
];

/* ── Scoring Engine ── */
interface FormData {
  businessName: string;
  city: string;
  primaryCategory: string;
  yearsInBusiness: number;
  totalReviews: number;
  averageRating: number;
  reviewVelocity: number;
  servicePages: number;
  gbpComplete: YesNo;
  weeklyUpdates: YesNo;
  photosCount: number;
  highConvertingWebsite: YesNo;
  monthlyRevenuePotential: number;
}

interface Report {
  authorityStrength: RatingLevel;
  authorityScore: number;
  intentAlignment: RatingLevel;
  intentScore: number;
  optimizationActivity: RatingLevel;
  optimizationScore: number;
  structuralIntegrity: RatingLevel;
  structuralScore: number;
  engagementSignals: RatingLevel;
  engagementScore: number;
  visibilityScore: number;
  visibilityLevel: RatingLevel;
  estimatedMissedRevenue: number;
  priorityFixes: string[];
}

function toLevel(score: number): RatingLevel {
  if (score >= 70) return "High";
  if (score >= 40) return "Moderate";
  return "Low";
}

function generateReport(d: FormData): Report {
  // Authority Strength (reviews, years, rating)
  let authScore = 0;
  authScore += Math.min(30, d.totalReviews * 0.3);
  authScore += Math.min(25, d.yearsInBusiness * 5);
  authScore += Math.min(25, (d.averageRating / 5) * 25);
  authScore += Math.min(20, d.reviewVelocity * 5);
  authScore = Math.min(100, Math.round(authScore));

  // Intent Alignment (primary category + GBP completeness)
  let intentScore = 0;
  intentScore += d.primaryCategory.trim() ? 50 : 0;
  intentScore += d.gbpComplete === "yes" ? 50 : 15;
  intentScore = Math.min(100, Math.round(intentScore));

  // Optimization Activity (GBP, weekly updates, review velocity)
  let optScore = 0;
  optScore += d.gbpComplete === "yes" ? 35 : 10;
  optScore += d.weeklyUpdates === "yes" ? 30 : 5;
  optScore += Math.min(35, d.reviewVelocity * 7);
  optScore = Math.min(100, Math.round(optScore));

  // Structural Integrity (service pages + high-converting website)
  let structScore = 0;
  structScore += Math.min(50, d.servicePages * 10);
  structScore += d.highConvertingWebsite === "yes" ? 50 : 10;
  structScore = Math.min(100, Math.round(structScore));

  // Engagement Signals (photos & media count)
  let engScore = 0;
  engScore += Math.min(100, d.photosCount * 4);
  engScore = Math.min(100, Math.round(engScore));

  // Overall Visibility Score (weighted average)
  const visibilityScore = Math.round(
    authScore * 0.25 +
    intentScore * 0.20 +
    optScore * 0.25 +
    structScore * 0.15 +
    engScore * 0.15
  );

  // Estimated Missed Revenue
  const visibilityGap = (100 - visibilityScore) / 100;
  const estimatedMissedRevenue = Math.round(d.monthlyRevenuePotential * visibilityGap * 12);

  // Priority Fixes
  const fixes: string[] = [];
  if (d.gbpComplete !== "yes") fixes.push("Complete or rebuild Google Business Profile structure.");
  if (!d.primaryCategory.trim()) fixes.push("Align primary category with services offered.");
  if (d.weeklyUpdates !== "yes") fixes.push("Post weekly updates and respond to reviews consistently.");
  if (d.reviewVelocity < 4) fixes.push("Increase review volume and velocity.");
  if (d.photosCount < 15) fixes.push("Add photos and media to profile and website.");
  if (d.servicePages < 5 && d.servicePages > 0) fixes.push("Add service pages to improve structural depth.");
  if (d.servicePages === 0) fixes.push("Create dedicated service pages on your website.");
  if (d.highConvertingWebsite !== "yes") fixes.push("Ensure high-converting website is optimized for SEO.");
  if (fixes.length === 0) fixes.push("Maintain current optimization activity and monitor competitor movement.");

  return {
    authorityStrength: toLevel(authScore),
    authorityScore: authScore,
    intentAlignment: toLevel(intentScore),
    intentScore,
    optimizationActivity: toLevel(optScore),
    optimizationScore: optScore,
    structuralIntegrity: toLevel(structScore),
    structuralScore: structScore,
    engagementSignals: toLevel(engScore),
    engagementScore: engScore,
    visibilityScore,
    visibilityLevel: toLevel(visibilityScore),
    estimatedMissedRevenue,
    priorityFixes: fixes,
  };
}

/* ── Components ── */
const ScorePillar = ({ label, level, score }: { label: string; level: RatingLevel; score: number }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold text-white/90">{label}</h3>
      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap ${ratingColors[level]}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${ratingDotColors[level]}`} />
        {level}
      </span>
    </div>
    <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${
          level === "High" ? "bg-emerald-400" : level === "Moderate" ? "bg-amber-400" : "bg-rose-400"
        }`}
        style={{ width: `${Math.max(5, score)}%` }}
      />
    </div>
    <p className="text-white/30 text-xs mt-1.5 text-right">{score}/100</p>
  </div>
);

const SectionDivider = () => <div className="w-16 h-px bg-white/10 mx-auto" />;

const WEBHOOK_URL = "";

/* ── Page ── */
const GoogleScore = () => {
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    city: "",
    primaryCategory: "",
    yearsInBusiness: 0,
    totalReviews: 0,
    averageRating: 0,
    reviewVelocity: 0,
    servicePages: 0,
    gbpComplete: "",
    weeklyUpdates: "",
    photosCount: 0,
    highConvertingWebsite: "",
    monthlyRevenuePotential: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const report = useMemo(() => generateReport(formData), [formData]);

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);

    if (WEBHOOK_URL && formData.businessName.trim()) {
      try {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify({
            ...formData,
            visibility_score: report.visibilityScore,
            visibility_level: report.visibilityLevel,
            estimated_missed_revenue: report.estimatedMissedRevenue,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook error:", err);
      }
    }
  }

  const navyBg = "hsl(220 40% 8%)";

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition";
  const labelClass = "block text-sm font-medium text-white/70 mb-2";

  const ToggleGroup = ({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) => (
    <div className="grid grid-cols-2 gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
            value === opt.value
              ? "border-accent/40 bg-accent/10 text-accent"
              : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen font-body" style={{ background: navyBg }}>
      <Navbar />

      {!submitted ? (
        /* ═══════════ INTAKE FORM ═══════════ */
        <section className="px-6 pt-20 pb-28 md:pt-28 md:pb-36">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent mb-6">
                <BarChart3 className="w-3.5 h-3.5" /> Visibility Score
              </div>
              <h1 className="text-3xl md:text-5xl font-heading text-white leading-[1.1] mb-4">
                Practice Visibility<br />& Revenue Impact Report
              </h1>
              <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
                Enter your business details. I score everything internally. You get a visibility report in seconds.
              </p>
            </div>

            <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10 space-y-6">

              {/* Business Name */}
              <div>
                <label className={labelClass}>Business Name</label>
                <input type="text" required value={formData.businessName} onChange={(e) => updateField("businessName", e.target.value)} placeholder="Your Practice Name" className={inputClass} />
              </div>

              {/* City */}
              <div>
                <label className={labelClass}>City</label>
                <input type="text" required value={formData.city} onChange={(e) => updateField("city", e.target.value)} placeholder="e.g. Grosse Pointe, Detroit" className={inputClass} />
              </div>

              {/* Primary Category (dropdown) */}
              <div>
                <label className={labelClass}>Primary Category</label>
                <select
                  required
                  value={formData.primaryCategory}
                  onChange={(e) => updateField("primaryCategory", e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>Select a category</option>
                  {CHIRO_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Years / Reviews / Rating row */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>Years in Business</label>
                  <input type="number" min={0} required value={formData.yearsInBusiness || ""} onChange={(e) => updateField("yearsInBusiness", Number(e.target.value))} placeholder="5" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Total Reviews</label>
                  <input type="number" min={0} required value={formData.totalReviews || ""} onChange={(e) => updateField("totalReviews", Number(e.target.value))} placeholder="87" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Avg Rating</label>
                  <input type="number" min={0} max={5} step={0.1} required value={formData.averageRating || ""} onChange={(e) => updateField("averageRating", Number(e.target.value))} placeholder="4.6" className={inputClass} />
                </div>
              </div>

              {/* Review Velocity / Service Pages */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Reviews per Month</label>
                  <input type="number" min={0} required value={formData.reviewVelocity || ""} onChange={(e) => updateField("reviewVelocity", Number(e.target.value))} placeholder="3" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Service Pages on Website</label>
                  <input type="number" min={0} required value={formData.servicePages || ""} onChange={(e) => updateField("servicePages", Number(e.target.value))} placeholder="4" className={inputClass} />
                </div>
              </div>

              {/* GBP Complete */}
              <div>
                <label className={labelClass}>Google Business Profile Complete?</label>
                <ToggleGroup value={formData.gbpComplete} onChange={(v) => updateField("gbpComplete", v as YesNo)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
              </div>

              {/* Weekly Updates */}
              <div>
                <label className={labelClass}>Weekly Updates / Posts?</label>
                <ToggleGroup value={formData.weeklyUpdates} onChange={(v) => updateField("weeklyUpdates", v as YesNo)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
              </div>

              {/* Photos & Media */}
              <div>
                <label className={labelClass}>Photos & Media Count</label>
                <input type="number" min={0} required value={formData.photosCount || ""} onChange={(e) => updateField("photosCount", Number(e.target.value))} placeholder="12" className={inputClass} />
              </div>

              {/* High-Converting Website */}
              <div>
                <label className={labelClass}>High-Converting Website Attached?</label>
                <ToggleGroup value={formData.highConvertingWebsite} onChange={(v) => updateField("highConvertingWebsite", v as YesNo)} options={[{ value: "yes", label: "Yes" }, { value: "no", label: "No" }]} />
              </div>

              {/* Monthly Revenue Potential */}
              <div>
                <label className={labelClass}>Average Monthly Revenue Potential ($)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">$</span>
                  <input type="number" min={0} required value={formData.monthlyRevenuePotential || ""} onChange={(e) => updateField("monthlyRevenuePotential", Number(e.target.value))} placeholder="15000" className={`${inputClass} pl-8`} />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-accent-foreground transition hover:opacity-90"
                style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
              >
                Generate My Visibility Report <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-white/30 text-xs text-center flex items-center justify-center gap-1">
                <Shield className="w-3 h-3" />
                Your information is private. No cost, no obligation.
              </p>
            </form>
          </div>
        </section>
      ) : (
        /* ═══════════ RESULTS REPORT ═══════════ */
        <section className="px-6 pt-16 pb-28 md:pt-24 md:pb-36">
          <div className="max-w-3xl mx-auto space-y-10">

            {/* ── Header ── */}
            <div className="text-center space-y-4">
              <p className="text-accent text-xs font-semibold uppercase tracking-widest">Practice Visibility & Revenue Impact Report</p>
              <h1 className="text-3xl md:text-4xl font-heading text-white">{formData.businessName}</h1>
              <p className="text-white/40 text-sm">{formData.city} · {formData.primaryCategory}</p>
            </div>

            {/* ── Overall Score ── */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-10 text-center space-y-4">
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Overall Visibility Score</p>
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl md:text-6xl font-heading text-white">{report.visibilityScore}</span>
                <span className="text-white/30 text-2xl font-heading">/ 100</span>
              </div>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold ${ratingColors[report.visibilityLevel]}`}>
                <span className={`w-2 h-2 rounded-full ${ratingDotColors[report.visibilityLevel]}`} />
                {report.visibilityLevel}
              </span>
              <p className="text-white/30 text-[10px] italic">Based on verified visibility signals.</p>
            </div>

            {/* ── Score Breakdown ── */}
            <div>
              <h2 className="font-heading text-lg text-white/90 mb-4">Score Breakdown</h2>
              <div className="space-y-3">
                <ScorePillar label="Authority Strength" level={report.authorityStrength} score={report.authorityScore} />
                <ScorePillar label="Intent Alignment" level={report.intentAlignment} score={report.intentScore} />
                <ScorePillar label="Optimization Activity" level={report.optimizationActivity} score={report.optimizationScore} />
                <ScorePillar label="Structural Integrity" level={report.structuralIntegrity} score={report.structuralScore} />
                <ScorePillar label="Engagement Signals" level={report.engagementSignals} score={report.engagementScore} />
              </div>
            </div>

            <SectionDivider />

            {/* ── Estimated Missed Revenue ── */}
            <div className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-6 md:p-8 text-center space-y-3">
              <AlertTriangle className="w-6 h-6 text-accent mx-auto" />
              <p className="text-white/40 text-[10px] uppercase tracking-widest">Estimated Annual Missed Revenue</p>
              <p className="text-4xl md:text-5xl font-heading text-white">${report.estimatedMissedRevenue.toLocaleString()}</p>
              <p className="text-white/45 text-sm max-w-md mx-auto">
                Based on your monthly revenue potential of ${formData.monthlyRevenuePotential.toLocaleString()} and current visibility gaps.
              </p>
            </div>

            <SectionDivider />

            {/* ── Priority Fixes ── */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <h2 className="font-heading text-lg text-white/90 mb-4">Priority Fixes</h2>
              <p className="text-white/50 text-sm mb-4">
                Actionable steps to immediately improve visibility and discoverability for {formData.businessName}.
              </p>
              <ul className="space-y-2.5">
                {report.priorityFixes.map((fix, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {fix}
                  </li>
                ))}
              </ul>
            </div>

            <SectionDivider />

            {/* ── What This Means ── */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
              <h2 className="font-heading text-xl text-white/90 mb-4">What This Means for {formData.businessName}</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                Right now, {formData.businessName} in {formData.city} has a visibility score of {report.visibilityScore} out of 100. This means your practice is not being surfaced as often as competitors who have stronger structural signals.
              </p>
              <p className="text-white/55 text-sm leading-relaxed mb-2">This affects:</p>
              <ul className="space-y-1.5 mb-6">
                {[
                  "Google Maps rotation",
                  "AI-generated recommendations",
                  "Condition-specific searches",
                  "Voice assistant responses",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/55 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/55 text-sm leading-relaxed mb-2">
                Practices do not rank because they are good. They rank because their visibility structure is stronger.
              </p>
              <p className="text-white/55 text-sm leading-relaxed">
                Patients do not scroll until they find you. They call who appears first.
              </p>
              <p className="text-white/60 text-sm font-semibold mt-4">Every inactive month compounds competitive advantage elsewhere.</p>
            </div>

            {/* ── CTA ── */}
            <div className="rounded-2xl border border-accent/30 p-8 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(220 40% 12%), hsl(220 40% 10%))" }}>
              <div className="absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground" style={{ background: "var(--gradient-gold)" }}>
                Next Step
              </div>
              <h2 className="font-heading text-2xl text-white mb-4 pr-24">Next Steps</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                I will walk through this report with you, identify the highest-impact fixes, and show you exactly what a structured visibility build looks like for {formData.businessName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/#pricing"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-accent-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  See Recommended Structure <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://calendly.com/hello-alignmentseo/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition hover:border-white/40"
                >
                  Book a Visibility Review <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <SectionDivider />

            {/* Footer microcopy */}
            <p className="text-white/20 text-xs text-center leading-relaxed max-w-lg mx-auto">
              Visibility signals influence how often practices appear in search results. Rankings vary by location and time. This report measures controllable discovery factors.
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default GoogleScore;
