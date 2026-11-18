/* Footer — pie mínimo: logo y iconos de redes sociales. Botón flotante de WhatsApp. */
import { IMAGES, SOCIALS } from "@/lib/data";
import { BRAND_ICON_PATHS } from "@/lib/brandIcons";
import { whatsappUrl, WhatsAppIcon } from "./WhatsAppLink";

const NETWORKS = SOCIALS.filter((s) => s.name !== "WhatsApp");

export default function Footer() {
  return (
    <>
      <footer className="jh-footer">
        <div className="jh-container flex flex-col items-center gap-7">
          <a href="/" aria-label="Japan HN, inicio">
            <img className="jh-footer-logo" src={IMAGES.logoJapanHn} alt="Japan HN" />
          </a>

          <div className="flex items-center gap-3">
            {NETWORKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="w-10 h-10 flex items-center justify-center rounded-md border border-white/15 text-white/75 hover:border-[#ee2b2d] hover:text-white transition-colors"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={BRAND_ICON_PATHS[s.icon]} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>

      <a
        className="jh-float"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </>
  );
}
