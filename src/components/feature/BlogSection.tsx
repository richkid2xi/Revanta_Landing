import { useScrollReveal } from '@/hooks/useScrollReveal';

const resources = [
  {
    title: 'How The Peninsula Hotel increased repeat bookings by 40%',
    date: 'June 12, 2026',
    category: 'Case Study',
    image:
      'https://readdy.ai/api/search-image?query=Elegant%20luxury%20hotel%20reception%20desk%20with%20fresh%20flowers%20arrangement%2C%20warm%20golden%20lighting%2C%20marble%20countertop%2C%20sophisticated%20hospitality%20atmosphere%2C%20editorial%20interior%20photography%2C%20warm%20cream%20and%20gold%20tones%2C%20high%20detail%20professional%20composition&width=600&height=400&seq=resource-case-01&orientation=landscape',
  },
  {
    title: 'The complete guide to guest satisfaction metrics for 2026',
    date: 'May 28, 2026',
    category: 'Guide',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20hotel%20lobby%20lounge%20area%20with%20comfortable%20velvet%20armchairs%2C%20warm%20pendant%20lights%2C%20coffee%20table%20books%2C%20soft%20natural%20daylight%20through%20large%20windows%2C%20editorial%20interior%20photography%2C%20warm%20neutral%20tones%2C%20high%20detail%20inviting%20composition&width=600&height=400&seq=resource-guide-02&orientation=landscape',
  },
  {
    title: 'Why in-stay feedback beats post-stay surveys every time',
    date: 'April 15, 2026',
    category: 'Research',
    image:
      'https://readdy.ai/api/search-image?query=Hotel%20guest%20relaxing%20in%20a%20beautiful%20suite%20reading%20on%20a%20tablet%20device%2C%20soft%20warm%20lighting%2C%20crisp%20white%20bedding%2C%20elegant%20room%20interior%2C%20editorial%20lifestyle%20photography%2C%20warm%20cream%20and%20beige%20tones%2C%20high%20detail%20serene%20composition&width=600&height=400&seq=resource-research-03&orientation=landscape',
  },
];

function ResourceCard({ resource, delay }: { resource: typeof resources[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group rounded-2xl overflow-hidden border border-background-200 bg-background-100/60 hover:bg-background-100 transition-colors transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          alt={resource.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          src={resource.image}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-[12px] font-label text-foreground-500 mb-3">
          <span>{resource.date}</span>
          <span className="w-1 h-1 rounded-full bg-foreground-300" />
          <span className="text-primary-700 font-medium">{resource.category}</span>
        </div>
        <h3 className="font-heading text-lg text-foreground-950 font-semibold leading-snug mb-4">
          {resource.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground-950 group-hover:gap-2.5 transition-all cursor-pointer">
          Read more
          <i className="ri-arrow-right-line text-[14px]" />
        </span>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="resources" className="bg-background-50 py-20 md:py-28 px-4 md:px-8 border-t border-background-200/60">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 md:mb-10 gap-4 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="font-heading text-3xl md:text-4xl tracking-[-0.02em] text-foreground-950 font-semibold">
            Latest from the hospitality desk
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {resources.map((resource, i) => (
            <ResourceCard key={resource.title} resource={resource} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
