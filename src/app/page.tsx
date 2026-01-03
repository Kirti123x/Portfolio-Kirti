import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import DarkModeToggle from '@/components/DarkModeToggle';
import { portfolioData } from '@/data/portfolio';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <DarkModeToggle />
      <HeroSection data={portfolioData.personalInfo} />
      <AboutSection data={portfolioData} />
      <ExperienceSection data={portfolioData.experience} />
      <ProjectsSection data={portfolioData.projects} />
      <SkillsSection data={portfolioData.skills} />
      <ContactSection data={portfolioData.personalInfo} />
      <Footer name={portfolioData.personalInfo.name} />
    </main>
  );
}
