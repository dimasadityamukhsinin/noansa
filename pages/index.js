import { useRef } from 'react';
import Navigationbar from './Navigationbar';
import Hero from './Hero';
import About from './About';
import Specialise from './Specialise';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import { fetchAPI } from '../lib/api';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = ({ articles, categories, homepage }) => {
  const aboutRef = useRef(null);
  const aboutScroll = () => scrollToRef(aboutRef);
  const specialiseRef = useRef(null);
  const specialiseScroll = () => scrollToRef(specialiseRef);
  const projectRef = useRef(null);
  const projectScroll = () => scrollToRef(projectRef);
  const contactRef = useRef(null);
  const contactScroll = () => scrollToRef(contactRef);
  
  return (
    <div>
      <Navigationbar about={aboutScroll} whatwedo={specialiseScroll} project={projectScroll} contact={contactScroll} />
      <Hero />
      <About about={aboutRef}/>
      <Specialise specialise={specialiseRef}/>
      <Project project={projectRef}/>
      <Contact contact={contactRef}/>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;