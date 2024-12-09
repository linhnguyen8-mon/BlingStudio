import React from "react";

const BaseButton = ({ children, className, onClick, href }) => {
    const Component = href ? "a" : "button";
    const props = href ? { href } : { onClick };
    return (
        <div className="p-[8px] bg-background bg-opacity-20 hover:bg-opacity-50 rounded-full border border-blue-100 border-opacity-20 transition duration-300 ease-in-out ">
            <Component
                className={`inline-flex items-center justify-center h-14 px-6 rounded-full font-main font-semibold  bg-backgroundCardHover ${className}
            hover:shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] 
            `}
                target="_blank"
                {...props}
            >
                {children}
            </Component>
        </div>
    );
};

export const IconButton = ({ svg, name, onClick }) => {
    return (
        <div className="group">
            <BaseButton
                className={` border-primary border-2  `}
                onClick={onClick}
            >
                <span className="text-primary text-base font-bold group-hover:text-brand whitespace-nowrap">
                    {name}
                </span>
                <img src={svg} alt="Icon" className="w-4 h-4 icon " />
            </BaseButton>
        </div>
    );
};

export const FilledButton = ({ name, className, onClick, href }) => {
    return (
        <BaseButton
            className={`bg-brand text-white  border-2 `}
            onClick={onClick}
            href={href}
        >
            {name}
        </BaseButton>
    );
};

export const OutlineButton = ({ name, className, onClick, href }) => {
    return (
        <BaseButton
            className={` text-primary text-opacity-80 hover:text-opacity-100 ${className}`}
            onClick={onClick}
            href={href}
        >
            {name}
        </BaseButton>
    );
};

export const Tag = ({ name }) => {
    return (
        <div className=" gap-3 inline-flex items-center justify-center mb-8 py-2 px-4 bg-[#fff] bg-opacity-30 hover:bg-opacity-70 border border-blue-200 border-opacity-30 rounded-full  ">
            <div className="h-2 w-2 bg-blue-950 rounded-full relative"> </div>
            <p className=" text-md font-medium text-blue-950 text-opacity-75">{name}</p>
        </div>
    );
};
