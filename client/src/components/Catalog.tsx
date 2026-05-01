/* Catalog — Light theme: gray-50 bg, white cards, red accents */
import { useState } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import { CATALOG_TABS, WHATSAPP_NUMBER } from "@/lib/data";

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = CATALOG_TABS[activeTab];

  return (
    <section id="catalogo" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Nuestros Productos
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Catálogo de <span className="text-red-600 italic">autopartes japonesas</span>
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
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center reveal">
          <div className="relative rounded-xl overflow-hidden group">
            <img
              src={tab.image}
              alt={tab.title}
              className="w-full h-[300px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-sm font-bold text-gray-900">{tab.title}</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">{tab.title}</h3>
            <div className="w-12 h-1 bg-red-600 rounded mb-4" />
            <p className="text-gray-500 mb-6 leading-relaxed">{tab.desc}</p>
            <ul className="space-y-3 mb-8">
              {tab.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, me interesa cotizar productos de ${tab.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              COTIZAR {tab.title.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
