/* Home — Japan HN Light Theme
 * Design: Precision Engineering / Blanco Técnico
 * Fondos claros, acentos rojos, estructura fiel al original */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Catalog from "@/components/Catalog";
import ProductTabs from "@/components/ProductTabs";
import Brands from "@/components/Brands";
import CTA from "@/components/CTA";
import Testimonial from "@/components/Testimonial";
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
      <section className="py-16 bg-[#111827]">
        <div className="container">
          <ProductTabs />
        </div>
      </section>
      <Brands />
      <CTA />
      <Testimonial />
      <Footer />
    </div>
  );
}
