import { useScrollReveal } from '@/hooks/useScrollReveal';

const problems = [
  {
    icon: 'ri-survey-line',
    number: '01',
    title: 'Feedback that arrives too late',
    stat: '72%',
    statLabel: 'of guests never leave a review',
    description:
      'Most hotels rely on TripAdvisor or post-stay emails sent days after checkout. By then, the emotional connection is gone — and so is the guest. You are left guessing what went right and what went wrong, while the opportunity to fix things has already passed.',
  },
  {
    icon: 'ri-emotion-sad-line',
    number: '02',
    title: 'Silent dissatisfaction costs you',
    stat: '91%',
    statLabel: 'of unhappy guests simply never return',
    description:
      'When guests have a problem they do not complain to you — they just leave quietly and never come back. Without an easy, in-the-moment feedback channel, you lose guests and revenue without ever knowing why. Every silent departure is a missed chance to make it right.',
  },
  {
    icon: 'ri-pie-chart-2-line',
    number: '03',
    title: 'Data you cannot act on',
    stat: '3.8',
    statLabel: 'average star rating tells you nothing',
    description:
      'A star rating tells you the what, never the why. You know breakfast scored low, but not whether it was the coffee, the selection, or the service. Without granular, categorized feedback, you are making operational decisions based on hunches instead of evidence.',
  },
];

function ProblemCard({ p, delay }: { p: typeof problems[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-2xl border border-background-200 bg-background-100/60 p-7 md:p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-background-50 cursor-default group">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center text-accent-600">
            <i className={`${p.icon} text-lg`} />
          </span>
          <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500">
            {p.number}
          </span>
        </div>
        <h3 className="font-heading text-xl md:text-2xl text-foreground-950 font-semibold mb-2">
          {p.title}
        </h3>
        <div className="mb-4">
          <span className="font-heading text-4xl md:text-5xl font-bold text-accent-600">
            {p.stat}
          </span>
          <p className="text-[12px] text-foreground-600 mt-1 font-medium">
            {p.statLabel}
          </p>
        </div>
        <p className="text-foreground-700 text-[15px] leading-relaxed flex-1">
          {p.description}
        </p>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-background-50 py-20 md:py-28 px-4 md:px-8 border-t border-background-200/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`max-w-2xl mb-14 md:mb-20 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-foreground-400" />
            The problem
          </span>
          <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05]">
            You are running a hotel blindfolded
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((p, i) => (
            <ProblemCard key={p.number} p={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
