import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: {project:string}
}

export default async function Project({ params }: Props ) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className = {`text-5xl m-1 font-extrabold bg-gradient-to-r bg-clip-text
            text-transparent from-fuchsia-600 to-amber-600 drop-shadow-2x`}>
          {project.name}
        </h1>

        <a href={project.url} title="View Project" target='blank' rel='noopener noreferrer'
        className={`text-xl mt-1 font-extrabold text-gray-100 py-3 px-4 whitespace-nowrap hover:text-indigo-400 transition duration-200 drop-shadow`}>
          View Project
        </a>
      </header>
      <div className={`text-lg text-gray-200 mt-5`}>
        <PortableText value={project.content} />
        <Image
          src={project.image}
          alt={project.name}
          width={480}
          height={320}
        className={`mt-10 border border-gray-700 object-cover rounded-xl`}/>
      </div>
    </div>
  )
}
