import React from "react";

const BaseButton = ({ children, className, onClick, href }) => {
    const Component = href ? "a" : "button";
    const props = href ? { href } : { onClick };
    return (
        <Component
            className={`inline-flex items-center justify-center h-16 px-8 rounded-full font-main font-semibold  ${className}
            hover:shadow-xl   hover:shadow-orange-100 hover:px-10
            `}
            target="_blank"
            {...props}
        >
            {children}
        </Component>
    );
};

export const IconButton = ({ svg, name, onClick }) => {
    return (
        <div className="group">
            <BaseButton
                className={` border-primary border-2  `}
                onClick={onClick}
            >
                <span className="text-primary text-base font-bold group-hover:text-brand  whitespace-nowrap">
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
            className={`border border-border  text-primary ${className}`}
            onClick={onClick}
            href={href}
        >
            {name}
        </BaseButton>
    );
};

export const Tag = ({ name }) => {
    return (
        <div className=" gap-4 inline-flex items-center justify-center h-10 px-4  ">
            <div className="h-3 w-3 bg-emerald-500 rounded-full relative">
                <div className="indicator h-3 w-3 bg-emerald-500 bg-opacity-40 rounded-full absolute left-0 top-0"></div>
            </div>
            <p className=" font-main font-semibold text-primary">{name}</p>
        </div>
    );
};
