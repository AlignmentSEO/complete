import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GoogleScore from "./pages/GoogleScore";
import AutoRepair from "./pages/industries/AutoRepair";
import HVAC from "./pages/industries/HVAC";
import Plumbing from "./pages/industries/Plumbing";
import Dentists from "./pages/industries/Dentists";
import MedSpas from "./pages/industries/MedSpas";
import Beauty from "./pages/industries/Beauty";
import RetailBoutiques from "./pages/industries/RetailBoutiques";
import Chiropractors from "./pages/industries/Chiropractors";
import Intake from "./pages/Intake";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/google-score" element={<GoogleScore />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/chiropractors" element={<Chiropractors />} />
          <Route path="/auto-repair" element={<AutoRepair />} />
          <Route path="/hvac" element={<HVAC />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/dentists" element={<Dentists />} />
          <Route path="/med-spas" element={<MedSpas />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/retail-boutiques" element={<RetailBoutiques />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
