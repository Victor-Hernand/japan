/* AboutUs — Light theme: white bg, cards with borders, red icons */
import { Shield, Heart, Eye, Lightbulb, Star, Package, Quote, Target, Compass, History, Wrench } from "lucide-react";
import { VALUES, IMAGES, ABOUT_PARAGRAPHS, HISTORY_PARAGRAPHS, MISSION, VISION, KEY_MESSAGE } from "@/lib/data";
import WhatsAppLink from "./WhatsAppLink";

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
            ¿Por qué elegir <span className="text-red-600 italic">Japan HN</span> como tu proveedor de repuestos japoneses?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            {KEY_MESSAGE}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Image + Import badge */}
          <div className="reveal-left">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={IMAGES.aboutUs}
                alt="Asesor de Japan HN atendiendo a un cliente por teléfono"
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
            </div>
            <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Importadores directos</h4>
                <p className="text-gray-500 text-sm">Relación directa con fabricantes japoneses que nos permite garantizar repuestos originales, calidad certificada y precios competitivos para el mercado hondureño.</p>
              </div>
            </div>

            {/* Empaque de pedidos — imagen recortada con animación */}
            <div className="relative mt-10 flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-red-600/10 animate-pulse-soft" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-red-600/15" />
              <img
                src={IMAGES.aboutPacking}
                alt="Colaborador de Japan HN empacando repuestos 555 Made in Japan"
                loading="lazy"
                width={433}
                height={577}
                className="relative w-64 sm:w-80 h-auto animate-float [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
              />
              <span className="absolute bottom-6 right-4 sm:right-12 bg-white border border-gray-200 shadow-lg rounded-full px-4 py-2 text-xs font-bold text-gray-900 animate-float-delayed">
                <span className="text-red-600">●</span> Pedidos preparados con cuidado
              </span>
            </div>
          </div>

          {/* Right: Sobre Nosotros + Valores */}
          <div className="reveal-right">
            <h3 className="text-2xl font-black text-gray-900 mb-4">¿Quiénes somos?</h3>
            <div className="space-y-4 mb-10">
              {ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <History className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">Nuestra Historia</h3>
            </div>
            <div className="space-y-4 mb-10">
              {HISTORY_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

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

        {/* Misión y Visión */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 reveal">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-red-200 transition-colors">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Misión</h3>
            <p className="text-gray-600 leading-relaxed">{MISSION}</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-red-200 transition-colors">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
              <Compass className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">Visión</h3>
            <p className="text-gray-600 leading-relaxed">{VISION}</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 reveal relative">
          <div className="hidden lg:block absolute -left-28 top-1/2 -translate-y-1/2">
            <Wrench className="w-20 h-20 text-red-600/50 animate-wrench-spin drop-shadow-lg" />
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              Nuestros <span className="text-red-600 italic">clientes</span>
            </h3>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Nos enorgullece recibir comentarios de nuestros clientes como el de Carlos Sagastume, de Inversiones A y M, quienes destacan no solo la calidad de nuestros productos, sino también la atención personalizada, eficiencia y precios competitivos que ofrecemos en cada compra.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto relative">
            <Quote className="w-10 h-10 text-red-200 absolute top-6 left-6" />
            <blockquote className="text-gray-600 italic leading-relaxed pl-8 text-sm lg:text-base">
              "La atención recibida durante todo el proceso de compra fue excelente, destacando la atención personalizada y la facilidad con la que se gestionaron mis pedidos. La calidad y desempeño de los productos adquiridos superó mis expectativas, y el proceso de compra resultó ágil y muy sencillo. En general, considero que JAPAN HN es una empresa confiable y eficiente, que entrega los productos rápidamente, sin presionar con los precios, y con un servicio de atención de primera calidad. Definitivamente, la recomiendo."
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
            <div className="mt-6 pl-8">
              <WhatsAppLink variant="secondary" message="Hola, quiero conocer más sobre Japan HN.">
                Hablar con un asesor
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
