/* Contacto — página de contacto con el mismo diseño que la referencia Japan HN:
 * cabecera negra con migas de pan, formulario y atención comercial, cobertura y banda roja de cierre. */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Distribution from "@/components/Distribution";
import Footer from "@/components/Footer";
import { whatsappUrl } from "@/components/WhatsAppLink";

export default function Contacto() {
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
              Contacto
            </p>
            <p className="jh-eyebrow">Atención B2B</p>
            <h1>
              Conversemos sobre <span>tu próximo pedido.</span>
            </h1>
            <p>
              Atendemos distribuidores que buscan un proveedor confiable. Contáctanos para cotizaciones,
              pedidos y asesoría personalizada.
            </p>
          </div>
        </section>

        <Contact />
        <Distribution />

        <section className="jh-cta">
          <div className="jh-container jh-cta-inner">
            <div>
              <h2>¿Buscas un socio para tus repuestos?</h2>
              <p>Comunícate directamente con el equipo de Japan HN.</p>
            </div>
            <a
              className="jh-button"
              href={whatsappUrl("Hola, quiero cotizar repuestos japoneses para mi negocio.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
