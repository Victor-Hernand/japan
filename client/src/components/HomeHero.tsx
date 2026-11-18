/* Hero del inicio — diseño claro con franja roja diagonal (clases hv-*). Solo afecta a esta sección. */
import "@/styles/hero-v2.css";
import { whatsappUrl } from "./WhatsAppLink";

const HERO_WA = whatsappUrl("Hola, quiero cotizar repuestos japoneses.");

export function HomeHero() {
  return (
    <section className="hv-hero" id="inicio">
      <div className="jh-container hv-grid">
        <div className="hv-copy">
          <div className="hv-rings" aria-hidden="true">
            <span className="hv-ring hv-ring-1" />
            <span className="hv-ring hv-ring-2" />
            <span className="hv-ring hv-ring-3" />
          </div>
          <p className="hv-eyebrow">
            <span aria-hidden="true" /> Distribuidores B2B de repuestos japoneses
          </p>
          <h1>
            Tecnología japonesa <span>que impulsa tu rentabilidad.</span>
          </h1>
          <p className="hv-lead">Calidad japonesa garantizada en cada pieza.</p>
          <div className="hv-actions">
            <a className="hv-btn hv-btn-red" href={HERO_WA} target="_blank" rel="noopener noreferrer">
              Cotiza por WhatsApp
            </a>
            <a className="hv-btn hv-btn-line" href="/productos/lineas">
              Ver catálogo <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="hv-benefits" aria-label="Beneficios">
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h11v12H3zM14 10h4l3 3v5h-7z" />
                <circle cx="7.5" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
              </svg>
              <span>Envíos a todo<br />Honduras</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
              </svg>
              <span>Atención especializada<br />B2B</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 19V9m6 10V5m6 14v-7m5 7V3" />
                <path d="m3 7 6-4 6 5 6-5" />
              </svg>
              <span>Aliados en tu<br />crecimiento</span>
            </li>
          </ul>
        </div>

        <div className="hv-visual">
          <img
            src="/images/hero-suspension.webp"
            alt="Componentes de suspensión y dirección japonesa sobre una mesa de taller"
            fetchPriority="high"
          />
          <p className="hv-caption">
            Repuestos que mantienen
            <br />
            tu negocio en movimiento
          </p>
        </div>
      </div>
    </section>
  );
}
