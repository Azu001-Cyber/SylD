import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Customer Insights Dashboard',
    description: 'Built an interactive dashboard analyzing 50K+ customer feedback entries, revealing actionable insights that reduced support tickets by 15%.',
    tags: ['data-analysis', 'customer-support'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Tech Industry Blog Growth',
    description: 'Managed content strategy and SEO optimization for a tech blog, achieving 120% year-over-year traffic growth and 50K monthly readers.',
    tags: ['writing', 'blog-management'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Editorial Style Guide',
    description: 'Developed comprehensive editorial guidelines for a 20-person content team, reducing revision cycles by 30% and ensuring brand consistency.',
    tags: ['editing', 'writing'],
    image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Sales Performance Analysis',
    description: 'Analyzed 3 years of sales data using Python and SQL, creating visualizations that identified $2M in untapped revenue opportunities.',
    tags: ['data-analysis'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Support Knowledge Base',
    description: 'Created and maintained a searchable knowledge base with 200+ articles, reducing first-response time by 40% and improving CSAT scores.',
    tags: ['customer-support', 'writing'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Content Marketing Campaign',
    description: 'Wrote and optimized a 12-part content series that generated 100K impressions and 5K qualified leads over 6 months.',
    tags: ['writing', 'blog-management'],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'writing', label: 'Content Writing' },
  { id: 'data-entry', label: 'Data Entry' },
  { id: 'editing', label: 'AI Content Editing' },
  { id: 'blog-management', label: 'Blog & Content Management' },
  { id: 'customer-support', label: 'Customer Service Support' }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brown mb-4">Putting Skills into Practice</h2>
            <p className="text-xl text-brown-light">A selection of projects showcasing my diverse capabilities</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterOptions.map(option => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === option.id
                    ? 'bg-terracotta text-white shadow-md hover:bg-terracotta-dark'
                    : 'bg-cream-light text-brown hover:bg-gold-light hover:text-brown-dark border border-brown-light border-opacity-30'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group bg-cream-light rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brown opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brown mb-3 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 text-brown-light opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-brown-light mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cream text-brown text-xs font-medium rounded-full"
                      >
                        #{tag.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
