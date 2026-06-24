import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  'https://readdy.ai/api/search-image?query=Elegant%20luxury%20hotel%20lobby%20with%20warm%20golden%20ambient%20lighting%2C%20plush%20velvet%20sofas%2C%20marble%20floors%2C%20large%20windows%20with%20soft%20natural%20light%20streaming%20in%2C%20sophisticated%20hospitality%20interior%20design%2C%20editorial%20photography%2C%20warm%20neutral%20tones%20with%20amber%20accents%2C%20high%20detail%20harmonious%20composition&width=1600&height=900&seq=revanta-hero-01&orientation=landscape',
  'https://readdy.ai/api/search-image?query=Cozy%20boutique%20hotel%20reception%20desk%20with%20fresh%20flowers%2C%20warm%20pendant%20lighting%2C%20wooden%20accents%2C%20welcoming%20hospitality%20atmosphere%2C%20soft%20golden%20hour%20light%2C%20editorial%20interior%20photography%2C%20warm%20earth%20tones%20and%20cream%20palette%2C%20high%20detail%20elegant%20composition&width=1600&height=900&seq=revanta-hero-02&orientation=landscape',
  'https://readdy.ai/api/search-image?query=Luxurious%20hotel%20suite%20bedroom%20with%20crisp%20white%20linens%2C%20soft%20ambient%20lighting%2C%20floor%20to%20ceiling%20windows%20overlooking%20city%20skyline%2C%20warm%20neutral%20color%20palette%2C%20editorial%20interior%20photography%2C%20sophisticated%20hospitality%20design%2C%20high%20detail%20serene%20composition&width=1600&height=900&seq=revanta-hero-03&orientation=landscape',
  'https://readdy.ai/api/search-image?query=Beautiful%20hotel%20rooftop%20terrace%20at%20golden%20hour%20with%20comfortable%20lounge%20seating%2C%20string%20lights%2C%20panoramic%20view%2C%20warm%20amber%20lighting%2C%20sophisticated%20hospitality%20atmosphere%2C%20editorial%20travel%20photography%2C%20warm%20tones%20with%20soft%20shadows%2C%20high%20detail%20inviting%20composition&width=1600&height=900&seq=revanta-hero-04&orientation=landscape',
  'https://readdy.ai/api/search-image?query=Charming%20hotel%20corridor%20with%20warm%20wall%20sconces%2C%20elegant%20artwork%2C%20plush%20carpet%20runner%2C%20soft%20golden%20lighting%20creating%20depth%20and%20warmth%2C%20boutique%20hospitality%20interior%2C%20editorial%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20architectural%20composition&width=1600&height=900&seq=revanta-hero-05&orientation=landscape',
  'https://readdy.ai/api/search-image?query=Hotel%20restaurant%20dining%20area%20with%20ambient%20candlelight%2C%20crisp%20white%20tablecloths%2C%20warm%20wooden%20furniture%2C%20soft%20golden%20glow%2C%20sophisticated%20hospitality%20setting%2C%20editorial%20food%20and%20travel%20photography%2C%20warm%20earth%20tones%2C%20high%20detail%20inviting%20atmosphere&width=1600&height=900&seq=revanta-hero-06&orientation=landscape',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-black">
      <div className="absolute inset-0 will-change-transform">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-[13px] font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
          Trusted by 500+ hotels worldwide
        </span>
        <h1 className="font-heading text-[42px] leading-[1.06] md:text-[64px] md:leading-[1.04] lg:text-[76px] tracking-[-0.02em] font-semibold max-w-4xl transition-colors duration-1000 text-white">
          <span>Every guest has a story.</span>
          <br />
          <span className="text-primary-400">Do you know yours?</span>
        </h1>
        <p className="mt-6 text-white/75 text-[16px] md:text-lg leading-relaxed max-w-xl">
          Revanta captures real-time feedback from every guest, reveals what they truly
          think about your hotel, and gives you the insights to turn good stays into
          unforgettable ones.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#cta"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-14 bg-primary-500 text-white text-[15px] font-medium rounded-full hover:bg-primary-600 transition-all hover:scale-[1.02] whitespace-nowrap cursor-pointer"
          >
            <i className="ri-chat-smile-2-line text-[18px]" />
            Start listening to guests
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 h-14 bg-white/10 backdrop-blur text-white text-[15px] font-medium rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all hover:scale-[1.02] whitespace-nowrap cursor-pointer"
          >
            <i className="ri-play-circle-line text-[18px]" />
            See how it works
          </a>
        </div>
        <div className="absolute bottom-16 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[11px] font-medium text-white/60 uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white bouncer" />
          </div>
        </div>
      </div>
    </section>
  );
}
