import Head from 'next/head';
import { createClient } from 'contentful';

import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills';
import PreviewImg from '../../public/assets/preview.png';

export async function getStaticProps() {
	// Connect to Contentful API
	const client = createClient({
		space: process.env.CONTENTFUL_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'project' });

	// Return projects as a prop, and search for new entries every 5 seconds
	return {
		props: {
			projects: res.items,
		},
		revalidate: 5,
	};
}

export default function Home({ projects }) {
	return (
		<>
			<Head>
				<title>Eli | Fullstack Developer</title>
				<meta name />
				<meta
					property="og:title"
					content="Eli-Keith Bass | Fullstack Web Developer"
					key="title"
				/>
				<meta property="og:image" content={PreviewImg} key="image" />
				<meta
					property="og:description"
					content="Portfolio website of fullstack Javascript and React projects by Eli-Keith Bass"
					key="description"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects projects={projects} />
			<Contact />
		</>
	);
}
