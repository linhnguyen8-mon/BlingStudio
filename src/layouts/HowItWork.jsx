import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePresets } from "../motion";
import uxImage from "../assets/ux.png";
import uiImage from "../assets/ui.png";
import appImage from "../assets/app.png";
import brandingImage from "../assets/branding.png";
const HowItWork = () => {
    const [currentService, setCurrentService] = useState("");
    const presets = usePresets();
    const services = [
        { title: "Web Design", illus: uxImage },
        { title: "UI/UX Design", illus: uiImage },
        { title: "App Design", illus: appImage },
        { title: "Branding", illus: brandingImage },
    ];

    return (
        <div className="container my-12 md:my-24">
            {/* Title Section */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-end gap-2 sm:gap-6 mb-8 min-h-[60px] relative">
                <p className="text-textColor font-primary text-3xl sm:text-4xl md:text-5xl font-semibold">
                    We design
                </p>
                <div className="relative min-h-[1.1em] min-w-[8ch] text-textColor font-secondary italic text-4xl sm:text-5xl md:text-6xl font-bold overflow-hidden">
                    <AnimatePresence mode="wait">
                        {currentService ? (
                            <motion.p
                                key={currentService}
                                variants={presets.crossfade}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                {currentService}
                            </motion.p>
                        ) : null}
                    </AnimatePresence>
                </div>
                <div className="hidden lg:block bg-textColor opacity-40 w-[350px] h-[3px] absolute bottom-0 left-60"></div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-4 md:gap-8 lg:gap-12 p-2 bg-white rounded-t-2xl backdrop-blur-2xl bg-opacity-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative flex flex-col items-center p-2 rounded-lg border border-blue-100 border-opacity-0 hover:ring-4 hover:ring-blue-100 hover:ring-offset-2 hover:bg-opacity-10 transition duration-base ease-out-soft cursor-pointer"
                        onMouseEnter={() => setCurrentService(service.title)}
                        onMouseLeave={() => setCurrentService("")}
                        onClick={() => setCurrentService(service.title)}
                    >
                        <img
                            src={service.illus}
                            alt={service.title}
                            className="h-28 sm:h-36 md:h-44 lg:h-48 w-full max-w-[192px] object-contain transform transition-transform duration-base ease-out-soft group-hover:scale-110"
                        />
                        <p className="lg:hidden mt-2 text-primary text-sm font-medium text-center">
                            {service.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWork;
