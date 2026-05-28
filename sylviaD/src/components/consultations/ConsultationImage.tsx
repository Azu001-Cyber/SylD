import illustration from "../../assets/consultation-illustration.jpg";
// import avatar from "../assets/avatar.jpg"

const IllustrationPanel = () => (
    <div className="relative overflow-hidden h-64 md:h-full">
        <img
        src={illustration}
        alt="Consultation meeting illustration"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/5" />
    </div>
);

export default IllustrationPanel;
