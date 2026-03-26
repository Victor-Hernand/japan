/* Contact — Light theme: gray-50 bg, white cards */
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, WHATSAPP_NUMBER } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, soy ${form.name}.%0A%0AEmail: ${form.email}%0ATeléfono: ${form.phone}%0A%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Hablemos de <span className="text-red-600 italic">Negocios</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Estamos listos para ser tu socio estratégico. Contáctanos y descubre cómo Japan HN puede impulsar tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-4 reveal-left">
            <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Dirección</h4>
                <p className="text-gray-500 text-sm mt-1">
                  Barrio Guacerique, Bulevar Comunidad Europea, frente a Plaza Aire Frío
                </p>
                <p className="text-gray-400 text-xs mt-0.5">Tegucigalpa, Honduras</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Teléfono</h4>
                <a href={`tel:${PHONE_TEL}`} className="text-red-600 text-sm font-medium hover:underline">{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Email</h4>
                <a href={`mailto:${EMAIL}`} className="text-red-600 text-sm font-medium hover:underline">{EMAIL}</a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Horario</h4>
                <p className="text-gray-500 text-sm mt-1">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-500 text-sm">Sábados: 8:00 AM - 12:00 MD</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white rounded-xl p-5 hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <div>
                <h4 className="font-bold text-sm">WhatsApp Directo</h4>
                <p className="text-green-100 text-xs">Respuesta inmediata</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8">
              <h3 className="text-xl font-black text-gray-900 mb-1">Solicitar Cotización</h3>
              <div className="w-10 h-1 bg-red-600 rounded mb-6" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-300 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-300 transition-all"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="+504 0000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Mensaje</label>
                  <textarea
                    placeholder="Describe los productos que necesitas cotizar..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-300 transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3.5 rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20"
                >
                  <Send className="w-4 h-4" />
                  ENVIAR COTIZACIÓN POR WHATSAPP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
