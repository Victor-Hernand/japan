/* Distribution — Light theme: white bg, cards with borders */
import { MapPin, Truck, Clock } from "lucide-react";
import { CITIES } from "@/lib/data";

export default function Distribution() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="reveal-left">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
              Cobertura Nacional
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Distribución en <span className="text-red-600 italic">Honduras</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Nuestra red de distribución cubre las principales ciudades de Honduras, garantizando entregas rápidas y eficientes para tu negocio.
            </p>

            <div className="space-y-3">
              {CITIES.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-red-200 transition-all"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{city.name}</h4>
                    <p className="text-gray-500 text-xs">{city.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="reveal-right">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">Envíos a Todo el País</h3>
              <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
                Realizamos envíos a todas las ciudades de Honduras. Consulta tiempos de entrega y condiciones para tu zona.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-2xl font-black text-red-600">24h</span>
                  </div>
                  <span className="text-xs font-medium text-gray-500">Tegucigalpa</span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="text-2xl font-black text-red-600">48h</span>
                  </div>
                  <span className="text-xs font-medium text-gray-500">Resto del país</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
