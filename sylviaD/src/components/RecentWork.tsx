import React from "react";

type RecentWorkProjectCardProps = {
    image?: React.ReactNode;
    title: string;
    year: string;
    description: string;
    tools?: string;
    link?: string;
};


const RecentWorkProjectCard  = ({
    image, 
    title, 
    year, 
    description, 
    tools, 
    link
}: RecentWorkProjectCardProps) =>{
    return (
        <div className="mx-auto">
            {image && <div>{image}</div>}
            <div className="flex">
                <h3>{title}</h3>
                <h4>{year}</h4>
            </div>

            <div>
                <p>{description}</p>
            </div>

            <div>
                <p>{tools}</p>
                <p>{link}</p>
            </div>
        </div>
    )

}

export default RecentWorkProjectCard;