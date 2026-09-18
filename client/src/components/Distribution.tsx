/* Distribution — Light theme: white bg, cards with borders */
import { MapPin, Truck, Clock, ShieldCheck, Headphones, PackageCheck } from "lucide-react";
import { CITIES, BODEGA_IMAGES } from "@/lib/data";
import WhatsAppLink from "./WhatsAppLink";
import HondurasMap from "./HondurasMap";

export default function Distribution() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div className="md:col-span-1 lg:col-span-1 reveal-left">
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
              Cobertura Nacional
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Distribución nacional de repuestos en <span className="text-red-600 italic">Honduras</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-8 leading-relaxed">
              Nuestra red de distribución cubre las principales ciudades de Honduras, garantizando entregas rápidas, seguras y confiables para talleres, flotas y distribuidores.
            </p>

            <div className="space-y-3">
              {CITIES.map((city) => (
                <div
                  key={city.name}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-red-200 transition-all"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 md:w-5 h-4 md:h-5 text-red-600" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 text-xs md:text-sm truncate">{city.name}</h4>
                    <p className="text-gray-500 text-xs line-clamp-1">{city.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-1 lg:col-span-2 reveal-right space-y-4 md:space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-3 md:p-4">
              <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <HondurasMap />
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 lg:p-12 text-center">
              <div className="w-16 md:w-20 h-16 md:h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-8">
                <Truck className="w-8 md:w-10 h-8 md:h-10 text-red-600" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-2 md:mb-4">Tiempos de Entrega</h3>
              <p className="text-gray-500 text-xs md:text-sm lg:text-base mb-4 md:mb-8">
                Entregas rápidas y confiables a todas las ciudades de Honduras.
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-6 mb-4 md:mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-5 lg:p-7">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-3">
                    <Clock className="w-4 md:w-5 h-4 md:h-5 text-red-600" />
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-red-600">24h</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-500">Tegucigalpa</span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-3 md:p-5 lg:p-7">
                  <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-3">
                    <Clock className="w-4 md:w-5 h-4 md:h-5 text-red-600" />
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-red-600">48h</span>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-500">Resto del país</span>
                </div>
              </div>

              <WhatsAppLink
                variant="secondary"
                message="Hola, quiero consultar sobre cobertura y tiempos de entrega."
              >
                Consultar cobertura y tiempos de entrega
              </WhatsAppLink>
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
