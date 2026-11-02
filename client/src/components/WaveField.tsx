/* WaveField — campo de partículas monocromo (adaptado de la onda de Aram "mono").
   Solo decorativo: aria-hidden, no captura eventos y respeta prefers-reduced-motion. */
import { useEffect, useRef } from "react";

const COLS_DESKTOP = 64;
const COLS_MOBILE = 36;
const ROWS = 10;
const RIPPLE_RADIUS = 180;

export default function WaveField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const host = canvas.parentElement as HTMLElement;

    let width = 0;
    let height = 0;
    let cols = COLS_DESKTOP;
    let frame = 0;
    let last = 0;
    let phase = 0;
    let visible = true;
    let inside = false;
    let influence = 0;
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    // Tiempo y movimiento: interpolación exponencial, independiente de los fps
    const smooth = (rate: number, dt: number) => 1 - Math.exp(-rate * dt);
    const active = () => !reduced.matches && !document.hidden && visible;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // Opacidad baja: el campo es fondo, no debe competir con cifras ni etiquetas
      ctx.fillStyle = "rgba(235,235,235,0.3)";
      ctx.beginPath();
      for (let row = 0; row < ROWS; row++) {
        const v = row / (ROWS - 1);
        for (let col = 0; col < cols; col++) {
          const u = col / (cols - 1);
          let x = u * width;
          let y = height * (0.2 + v * 0.6) + Math.sin(u * 7 + v * 3 + phase) * 14 * (0.4 + v);
          if (influence > 0.001) {
            const dx = x - pointerX;
            const dy = y - pointerY;
            const d2 = dx * dx + dy * dy;
            if (d2 < RIPPLE_RADIUS * RIPPLE_RADIUS) {
              const env = Math.exp(-d2 / (RIPPLE_RADIUS * RIPPLE_RADIUS)) * influence;
              y -= Math.cos(Math.sqrt(d2) * 0.03 - phase * 2.5) * env * 26;
              x += dx * env * 0.05;
            }
          }
          const r = 0.9 + v * 0.7;
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, Math.PI * 2);
        }
      }
      ctx.fill();
    };

    const tick = (time: number) => {
      frame = 0;
      if (!active()) return;
      const dt = Math.min((time - last) / 1000, 0.05);
      last = time;
      phase += dt;
      const follow = smooth(12, dt);
      pointerX += (targetX - pointerX) * follow;
      pointerY += (targetY - pointerY) * follow;
      influence += ((inside ? 1 : 0) - influence) * smooth(6, dt);
      draw();
      frame = requestAnimationFrame(tick);
    };

    const sync = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      draw();
      if (active()) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    const resize = () => {
      const box = canvas.getBoundingClientRect();
      width = box.width;
      height = box.height;
      cols = width < 650 ? COLS_MOBILE : COLS_DESKTOP;
      const dpr = Math.min(window.devicePixelRatio || 1, width < 650 ? 1.25 : 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sync();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !active()) return;
      const box = canvas.getBoundingClientRect();
      targetX = e.clientX - box.left;
      targetY = e.clientY - box.top;
      if (!inside && influence < 0.01) {
        pointerX = targetX;
        pointerY = targetY;
      }
      inside = true;
    };
    const onPointerLeave = () => {
      inside = false;
    };
    const onVisibility = () => sync();
    const onReducedChange = () => {
      if (reduced.matches) {
        influence = 0;
        inside = false;
      }
      sync();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      sync();
    });
    intersection.observe(canvas);
    host.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onReducedChange);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersection.disconnect();
      host.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onReducedChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
