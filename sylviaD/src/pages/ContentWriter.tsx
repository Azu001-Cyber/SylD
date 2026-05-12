
// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';
import RecentWorkProjectCard from '../components/RecentWork';

import { Feather, CheckCircleIcon, ArrowBigRight } from 'lucide-react';
import {BarChart3, Calendar, BrainCircuit,  UserCog, Headphones} from 'lucide-react';
import {Link} from "react-router-dom"
import { useEffect } from 'react';


    interface Skill {
    id: string;
    title: string;
    icon: React.ReactNode;
    color: string;
    }

    const skills: Skill[] = [
    // {
    //     id: 'writing',
    //     title: 'Content Writing',
    //     icon: <Feather className="w-8 h-8" />,
    //     color: 'terracotta'
    // },
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
        id: 'blog_management',
        title: 'Blog & Content Management',
        icon: <Calendar className="w-8 h-8" />,
        color: 'terracotta'
    },
    {
        id: 'customer_support',
        title: 'Customer Service Support',
        icon: <Headphones className="w-8 h-8" />,
        color: 'sage'
    },
    {
        id: 'hr_staffing',
        title: 'HR & Staffing',
        icon: <UserCog className="w-8 h-8" />,
        color: 'sage'
    }
];

const ContentWriter = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-20 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    {/* <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1> */}
                    <h1 className='text-black font-bold text-5xl mb-3 font-serif'>Content Writing</h1>
                    <p className='text-gray-500'>Long-Form Content Researching and writing in-depth articles, 
                        destination guides, and editorial pieces that go beyond surface-level
                         information to give readers something genuinely useful and worth reading.
                    </p>
                </HeroExperiance>
            </div>

            {/* What i do */}
            <div className='mx-auto px-6 py-20 w-full bg-cream-light'>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-10 text-black">
                        <h2 className='text-2xl md:text-4xl pb-3'>
                        What I Do
                        </h2>
                        <div className='border-b-4 rounded-xl border-gold w-[3em] md:w-[5em] mx-auto animate-bounce'></div>
                    </div> 
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 text-start'>
                        <WhatIDoCard
                        icon={<Feather className="w-8 h-8 text-terracotta-dark" />}
                        title={'SEO Content Writing'}
                        description={'Producing keyword-optimized articles with proper header structure, natural keyword placement, and formatting built for both readers and search engines from the ground up.'}
                        />
                        <WhatIDoCard
                        icon={<Feather className="w-8 h-8 text-terracotta-dark" />}
                        title={'Travel Writing '}
                        description={'Covering specific destinations, activities, and attractions in detail, researching each one independently to surface what makes a place worth visiting, and giving readers the context to make real decisions.'}
                        />
                        <WhatIDoCard
                        icon={<Feather className="w-8 h-8 text-terracotta-dark" />}
                        title={'Tech and News Writing'}
                        description={'Covering developments across industries, including African tech, entertainment, and global news, identifying what is worth covering, researching thoroughly, and delivering clean, accurate copy on deadline.'}
                        />
                        <WhatIDoCard
                        icon={<Feather className="w-8 h-8 text-terracotta-dark" />}
                        title={'Multi-Niche Writing '}
                        description={'Writing across travel, tech, entertainment, food, cybersecurity, events, and decoration, adapting tone, voice, and research approach to fit each subject area and the audience it speaks to.'}
                        />
                        <WhatIDoCard
                        icon={<Feather className="w-8 h-8 text-terracotta-dark" />}
                        title={'Copywriting '}
                        description={'Writing conversion-focused copy for tour and experience listings, translating inclusions and itineraries into benefit-driven lines that give travelers a concrete reason to book.'}
                        />
                        <WhatIDoCard
                        icon={<Feather className="w-8 h-8 text-terracotta-dark" />}
                        title={'Client and Freelance Work'}
                        description={'Taking on individual client briefs across different industries, interpreting requirements accurately, delivering drafts, incorporating feedback, and managing the full writing process independently from brief to final submission.'}
                        />

                    </div>
                    
                </div>
            </div>

            {/* My Process */}
            <div className=' container max-w-6xl mx-auto px-6 py-10'>
                <div className='text-center py-10 text-black'>
                    <h2 className='text-2xl md:text-4xl'>My Process</h2>
                </div>
                <div className='grid gird-cols-1 md:grid-cols-3 gap-10 text-center'>
                    <MyProcess
                    label={'1'}
                    title={'Research'}
                    description={'Before anything is written, I go deep into the brief, the topic, and the target audience. For destination content, that means building out a full list of activities and attractions and researching each one independently. For news and niche content, it means identifying the right angle, finding credible sources, and gathering everything needed to write with authority.'}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Structure and Write'}
                    description={'Organizing all research into a logical, readable flow with proper header hierarchy, clear transitions between sections, and content that holds up at length without padding or repetition. The structure is built to serve both the reader and the search engine.'}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Optimize'}
                    description={'Incorporating target keywords naturally throughout the body, applying proper header tags, and checking keyword density so SEO requirements are met without the content feeling forced or mechanical'}
                    />
                    <MyProcess 
                    label={'4'}
                    title={'Refine and Self-Edit'}
                    description={"Reading through the full piece before submission to check for accuracy, flow, clarity, and consistency. Cutting anything that doesn't add value, tightening sentences, and making sure the final draft is clean and publication-ready."}
                    />
                     <MyProcess 
                    label={'5'}
                    title={'Incorporate Feedback'}
                    description={'Receiving client or editor notes, implementing revisions accurately, and returning a corrected draft promptly. Managing that cycle professionally is part of delivering work that actually serves the client.'}
                    />
                    
                </div>
            </div>

            {/* Other Services */}
            <div className="container mx-auto py-10 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-10 text-black">
                        <h2 className="text-2xl md:text-4xl pb-3">
                        Other Services I Offer
                        </h2>
                        <div className='border-b-4 rounded-xl border-gold w-[3em] md:w-[5em] mx-auto animate-bounce'></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skill) => (
                        <div key={skill.id} className="flex flex-col">
                            <Link to={`/skills/${skill.id}`}>
                            <div className="p-8 rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl text-left">
                                
                                <div className="mb-4 text-slate">
                                {skill.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-brown mb-2 text-nowrap">
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

            {/* Project / Recent Work */}
            <section className='mx-auto w-full py-10 px-6'>
                <div className='max-w-5xl mx-auto'>
                    {/* Recent work heading description */}
                    <div>
                        <div className='text-left py-3 text-black'>
                            <h2 className='text-2xl md:text-4xl'>Recent Work</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='text-gray-500'>A glimpse into content delivered for clients.</p>
                            <Link to={'/portfolio'}
                            className='whitespace-nowrap flex items-center gap-2 text-terracotta-dark transition duration-700 ease-in-out hover:underline animate-pulse'>
                                View all Projects<ArrowBigRight className=''/>
                            </Link>
                        </div>
                    </div>

                    {/* Project container */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-10'>
                        <RecentWorkProjectCard
                        image='https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
                        title={'Saas Content Strategy'}
                        year={'2026'}
                        description={'Case Study'}
                        tools={['Chatgpt', 'NotePad', 'Notion']}
                        link={'https://GoSomewhere'}/>

                        <RecentWorkProjectCard
                        image='https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
                        title={'Saas Content Strategy'}
                        year={'2026'}
                        description={'Case Study'}
                        tools={['Chatgpt', 'NotePad', 'Notion']}
                        link={'https://GoSomewhere'}/>
                    </div>

                </div>
            </section>
            {/*  */}

            {/* Why Partners Choose Me */}
            <div className='bg-cream-dark w-full px-6 py-10 '>
                <div className='max-w-3xl mx-auto'>
                    <div className='text-center py-10'>
                        <h2 className='text-2xl md:text-4xl text-black'>Why Partners Choose Me</h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Depth Over Surface '}
                        description={"I don't recycle obvious information. Whether it's a 4,000-word travel guide or a 1,000-word niche article, every piece is built on real research that gives readers something worth reading."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Adaptable Across Niches '}
                        description={"I've written across enough industries and formats that I can orient quickly to a new subject area, match the tone a client needs, and produce content that feels credible and specific regardless of the topic."}/>
                     
                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'SEO Built In'}
                        description={'Keyword placement, header structure, and formatting for readability are part of how I write.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Reliable and Self-Managed '}
                        description={'I manage feedback cycles, incorporate revisions, and deliver on time.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Feedback-Responsive'}
                        description={'I take client notes seriously and turn around revisions without friction. The goal is always a final product the client is genuinely happy with, not just something that technically meets the brief.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Consistent Quality Across Formats'}
                        description={'From long-form destination guides to short-form news articles to conversion copy for tour listings, the standard stays the same regardless of the format or the word count.'}/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ContentWriter;