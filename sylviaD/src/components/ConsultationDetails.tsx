import { useEffect, useState } from "react";
// import MetaInfo from "./ConsultationMetaInfo";
import CTAButton from "./ConsultationButton";

const rotatingTexts = [
    "AI Content Editing",
    "Content Writing",
    "Data Entry",
    "HR/Admin Assistance",
    "Blog & Content Management ",
    "Customer Service Support",
    ];

    const ConsultationDetails = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center gap-6 p-8 md:p-10 bg-slate-100">
        <h1 className="md:text-5xl text-3xl font-bold tracking-tight text-black font-mono">
            Book a Meeting
            <br />
            And Get a Consultation on
            <span className="ml-1 md:ml-0 text-terracotta-light transition-all duration-500 inline-block min-w-[200px] font-sans">
            {rotatingTexts[index]}
            </span>
        </h1>

        <p className="text-gray-500 leading-relaxed [text-wrap:balance]">
            Get expert guidance on your project, product, or technical challenges.
            Book a one-on-one consultation session to discuss solutions and next steps.
        </p>

        {/* <MetaInfo duration="30 min session" price="$50" /> */}

        <div className="">
            <CTAButton
            
            label="Book Consultation →"
            href="https://calendly.com/example/consultation"
            />
        </div>
        </div>
    );
};

export default ConsultationDetails;