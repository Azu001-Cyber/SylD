import abtMe from "../assets/abtMe.jpg"

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">About Me</h2>
            <p className="text-xl text-brown-light">Where analytics meets storytelling</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg">
                <p className="text-brown-light leading-relaxed mb-6">
                  I've always been fascinated by the intersection of numbers and narratives. Early in my career, I discovered that the most powerful insights emerge when you can both analyze complex data and communicate it in ways that resonate with people.
                </p>
                <p className="text-brown-light leading-relaxed mb-6">
                  This realization led me to develop expertise across what might seem like disparate fields—writing, data analysis, editing, content management, and customer support. But to me, they're all connected threads in the same tapestry: understanding what matters to people and helping organizations communicate effectively.
                </p>
                <p className="text-brown-light leading-relaxed mb-6">
                  Whether I'm building a dashboard that reveals customer pain points, crafting an article that explains technical concepts clearly, or helping a frustrated user solve their problem, I'm driven by the same goal: turning complexity into clarity and data into understanding.
                </p>
                <p className="text-slate-light leading-relaxed">
                  Today, I bring this multidisciplinary approach to every project, believing that the best solutions come from seeing problems from multiple angles—analytical and empathetic, quantitative and qualitative, technical and human.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <img
                  src={abtMe}
                  alt="Professional portrait"
                  className="w-full aspect-square rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
