/* Testimonial — Nuestros clientes (testimonio destacado) */
import { Quote, Wrench } from "lucide-react";
import WhatsAppLink from "./WhatsAppLink";

export default function Testimonial() {
  return (
    <section className="pt-0 pb-20 bg-white">
      <div className="container">
        <div className="reveal relative">
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
            <blockquote className="text-gray-600 italic leading-relaxed pl-8 text-sm lg:text-base text-justify">
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
