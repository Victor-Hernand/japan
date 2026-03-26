/* FeaturedProducts — Light theme: white bg, cards with border, red badges */
import { ArrowRight } from "lucide-react";
import { FEATURED_PRODUCTS, WHATSAPP_NUMBER } from "@/lib/data";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Destacados
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Productos <span className="text-red-600 italic">Estrella</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Los productos más solicitados por nuestros clientes B2B, respaldados por marcas de clase mundial.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED_PRODUCTS.map((product, i) => (
            <div
              key={product.title}
              className="reveal group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-red-200 transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge */}
                <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded">
                  {product.badge}
                </span>
                {/* Brand */}
                <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-2.5 py-1 rounded">
                  {product.brand}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{product.desc}</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola, me interesa cotizar: ${product.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-600 text-sm font-bold hover:gap-3 transition-all"
                >
                  Solicitar Cotización
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
