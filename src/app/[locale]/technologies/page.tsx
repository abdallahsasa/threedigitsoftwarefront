import { SectionHeading } from '@/components/ui/SectionHeading';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function TechnologiesPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary-bg">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading 
            title="Technologies We Use" 
            subtitle="We build products using modern, scalable, and secure technologies."
            align="center"
          />
          <div className="text-muted-text max-w-2xl mx-auto mt-12 p-8 bg-card-bg border border-border-color rounded-xl">
            [Technology Grid Placeholder - Next.js, Laravel, MySQL, React Native, etc.]
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
