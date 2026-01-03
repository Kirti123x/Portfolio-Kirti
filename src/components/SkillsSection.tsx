import { SkillsGrouped } from '@/types';
import { getTheme } from '@/lib/theme';

interface SkillsSectionProps {
  data: SkillsGrouped;
}

const categories = [
  { key: 'frontend' as const, name: 'Frontend', icon: '🎨' },
  { key: 'backend' as const, name: 'Backend', icon: '⚙️' },
  { key: 'devops' as const, name: 'DevOps', icon: '🚀' },
  { key: 'additional' as const, name: 'Additional', icon: '💡' },
];

export default function SkillsSection({ data }: SkillsSectionProps) {
  const theme = getTheme('rose');

  return (
    <section id="skills" className="py-20 px-6 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Skills</h2>
        <div className="space-y-8">
          {categories.map((category) => {
            const skills = data[category.key];
            if (!skills || skills.length === 0) return null;
            return (
              <div key={category.key}>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                  <span>{category.icon}</span> {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span key={index} className={`px-4 py-2 ${theme.bgLight} dark:bg-slate-700 ${theme.text} dark:text-slate-200 rounded-full font-medium`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
