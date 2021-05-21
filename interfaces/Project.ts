export interface ProjectsProps {
  name: string;
  tools: string;
  image: string;
  links: Links;
}

interface Links {
  github: string;
  live: string;
}
