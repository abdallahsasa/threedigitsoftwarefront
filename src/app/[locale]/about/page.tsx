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
