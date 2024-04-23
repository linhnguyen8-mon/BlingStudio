import React, { useState } from "react";
export const IconButton = ({ svg, name, className, onClick }) => {
    return (
        <div className="group">
            <button
                className={` inline-flex items-center justify-center h-12 px-6 rounded-full gap-2.5 font-main ${className}  border-white border-2 group-hover:bg-white group-hover:border-white`}
                onClick={onClick}
            >
                <span className="text-white text-base font-bold group-hover:text-brand  whitespace-nowrap">
                    {name}
                </span>
                <img src={svg} alt="Icon" className="w-4 h-4 icon " />
            </button>
        </div>
    );
};

export const Button = ({ name, className, onClick, classNameChild }) => {
    return (
        <button
            className={`text-brand border-brand border-2 inline-flex items-center justify-center h-12 px-6 rounded-full gap-2.5 font-main ${className} `}
            onClick={onClick}
        >
            <span
                className={`text-brand text-base font-semibold ${classNameChild}`}
            >
                {name}
            </span>
        </button>
    );
};

export const StyledButton = ({ name, className, onClick }) => {
    return (
        <button
            className={`px-5 pt-[11px] pb-2.5 rounded-full ${className}`}
            onClick={onClick} // Add onClick handler to the button
        >
            <span className="uppercase text-center text-sm font-bold">
                {name}
            </span>
        </button>
    );
};
export const OutlineButton = ({ name, className, classNameChild, color }) => {
    return (
        <a
            href="https://www.framer.com/?via=michael19"
            className={`px-5 pt-[11px] pb-2.5 rounded-full border inline-block border-${color} ${className} group hover:bg-brand hover:bg-opacity-5`}
        >
            <span
                className={`uppercase  text-sm font-medium ${classNameChild} text-${color} group-hover:text-brand group-hover:font-bold`}
            >
                {name}
            </span>
        </a>
    );
};
