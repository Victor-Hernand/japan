import { useEffect } from "react";

/** Elementos de texto que se animan automáticamente al entrar en pantalla */
const TEXT_SELECTOR = [
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "li", "blockquote", "label",
  "span.inline-block",
]
  .map((tag) => `section ${tag}, footer ${tag}`)
  .join(", ");

/** Retraso escalonado entre textos hermanos (ms) y tope máximo */
const STAGGER_MS = 80;
const MAX_DELAY_MS = 400;

export function useScrollReveal() {
  useEffect(() => {
    const reveal = (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(reveal, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    });
    // Sin margen inferior: los textos al final de la página también deben aparecer
    const textObserver = new IntersectionObserver(reveal, { threshold: 0 });

    const tagText = (root: ParentNode) => {
      root.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
        if (el.classList.contains("text-reveal") || el.closest(".animate-marquee")) return;
        const siblings = el.parentElement
          ? Array.from(el.parentElement.children).filter((c) => c.matches(TEXT_SELECTOR))
          : [];
        const delay = Math.min(siblings.indexOf(el) * STAGGER_MS, MAX_DELAY_MS);
        el.style.setProperty("--text-reveal-delay", `${Math.max(delay, 0)}ms`);
        el.classList.add("text-reveal");
        textObserver.observe(el);
      });
    };

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => observer.observe(el));
    tagText(document);

    // Contenido que aparece después (pestañas del catálogo, etc.)
    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          tagText(node.parentElement ?? node);
        })
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      textObserver.disconnect();
      mutations.disconnect();
    };
  }, []);
}
