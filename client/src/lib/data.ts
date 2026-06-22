/* ============================================================
 * Japan HN — Light Theme — Data Constants
 * Design: Precision Engineering / Blanco Técnico
 * All CDN URLs for images used across the site
 * ============================================================ */

export const IMAGES = {
  heroBg: "/images/hero-bg.jpg",
  ctaBg: "/images/cta-bg.jpg",
  warehouse: "/images/warehouse.jpg",
  suspension: "/images/suspension.jpg",
  kybAmortiguadores: "/images/kyb-amortiguadores.jpeg",
  terminal555: "/images/terminal-555.jpeg",
  rotula555: "/images/rotula-555.jpeg",
  logoKyb: "/images/logo-kyb.png",
  logo555: "/images/logo-555.webp",
};

export const GALLERY_IMAGES = [
  { src: "/images/terminal-555.jpeg", alt: "Producto Japan HN 1" },
  { src: "/images/gallery-02.jpeg", alt: "Producto Japan HN 2" },
  { src: "/images/rotula-555.jpeg", alt: "Producto Japan HN 3" },
  { src: "/images/gallery-04.jpeg", alt: "Producto Japan HN 4" },
  { src: "/images/kyb-amortiguadores.jpeg", alt: "Producto Japan HN 5" },
  { src: "/images/gallery-06.jpeg", alt: "Producto Japan HN 6" },
  { src: "/images/gallery-07.jpeg", alt: "Producto Japan HN 7" },
  { src: "/images/gallery-08.jpeg", alt: "Producto Japan HN 8" },
  { src: "/images/gallery-09.jpeg", alt: "Producto Japan HN 9" },
  { src: "/images/gallery-10.jpeg", alt: "Producto Japan HN 10" },
  { src: "/images/gallery-11.jpeg", alt: "Producto Japan HN 11" },
  { src: "/images/gallery-12.jpeg", alt: "Producto Japan HN 12" },
];

export const BODEGA_IMAGES = [
  { src: "/images/bodega-03.jpg", alt: "Equipo de Japan HN en la bodega de repuestos" },
  { src: "/images/bodega-05.jpg", alt: "Inventario de amortiguadores KYB en bodega" },
  { src: "/images/bodega-02.jpg", alt: "Estanterías con repuestos KYB y 555 en bodega" },
  { src: "/images/bodega-04.jpg", alt: "Operación logística con montacargas en bodega" },
  { src: "/images/bodega-01.jpg", alt: "Preparación y empaque de repuestos 555 Made in Japan" },
];

export const BRANDS = [
  { name: "KYB", desc: "Líder mundial en amortiguadores y sistemas de suspensión, reconocida por su durabilidad y desempeño en vehículos japoneses.", logo: IMAGES.logoKyb },
  { name: "555", desc: "Marca japonesa especializada en componentes de dirección y suspensión, reconocida por su precisión y confiabilidad.", logo: IMAGES.logo555 },
  { name: "TRC", desc: "Fabricante japonés de componentes de suspensión diseñados para alto rendimiento y uso continuo.", logo: null },
  { name: "TZK", desc: "Repuestos japoneses de alto rendimiento para sistemas mecánicos, enfocados en durabilidad y eficiencia operativa.", logo: null },
  { name: "NPW", desc: "Especialistas en bujes y componentes de suspensión con alta resistencia al desgaste en condiciones exigentes.", logo: null },
  { name: "KOYO", desc: "Rodamientos japoneses de alta precisión utilizados en sistemas de transmisión y rotación.", logo: null },
  { name: "MRK", desc: "Fabricante japonés de piezas de recambio para suspensión y dirección, enfocado en confiabilidad y ajuste preciso.", logo: null },
  { name: "FIC", desc: "Repuestos japoneses de alto estándar para sistemas hidráulicos y componentes mecánicos seleccionados.", logo: null },
];

export const STATS = [
  { value: 1, prefix: "+", suffix: "", label: "Año de Experiencia" },
  { value: 47, prefix: "+", suffix: "", label: "Clientes Activos" },
  { value: 471, prefix: "+", suffix: "", label: "Productos Disponibles" },
  { value: 7, prefix: "", suffix: "", label: "Marcas Japonesas" },
];

export const VALUES = [
  { title: "Calidad", desc: "Repuestos japoneses seleccionados por su durabilidad, desempeño y confiabilidad en uso profesional." },
  { title: "Compromiso", desc: "Compromiso real con nuestros clientes B2B, brindando atención rápida, asesoría técnica y seguimiento postventa." },
  { title: "Transparencia", desc: "Procesos claros, precios justos y comunicación directa en cada cotización y entrega." },
  { title: "Innovación", desc: "Incorporamos continuamente nuevas marcas y soluciones que responden a la evolución del mercado automotriz." },
  { title: "Excelencia", desc: "Enfocados en la mejora continua para convertir cada operación en una experiencia eficiente y confiable." },
];

export const CITIES = [
  { name: "Tegucigalpa", desc: "Entregas rápidas y cobertura completa en Tegucigalpa y alrededores." },
  { name: "San Pedro Sula", desc: "Distribución eficiente en San Pedro Sula y la zona norte del país." },
  { name: "La Ceiba", desc: "Cobertura logística en La Ceiba y la costa atlántica." },
  { name: "Comayagua", desc: "Entregas estratégicas en Comayagua y el centro del país." },
];

export const CATALOG_TABS = [
  {
    id: "suspension",
    label: "Suspensión",
    title: "Suspensión",
    desc: "Contamos con una línea completa de componentes de suspensión para todo tipo de vehículos japoneses: Toyota, Nissan, Honda, Mitsubishi y más.",
    items: ["Amortiguadores", "Barras estabilizadoras", "Soportes de motor", "Bujes de suspensión"],
    image: IMAGES.suspension,
  },
  {
    id: "direccion",
    label: "Dirección",
    title: "Dirección",
    desc: "Terminales, rótulas y componentes de dirección de precisión japonesa para mantener el control total del vehículo.",
    items: ["Terminales de dirección", "Rótulas superiores e inferiores", "Brazos de dirección", "Cremalleras"],
    image: IMAGES.suspension,
  },
  {
    id: "motor",
    label: "Motor",
    title: "Motor",
    desc: "Piezas de motor de alta calidad para garantizar el rendimiento óptimo de los vehículos japoneses.",
    items: ["Bombas de agua", "Kits de distribución", "Empaques de motor", "Sensores y componentes"],
    image: IMAGES.suspension,
  },
  {
    id: "transmision",
    label: "Transmisión",
    title: "Transmisión",
    desc: "Componentes de transmisión que aseguran una conducción suave y eficiente.",
    items: ["Rodamientos", "Crucetas", "Juntas homocinéticas", "Kits de embrague"],
    image: IMAGES.suspension,
  },
];

export const FEATURED_PRODUCTS = [
  {
    badge: "Alta rotación",
    brand: "KYB",
    title: "Amortiguadores KYB",
    desc: "Amortiguadores japoneses diseñados para mayor estabilidad, confort y durabilidad en uso intensivo.",
    image: IMAGES.kybAmortiguadores,
  },
  {
    badge: "Calidad premium japonesa",
    brand: "555",
    title: "Terminal de Dirección 555",
    desc: "Componentes de dirección 555 con ajuste preciso y alta resistencia al desgaste, ideales para uso profesional.",
    image: IMAGES.terminal555,
  },
  {
    badge: "Alta demanda",
    brand: "555",
    title: "Rótula Superior 555",
    desc: "Rótulas 555 de alta resistencia, diseñadas para soportar trabajo pesado y maximizar la vida útil de la suspensión.",
    image: IMAGES.rotula555,
  },
];

export const WHATSAPP_NUMBER = "50494525175";
/** Formato legible para la UI */
export const PHONE_DISPLAY = "+504 9452-5175";
/** Sin espacios para `tel:` */
export const PHONE_TEL = "+50494525175";
export const EMAIL = "ventas@japanhn.com";
