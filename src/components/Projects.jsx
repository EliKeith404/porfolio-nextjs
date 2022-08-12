import React from 'react';

import ProjectItem from './ProjectItem';
import MybraryImg from '../../public/assets/projects/mybrary.png';
import GlobalDomImg from '../../public/assets/projects/globaldom.png';

const Projects = () => {
	return (
		<section id="projects" className="w-full md:h-screen p-2">
			<div className="max-w-[1240px] mx-auto px-2 py-16 flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				{/* Begin Project List */}
				<div className="grid md:grid-cols-2 gap-8">
					<ProjectItem
						name="Global Domination"
						tech="React, JS, Firebase"
						image={GlobalDomImg}
						url=""
					/>
					<ProjectItem
						name="Mybrary"
						tech="Express, JS, MongoDB"
						image={MybraryImg}
						url=""
					/>
				</div>
				{/* End Project List */}
			</div>
		</section>
	);
};

export default Projects;
