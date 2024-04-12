import React, { useState } from "react";
export const IconButton = ({ svg, name, className, onClick }) => {
    return (
        <button
            className={`inline-flex items-center justify-center h-12 px-6 rounded-full gap-2.5 font-main ${className} transition duration-300 ease-in-out hover:brightness-90`}
            onClick={onClick}
        >
            <span className="text-white text-base font-bold">{name}</span>
            <img src={svg} alt="Icon" className="w-6 h-6" />
        </button>
    );
};
export const Button = ({ name, className, onClick }) => {
    return (
        <button
            className={`bg-brand inline-flex items-center justify-center h-12 px-6 rounded-full gap-2.5 font-main ${className} transition duration-300 ease-in-out hover:brightness-90`}
            onClick={onClick}
        >
            <span className="text-white text-base font-bold">{name}</span>
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
        <button
            className={`px-5 pt-[11px] pb-2.5 rounded-full border inline-block border-${color}  ${className} group hover:bg-white`}
        >
            <span
                className={`uppercase  text-sm font-medium ${classNameChild} text-${color} group-hover:text-primary`}
            >
                {name}
            </span>
        </button>
    );
};
