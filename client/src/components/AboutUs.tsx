/* AboutUs — Light theme: white bg, cards with borders, red icons */
import { useState } from "react";
import { Shield, Heart, Eye, Lightbulb, Star, Target, Compass, History } from "lucide-react";
import { VALUES, IMAGES, ABOUT_PARAGRAPHS, HISTORY_PARAGRAPHS, MISSION, VISION } from "@/lib/data";
import WhatsAppLink from "./WhatsAppLink";

const VALUE_ICONS = [Shield, Heart, Eye, Lightbulb, Star];

export default function AboutUs() {
  // Valor seleccionado desde la órbita de botones (null = ninguno)
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <section id="nosotros" className="pt-12 pb-20 bg-white">
      <div className="container">
        <div className="flex flex-col items-center gap-16">
          <div className="w-full grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-right w-full">
            <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">¿Quiénes somos?</h3>
            <div className="space-y-4 mb-10">
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <History className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Nuestra Historia</h3>
            </div>
            <div className="space-y-4 mb-10">
              {HISTORY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="reveal-left relative w-full max-w-md justify-self-center rounded-xl overflow-hidden">
            <img
              src={IMAGES.aboutUs}
              alt="Asesor de Japan HN atendiendo a un cliente por teléfono"
              className="w-full h-[350px] lg:h-[450px] object-cover"
            />
          </div>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-6 reveal">
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 hover:border-red-600/40 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">Misión</h3>
              <p className="text-gray-300 leading-relaxed">{MISSION}</p>
            </div>
            <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 hover:border-red-600/40 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">Visión</h3>
              <p className="text-gray-300 leading-relaxed">{VISION}</p>
            </div>
          </div>

          {/* Nuestros valores en órbita alrededor de la imagen de empaque */}
          <div className="mt-10 w-full flex flex-col items-center">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">Nuestros Valores</h3>
            <div className="relative mx-auto w-80 h-80 sm:w-[28rem] sm:h-[28rem]">
              <div className="absolute inset-0 rounded-full bg-red-600/10 animate-pulse-soft" />
              <div className="absolute inset-[18%] rounded-full bg-red-600/15" />
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
                      active ? "bg-red-600 border-red-600 text-white" : "bg-white border-red-200 text-red-600 hover:border-red-400"
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

            <div className="mt-8 min-h-[7rem]">
              {activeValue !== null ? (
                <div className="max-w-md mx-auto bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
                  <h4 className="font-bold text-gray-900 mb-1">{VALUES[activeValue].title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{VALUES[activeValue].desc}</p>
                </div>
              ) : (
                <p className="text-center text-gray-400 text-sm">Selecciona un valor para conocerlo.</p>
              )}
            </div>

            <div className="mt-2 flex justify-center">
              <span className="bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2 text-xs font-bold text-gray-900">
                <span className="text-red-600">●</span> Pedidos preparados con cuidado
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
