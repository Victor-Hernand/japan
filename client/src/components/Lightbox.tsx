/* Lightbox — visor de imagen ampliada con navegación por teclado y flechas */
import { useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type LightboxImage = { src: string; alt: string };

type Props = {
  images: LightboxImage[];
  /** Índice de la imagen abierta, o `null` si el visor está cerrado */
  index: number | null;
  onIndexChange: (index: number | null) => void;
};

export default function Lightbox({ images, index, onIndexChange }: Props) {
  const isOpen = index !== null;

  const go = useCallback(
    (delta: number) => {
      if (index === null || images.length === 0) return;
      // Navegación circular: de la última vuelve a la primera y viceversa
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, go]);

  if (index === null) return null;
  const image = images[index];
  if (!image) return null;

  const hasMultiple = images.length > 1;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onIndexChange(null)}>
      <DialogContent
        showCloseButton={false}
        className="max-w-none w-auto sm:max-w-none bg-transparent border-0 shadow-none p-0 gap-0 flex flex-col items-center"
      >
        <DialogTitle className="sr-only">{image.alt}</DialogTitle>

        {/* Cerrar */}
        <button
          onClick={() => onIndexChange(null)}
          className="absolute -top-2 right-0 sm:top-0 sm:-right-12 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* object-contain: muestra la ficha completa, incluido el código al pie */}
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl bg-white"
        />

        {/* Pie: descripción y contador */}
        <div className="mt-4 text-center px-4">
          <p className="text-white text-sm font-medium drop-shadow">{image.alt}</p>
          {hasMultiple && (
            <p className="text-white/60 text-xs mt-1">
              {index + 1} / {images.length}
            </p>
          )}
        </div>

        {hasMultiple && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-2 sm:-left-14 top-[40%] w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-colors"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 sm:-right-14 top-[40%] w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center shadow-lg transition-colors"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
