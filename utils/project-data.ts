import { ProjectsProps } from '../interfaces/Project';

export const projectData: ProjectsProps[] = [
  {
    name: 'Series CRUD',
    tools: 'NextJS, TailwindCSS, Prisma',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github: 'https://github.com/kammers/next-prisma',
      live: '',
    },
  },
  {
    name: 'Tuoteluettelo',
    tools: 'Angular, TailwindCSS',
    image: './tuote2.png',
    links: {
      github: 'https://github.com/kammers/tuoteluettelo',
      live: 'https://tuoteluettelo.web.app',
    },
  },
  {
    name: 'Pokedex',
    tools: 'NextJS, TailwindCSS',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github: 'https://github.com/kammers/pokedex',
      live: '',
    },
  },
  {
    name: 'Concept',
    tools: 'Figma',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github:
        'https://www.figma.com/proto/Q0i7Tcf28ROQgiE902iZZk/ui-design?page-id=0%3A1&node-id=1%3A15',
      live: 'https://www.figma.com/proto/r5P3NKLr7VE2xIcf4Fjrik/Photograpers-site?page-id=0%3A1&node-id=1%3A2',
    },
  },
  {
    name: 'Muuntaja',
    tools: 'Case Study',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github: '',
      live: 'https://public.bc.fi/s1900879/muuntaja.pdf',
    },
  },
  {
    name: 'Superhero CRUD',
    tools: 'ExpressJS, EJS',
    image: 'https://via.placeholder.com/500x400',
    links: {
      github: 'https://github.com/kammers/superhero_crud',
      live: '',
    },
  },
];
