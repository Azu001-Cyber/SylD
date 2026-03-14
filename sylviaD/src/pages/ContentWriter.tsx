
// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';

import { MousePointer, CheckCircleIcon } from 'lucide-react';
import {BarChart3, Calendar, BrainCircuit,  UserCog, Headphones} from 'lucide-react';
import {Link} from "react-router-dom"


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
        id: 'editing',
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

const ContentWriter = () => {
    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-6 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1>
                    <p className='text-black font-bold text-5xl mb-3 font-serif'>Content Writing</p>
                    <p className='text-gray-500'>Elevating your brand's digital presence through strategic, high-quality
                        content that resonates with your audience and drive organic growth.
                    </p>
                </HeroExperiance>
            </div>

            {/* What i do */}
            <div className='mx-auto px-6 py-10 w-full'>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center py-10 text-black">
                        <h2 className='text-2xl md:text-4xl'>
                        What I Do
                        </h2>
                    </div> 
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 text-start'>
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Narrative Storytelling'}
                        description={'Engaging readers with compelling brand stories and clear messaging'}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'SEO Strategy'}
                        description={'Engaging readers with compelling brand stories and clear messaging'}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Website Copywriting'}
                        description={'Engaging readers with compelling brand stories and clear messaging'}
                        />
                    </div>

                </div>
            </div>

            {/* My Process */}
            <div className=' container max-w-5xl mx-auto px-6 py-10'>
                <div className='text-center py-10 text-black'>
                    <h2 className='text-2xl md:text-4xl'>My Process</h2>
                </div>
                <div className='grid gird-cols-1 md:grid-cols-3 gap-10 text-center'>
                    <MyProcess
                    label={'1'}
                    title={'Discovery'}
                    description={'Deep dive into goals, audience, and brand voice requirements'}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Discovery'}
                    description={'Deep dive into goals, audience, and brand voice requirements'}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Discovery'}
                    description={'Deep dive into goals, audience, and brand voice requirements'}
                    />
                </div>

            </div>
            {/* Other Services */}
            <div className="container mx-auto py-10 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center py-10 text-black">
                        <h2 className="text-2xl md:text-4xl">
                        Other Services I Offer
                        </h2>
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

            {/* Project / Recent Work */}
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
                        title={'Strong Communication'}
                        description={'Responsive to feedback, communicate, and collaborate seamlessly'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Expectise & Experience'}
                        description={'Understanding industry trends to deliver solutions that are effective, professional, and results-driven.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Innovative Solutions'}
                        description={'Creating approach that combines creativity, strategy, and technology to offer unique solutions.'}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Reliable Deadlines'}
                        description={'Ensuring all content projects are delivered promptly and reliably'}/>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default ContentWriter;