import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="cta" className="bg-background-50 py-20 md:py-28 px-4 md:px-8 border-t border-background-200/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-2xl px-6 md:px-12 py-20 md:py-28 text-center bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            backgroundImage:
              'url(https://readdy.ai/api/search-image?query=Elegant%20luxury%20hotel%20lobby%20with%20warm%20golden%20ambient%20lighting%2C%20plush%20seating%20areas%2C%20grand%20chandelier%2C%20marble%20floors%2C%20sophisticated%20hospitality%20atmosphere%2C%20soft%20golden%20hour%20glow%2C%20editorial%20interior%20photography%2C%20warm%20cream%20and%20amber%20tones%2C%20high%20detail%20inviting%20composition&width=1600&height=800&seq=cta-hotel-bg&orientation=landscape)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-accent-900/70 to-black/80 pointer-events-none" />
          <div className="relative max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-white font-semibold leading-[1.1]">
              <span>Ready to hear what your guests really think?</span>
            </h2>
            <p className="mt-5 text-white/90 text-[15px] md:text-base leading-relaxed max-w-xl mx-auto">
              Join 500+ hotels using Revanta to turn guest feedback into better stays, higher
              ratings, and more repeat bookings.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 h-12 bg-background-50 text-primary-700 text-sm font-medium rounded-full hover:bg-background-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-hotel-line text-[18px]" />
                Request a demo
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 h-12 bg-white/10 backdrop-blur text-white text-sm font-medium rounded-full border border-white/30 hover:bg-white/20 hover:border-white/50 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-price-tag-3-line text-[18px]" />
                View pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
