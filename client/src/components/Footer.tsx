/* Footer — Light theme: dark footer for visual anchoring */
import { IMAGES } from "@/lib/data";
import SocialIcons from "./SocialIcons";
import { whatsappUrl, WhatsAppIcon } from "./WhatsAppLink";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container flex flex-col items-center gap-6">
        <img
          src={IMAGES.logoJapanHn}
          alt="Japan HN"
          className="h-14 w-auto"
          width={533}
          height={246}
        />
        <SocialIcons variant="footer" />
      </div>

      {/* WhatsApp FAB */}
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-all z-50"
        aria-label="Volver arriba"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
