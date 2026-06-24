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
    a: 'No. Our proprietary industry-tested survey templates are designed by hospitality experts to maximize completion rates. They are built to work perfectly out of the box and cannot be customized, ensuring you get standard, benchmarkable insights from every guest.',
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
    <div className="min-h-screen bg-background-50 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-[600px] bg-gradient-to-bl from-primary-100/30 to-transparent -z-10 blur-3xl" />
      <Navbar />
      <main className="flex-1 pt-32 pb-32 px-4 md:px-8 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 md:mb-32">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary-600" />
              Help Center
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] text-foreground-950 font-medium leading-[1.05] tracking-tight">
              How can we <span className="italic font-light text-foreground-600">help?</span>
            </h1>
          </div>

          <div className="space-y-0 border-t border-background-200/80">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-background-200/80 overflow-hidden">
                <summary className="flex items-center justify-between py-8 cursor-pointer list-none transition-colors hover:bg-background-100/30 px-4 -mx-4 rounded-lg">
                  <span className="font-heading text-2xl md:text-3xl text-foreground-950 font-medium max-w-3xl pr-8 group-hover:text-primary-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="relative flex shrink-0 items-center justify-center w-8 h-8 rounded-full border border-foreground-950/20 group-hover:border-primary-500 transition-colors">
                    <span className="absolute w-3 h-[1px] bg-foreground-950 group-hover:bg-primary-600 transition-colors" />
                    <span className="absolute w-[1px] h-3 bg-foreground-950 group-hover:bg-primary-600 transition-all duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <div className="pb-8 px-4 -mx-4 md:pl-0 md:ml-0 max-w-3xl">
                  <p className="text-foreground-600 font-sans text-lg md:text-xl leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-32 text-center bg-background-100/50 border border-background-200 p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10">
              <h3 className="font-heading text-4xl text-foreground-950 mb-6 font-medium">Still have questions?</h3>
              <p className="font-sans text-lg text-foreground-600 mb-10 max-w-lg mx-auto font-light">
                Our support team is available around the clock to help you get the most out of Revanta.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-10 h-14 bg-foreground-950 text-background-50 font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-600 transition-all duration-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
