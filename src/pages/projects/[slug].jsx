import Image from 'next/image';
import React from 'react';
import { createClient } from 'contentful';
import { RiRadioButtonFill } from 'react-icons/ri';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Link from 'next/link';
import Skeleton from '../../components/Projects/Skeleton';

const client = createClient({
	space: process.env.CONTENTFUL_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'project',
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export async function getStaticProps({ params }) {
	const res = await client.getEntries({
		content_type: 'project',
		'fields.slug': params.slug,
	});

	if (!res.items.length) {
		return {
			redirect: {
				destination: '/#projects',
				permanent: false,
			},
		};
	}

	return {
		props: { project: res.items[0] },
		revalidate: 5,
	};
}

const ProjectDetails = ({ project }) => {
	if (!project) return <Skeleton />;

	const { name, summary, description, tech, banner, demoUrl, repoUrl } =
		project.fields;

	return (
		<div className="w-full pt-10">
			<header className="w-screen h-[30vh] lg:h-[40vh] relative">
				{/* Empty div for translucent overlay */}
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10"></div>
				<Image
					className="absolute"
					layout="fill"
					objectFit="cover"
					src={`https:${banner.fields.file.url}`}
					alt={`${name} Preview Banner`}
				/>
				{/* Project title + summary */}
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white p-2 z-10">
					<h1 className="py-2 text-4xl">{name}</h1>
					<p className="sm:text-lg">{summary}</p>
				</div>
			</header>
			<main className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-4 lg:grid-cols-5 md:gap-8 pt-8">
				<article className="col-span-3 lg:col-span-4">
					<Link href="/#projects">
						<a>
							<p className="flex items-center pb-3 ml-[-0.35rem] text-gray-500">
								<MdKeyboardArrowLeft size={22} className="mt-[0.1rem]" />
								Back
							</p>
						</a>
					</Link>
					<p className="text-xl tracking-widest uppercase text-[#5651e5]">
						Project
					</p>
					<h2 className="py-2">Overview</h2>
					<p className="py-4">{description}</p>
					{/* Demo + Repo Buttons */}
					<section className="text-white my-5 flex justify-center md:justify-start">
						{demoUrl && (
							<a
								className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mr-8"
								href={demoUrl}
								target="_blank"
								rel="noreferrer"
							>
								Demo
							</a>
						)}
						{repoUrl && (
							<a
								className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 md:mr-8"
								href={repoUrl}
								target="_blank"
								rel="noreferrer"
							>
								Repo
							</a>
						)}
					</section>
				</article>
				<aside className="col-span-4 md:col-span-1 gap-8 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="uppercase text-[#5651e5] text-center pb-2">
							Technologies
						</p>
						<ul className="grid grid-cols-3 md:grid-cols-1">
							{tech.map((item) => (
								<li
									className="text-gray-600 py-2 flex items-center cursor-auto"
									key={item}
								>
									<RiRadioButtonFill className="pr-1" />
									{item}
								</li>
							))}
						</ul>
					</div>
				</aside>
			</main>
		</div>
	);
};

export default ProjectDetails;
