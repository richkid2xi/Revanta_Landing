import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const sections = [
  {
    title: 'Information we collect',
    paragraphs: [
      'When you use Revanta, we collect information that you provide directly — such as your name, email address, hotel name, and payment details when you subscribe. We also collect survey response data that your guests submit through the platform.',
      'We automatically collect certain technical information when you access Revanta, including your IP address, browser type, device information, and usage patterns. This helps us improve our service and troubleshoot issues.',
    ],
  },
  {
    title: 'How we use your information',
    paragraphs: [
      'We use the information we collect to provide, maintain, and improve Revanta. This includes processing your subscription, delivering surveys to your guests, generating analytics and reports, and sending you account-related communications.',
      'We use guest survey data solely to provide you with insights and analytics. We never sell, share, or use your guest data for any purpose other than delivering the Revanta service to you.',
    ],
  },
  {
    title: 'Data security',
    paragraphs: [
      'We implement industry-standard security measures to protect your data. All data transmitted between your browser and our servers is encrypted using TLS. We regularly audit our security practices and maintain strict access controls.',
    ],
  },
  {
    title: 'Your rights',
    paragraphs: [
      'You have the right to access, correct, or delete your personal data at any time. You can export your data from within the Revanta dashboard. To request full account deletion, please contact our support team.',
      'Hotel guests who have submitted surveys through Revanta can request deletion of their responses by contacting the hotel directly or reaching out to us at privacy@revanta.io.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'If you have questions about this privacy policy or how we handle your data, please contact us at privacy@revanta.io or through our contact page.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-4">
              Privacy Policy
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
