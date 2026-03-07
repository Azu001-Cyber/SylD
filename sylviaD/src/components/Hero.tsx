import { ChevronDown } from 'lucide-react'
import avatar from '../assets/avatar.jpg'
import "../logoSlider.css";


const logos = [
    "/logos/Simply.png",
    "/logos/veeva.png",
    "/logos/ems.png",
    "/logos/tech_in_africa.png",
    "/logos/wtp.webp",
    "/logos/arng.jfif",
    "/logos/capital_typing.webp",
    "/logos/tns.svg",
    "/logos/viator.png",
    "/logos/np.png",
    "/logos/tc.png",
];

export default function Hero() {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative">
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
            Sylvia Duruson
          </h1>

          <p className="text-xl md:text-2xl text-brown-light mb-12 max-w-3xl mx-auto font-light">
            Hi there, I'm Sylvia, a remote professional who has built a career across content writing and management, administration, and customer support. It has been quite the journey and I would love to walk you through it.
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

      {/* Company Logo Sliders */}
      <div className="w-full">
        <div className="slider mb-16">
          <div className="slide-track">
              {logos.concat(logos).map((logo, index) => (
              <div className="slide" key={index}>
                  <img src={logo} alt="company logo" />
              </div>
              ))}
            </div>
          </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-light opacity-50" />
      </div>
    </section>
  );
}
