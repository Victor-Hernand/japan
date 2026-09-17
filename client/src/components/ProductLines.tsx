/* ProductLines — Light theme: white bg, cards with product images, red accents */
import { useState } from "react";
import { Images, ZoomIn } from "lucide-react";
import { IMAGES, PRODUCT_LINES } from "@/lib/data";
import Lightbox from "./Lightbox";
import WhatsAppLink from "./WhatsAppLink";

/** Todas las imágenes en una sola lista para navegar entre productos en el visor */
const VISIBLE_PRODUCT_LINES = PRODUCT_LINES.filter(
  (product) => !["Cremallera", "Master de freno"].includes(product.title)
);
const ALL_IMAGES = VISIBLE_PRODUCT_LINES.flatMap((p) => p.images);

export default function ProductLines() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Líneas de producto
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Nuestros <span className="text-red-600 italic">productos</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Componentes de alto desempeño que combinan precisión, innovación y durabilidad para tu negocio.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISIBLE_PRODUCT_LINES.map((product, i) => {
            const first = product.images[0];
            const startIndex = first ? ALL_IMAGES.indexOf(first) : -1;
            return (
              <div
                key={product.title}
                className="reveal flex flex-col bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 hover:shadow-xl transition-all duration-300 group"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                {/* Image */}
                {first ? (
                  <button
                    type="button"
                    onClick={() => setOpenIndex(startIndex)}
                    className="relative aspect-[4/5] overflow-hidden bg-white cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600"
                    aria-label={`Ampliar imagen: ${product.title}`}
                  >
                    <img
                      src={first.src}
                      alt={first.alt}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow" />
                    </span>
                    {product.images.length > 1 && (
                      <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                        <Images className="w-3.5 h-3.5" />
                        {product.images.length}
                      </span>
                    )}
                  </button>
                ) : (
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-4">
                    <img src={IMAGES.logoJapanHn} alt="" className="w-32 opacity-80" width={533} height={246} />
                    <span className="text-gray-500 text-sm font-semibold">{product.title}</span>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{product.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{product.desc}</p>
                  <WhatsAppLink
                    className="justify-center w-full py-2.5 px-0 shadow-none"
                    message={`Hola, me interesa cotizar: ${product.title}`}
                  >
                    Cotizar {product.title.toLowerCase()}
                  </WhatsAppLink>
                </div>
              </div>
            );
          })}
        </div>

        <Lightbox images={ALL_IMAGES} index={openIndex} onIndexChange={setOpenIndex} />
      </div>
    </section>
  );
}
