/* CursorParallax — el contenido se desplaza levemente en dirección contraria al cursor.
   Solo escritorio y sin movimiento reducido; el valor se escribe en variables CSS (--px, --py)
   para que la transición la haga el navegador, sin re-renderizar React. */
import { useEffect, useRef, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";

type Props = HTMLAttributes<HTMLElement> & ButtonHTMLAttributes<HTMLElement> & {
  as?: "div" | "button";
  className?: string;
  children: ReactNode;
};

export default function CursorParallax({ as = "div", className = "", children, ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || reduced.matches) return;
      const box = el.getBoundingClientRect();
      // Normalizado a -1..1 respecto al centro del elemento
      const x = ((e.clientX - box.left) / box.width) * 2 - 1;
      const y = ((e.clientY - box.top) / box.height) * 2 - 1;
      el.style.setProperty("--px", x.toFixed(3));
      el.style.setProperty("--py", y.toFixed(3));
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };

    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const Tag = as as "div";
  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={`cursor-parallax ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
