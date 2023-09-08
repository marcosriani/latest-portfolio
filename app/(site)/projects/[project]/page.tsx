import { getProject } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between item-center">
        <h1 className="leading-tight text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          title="View Project"
          target="_black"
          rel="noopener noreferrer"
          className="flex justify-normal items-center hover:bg-pink-500 hover:text-pink-100 transition bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-3 whitespace-nowrap"
        >
          View Project
        </a>
      </header>

      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        alt={project.alt}
      />
    </div>
  );
}
