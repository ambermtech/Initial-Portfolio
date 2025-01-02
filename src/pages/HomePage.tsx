import { Github, Linkedin, Mail } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-16 md:pt-48 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Software Developer
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Building elegant solutions to complex problems. Learning and growing every day.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ambermtech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#0246b3] dark:hover:text-[#4d82ff] transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ambermtech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#0246b3] dark:hover:text-[#4d82ff] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@ambermtech.dev"
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#0246b3] dark:hover:text-[#4d82ff] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white dark:bg-[#0f172a] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              About Me
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              I'm a passionate software developer focused on building modern web applications.
              Currently learning React and TypeScript to expand my skillset and create better
              user experiences.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, and sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-8">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}