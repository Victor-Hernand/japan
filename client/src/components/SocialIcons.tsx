/* SocialIcons — iconos de redes sociales reutilizables (TopBar y Footer) */
import { SOCIALS } from "@/lib/data";
import { BRAND_ICON_PATHS } from "@/lib/brandIcons";

type Variant = "topbar" | "navbar" | "footer";

const STYLES: Record<Variant, { link: string; icon: string }> = {
  topbar: {
    link: "text-gray-400 hover:text-red-600 transition-colors",
    icon: "w-4 h-4",
  },
  navbar: {
    link: "text-gray-500 hover:text-red-600 hover:scale-110 transition-all",
    icon: "w-[18px] h-[18px]",
  },
  footer: {
    link: "w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors",
    icon: "w-4 h-4",
  },
};

export default function SocialIcons({ variant = "topbar" }: { variant?: Variant }) {
  const styles = STYLES[variant];
  return (
    <div className="flex items-center gap-2">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label={social.name}
          title={social.name}
        >
          <svg className={styles.icon} fill="currentColor" viewBox="0 0 24 24">
            <path d={BRAND_ICON_PATHS[social.icon]} />
          </svg>
        </a>
      ))}
    </div>
  );
}
