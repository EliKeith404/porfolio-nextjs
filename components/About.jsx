import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase tracking-widest text-[#5651e5]">About</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">I am Eli</p>
					<p className="py-2 text-gray-600">Desc</p>
				</div>
				<div className="w-full h-auto m-auto shadow-cl- shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src="/" alt="/" width="200" height="200" />
				</div>
			</div>
		</div>
	);
};

export default About;
