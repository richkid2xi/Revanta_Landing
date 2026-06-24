import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined
    const cookieChoice = localStorage.getItem('revanta-cookie-choice');
    if (!cookieChoice) {
      // Small delay for the slide-in animation to feel natural
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = (choice: 'accept' | 'decline') => {
    localStorage.setItem('revanta-cookie-choice', choice);
    setVisible(false);
  };

  return (
    <>
      {/* Mobile floating card */}
      <div
        className={`md:hidden fixed bottom-4 left-4 right-4 z-50 transition-all duration-700 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-2xl rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
          <div className="flex items-start gap-3 mb-4">
            <span className="text-3xl leading-none mt-0.5 shrink-0">🍪</span>
            <div>
              <h4 className="font-heading text-base font-semibold text-zinc-900 dark:text-white mb-1">
                We use cookies
              </h4>
              <p className="font-sans text-[13px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                We use cookies to improve your experience on our site. Read our{' '}
                <a href="/privacy" className="text-primary-600 font-medium hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handleDismiss('decline')}
              className="flex-1 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => handleDismiss('accept')}
              className="flex-1 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>

      {/* Desktop full-width bottom bar */}
      <div
        className={`hidden md:block fixed bottom-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 shadow-2xl">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-6">
            <span className="text-3xl shrink-0 leading-none">🍪</span>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-1 leading-relaxed font-light">
              <span className="font-semibold text-zinc-900 dark:text-white">We use cookies.</span>{' '}
              We use cookies to ensure you get the best experience on our site. Read our{' '}
              <a className="text-primary-600 dark:text-primary-400 font-medium hover:underline" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleDismiss('decline')}
                className="px-6 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer whitespace-nowrap"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => handleDismiss('accept')}
                className="px-8 h-10 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
