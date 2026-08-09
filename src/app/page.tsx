import { BackToTop } from '@/components/lenis/back-to-top';
import { CtaSection } from '@/components/landing/cta-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { HeroSection } from '@/components/landing/hero-section';
import { WorkflowSection } from '@/components/landing/workflow-section';
import { LandingNavbar } from '@/components/shared/landing-navbar';
import { SiteFooter } from '@/components/shared/site-footer';

export default function AppMainPage() {
  return (
    <div className='min-h-screen bg-canvas'>
      <LandingNavbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <CtaSection />
      </main>

      <SiteFooter />

      <BackToTop />
    </div>
  );
}
