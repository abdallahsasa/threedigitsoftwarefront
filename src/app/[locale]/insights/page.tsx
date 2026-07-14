import { SectionHeading } from '@/components/ui/SectionHeading';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import Link from 'next/link';

export default function InsightsPage() {
  const posts = [
    { id: 1, title: 'The Future of Headless Commerce in 2024', category: 'E-commerce', date: 'Jul 14, 2026' },
    { id: 2, title: 'Optimizing Laravel APIs for Millions of Requests', category: 'Web Development', date: 'Jul 10, 2026' },
    { id: 3, title: 'Why AI Automation is the Next Step for B2B Platforms', category: 'AI', date: 'Jun 28, 2026' },
  ];

  return (
    <>
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Insights & Engineering" 
            subtitle="Articles on software engineering, product strategy, AI automation, and digital growth."
            align="center"
          />
        </div>
      </section>

      <section className="py-10 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/insights/${post.id}`} className="group block">
                <div className="aspect-[16/10] bg-secondary-bg rounded-xl border border-border-color mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary-accent/5 group-hover:bg-primary-accent/20 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="text-primary-accent font-medium">{post.category}</span>
                  <span className="text-muted-text">&middot;</span>
                  <span className="text-muted-text">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-primary-accent transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
