import ConsultationDetails from "./ConsultationDetails";
import IllustrationPanel from "./ConsultationImage";


const BookConsultation = () => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-card shadow-[0_4px_24px_-4px_hsl(var(--foreground)/0.08),0_12px_48px_-12px_hsl(var(--foreground)/0.12)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_32px_-4px_hsl(var(--foreground)/0.12),0_16px_64px_-16px_hsl(var(--foreground)/0.16)] rounded-lg">
                <ConsultationDetails />
                <IllustrationPanel />
        </div>
    );
};

export default BookConsultation;