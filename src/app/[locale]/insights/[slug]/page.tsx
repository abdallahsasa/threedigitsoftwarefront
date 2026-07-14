import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-primary-accent font-semibold uppercase tracking-widest text-sm mb-4 block">Web Development</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight capitalize">
              {slug.replace(/-/g, ' ')}
            </h1>
            <div className="text-muted-text flex items-center justify-center gap-4 text-sm">
              <span>By Three Digit Software</span>
              <span>&middot;</span>
              <span>Jul 14, 2026</span>
            </div>
          </div>
          
          <div className="aspect-video bg-secondary-bg rounded-2xl border border-border-color mb-16"></div>
          
          <div className="prose prose-invert prose-lg max-w-none text-muted-text">
            <p>
              This is a placeholder for the blog post content. In a production environment, this content will be dynamically fetched from the Laravel API endpoint.
            </p>
            <h2>The Role of Architecture</h2>
            <p>
              When building scalable systems, the architectural decisions made early in the process have long-lasting impacts on performance and maintainability.
            </p>
            <ul>
              <li>Separation of concerns</li>
              <li>Stateless APIs</li>
              <li>Optimized database queries</li>
            </ul>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
