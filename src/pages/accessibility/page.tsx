import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background-50 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24 md:mb-32">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary-600" />
              Legal
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] text-foreground-950 font-medium leading-[1.05] tracking-tight">
              Accessibility <span className="italic font-light text-foreground-600">Statement</span>
            </h1>
            <p className="mt-8 font-sans text-sm tracking-widest uppercase text-foreground-500 font-semibold">
              Effective Date: June 2026
            </p>
          </div>

          <div className="space-y-24">
            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-4 sticky top-32">
                <span className="block text-6xl md:text-8xl font-heading font-light text-primary-200 leading-none mb-4">
                  01
                </span>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground-950 font-medium pt-4 border-t-2 border-foreground-950">
                  Our Commitment
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6 md:pt-24 text-foreground-700 font-sans text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Revanta is committed to ensuring digital accessibility for people of all abilities.
                  We are continually improving the user experience and applying relevant accessibility
                  standards to make our platform inclusive for everyone.
                </p>
                <p>
                  We strive to meet WCAG 2.1 Level AA standards across our platform. Our development
                  team regularly reviews our interfaces for accessibility and works to address any
                  issues identified during testing.
                </p>
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-4 sticky top-32">
                <span className="block text-6xl md:text-8xl font-heading font-light text-primary-200 leading-none mb-4">
                  02
                </span>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground-950 font-medium pt-4 border-t-2 border-foreground-950">
                  Measures We Take
                </h2>
              </div>
              <div className="md:col-span-8 md:pt-24">
                <ul className="space-y-4 list-none text-foreground-700 font-sans text-lg md:text-xl font-light leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    Keyboard-navigable interfaces throughout the platform
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    Semantic HTML structure for screen reader compatibility
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    Sufficient color contrast ratios for text readability
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    Descriptive labels and alt text for all images and icons
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    Resizable text without loss of functionality
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="block mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    Consistent navigation patterns across pages
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-4 sticky top-32">
                <span className="block text-6xl md:text-8xl font-heading font-light text-primary-200 leading-none mb-4">
                  03
                </span>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground-950 font-medium pt-4 border-t-2 border-foreground-950">
                  Feedback
                </h2>
              </div>
              <div className="md:col-span-8 space-y-6 md:pt-24 text-foreground-700 font-sans text-lg md:text-xl font-light leading-relaxed">
                <p>
                  We welcome your feedback on the accessibility of Revanta. If you encounter any
                  barriers or have suggestions for improvement, please reach out to us at{' '}
                  <a href="mailto:accessibility@revanta.com" className="text-primary-600 hover:text-primary-800 transition-colors border-b border-primary-200 hover:border-primary-600 pb-1">
                    accessibility@revanta.com
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
