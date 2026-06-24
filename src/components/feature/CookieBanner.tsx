import { useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-background-50/95 backdrop-blur-md border-t border-background-200/60 shadow-lg">
      {/* Mobile layout */}
      <div className="md:hidden px-4 py-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
            <i className="ri-cookie-line text-primary-600 text-sm" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground-950 mb-0.5">Cookie Preferences</p>
            <p className="text-xs text-foreground-600 leading-relaxed">
              We use cookies to improve your experience. Read our{' '}
              <a className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-2" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex-1 h-10 rounded-full border border-background-200 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="flex-1 h-10 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors cursor-pointer"
          >
            Accept all
          </button>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
            <i className="ri-cookie-line text-primary-600 text-base" />
          </div>
          <p className="text-sm text-foreground-700 flex-1 leading-relaxed">
            We use cookies to ensure you get the best experience on our site. Read our{' '}
            <a className="text-primary-600 hover:text-primary-700 font-medium" href="/privacy">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="px-5 h-10 rounded-full border border-background-200 text-sm font-medium text-foreground-700 hover:bg-background-100 transition-colors cursor-pointer"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => setVisible(false)}
              className="px-5 h-10 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors cursor-pointer"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
