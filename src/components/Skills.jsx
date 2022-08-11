import Image from 'next/image';
import React, { useState } from 'react';

const Skills = ({ imagePath }) => {
	const [skills, setSkills] = useState([
		/* Multiple of 4 for styling */
		{ name: 'HTML', src: `${imagePath}/skills/html-logo.png` },
		{ name: 'CSS', src: `${imagePath}/skills/css-logo.png` },
		{ name: 'Javascript', src: `${imagePath}/skills/js-logo.png` },
		{ name: 'Node.js', src: `${imagePath}/skills/node-logo.png` },
		{ name: 'Express', src: `${imagePath}/skills/express-logo.png` },
		{ name: 'React', src: `${imagePath}/skills/react-logo.png` },
		{ name: 'Next.js', src: `${imagePath}/skills/next-logo.png` },
		{ name: 'MongoDB', src: `${imagePath}/skills/mongo-logo.png` },
	]);

	return (
		<div id="skills" className="w-full lg:h-screen p-2">
			<div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">My Toolbelt</h2>
				{/* Skills Map */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{skills.map((skill) => (
						<div
							className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
							key={skill.name}
						>
							<div className="grid sm:grid-cols-2 gap-4 justify-center items-center">
								<div className="m-auto">
									<Image
										src={skill.src}
										alt={skill.name + ' Logo'}
										width="64"
										height="64"
									/>
								</div>
								<div className="hidden sm:flex flex-col items-center justify-center">
									<h3>{skill.name}</h3>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* End Skills Map */}
			</div>
		</div>
	);
};

export default Skills;