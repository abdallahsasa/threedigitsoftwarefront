import { SectionHeading } from '@/components/ui/SectionHeading';

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="How we handle and protect your data."
          align="center"
        />
        <div className="max-w-3xl mx-auto prose prose-invert py-10">
          <p>Privacy policy content coming soon.</p>
        </div>
      </div>
    </section>
  );
}
