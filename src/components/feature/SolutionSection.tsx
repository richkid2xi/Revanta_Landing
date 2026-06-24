import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function SolutionSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: surveyRef, isVisible: surveyVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: analyticsRef, isVisible: analyticsVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="features" className="bg-background-100/60 py-20 md:py-28 px-4 md:px-8 border-t border-background-200/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`max-w-2xl mb-14 md:mb-20 transition-all duration-700 ease-out ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-foreground-400" />
            The solution
          </span>
          <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05]">
            Real-time insight. Instant action.
          </h2>
        </div>
        <div className="space-y-16 md:space-y-20">
          <div
            ref={surveyRef}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ease-out ${
              surveyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100 text-primary-800 text-[12px] font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                Guest Intelligence
              </span>
              <h3 className="font-heading text-2xl md:text-4xl tracking-[-0.02em] text-foreground-950 font-semibold mb-4">
                Smart guest surveys
              </h3>
              <p className="text-foreground-700 text-[15px] md:text-base leading-relaxed mb-6">
                Send beautifully designed, mobile-first surveys the moment guests check in, during
                their stay, and right after checkout. Our smart timing engine knows exactly when to
                ask — not too early, not too late. Guests respond in under 90 seconds, and their
                answers flow into a live dashboard you can check from anywhere.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'In-stay pulse surveys (under 90 seconds)',
                  'Smart timing based on stay duration',
                  'Multi-language support in 14 languages',
                  'QR code + SMS + email delivery',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-foreground-800">
                    <i className="ri-check-line text-primary-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 h-11 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn more
                <i className="ri-arrow-right-line text-[14px]" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-background-200 bg-background-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
                <img
                  alt="Guest survey on mobile"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  src="/images/survey_mobile.png"
                />
              </div>
            </div>
          </div>
          <div
            ref={analyticsRef}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center transition-all duration-700 ease-out ${
              analyticsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="lg:col-span-5 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-200 text-secondary-800 text-[12px] font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                Action Engine
              </span>
              <h3 className="font-heading text-2xl md:text-4xl tracking-[-0.02em] text-foreground-950 font-semibold mb-4">
                Actionable analytics
              </h3>
              <p className="text-foreground-700 text-[15px] md:text-base leading-relaxed mb-6">
                Our AI-powered dashboard turns raw feedback into clear priorities. Know instantly
                which areas are thriving — and which need attention — across housekeeping, dining,
                front desk, amenities, and more. Track sentiment trends over time, compare your
                property against industry benchmarks, and receive weekly actionable summaries
                delivered straight to your inbox.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'AI-powered sentiment analysis',
                  'Category-level breakdowns by department',
                  'Benchmark comparisons against similar properties',
                  'Weekly executive summaries via email',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[14px] text-foreground-800">
                    <i className="ri-check-line text-secondary-600 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 h-11 bg-secondary-600 text-white text-sm font-medium rounded-full hover:bg-secondary-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Learn more
                <i className="ri-arrow-right-line text-[14px]" />
              </a>
            </div>
            <div className="lg:col-span-7 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-background-200 bg-background-50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer">
                <img
                  alt="Analytics dashboard"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
