/* TopBar — Light theme: white bg, dark text, red accents */
import { Phone, Mail } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/data";
import SocialIcons from "./SocialIcons";

export default function TopBar() {
  return (
    <div className="bg-white border-b border-gray-100 text-sm">
      <div className="container flex items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-4 md:gap-6">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors">
            <Phone className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="hidden sm:flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors">
            <Mail className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{EMAIL}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-gray-500">Grupo CAP Honduras</span>
          <SocialIcons variant="topbar" />
        </div>
      </div>
    </div>
  );
}
