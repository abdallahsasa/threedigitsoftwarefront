import { SectionHeading } from '@/components/ui/SectionHeading';
import { SelectedWork } from '@/components/sections/home/SelectedWork';
import { FinalCTA } from '@/components/sections/home/FinalCTA';
import { getProjects } from '@/lib/api';

export default async function WorkPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const projects = await getProjects(locale, false);
  return (
    <>
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Portfolio" 
            subtitle="Explore our recent projects across web development, mobile apps, and business platforms."
            align="center"
          />
        </div>
      </section>
      <SelectedWork projects={projects} />
      <FinalCTA />
    </>
  );
}
