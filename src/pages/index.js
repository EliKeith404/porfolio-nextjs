import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
	const baseImagePath = '/assets';

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
			<Navbar />
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
}
