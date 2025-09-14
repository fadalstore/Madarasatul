import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProgramsSection from "@/components/programs-section";
import ScheduleSection from "@/components/schedule-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <ScheduleSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
