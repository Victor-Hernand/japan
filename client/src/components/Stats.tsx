/* Stats — banda negra con campo de ondas monocromo detrás de las cifras */
import { STATS } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";
import WaveField from "@/components/WaveField";

function StatItem({ value, prefix, suffix, label }: { value: number; prefix?: string; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div ref={ref} className="text-center py-8 px-4">
      <div className="text-4xl lg:text-5xl font-black text-[#ee2b2d] mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs font-bold tracking-[0.15em] text-gray-300 uppercase">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#000002] border-y border-white/10">
      <WaveField />
      <div className="container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {STATS.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
