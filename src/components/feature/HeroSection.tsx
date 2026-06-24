import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  '/images/hero_1.png',
  '/images/hero_2.png',
  '/images/hero_3.png',
  '/images/hero_4.png',
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

  const prev = (current - 1 + heroImages.length) % heroImages.length;

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-black">
      <div className="absolute inset-0 will-change-transform">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              clipPath: i === current ? 'inset(0 0 0 0)' : (i === prev ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)'),
              zIndex: i === current ? 10 : (i === prev ? 5 : 0),
              transition: i === current ? 'clip-path 1.2s cubic-bezier(0.85, 0, 0.15, 1)' : 'none',
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8">
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
