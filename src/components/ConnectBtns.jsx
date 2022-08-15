import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ConnectBtns = ({ size }) => {
	return (
		<nav className="flex items-center justify-between max-w-[330px] m-auto py-4">
			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/elikeith404/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					className={`${size} bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
				>
					<FaLinkedinIn />
				</div>
			</a>
			{/* Github */}
			<a href="https://github.com/EliKeith404" target="_blank" rel="noreferrer">
				<div
					className={`${size} bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
				>
					<FaGithub />
				</div>
			</a>
			{/* Email */}
			<a href="mailto:ekbass44@gmail.com">
				<div
					className={`${size} bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
				>
					<AiOutlineMail />
				</div>
			</a>
			{/* Resume */}
			<a
				href="https://docs.google.com/document/d/11b62J60S4DILgcgn7nVHUD6IMSvQy-PzACj6k7pIkBI/edit?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				<div
					className={`${size} bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
				>
					<BsFillPersonLinesFill />
				</div>
			</a>
		</nav>
	);
};

export default ConnectBtns;
