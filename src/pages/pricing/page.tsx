import { useState, useEffect } from 'react';
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

function AnimatedPrice({ annual, basePrice, period }: { annual: boolean; basePrice: string; period: string }) {
  if (basePrice === 'Custom') {
    return <span className="font-heading text-5xl md:text-6xl font-medium text-foreground-950">Custom</span>;
  }

  const numericBase = Number(basePrice);
  const targetPrice = annual ? Math.round(numericBase * 0.8) : numericBase;
  
  // Initialize with the target price to avoid animation on initial load
  const [currentDisplay, setCurrentDisplay] = useState(targetPrice);

  useEffect(() => {
    let startValue = currentDisplay;
    let endValue = targetPrice;
    
    if (startValue === endValue) return;

    const duration = 400; // ms
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutCubic easing function
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCurrentDisplay(Math.round(startValue + (endValue - startValue) * easeProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [targetPrice]); // Intentionally omitting currentDisplay to only trigger on target change

  return (
    <div className="flex items-baseline gap-1">
      <span className="font-heading text-6xl md:text-7xl font-medium text-foreground-950 tabular-nums tracking-tighter">
        ${currentDisplay}
      </span>
      <span className="text-foreground-500 font-sans text-sm tracking-widest uppercase">{period}</span>
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background-50 flex flex-col relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-primary-100/30 to-transparent -z-10 blur-3xl" />
      
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-4 md:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20 md:mb-32 max-w-4xl mx-auto">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-6 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-primary-600" />
              Plans & Pricing
              <span className="w-12 h-[1px] bg-primary-600" />
            </span>
            <h1 className="font-heading text-5xl md:text-7xl text-foreground-950 font-medium leading-[1.05] tracking-tight mb-8">
              Invest in your <span className="italic font-light text-foreground-600">guest experience</span>.
            </h1>
            
            <div className="inline-flex items-center gap-2 bg-background-100/80 backdrop-blur-md rounded-full p-1.5 border border-background-200/50 shadow-sm mx-auto">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 cursor-pointer ${!annual ? 'bg-foreground-950 text-background-50 shadow-md' : 'text-foreground-500 hover:text-foreground-950'}`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded-full transition-all duration-300 cursor-pointer flex items-center gap-2 ${annual ? 'bg-foreground-950 text-background-50 shadow-md' : 'text-foreground-500 hover:text-foreground-950'}`}
              >
                Annual
                <span className={`px-2 py-0.5 text-[10px] rounded-full transition-colors ${annual ? 'bg-background-50/20 text-background-50' : 'bg-primary-100 text-primary-700'}`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-background-50/80 backdrop-blur-xl border border-primary-200/50 shadow-2xl shadow-primary-900/5 p-10 md:p-12 md:-my-8 z-10 transform hover:-translate-y-2'
                    : 'bg-transparent border border-background-200/60 p-8 md:p-10 hover:border-background-300 transform hover:-translate-y-1'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600" />
                )}
                
                <div className="mb-12">
                  {plan.highlighted && (
                    <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary-600 mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-3xl text-foreground-950 font-medium mb-3">{plan.name}</h3>
                  <p className="text-foreground-500 font-sans text-[15px] leading-relaxed mb-8 h-12">
                    {plan.desc}
                  </p>
                  <div className="min-h-[80px] flex items-center">
                    <AnimatedPrice annual={annual} basePrice={plan.price} period={plan.period} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="w-full h-px bg-background-200 mb-8" />
                  <ul className="space-y-4 mb-12">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4 text-[15px] text-foreground-700 font-sans">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? 'bg-primary-100 text-primary-600' : 'bg-background-200 text-foreground-500'}`}>
                          <i className="ri-check-line text-[12px]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="/contact"
                  className={`group relative inline-flex items-center justify-center w-full h-14 font-sans text-sm tracking-[0.2em] uppercase overflow-hidden ${
                    plan.highlighted
                      ? 'bg-foreground-950 text-background-50'
                      : 'bg-transparent text-foreground-950 border border-foreground-950 hover:bg-background-100'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-3 transition-transform group-hover:-translate-y-px">
                    {plan.price === 'Custom' ? 'Contact Us' : 'Start Free Trial'}
                    {plan.highlighted && <i className="ri-arrow-right-line" />}
                  </span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center max-w-2xl mx-auto">
            <p className="font-heading text-2xl text-foreground-700 italic">
              "We switched to Revanta's Professional plan and saw a 40% increase in guest feedback within the first month. The investment pays for itself."
            </p>
            <p className="font-sans text-sm tracking-widest uppercase text-foreground-500 mt-6 font-semibold">
              — Director of Operations, The Grand Hotel
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
