/* Contacto — página independiente de contacto (no modal) */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Distribution from "@/components/Distribution";
import Footer from "@/components/Footer";

export default function Contacto() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <Contact />
      <Distribution />
      <Footer />
    </div>
  );
}
