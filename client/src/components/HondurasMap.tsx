import { useState } from "react";
import { MapPin } from "lucide-react";

const CITIES = [
  { name: "Tegucigalpa", desc: "Entregas rápidas y cobertura completa", icon: "● Capital" },
  { name: "San Pedro Sula", desc: "Distribución eficiente zona norte", icon: "● Zona Norte" },
  { name: "La Ceiba", desc: "Cobertura costa atlántica", icon: "● Atlántica" },
  { name: "Comayagua", desc: "Entregas centro del país", icon: "● Centro" },
];

export default function HondurasMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200">
      {/* Map Image */}
      <div className="relative">
        <img
          src="/images/mapa-honduras.jpg"
          alt="Mapa de Honduras con cobertura de distribución"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* City info below map */}
      <div className="px-4 py-4 bg-white border-t border-gray-100">
        {activeCity ? (
          <>
            {CITIES.filter((c) => c.name === activeCity).map((city) => (
              <div key={city.name} className="animate-fadeIn">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{city.name}</h4>
                    <p className="text-gray-600 text-xs mt-1">{city.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-gray-500 text-xs text-center">
            Haz clic en las ciudades para ver detalles de cobertura
          </p>
        )}

        {/* City buttons for interaction */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {CITIES.map((city) => (
            <button
              key={city.name}
              onClick={() => setActiveCity(activeCity === city.name ? null : city.name)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCity === city.name
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-red-100"
              }`}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
