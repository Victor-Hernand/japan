/* TopBar — barra negra superior con contacto y redes (clases jh-* de la referencia) */
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, SOCIALS } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="jh-topbar">
      <div className="jh-container jh-topbar-inner">
        <div className="jh-top-info">
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div className="jh-top-right">
          <strong>Grupo CAP Honduras</strong>
          <div className="jh-top-social">
            {SOCIALS.filter((s) => s.name !== "WhatsApp").map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
