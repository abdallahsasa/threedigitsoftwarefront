import { SectionHeading } from '@/components/ui/SectionHeading';
import { Process } from '@/components/sections/home/Process';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function ProcessPage() {
  return (
    <>
      <section className="pt-32 pb-10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="How We Work" 
            subtitle="Our proven methodology ensures your project is delivered on time, within budget, and to the highest quality standards."
            align="center"
          />
        </div>
      </section>
      <Process />
      <FinalCTA />
    </>
  );
}
