 

// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';
import RecentWorkProjectCard from '../components/RecentWork';

import { UserCog, CheckCircleIcon, ArrowBigRight } from 'lucide-react';
import {Calendar,BarChart3, BrainCircuit, Headphones, Feather} from 'lucide-react';
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
    // {
    //     id: 'hr-admin_assistant',
    //     title: 'HR / Admin Assistant',
    //     icon: <UserCog className="w-8 h-8" />,
    //     color: 'sage'
    // }
];

const HRAdminAssistant = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-20 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    {/* <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1> */}
                    <h1 className='text-black font-bold text-5xl mb-3 font-serif'>HR & Staffing</h1>
                    <p className='text-gray-500'> 
                        End-to-end recruitment and HR administration experience spanning both independent contractor placement for small businesses and sourcing support within a medical staffing company. Responsibilities covered the full hiring lifecycle from candidate sourcing and pipeline management through to onboarding, contract administration, compliance verification, 
                        payroll coordination, and offboarding, across remote and healthcare staffing environments.
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
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Medical and Clinical Staffing Support '}
                        description={"Supporting the recruitment operations of a medical staffing company responsible for placing clinicians across long-term care facilities, assisted living facilities, and home health settings, managing candidate pipelines, outreach, compliance, and credentialing as part of an internal staffing team."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Independent Contractor Placement'}
                        description={"Managing end-to-end hiring processes on behalf of individual clients and small businesses, identifying and placing suitable candidates for roles across customer support, data entry, content writing, and content editing, and coordinating the full pipeline from sourcing through to placement."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Candidate Pipeline Management'}
                        description={"Reviewing and sorting incoming candidate responses, assessing eligibility against role and facility requirements, and progressing candidates through defined pipeline stages from initial contact through to interviewing, onboarding, or prospecting status."}
                        />
                      
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Onboarding Coordination '}
                        description={"Managing onboarding workflows for remote contractors and healthcare clinicians, including document collection, credential verification, compliance checks, drug screening coordination, and ensuring all requirements are met prior to commencement."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Contract Drafting and Management '}
                        description={"Drafting, reviewing, and managing contractor agreements and offer letters for independently placed contractors, tracking renewal dates, amendments, and expiry timelines, and ensuring all documentation is accurate, complete, and appropriately stored."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Offboarding and Termination Administration'}
                        description={"Managing offboarding processes for departing contractors, including the preparation of termination documentation and maintaining accurate records throughout the process."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Contractor Records and Directory Management'}
                        description={"Building and maintaining centralized contractor directories, capturing contact details, time zones, contract types, pay rates, compliance status, and key renewal milestones as a single source of truth for the operation."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Payroll Coordination and Hours Tracking '}
                        description={"Coordinating contractor payment runs by cross-referencing submitted timesheets or shift schedules against agreed rates, verifying hours worked prior to payment, and ensuring accurate and timely disbursement in alignment with individual contract terms."}
                        />
                        <WhatIDoCard
                        icon={<UserCog className='w-5 h-5 text-terracotta-dark'/>}
                        title={"SOP and Template Development"}
                        description={"Developing standardized templates and documented procedures for recurring HR and staffing processes, including onboarding, offboarding, outreach, and contract renewals, ensuring consistency across every hire regardless of role or setting."}
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
                    title={'Brief and Role Definition'}
                    description={"For independent placements, consulting with the client to understand the role requirements, the profile of the candidate being sought, the terms of engagement, and any specific criteria before recruitment commences. For the medical staffing role, the receiving facility briefs and open role requirements from the internal team before initiating sourcing and outreach."}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Sourcing and Outreach '}
                    description={"Identifying and approaching suitable candidates through relevant channels. Within the medical staffing environment, this included conducting targeted broadcast messaging to fill open clinical roles and managing inbound responses from job postings. All outreach and candidate activity is tracked and maintained in the appropriate system throughout."}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Pipeline Management and Screening '}
                    description={"Reviewing incoming candidate responses, assessing basic eligibility, conducting initial screening to evaluate suitability, and progressing candidates through the appropriate pipeline stages based on role requirements, facility needs, and availability"}
                    />
                    <MyProcess 
                    label={'4'}
                    title={'Compliance and Credentialing '}
                    description={"Reviewing submitted documentation, coordinating credential verification, scheduling drug screenings, and confirming that all compliance requirements specific to the role or facility have been satisfied before advancing a candidate to placement."}
                    />
                    <MyProcess 
                    label={'5'}
                    title={'Documentation and Contract Preparation'}
                    description={"For independently placed contractors, drafting agreements and offer letters in accordance with agreed terms, ensuring all relevant details, including pay rate, scope of work, start date, and conditions of engagement, are accurately reflected before distribution."}
                    />
                    <MyProcess 
                    label={'6'}
                    title={'Onboarding Coordination'}
                    description={"Initiating the onboarding workflow upon candidate confirmation, collecting all required documentation, orienting contractors or clinicians to the relevant tools and communication channels, and confirming all setup is complete before the engagement begins."}
                    />
                    <MyProcess 
                    label={'7'}
                    title={'Records and Ongoing Administration'}
                    description={"Updating directories, spreadsheets, and talent management systems to reflect current engagement status, logging all key dates and contractual details, tracking renewal timelines, coordinating payment runs for independently placed contractors, and managing offboarding processes when an engagement concludes."}
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
                        tools={['Chatgpt', 'NotePad',' Notion']}
                        link={'https://GoSomewhere'}/>

                        <RecentWorkProjectCard
                        image={'/'}
                        title={'Saas Content Strategy'}
                        year={'2026'}
                        description={'Case Study'}
                        tools={['Chatgpt', 'NotePad',' Notion']}
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
                        title={'Structured and Systematic '}
                        description={"HR and staffing administration functions reliably when it is built on clear systems and consistent processes. Every engagement is managed through structured workflows, centralized documentation, and maintained records that ensure nothing is missed and nothing has to be reconstructed from memory."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'End-to-End Ownership'}
                        description={"Whether operating independently on behalf of a client or as part of an internal staffing team, the recruitment and administration process is managed thoroughly from the initial brief through to placement, onboarding, and ongoing records management."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Compliance-Conscious '}
                        description={"In both healthcare staffing and contractor management, accuracy in credentialing, documentation, and compliance tracking is non-negotiable. Requirements are verified thoroughly, discrepancies are identified early, and nothing proceeds to placement without all necessary conditions being met."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Detail-Oriented Documentation'}
                        description={"Contracts, candidate profiles, compliance records, and operational documentation are handled with a high degree of accuracy. Pay rates, renewal dates, credentialing requirements, and contractual terms are tracked and maintained so that issues are identified and resolved before they become problems."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Remote-First Operations '}
                        description={"All recruitment and HR administration has been conducted in a fully remote environment, working across different time zones and managing contractors, clinicians, and clients through digital tools and asynchronous communication. The systems and processes in place are designed specifically for distributed teams."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Clear and Professional Communication'}
                        description={"Whether communicating with candidates, clinicians, contractors, or clients, all correspondence is handled with clarity, professionalism, and appropriate confidentiality. All parties are kept informed at every stage of the process without unnecessary back and forth"}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Cross-Sector Adaptability'}
                        description={'Having operated independently, placing contractors across general remote roles and as part of an internal team recruiting specialized clinical healthcare professionals, I bring an adaptability that allows me to function effectively across very different hiring environments and compliance landscapes.'}/>

                    </div>

                </div>
            </div>
        </section>
    )

}

export default HRAdminAssistant;