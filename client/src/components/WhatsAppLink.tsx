/* WhatsAppLink — punto de entrada único a WhatsApp.
 * Centraliza la construcción del enlace (con el texto siempre codificado)
 * y las tres jerarquías visuales del sitio:
 *   primary   — botón rojo sólido, para la acción principal de una sección
 *   secondary — enlace discreto con icono, para menciones de apoyo
 *   icon      — solo icono circular, para barras y listas de contacto
 */
import type { ReactNode } from "react";
import { WHATSAPP_NUMBER } from "@/lib/data";
import { BRAND_ICON_PATHS } from "@/lib/brandIcons";

/** Construye el enlace de WhatsApp codificando el mensaje prellenado. */
export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={BRAND_ICON_PATHS.whatsapp} />
    </svg>
  );
}

type Variant = "primary" | "secondary" | "icon";

const VARIANTS: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition-all shadow-lg shadow-red-600/20",
  secondary:
    "inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-600 underline underline-offset-4 decoration-gray-300 hover:decoration-green-500 transition-colors",
  icon: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors",
};

type Props = {
  children?: ReactNode;
  /** Mensaje prellenado en el chat; se codifica automáticamente */
  message?: string;
  variant?: Variant;
  className?: string;
  /** Obligatorio en la variante `icon`, que no tiene texto visible */
  label?: string;
};

export default function WhatsAppLink({
  children,
  message,
  variant = "primary",
  className = "",
  label,
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${VARIANTS[variant]} ${className}`.trim()}
      aria-label={variant === "icon" ? label : undefined}
      title={variant === "icon" ? label : undefined}
    >
      <WhatsAppIcon className={variant === "icon" ? "w-5 h-5" : "w-4 h-4"} />
      {variant !== "icon" && children}
    </a>
  );
}
