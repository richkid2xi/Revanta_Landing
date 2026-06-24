import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Impact', href: '#impact' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isTransparent = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background-50/95 backdrop-blur-md border-b border-background-200/60 shadow-sm'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="px-4 md:px-8 lg:px-10">
          <div className="h-16 flex items-center justify-between">
            <a href="/" aria-label="Revanta" className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center shrink-0">
                <i className="ri-hotel-line text-white text-lg" />
              </span>
              <span
                className={`font-heading font-semibold tracking-tight text-xl transition-colors ${
                  isTransparent ? 'text-white' : 'text-foreground-950'
                }`}
              >
                Revanta
              </span>
            </a>

            {isHome && (
              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => scrollTo(item.href)}
                    className={`px-3 py-2 text-sm font-medium whitespace-nowrap rounded-md cursor-pointer transition-colors ${
                      isTransparent
                        ? 'text-white/80 hover:text-white hover:bg-white/10'
                        : 'text-foreground-700 hover:text-foreground-950 hover:bg-background-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            )}

            <div className="flex items-center gap-2">
              {/* Dark mode toggle — always visible in both themes */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                  isTransparent
                    ? 'bg-white/20 text-white hover:bg-white/30 border border-white/40 shadow-sm'
                    : 'bg-background-100 text-foreground-700 hover:bg-background-200 border border-background-200'
                }`}
                aria-label="Toggle dark mode"
              >
                <i className={`ri-${isDark ? 'sun-line' : 'moon-line'} text-base`} />
              </button>

              <a
                href="/contact"
                className={`hidden md:inline-flex items-center gap-2 px-5 h-9 text-sm font-medium rounded-full transition-all whitespace-nowrap cursor-pointer border shadow-sm ${
                  isTransparent
                    ? 'bg-white text-gray-900 hover:bg-white/95 border-white/80 hover:scale-[1.02]'
                    : 'bg-primary-500 text-white hover:bg-primary-600 border-transparent hover:scale-[1.02]'
                }`}
              >
                Get in touch
                <i className="ri-arrow-right-line text-[14px]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-colors ${
                  isTransparent
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'bg-background-100 text-foreground-900 border border-background-200'
                }`}
                aria-label="Menu"
              >
                <i className={`ri-${mobileOpen ? 'close-line' : 'menu-line'} text-lg`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-background-50/98 backdrop-blur pt-20 px-6 md:hidden">
          <div className="flex flex-col gap-2">
            {isHome && navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollTo(item.href)}
                className="px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors text-foreground-700 hover:text-foreground-950 hover:bg-background-100"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 h-11 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Get in touch
              <i className="ri-arrow-right-line text-[14px]" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
