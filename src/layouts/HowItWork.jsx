import React, { useState } from "react";
import grid from '../assets/grid.png'
import uxImage from '../assets/ux.png';
import uiImage from '../assets/ui.png';
import appImage from '../assets/app.png';
import brandingImage from '../assets/branding.png';
const HowItWork = () => {
    const [currentService, setCurrentService] = useState("");
    const services = [
        { title: "Web Design", illus: uxImage },
        { title: "UI/UX Design", illus: uiImage },
        { title: "App Design", illus: appImage },
        { title: "Branding", illus: brandingImage },
    ];

    return (
        <div className="container my-24">
            {/* Title Section */}
            <div className="flex gap-6 mb-8 h-[60px] relative">
                <p className="text-textColor font-primary text-5xl font-semibold">
                    We design
                </p>
                <p className="text-textColor font-secondary italic text-6xl font-bold">
                    {currentService}
                </p>
                <div className="bg-textColor opacity-40 w-[350px] h-[3px] absolute bottom-0 left-60"></div>
            </div>

            {/* Services Section */}
            <div className="flex justify-center gap-12 p-2 bg-white rounded-t-2xl backdrop-blur-2xl bg-opacity-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center p-2 rounded-lg border border-blue-100 border-opacity-0 hover:ring-4 hover:ring-blue-100 hover:ring-offset-2 hover:bg-opacity-10 transition duration-300 ease-in-out cursor-pointer"
                        onMouseEnter={() => setCurrentService(service.title)}
                        onMouseLeave={() => setCurrentService("")}
                    >
                        <img
                            src={service.illus}
                            alt={service.title}
                            className="h-48 w-48 object-contain transform transition-transform group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;
