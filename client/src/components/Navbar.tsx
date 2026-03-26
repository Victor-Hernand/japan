/* Navbar — Light theme: white bg, dark text, red CTA */
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

const NAV_ITEMS = ["Inicio", "Catálogo", "Nosotros", "Marcas", "Contacto"];

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
        <button onClick={() => scrollTo("Inicio")} className="flex items-center gap-0">
          <span className="text-2xl font-black tracking-tight text-gray-900">JAPAN</span>
          <span className="text-2xl font-black tracking-tight text-red-600 ml-1">HN</span>
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

        {/* CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          COTIZAR
        </a>

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
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg text-sm font-semibold mt-3"
            >
              <MessageCircle className="w-4 h-4" />
              COTIZAR POR WHATSAPP
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
