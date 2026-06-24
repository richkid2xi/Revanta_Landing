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
      'For questions about these terms, please contact us at legal@revanta.io.',
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-4">
              Terms of Service
            </h1>
            <p className="text-foreground-500 text-[14px] mb-10">Last updated: June 2026</p>
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-heading text-xl md:text-2xl text-foreground-950 font-semibold mb-3">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-foreground-700 text-[15px] leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
