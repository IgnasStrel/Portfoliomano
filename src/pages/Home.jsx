import { AboutSection } from "../components/AboutSection";
import { CareerSection } from "../components/CareerSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { LanguageProvider } from "../components/LanguageToggle"; // importuoji Provider
import { LanguageToggle } from "../components/LanguageToggle";   // importuoji mygtuką
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackround } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Fixed UI mygtukai */}
        <ThemeToggle />
        <LanguageToggle />

        {/* Background effects */}
        <StarBackround />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <CareerSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>

      </div>
    </LanguageProvider>
  );
};
