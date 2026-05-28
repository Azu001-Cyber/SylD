// import React from "react";

type Props = {
    image?: string;
    title: string;
    year: string;
    description: string;
    tools?: string[];
    link?: string;
};


const RecentWorkProjectCard  = ({
    image, 
    title, 
    year, 
    description, 
    tools, 
    link
}: Props) =>{
    return (
        <div className="mx-auto text-start border">
            <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                {<img src={image} alt={title} />}
                <div className="absolute inset-0 bg-brown opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h3  className="text-xl font-semibold text-brown text-start">
                            {title}
                        </h3>
                    </div>
                    <div>
                        <h4  className='font-mono font-black text-nowrap'>{year}</h4>
                    </div>
                </div>

                <p className="text-brown-light mb-4 leading-relaxed font-medium">{description}</p>
                
                <div className='mb-5'>
                    <p className="px-3 py-1 text-brown text-xs font-medium text-nowrap rounded-full">{tools}</p>
                </div>
                <div>
                    <a href={link} className="border border-slate-300 rounded-2xl p-3 my-5 font-semibold
                     hover:bg-terracotta hover:text-white bg-cream 
                     opacity-2 transition-color duration-500 ease-in-out">Live Demo</a>
                </div>
            </div>
        </div>
    )

}

export default RecentWorkProjectCard;