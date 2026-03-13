import abtMe from "../assets/abtMe.jpg"
import "../css/about.css"

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">About Me</h2>
            <p className="text-xl text-brown-light"></p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="order-2 md:order-1 flex flex-col justify-center h-full">
              <div className="prose prose-lg flex flex-col items-between gap-16 ">
                <p className="text-brown-light leading-relaxed mb-6">
                  I started out as a freelance writer for a travel blog, and that one role quietly set everything else in motion. Writing led to editing, editing led to AI content humanisation, and that eventually led to managing content teams for several blogs.
                </p>
                <p className="text-brown-light leading-relaxed mb-6">
                The inconsistency of freelance work eventually pushed me to explore other fields, and I am glad it did. Over the years I have worked as a data entry steward, a sourcing assistant, a virtual assistant, and a customer support specialist, moving through different industries and environments while picking up new tools, systems, and skills along the way.
                </p>
                <p className="text-slate-light leading-relaxed">
                  Every role has added something new, and together they have shaped a career I am genuinely proud of. I love creating but I also love working behind the scenes and making things run smoothly, and I look forward to bringing that same energy to your project.
                </p>
              </div>
            </div>

            <div className="order-1 md:order-2 relative  abt-img-container">
              {/* <div className="relative w-full"> */}
                <img
                  src={abtMe}
                  alt="Professional portrait"
                  className="abt-img w-full h-full rounded-2xl object-cover shadow-2xl overflow-clip"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gold rounded-full opacity-20"></div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
