
import CTAButton from "./ConsultationButton";


const ConsultationDetails = () => {
   

    return (
        <div className="flex flex-col justify-center gap-6 p-8 md:p-10 bg-slate-100">
        <h1 className="md:text-5xl text-3xl font-bold tracking-tight text-black font-mono">
            Book a Meeting
            <br />
            and get a Consultation
        </h1>

        <p className="text-gray-500 leading-relaxed [text-wrap:balance]">
            Get expert guidance on your project, career, or technical challenges.
            Book a one-on-one consultation session to discuss solutions and next steps.
        </p>

        <div className="">
            <CTAButton
            
            label="Book Consultation"
            href="https://selar.com/981d4199j9"
            />
        </div>
        </div>
    );
};

export default ConsultationDetails;