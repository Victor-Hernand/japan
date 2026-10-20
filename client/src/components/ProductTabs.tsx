/* ProductTabs — botonera para ir a cada grupo de productos en su propia página */
import { Link, useLocation } from "wouter";

const TABS = [
  { label: "Líneas de producto", path: "/productos/lineas" },
  { label: "Productos Estrellas", path: "/productos/destacados" },
  { label: "Rótulas y terminales", path: "/productos/galeria" },
];

export default function ProductTabs() {
  const [location] = useLocation();

  return (
    <nav className="flex flex-wrap justify-center gap-3" aria-label="Grupos de productos">
      {TABS.map((tab) => {
        const active = location === tab.path;
        return (
          <Link
            key={tab.path}
            href={tab.path}
            aria-current={active ? "page" : undefined}
            className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all duration-300 hover:-translate-y-0.5 ${
              active
                ? "bg-white text-red-600 border-white shadow-lg shadow-black/30"
                : "bg-red-600 text-white border-red-600 shadow-sm hover:bg-red-700 hover:border-red-700 hover:shadow-md"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
