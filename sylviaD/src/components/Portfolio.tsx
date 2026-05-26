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
    title: 'TechinAfrica',
    description: 'Built an interactive dashboard analyzing 50K+ customer feedback entries, revealing actionable insights that reduced support tickets by 15%.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://www.techinafrica.com/author/sylvia-duruson/',
    tags: [ 'writing', 'blog-management'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Tourist Checklist',
    description: 'Managed content strategy and SEO optimization for a tech blog, achieving 120% year-over-year traffic growth and 50K monthly readers.',
     year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://thetouristchecklist.com/things-to-do-in-huntersville-nc/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Tourist Checklist',
    description: 'Developed comprehensive editorial guidelines for a 20-person content team, reducing revision cycles by 30% and ensuring brand consistency.',
     year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'thetouristchecklist.com/fun-things-to-do-in-lees-summit-mo/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '4',
    title: 'Tourist Checklist',
    description: 'Analyzed 3 years of sales data using Python and SQL, creating visualizations that identified $2M in untapped revenue opportunities.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://thetouristchecklist.com/things-to-do-in-league-city-tx/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '5',
    title: 'Tourist Checklist',
    description: 'Created and maintained a searchable knowledge base with 200+ articles, reducing first-response time by 40% and improving CSAT scores.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://thetouristchecklist.com/fun-things-to-do-in-plant-city-fl',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '6',
    title: 'Tourist Checklist',
    description: 'Wrote and optimized a 12-part content series that generated 100K impressions and 5K qualified leads over 6 months.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://thetouristchecklist.com/best-bowling-centers-in-charlotte-nc/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
   {
    id: '7',
    title: 'Tourist Checklist',
    description: 'Built an interactive dashboard analyzing 50K+ customer feedback entries, revealing actionable insights that reduced support tickets by 15%.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://thetouristchecklist.com/fun-things-to-do-in-olathe-ks/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '8',
    title: 'Freelance Cybersecurity Writing',
    description: 'Managed content strategy and SEO optimization for a tech blog, achieving 120% year-over-year traffic growth and 50K monthly readers.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://www.atamgo.com/dont-let-hackers-ruin-your-marketing-campaigns/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '9',
    title: 'Freelance Cybersecurity Writing',
    description: 'Developed comprehensive editorial guidelines for a 20-person content team, reducing revision cycles by 30% and ensuring brand consistency.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://www.brandvm.com/post/business-travel-mistakes-5-things-to-avoid-to-keep-your-data-safe',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '10',
    title: 'Freelance Cybersecurity Writing',
    description: 'Analyzed 3 years of sales data using Python and SQL, creating visualizations that identified $2M in untapped revenue opportunities.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://luxafor.com/how-to-stay-productive-while-working-remotely/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '11',
    title: 'Freelance Cybersecurity Writing',
    description: 'Created and maintained a searchable knowledge base with 200+ articles, reducing first-response time by 40% and improving CSAT scores.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://starngage.com/plus/en-us/blog/how-to-thrive-and-succeed-as-an-influencer',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '12',
    title: 'Freelance Cybersecurity Writing',
    description: 'Wrote and optimized a 12-part content series that generated 100K impressions and 5K qualified leads over 6 months.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://www.instagram.com/bbntimesofficial/p/DFdGhKrtJQB/',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
   {
    id: '13',
    title: 'Consulting Company',
    description: 'Built an interactive dashboard analyzing 50K+ customer feedback entries, revealing actionable insights that reduced support tickets by 15%.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://www.linkedin.com/posts/partfinda_everything-big-starts-small-but-theres-activity-7079742222539046912-K_sI?utm_source=share&utm_medium=member_android',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '14',
    title: 'Consulting Company',
    description: 'Managed content strategy and SEO optimization for a tech blog, achieving 120% year-over-year traffic growth and 50K monthly readers.',
     year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://www.linkedin.com/posts/partfinda_leveraging-linkedin-as-a-platform-activity-7080466424216829952-6W6N?utm_source=share&utm_medium=member_android',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '15',
    title: 'Consulting Company',
    description: 'Analyzed 3 years of sales data using Python and SQL, creating visualizations that identified $2M in untapped revenue opportunities.',
    year: "2026",
    tools: ['customer-support'],
    link:'https://www.linkedin.com/posts/partfinda_funding-capital-investment-activity-7083370413765910528-4Lgy?utm_source=share&utm_medium=member_android',
    tags: ['writing'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '16',
    title: 'Content Editing',
    description: 'Developed comprehensive editorial guidelines for a 20-person content team, reducing revision cycles by 30% and ensuring brand consistency.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://wetrainphlebotomists.com/',
    tags: ['editing'],
    image: 'https://images.pexels.com/photos/261510/pexels-photo-261510.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '17',
    title: 'HR & Staffing',
    description: 'Created and maintained a searchable knowledge base with 200+ articles, reducing first-response time by 40% and improving CSAT scores.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://sylvia-contract-tracker.vercel.app/',
    tags: ['hr-staffing'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '18',
    title: 'Customer Support',
    description: 'Wrote and optimized a 12-part content series that generated 100K impressions and 5K qualified leads over 6 months.',
    year: "2026",
    tools: ['Something', 'somehting-more'],
    link:'https://sylvia-co.vercel.app/',
    tags: [ 'customer-support',],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
   {
    id: '19',
    title: 'Data Entry',
    description: 'Wrote and optimized a 12-part content series that generated 100K impressions and 5K qualified leads over 6 months.',
    year: "APR 2024 - APR 2025",
    tools: ['Veeva Systems', 'Google Suite', 'Zoom','VOIP'],
    link:'https://sylvia-data-entry.vercel.app/',
    tags: ['data-entry'],
    image: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
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
                   <div className=''>
                      <div>
                        <h3 className="text-xl font-semibold text-brown mb-3 text-start">
                          {project.title}
                          {/* <ExternalLink className="w-5 h-5 text-brown-light opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                        </h3>
                      </div>
                      <div>
                        <h5 className='font-mono font-black text-nowrap'>{project.year}</h5>
                      </div>
                   </div>

                  <p className="text-brown-light mb-4 leading-relaxed">{project.description}</p>

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
                      <a href={project.link} className='border border-slate-300 rounded-2xl p-3 my-5 font-semibold hover:bg-terracotta hover:text-white bg-cream opacity-2 transition-color duration-500 ease-in-out'>Live Demo</a>
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
