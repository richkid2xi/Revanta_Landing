import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const plans = [
  {
    name: 'Starter',
    price: '49',
    period: '/month',
    desc: 'Perfect for small boutique hotels and B&Bs.',
    features: [
      'Up to 25 rooms',
      'In-stay & post-stay surveys',
      'Basic analytics dashboard',
      'Email delivery',
      '3 team members',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '149',
    period: '/month',
    desc: 'For growing hotels that want deeper insights.',
    features: [
      'Up to 100 rooms',
      'Everything in Starter',
      'AI sentiment analysis',
      'Category-level breakdowns',
      'Benchmark comparisons',
      'SMS + QR code delivery',
      'Weekly executive summaries',
      '10 team members',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For hotel groups and large resorts.',
    features: [
      'Unlimited rooms',
      'Everything in Professional',
      'Custom integrations',
      'Dedicated success manager',
      'Multi-property dashboard',
      'White-label surveys',
      'API access',
      'Unlimited team members',
      '24/7 phone support',
    ],
    highlighted: false,
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2 justify-center">
              <span className="w-6 h-px bg-foreground-400" />
              Pricing
            </span>
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-4">
              Simple pricing for hotels of every size
            </h1>
            <p className="text-foreground-700 text-[15px] md:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Start with a 14-day free trial. No credit card required. Upgrade, downgrade, or cancel anytime.
            </p>
            <div className="inline-flex items-center gap-3 bg-background-100/60 rounded-full p-1 border border-background-200">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${!annual ? 'bg-primary-500 text-white' : 'text-foreground-700 hover:text-foreground-950'}`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${annual ? 'bg-primary-500 text-white' : 'text-foreground-700 hover:text-foreground-950'}`}
              >
                Annual <span className="text-[11px] opacity-70">Save 20%</span>
              </button>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? 'border-primary-300 bg-primary-50/40 ring-1 ring-primary-200'
                      : 'border-background-200 bg-background-100/60'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="inline-flex self-start px-3 py-1 rounded-full bg-primary-500 text-white text-[11px] font-semibold mb-4">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl text-foreground-950 font-semibold mb-1">{plan.name}</h3>
                  <p className="text-foreground-600 text-[14px] mb-5">{plan.desc}</p>
                  <div className="mb-6">
                    {plan.price === 'Custom' ? (
                      <span className="font-heading text-4xl md:text-5xl font-bold text-foreground-950">Custom</span>
                    ) : (
                      <div className="flex items-baseline gap-0.5">
                        <span className="font-heading text-4xl md:text-5xl font-bold text-foreground-950">
                          ${annual ? Math.round(Number(plan.price) * 0.8) : plan.price}
                        </span>
                        <span className="text-foreground-600 text-[15px]">{plan.period}</span>
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-[14px] text-foreground-700">
                        <i className="ri-check-line text-primary-500 mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full h-11 text-sm font-medium rounded-full transition-colors whitespace-nowrap cursor-pointer ${
                      plan.highlighted
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-background-50 text-foreground-950 border border-foreground-950/15 hover:border-foreground-950/40 hover:bg-background-100'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact us' : 'Start free trial'}
                    <i className="ri-arrow-right-line text-[14px]" />
                  </a>
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
