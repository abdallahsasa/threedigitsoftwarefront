import os

pages_dir = 'src/app/[locale]'

pages = {
    'contact/page.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              title="Get in Touch" 
              subtitle="We'd love to hear about your project or answer any questions you might have."
              className="mb-8"
            />
            <div className="space-y-8 text-muted-text">
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p>hello@threedigitsoftware.com</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Phone / WhatsApp</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Locations</h3>
                <p>Global presence with remote engineering teams across Europe and the Middle East.</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-bg p-8 rounded-2xl border border-border-color">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-muted-text">Full Name</label>
                  <input type="text" className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-muted-text">Email</label>
                  <input type="email" className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-muted-text">Subject</label>
                <input type="text" className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-muted-text">Message</label>
                <textarea rows={5} className="w-full bg-card-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <Button type="button" className="w-full mt-4">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    'start-a-project/page.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function StartAProjectPage() {
  return (
    <section className="pt-32 pb-20 bg-secondary-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading 
          title="Start Your Project" 
          subtitle="Tell us what you are building. Our team will prepare a practical roadmap and estimate for bringing it to life."
          align="center"
        />
        
        <div className="bg-card-bg rounded-2xl border border-border-color p-8 md:p-12 mt-12 shadow-2xl">
          <div className="flex items-center justify-between mb-10 border-b border-border-color pb-6">
            <div className="flex items-center gap-2 text-primary-blue font-semibold">
              <span className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">1</span>
              <span>Contact Details</span>
            </div>
            <div className="flex items-center gap-2 text-muted-text">
              <span className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center">2</span>
              <span className="hidden sm:inline">Project Details</span>
            </div>
            <div className="flex items-center gap-2 text-muted-text">
              <span className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center">3</span>
              <span className="hidden sm:inline">Budget & Submit</span>
            </div>
          </div>
          
          <form className="space-y-6">
            {/* Step 1: Contact Details */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-muted-text">Full Name *</label>
                  <input type="text" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-text">Company Name</label>
                  <input type="text" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-muted-text">Email *</label>
                  <input type="email" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-text">Phone / WhatsApp</label>
                  <input type="tel" className="w-full bg-secondary-bg border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-blue transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border-color flex justify-end">
              <Button type="button">Continue to Next Step</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
""",
    'insights/page.tsx': """
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
                  <div className="absolute inset-0 bg-primary-blue/5 group-hover:bg-primary-blue/20 transition-colors"></div>
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="text-primary-blue font-medium">{post.category}</span>
                  <span className="text-muted-text">&middot;</span>
                  <span className="text-muted-text">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold leading-snug group-hover:text-primary-blue transition-colors">
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
""",
    'insights/[slug]/page.tsx': """
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-10 text-center">
            <span className="text-primary-blue font-semibold uppercase tracking-widest text-sm mb-4 block">Web Development</span>
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
"""
}

for path, content in pages.items():
    full_path = os.path.join(pages_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(content.strip() + '\n')

