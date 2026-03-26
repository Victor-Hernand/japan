/* Hero — Light theme: light overlay on image, dark text */
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { IMAGES, WHATSAPP_NUMBER } from "@/lib/data";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* Background image with light overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/40" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
              Distribuidores B2B de Repuestos Japoneses
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6">
            <span className="text-gray-900">Tecnología</span>
            <br />
            <span className="text-red-600 italic">en Cada Pieza</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-lg mb-8 leading-relaxed">
            Repuestos japoneses que combinan precisión, innovación y durabilidad.
            Impulsamos tu negocio con marcas líderes a nivel internacional.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 hover:shadow-red-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              COTIZAR POR WHATSAPP
            </a>
            <button
              onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-bold text-sm hover:border-red-600 hover:text-red-600 transition-all bg-white/80"
            >
              VER CATÁLOGO
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
