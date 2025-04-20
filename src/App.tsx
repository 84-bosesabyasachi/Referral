import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PlatformSetup from "./pages/PlatformSetup";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import Campaign from "./pages/Campaign";
import CreateCampaign from "./pages/CreateCampaign";
import Promoters from "./pages/Promoters";
import Leads from "./pages/Leads";
import Payouts from "./pages/Payouts";
import { Settings } from "lucide-react";
import AIAgent from "./pages/AIAgent";
import Help from "./pages/Help";
=======
>>>>>>> 9d7fe3185d264aec0040cfbb271fd38314bb0070

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign/create" element={<CreateCampaign />} />
          <Route path="/promoters" element={<Promoters />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/payouts" element={<Payouts />} />
          <Route path="/ai-agent" element={<AIAgent />} />
          <Route path="/platform-setup" element={<PlatformSetup />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/platform-setup" element={<PlatformSetup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;