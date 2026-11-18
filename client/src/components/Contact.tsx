/* Contact — panel de atención comercial (negro) + formulario de cotización mayorista.
 * Clases jh-* de la referencia. El formulario abre WhatsApp con el mensaje para revisarlo y enviarlo. */
import "@/styles/jobs-split.css";
import "@/styles/contact-form.css";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Linkedin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/data";
import { whatsappUrl } from "./WhatsAppLink";
import { PrivacyPolicyDialog } from "./PrivacyPolicy";

const DETAILS = [
  {
    icon: MapPin,
    title: "Dirección",
    body: "Barrio Guacerique, Bulevar Comunidad Europea, frente a Plaza Aire Frío, Tegucigalpa.",
  },
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    href: `https://wa.me/${PHONE_TEL.replace("+", "")}`,
    body: PHONE_DISPLAY,
  },
  { icon: Mail, title: "Correo electrónico", href: `mailto:${EMAIL}`, body: EMAIL },
  {
    icon: Clock,
    title: "Horario de atención",
    body: "Lunes a viernes: 8:00 a.m. – 5:00 p.m.\nSábado: 8:00 a.m. – 12:00 m.d.\nDomingo: cerrado",
  },
];

const INTERESTS = ["Suspensión", "Dirección", "Motor", "Transmisión", "Rótulas y terminales", "Asesoría general"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", interest: "", message: "" });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) return;
    const text =
      `Hola, soy ${form.name} de ${form.company}.\n` +
      `Teléfono: ${form.phone}\n` +
      `Línea de interés: ${form.interest}\n\n` +
      `${form.message}`;
    window.open(whatsappUrl(text), "_blank");
  };

  return (
    <section className="jh-section jh-section-flush-bottom">
      <div className="jh-container jh-contact-grid">
        <aside>
          <div className="jh-contact-panel">
            <p className="jh-section-kicker">Japan HN · Grupo CAP Honduras</p>
            <h2>Atención comercial</h2>
            <p>Oficina principal y punto de atención comercial en Tegucigalpa.</p>

            {DETAILS.map(({ icon: Icon, title, href, body }) => (
              <div key={title} className="jh-contact-detail">
                <Icon aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {body}
                    </a>
                  ) : (
                    <span>
                      {body.split("\n").map((line) => (
                        <span key={line} style={{ display: "block" }}>{line}</span>
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="jh-jobs-note jh-jobs-split">
            <img className="jh-jobs-photo" src="/images/contacto-trabajo.jpg" alt="Técnico revisando el motor de un vehículo" loading="lazy" />
            <div className="jh-jobs-body">
            <strong>¿Deseas trabajar con nosotros?</strong>
            <p>Consulta las oportunidades del Grupo CAP Honduras y sus canales de postulación.</p>
            <div className="jh-jobs-actions">
              <a
                className="jh-button jh-button-red"
                href="https://recruit.capgrupo.com/aplicar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aplicar ahora <ArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="jh-button jh-button-outline"
                href="https://www.linkedin.com/company/caphn/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin aria-hidden="true" /> Ver LinkedIn
              </a>
            </div>
            </div>
          </div>
        </aside>

        <section className="jh-contact-form">
          <p className="jh-section-kicker">Cotización mayorista</p>
          <h2>Cuéntanos qué repuestos buscas.</h2>
          <p>Deja tus datos y prepara una consulta para nuestro equipo comercial.</p>

          <form className="jh-form-grid" onSubmit={handleSubmit}>
            <div className="jh-field">
              <label htmlFor="jh-name">Nombre completo *</label>
              <input
                id="jh-name"
                autoComplete="name"
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="jh-field">
              <label htmlFor="jh-company">Empresa *</label>
              <input
                id="jh-company"
                autoComplete="organization"
                required
                placeholder="Nombre de tu negocio"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>
            <div className="jh-field">
              <label htmlFor="jh-phone">Teléfono *</label>
              <input
                id="jh-phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="+504"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <div className="jh-field">
              <label htmlFor="jh-interest">Línea de interés *</label>
              <select
                id="jh-interest"
                required
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
              >
                <option value="" disabled>Selecciona una categoría</option>
                {INTERESTS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
            <div className="jh-field full">
              <label htmlFor="jh-message">¿Qué necesitas cotizar?</label>
              <textarea
                id="jh-message"
                placeholder="Cuéntanos qué repuestos o aplicaciones buscas."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <label className="jh-privacy">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required
              />
              <span>
                He leído y acepto la{" "}
                <button type="button" onClick={() => setPolicyOpen(true)}>
                  Política de privacidad y uso de datos
                </button>
                , y autorizo el tratamiento de mis datos para atender esta solicitud.
              </span>
            </label>
            <PrivacyPolicyDialog
              open={policyOpen}
              onOpenChange={setPolicyOpen}
              onAccept={() => setPrivacyAccepted(true)}
            />

            <p className="jh-form-hint">
              Al continuar se abrirá WhatsApp con tu mensaje para que lo revises y lo envíes.
            </p>
            <button className="jh-button jh-button-red" type="submit" disabled={!privacyAccepted}>
              Preparar consulta por WhatsApp
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}
