import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Elena Rossi',
    role: 'Owner, Villa Toscana Boutique Hotel',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    quote:
      'Before Revanta, we were guessing. Now I know exactly which rooms guests love, which breakfast items they skip, and which staff members they mention by name. Our TripAdvisor rating went from 4.2 to 4.7 in eight months.',
  },
  {
    name: 'Marcus Chen',
    role: 'General Manager, The Langford City Hotel',
    image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80',
    quote:
      'The in-stay survey caught a plumbing issue on the third floor before it affected more than two rooms. We fixed it within the hour and those guests ended up leaving a five-star review. That alone paid for the whole year.',
  },
  {
    name: 'Sarah Okafor',
    role: 'Director, Azure Beach Resort & Spa',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?auto=format&fit=crop&w=150&q=80',
    quote:
      'The weekly executive summary saves me four hours every Monday. I walk into team meetings with hard numbers — not opinions. My housekeeping team actually gets excited now because they can see their scores improving week over week.',
  },
];

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-2xl border border-background-200 bg-background-50 p-7 md:p-8 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-background-200">
            <img
              alt={t.name}
              loading="lazy"
              className="w-full h-full object-cover object-top"
              src={t.image}
            />
          </div>
          <div>
            <p className="font-heading text-[15px] font-semibold text-foreground-950">
              {t.name}
            </p>
            <p className="text-[12px] text-foreground-600">{t.role}</p>
          </div>
        </div>
        <p className="text-foreground-700 text-[15px] leading-relaxed flex-1 italic">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-5 flex items-center gap-1 text-primary-500">
          {[...Array(5)].map((_, j) => (
            <i key={j} className="ri-star-fill text-[14px]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="bg-background-100/60 py-20 md:py-28 px-4 md:px-8 border-t border-background-200/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`max-w-2xl mb-14 md:mb-20 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-foreground-400" />
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05]">
            Trusted by hoteliers who care about every stay
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
