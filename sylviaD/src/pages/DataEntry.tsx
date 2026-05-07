
// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';
import RecentWorkProjectCard from '../components/RecentWork';

import { MousePointer, CheckCircleIcon, ArrowBigRight } from 'lucide-react';
import {Calendar, BrainCircuit,  UserCog, Headphones, Feather} from 'lucide-react';
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
    // {
    //     id: 'data_entry',
    //     title: 'Data Entry',
    //     icon: <BarChart3 className="w-8 h-8" />,
    //     color: 'sage'
    // },
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

const  DataEntry = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-20 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1>
                    <p className='text-black font-bold text-5xl mb-3 font-serif'>Data Entry</p>
                    <p className='text-gray-500'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus exercitationem aperiam deserunt, minus nisi debitis quos! Ullam atque omnis ad perferendis, ab dolores vel consequatur, at, odio ducimus eveniet libero!
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
                        title={'Data Entry and Record Management'}
                        description={"Creating, updating, and maintaining large volumes of structured records relating to healthcare professionals and healthcare organizations within a cloud-based system, ensuring accuracy, consistency, and data quality are upheld across every record processed."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Data Verification and Research'}
                        description={"Conducting extensive manual research to verify key data fields against official websites, verified online directories, and authoritative professional and organizational listings, and performing phone-based verification when online sources are insufficient or inconclusive."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Record Prioritization and Quality Control'}
                        description={"Reviewing pre-filtered sets of records, manually selecting individual entries for verification, identifying which data fields require updating or confirmation, and distinguishing between critical data points and lower-priority information in accordance with project guidelines."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'New Data Identification and Documentation'}
                        description={"Identifying new or missing data during the research process, documenting newly discovered sources and directories in shared spreadsheets, and logging information for further verification and potential record creation prior to system entry."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'High-Volume Processing '}
                        description={"Processing in excess of 100 records per day while maintaining accuracy and full adherence to established standard operating procedures, sustaining consistent output across extended periods without compromising data quality."}
                        />
                        <WhatIDoCard
                        icon={<MousePointer className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Compliance and Scope Management '}
                        description={"Ensuring all work is performed within defined project scope and compliance requirements, appropriately flagging or excluding records that fall outside coverage guidelines, and maintaining clear accountability throughout the process."}
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
                    title={'Assignment Review'}
                    description={"Receiving pre-filtered work assignments determined by internal systems based on criteria such as location or record type, reviewing the scope of records allocated, and identifying the priority order for verification based on project guidelines before commencing work."}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Record Selection and Assessment'}
                    description={"Manually selecting individual records from the assigned set and conducting an initial assessment of each entry to determine which data fields require verification, updating, or confirmation, and which are lower priority based on established criteria."}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Research and Verification '}
                    description={"Cross-referencing key data fields against official websites, verified online directories, and authoritative professional or organizational listings. Where online sources are insufficient or inconclusive, conducting direct phone-based verification with the relevant healthcare professional or organization to confirm accurate details"}
                    />
                    <MyProcess
                    label={'4'}
                    title={'Record Update and Entry '}
                    description={"Updating or creating records within the system based on verified information, ensuring all entries are accurate, consistently formatted, and compliant with the applicable data quality standards and SOPs before finalizing."}
                    />
                    <MyProcess
                    label={'5'}
                    title={'New Source Documentation '}
                    description={"Flagging and documenting any new directories or data sources identified during the research process in shared spreadsheets, logging the information with appropriate status markers for further verification and potential record creation"}
                    />
                    <MyProcess 
                    label={'6'}
                    title={'Progress Tracking and Reporting'}
                    description={"Maintaining clear and up-to-date status markers across all assigned records in Google Sheets, reflecting whether each item is not started, in progress, or completed, and participating in regular team meetings and weekly reviews to track progress, align on targets, and contribute to process improvement discussions."}
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
                        title={'Accuracy at Volume '}
                        description={"Processing in excess of 100 records per day without allowing output targets to compromise data quality requires both discipline and a systematic approach. Every record is verified thoroughly regardless of volume, and accuracy is treated as non-negotiable rather than aspirational."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Research-Driven Verification '}
                        description={"Data verification is conducted through multiple layers of research before a record is considered confirmed. Official sources, verified directories, and direct phone contact are all employed where necessary to ensure the information entered into the system is reliable and authoritative."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Methodical and Consistent '}
                        description={"Working within defined SOPs and project scope requirements demands consistency across every record, every day. The same standard of care applied to the first record is applied to the hundredth, and compliance requirements are observed without exception."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Proactive Data Identification'}
                        description={"Verification work is not treated as a closed process. When new sources or missing data are identified during research, they are documented and submitted for review rather than disregarded, contributing to the ongoing improvement and completeness of the database."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Accountable and Transparent '}
                        description={"Progress is tracked clearly and consistently, with accurate status markers maintained throughout the assignment. Stakeholders have full visibility of where work stands at any given time without needing to follow up for updates."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Collaborative and Process-Oriented'}
                        description={"Regular participation in team meetings and weekly reviews is approached as an opportunity to align on targets, flag any process issues, and contribute constructively to improvements that benefit overall team performance."}/>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default DataEntry;