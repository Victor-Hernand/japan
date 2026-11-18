/* Distribution — Cobertura nacional: botones por ciudad con descripción y plazo (clases jh-* de la referencia) */
import { useState } from "react";
import { CITIES } from "@/lib/data";

/** Plazo publicado por ciudad: Tegucigalpa 24 h, resto del país 48 h */
const ETA: Record<string, string> = {
  Tegucigalpa: "24h",
};

export default function Distribution() {
  const [selected, setSelected] = useState(CITIES[0].name);
  const city = CITIES.find((c) => c.name === selected) ?? CITIES[0];

  return (
    <section className="jh-section jh-coverage">
      <div className="jh-container jh-coverage-layout">
        <div className="jh-map-frame">
          <img
            src="/images/mapa-honduras.jpg"
            alt="Gráfico de marca Japan HN con repuestos y un mostrador ilustrativo"
            loading="lazy"
          />
          <span className="jh-delivery-badge">Envíos a nivel nacional</span>
        </div>

        <div>
          <p className="jh-section-kicker">Cobertura nacional</p>
          <h2>
            Repuestos japoneses llegan <span>a tu ciudad.</span>
          </h2>
          <p style={{ color: "var(--jh-muted)", fontSize: 11 }}>
            Nuestra red de distribución cubre las principales ciudades de Honduras y atiende a talleres, flotas y distribuidores.
          </p>

          <div className="jh-city-buttons" role="group" aria-label="Consultar cobertura por ciudad">
            {CITIES.map((c) => (
              <button
                key={c.name}
                type="button"
                className="jh-city-button"
                aria-pressed={c.name === selected}
                onClick={() => setSelected(c.name)}
              >
                {c.name}
              </button>
            ))}
          </div>

          <p className="jh-city-description" aria-live="polite">{city.desc}</p>

          <div className="jh-coverage-points">
            <span>
              <strong>{ETA[city.name] ?? "48h"}</strong> plazo publicado
            </span>
            <span>Envíos seguros</span>
            <span>Atención personalizada</span>
            <span>Seguimiento de pedidos</span>
          </div>

          <p style={{ marginTop: 14, color: "var(--jh-muted)", fontSize: 8 }}>
            Tegucigalpa: 24 h · Resto del país: 48 h
          </p>
        </div>
      </div>
    </section>
  );
}
