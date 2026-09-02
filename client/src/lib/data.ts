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
  catSuspension: "/images/cat-suspension-kyb.jpg",
  catDireccion: "/images/cat-direccion-555.jpg",
  catMotor: "/images/cat-motor-motormap.jpg",
  catTransmision: "/images/cat-transmision-toyo.jpg",
  rotula555Tacoma: "/images/rotula-555-tacoma.jpeg",
  terminal555: "/images/terminal-555.jpeg",
  rotula555Hilux: "/images/rotula-555-hilux.jpeg",
  logoKyb: "/images/logo-kyb.png",
  logo555: "/images/logo-555.webp",
  logoJapanHn: "/images/logo-japanhn.png",
};

export const GALLERY_IMAGES = [
  { src: "/images/terminal-555.jpeg", alt: "Terminal corta 555 — Mitsubishi L200 Sportero/Triton 2WD 06- (4422A008T-JP)" },
  { src: "/images/gallery-02.jpeg", alt: "Terminal corta 555 — Mitsubishi L200/Triton/KJ3 15- (4422A110-JP)" },
  { src: "/images/rotula-555-hilux.jpeg", alt: "Rótula superior 555 — Toyota Hilux LN50/90 2WD 83-89 (43350-39035-JP)" },
  { src: "/images/gallery-04.jpeg", alt: "Terminal corta 555 — Toyota Corolla 02- RH (45046-09200-JP)" },
  { src: "/images/rotula-555-tacoma.jpeg", alt: "Rótula superior 555 — Toyota Tacoma 2WD 95- LH (43360-39095-JP)" },
  { src: "/images/gallery-06.jpeg", alt: "Rótula superior 555 — Toyota Hilux 4WD 86-/97- (43360-39075-JP)" },
  { src: "/images/gallery-07.jpeg", alt: "Rótula inferior 555 — Toyota Tacoma 2WD 95- RH (43330-39355-JP)" },
  { src: "/images/gallery-08.jpeg", alt: "Rótula inferior 555 — Toyota Tacoma 4WD 95- RH (43330-39367-M-JP)" },
  { src: "/images/gallery-09.jpeg", alt: "Terminal corta 555 — Toyota Hilux Vigo 2WD 05-/Tacoma 2WD (45046-09251-JP)" },
  { src: "/images/gallery-10.jpeg", alt: "Rótula inferior 555 — Nissan Pathfinder R51 05-/Frontier D40 05- (40160-EA00A-JP)" },
  { src: "/images/gallery-11.jpeg", alt: "Rótula superior 555 — Toyota Prado 96-/4Runner (43310-39016-JP)" },
  { src: "/images/gallery-12.jpeg", alt: "Rótula inferior 555 — Toyota Hilux 4WD 86-89 (43330-39195-JP)" },
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
  { value: 600, prefix: "+", suffix: "", label: "Clientes Activos" },
  { value: 4000, prefix: "+", suffix: "", label: "SKU Disponibles" },
  { value: 40, prefix: "", suffix: "", label: "Marcas Premium" },
];

/** Sobre Nosotros — párrafos de presentación de la empresa */
export const ABOUT_PARAGRAPHS = [
  "En JAPAN HN nos especializamos en la distribución de repuestos japoneses de calidad premium en Honduras.",
  "Nacemos con el propósito de ofrecer al mercado una línea de productos confiables, seleccionados para brindar calidad, durabilidad y buen desempeño.",
  "Más que distribuir repuestos, buscamos ser una empresa en la que nuestros clientes puedan confiar, ofreciendo atención cercana, buen servicio y entregas eficientes a nivel nacional.",
  "En JAPAN HN, conocemos la importancia de contar con el repuesto correcto cuando se necesita. Por eso trabajamos cada día para ofrecer calidad japonesa y un servicio que responda.",
];

export const MISSION =
  "Ofrecer repuestos japoneses de calidad y un servicio confiable, brindando soluciones oportunas que contribuyan al crecimiento de nuestros clientes y al desarrollo del sector automotriz.";

export const VISION =
  "Ser una distribuidora referente de repuestos japoneses en Honduras, reconocida por la calidad de nuestros productos, la confianza de nuestros clientes y un servicio que responda a las necesidades del mercado automotriz.";

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
    image: IMAGES.catSuspension,
  },
  {
    id: "direccion",
    label: "Dirección",
    title: "Dirección",
    desc: "Terminales, rótulas y componentes de dirección de precisión japonesa para mantener el control total del vehículo.",
    items: ["Terminales de dirección", "Rótulas superiores e inferiores", "Brazos de dirección", "Cremalleras"],
    image: IMAGES.catDireccion,
  },
  {
    id: "motor",
    label: "Motor",
    title: "Motor",
    desc: "Piezas de motor de alta calidad para garantizar el rendimiento óptimo de los vehículos japoneses.",
    items: ["Bombas de agua", "Kits de distribución", "Empaques de motor", "Sensores y componentes"],
    image: IMAGES.catMotor,
  },
  {
    id: "transmision",
    label: "Transmisión",
    title: "Transmisión",
    desc: "Componentes de transmisión que aseguran una conducción suave y eficiente.",
    items: ["Rodamientos", "Crucetas", "Juntas homocinéticas", "Kits de embrague"],
    image: IMAGES.catTransmision,
  },
];

export const FEATURED_PRODUCTS = [
  {
    badge: "Alta rotación",
    brand: "555",
    title: "Rótula Superior 555 — Toyota Tacoma",
    desc: "Rótula superior para Toyota Tacoma 2WD (95-). Precisión japonesa y alta resistencia al desgaste en suspensión de trabajo pesado.",
    image: IMAGES.rotula555Tacoma,
  },
  {
    badge: "Calidad premium japonesa",
    brand: "555",
    title: "Terminal de Dirección 555 — Mitsubishi L200",
    desc: "Terminal corta para Mitsubishi L200 Sportero/Triton 2WD (06-). Ajuste preciso y alta resistencia para uso profesional.",
    image: IMAGES.terminal555,
  },
  {
    badge: "Alta demanda",
    brand: "555",
    title: "Rótula Superior 555 — Toyota Hilux",
    desc: "Rótula superior para Toyota Hilux LN50/90 2WD (83-89). Alta resistencia para maximizar la vida útil de la suspensión.",
    image: IMAGES.rotula555Hilux,
  },
];

export const WHATSAPP_NUMBER = "50494525175";
/** Formato legible para la UI */
export const PHONE_DISPLAY = "+504 9452-5175";
/** Sin espacios para `tel:` */
export const PHONE_TEL = "+50494525175";
export const EMAIL = "ventas@japanhn.com";

/** Redes sociales oficiales de Japan HN */
export const SOCIALS = [
  { name: "Facebook", url: "https://www.facebook.com/rjapanhn/", icon: "facebook" as const },
  { name: "Instagram", url: "https://www.instagram.com/japanhn_/", icon: "instagram" as const },
  { name: "TikTok", url: "https://www.tiktok.com/@japan.hn?lang=es", icon: "tiktok" as const },
  { name: "WhatsApp", url: `https://wa.me/${WHATSAPP_NUMBER}`, icon: "whatsapp" as const },
];
