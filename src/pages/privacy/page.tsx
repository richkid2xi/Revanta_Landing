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
      'Hotel guests who have submitted surveys through Revanta can request deletion of their responses by contacting the hotel directly or reaching out to us at privacy@revanta.com.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      'If you have questions about this privacy policy or how we handle your data, please contact us at privacy@revanta.com or through our contact page.',
    ],
  },
];

export default function PrivacyPage() {
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
              Privacy <span className="italic font-light text-foreground-600">Policy</span>
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
