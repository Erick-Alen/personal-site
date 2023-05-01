import { getProjects } from '@/sanity/sanity-utils'
import Image from 'next/image';
import Link from 'next/link';


export default async function Home() {
  const projects = await getProjects();

  return (
    //  bg-slate-200  text-black
    <div>
      <h1 className={`text-7xl font-bold text-gray-200`}>
        Hello, I'm <span className={`bg-gradient-to-r bg-clip-text
        text-transparent from-red-500 to-blue-600`}>
         Erick
        </span>!
      </h1>

      <p className={`mt-8 text-xl text-gray-200`}>
        An enthusiast of technology, specially Data Science and Software Development.<br/> Here are some of my Projects!
      </p>

      <h2 className={`mt-12 font-bold text-gray-200 text-3xl`}>
        My Projects
      </h2>

      <div className={`grid md:grid-cols-3 lg:grid-cols-3 mt-5 gap-8`}>{projects.map((project) => (
          <Link
            href ={`/projects/${project.slug}`}
            key={project._id}
            className={`group border-2 border-gray-400 rounded-md p-1 hover:scale-95 transition duration-400 `}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width = {750}
                  height={300}
                  className = {`object-cover rounded-lg border border-grey-400`}
                />
              )}
              <div className={`mt-1 text-lg font-bold bg-gradient-to-r bg-clip-text
              text-transparent from-gray-100 to-blue-600 group-hover:text-gray-300 transition duration-500 active:text-white`}>
                {project.name}
              </div>
            </Link>
        ))}
      </div>
    </div>
  )
}
