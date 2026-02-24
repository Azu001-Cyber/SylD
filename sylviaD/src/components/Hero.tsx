import { ChevronDown } from 'lucide-react'
import avatar from '../assets/avatar.jpg'


export default function Hero() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-sage-light rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-96 h-96 border border-terracotta-light rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="mb-12">
            <img
              src={avatar}
              alt="Professional headshot"
              className="w-40 h-40 mx-auto mb-8 rounded-full object-cover shadow-xl border-4 border-white"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-brown mb-6 leading-tight">
            From Data to Dialogue
          </h1>

          <p className="text-xl md:text-2xl text-brown-light mb-12 max-w-3xl mx-auto font-light">
            A multi-skilled professional specializing in writing, data analysis, and content strategy to drive engagement and understanding.
          </p>

          <button
            onClick={scrollToSkills}
            className="group inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore My Skills
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-light opacity-50" />
      </div>
    </section>
  );
}
