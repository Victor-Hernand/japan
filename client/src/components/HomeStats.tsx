/* Barra de cifras del inicio — diseño oscuro con iconos y bloque de Honduras (clases st-*). Solo afecta a esta sección. */
import "@/styles/stats-v2.css";
import { STATS } from "@/lib/data";

const ICONS = [
  <svg key="people" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M16 14c2.6 0 5 1.6 5 4" />
  </svg>,
  <svg key="box" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z" />
    <path d="M4 7.5 12 12l8-4.5M12 12v9" />
  </svg>,
  <svg key="medal" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5 7.5 21l4.5-2.5 4.5 2.5L15 13.5" />
  </svg>,
];

export function HomeStats() {
  return (
    <section className="st-bar" aria-label="Japan HN en números">
      <div className="jh-container st-grid">
        {STATS.map((s, i) => (
          <div key={s.label} className="st-item">
            <span className="st-icon">{ICONS[i]}</span>
            <div className="st-text">
              <strong>
                {s.prefix}
                {s.value.toLocaleString("es-HN")}
              </strong>
              <span>{s.label}</span>
            </div>
          </div>
        ))}
        <div className="st-map" aria-hidden="true">
          <svg className="st-map-img" viewBox="0 0 72 72" aria-hidden="true">
            <circle cx="36" cy="36" r="34" fill="#15171b" />
            <circle cx="36" cy="36" r="30" fill="#24272d" />
            <circle cx="36" cy="36" r="21" fill="#c9cdd3" />
            <circle cx="36" cy="36" r="17" fill="#9ea4ad" />
            {[0, 72, 144, 216, 288].map((a) => (
              <path
                key={a}
                transform={`rotate(${a} 36 36)`}
                d="M33 22 L36 26 L39 22 L40 30 L36 34 L32 30 Z"
                fill="#e5e7ea"
              />
            ))}
            <circle cx="36" cy="36" r="6" fill="#ee2b2d" />
            <circle cx="36" cy="36" r="2" fill="#15171b" />
          </svg>
          <span className="st-map-text">
            Honduras
            <br />
            en movimiento
          </span>
        </div>
      </div>
    </section>
  );
}
