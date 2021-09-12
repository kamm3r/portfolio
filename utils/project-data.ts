import { ProjectsProps } from '../interfaces/Project';

export const projectData: ProjectsProps[] = [
  {
    name: 'Series CRUD',
    tools: 'NextJS, TailwindCSS, Prisma',
    image: './seriescrud.png',
    links: {
      github: 'https://github.com/kammers/next-prisma',
      live: 'https://mk-next-prisma.vercel.app/',
    },
  },
  {
    name: 'Tuoteluettelo',
    tools: 'Angular, TailwindCSS',
    image: './tuote.png',
    links: {
      github: 'https://github.com/kammers/tuoteluettelo',
      live: 'https://tuoteluettelo.web.app',
    },
  },
  {
    name: 'Pokedex',
    tools: 'NextJS, TailwindCSS',
    image: './pokedex.png',
    links: {
      github: 'https://github.com/kammers/pokedex',
      live: 'https://mk-pokedex.vercel.app/',
    },
  },
  {
    name: 'Concept',
    tools: 'Figma',
    image: './concepts.png',
    links: {
      github:
        'https://www.figma.com/proto/Q0i7Tcf28ROQgiE902iZZk/ui-design?page-id=0%3A1&node-id=1%3A15',
      live: 'https://www.figma.com/proto/r5P3NKLr7VE2xIcf4Fjrik/Photograpers-site?page-id=0%3A1&node-id=1%3A2',
    },
  },
  {
    name: 'Muuntaja',
    tools: 'Case Study',
    image: './casestudy.png',
    links: {
      github: 'https://public.bc.fi/s1900879/muuntaja.pdf',
      live: 'https://public.bc.fi/s1900879/dohtuxa/tot/',
    },
  },
  {
    name: 'Hero CRUD',
    tools: 'ExpressJS, EJS',
    image: './herocrud.png',
    links: {
      github: 'https://github.com/kammers/superhero_crud',
      live: '',
    },
  },
];
