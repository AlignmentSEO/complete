import { Thermometer } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "hvac",
  name: "HVAC",
  icon: Thermometer,
  heroTag: "HVAC · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the HVAC Company",
  heroHighlight: "Homeowners Call First",
  heroDesc: "When a furnace breaks at midnight, homeowners search for help and call whoever appears first. That should be you.",
  painPoints: [
    { title: "Emergency searches go to whoever shows up", desc: "When a homeowner searches at 2 AM, they are not comparing websites. They are calling the first company they find. If that is not you, you never had a chance." },
    { title: "Your experience does not show up in search results", desc: "You may have 20 years of experience and hundreds of satisfied customers, but none of that matters if your online presence does not reflect it." },
    { title: "Competitors are building visibility year-round", desc: "Other HVAC companies in your area are investing in their online presence even during the off-season. When peak season arrives, they own the results." },
  ],
  roiTicket: "$500+",
  ctaHeadline: "Stop Losing Service Calls to",
  ctaHighlight: "HVAC Companies That Show Up First",
};

const HVAC = () => <IndustryPage config={config} />;
export default HVAC;