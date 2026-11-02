/* Catalog — Light theme: gray-50 bg, white cards, red accents */
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { CATALOG_TABS } from "@/lib/data";
import WhatsAppLink from "./WhatsAppLink";

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = CATALOG_TABS[activeTab];

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Catálogo de <span className="text-[#ee2b2d]">autopartes japonesas</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Portafolio completo de repuestos japoneses organizados por categoría, ideales para distribuidores que buscan calidad y durabilidad.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {CATALOG_TABS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                i === activeTab
                  ? "bg-[#ee2b2d] text-white shadow-sm"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center reveal">
          {/* Padding para que la pieza respire y no toque los bordes de la tarjeta */}
          <div className="relative rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm group p-10 flex items-center justify-center aspect-[4/3]">
            <img
              key={tab.id}
              src={tab.image}
              alt={`Autopartes japonesas de ${tab.title} — Japan HN`}
              loading="lazy"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">{tab.title}</h3>
            <div className="w-12 h-1 bg-[#ee2b2d] rounded mb-4" />
            <p className="text-gray-500 mb-6 leading-relaxed">{tab.desc}</p>
            <ul className="space-y-3 mb-8">
              {tab.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#ee2b2d] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppLink message={`Hola, me interesa cotizar productos de ${tab.title}`}>
              Cotizar {tab.title.toLowerCase()}
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
