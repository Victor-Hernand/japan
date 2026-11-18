/* AboutUs — Quiénes somos: historia con foto, misión y visión, valores seleccionables
 * (clases jh-* de la referencia) */
import "@/styles/story-image.css";
import { useState } from "react";
import { Shield, Heart, Eye, Lightbulb, Star } from "lucide-react";
import { VALUES, IMAGES, ABOUT_PARAGRAPHS, HISTORY_PARAGRAPHS, MISSION, VISION } from "@/lib/data";

const VALUE_ICONS = [Shield, Heart, Eye, Lightbulb, Star];

export default function AboutUs() {
  // Valor seleccionado desde la órbita de botones (null = ninguno)
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <>
      {/* Historia */}
      <section className="jh-section jh-section-flush-bottom">
        <div className="jh-container jh-story-grid">
          <div className="jh-story-image">
            <img src={IMAGES.aboutUs} alt="Equipo de Japan HN en su centro de distribución" loading="lazy" />
            <div className="jh-image-caption">Japan HN · Grupo CAP Honduras</div>
          </div>

          <div className="jh-story-copy">
            <p>{ABOUT_PARAGRAPHS[0]}</p>
            <p>{ABOUT_PARAGRAPHS[1]}</p>
            {HISTORY_PARAGRAPHS.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <div className="jh-history">
              <article className="jh-history-item">
                <strong>Nuestra especialidad</strong>
                <p>Distribución B2B de repuestos japoneses para negocios del sector automotriz.</p>
              </article>
              <article className="jh-history-item">
                <strong>Nuestro respaldo</strong>
                <p>Calidad, precisión y relaciones duraderas con clientes y socios comerciales.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, visión y valores */}
      <section className="jh-section jh-mission">
        <div className="jh-container">
          <div className="jh-section-head">
            <div>
              <p className="jh-section-kicker">Nuestro propósito</p>
              <h2>
                Una empresa con <span>dirección y valores.</span>
              </h2>
            </div>
            <p>Trabajamos para crear confianza y valor sostenido para las empresas del sector automotriz.</p>
          </div>

          <div className="jh-mission-grid">
            <article className="jh-mission-card">
              <h3>Misión</h3>
              <p>{MISSION}</p>
            </article>
            <article className="jh-mission-card">
              <h3>Visión</h3>
              <p>{VISION}</p>
            </article>
          </div>

          {/* Nuestros valores en órbita alrededor de la imagen de empaque */}
          <div className="mt-10 w-full flex flex-col items-center">
            <p className="jh-section-kicker text-center">Principios Japan HN</p>
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Nuestros Valores</h3>
            <div className="relative mx-auto w-80 h-80 sm:w-[28rem] sm:h-[28rem]">
              <div className="absolute inset-0 rounded-full bg-gray-100 animate-pulse-soft" />
              <div className="absolute inset-[18%] rounded-full bg-gray-200" />
              <img
                src={IMAGES.aboutPacking}
                alt="Colaborador de Japan HN empacando repuestos 555 Made in Japan"
                loading="lazy"
                width={433}
                height={577}
                className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[72%] h-auto animate-float [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
              />
              {VALUES.map((val, i) => {
                const Icon = VALUE_ICONS[i];
                const angle = ((-90 + i * 72) * Math.PI) / 180;
                const radius = 49;
                const active = activeValue === i;
                return (
                  <button
                    key={val.title}
                    type="button"
                    aria-label={val.title}
                    aria-pressed={active}
                    onClick={() => setActiveValue(active ? null : i)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border shadow-md transition-all duration-300 hover:scale-110 ${
                      active ? "bg-[#ee2b2d] border-[#ee2b2d] text-white" : "bg-white border-red-200 text-[#ee2b2d] hover:border-red-400"
                    }`}
                    style={{
                      left: `${50 + radius * Math.cos(angle)}%`,
                      top: `${50 + radius * Math.sin(angle)}%`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                );
              })}
            </div>

            <div className="mt-8 min-h-[7rem] w-full">
              {activeValue !== null ? (
                <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">{VALUES[activeValue].title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{VALUES[activeValue].desc}</p>
                </div>
              ) : (
                <p className="text-center text-gray-400 text-sm">Selecciona un valor para conocerlo.</p>
              )}
            </div>

            <div className="mt-2 flex justify-center">
              <span className="bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 text-xs font-bold text-gray-900">
                <span className="text-[#ee2b2d]">●</span> Pedidos preparados con cuidado
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
