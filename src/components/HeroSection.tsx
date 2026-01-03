import { PersonalInfo } from '@/types';
import { getTheme } from '@/lib/theme';

interface HeroSectionProps {
  data: PersonalInfo;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const theme = getTheme('rose');

  return (
    <section className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${theme.gradient} text-white px-6`}>
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{data.name}</h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">{data.title}</p>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">{data.summary}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#contact" className={`px-8 py-3 bg-white ${theme.text} rounded-full font-semibold hover:bg-white/90 transition`}>
            Get in Touch
          </a>
          <a href="#projects" className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition">
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
