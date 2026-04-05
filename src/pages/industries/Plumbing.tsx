import { Droplets } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "plumbing",
  name: "Plumbing",
  icon: Droplets,
  accentHsl: "215 40% 40%",
  heroTag: "Plumbing · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the Plumber",
  heroHighlight: "Customers Call First",
  heroDesc: "When pipes burst, people do not browse. They search for the nearest plumber and call whoever appears first. That should be you.",
  painPoints: [
    { title: "Emergency calls go to whoever shows up first", desc: "Plumbing emergencies mean fast decisions. If you are not in the top results, you are not even considered." },
    { title: "Your reputation is not enough on its own", desc: "You may have decades of experience and loyal customers, but new customers searching online will never know that if your presence does not show it." },
    { title: "Other plumbers are investing in visibility", desc: "Every month you wait, competitors build stronger online presence and capture more of the customers searching in your area." },
  ],
  roiTicket: "$350+",
  ctaHeadline: "Stop Losing Emergency Calls to",
  ctaHighlight: "Plumbers Who Show Up First",
};

const Plumbing = () => <IndustryPage config={config} />;
export default Plumbing;