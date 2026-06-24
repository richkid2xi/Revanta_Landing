import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Elena Rossi',
    role: 'Owner, Villa Toscana Boutique Hotel',
    image:
      'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20confident%20Italian%20woman%20in%20her%2040s%20with%20dark%20hair%2C%20wearing%20a%20cream%20linen%20blazer%2C%20soft%20warm%20studio%20background%20with%20gentle%20lighting%2C%20editorial%20portrait%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20professional%20composition&width=400&height=400&seq=testimonial-elena&orientation=squarish',
    quote:
      'Before Revanta, we were guessing. Now I know exactly which rooms guests love, which breakfast items they skip, and which staff members they mention by name. Our TripAdvisor rating went from 4.2 to 4.7 in eight months.',
  },
  {
    name: 'Marcus Chen',
    role: 'General Manager, The Langford City Hotel',
    image:
      'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20Asian%20man%20in%20his%20late%2030s%20wearing%20a%20navy%20blazer%2C%20confident%20professional%20expression%2C%20soft%20warm%20cream%20studio%20background%2C%20editorial%20portrait%20photography%2C%20natural%20lighting%2C%20high%20detail%20harmonious%20composition&width=400&height=400&seq=testimonial-marcus&orientation=squarish',
    quote:
      'The in-stay survey caught a plumbing issue on the third floor before it affected more than two rooms. We fixed it within the hour and those guests ended up leaving a five-star review. That alone paid for the whole year.',
  },
  {
    name: 'Sarah Okafor',
    role: 'Director, Azure Beach Resort & Spa',
    image:
      'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20elegant%20Black%20woman%20in%20her%2030s%20with%20natural%20hair%2C%20wearing%20a%20soft%20beige%20blouse%2C%20warm%20studio%20background%20with%20gentle%20lighting%2C%20editorial%20portrait%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20professional%20composition&width=400&height=400&seq=testimonial-sarah&orientation=squarish',
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
