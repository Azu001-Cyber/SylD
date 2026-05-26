import { Link, useLocation } from 'react-router-dom';
import { Feather, ChevronRight } from 'lucide-react';
import { Spin as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import "../css/Header.css"
import { HashLink } from 'react-router-hash-link';

const scrollTo = (id?: string) => {
  const skillsSection = document.getElementById(id ?? '#');
  skillsSection?.scrollIntoView({ behavior: 'smooth' });
};


export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);

  const location = useLocation();
  console.log(isOpen)
  console.log(skillsOpen)



   const skillItems = [
    { name: "Content Writing", path: "/skills/writing" },
    { name: "AI Content Editing", path: "/skills/ai_editing" },
    { name: "Data Entry", path: "/skills/data_entry" },
    { name: "Blog & Content Management", path: "/skills/blog_management" },
    { name: "HR & Staffing", path: "/skills/hr_staffing" },
    { name: "Customer Service", path: "/skills/customer_support" },
  ];

  return (
    <header className="bg-cream-light border-b border-brown-light border-opacity-20 sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {/* <Feather className="w-6 h-6 text-terracotta group-hover:scale-110 transition-transform" /> */}
            <span className="text-xl font-bold text-brown md:text-nowrap">Sylvia Duruson</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-start gap-8">
            <Link
              to="/"
              onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              Home
            </Link>

            <HashLink
              to="/#about"
               onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/portfolio'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              About
            </HashLink>

            <div className="flex flex-col">
                <button
                  onClick={() => setSkillsOpen(!skillsOpen)}
                  className={`font-medium transition-colors flex items-center gap-1 ${
                    skillsOpen
                      ? 'text-terracotta'
                      : 'text-brown hover:text-terracotta'
                  }`}
                >
                  Skills

                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-300 ${
                      skillsOpen ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {skillsOpen && (
                  <div className="mt-3 flex flex-col text-nowrap overflow-hidden">
                    {skillItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setSkillsOpen(false);
                          setOpen(false);
                        }}
                        className="px-4 py-3 text-brown hover:text-terracotta transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
            </div>

            <Link
               onClick={() => {setOpen(false); setSkillsOpen(false)}}
              to="/portfolio"
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>

              Project
            </Link>

            <HashLink
              to="/#contact"
              onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/contact'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              Contact
            </HashLink>

            <Link
              to="/book_consultation"
               onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              <span className='bg-terracotta text-white md:text-nowrap border border-terracotta-dark 
              hover:bg-terracotta-dark hover:border-terracotta-light transition duration-500 hover:scale-105 
              ease-in-out shadow-sm rounded-2xl p-3 hover:text-cream-dark'>Book Consultation</span>
            </Link>
          </nav>


          <div className="hamburger md:hidden" aria-label='Toggle menu'>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
               <nav className="flex items-center gap-8 md:hidden">
          <div className=' p-3  flex flex-col gap-4' >
            <Link
              to="/"
              onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              Home
            </Link>
            <HashLink
              to="#about"
               onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/portfolio'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}
            >
              About
            </HashLink>

              <div className="flex flex-col">
                  <button
                    onClick={() => setSkillsOpen(!skillsOpen)}
                    className={`font-medium transition-colors flex items-center gap-1 ${
                      skillsOpen
                        ? 'text-terracotta'
                        : 'text-brown hover:text-terracotta'
                    }`}
                  >
                    Skills

                    <ChevronRight
                      size={18}
                      className={`transition-transform duration-300 ${
                        skillsOpen ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  {skillsOpen && (
                    <div className="mt-3 flex flex-col overflow-hidden">
                      {skillItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            setSkillsOpen(false);
                            setOpen(false);
                          }}
                          className="px-4 py-3 text-brown  hover:text-terracotta transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
              </div>

            <Link
              onClick={() => {
                scrollTo("skills");
                setOpen(false);
                setSkillsOpen(false);
              }}
              to="/portfolio"
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>

              Project
            </Link>

            <HashLink
              to="/#contact"
               onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/contact'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }`}>
              Contact
            </HashLink>

            <Link
              to="/book_consultation"
               onClick={() => {setOpen(false); setSkillsOpen(false)}}
              className={`font-medium transition-colors ${location.pathname === '/about'
                ? 'text-terracotta'
                : 'text-brown hover:text-terracotta'
                }` }>
              <span className='bg-terracotta text-white text-nowrap border border-terracotta-dark hover:bg-terracotta-dark hover:border-terracotta-light transition duration-300 hover:scale-105 ease-in-out shadow-sm rounded-2xl p-3'>Book Consultation</span>
            </Link>
          </div>
        </nav>

        )}
      </div>
    </header>
  );
}
