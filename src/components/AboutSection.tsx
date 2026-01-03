import { PortfolioData } from '@/types';
import { getTheme } from '@/lib/theme';

interface AboutSectionProps {
  data: PortfolioData;
}

export default function AboutSection({ data }: AboutSectionProps) {
  const theme = getTheme('rose');
  const { personalInfo, education } = data;

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">About Me</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{personalInfo.summary}</p>
        {personalInfo.location && (
          <p className={`${theme.text} font-medium`}>📍 {personalInfo.location}</p>
        )}
        
        {education.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className={`${theme.text}`}>{edu.institution}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{edu.years}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
