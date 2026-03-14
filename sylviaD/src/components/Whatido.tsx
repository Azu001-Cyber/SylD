

const WhatIDoCard = ({icon, title, description}) => {
    return (
        <div className="bg-white shadow-sm px-6 py-8 rounded-2xl border-2 border-terracotta-light border-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            {icon && <div className=" bg-terracotta-verylight  rounded-lg flex justify-center items-center me-auto w-10 h-10">{icon}</div>}
            <h4 className="text-2xl font-bold mb-2">{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default WhatIDoCard;