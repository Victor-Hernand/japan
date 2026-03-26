/* Gallery — Light theme: gray-50 bg, white card overlays */
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Galería
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Nuestros <span className="text-red-600 italic">Productos</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Fotografías reales de nuestro catálogo de repuestos japoneses de calidad superior.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className="reveal relative rounded-lg overflow-hidden group cursor-pointer aspect-[3/4] border border-gray-200"
              style={{ transitionDelay: `${(i % 4) * 50}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-semibold">
                  Ver Detalle
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
