import React from 'react';

import ConnectBtns from './ConnectBtns';

const Main = ({ content }) => {
  const description = content.fields.description;

  return (
    <section id="home" className="w-full h-screen text-center min-h-[600px]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-col">
        <main>
          <p className="uppercase text-sm tracking-widest ">
            Let&apos;s build something amazing
          </p>
          <h1 className="py-1 sm:py-4">
            Hi, I&apos;m <span className="text--purple">Eli</span>
          </h1>
          <h2 className="py-1 sm:py-2">A Fullstack Web Developer</h2>
          <p className="py-2 sm:py-4 text-gray-600 max-w-[90%] sm:max-w-[70%] m-auto">
            {description}
          </p>
          <ConnectBtns size="p-6" />
        </main>
      </div>
    </section>
  );
};

export default Main;
