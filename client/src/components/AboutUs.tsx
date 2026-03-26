/* AboutUs — Light theme: white bg, cards with borders, red icons */
import { Shield, Heart, Eye, Lightbulb, Star, Package, Quote } from "lucide-react";
import { VALUES, IMAGES } from "@/lib/data";

const VALUE_ICONS = [Shield, Heart, Eye, Lightbulb, Star];

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Nosotros
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            ¿Por qué <span className="text-red-600 italic">Japan HN</span>?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Somos una empresa del Grupo CAP Honduras, fundada en 2025, dedicada a la distribución B2B de repuestos japoneses de calidad superior para el mercado hondureño.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image + Import badge */}
          <div className="reveal-left">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={IMAGES.warehouse}
                alt="Almacén Japan HN"
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
            </div>
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Importadores Directos</h4>
                <p className="text-gray-500 text-sm">Conexión directa con fábricas japonesas para garantizar calidad y precios competitivos.</p>
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="reveal-right">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Nuestros Valores</h3>
            <div className="space-y-3">
              {VALUES.map((val, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <div
                    key={val.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all group"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{val.title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 reveal">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto relative">
            <Quote className="w-10 h-10 text-red-200 absolute top-6 left-6" />
            <blockquote className="text-gray-600 italic leading-relaxed pl-8 text-sm lg:text-base">
              "La atención recibida durante todo el proceso de compra fue excelente, destacando la atención personalizada y la facilidad con la que se gestionaron mis pedidos. La calidad y desempeño de los productos adquiridos superó mis expectativas. Considero que JAPAN HN es una empresa confiable y eficiente, que entrega los productos rápidamente, sin presionar con los precios, y con un servicio de atención de primera calidad. Definitivamente, la recomiendo."
            </blockquote>
            <div className="flex items-center gap-3 mt-6 pl-8">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Carlos Sagastume</div>
                <div className="text-gray-500 text-xs">Inversiones A y M</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
