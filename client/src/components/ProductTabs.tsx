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
            className={`px-6 py-3 rounded-full text-sm font-bold border transition-all duration-300 hover:-translate-y-0.5 ${
              active
                ? "bg-white text-[#ee2b2d] border-white shadow-sm"
                : "bg-[#ee2b2d] text-white border-[#ee2b2d] shadow-sm hover:bg-[#c92224] hover:border-[#c92224] hover:shadow-md"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
