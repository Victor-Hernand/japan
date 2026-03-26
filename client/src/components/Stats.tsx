/* Stats — Light theme: white bg, red numbers, gray labels */
import { STATS } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center py-8 px-4">
      <div className="text-4xl lg:text-5xl font-black text-red-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs font-bold tracking-[0.15em] text-gray-500 uppercase">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
