/* Contact — Dark theme compacto: tarjetas de contacto, mapa y formulario de cotización */
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, BriefcaseBusiness, Linkedin, ExternalLink } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS, SCHEDULE } from "@/lib/data";
import { whatsappUrl, WhatsAppIcon } from "./WhatsAppLink";

const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;

const INFO = [
  { icon: MapPin, title: "Dirección", value: `${ADDRESS}, Tegucigalpa` },
  { icon: Phone, title: "Teléfono / WhatsApp", value: PHONE_DISPLAY, href: `tel:${PHONE_TEL}` },
  { icon: Mail, title: "Correo electrónico", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Clock, title: "Horario de atención", value: SCHEDULE.join(" · ") },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}.\n\nEmail: ${form.email}\nTeléfono: ${form.phone}\n\n${form.message}`;
    window.open(whatsappUrl(text), "_blank");
  };

  const inputClass =
    "w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a02a]/30 focus:border-[#d4a02a]/60 transition-all";

  return (
    <section id="contacto" className="pt-12 pb-0 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Contáctanos</h2>
          <div className="w-16 h-px bg-[#d4a02a] mx-auto mt-3" />
          <p className="text-gray-600 text-sm mt-4 max-w-xl mx-auto">
            Estamos listos para atender distribuidores que buscan un proveedor confiable. Contáctanos para cotizaciones, pedidos y asesoría personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 reveal">
          {/* Info */}
          <div className="space-y-3">
            {INFO.map(({ icon: Icon, title, value, href }) => (
              <div key={title} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                <div className="w-9 h-9 bg-[#f7efd9] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#b8861f]" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
                  {href ? (
                    <a href={href} className="text-gray-600 text-sm hover:text-[#b8861f] transition-colors">{value}</a>
                  ) : (
                    <p className="text-gray-600 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 bg-green-500 text-white rounded-xl px-6 py-5 text-center shadow-lg shadow-green-500/25 hover:bg-green-600 hover:-translate-y-0.5 transition-all"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15">
                <WhatsAppIcon className="w-5 h-5" />
              </span>
              <h4 className="font-bold text-base">WhatsApp directo para cotizaciones</h4>
              <p className="text-green-50 text-xs">Respuesta inmediata</p>
            </a>
          </div>

          {/* Mapa */}
          <div className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm flex flex-col">
            <iframe
              title="Ubicación de Japan HN"
              src={MAP_SRC}
              className="w-full h-64 lg:h-full min-h-[260px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="flex items-center gap-3 px-4 py-3 border-t border-gray-100">
              <MapPin className="w-4 h-4 text-[#b8861f] flex-shrink-0" />
              <p className="text-gray-600 text-xs">Oficina principal y punto de atención comercial.</p>
            </div>
          </div>
        </div>

        {/* Trabajar con nosotros */}
        <div className="mt-10 rounded-xl bg-[#111827] p-5 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <div className="flex items-center gap-2 text-white text-sm font-bold">
            <BriefcaseBusiness className="w-4 h-4 text-[#d4a02a]" />
            ¿Deseas trabajar con nosotros?
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://recruit.capgrupo.com/aplicar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-bold text-[#111827] transition-colors hover:bg-gray-100"
            >
              Aplicar ahora
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/caphn/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/60 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-white/10"
            >
              <Linkedin className="w-3.5 h-3.5" />
              Ver LinkedIn
            </a>
          </div>
        </div>

        {/* Formulario de cotización */}
        <div className="mt-10 max-w-2xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-5 lg:p-6 reveal">
          <h3 className="text-base font-black text-gray-900">Solicita tu cotización</h3>
          <div className="w-8 h-0.5 bg-[#d4a02a] rounded mt-2 mb-4" />

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Teléfono</label>
              <input
                type="tel"
                placeholder="+504 0000-0000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Mensaje</label>
              <textarea
                placeholder="Indica el repuesto, marca, modelo del vehículo y cantidad requerida."
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2.5 rounded-md font-bold text-xs hover:bg-red-700 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              ENVIAR COTIZACIÓN POR WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
