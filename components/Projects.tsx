import Image from 'next/image';
import projects from '../projectInfo';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import Link from 'next/link';

// import { FaReact } from 'react-icons/fa';
// import {
//   SiExpress,
//   SiJavascript,
//   SiSequelize,
//   SiPostgresql,
//   SiFirebase,
// } from 'react-icons/si';

export default function Projects() {
  return (
    <div>
      <h2>this is the projects page</h2>
      {projects.map((project, idx) => (
        <div key={idx} className="bg-gray-500/30 flex gap-5 mb-10 p-2">
          <div>
            <Link href={project.websiteLink} target="_blank">
              <Image
                src={project.imageUrl}
                alt={project.name}
                width="600"
                height="600"
              />
            </Link>
          </div>
          <div className="w-full text-center flex flex-col items-center ">
            <h2 className="text-2xl mt-6 mb-2 underline">{project.name}</h2>
            <p>{project.description}</p>
            <div className="flex justify-around w-full">
              {project.technologies.map((tech) => {
                const IconComponent =
                  tech[0] === 'F'
                    ? FaIcons[tech as keyof typeof FaIcons]
                    : SiIcons[tech as keyof typeof SiIcons];
                return <IconComponent key={tech + idx} className="text-xl" />;
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
