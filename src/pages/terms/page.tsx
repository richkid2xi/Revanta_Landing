import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const sections = [
  {
    title: 'Acceptance of terms',
    paragraphs: [
      'By accessing or using Revanta, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service.',
    ],
  },
  {
    title: 'Your account',
    paragraphs: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating your account and keep that information up to date.',
    ],
  },
  {
    title: 'Subscription and payments',
    paragraphs: [
      'Revanta offers monthly and annual subscription plans. You will be billed in advance on a recurring basis according to your chosen plan. All fees are non-refundable except where required by law.',
      'You may upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of the next billing cycle. If you cancel, you will retain access to Revanta until the end of your current billing period.',
    ],
  },
  {
    title: 'Acceptable use',
    paragraphs: [
      'You agree not to misuse Revanta. This includes attempting to gain unauthorized access, interfering with the service, using the platform for illegal purposes, or violating the privacy rights of your guests.',
    ],
  },
  {
    title: 'Guest data',
    paragraphs: [
      'You retain full ownership of all guest feedback data collected through Revanta. By using our platform, you grant us a limited license to process and store this data solely for the purpose of providing the Revanta service to you.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'Revanta is provided on an "as is" basis. We make no warranties regarding the availability or accuracy of the service. To the fullest extent permitted by law, our liability is limited to the amount you paid us in the twelve months preceding the claim.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'For questions about these terms, please contact us at legal@revanta.com.',
    ],
  },
];

export default function TermsPage() {
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
              Terms of <span className="italic font-light text-foreground-600">Service</span>
            </h1>
            <p className="mt-8 font-sans text-sm tracking-widest uppercase text-foreground-500 font-semibold">
              Effective Date: June 2026
            </p>
          </div>

          <div className="space-y-24">
            {sections.map((section, idx) => (
              <div key={section.title} className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="md:col-span-4 sticky top-32">
                  <span className="block text-6xl md:text-8xl font-heading font-light text-primary-200 leading-none mb-4">
                    0{idx + 1}
                  </span>
                  <h2 className="font-heading text-2xl md:text-3xl text-foreground-950 font-medium pt-4 border-t-2 border-foreground-950">
                    {section.title}
                  </h2>
                </div>
                <div className="md:col-span-8 space-y-6 md:pt-24">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-foreground-700 font-sans text-lg md:text-xl font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
