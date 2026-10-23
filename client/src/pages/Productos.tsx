/* Productos — una página por grupo de productos (no modal) */

import type { ComponentType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import ProductTabs from "@/components/ProductTabs";
import ProductLines from "@/components/ProductLines";
import FeaturedProducts from "@/components/FeaturedProducts";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import NotFound from "@/pages/NotFound";

const GRUPOS: Record<string, ComponentType> = {
  lineas: ProductLines,
  destacados: FeaturedProducts,
  galeria: Gallery,
};

export default function Productos({ params }: { params: { grupo: string } }) {
  useScrollReveal();

  const Grupo = GRUPOS[params.grupo];
  if (!Grupo) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <div className="bg-[#111827] pt-28 pb-10">
        <div className="container">
          <ProductTabs />
        </div>
      </div>
      <Grupo />
      <Footer />
    </div>
  );
}
