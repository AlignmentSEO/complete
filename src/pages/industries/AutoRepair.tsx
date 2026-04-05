import { Wrench } from "lucide-react";
import IndustryPage, { IndustryConfig } from "@/pages/IndustryPage";

const config: IndustryConfig = {
  slug: "auto-repair",
  name: "Auto Repair",
  icon: Wrench,
  accentHsl: "210 35% 45%",
  heroTag: "Auto Repair · Grosse Pointe & Detroit Metro",
  heroTitle: "Be the Auto Shop",
  heroHighlight: "Customers Find First",
  heroDesc: "When someone searches 'mechanic near me,' the shop that appears first gets the call. I make sure that shop is yours.",
  painPoints: [
    { title: "Customers decide before they drive", desc: "Most people choose a mechanic from search results before they leave the house. If your shop does not appear, they never consider you." },
    { title: "Your best work is invisible online", desc: "You may be the most skilled shop in town, but if your online presence does not reflect that, customers have no way to know." },
    { title: "Competitors are showing up instead", desc: "Other shops in your area are appearing where you should be. Not because they are better, but because their online presence is more complete." },
  ],
  roiTicket: "$400+",
  ctaHeadline: "Stop Losing Repair Jobs to",
  ctaHighlight: "Shops That Show Up First",
};

const AutoRepair = () => <IndustryPage config={config} />;
export default AutoRepair;