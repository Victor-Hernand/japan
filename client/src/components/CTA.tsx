/* CTA — Light theme: image bg with light overlay, dark text */
import { MessageCircle, ArrowRight } from "lucide-react";
import { IMAGES, WHATSAPP_NUMBER } from "@/lib/data";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.ctaBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />

      <div className="container relative z-10 text-center">
        <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
          Impulsa tu negocio con un proveedor confiable
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
          ¿Listo para crecer con<br />
          <span className="text-red-600 italic">repuestos japoneses confiables</span>?
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-4">
          Únete a los distribuidores que ya confían en Japan HN como su socio estratégico para repuestos japoneses confiables y rentables.
        </p>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8">
          Atención B2B · Envíos a nivel nacional · Asesoría experta
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 text-white px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            Cotiza ahora por WhatsApp
          </a>
          <button
            onClick={() => document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-7 py-3.5 rounded-lg font-bold text-sm hover:border-red-600 hover:text-red-600 transition-all bg-white/80"
          >
            Ver catálogo de productos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
