import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leistungen from "./pages/Leistungen";
import Produktgalerie from "./pages/Produktgalerie";
import Terrassendaecher from "./pages/produkte/Terrassendaecher";
import PergolaMarkisen from "./pages/produkte/PergolaMarkisen";
import Markisen from "./pages/produkte/Markisen";
import Wintergartenbeschattung from "./pages/produkte/Wintergartenbeschattung";
import ZipScreens from "./pages/produkte/ZipScreens";
import Dachfenster from "./pages/produkte/Dachfenster";
import FensterTueren from "./pages/produkte/FensterTueren";
import Rolllaeden from "./pages/produkte/Rolllaeden";
import UeberMich from "./pages/UeberMich";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/produktgalerie" element={<Produktgalerie />} />
          <Route path="/produkte/terrassendaecher" element={<Terrassendaecher />} />
          <Route path="/produkte/pergola-markisen" element={<PergolaMarkisen />} />
          <Route path="/produkte/markisen" element={<Markisen />} />
          <Route path="/produkte/wintergartenbeschattung" element={<Wintergartenbeschattung />} />
          <Route path="/produkte/zip-screens" element={<ZipScreens />} />
          <Route path="/produkte/dachfenster" element={<Dachfenster />} />
          <Route path="/produkte/fenster-tueren" element={<FensterTueren />} />
          <Route path="/produkte/rolllaeden" element={<Rolllaeden />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
