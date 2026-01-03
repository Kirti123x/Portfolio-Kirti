import { Experience } from '@/types';
import { getTheme } from '@/lib/theme';

interface ExperienceSectionProps {
  data: Experience[];
}

export default function ExperienceSection({ data }: ExperienceSectionProps) {
  const theme = getTheme('rose');

  return (
    <section id="experience" className="py-20 px-6 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Experience</h2>
        <div className="space-y-8">
          {data.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-600">
              <div className={`absolute -left-2 top-0 w-4 h-4 ${theme.bg} rounded-full`}></div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
              <p className={`${theme.text} font-medium`}>{exp.company}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{exp.dates}</p>
              <p className="text-slate-600 dark:text-slate-300">{exp.description}</p>
              {exp.highlights?.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-300 text-sm">• {h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
