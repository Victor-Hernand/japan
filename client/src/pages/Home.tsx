/* Home — Japan HN Light Theme
 * Design: Precision Engineering / Blanco Técnico
 * Fondos claros, acentos rojos, estructura fiel al original */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Catalog from "@/components/Catalog";
import FeaturedProducts from "@/components/FeaturedProducts";
import Gallery from "@/components/Gallery";
import AboutUs from "@/components/AboutUs";
import Brands from "@/components/Brands";
import Distribution from "@/components/Distribution";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Catalog />
      <FeaturedProducts />
      <Gallery />
      <AboutUs />
      <Brands />
      <Distribution />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
