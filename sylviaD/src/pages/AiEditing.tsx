
// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';
import RecentWorkProjectCard from '../components/RecentWork';

import { CheckCircleIcon, ArrowBigRight, BrainCircuit } from 'lucide-react';
import {BarChart3, Calendar, Feather, UserCog, Headphones} from 'lucide-react';
import {Link} from "react-router-dom"
import { useEffect } from 'react';

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

const AiEditing = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-20 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    {/* <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1> */}
                    <h1 className='text-black font-bold text-5xl mb-3 font-serif'>AI Content Editing</h1>
                    <p className='text-gray-500'> Taking raw output from AI writing tools like ChatGPT, ClaudeAI,
                         and SurferSEO and editing it into something that reads like a human wrote it. 
                        That means restructuring, rewriting, tightening, and humanizing a draft.
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
                        icon={<BrainCircuit className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Editorial Editing '}
                        description={'Reviewing and refining written content for clarity, structure, tone, and flow. Identifying where arguments break down, where transitions are weak, and where the writing loses the reader, and then fixing it.'}
                        />
                        <WhatIDoCard
                        icon={<BrainCircuit className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Fact-Checking'}
                        description={'Cross-referencing claims, data, and information against credible sources to make sure nothing goes live that is outdated, inaccurate, or unsupported. Applied consistently across medical, tech, financial, and general content.'}
                        />
                        <WhatIDoCard
                        icon={<BrainCircuit className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Proofreading'}
                        description={'Catching grammar, punctuation, spelling, and consistency errors at the final stage before publication. '}
                        />
                        <WhatIDoCard
                        icon={<BrainCircuit className='w-5 h-5 text-terracotta-dark'/>}
                        title={'WordPress Formatting and Publishing '}
                        description={'Taking edited content into WordPress, applying proper header hierarchy, spacing, internal and external links, image alt text, and keyword density checks before scheduling or publishing. '}
                        />
                        <WhatIDoCard
                        icon={<BrainCircuit className='w-5 h-5 text-terracotta-dark'/>}
                        title={'SEO Optimization '}
                        description={'Ensuring every piece meets on-page SEO requirements, meta titles, descriptions, header tags, keyword placement, and internal linking, as part of the standard editing and publishing workflow. '}
                        />
                        <WhatIDoCard
                        icon={<BrainCircuit className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Content Tracking and Documentation '}
                        description={'Managing content pipelines through shared spreadsheets, logging article status, generation method, edit dates, and publication timelines to keep production on track and accountable.'}
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
                    title={'First Read'}
                    description={"Reading through the full piece before touching anything to assess the overall structure, identify where the content breaks down, and understand what needs the most work before diving into line-level edits"}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Structural Edit '}
                    description={'Reviewing the content hierarchy, the flow of ideas, and the transitions between sections. Reorganizing or rewriting where the structure is weak, cutting repetitive content, and making sure the piece progresses logically from start to finish.'}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Line Edit and Humanize'}
                    description={'Working through the content sentence by sentence to fix clarity issues, remove robotic or mechanical phrasing, smooth out awkward transitions, and make the writing feel natural and readable throughout.'}
                    />

                    <MyProcess 
                    label={'4'}
                    title={'Fact-Check'}
                    description={"Cross-referencing data, claims, and specific details against credible sources. Flagging or correcting anything that is outdated, unsupported, or inconsistent with the subject matter."}/>

                    <MyProcess 
                    label={"5"}
                    title={"SEO and Formatting "}
                    description={"Checking keyword placement and density, confirming header tags are applied correctly, adding internal and external links where appropriate, and writing alt text for images before moving into WordPress."}/>

                    <MyProcess 
                    label={"6"}
                    title={"WordPress Publishing "}
                    description={"Formatting the full piece inside WordPress, handling spacing, image placement, meta title, and description, and a final visual review to make sure everything looks clean on the front end before it goes live."}/>

                    <MyProcess 
                    label={"7"}
                    title={"Track and Document "}
                    description={"Logging the completed piece in the content tracker with the relevant details so the pipeline stays organized and nothing falls through the cracks."}/>
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
                                View All Projects<ArrowBigRight className=''/>
                            </Link>
                        </div>
                    </div>

                    {/* Project container */}
                    <div className='grid grid-cols-2 gap-10 py-10'>
                        <RecentWorkProjectCard
                        image='https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800'
                        title={'Saas Content Strategy'}
                        year={'2026'}
                        description={'Case Study'}
                        tools={'Chatgpt  NotePad Notion'}
                        link={'https://GoSomewhere'}/>

                        <RecentWorkProjectCard
                        image={'/'}
                        title={'Saas Content Strategy'}
                        year={'2026'}
                        description={'Case Study'}
                        tools={'Chatgpt NotePad Notion'}
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
                        title={'AI Output That Reads Human '}
                        description={"I know what machine-generated content looks and sounds like because I've edited thousands of words of it. I don't just run a surface pass. I go in at the structural and sentence level until the piece reads naturally and serves the reader."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Accuracy You Can Trust'}
                        description={"Fact-checking is non-negotiable for me across every type of content. Whether it's medical."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Editorial Judgment'}
                        description={"I can read a piece and immediately identify what's working and what isn't, whether that's a structural problem, a tone issue, a transition that doesn't land, or content that doesn't earn its word count. That judgment is consistent regardless of the niche or format"}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'End-to-End Ownership '}
                        description={"I don't just edit the copy and hand it back. I take the piece all the way through formatting, SEO, and publishing inside WordPress. Everything that goes live has been through a full process, not just a grammar check."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Organized and Trackable'}
                        description={"I keep content pipelines documented and up to date so nothing gets lost, deadlines don't sneak up, and whoever I'm working with always knows where things stand"}/>

                    </div>

                </div>
            </div>
        </section>
    )

}

export default AiEditing;