import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import { HiCursorClick } from 'react-icons/hi';
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
            <div className='container px-6 py-6 max-w-3xl'>
                <HeroExperiance>
                    <h1 className='text-terracotta-light'>MY SPECIALIZATION</h1>
                    <p className='text-black font-bold'>Content Writing</p>
                    <p>Elevating your brand's digital presence through strategic, high-quality
                        content that resonates with your audience and drive organic growth.
                    </p>
                </HeroExperiance>
            </div>

            <div className='container mx-auto px-6 py-6'>
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className='text-xl md:text-2xl font-bold text-brown mb-4'>
                        What I Do
                        </h2>
                    </div> 
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 text-start '>
                        <WhatIDoCard
                        icon={<HiCursorClick/>}
                        title={'Narrative Storytelling'}
                        description={'Engaging readers with compelling brand stories and clear messaging'}
                        />
                        <WhatIDoCard
                        icon={<HiCursorClick/>}
                        title={'SEO Strategy'}
                        description={'Engaging readers with compelling brand stories and clear messaging'}
                        />
                        <WhatIDoCard
                        icon={<HiCursorClick/>}
                        title={'Website Copywriting'}
                        description={'Engaging readers with compelling brand stories and clear messaging'}
                        />
                    </div>

                </div>
            </div>

            <div className=' container max-w-5xl mx-auto px-6 py-6'>
                <div className='text-center py-10 text-black'>
                    <h2 className='text-2xl'>My Process</h2>
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

            <div className="container mx-auto py-6 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl font-bold text-brown mb-4">
                        Other Services I Offer
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
    )

}

export default ContentWriter;