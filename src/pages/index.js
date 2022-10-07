import Head from 'next/head';
import { createClient } from 'contentful';

import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills';
import ScrollIndicator from '../components/ScrollIndicator';

export async function getStaticProps() {
  // Connect to Contentful API
  const client = createClient({
    space: process.env.CONTENTFUL_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const [index, about, skillsList, projects, contact] = await Promise.all([
    client.getEntries({ content_type: 'indexSection' }),
    client.getEntries({ content_type: 'aboutSection' }),
    client.getEntries({ content_type: 'skillsList' }),
    client.getEntries({ content_type: 'project' }),
    client.getEntries({ content_type: 'contactSection' }),
  ]);

  // Return content as props, and search for new entries every 5 seconds
  return {
    props: {
      index: index.items[0],
      about: about.items[0],
      skills: skillsList.items[0].fields.skills,
      projects: projects.items,
      contact: contact.items[0],
    },
    revalidate: 5,
  };
}

export default function Home({ index, about, skills, projects, contact }) {
  return (
    <>
      <Head>
        <title>Eli | Fullstack Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Eli-Keith Bass | Fullstack Web Developer"
        />
        <meta
          property="og:description"
          content="Portfolio website of fullstack Javascript and React projects by Eli-Keith Bass"
        />
        <meta name="image" property="og:image" content="/assets/preview.png" />
        <meta property="og:url" content="https://www.elikeith.dev/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-between">
        <ScrollIndicator />
        <Main content={index} />
        <About content={about} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact content={contact} />
      </div>
    </>
  );
}
