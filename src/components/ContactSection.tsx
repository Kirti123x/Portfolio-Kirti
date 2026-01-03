import { PersonalInfo } from '@/types';
import { getTheme } from '@/lib/theme';

interface ContactSectionProps {
  data: PersonalInfo;
}

export default function ContactSection({ data }: ContactSectionProps) {
  const theme = getTheme('rose');

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-8">I&apos;m currently open to new opportunities.</p>
        <a 
          href={`mailto:${data.email}`}
          className={`inline-block px-8 py-4 ${theme.button} text-white rounded-lg font-semibold text-lg transition`}
        >
          Say Hello
        </a>
        <div className="mt-12 flex justify-center gap-6">
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
              LinkedIn
            </a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
              GitHub
            </a>
          )}
          {data.email && (
            <a href={`mailto:${data.email}`} className="text-slate-400 hover:text-white transition">
              Email
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
