import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/ui/ContactForm';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              title="Get in Touch" 
              subtitle="We'd love to hear about your project or answer any questions you might have."
              className="mb-8"
            />
            <div className="space-y-8 text-muted-text">
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p>hello@threedigitsoftware.com</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Phone / WhatsApp</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Locations</h3>
                <p>Global presence with remote engineering teams across Europe and the Middle East.</p>
              </div>
            </div>
          </div>
          <div className="bg-secondary-bg p-8 rounded-2xl border border-border-color">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
