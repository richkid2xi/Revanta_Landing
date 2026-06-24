import { useRef, useState, useEffect } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

// Each stat: numeric target, suffix, label
const stats = [
  { target: 500, suffix: '+', label: 'Hotels on Revanta' },
  { target: 94, suffix: '%', label: 'Guest survey completion rate' },
  { target: 2.1, suffix: 'x', label: 'Average repeat booking lift', isFloat: true },
  { target: 18, suffix: ' min', label: 'Average response to negative feedback' },
];

function StatCard({ target, suffix, label, isFloat, started }: {
  target: number;
  suffix: string;
  label: string;
  isFloat?: boolean;
  started: boolean;
}) {
  const count = useCountUp(isFloat ? target * 10 : target, 3000, started);
  const display = isFloat ? (count / 10).toFixed(1) : count;

  return (
    <div className="text-center">
      <span className="font-heading text-4xl md:text-6xl font-bold text-white tracking-[-0.02em] tabular-nums">
        {display}{suffix}
      </span>
      <p className="mt-2 text-accent-100 text-[14px] md:text-[15px] font-medium leading-snug">
        {label}
      </p>
    </div>
  );
}

export default function ImpactSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="bg-accent-500 py-20 md:py-28 px-4 md:px-8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${
          started ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <StatCard {...stat} started={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
