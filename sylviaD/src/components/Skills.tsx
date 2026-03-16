
import { Feather, BarChart3, Calendar, BrainCircuit,  UserCog, Headphones} from 'lucide-react';
import {Link} from "react-router-dom"

interface Skill {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  {
    id: 'writing',
    title: 'Content Writing',
    icon: <Feather className="w-8 h-8" />,
    color: 'terracotta'
  },
  {
    id: 'data_entry',
    title: 'Data Entry',
    icon: <BarChart3 className="w-8 h-8" />,
    color: 'sage'
  },
  {
    id: 'ai_editing',
    title: 'AI Content Editing',
    icon: <BrainCircuit className="w-8 h-8" />,
    color: 'brown'
  },
  {
    id: 'blog-management',
    title: 'Blog & Content Management',
    icon: <Calendar className="w-8 h-8" />,
    color: 'terracotta'
  },
  {
    id: 'customer-support',
    title: 'Customer Service Support',
    icon: <Headphones className="w-8 h-8" />,
    color: 'sage'
  },
  {
    id: 'hr/admin_assistant',
    title: 'HR / Admin Assistant',
    icon: <UserCog className="w-8 h-8" />,
    color: 'sage'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">
              My Skills
            </h2>
            <p className="text-xl text-brown-light">
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-col">
                <Link to={`/skills/${skill.id}`}>
                  <div className="p-8 rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl text-left">
                    
                    <div className="mb-4 text-slate">
                      {skill.icon}
                    </div>

                    <h3 className="text-xl font-semibold text-brown mb-2">
                      {skill.title}
                    </h3>
                    <p className='text-sm font-medium text-slate-light mt-2 transition-colors duration-300 group-hover:text-terracotta'>Click to explore my experiance</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}