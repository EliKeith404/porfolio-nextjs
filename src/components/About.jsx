import Image from 'next/image';
import React from 'react';

const About = ({ content }) => {
  const description = content.fields.description;
  const image = content.fields.image.fields.file.url;

  return (
    <section id="about" className="w-full min-h-screen p-2 flex items-center">
      <div className="max-w-[1240px] px-2 py-16 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <span className="text-xl tracking-widest uppercase text-[#5651e5]">
            About
          </span>
          <h2 className="py-4">Who Am I</h2>
          {description.split('<br/>').map((textBlock, i) => (
            <p className="py-2" key={i}>
              {textBlock}
            </p>
          ))}
        </div>
        <div className="card h-auto m-auto flex items-center justify-center hover-grow hover:scale-105">
          <Image
            className="rounded-xl"
            src={`https:${image}`}
            alt="Picture of me"
            width="1000"
            height="937"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
