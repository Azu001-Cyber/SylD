interface CTAButtonProps {
    label: string;
    href: string;
}

const CTAButton = ({ label, href }: CTAButtonProps) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-terracotta-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:shadow-lg"
    >
        {label}
    </a>
);

export default CTAButton;
