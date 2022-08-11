import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const ConnectBtns = ({ size }) => {
	return (
		<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
			{/* LinkedIn */}
			<a
				href="https://www.linkedin.com/in/elikeith404/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					className={`${size} rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
				>
					<FaLinkedinIn />
				</div>
			</a>
			{/* Github */}
			<a href="https://github.com/EliKeith404" target="_blank" rel="noreferrer">
				<div
					className={`${size} rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
				>
					<FaGithub />
				</div>
			</a>
			{/* Email */}
			<div
				className={`${size} rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
			>
				<AiOutlineMail />
			</div>
			{/* Resume */}
			<div
				className={`${size} rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-300`}
			>
				<BsFillPersonLinesFill />
			</div>
		</div>
	);
};

export default ConnectBtns;
