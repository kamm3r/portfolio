import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';
import { projectData } from '../utils/project-data';

const Projects = () => {
  const projects = projectData;

  return (
    <section id='projects' className='flex flex-col py-10 px-32'>
      <section className='px-24'>
        <h1 className='text-6xl font-semibold mr-auto mb-10'>Projects</h1>
        <section className='grid grid-cols-2 place-content-center place-items-center mb-7'>
          {projects.map((project, i) => (
            <article
              className='flex flex-col p-5 w-max bg-white rounded-xl mb-7'
              key={i}
            >
              <figure className='mb-10 max-w-lg'>
                <img
                  className='rounded-xl'
                  src={project.image}
                  alt={project.name}
                />
              </figure>
              <section className='flex gap-5'>
                <div>
                  <h5 className='text-4xl font-semibold my-5'>
                    {project.name}
                  </h5>
                  <p className='text-2xl mb-5'>{project.tools}</p>
                </div>
                <section className='flex gap-5'>
                  <Link href={project.links.github}>
                    <a target='_blank'>
                      <AiFillGithub className='text-4xl my-5' />
                    </a>
                  </Link>
                  <Link href={project.links.live}>
                    <a target='_blank'>
                      <CgMediaLive className='text-4xl my-5' />
                    </a>
                  </Link>
                </section>
              </section>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Projects;
