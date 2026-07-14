import os

pages_dir = 'src/app/[locale]'

pages = {
    'services/page.tsx': """
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
""",
    'work/page.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SelectedWork } from '@/components/sections/home/SelectedWork';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function WorkPage() {
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
      <SelectedWork />
      <FinalCTA />
    </>
  );
}
""",
    'about/page.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhyUs } from '@/components/sections/home/WhyUs';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-secondary-bg">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Three Digit Software</h1>
          <p className="text-xl text-muted-text leading-relaxed">
            Three Digit Software is a software development and digital growth company that helps businesses design, build, launch, and scale reliable digital products.
            We work across websites, mobile applications, business platforms, e-commerce systems, AI automation, and digital growth.
          </p>
        </div>
      </section>
      <WhyUs />
      <FinalCTA />
    </>
  );
}
""",
    'process/page.tsx': """
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
""",
    'technologies/page.tsx': """
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
"""
}

for path, content in pages.items():
    full_path = os.path.join(pages_dir, path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(content.strip() + '\n')

