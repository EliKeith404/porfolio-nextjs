import Head from 'next/head';
import { createClient } from 'contentful';

import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: 'project' });

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
				<meta
					name="description"
					content="Portfolio website of fullstack Javascript and React projects by Eli-Keith Bass"
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
