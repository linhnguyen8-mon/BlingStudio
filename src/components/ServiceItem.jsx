import React from "react";
import { Link } from "react-router-dom";
import arrowSrc from '../assets/arrow-narrow-up-right.svg';

const ServiceItem = ({ heading, label, href, imageSrc }) => {
    return (
        <Link
            to={href}
            className="relative group p-2 bg-white bg-opacity-0 
            hover:bg-[#fff] hover:bg-opacity-100 rounded-2xl flex flex-col gap-4 hover:shadow-[rgba(7,_65,_210,_0.02)_0px_9px_20px] 
            border border-blue-100 border-opacity-0 
            hover:ring-offset-2 hover:ring-2 ring-blue-100	
            transition duration-base ease-out-soft"
        >
            <img
                src={imageSrc}
                alt={heading} // Use a descriptive alt text
                className="object-cover h-full rounded-xl"
                loading="lazy"
            />
            <div className="flex justify-between text-primary mb-2 gap-2">
                <p className="text-lg md:text-xl font-semibold">{heading}</p>
                {label && (
                    <p className="hidden xl:block text-sm p-1 px-3 rounded-xl opacity-0 bg-[#fff] group-hover:bg-[#DDF1FC] group-hover:opacity-100 shrink-0 transition duration-base ease-out-soft">
                        {label}
                    </p>
                )}
            </div>
            <div className="absolute bg-black bg-opacity-20 md:bg-opacity-0 md:group-hover:bg-opacity-20 backdrop-blur-lg top-4 right-4 flex gap-2 items-center z-50 p-1 pl-3  
           ring-2 ring-white ring-opacity-20 md:ring-opacity-0 md:group-hover:ring-opacity-20
            rounded-full overflow-hidden transition-all duration-base ease-out-soft w-auto md:group-hover:w-auto md:w-8">
                <span className="text-sm text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:font-medium
                transition-all duration-base ease-out-soft transform translate-x-0 md:-translate-x-full md:group-hover:translate-x-0 whitespace-nowrap">
                    View project
                </span>
                <img src={arrowSrc} alt="Arrow" className="h-4" />
            </div>
        </Link>
    );
};

export default ServiceItem;
