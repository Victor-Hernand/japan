/* Navbar — Light theme: white bg, dark text, red CTA */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { IMAGES } from "@/lib/data";
import SocialIcons from "./SocialIcons";
import WhatsAppLink from "./WhatsAppLink";

const NAV_ITEMS = ["Inicio", "Catálogo", "Nosotros", "Marcas", "Sectores", "Contacto"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else if (id === "Inicio") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="container flex items-center justify-between py-3">
        {/* Logo */}
        <button onClick={() => scrollTo("Inicio")} className="flex items-center" aria-label="Japan HN — Inicio">
          <img
            src={IMAGES.logoJapanHn}
            alt="Japan HN"
            className="h-10 lg:h-12 w-auto"
            width={533}
            height={246}
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item === "Catálogo" ? "catalogo" : item.toLowerCase())}
              className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Redes + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <SocialIcons variant="navbar" />
          <span className="w-px h-5 bg-gray-200" />
          <WhatsAppLink className="px-5 py-2.5 font-semibold shadow-sm">
            Cotizar ahora
          </WhatsAppLink>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700 p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === "Catálogo" ? "catalogo" : item.toLowerCase())}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-colors font-medium"
              >
                {item}
              </button>
            ))}
            <WhatsAppLink className="flex justify-center px-5 py-3 font-semibold mt-3 shadow-none">
              Cotiza por WhatsApp
            </WhatsAppLink>
            <div className="flex items-center justify-center pt-3">
              <SocialIcons variant="navbar" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
