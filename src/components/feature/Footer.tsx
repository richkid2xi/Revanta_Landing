const footerLinks = {
  product: [
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Features', href: '/#features' },
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
    <footer className="bg-zinc-950 text-white">
      <div className="px-4 md:px-8 lg:px-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
            {/* Branding Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <a href="/" className="inline-flex items-center gap-4 mb-6 group">
                  <span className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center shrink-0 group-hover:border-primary-500 transition-colors">
                    <i className="ri-hotel-line text-white text-2xl" />
                  </span>
                  <span className="font-heading text-4xl font-medium tracking-tight text-white">
                    Revanta
                  </span>
                </a>
                <h3 className="font-heading text-2xl md:text-3xl text-white font-medium leading-tight mb-4 max-w-sm">
                  Listen to <span className="italic text-zinc-400 font-light">every</span> guest.
                </h3>
                <p className="font-sans text-[15px] font-light leading-relaxed text-zinc-400 max-w-xs">
                  The premier guest intelligence platform designed exclusively for hoteliers who believe that true hospitality begins with listening.
                </p>
                <p className="font-sans text-[15px] font-light leading-relaxed text-zinc-400 max-w-xs mt-4">
                  Headquarters: Accra, Ghana <br />
                  Email: revanta2026@gmail.com <br />
                  Phone: 0542818334, 0206891111
                </p>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 pt-4">
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                  Product
                </h4>
                <ul className="space-y-5">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans text-[15px] font-light text-zinc-400 hover:text-white transition-colors inline-flex items-center"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                  Company
                </h4>
                <ul className="space-y-5">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans text-[15px] font-light text-zinc-400 hover:text-white transition-colors inline-flex items-center"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-8">
                  Resources
                </h4>
                <ul className="space-y-5">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="font-sans text-[15px] font-light text-zinc-400 hover:text-white transition-colors inline-flex items-center"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-sans text-[13px] text-zinc-500 font-light tracking-wide">
                &copy; {new Date().getFullYear()} Revanta. Built for hoteliers who care.
              </p>
              <p className="font-sans text-[12px] text-zinc-600 font-light tracking-wide">
                Powered by EliTech CreaTives
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://twitter.com" className="text-zinc-500 hover:text-white transition-colors" aria-label="Twitter">
                <i className="ri-twitter-x-line text-lg" />
              </a>
              <a href="https://linkedin.com" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-xl" />
              </a>
              <a href="https://wa.me/" className="text-zinc-500 hover:text-white transition-colors" aria-label="WhatsApp">
                <i className="ri-whatsapp-line text-xl" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
