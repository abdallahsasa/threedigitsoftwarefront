import { SectionHeading } from '@/components/ui/SectionHeading';

export default function CookiesPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Cookie Policy" 
          subtitle="How we use cookies."
          align="center"
        />
        <div className="max-w-3xl mx-auto prose prose-invert py-10">
          <p>Cookie policy content coming soon.</p>
        </div>
      </div>
    </section>
  );
}
