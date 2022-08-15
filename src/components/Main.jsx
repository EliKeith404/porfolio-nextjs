import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ConnectBtns from './ConnectBtns';

const Main = () => {
	return (
		<section id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<main>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Let&apos;s build something amazing
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m <span className="text-[#5651e5]">Eli</span>
					</h1>
					<h2 className="py-2 text-gray-700">A Fullstack Web Developer</h2>
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
