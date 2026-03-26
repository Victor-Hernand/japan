/* Brands — Light theme: gray-50 bg, white cards, marquee */
import { BRANDS } from "@/lib/data";

export default function Brands() {
  return (
    <section id="marcas" className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-4 border border-red-100">
            Alianzas Estratégicas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
            Marcas <span className="text-red-600 italic">Japonesas</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Trabajamos con las marcas más reconocidas a nivel internacional en la industria de autopartes japonesas.
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 reveal">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-red-200 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden group-hover:bg-red-50 transition-colors">
                {brand.logo ? (
                  <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain" />
                ) : (
                  <span className="text-red-600 font-black text-lg">{brand.name}</span>
                )}
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{brand.name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{brand.desc}</p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="overflow-hidden py-6 border-y border-gray-200 reveal">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="mx-8 text-3xl font-black text-gray-200 hover:text-red-200 transition-colors select-none"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
