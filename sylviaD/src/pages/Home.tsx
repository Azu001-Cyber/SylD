import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />

      <section className="py-12 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </Link>
        </div>
      </section>
      
      <Skills />
      <Contact />
    </div>
  );
}
