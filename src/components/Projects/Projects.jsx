import React from 'react';

import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
	return (
		<section id="projects" className="w-full px-2 py-10 flex items-center">
			<div className="max-w-7xl mx-auto px-2 py-16 flex flex-col justify-center h-full">
				<span className="text-xl tracking-widest uppercase text--purple">Projects</span>
				<h2 className="py-4">What I&apos;ve Built</h2>
				{/* Begin Project Map */}
				<div className="grid md:grid-cols-2 gap-8">
					{projects?.map((project) => (
						<ProjectCard key={project.sys.id} project={project} />
					))}
				</div>
				{/* End Project Map */}
			</div>
		</section>
	);
};

export default Projects;
