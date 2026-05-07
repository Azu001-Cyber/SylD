
// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';
import RecentWorkProjectCard from '../components/RecentWork';

import { MousePointer, CheckCircleIcon, ArrowBigRight } from 'lucide-react';
import {BarChart3, BrainCircuit,  UserCog, Headphones, Feather} from 'lucide-react';
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
    id: 'ai_editing',
    title: 'AI Content Editing',
    icon: <BrainCircuit className="w-8 h-8" />,
    color: 'brown'
    },
    // {
    //     id: 'blog-management',
    //     title: 'Blog & Content Management',
    //     icon: <Calendar className="w-8 h-8" />,
    //     color: 'terracotta'
    // },
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

const  BlogandContentManagement = () => {
    useEffect(() =>{
        window.scrollTo(0,0)
    }, [])
    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-20 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1>
                    <p className='text-black font-bold text-5xl mb-3 font-serif'>Blog & Content Management</p>
                    <p className='text-gray-500'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur minus pariatur sint aspernatur. Recusandae earum facere omnis aut voluptatum mollitia facilis, quibusdam debitis ipsa provident dignissimos amet! Minima, ex natus!
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
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Editorial Pipeline Management'}
                        description={"Overseeing the full content production cycle from story ideation and assignment through to final publication, ensuring each piece progresses through every stage on schedule and to the required standard without disruption to the broader pipeline."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Story Assignment and Commissioning'}
                        description={"Identifying topics of relevance, timeliness, and editorial fit, assigning them to writers accordingly, and evaluating pitches submitted by the team against publication scope and newsworthiness to determine what proceeds to production."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Draft Review and Structured Feedback'}
                        description={"Conducting thorough reviews of submitted drafts across accuracy, clarity, tone, structure, and overall quality, and delivering detailed, actionable feedback that provides writers with a clear and specific path to improvement prior to resubmission."}
                        />
                        <WhatIDoCard 
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={"SEO and Pre-Publication Optimization "}
                        description={"Managing the final editorial layer before publication, encompassing SEO optimization, internal and external linking, meta title and description writing, header tag review, image sourcing and alt text, and full WordPress formatting."}/>
                        
                        <WhatIDoCard 
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={"Content Scheduling and Calendar Management"}
                        description={"Coordinating publication timelines across multiple pieces simultaneously, scheduling content in alignment with the editorial calendar, and sustaining consistent output without disruption to the publication's cadence or standards."}/>

                        <WhatIDoCard 
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={"Team Coordination and Communication"}
                        description={"Maintaining clear and proactive communication with writers, editors, and publication owners throughout the pipeline, flagging potential delays or issues in advance, and ensuring all relevant parties remain informed of progress and any adjustments to timelines."}/>
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
                    title={'Planning and Assignment '}
                    description={"Reviewing the publication's editorial scope and existing coverage to identify gaps and opportunities, then assigning topics to writers based on relevance, newsworthiness, and individual capability. Writer-submitted pitches are evaluated against editorial standards and either approved or declined with appropriate justification before production commences."}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Draft Review'}
                    description={'Conducting a thorough assessment of each submitted draft across multiple dimensions: factual accuracy, structural integrity, tonal consistency, clarity of argument, and overall readability. Where deficiencies are identified, specific and structured feedback is provided rather than generalized observations.'}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Revision and Resubmission'}
                    description={'Returning feedback to the writer with clear direction, reviewing the revised draft upon resubmission, and confirming that all notes have been addressed to the required standard before the piece advances to the subsequent stage of the pipeline.'}
                    />
                    <MyProcess 
                    label={'4'}
                    title={"Final Optimization "}
                    description={"Taking each approved draft through the complete pre-publication process: SEO optimization, keyword and header tag review, internal and external link insertion, image sourcing and alt text application, meta title and description writing, and WordPress formatting and layout review."}/>
                    <MyProcess 
                    label={'5'}
                    title={"Publishing and Scheduling"}
                    description={"Scheduling or publishing each completed piece in accordance with the editorial calendar, conducting a final front-end review to confirm formatting integrity, and updating the content tracker to accurately reflect the piece's status within the pipeline."}/>
                    <MyProcess 
                    label={'6'}
                    title={"Pipeline Oversight"}
                    description={"Maintaining consistent visibility across all active pieces at every stage of production, identifying any items at risk of missing their deadline, and intervening proactively to sustain pipeline momentum without disruption to the broader publication schedule."}/>
               
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
                            <Link to={'portfolio'}
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
                        tools={['Chatgpt',  'NotePad', 'Notion']}
                        link={'https://GoSomewhere'}/>

                        <RecentWorkProjectCard
                        image={'/'}
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
                        title={'End-to-End Ownership'}
                        description={'The content pipeline is managed in its entirety, from the initial brief through to the final published piece. Nothing is handed off incomplete, and nothing proceeds to publication without passing through a rigorous final review. The process is owned comprehensively, not merely supervised.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Editorially Rigorous'}
                        description={'Feedback provided to writers is specific, structured, and directly actionable. Precise editorial direction produces more efficient revisions and measurably improves the quality of subsequent drafts, which benefits the pipeline as a whole.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'SEO Integrated Throughout '}
                        description={'On-page SEO is not approached as a supplementary task appended at the end of the process. It is embedded within the editorial and publishing workflow so that every piece published is optimized across structure, body content, and metadata from the outset.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Proactive Communication'}
                        description={"In a remote editorial environment, the quality of communication directly determines whether a pipeline operates smoothly or stalls. Issues are flagged before they escalate, stakeholders are kept informed throughout production, and expectations are managed with clarity and consistency."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Consistent Output at Scale'}
                        description={'Editorial pipelines covering a broad range of topics across multiple publications have been managed simultaneously, sustaining consistent quality and publication cadence without any compromise to output standards at volume.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Reliable Without Supervision '}
                        description={'Deadlines are met, quality is maintained, and work that has been delegated does not require follow-up. That degree of reliability is foundational to a content operation that functions sustainably and at a consistently high standard.'}/>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default BlogandContentManagement;