import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { CgMediaLive } from 'react-icons/cg';
import { projectData } from '../utils/project-data';

const Projects = () => {
  const projects = projectData;

  return (
    <section id='projects' className='flex flex-col py-10 xl:px-32'>
      <section className='xl:px-24'>
        <h1 className='text-4xl xl:text-6xl font-semibold px-5 mb-10 xl:mr-auto'>
          Projects
        </h1>
        <section className='grid grid-cols-1 place-content-center place-items-center mb-7 xl:grid-cols-2 '>
          {projects.map((project, i) => (
            <article
              className='flex flex-col p-5 bg-white rounded-xl mb-7 mx-5  xl:w-max'
              key={i}
            >
              <figure className='mb-10 max-w-md xl:max-w-lg'>
                <img
                  className='rounded-xl block'
                  src={project.image}
                  alt={project.name}
                />
              </figure>
              <section className='flex gap-5'>
                <div>
                  <h5 className='text-2xl font-semibold my-3 text-black xl:text-4xl xl:my-5'>
                    {project.name}
                  </h5>
                  <p className='text-lg xl:text-2xl mb-5 text-black'>
                    {project.tools}
                  </p>
                </div>
                <section className='flex gap-5'>
                  <Link href={project.links.github}>
                    <a target='_blank'>
                      <AiFillGithub className='text-3xl my-3  xl:text-4xl xl:my-5' />
                    </a>
                  </Link>
                  <Link href={project.links.live}>
                    <a target='_blank'>
                      <CgMediaLive className='text-3xl my-3  xl:text-4xl xl:my-5' />
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
