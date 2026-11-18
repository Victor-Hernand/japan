/* Nosotros — página de quiénes somos con el diseño de la referencia Japan HN (clases jh-*). */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Nosotros() {
  useScrollReveal();

  return (
    <div className="jh-page min-h-screen">
      <TopBar />
      <Navbar />

      <main id="jh-main">
        <section className="jh-page-hero">
          <div className="jh-container">
            <p className="jh-breadcrumb">
              <a href="/">Inicio</a>
              <span>/</span>
              Nosotros
            </p>
            <p className="jh-eyebrow">Quiénes somos</p>
            <h1>
              Repuestos que impulsan <span>tu negocio.</span>
            </h1>
            <p>Somos Japan HN, distribuidores de repuestos japoneses que combinan calidad, precisión y confiabilidad.</p>
          </div>
        </section>

        <AboutUs />

        <section className="jh-cta">
          <div className="jh-container jh-cta-inner">
            <div>
              <h2>Un aliado estratégico para tu negocio.</h2>
              <p>Conoce el catálogo de Japan HN y conversa con nuestro equipo comercial.</p>
            </div>
            <a className="jh-button" href="/contacto">
              Hablar con un asesor
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
