import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] px-2 m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="text-xl tracking-widest uppercase text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who Am I</h2>
					<p className="py-2 text-gray-600">
						I am a creative, persistent problem solver always thinking of the
						next solution to a challenge. I began programming in elementary
						school building 2D game applications using drag-and-drop softwares.
						I began my professional career at an escape room where I coded and
						automated puzzles which made the games easier for the user to
						interface with, and reliable for the game masters to maintain.
					</p>
					<p className="py-2 text-gray-600">
						I&apos;ve since realized how vast the world of programming is, and
						took up web development. The more interactive websites I made, the
						more I wanted to take that to the next level. I&apos;ve most
						recently assisted in successfully deploying a scalable web app game
						designed for virtual company teambuilding events.
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						className="rounded-xl"
						src="/assets/me.jpg"
						alt="Picture of me"
						width="800"
						height="800"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
