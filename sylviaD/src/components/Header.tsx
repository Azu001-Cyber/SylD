import { Link, useLocation } from 'react-router-dom';
import { Feather } from 'lucide-react';
import { Spin as Hamburger} from 'hamburger-react';
import { useState } from 'react';
import "../Header.css"

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

            <nav className="flex items-center gap-8">
              <div className={`nav-links ${isOpen? 'open' : ''}`}>
                <Link
                  to="/"
                  className={`font-medium transition-colors ${
                    location.pathname === '/'
                      ? 'text-terracotta'
                      : 'text-brown hover:text-terracotta'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/portfolio"
                  className={`font-medium transition-colors ${
                    location.pathname === '/portfolio'
                      ? 'text-terracotta'
                      : 'text-brown hover:text-terracotta'
                  }`}
                >
                  Project
                </Link>

                <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                    location.pathname === '/about'
                      ? 'text-terracotta'
                      : 'text-brown hover:text-terracotta'
                  }`}>
                    About
                </Link>

                <Link 
                to="/contact" 
                className={`font-medium transition-colors ${
                    location.pathname === '/contact'
                      ? 'text-terracotta'
                      : 'text-brown hover:text-terracotta'
                  }`}>
                    Contact
                </Link>
              </div>

              <div className="hamburger">
                <Hamburger toggled={isOpen} toggle={setOpen}/>
              </div>
            </nav>
          </div>
      </div>
    </header>
  );
}
