/* ProductDialog — ventana de detalle de producto.
 * Muestra la imagen completa, marca, descripción y las acciones de contacto.
 * Se reutiliza en las secciones de productos (líneas y destacados). */
import { Phone, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PHONE_TEL, PHONE_DISPLAY } from "@/lib/data";
import WhatsAppLink from "./WhatsAppLink";

export type ProductDialogData = {
  title: string;
  desc: string;
  image?: string;
  alt?: string;
  badge?: string;
  brand?: string;
};

type Props = {
  product: ProductDialogData | null;
  onClose: () => void;
  /** Abre el visor de imagen ampliada (opcional) */
  onZoom?: () => void;
};

export default function ProductDialog({ product, onClose, onZoom }: Props) {
  return (
    <Dialog open={product !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden gap-0 border-gray-200">
        {product && (
          <div className="grid md:grid-cols-2">
            {/* Imagen */}
            <div className="relative bg-gray-50 flex items-center justify-center p-6 min-h-64 md:min-h-full">
              {product.image ? (
                <button
                  type="button"
                  onClick={onZoom}
                  disabled={!onZoom}
                  className="group relative w-full aspect-square cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ee2b2d] rounded-lg disabled:cursor-default"
                  aria-label={`Ampliar imagen: ${product.title}`}
                >
                  <img
                    src={product.image}
                    alt={product.alt ?? product.title}
                    className="w-full h-full object-contain"
                  />
                  {onZoom && (
                    <span className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/90 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-3.5 h-3.5" /> Ampliar
                    </span>
                  )}
                </button>
              ) : (
                <img src="/images/logo-japanhn.png" alt="" className="w-40 opacity-80" />
              )}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-[#ee2b2d] text-white text-xs font-bold px-3 py-1 rounded">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Información */}
            <div className="flex flex-col p-6 md:p-8">
              {product.brand && (
                <span className="self-start text-xs font-bold tracking-wider text-[#ee2b2d] uppercase mb-2">
                  Marca {product.brand}
                </span>
              )}
              <DialogHeader className="gap-2 text-left">
                <DialogTitle className="text-xl font-black text-gray-900 leading-snug">
                  {product.title}
                </DialogTitle>
                <DialogDescription className="text-gray-500 text-sm leading-relaxed">
                  {product.desc}
                </DialogDescription>
              </DialogHeader>

              <div className="w-12 h-1 bg-[#ee2b2d] rounded my-5" />

              <div className="mt-auto flex flex-col gap-3 pt-2">
                <WhatsAppLink
                  className="justify-center w-full py-3 px-0 shadow-none"
                  message={`Hola, me interesa cotizar: ${product.title}`}
                >
                  Cotizar por WhatsApp
                </WhatsAppLink>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#ee2b2d] hover:text-[#ee2b2d] transition-colors"
                >
                  <Phone className="w-4 h-4" /> Llamar {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
