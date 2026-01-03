import { Project } from '@/types';
import { getTheme } from '@/lib/theme';

interface ProjectsSectionProps {
  data: Project[];
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const theme = getTheme('rose');

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((project, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className={`${theme.bgLight} dark:${theme.bg}/20 ${theme.text} px-2 py-1 rounded text-xs`}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${theme.text} text-sm hover:underline`}>
                    Live Demo →
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 text-sm hover:underline">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
