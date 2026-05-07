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
            <div>
              {<img src={image} alt="" />}
            </div>
            
            <div className="flex justify-between">
                <h3>{title}</h3>
                <h4>{year}</h4>
            </div>

            <div>
                <p>{description}</p>
            </div>

            <div>
                <p>{tools}</p>
            </div>
            <div>
                <p>
                    <a href={link}>Live Demo</a>
                </p>
            </div>
        </div>
    )

}

export default RecentWorkProjectCard;