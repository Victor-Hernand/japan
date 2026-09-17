/* Footer — Light theme: dark footer for visual anchoring */
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BRANDS, PHONE_DISPLAY, PHONE_TEL, EMAIL, IMAGES, SLOGAN, SCHEDULE } from "@/lib/data";
import SocialIcons from "./SocialIcons";
import { whatsappUrl, WhatsAppIcon } from "./WhatsAppLink";

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
            <img
              src={IMAGES.logoJapanHn}
              alt="Japan HN"
              className="h-14 w-auto mb-4"
              width={533}
              height={246}
            />
            <p className="text-white text-sm font-semibold mb-1">{SLOGAN}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Distribución B2B de repuestos japoneses en Honduras
            </p>
            <SocialIcons variant="footer" />
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
              <li className="flex items-start gap-2 text-sm">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  {SCHEDULE.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Discreet CTA */}
        <div className="border-t border-gray-800 pt-6 mb-4 text-center">
          <p className="text-gray-400 text-sm">
            ¿Buscas un proveedor confiable?{" "}
            <a
              href={whatsappUrl("Hola, busco un proveedor de repuestos japoneses.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-red-400 hover:text-red-300 font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
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
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
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
