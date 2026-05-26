
// Importing Reusable components
import HeroExperiance from '../components/HeroExperiance'
import WhatIDoCard from '../components/Whatido';
import MyProcess from "../components/MyProcessExperiance"
import WhyChooseMeCard from '../components/WhyChooseMe';
import RecentWorkProjectCard from '../components/RecentWork';

import { Headphones, CheckCircleIcon, ArrowBigRight } from 'lucide-react';
import {Calendar, BarChart3, BrainCircuit, UserCog, Feather} from 'lucide-react';
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
    // {
    //     id: 'customer-support',
    //     title: 'Customer Service Support',
    //     icon: <Headphones className="w-8 h-8" />,
    //     color: 'sage'
    // },
    {
        id: 'hr_staffing',
        title: 'HR & Staffing',
        icon: <UserCog className="w-8 h-8" />,
        color: 'sage'
    }
];

const CustomerService = () => {
    useEffect(() =>{
            window.scrollTo(0,0)
        }, [])
    return(
        <section className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-light via-cream to-cream-dark relative'>
            {/* Hero Section */}
            <div className='container px-6 py-20 max-w-3xl md:max-w-xl'>
                <HeroExperiance>
                    {/* <h1 className='text-terracotta-light font-mono font-medium mb-3'>MY SPECIALIZATION</h1> */}
                    <h1 className='text-black font-bold text-5xl mb-3 font-serif'>Customer Support</h1>
                    <p className='text-gray-500'> Customer-facing experience across DTC e-commerce and subscription app support, handling inquiries, resolving issues, managing billing, and maintaining customer satisfaction across high-volume, SLA-driven environments. Process-oriented, investigative by default, and committed to resolution quality at every touchpoint.</p>
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
                        icon={<Headphones className='w-5 h-5 text-terracotta-dark'/>}
                        title={'E-Commerce Customer Support'}
                        description={'Managing pre-sale and post-sale inquiries for Shopify-based e-commerce brands across multiple industries, including food, supplements, fashion, hardware, automotive, jewelry, and pet products. Pre-sale responsibilities included responding to questions about product usage, ingredients and materials, sizing, compatibility, expected outcomes, and product comparisons, drawing on product documentation, brand pages, and independent research to provide accurate, brand-aligned responses. Post-sale responsibilities included tracking orders, investigating missing or delayed shipments, and handling returns and exchanges through Shopify.'}
                        />

                        <WhatIDoCard
                        icon={<Headphones className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Learner Support and App Guidance'}
                        description={'Supporting learners on a subscription-based creative learning platform, working specifically within the piano support team. Responsibilities covered assisting learners with lesson progression, explaining app features and functionality, and diagnosing technical issues, including note recognition errors, MIDI cable connectivity and configuration, and app freezing or crashing. Account-related issues such as incorrect logins, loss of progress, and progress transfers between accounts were also handled.'}
                        />

                        <WhatIDoCard
                        icon={<Headphones className='w-5 h-5 text-terracotta-dark'/>}
                        title={'Customer Retention and Revenue Recovery '}
                        description={"Re-engaging customers who did not complete a purchase and facilitating conversion through strategic, transparent communication. This included offering promotions such as BOGO deals and bundle options, making cross-sell and upsell recommendations where they offered genuine value, and communicating all eligibility conditions clearly before the customer committed."}
                        />

                        <WhatIDoCard 
                        icon={<Headphones className='w-5 h-5 text-terracotta-dark'/>}
                        title={"Billing and Refund Management"}
                        description={"Processing refunds, cancellations, and subscription adjustments through Stripe, PayPal, and Shopify, depending on the customer's platform and payment method. Responsibilities included assessing whether a customer qualified for a full or partial refund based on applicable policy, explaining subscription plan options and their respective benefits and limitations, and ensuring customers were fully informed before any action was taken."}/>

                        <WhatIDoCard 
                        icon={<Headphones className='w-5 h-5 text-terracotta-dark'/>}
                        title={"Knowledge Base and Macro Development"}
                        description={"Identifying gaps in existing macros, templates, and standard operating procedures during the course of ticket investigation, drafting solutions and recommendations based on findings, and submitting them to team leads for review and incorporation into the broader knowledge base. Text expanders and macros were created and used strategically across Ticketing tools to maintain speed and consistency at volume, particularly during peak periods and holiday seasons, without compromising the quality or personalization of individual responses."}/>
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
                    title={'Ticket Assessment '}
                    description={"Each incoming ticket is read thoroughly to understand the nature of the inquiry, the customer's situation, and the appropriate course of action before responding. Where a ticket involves a brand-specific policy, SOP, or subscription plan, the relevant documentation is reviewed prior to drafting a response."}
                    />
                    <MyProcess
                    label={'2'}
                    title={'Investigation and Replication '}
                    description={"Where an issue requires deeper investigation, the customer's experience is replicated directly. This includes navigating brand websites, creating mock carts, testing discount codes, verifying delivery availability, and reviewing account details, plan types, and payment methods to identify precisely where a problem occurred before responding."}
                    />
                    <MyProcess 
                    label={'3'}
                    title={'Research and Verification '}
                    description={"Product documentation, brand pages, account histories, and internal resources are cross-referenced to ensure every response is accurate and grounded in verified information. For billing and subscription queries, the customer's plan, payment history, and refund eligibility are verified before any adjustments are processed."}
                    />
                    <MyProcess 
                    label={'4'}
                    title={'Response and Resolution'}
                    description={"A clear, empathetic, and solution-oriented response is drafted that acknowledges the customer's concern, addresses their specific issue, and provides actionable next steps. Each response is personalized with the customer's name, relevant order or account details, and direct references to the issue at hand, and reviewed for grammatical accuracy using Grammarly before sending. DeepL is used where needed to support international customers whose first language is not English."}
                    />
                    <MyProcess 
                    label={'5'}
                    title={'Billing and Account Actions '}
                    description={"Where the resolution requires a transactional action, refunds, cancellations, subscription adjustments, account transfers, or progress recovery are processed through the appropriate platform, the action is confirmed as completed, and the outcome is communicated clearly to the customer."}
                    />
                    <MyProcess 
                    label={'6'}
                    title={'Escalation '}
                    description={'Where a ticket falls outside the scope of first-line support, all relevant information is documented internally, the ticket is tagged appropriately, and the case is escalated to the designated team or engineer. The customer is kept informed throughout the process and followed up with once the issue has been resolved.'}
                    />
                    <MyProcess 
                    label={'7'}
                    title={'Documentation and Flagging '}
                    description={'Where a ticket surfaces a scenario not covered by existing macros or SOPs, the solution identified through investigation is noted, a recommendation is drafted for team lead review, and the findings are contributed to the broader knowledge base and macro set.'}
                    />
                    <MyProcess 
                    label={'8'}
                    title={'QA and Performance Review '}
                    description={'Key performance metrics, including average response time, first response time, resolution effectiveness, CSAT, and cart recovery output, are monitored consistently, with a focus on meeting or exceeding the standards set by each client or platform.'}
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
                        title={'Accurate and Brand-Aligned Responses '}
                        description={"Every response is grounded in thorough research and a clear understanding of each brand's products, policies, and guidelines. Customers receive accurate, brand-specific information rather than generalized answers, regardless of the industry or platform."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Empathetic and Human-Centered Communication'}
                        description={"Customer support is fundamentally human-centered work. Responses are written with genuine acknowledgment of the customer's concern, clear and accessible language, and a tone calibrated to the nature of the interaction, whether that requires patience, technical clarity, or reassurance."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Investigative by Default'}
                        description={"When an issue is not immediately clear, I replicate the customer's experience rather than making assumptions. That approach consistently produces more accurate resolutions and reduces the back and forth that delays outcomes for the customer."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Technically Capable'}
                        description={"From diagnosing note recognition errors and MIDI connectivity issues on a creative learning platform to identifying checkout friction and promotion failures across e-commerce brands, I am comfortable working through technical problems methodically and escalating with full context when the issue exceeds first-line scope."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Efficient Under Pressure '}
                        description={"Having operated under a 5- 10-minute service level agreement during peak periods and holiday seasons, I am practiced in maintaining speed and accuracy simultaneously. Macros, templates, and text expanders are used strategically to sustain consistency at volume without compromising the quality of individual responses."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Process Improvement Mindset '}
                        description={"When investigative work uncovers a gap in existing documentation, I draft a recommendation and submit it for review rather than simply resolving the ticket and moving on, contributing to a knowledge base that benefits the entire support team over time."}/>

                        <WhyChooseMeCard
                        icon={<CheckCircleIcon className='text-terracotta'/>}
                        title={'Adaptable Across Platforms and Industries '}
                        description={"Having worked across Front, Zendesk, Intercom, and Shopify, across two distinct support environments, I bring platform fluency and cross-industry adaptability that reduces onboarding time and allows for faster delivery of results in new support contexts."}/>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default CustomerService;