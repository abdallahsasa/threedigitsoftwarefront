import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectInquiryForm } from '@/components/ui/ProjectInquiryForm';

export default function StartAProjectPage() {
  return (
    <section className="pt-32 pb-20 bg-secondary-bg min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading 
          title="Start Your Project" 
          subtitle="Tell us what you are building. Our team will prepare a practical roadmap and estimate for bringing it to life."
          align="center"
        />
        
        <div className="bg-card-bg rounded-2xl border border-border-color p-8 md:p-12 mt-12 shadow-2xl">
          <div className="flex items-center justify-between mb-10 border-b border-border-color pb-6">
            <div className="flex items-center gap-2 text-primary-accent font-semibold">
              <span className="w-8 h-8 rounded-full bg-primary-accent/20 flex items-center justify-center">1</span>
              <span>Contact Details</span>
            </div>
            <div className="flex items-center gap-2 text-muted-text">
              <span className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center">2</span>
              <span className="hidden sm:inline">Project Details</span>
            </div>
            <div className="flex items-center gap-2 text-muted-text">
              <span className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center">3</span>
              <span className="hidden sm:inline">Budget & Submit</span>
            </div>
          </div>
          
          <ProjectInquiryForm />
        </div>
      </div>
    </section>
  );
}
