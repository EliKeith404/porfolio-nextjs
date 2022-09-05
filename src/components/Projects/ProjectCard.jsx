import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ project }) => {
  const { name, tech, thumbnail, slug } = project.fields;

  const d = new Date();
  const createdDate = project.sys.createdAt;
  const updatedDate = project.sys.updatedAt;

  const isNewProject =
    new Date(createdDate) > new Date(d.setDate(d.getDate() - 7));

  const isUpdated =
    new Date(updatedDate) > new Date(d.setDate(d.getDate() - 7));

  return (
    <article className="card group relative flex items-center justify-center hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={`https:${thumbnail.fields.file.url}`}
        alt={`${name} Preview`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      />
      {(isNewProject && (
        <div className="absolute top-2 right-2 p-2 bg-red-400 dark:bg-red-800 shadow-lg rounded-xl">
          <span>New</span>
        </div>
      )) ||
        (isUpdated && (
          <div className="absolute top-2 right-2 p-2 bg-orange-300 dark:bg-orange-600 shadow-lg rounded-xl">
            <span>Updated</span>
          </div>
        ))}
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white  tracking-wider text-center">
          {name}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech.join(', ')}</p>
        <Link href={`/projects/${slug}`}>
          <a>
            <p className="text-center p-3 rounded-lg bg-white dark:text-black font-bold texte-lg cursor-pointer">
              More Info
            </p>
          </a>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
