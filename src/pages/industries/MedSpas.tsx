import { Sparkles } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "med-spas",
  name: "Med Spa",
  icon: Sparkles,
  heroTag: "Med Spa SEO · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the Med Spa",
  heroHighlight: "Clients Book First",
  heroDesc: "When clients search for Botox, fillers, or med spa treatments near them, AI decides who they see. Let's make it you.",
  painPoints: [
    { title: "High-Value Clients Search Online", desc: "Med spa clients research heavily online. If your Google presence is weak, you're losing $1,000+ treatments." },
    { title: "AI Is the New Referral", desc: "Instead of asking friends, clients ask ChatGPT for 'best med spa near me.' Are you the answer?" },
    { title: "Premium Market, Premium Competition", desc: "Other med spas are investing in SEO and AI visibility. In a premium market, visibility is everything." },
  ],
  roiTicket: "$800+",
  ctaHeadline: "Stop Losing Clients to",
  ctaHighlight: "Med Spas That Rank Higher",
};

const MedSpas = () => <IndustryPage config={config} />;
export default MedSpas;
