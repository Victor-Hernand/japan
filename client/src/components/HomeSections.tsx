/* HomeSections — secciones del inicio con el mismo diseño que la referencia Japan HN
 * (clases jh-*). Usa los datos y las imágenes locales de lib/data.ts. */
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BRANDS, CATALOG_TABS } from "@/lib/data";
import { whatsappUrl, WhatsAppIcon } from "./WhatsAppLink";
import "@/styles/catalog-cards.css";

export { HomeHero } from "./HomeHero";
export { HomeStats } from "./HomeStats";


export function HomeCatalog() {
  const [filter, setFilter] = useState("todos");
  const visible = CATALOG_TABS.filter((t) => filter === "todos" || t.id === filter);

  return (
    <section className="jh-section jh-section-flush-bottom jh-catalog" id="catalogo">
      <div className="jh-container">
        <div className="jh-section-head">
          <div>
            <p className="jh-section-kicker">Catálogo para distribuidores</p>
            <h2>
              Repuestos japoneses para <span>cada sistema.</span>
            </h2>
          </div>
          <p>
            Un portafolio organizado para negocios que buscan calidad, durabilidad y marcas reconocidas para sus clientes.
          </p>
        </div>

        <div className="jh-category-tabs" role="group" aria-label="Filtrar por categoría">
          <button className="jh-tab" type="button" aria-pressed={filter === "todos"} onClick={() => setFilter("todos")}>
            Todas las categorías
          </button>
          {CATALOG_TABS.map((t) => (
            <button
              key={t.id}
              className="jh-tab"
              type="button"
              aria-pressed={filter === t.id}
              onClick={() => setFilter(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="hc-grid">
          {visible.map((t) => (
            <a key={t.id} className="hc-card" href="/productos/lineas">
              <span className="hc-photo">
                <img src={t.image} alt={`${t.title}: repuestos japoneses`} loading="lazy" />
              </span>
              <span className="hc-title">{t.title}</span>
              <span className="hc-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>

        <div className="jh-catalog-links">
          <a href="/productos/lineas">Líneas de producto</a>
          <a href="/productos/destacados">Productos estrella</a>
          <a href="/productos/galeria">Galería</a>
        </div>
      </div>
    </section>
  );
}

export function HomeBrands() {
  return (
    <section className="jh-section jh-brands" id="marcas">
      <div className="jh-container">
        <div className="jh-section-head">
          <div>
            <p className="jh-section-kicker">Marcas japonesas líderes</p>
            <h2>
              Alianzas de confianza. <span>Calidad para el camino.</span>
            </h2>
          </div>
          <p>Fabricantes reconocidos por su precisión, durabilidad y desempeño en uso profesional.</p>
        </div>

        <div className="jh-brands-grid">
          {BRANDS.map((b) => (
            <article key={b.name} className="jh-brand-card">
              <div className="jh-brand-logo">
                {b.logo ? (
                  <img src={b.logo} alt={b.name} loading="lazy" />
                ) : (
                  <span className="jh-brand-name">{b.name}</span>
                )}
              </div>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>

        <div className="jh-brand-marquee" aria-label="Marcas distribuidas">
          <span>{BRANDS.map((b) => b.name).join(" · ")} · </span>
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  { tag: "01 / B2B", title: "Atención a distribuidores", desc: "Una propuesta pensada para quienes atienden el sector automotriz." },
  { tag: "02 / CALIDAD", title: "Marcas premium", desc: "Acceso a fabricantes reconocidos y componentes seleccionados para uso profesional." },
  { tag: "03 / COBERTURA", title: "Envíos nacionales", desc: "Distribución a ciudades y negocios en distintas regiones de Honduras." },
  { tag: "04 / RESPALDO", title: "Asesoría experta", desc: "Atención personalizada para apoyar la selección de repuestos de tu negocio." },
];

export function HomeWhy() {
  return (
    <section className="jh-section jh-why">
      <div className="jh-container jh-why-grid">
        <div className="jh-why-copy">
          <p className="jh-section-kicker">Tu socio estratégico</p>
          <h2>
            Calidad que mueve <span>tu negocio.</span>
          </h2>
          <p>Japan HN acompaña a distribuidores con repuestos confiables, asesoría experta y cobertura nacional.</p>
        </div>
        <div className="jh-benefits">
          {BENEFITS.map((b) => (
            <article key={b.tag} className="jh-benefit">
              <span>{b.tag}</span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeCTA() {
  return (
    <section className="jh-cta">
      <div className="jh-container jh-cta-inner">
        <div>
          <h2>¿Listo para crecer con repuestos japoneses confiables?</h2>
          <p>Atención B2B · Envíos a nivel nacional · Asesoría experta</p>
        </div>
        <a
          className="jh-button"
          href={whatsappUrl("Hola, quiero cotizar repuestos japoneses para mi negocio.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotiza por WhatsApp
        </a>
      </div>
    </section>
  );
}

export function HomeTestimonial() {
  return (
    <section className="jh-section jh-testimonial">
      <div className="jh-container jh-testimonial-grid">
        <div>
          <p className="jh-section-kicker">La confianza se construye</p>
          <h2>
            Clientes que crecen <span>con respaldo.</span>
          </h2>
          <p style={{ color: "var(--jh-muted)", fontSize: 11 }}>
            Recibimos comentarios sobre la atención personalizada, la eficiencia y la calidad de nuestros productos.
          </p>
        </div>
        <div className="jh-testimonial-quote">
          <span className="jh-quote-mark" aria-hidden="true">“</span>
          <blockquote>
            La atención recibida durante todo el proceso de compra fue excelente, destacando la atención personalizada y la
            facilidad con la que se gestionaron mis pedidos. La calidad y desempeño de los productos adquiridos superó mis
            expectativas. En general, considero que JAPAN HN es una empresa confiable y eficiente. Definitivamente, la recomiendo.
          </blockquote>
          <div className="jh-testimonial-person">
            <span className="jh-avatar" aria-hidden="true">C</span>
            <div>
              <strong>Carlos Sagastume</strong>
              <span>Inversiones A y M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
