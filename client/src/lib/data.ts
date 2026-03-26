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

export const BRANDS = [
  { name: "KYB", desc: "Líder mundial en amortiguadores y sistemas de suspensión", logo: IMAGES.logoKyb },
  { name: "555", desc: "Especialista en componentes de motor y suspensión", logo: IMAGES.logo555 },
  { name: "TRC", desc: "Fabricante de brazos y componentes de suspensión", logo: null },
  { name: "TZK", desc: "Repuestos de alto rendimiento para motores y sistemas mecánicos", logo: null },
  { name: "NPW", desc: "Proveedor de bujes y componentes de suspensión", logo: null },
  { name: "KOYO", desc: "Rodamientos y componentes de transmisión de precisión", logo: null },
  { name: "MRK", desc: "Especialista en piezas de dirección y suspensión", logo: null },
  { name: "FIC", desc: "Repuestos de alto estándar para sistemas hidráulicos y motores", logo: null },
];

export const STATS = [
  { value: 1, suffix: "+", label: "Año de Experiencia" },
  { value: 47, suffix: "+", label: "Clientes Activos" },
  { value: 471, suffix: "+", label: "Productos Disponibles" },
  { value: 7, suffix: "", label: "Marcas Japonesas" },
];

export const VALUES = [
  { title: "Calidad", desc: "Productos confiables y duraderos que superan expectativas." },
  { title: "Compromiso", desc: "El cliente en el centro de nuestras decisiones." },
  { title: "Transparencia", desc: "Honestidad y claridad en procesos, precios y comunicaciones." },
  { title: "Innovación", desc: "Nuevas soluciones que responden a las tendencias del mercado." },
  { title: "Excelencia", desc: "Transformamos cada desafío en oportunidades de crecimiento." },
];

export const CITIES = [
  { name: "Tegucigalpa", desc: "Cobertura completa en la capital" },
  { name: "San Pedro Sula", desc: "Distribución en la zona norte" },
  { name: "La Ceiba", desc: "Cobertura en la costa atlántica" },
  { name: "Comayagua", desc: "Centro del país" },
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
    badge: "Más Vendido",
    brand: "KYB",
    title: "Amortiguadores KYB",
    desc: "Rendimiento, durabilidad y tecnología avanzada para todo tipo de vehículos.",
    image: IMAGES.kybAmortiguadores,
  },
  {
    badge: "Calidad Premium",
    brand: "555",
    title: "Terminal de Dirección 555",
    desc: "Precisión japonesa y confiabilidad para sistemas de dirección.",
    image: IMAGES.terminal555,
  },
  {
    badge: "Alta Demanda",
    brand: "555",
    title: "Rótula Superior 555",
    desc: "Resistencia y seguridad como sello distintivo para suspensión.",
    image: IMAGES.rotula555,
  },
];

export const WHATSAPP_NUMBER = "50494525175";
/** Formato legible para la UI */
export const PHONE_DISPLAY = "+504 9452-5175";
/** Sin espacios para `tel:` */
export const PHONE_TEL = "+50494525175";
export const EMAIL = "ventas@japanhn.com";
