import React from 'react';
import ConnectBtns from './ConnectBtns';

const Main = () => {
	return (
		<section id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<main>
					<p className="uppercase text-sm tracking-widest ">
						Let&apos;s build something amazing
					</p>
					<h1 className="py-4">
						Hi, I&apos;m <span className="text-[#5651e5]">Eli</span>
					</h1>
					<h2 className="py-2">A Fullstack Web Developer</h2>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						Long time learner and community taught software engineer with a deep
						interest in automation. Familiar with a wide range of languages and
						technologies including HTML, CSS, JavaScript, Node.js, Express,
						React, MongoDB, C#, and more. Currently designing and developing
						puzzles for fellow creative minds at escape room companies!
					</p>
					<ConnectBtns size="p-6" />
				</main>
			</div>
		</section>
	);
};

export default Main;
