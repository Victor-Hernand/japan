/* Hero — Light theme: light overlay on image, dark text */
import { ArrowRight, ChevronDown } from "lucide-react";
import { IMAGES, SLOGAN } from "@/lib/data";
import WhatsAppLink from "./WhatsAppLink";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      {/* Background image: completa a la derecha en escritorio, velada en móvil */}
      <div
        className="absolute inset-0 lg:left-auto lg:w-[62%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGES.heroBg})` }}
      />
      <div className="absolute inset-0 bg-white/85 lg:bg-transparent lg:bg-gradient-to-r lg:from-white lg:from-40% lg:via-white/60 lg:via-55% lg:to-transparent lg:to-75%" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-red-600 uppercase">
              Distribuidores B2B especializados en repuestos japoneses
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 uppercase">
            <span className="text-gray-900">Tecnología japonesa</span>
            <br />
            <span className="text-red-600 italic">que impulsa tu rentabilidad</span>
          </h1>

          <p className="text-gray-900 text-xl font-bold mb-4">
            {SLOGAN}
          </p>

          <p className="text-gray-600 text-lg max-w-lg mb-8 leading-relaxed">
            Repuestos japoneses de alta calidad diseñados para mayor durabilidad,
            mejor desempeño y menor costo operativo. Trabajamos con marcas líderes
            a nivel internacional.
          </p>

          <div className="flex flex-wrap gap-4">
            <WhatsAppLink
              className="px-7 py-3.5 hover:shadow-red-600/30"
              message="Hola, quiero cotizar repuestos japoneses."
            >
              Cotiza por WhatsApp
            </WhatsAppLink>
            <button
              onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-bold text-sm hover:border-red-600 hover:text-red-600 transition-all bg-white/80"
            >
              Ver catálogo de productos
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
