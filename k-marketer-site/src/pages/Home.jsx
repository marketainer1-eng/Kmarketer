import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import VisionSection from '../components/VisionSection';
import HistorySection from '../components/HistorySection';
import BusinessSection from '../components/BusinessSection';
import ProgramsSection from '../components/ProgramsSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <HistorySection />
      <BusinessSection />
      <ProgramsSection />
      <TargetAudienceSection />
      <ContactSection />
    </div>
  );
}
