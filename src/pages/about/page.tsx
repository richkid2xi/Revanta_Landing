import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

/* ─── Scroll reveal hook ─── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const team = [
  { name: 'Moses Amenorpe', role: 'Founder & CEO', image: '' },
  { name: 'Richard Elikem', role: 'Lead Developer', image: '' },
  { name: 'Bright Akoto', role: 'Frontend Developer & SEO Specialist', image: '' },
];

const milestones = [
  { year: '2024', event: 'Problem Discovery', detail: 'The founding team identifies the pressing need for better guest feedback systems in the African hospitality sector.' },
  { year: '2025', event: 'Research & Development', detail: 'We spend the year interviewing hotel operators and building the core platform tailored to real operational needs.' },
  { year: '2026', event: 'Refining the Solution', detail: 'Working closely with select pilot properties in Accra to iterate on our sentiment analysis and survey tools.' },
  { year: 'Present', event: 'Launch', detail: 'Revanta officially launches to help hotels turn guest feedback into actionable insights and better business.' },
];

const stats = [
  { value: '500+', label: 'Hotels worldwide' },
  { value: '28', label: 'Countries' },
  { value: '94%', label: 'Survey completion rate' },
  { value: '2.1×', label: 'Avg. repeat booking lift' },
];

export default function AboutPage() {
  const heroRef = useReveal<HTMLDivElement>();
  const narrativeRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();
  const teamRef = useReveal<HTMLDivElement>();
  const milestonesRef = useReveal<HTMLDivElement>();
  const valuesRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background-50 flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="pt-40 pb-24 md:pt-48 md:pb-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              ref={heroRef.ref}
              className={`flex flex-col md:flex-row items-end justify-between gap-12 transition-all duration-1000 ease-out ${heroRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex-1">
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-6 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-primary-600" />
                  Our Story
                </span>
                <h1 className="font-heading text-5xl md:text-7xl lg:text-[80px] text-foreground-950 font-medium leading-[1.05] tracking-tight">
                  Turning guest <br className="hidden md:block" />
                  <span className="italic font-light text-foreground-600">voices</span> into <br className="hidden md:block" />
                  better stays.
                </h1>
              </div>
              <div className="w-full md:w-1/3 border-l border-primary-200 pl-6 md:pl-10">
                <p className="text-foreground-700 font-sans text-lg md:text-xl leading-relaxed">
                  We believe every guest has a story, and every hotel has the power to listen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Strip ── */}
        <section className="py-16 border-t border-b border-background-200 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              ref={statsRef.ref}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center md:border-r md:last:border-r-0 border-background-200 transition-all duration-700 ease-out ${statsRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <p className="font-heading text-4xl md:text-5xl font-medium text-foreground-950 mb-2">
                    {stat.value}
                  </p>
                  <p className="font-sans text-sm text-foreground-500 uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Narrative ── */}
        <section className="py-24 bg-foreground-950 text-background-50 px-4 md:px-8">
          <div
            ref={narrativeRef.ref}
            className={`max-w-4xl mx-auto space-y-12 font-sans text-lg md:text-2xl leading-relaxed font-light text-background-200 transition-all duration-1000 ease-out ${narrativeRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p>
              Revanta was born from a simple observation: hotel owners pour their hearts into creating
              great experiences, but most have no reliable way to know what their guests actually think.
            </p>
            <p>
              TripAdvisor reviews arrive weeks after checkout. Front desk feedback gets lost in shift
              handovers. And those paper comment cards?{' '}
              <span className="text-primary-400 dark:text-primary-300 font-medium italic">Nobody fills them out.</span>
            </p>
            <p>
              We built Revanta to close that gap. Our platform makes it effortless for hotels to collect
              real-time feedback at every stage of the guest journey — from check-in to checkout and
              beyond. More importantly, we turn that feedback into clear, actionable insights that hotel
              teams can actually use.
            </p>
            <div className="pt-12 border-t border-background-800">
              <p className="text-primary-400 font-heading text-3xl md:text-4xl italic">
                "From boutique bed-and-breakfasts to luxury resort chains, our mission is the same: make
                sure no guest experience goes unheard."
              </p>
            </div>
          </div>
        </section>

        {/* ── Milestones ── */}
        <section className="py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              ref={milestonesRef.ref}
              className={`transition-all duration-700 ease-out ${milestonesRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-primary-600 mb-6 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-primary-600" />
                Milestones
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground-950 font-medium mb-20">
                How we <span className="italic font-light text-foreground-500">got here</span>
              </h2>
            </div>
            <div className="relative border-l border-background-200 pl-8 md:pl-16 space-y-16">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative transition-all duration-700 ease-out ${milestonesRef.visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + i * 120}ms` }}
                >
                  {/* Dot on the timeline */}
                  <span className="absolute -left-[2.65rem] md:-left-[4.65rem] top-1 w-3 h-3 rounded-full bg-primary-500 border-2 border-background-50 mt-1.5" />
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                    <div className="shrink-0 md:w-24 text-right hidden md:block">
                      <span className="font-heading text-2xl font-medium text-foreground-300">{m.year}</span>
                    </div>
                    <div>
                      <span className="font-sans text-xs uppercase tracking-widest text-foreground-400 md:hidden mb-1 block">{m.year}</span>
                      <h3 className="font-heading text-2xl text-foreground-950 font-medium mb-2">{m.event}</h3>
                      <p className="font-sans text-[15px] text-foreground-600 font-light leading-relaxed max-w-xl">{m.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="py-24 md:py-32 px-4 md:px-8 bg-background-100/40">
          <div className="max-w-6xl mx-auto">
            <div
              ref={teamRef.ref}
              className={`flex flex-col items-center md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8 transition-all duration-700 ease-out ${teamRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="text-center md:text-left">
                <h2 className="font-heading text-4xl md:text-6xl text-foreground-950 font-medium">
                  The people <br />
                  <span className="italic text-foreground-500 font-light">behind Revanta</span>
                </h2>
              </div>
              <p className="text-foreground-600 font-sans text-sm tracking-widest uppercase max-w-xs text-center md:text-right">
                A dedicated team of hospitality experts and engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {team.map((member, idx) => (
                <div
                  key={member.name}
                  className={`group relative transition-all duration-700 ease-out ${teamRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden mb-6 bg-background-200">
                    {member.image ? (
                      <img
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center grayscale opacity-60 dark:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
                        src={member.image}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-background-200/50">
                        <i className="ri-user-smile-line text-5xl text-foreground-300 mb-2" />
                        <span className="text-[10px] text-foreground-400 uppercase tracking-widest">Photo</span>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-end border-b border-background-200 pb-3 group-hover:border-primary-500 transition-colors duration-500">
                    <div>
                      <h3 className="font-heading text-2xl text-foreground-950 font-medium">{member.name}</h3>
                      <p className="font-sans text-sm text-primary-600 tracking-wide uppercase mt-1">{member.role}</p>
                    </div>
                    <span className="text-foreground-300 font-heading text-xl italic group-hover:text-primary-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              ref={valuesRef.ref}
              className={`transition-all duration-700 ease-out ${valuesRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-foreground-950 font-medium mb-20 text-center">
                What we believe
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
              {[
                { title: 'Every guest matters', desc: 'A single unhappy guest can cost you ten future bookings. We believe every voice deserves to be heard while there is still time to make things right.' },
                { title: 'Data beats guessing', desc: 'Intuition is valuable, but hard numbers from real guests are what actually drive better decisions. We turn opinions into evidence.' },
                { title: 'Simplicity wins', desc: 'The best tools are the ones people actually use. We obsess over making Revanta so simple that your entire team adopts it without training.' },
              ].map((value, idx) => (
                <div
                  key={value.title}
                  className={`relative group transition-all duration-700 ease-out ${valuesRef.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${200 + idx * 150}ms` }}
                >
                  <div className="absolute -top-12 left-0 text-[120px] font-heading font-light text-foreground-950/15 dark:text-white/25 leading-none -z-10 group-hover:text-primary-500/25 group-hover:-translate-y-2 transition-all duration-500">
                    {idx + 1}
                  </div>
                  <div className="border-t-2 border-foreground-950 pt-6 mt-12">
                    <h3 className="font-heading text-2xl text-foreground-950 font-medium mb-4">{value.title}</h3>
                    <p className="text-foreground-600 font-sans text-[15px] leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 px-4 md:px-8 bg-foreground-950">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-6xl text-background-50 font-medium leading-tight mb-6">
              Ready to start <span className="italic font-light text-background-400">listening?</span>
            </h2>
            <p className="font-sans text-lg text-background-400 font-light mb-10 max-w-xl mx-auto">
              Join 500+ hotels already using Revanta to turn guest feedback into better stays — and better business.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 h-14 bg-primary-500 text-white font-sans text-sm tracking-[0.2em] uppercase hover:bg-primary-600 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
