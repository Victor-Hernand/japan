/* Footer — Light theme: dark footer for visual anchoring */
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { BRANDS, PHONE_DISPLAY, PHONE_TEL, EMAIL, WHATSAPP_NUMBER } from "@/lib/data";

const NAV_ITEMS = ["Catálogo", "Marcas", "Nosotros", "Contacto", "Inicio"];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (id === "Inicio") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-white">JAPAN</span>
              <span className="text-2xl font-black text-red-500">HN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Distribución B2B de repuestos japoneses en Honduras
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item === "Catálogo" ? "catalogo" : item.toLowerCase())}
                    className="text-gray-400 text-sm hover:text-red-400 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Marcas</h4>
            <ul className="space-y-2">
              {BRANDS.map((brand) => (
                <li key={brand.name}>
                  <span className="text-gray-400 text-sm">{brand.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Barrio Guacerique, Bulevar Comunidad Europea
                  <br />
                  Frente a Plaza Aire Frío, Tegucigalpa
                </span>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors">
                  <Phone className="w-4 h-4 text-red-500" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-400 transition-colors">
                  <Mail className="w-4 h-4 text-red-500" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Discreet CTA */}
        <div className="border-t border-gray-800 pt-6 mb-4 text-center">
          <p className="text-gray-400 text-sm">
            ¿Buscas un proveedor confiable?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              Cotiza por WhatsApp
            </a>
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Japan HN — Grupo CAP Honduras. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Distribución B2B de repuestos japoneses en Honduras
          </p>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-all z-50"
        aria-label="Volver arriba"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
