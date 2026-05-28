import { useState } from 'react';
// import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  year: string;
  tools: string[];
  link: string;
  tags: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Tourist Checklist',
    description: 'Build a go-to US travel guide platform that helps travelers confidently explore any city with deeply researched, long-form guides on the best attractions, activities, food, and hidden gems, cutting through generic listicles to deliver real, practical insights on exactly where to go and what to do.',
    year: "2023",
    tools: ['WordPress', 'SEO Formatting'],
    link:'/skills/writing/touristchecklist',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'We Train Phlebotomy',
    description: 'Manage AI-assisted content editing and publishing for a medical education website by refining SurferSEO and ChatGPT-generated drafts through a structured editorial workflow, ensuring every article is accurate, readable, medically responsible, and fully SEO-optimized before publication, bridging the gap between raw AI output and publication-ready content.',
    year: "2024",
    tools: ['SurferSEO, ChatGPT, WordPress, Google Sheets'],
    link:' https://wetrainphlebotomists.com/',
    tags: ['editing'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'TechinAfrica',
    description: 'Run and manage a full editorial workflow for an African tech news publication by coordinating story assignments, reviewing drafts, providing structured feedback, and handling SEO optimization through to final publication, ensuring consistent output, high-quality reporting, and a smooth, uninterrupted publishing pipeline.',
    year: "2025",
    tools: ['WordPress', ' Google Drive', 'SEO Rormatting '],
    link:'https://www.techinafrica.com/author/sylvia-duruson/',
    tags: ['writing', 'blog-management'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Freelance Content Writing',
    description: 'Provide high-quality, SEO-optimized, and audience-focused content writing services across multiple niches including food, cybersecurity, travel, and events. Helping businesses and creators publish well-researched and engaging content without the cost or commitment of hiring a full-time writer.',
    year: "2025",
    tools: ['WordPress', 'SEO Formatting'],
    link:'/skills/writing/freelancewriting',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Data Entry',
    description: 'Manage high-volume structured data entry and verification for a healthcare-focused cloud computing platform by accurately recording and validating information on healthcare professionals and organizations through systematic research, direct verification, and strict data quality standards, ensuring a reliable, consistent, and complete database.',
    year: "2025",
    tools: ['Veeva Systems', 'Google Suite', 'Zoom','VOIP'],
    link:'https://sylvia-data-entry.vercel.app/',
    tags: ['data-entry'],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Customer Support',
    description: 'Deliver Tier 2 customer support for a live SMS platform serving Shopify-based DTC brands by handling pre-sale questions, post-sale issues, cart recovery, and billing support, ensuring fast, brand-aligned responses that improve customer satisfaction, recover lost sales, and resolve issues efficiently without unnecessary escalations.',
    year: "2026",
    tools: ['Front', 'Zendesk', 'Shopify', 'Gorgias', 'Jira', 'Slack','Google Sheets', 'DeepL'],
    link:'https://sylvia-co.vercel.app/',
    tags: [ 'customer-support',],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '7',
    title: 'HR & Staffing Operations',
    description: 'Provide end-to-end recruitment and HR administration services for small businesses and individual clients by sourcing, vetting, and placing contractors in roles such as customer support, data entry, and content creation, while also managing onboarding and ongoing contract coordination, giving clients reliable access to skilled remote talent without needing an in-house HR team.',
    year: "Ongoing",
    tools: ['Symplr', 'Xenqu', 'Vetty', 'Sense','Connect UTC', 'Outlook', 'Teams', 'Microsoft Authenticator', 'Excel', 'Google Sheets'],
    link:'https://sylvia-contract-tracker.vercel.app/',
    tags: ['hr-staffing'],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'writing', label: 'Content Writing' },
  { id: 'data-entry', label: 'Data Entry' },
  { id: 'editing', label: 'AI Content Editing' },
  { id: 'blog-management', label: 'Blog & Content Management' },
  { id: 'customer-support', label: 'Customer Service Support' },
  {id:'hr-staffing', label:'HR & Staffing'}
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.tags.includes(activeFilter));

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
                   <div className='flex justify-between items-center'>
                      <div>
                        <h3 className="text-xl font-semibold text-brown text-start">
                          {project.title}
                          {/* <ExternalLink className="w-5 h-5 text-brown-light opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                        </h3>
                      </div>
                      <div>
                        <h5 className='font-mono font-black text-nowrap'>{project.year}</h5>
                      </div>
                   </div>

                  <p className="text-brown-light mb-4 leading-relaxed font-medium">{project.description}</p>

                  <div className='mb-5'>
                    <h6 className='font-semibold text-sm'>
                      Tools Used:
                      {project.tools.map(tool => (
                          <span 
                            key={tool}
                            className="px-3 py-1 bg-cream text-brown text-xs font-medium text-nowrap rounded-full"
                            >
                              
                            {tool.replace('-', ' ')}
                          </span>

                        
                      ))}
                    </h6>
                  </div>

                  <div className=''>
                      <a href={project.link} className='border border-slate-300 rounded-full p-3 my-5 font-semibold hover:bg-terracotta hover:text-white bg-cream opacity-2 transition-color duration-500 ease-in-out'>Live Demo</a>
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

export default Portfolio;
