import { SectionHeading } from '@/components/ui/SectionHeading';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { notFound } from 'next/navigation';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Define valid service slugs to prevent arbitrary URLs from returning 200s
  const validServices = ['web', 'mobile', 'platforms', 'ai'];
  
  if (!validServices.includes(slug)) {
    notFound();
  }

  // Format the slug for display
  const titleMap: Record<string, string> = {
    'web': 'Web Development',
    'mobile': 'Mobile Apps',
    'platforms': 'Business Platforms',
    'ai': 'AI & Automation'
  };

  const title = titleMap[slug] || slug;

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={title} 
            subtitle={`Expert solutions and implementation for ${title}.`}
            align="center"
          />
          <div className="text-center text-muted-text max-w-2xl mx-auto py-20">
            <p>Detailed service offering for {title} coming soon.</p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
