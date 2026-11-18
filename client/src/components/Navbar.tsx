/* Navbar — cabecera sticky blanca con navegación y botón "Cotizar ahora" (clases jh-* de la referencia) */
import { useState } from "react";
import { useLocation } from "wouter";
import { IMAGES } from "@/lib/data";
import { whatsappUrl } from "./WhatsAppLink";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Catálogo", href: "/#catalogo" },
  { label: "Marcas", href: "/#marcas" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="jh-header">
      <div className="jh-container jh-nav-wrap">
        <a className="jh-brand" href="/" aria-label="Japan HN, inicio">
          <img src={IMAGES.logoJapanHn} alt="Japan HN" width={533} height={246} />
        </a>

        <nav className={`jh-nav ${isOpen ? "is-open" : ""}`} aria-label="Navegación Japan HN">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={location === item.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="jh-quote"
          href={whatsappUrl("Hola, quiero cotizar repuestos japoneses.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar ahora
        </a>

        <button
          className="jh-menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
