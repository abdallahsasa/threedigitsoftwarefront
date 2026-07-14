import { SectionHeading } from '@/components/ui/SectionHeading';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function IndustriesPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Industries We Serve" 
            subtitle="We build specialized digital solutions for a wide range of industries."
            align="center"
          />
          <div className="text-center text-muted-text max-w-2xl mx-auto py-20">
            <p>Industry-specific content coming soon.</p>
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
