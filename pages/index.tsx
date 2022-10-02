import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Saurav's Portfolio!</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
