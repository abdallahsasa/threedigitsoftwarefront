import { SectionHeading } from '@/components/ui/SectionHeading';

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Terms of Service" 
          subtitle="Our terms and conditions."
          align="center"
        />
        <div className="max-w-3xl mx-auto prose prose-invert py-10">
          <p>Terms of service content coming soon.</p>
        </div>
      </div>
    </section>
  );
}
