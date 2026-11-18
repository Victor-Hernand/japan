/* Home — inicio con el diseño de la referencia Japan HN (clases jh-*). */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  HomeHero,
  HomeStats,
  HomeCatalog,
  HomeBrands,
  HomeWhy,
  HomeTestimonial,
  HomeCTA,
} from "@/components/HomeSections";

export default function Home() {
  useScrollReveal();

  return (
    <div className="jh-page min-h-screen">
      <TopBar />
      <Navbar />
      <main id="jh-main">
        <HomeHero />
        <HomeStats />
        <HomeCatalog />
        <HomeBrands />
        <HomeWhy />
        <HomeTestimonial />
        <HomeCTA />
      </main>
      <Footer />
    </div>
  );
}
