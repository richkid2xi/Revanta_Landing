import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const faqs = [
  {
    q: 'How long does it take to set up Revanta?',
    a: 'Most hotels are up and running within 10 minutes. You connect your property, add your rooms and amenities, and our system automatically configures the right survey flows. No technical knowledge required.',
  },
  {
    q: 'Can guests take surveys in their own language?',
    a: 'Yes. Revanta supports 14 languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Mandarin, Arabic, and more. Guests automatically receive surveys in their preferred language.',
  },
  {
    q: 'How do guests receive the surveys?',
    a: 'We offer multiple delivery methods: email, SMS, QR codes placed in rooms and common areas, and direct links. You can mix and match based on what works best for your guests.',
  },
  {
    q: 'Can I customize the survey questions?',
    a: 'Absolutely. While we provide industry-tested templates that work great out of the box, you can fully customize every question, add your branding, and create department-specific survey flows.',
  },
  {
    q: 'How does the AI sentiment analysis work?',
    a: 'Our AI reads every open-ended guest response and categorizes the sentiment as positive, neutral, or negative. It also tags responses by topic — so you can instantly see that breakfast scored low specifically because of coffee quality, not the selection.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every plan comes with a 14-day free trial. No credit card required. You get full access to all features so you can see exactly how Revanta works for your property.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes. You can export all your survey data and analytics as CSV or PDF at any time. Enterprise customers also get API access for direct data integration.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Starter plans get email support with responses within 24 hours. Professional plans get priority support with responses within 4 hours. Enterprise customers get a dedicated success manager and 24/7 phone support.',
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="pt-24 pb-10 md:pt-32 md:pb-14 px-4 md:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2 justify-center">
              <span className="w-6 h-px bg-foreground-400" />
              Help Center
            </span>
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-4">
              How can we help?
            </h1>
            <p className="text-foreground-700 text-[15px] md:text-base leading-relaxed">
              Find answers to common questions about Revanta. If you cannot find what you need, reach out to our team.
            </p>
          </div>
        </section>

        <section className="pb-20 md:pb-28 px-4 md:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-background-200 bg-background-100/60 overflow-hidden cursor-pointer">
                <summary className="flex items-center justify-between px-6 py-5 text-[15px] md:text-base font-medium text-foreground-950 list-none">
                  {faq.q}
                  <i className="ri-add-line text-foreground-500 group-open:hidden text-lg shrink-0 ml-4" />
                  <i className="ri-subtract-line text-foreground-500 hidden group-open:block text-lg shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 text-foreground-700 text-[14px] md:text-[15px] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-foreground-600 text-[14px] mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 h-11 bg-primary-500 text-white text-sm font-medium rounded-full hover:bg-primary-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Contact us
              <i className="ri-arrow-right-line text-[14px]" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
