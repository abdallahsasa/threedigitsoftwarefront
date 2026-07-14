import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { getProject } from '@/lib/api';
import { notFound } from 'next/navigation';

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const { slug, locale } = await params;
  const project = await getProject(slug, locale);

  if (!project) {
    notFound();
  }
  
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary-bg">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-primary-accent font-semibold uppercase tracking-widest mb-4">{project.category || 'Case Study'}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize">{project.name}</h1>
          <p className="text-xl text-muted-text mb-8">
            {project.overview}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-text">
            {project.client_name && <div><strong>Client:</strong> {project.client_name}</div>}
            {project.category && <div><strong>Industry:</strong> {project.category}</div>}
            {project.launch_year && <div><strong>Year:</strong> {project.launch_year}</div>}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="aspect-video bg-card-bg rounded-2xl border border-white/10 mb-16 flex items-center justify-center text-muted-text overflow-hidden relative shadow-2xl">
            {project.main_image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={project.main_image} alt={project.name} className="w-full h-full object-cover" />
            ) : (
              <span>[Main Project Image Placeholder]</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2 space-y-8 text-lg text-muted-text leading-relaxed">
              <h2 className="text-2xl font-bold text-white">Project Overview</h2>
              <p>{project.overview}</p>
              
              {project.business_challenge && (
                <>
                  <h2 className="text-2xl font-bold text-white mt-12">The Challenge</h2>
                  <p>{project.business_challenge}</p>
                </>
              )}

              {project.proposed_solution && (
                <>
                  <h2 className="text-2xl font-bold text-white mt-12">The Solution</h2>
                  <p>{project.proposed_solution}</p>
                </>
              )}

              {project.results && (
                <>
                  <h2 className="text-2xl font-bold text-white mt-12">The Results</h2>
                  <p>{project.results}</p>
                </>
              )}
            </div>
            
            <div className="space-y-8">
              {project.live_url && (
                <Button href={project.live_url} className="w-full text-center block" target="_blank" rel="noopener noreferrer">
                  Visit Live Website
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
