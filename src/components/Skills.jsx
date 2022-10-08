import React from 'react';
import Image from 'next/image';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="w-full min-h-screen p-2">
      <div className="max-w-[1240px] h-full mx-auto px-2 py-16 flex flex-col justify-center">
        <span className="text-xl tracking-widest uppercase text--purple">
          Skills
        </span>
        <h2 className="py-4">My Toolbelt</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <SkillsItem skill={skill.fields} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// Skills Item
const SkillsItem = ({ skill }) => {
  return (
    <div className="p-6 card hover-grow hover:scale-105">
      <div className="grid sm:grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={`https:${skill.image.fields.file.url}`}
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
  );
};
