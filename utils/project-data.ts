import { ProjectsProps } from '../interfaces/Project';

export const projectData: ProjectsProps[] = [
  {
    name: 'Project Name',
    tools: 'NextJS, TailwindCSS',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github: 'github.com',
      live: 'youtube.com',
    },
  },
  {
    name: 'Tuoteluettelo',
    tools: 'Angular, TailwindCSS',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github: 'https://github.com/kammers/tuoteluettelo',
      live: 'https://tuoteluettelo.web.app',
    },
  },
];
