


export default function WhyChooseMeCard({icon, title, description}){
    return (
        <div>
            <div className="flex gap-3">
                <div className="flex">
                    {icon && <div className="">{icon}</div>}
                </div>

                <div>
                    <h4 className=" font-semibold text-black font-mono">{title}</h4>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    );
};