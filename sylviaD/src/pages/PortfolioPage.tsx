import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <section className="py-12 bg-cream-light border-b border-brown-light border-opacity-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-brown mb-2">My Projects</h1>
              <p className="text-xl text-brown-light">Explore my portfolio of work and projects</p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-brown hover:bg-brown-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <Portfolio />
    </div>
  );
}
