import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServicesOverview } from '@/components/sections/home/ServicesOverview';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Services" 
            subtitle="We provide comprehensive digital solutions to help your business grow and scale."
            align="center"
          />
        </div>
      </section>
      <ServicesOverview />
      <FinalCTA />
    </>
  );
}
