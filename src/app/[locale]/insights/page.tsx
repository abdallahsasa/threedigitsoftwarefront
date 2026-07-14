import { SectionHeading } from '@/components/ui/SectionHeading';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import Link from 'next/link';
import { getPosts } from '@/lib/api';

interface PostData {
  id: number;
  title: string;
  slug: string;
  category: string;
  date: string;
}

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = await getPosts(locale);

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
            {posts.map((post: PostData) => (
              <Link key={post.id} href={`/insights/${post.slug}`} className="group block">
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
