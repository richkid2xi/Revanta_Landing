import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-4">
              Accessibility Statement
            </h1>
            <p className="text-foreground-500 text-[14px] mb-10">Last updated: June 2026</p>
            <div className="space-y-6 text-foreground-700 text-[15px] leading-relaxed">
              <p>
                Revanta is committed to ensuring digital accessibility for people of all abilities.
                We are continually improving the user experience and applying relevant accessibility
                standards to make our platform inclusive for everyone.
              </p>
              <h2 className="font-heading text-xl text-foreground-950 font-semibold">Our commitment</h2>
              <p>
                We strive to meet WCAG 2.1 Level AA standards across our platform. Our development
                team regularly reviews our interfaces for accessibility and works to address any
                issues identified during testing.
              </p>
              <h2 className="font-heading text-xl text-foreground-950 font-semibold">Measures we take</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>Keyboard-navigable interfaces throughout the platform</li>
                <li>Semantic HTML structure for screen reader compatibility</li>
                <li>Sufficient color contrast ratios for text readability</li>
                <li>Descriptive labels and alt text for all images and icons</li>
                <li>Resizable text without loss of functionality</li>
                <li>Consistent navigation patterns across pages</li>
              </ul>
              <h2 className="font-heading text-xl text-foreground-950 font-semibold">Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of Revanta. If you encounter any
                barriers or have suggestions for improvement, please reach out to us at{' '}
                <a href="mailto:accessibility@revanta.io" className="text-primary-600 hover:text-primary-700 font-medium">
                  accessibility@revanta.io
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
