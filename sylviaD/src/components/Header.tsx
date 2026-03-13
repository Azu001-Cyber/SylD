import { Link, useLocation } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import "../css/Header.css"

const scrollTo = (id?: string) => {
  const skillsSection = document.getElementById(id ?? '#');
  skillsSection?.scrollIntoView({ behavior: 'smooth' });
};


export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();


  return (
    <header className="bg-cream-light border-b border-brown-light border-opacity-20 sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Feather className="w-6 h-6 text-terracotta group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-brown">Sylvia Duruson</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors ${location.pathname === '/'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              Home
            </Link>

            <Link
              to="/#about"
              onClick={() => {
                scrollTo("about")
                setOpen(false)
              }}
              className={`font-medium transition-colors ${location.pathname === '/portfolio'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              About
            </Link>

            <Link
              onClick={() => {
                scrollTo("skills")
                setOpen(false)
              }}
              to="/#skills"
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>

              Skills
            </Link>

            <Link
              onClick={() => {
                scrollTo("skills")
                setOpen(false)
              }}
              to="/portfolio"
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>

              Project
            </Link>

            <Link
              to="/#contact"
              onClick={() => {
                scrollTo('contact')
                setOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/contact'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              Contact
            </Link>

            <Link
              to="/book-consultation"
              onClick={() => 
                setOpen(false)}
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              <span className='bg-terracotta text-white border rounded-full p-3'>Book a Consultation</span>
            </Link>
          </nav>


          <div className="hamburger md:hidden" aria-label='Toggle menu'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

        </div>

        {/* Mobile Menu */}
        <nav className="flex items-center gap-8 md:hidden">
          <div className={`nav-links ${isOpen ? 'open' : ''} p-3` }>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors ${location.pathname === '/'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              Home
            </Link>
            <Link
              to="#about"
              onClick={() => {
                scrollTo('about')
                setOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/portfolio'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              About
            </Link>

            <Link
              to="/#skills"
              onClick={() => {
                scrollTo('skills')
                setOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              Skills
            </Link>

            <Link
              onClick={() => {
                scrollTo("skills")
                setOpen(false)
              }}
              to="/portfolio"
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>

              Project
            </Link>

            <Link
              to="/#contact"
              onClick={() => {
                scrollTo('contact')
                setOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/contact'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              Contact
            </Link>

            <Link
              to="/book-consultation"
              onClick={() => setOpen(false)}
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }` }>
              <span className='bg-terracotta text-white border rounded-full p-3'>Book a Consultation</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
