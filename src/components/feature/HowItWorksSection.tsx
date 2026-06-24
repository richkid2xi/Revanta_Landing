import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    icon: 'ri-hotel-line',
    title: 'Connect your property',
    description:
      'Link your hotel in under 5 minutes. Add your rooms, amenities, and dining outlets. Revanta auto-configures the right survey flows for your property type.',
  },
  {
    number: '02',
    icon: 'ri-chat-smile-2-line',
    title: 'Guests share their experience',
    description:
      'Guests receive beautifully designed, quick surveys at the perfect moments — during their stay and after checkout. Most finish in under 90 seconds.',
  },
  {
    number: '03',
    icon: 'ri-line-chart-line',
    title: 'Insights surface automatically',
    description:
      'Every response flows into your live dashboard. Sentiment trends, category scores, and comparison benchmarks update in real time — no spreadsheets, no manual work.',
  },
  {
    number: '04',
    icon: 'ri-lightbulb-flash-line',
    title: 'Act on what matters most',
    description:
      'Every week, you receive a prioritized action list: what to celebrate, what to fix, and what to invest in next. Turn guest voices into better stays.',
  },
];

function StepCard({ step, index, delay }: { step: typeof steps[0]; index: number; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`relative group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-8 left-full w-8 h-px bg-background-300 -translate-y-1/2" />
      )}
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-700 font-heading text-xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white group-hover:shadow-lg cursor-default">
        {step.number}
      </div>
      <h3 className="font-heading text-lg md:text-xl text-foreground-950 font-semibold mb-2">
        {step.title}
      </h3>
      <p className="text-foreground-700 text-[14px] md:text-[15px] leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="how-it-works" className="bg-background-50 py-20 md:py-28 px-4 md:px-8 border-t border-background-200/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`max-w-2xl mb-14 md:mb-20 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-foreground-400" />
            How it works
          </span>
          <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05]">
            From guest voice to hotel action in four steps
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
