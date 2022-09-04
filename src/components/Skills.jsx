import React from 'react';
import SkillsList from './SkillsList';

const Skills = () => {
  return (
    <section id="skills" className="w-full md:h-screen p-2 min-h-[500px]">
      <div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center h-full">
        <span className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </span>
        <h2 className="py-4">My Toolbelt</h2>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;
