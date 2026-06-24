const footerLinks = {
  product: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '/pricing' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Help Center', href: '/help' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-secondary-100 border-t border-background-200">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      <div className="px-4 md:px-8 lg:px-10 pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-14">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center shrink-0">
                  <i className="ri-hotel-line text-white text-lg" />
                </span>
                <span className="font-heading font-semibold text-[18px] text-foreground-950">
                  Revanta
                </span>
              </div>
              <p className="font-heading text-2xl md:text-[28px] text-foreground-950 font-semibold leading-tight mb-3">
                Listen to every guest.
              </p>
              <p className="text-foreground-600 text-[15px] leading-relaxed max-w-sm">
                The guest feedback platform that helps hotel owners turn every stay into a reason to return.
              </p>
            </div>
            <div className="md:col-span-7 grid grid-cols-3 gap-6 sm:gap-10">
              <div>
                <p className="text-[11px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-4">
                  Product
                </p>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-foreground-800 hover:text-primary-600 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {link.label}
                        <i className="ri-arrow-right-up-line text-[13px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-4">
                  Company
                </p>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-foreground-800 hover:text-primary-600 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {link.label}
                        <i className="ri-arrow-right-up-line text-[13px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-4">
                  Resources
                </p>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-foreground-800 hover:text-primary-600 transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {link.label}
                        <i className="ri-arrow-right-up-line text-[13px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-background-200 bg-background-50/80 px-5 py-5 md:px-6 md:py-5">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-foreground-600 text-center sm:text-left">
                &copy; 2026 Revanta. Built for hoteliers who care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
