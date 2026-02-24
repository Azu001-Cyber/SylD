import { useState } from 'react';
import { Feather, BarChart3, Search, Calendar, Headphones } from 'lucide-react';

interface Skill {
  id: string;
  title: string;
  icon: React.ReactNode;
  philosophy: string;
  proficiencies: string[];
  experience: string;
  color: string;
}

const skills: Skill[] = [
  {
    id: 'writing',
    title: 'Writing & Content Creation',
    icon: <Feather className="w-8 h-8" />,
    philosophy: "I craft narratives that resonate. Every piece of writing should serve a purpose—whether it's to inform, persuade, or inspire. My approach combines storytelling with strategic thinking to create content that connects with readers on a human level.",
    proficiencies: [
      'Long-form articles and blog posts',
      'Technical writing and documentation',
      'Copywriting for web and marketing',
      'Storytelling and narrative development',
      'Brand voice development'
    ],
    experience: "Authored over 200 published articles across technology, business, and lifestyle topics, with an average engagement rate 40% above industry benchmarks.",
    color: 'terracotta'
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Visualization',
    icon: <BarChart3 className="w-8 h-8" />,
    philosophy: "I believe data is the foundation of a great story. My approach involves not just finding the 'what,' but understanding the 'why,' and translating complex datasets into clear, actionable insights for stakeholders at all levels.",
    proficiencies: [
      'SQL for data extraction and manipulation',
      'Python (Pandas, Matplotlib) for data cleaning and analysis',
      'Tableau & Google Looker Studio for interactive dashboards',
      'Statistical analysis and A/B testing',
      'Data storytelling and presentation'
    ],
    experience: "At Company X, I developed a customer feedback dashboard that identified key pain points, leading to a 15% reduction in support tickets within one quarter.",
    color: 'sage'
  },
  {
    id: 'editing',
    title: 'Editing & Proofreading',
    icon: <Search className="w-8 h-8" />,
    philosophy: "Great editing is invisible—it elevates the writer's voice while ensuring clarity, consistency, and correctness. I approach each piece with both a critical eye and deep respect for the author's intent.",
    proficiencies: [
      'Copy editing and line editing',
      'Proofreading and fact-checking',
      'Style guide development and enforcement',
      'Content structure and flow optimization',
      'AP, Chicago, and APA style expertise'
    ],
    experience: "Edited and refined over 500 pieces of content, reducing revision rounds by 30% through comprehensive first-pass editing.",
    color: 'brown'
  },
  {
    id: 'blog-management',
    title: 'Blog & SEO Management',
    icon: <Calendar className="w-8 h-8" />,
    philosophy: "A successful blog requires equal parts creativity and strategy. I balance content quality with SEO best practices, editorial calendars, and audience insights to build sustainable growth and engagement.",
    proficiencies: [
      'Content strategy and editorial planning',
      'SEO optimization and keyword research',
      'Google Analytics and Search Console',
      'Content management systems (WordPress, Medium)',
      'Social media integration and promotion'
    ],
    experience: "Managed a corporate blog that grew organic traffic by 120% year-over-year through strategic content planning and SEO optimization.",
    color: 'terracotta'
  },
  {
    id: 'customer-support',
    title: 'Customer Support & Communication',
    icon: <Headphones className="w-8 h-8" />,
    philosophy: "Every customer interaction is an opportunity to build trust and loyalty. I combine active listening, empathy, and problem-solving skills to turn challenges into positive experiences.",
    proficiencies: [
      'Multi-channel support (email, chat, phone)',
      'CRM systems (Zendesk, Intercom)',
      'Conflict resolution and de-escalation',
      'Knowledge base creation and management',
      'Customer feedback analysis'
    ],
    experience: "Maintained a 98% customer satisfaction rating while handling over 1,000 support tickets monthly, creating templated responses that reduced resolution time by 25%.",
    color: 'sage'
  }
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const handleCardClick = (skillId: string) => {
    setActiveSkill(activeSkill === skillId ? null : skillId);
  };

  return (
    <section id="skills" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">My Toolkit</h2>
            <p className="text-xl text-brown-light">Click each skill to explore my expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => {
              const isActive = activeSkill === skill.id;

              return (
                <div key={skill.id} className="flex flex-col">
                  <button
                    onClick={() => handleCardClick(skill.id)}
                    className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl text-left ${
                      isActive
                        ? `border-${skill.color} bg-${skill.color} bg-opacity-5 shadow-lg`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`mb-4 ${isActive ? `text-${skill.color}` : 'text-slate'}`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-brown mb-2">{skill.title}</h3>
                    <div className={`text-sm font-medium ${isActive ? `text-${skill.color}` : 'text-slate-light'}`}>
                      {isActive ? 'Click to close' : 'Click to explore'}
                    </div>
                  </button>

                  {isActive && (
                    <div className="mt-4 p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 animate-fade-in">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-brown uppercase tracking-wide mb-2">Philosophy</h4>
                          <p className="text-brown-light leading-relaxed text-sm">
                            {skill.philosophy}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-brown uppercase tracking-wide mb-2">Key Proficiencies</h4>
                          <ul className="space-y-1">
                            {skill.proficiencies.map((prof, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <span className="text-terracotta mt-1">•</span>
                                <span className="text-brown-light">{prof}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-brown uppercase tracking-wide mb-2">Experience Highlight</h4>
                          <p className="text-brown-light leading-relaxed text-sm italic">
                            {skill.experience}
                          </p>
                        </div>

                        <button
                          onClick={() => {
                            const portfolioSection = document.getElementById('portfolio');
                            portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`inline-flex items-center gap-2 bg-${skill.color} text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg`}
                        >
                          See Related Projects
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
