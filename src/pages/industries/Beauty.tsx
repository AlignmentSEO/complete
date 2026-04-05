import { Scissors } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "beauty",
  name: "Beauty & Salon",
  icon: Scissors,
  heroTag: "Beauty & Salon SEO · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the Salon",
  heroHighlight: "Clients Discover First",
  heroDesc: "When someone searches 'best salon near me,' Google and AI pick who shows up. We make sure it's your business.",
  painPoints: [
    { title: "New Clients Search, Not Walk In", desc: "Walk-in traffic is declining. Today's clients find their salon on Google before they ever visit." },
    { title: "Instagram Isn't Enough Anymore", desc: "Social media helps, but Google and AI search drive the majority of new bookings for local salons." },
    { title: "One Bad Profile Costs Thousands", desc: "An unoptimized Google profile with outdated info or few reviews silently kills your business." },
  ],
  roiTicket: "$200+",
  ctaHeadline: "Stop Losing Bookings to",
  ctaHighlight: "Salons That Show Up First",
};

const Beauty = () => <IndustryPage config={config} />;
export default Beauty;
