import os

sections_dir = 'src/components/sections/home'

files = {
    'Hero.tsx': """
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight">
          Digital Products Built to <br className="hidden md:block" />
          <span className="text-primary-blue">Move Businesses Forward.</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-text max-w-3xl mx-auto mb-10 leading-relaxed">
          We design and develop high-performance websites, business platforms, mobile applications, and AI-powered solutions for ambitious companies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button href="/start-a-project" size="lg" className="w-full sm:w-auto">Start Your Project</Button>
          <Button href="/work" variant="outline" size="lg" className="w-full sm:w-auto">Explore Our Work</Button>
        </div>
        <p className="text-sm text-muted-text tracking-widest uppercase font-semibold">
          Websites &middot; Business Platforms &middot; Mobile Apps &middot; AI & Automation &middot; Digital Growth
        </p>
      </div>
      
      {/* Placeholder for Hero Visual */}
      <div className="mt-20 relative max-w-5xl mx-auto px-4">
        <div className="aspect-video bg-card-bg rounded-2xl border border-border-color shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/10 to-transparent"></div>
          <div className="flex items-center justify-center h-full text-muted-text font-medium">
            [Animated UI Layers Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    'TrustIndicators.tsx': """
export function TrustIndicators() {
  const stats = [
    { value: '18+', label: 'Digital Projects' },
    { value: '6+', label: 'Years of Experience' },
    { value: 'Global', label: 'International Markets' },
    { value: '4+', label: 'Core Capabilities' },
  ];

  return (
    <section className="py-20 border-y border-border-color bg-secondary-bg/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border-color/50 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="px-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",
    'SelectedWork.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function SelectedWork() {
  // We will load this from the API later. For now, placeholders.
  const projects = [
    { id: 1, name: 'MEC Germany', category: 'Corporate Website', image: '' },
    { id: 2, name: 'HerAntalya', category: 'Platforms and SaaS', image: '' },
    { id: 3, name: 'Grocero', category: 'Mobile Applications', image: '' },
    { id: 4, name: 'Cadeaux Corner', category: 'E-commerce', image: '' },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            title="Selected Work" 
            subtitle="Digital products developed for businesses across Europe, the Middle East, and international markets."
            className="mb-0 max-w-2xl"
          />
          <Button href="/work" variant="ghost" className="hidden md:inline-flex mt-4 md:mt-0">View All Work &rarr;</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-card-bg rounded-xl border border-border-color overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-secondary-bg/50 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="flex items-center justify-center h-full text-muted-text">
                  [Image: {project.name}]
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-text">{project.category}</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue text-white">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Button href="/work" variant="outline" className="w-full">View All Work</Button>
        </div>
      </div>
    </section>
  );
}
""",
    'ServicesOverview.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServicesOverview() {
  const services = [
    { title: 'Web Development', desc: 'Corporate websites, Custom websites, CMS development, API integrations.' },
    { title: 'Mobile App Development', desc: 'iOS & Android applications, Cross-platform apps, Customer applications.' },
    { title: 'Business Platforms', desc: 'CRM systems, ERP systems, Booking platforms, Internal dashboards.' },
    { title: 'AI and Automation', desc: 'AI assistants, Workflow automation, Intelligent recommendations.' },
    { title: 'E-commerce', desc: 'Online stores, Multi-vendor marketplaces, Payment integrations.' },
    { title: 'Digital Growth', desc: 'Technical SEO, Search strategy, Performance marketing.' },
  ];

  return (
    <section className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Everything Needed to Build and Grow Your Digital Product"
          subtitle="We bring product strategy, user experience, software engineering, AI, and digital growth together under one experienced team."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-card-bg p-8 rounded-xl border border-border-color hover:border-primary-blue/50 transition-colors cursor-pointer group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-blue transition-colors">{service.title}</h3>
              <p className="text-muted-text leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",
    'WhyUs.tsx': """
export function WhyUs() {
  const points = [
    'Custom-Built Solutions', 'Modern Technologies', 'SEO-Ready Architecture', 
    'Mobile-First Experience', 'Security and Reliability', 'Scalable Architecture',
    'Dedicated Support', 'Business-Focused Development'
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Built Around Your Real Business Needs</h2>
            <p className="text-lg text-muted-text leading-relaxed mb-6">
              We build websites and systems around the real needs of each business rather than forcing companies into limited templates.
            </p>
            <p className="text-lg text-muted-text leading-relaxed">
              Every solution is designed for performance, scalability, security, usability, and long-term growth.
            </p>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card-bg rounded-lg border border-border-color">
                <span className="text-success text-xl">✓</span>
                <span className="font-medium text-sm md:text-base">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
""",
    'Process.tsx': """
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Process() {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Understanding your business and goals.' },
    { num: '02', title: 'Strategy and Scope', desc: 'Defining the roadmap and technical architecture.' },
    { num: '03', title: 'UX and Visual Design', desc: 'Crafting the user experience and interface.' },
    { num: '04', title: 'Development', desc: 'Engineering the frontend and backend systems.' },
    { num: '05', title: 'Testing', desc: 'Quality assurance, security, and performance.' },
    { num: '06', title: 'Launch', desc: 'Deployment and initial monitoring.' },
    { num: '07', title: 'Growth and Support', desc: 'Ongoing maintenance, SEO, and iterative improvements.' },
  ];

  return (
    <section className="py-24 bg-secondary-bg">
      <div className="container mx-auto px-4">
        <SectionHeading title="A Clear Process From Idea to Launch" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="bg-card-bg p-6 rounded-xl border border-border-color">
              <div className="text-primary-blue font-mono text-xl mb-4 font-bold">{step.num}</div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-text text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
""",
    'FinalCTA.tsx': """
import { Button } from '@/components/ui/Button';

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-blue/10"></div>
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Have a Project in Mind?</h2>
        <p className="text-xl text-muted-text mb-10 leading-relaxed">
          Tell us what you are building, and our team will prepare a practical roadmap for bringing it to life.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/start-a-project" size="lg" className="w-full sm:w-auto">Request a Free Consultation</Button>
          <Button href="#" variant="outline" size="lg" className="w-full sm:w-auto">Chat on WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}
"""
}

for path, content in files.items():
    full_path = os.path.join(sections_dir, path)
    with open(full_path, 'w') as f:
        f.write(content.strip() + '\n')

