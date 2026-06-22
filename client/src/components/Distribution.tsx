/* Distribution — Light theme: white bg, cards with borders */
import { MapPin, Truck, Clock, MessageCircle, ShieldCheck, Headphones, PackageCheck } from "lucide-react";
import { CITIES, WHATSAPP_NUMBER, BODEGA_IMAGES } from "@/lib/data";

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
              Distribución nacional de repuestos en <span className="text-red-600 italic">Honduras</span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Nuestra red de distribución cubre las principales ciudades de Honduras, garantizando entregas rápidas, seguras y confiables para talleres, flotas y distribuidores.
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
              <h3 className="text-xl font-black text-gray-900 mb-3">Envíos a todo el país</h3>
              <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
                Realizamos envíos a todas las ciudades de Honduras mediante operadores confiables. Consulta tiempos de entrega y condiciones según tu ubicación.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
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

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>

        {/* Bodega photo mosaic */}
        <div className="mt-16 reveal">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
              Nuestra Bodega
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              Inventario y equipo <span className="text-red-600 italic">listos para ti</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:[grid-template-rows:repeat(2,minmax(0,1fr))]">
            {BODEGA_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-xl overflow-hidden group border border-gray-200 ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 reveal">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span>Envíos seguros</span>
          </div>
          <span className="text-gray-300">·</span>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-red-600" />
            <span>Atención personalizada</span>
          </div>
          <span className="text-gray-300">·</span>
          <div className="flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-red-600" />
            <span>Seguimiento de pedidos</span>
          </div>
        </div>
      </div>
    </section>
  );
}
