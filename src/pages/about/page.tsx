import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const team = [
  { name: 'Aditya Sharma', role: 'Co-Founder & CEO', image: 'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20Indian%20man%20in%20his%20late%2030s%20wearing%20a%20tailored%20navy%20blazer%2C%20confident%20friendly%20expression%2C%20soft%20warm%20cream%20studio%20background%2C%20editorial%20portrait%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20professional%20composition&width=300&height=300&seq=team-aditya&orientation=squarish' },
  { name: 'Isabel Moreno', role: 'Co-Founder & CPO', image: 'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20Latin%20American%20woman%20in%20her%2030s%20with%20dark%20wavy%20hair%2C%20wearing%20a%20cream%20linen%20blazer%2C%20soft%20warm%20studio%20background%2C%20editorial%20portrait%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20professional%20composition&width=300&height=300&seq=team-isabel&orientation=squarish' },
  { name: 'David Osei', role: 'Head of Engineering', image: 'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20Black%20man%20in%20his%20early%2030s%20wearing%20a%20simple%20dark%20sweater%2C%20friendly%20smile%2C%20soft%20warm%20cream%20studio%20background%2C%20editorial%20portrait%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20professional%20composition&width=300&height=300&seq=team-david&orientation=squarish' },
  { name: 'Clara Johansson', role: 'Head of Customer Success', image: 'https://readdy.ai/api/search-image?query=Warm%20portrait%20of%20Scandinavian%20woman%20in%20her%2030s%20with%20blonde%20hair%2C%20wearing%20a%20soft%20beige%20blouse%2C%20warm%20friendly%20expression%2C%20soft%20cream%20studio%20background%2C%20editorial%20portrait%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20professional%20composition&width=300&height=300&seq=team-clara&orientation=squarish' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-50">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-[12px] font-label uppercase tracking-[0.18em] text-foreground-500 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-foreground-400" />
              About us
            </span>
            <h1 className="font-heading text-3xl md:text-5xl tracking-[-0.02em] text-foreground-950 font-semibold leading-[1.05] mb-6">
              Helping hotels turn guest voices into better stays
            </h1>
            <div className="space-y-5 text-foreground-700 text-[15px] md:text-base leading-relaxed">
              <p>
                Revanta was born from a simple observation: hotel owners pour their hearts into creating
                great experiences, but most have no reliable way to know what their guests actually think.
                TripAdvisor reviews arrive weeks after checkout. Front desk feedback gets lost in shift
                handovers. And those paper comment cards? Nobody fills them out.
              </p>
              <p>
                We built Revanta to close that gap. Our platform makes it effortless for hotels to collect
                real-time feedback at every stage of the guest journey — from check-in to checkout and
                beyond. More importantly, we turn that feedback into clear, actionable insights that hotel
                teams can actually use.
              </p>
              <p>
                Today, over 500 hotels across 30 countries use Revanta to understand their guests better.
                From boutique bed-and-breakfasts to luxury resort chains, our mission is the same: make
                sure no guest experience goes unheard.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-background-100/60 border-t border-background-200/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl tracking-[-0.02em] text-foreground-950 font-semibold mb-10 text-center">
              The team behind Revanta
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center group">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-background-200 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                    <img
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                      src={member.image}
                    />
                  </div>
                  <p className="font-heading text-[15px] md:text-base font-semibold text-foreground-950">
                    {member.name}
                  </p>
                  <p className="text-[13px] text-foreground-600 mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 border-t border-background-200/60">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl tracking-[-0.02em] text-foreground-950 font-semibold mb-8 text-center">
              What we believe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: 'ri-chat-smile-2-line', title: 'Every guest matters', desc: 'A single unhappy guest can cost you ten future bookings. We believe every voice deserves to be heard while there is still time to make things right.' },
                { icon: 'ri-lightbulb-flash-line', title: 'Data beats guessing', desc: 'Intuition is valuable, but hard numbers from real guests are what actually drive better decisions. We turn opinions into evidence.' },
                { icon: 'ri-shield-check-line', title: 'Simplicity wins', desc: 'The best tools are the ones people actually use. We obsess over making Revanta so simple that your entire team adopts it without training.' },
              ].map((value) => (
                <div key={value.title} className="rounded-2xl border border-background-200 bg-background-100/60 p-6 md:p-7 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                    <i className={`${value.icon} text-primary-600 text-xl`} />
                  </div>
                  <h3 className="font-heading text-lg text-foreground-950 font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground-700 text-[14px] leading-relaxed">{value.desc}</p>
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
