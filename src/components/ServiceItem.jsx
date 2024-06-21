import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow-narrow-up-right.svg";

const ServiceItem = ({ heading, label, href, imageSrc }) => {
    return (
        <div className="relative w-full h-0 pb-[75%] group">
            <Link
                to={href}
                className="block w-full h-full absolute top-0 left-0"
            >
                <img
                    src={imageSrc}
                    alt=""
                    className="absolute aspect-[1/2] top-0 left-0 w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute bottom-[-50px] left-0 w-full p-2 flex justify-between items-center">
                    <div className="flex gap-4 justify-between items-center">
                        <p className="text-xl text-brand font-semibold">
                            {heading}
                        </p>
                        {label && (
                            <p className="text-sm p-1 px-2 border-primary border rounded-xl text-primary opacity-50 font-medium">
                                {label}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-2 items-center justify-between">
                        <span className="text-sm text-secondary group-hover:text-primary group-hover:font-medium">
                            View project
                        </span>
                        <img src={arrow} alt="" className="h-4" />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceItem;
