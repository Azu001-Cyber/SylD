import { Link, useLocation } from 'react-router-dom';
import { Feather } from 'lucide-react';

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-cream-light border-b border-brown-light border-opacity-20 sticky top-0 z-30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Feather className="w-6 h-6 text-terracotta group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold text-brown">Portfolio</span>
          </Link>

          <nav className="flex items-center gap-8">
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
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
