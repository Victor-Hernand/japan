/* Nosotros — página independiente de nosotros (no modal) */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Nosotros() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}
