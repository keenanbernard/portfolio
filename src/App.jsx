import { useScrollReveal } from './useScrollReveal';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Work from './components/Work';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import OffTheClock from './components/OffTheClock';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal();

  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <Services />
      <Skills />
      <Experience />
      <OffTheClock />
      <Contact />
      <Footer />
    </div>
  );
}
