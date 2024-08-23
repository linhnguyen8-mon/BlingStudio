import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow-narrow-up-right.svg";
const ServiceItem = ({ heading, label, href, imageSrc }) => {
    return (
        <>
            <Link to={href} className="relative group p-2 bg-[#DDF1FC] bg-opacity-50 hover:bg-[#fff] hover:bg-opacity-100 rounded-2xl flex flex-col gap-4  hover:shadow-[rgba(7,_65,_210,_0.02)_0px_9px_20px] border border-blue-100 border-opacity-40 hover:border-opacity-80 transition duration-300 ease-in-out">
                <img
                    src={imageSrc}
                    alt=""
                    className="object-cover h-full rounded-xl"
                />
                <div className=" flex justify-between text-primary mb-2 ">
                    <p className="text-xl font-semibold">
                        {heading}
                    </p>
                    {label && (
                        <p className="text-sm p-1 px-2 rounded-xl opacity-60 bg-[#fff] group-hover:bg-[#DDF1FC] group-hover:opacity-100 ">
                            {label}
                        </p>
                    )}
                </div>
                <div className="absolute bg-black bg-opacity-0 group-hover:bg-opacity-20 backdrop-blur-lg top-4 right-4 flex gap-2 items-center z-50 p-1 pl-3 
        border border-white border-opacity-0 group-hover:border-opacity-80 rounded-full overflow-hidden transition-all duration-300
        group-hover:w-auto w-8"> {/* Added transitions and conditional width */}
                    <span className="text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-full whitespace-nowrap">
                        View project
                    </span>
                    <img src={arrow} alt="" className="h-4" />
                </div>
            </Link>
        </>
    );
};

export default ServiceItem;
