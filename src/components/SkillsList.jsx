import Image from 'next/image';
import React, { useState } from 'react';

const SkillsList = () => {
  const skillsPath = '/assets/skills';
  const [skills, setSkills] = useState([
    /* Multiple of 4 for styling */
    { name: 'HTML', src: `${skillsPath}/html-logo.png` },
    { name: 'CSS', src: `${skillsPath}/css-logo.png` },
    { name: 'Javascript', src: `${skillsPath}/js-logo.png` },
    { name: 'Node.js', src: `${skillsPath}/node-logo.png` },
    { name: 'Express', src: `${skillsPath}/express-logo.png`, invert: true },
    { name: 'React', src: `${skillsPath}/react-logo.png` },
    { name: 'Next.js', src: `${skillsPath}/next-logo.png`, invert: true },
    { name: 'MongoDB', src: `${skillsPath}/mongo-logo.png` },
  ]);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {skills.map((skill) => (
        <div className="p-6 card hover-grow hover:scale-105" key={skill.name}>
          <div className="grid sm:grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image
                src={skill.src}
                alt={skill.name + ' Logo'}
                className={skill.invert ? 'dark:invert' : ''}
                width="64"
                height="64"
              />
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center">
              <h3>{skill.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
