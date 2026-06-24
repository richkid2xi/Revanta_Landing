import { useScrollReveal } from '@/hooks/useScrollReveal';

const resources = [
  {
    title: 'How proactive guest feedback directly impacts repeat bookings',
    date: 'June 12, 2026',
    category: 'Hotel Operations',
    image: '/images/blog_1.png',
    url: '#',
  },
  {
    title: 'The complete guide to guest satisfaction metrics for 2026',
    date: 'May 28, 2026',
    category: 'Research',
    image: '/images/blog_2.png',
    url: '#',
  },
  {
    title: 'Why in-stay feedback beats post-stay surveys every time',
    date: 'April 15, 2026',
    category: 'Hotel Operations',
    image: '/images/blog_3.png',
    url: '#',
  },
];

function ResourceCard({ resource, delay }: { resource: typeof resources[0]; delay: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLAnchorElement>();
  return (
    <a
      href={resource.url}
      ref={ref}
      className={`group rounded-2xl overflow-hidden border border-background-200 bg-background-100/60 hover:bg-background-100 transition-colors transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="aspect-[3/2] overflow-hidden bg-background-200">
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
        <h3 className="font-heading text-lg text-foreground-950 font-semibold leading-snug mb-4 line-clamp-3">
          {resource.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-foreground-950 group-hover:gap-2.5 transition-all cursor-pointer">
          Read article
          <i className="ri-arrow-right-line text-[14px]" />
        </span>
      </div>
    </a>
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
