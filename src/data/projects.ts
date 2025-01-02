import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and TypeScript, featuring dark mode and responsive design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/ambermtech/portfolio',
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing daily tasks and projects with real-time updates.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000',
    githubUrl: 'https://github.com/ambermtech/task-manager',
    liveUrl: 'https://tasks.ambermtech.dev',
  }
];