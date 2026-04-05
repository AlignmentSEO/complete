import { Smile } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "chiropractors",
  name: "Chiropractic",
  icon: Smile,
  accentHsl: "170 35% 38%",
  heroTag: "Chiropractic · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the Chiropractor",
  heroHighlight: "Patients Find First",
  heroDesc: "When patients search for pain relief and local care, they choose from whoever appears first. I make sure your practice is in that group.",
  painPoints: [
    { title: "Patients search before they call", desc: "Most new patients start with a search. If your practice is not clearly visible, they book with the chiropractor who is." },
    { title: "Your clinical expertise does not show up online", desc: "You may be the best chiropractor in your area, but search systems evaluate your online presence, not your adjustments." },
    { title: "Revenue transfers to whoever is easier to find", desc: "The patients are there. The searches are happening. The only question is whether they find you or your competitor first." },
  ],
  roiTicket: "$450+",
  ctaHeadline: "Stop Losing Patients to",
  ctaHighlight: "Practices That Show Up First",
};

const Chiropractors = () => <IndustryPage config={config} />;
export default Chiropractors;