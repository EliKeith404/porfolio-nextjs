import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<section id="about" className={`w-full md:h-screen p-2 flex items-center`}>
			<div className="max-w-[1240px] px-2 py-16 m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<span className="text-xl tracking-widest uppercase text-[#5651e5]">
						About
					</span>
					<h2 className="py-4">Who Am I</h2>
					<p className="py-2">
						I am a creative, persistent problem solver who&apos;s always
						thinking of the most efficient solution to a challenge. Code has
						always been a large part of my life; whether I&apos;m on the road
						mentally deconstructing traffic light systems I see, cooking a
						salmon dish on the electric stove I mental-coded in my head, or
						deciding if I should replace all my appliances with smart devices to
						automate my day-to-day.
					</p>
					<p className="py-2">
						I began programming in elementary school building 2D game
						applications using drag-and-drop softwares, and soon after began
						tinkering with any electronic device I could find. When I was 8, I
						built my first electrical project: an alarm clock that buzzed when
						light hit a photosensor. It was a magical and eye-opening experience
						that opened the doors to the tech realm.
					</p>
					<p className="py-2">
						I&apos;ve since realized how vast the world of programming is, and
						took up web development. The more projects I built, the deeper I
						dove to improve the next. I began my professional career at an
						escape room where I wired, coded, and automated puzzles which made
						the games easier for the user to interface with, and reliable for
						the game masters to maintain. I&apos;ve most recently assisted in
						successfully deploying a web app game designed for large-scale
						virtual team building events.
					</p>
				</div>
				<div className="card h-auto m-auto flex items-center justify-center hover-grow hover:scale-105">
					<Image
						className="rounded-xl"
						src="/assets/me.jpg"
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
