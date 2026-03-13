

const WhatIDoCard = ({icon, title, description}) => {
    return (
        <div className="bg-white shadow-sm p-6 rounded-2xl border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {icon && <img src={icon} alt={title} className="mb-4 rounded" />}
            <h4 className="text-2xl font-bold mb-2">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default WhatIDoCard;