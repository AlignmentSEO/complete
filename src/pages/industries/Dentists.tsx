import { Smile } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "dentists",
  name: "Dental",
  icon: Smile,
  accentHsl: "200 30% 42%",
  heroTag: "Dental · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the Dentist",
  heroHighlight: "New Patients Find First",
  heroDesc: "Patients searching for 'dentist near me' choose from whoever appears first. I make sure your practice is one of them.",
  painPoints: [
    { title: "New patients search before they call", desc: "Over 80% of new dental patients start with a search. If your practice does not appear clearly, they book with someone who does." },
    { title: "Your clinical skill does not show up in search results", desc: "You may be an excellent dentist, but search systems cannot evaluate your clinical ability. They evaluate your online presence." },
    { title: "Reviews and profiles drive the decision", desc: "Patients compare ratings, photos, and information instantly. A complete, well-maintained profile wins over a neglected one every time." },
  ],
  roiTicket: "$500+",
  ctaHeadline: "Stop Losing New Patients to",
  ctaHighlight: "Practices That Show Up First",
};

const Dentists = () => <IndustryPage config={config} />;
export default Dentists;