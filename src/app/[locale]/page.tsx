import { Hero } from '@/components/sections/home/Hero';
import { ClientLogos } from '@/components/sections/home/ClientLogos';
import { TrustIndicators } from '@/components/sections/home/TrustIndicators';
import { SelectedWork } from '@/components/sections/home/SelectedWork';
import { ServicesOverview } from '@/components/sections/home/ServicesOverview';
import { AllInOnePartner } from '@/components/sections/home/AllInOnePartner';
import { WhyUs } from '@/components/sections/home/WhyUs';
import { Process } from '@/components/sections/home/Process';
import { Technologies } from '@/components/sections/home/Technologies';
import { Industries } from '@/components/sections/home/Industries';
import { FinalCTA } from '@/components/sections/home/FinalCTA';

import { getProjects, getServices, getIndustries } from '@/lib/api';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const featuredProjects = await getProjects(locale, true);
  const services = await getServices(locale);
  const industries = await getIndustries(locale);

  return (
    <>
      <Hero />
      <ClientLogos />
      <TrustIndicators />
      <AllInOnePartner />
      <ServicesOverview services={services} />
      <WhyUs />
      <Process />
      <SelectedWork projects={featuredProjects} />
      <Technologies />
      <Industries industries={industries} />
      <FinalCTA />
    </>
  );
}
