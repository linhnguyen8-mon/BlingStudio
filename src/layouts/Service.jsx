import { H1, H2, H3 } from "../components/Heading";
import arrow from "../assets/arrow.svg";
import img_header_2 from "../assets/img_header_2.png";
import MaskText from "../components/MaskText";
import React, { useState } from "react";

const Service = () => {
    const servicePhrases = [
        "Helping startups create",
        "exceptional design solutions",
    ];

    return (
        <div
            className="w-full
         flex items-center justify-center py-10"
        >
            <div className=" container w-8/12 py-16 pb-4 flex-col gap-4 inline-flex font-main">
                <div className="text-brand font-bold leading-loose">
                    Our service
                </div>
                <MaskText phrases={servicePhrases} textSize="5xl" />
                <ServiceList />
            </div>
        </div>
    );
};

const ServiceList = () => (
    <div className="pt-8">
        <ServiceItem
            label="Branding"
            href="https://phimdammy.com/video/la-chan-mien-dich-stay-by-my-side?tape=2"
            imageSrc={img_header_2}
        />
        <ServiceItem label="Mobile app" />
        <ServiceItem label="Web app" />
        <ServiceItem label="Website" />
    </div>
);

const ServiceItem = ({ label, href, imageSrc }) => {
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
    const [showImage, setShowImage] = useState(false);

    const handleMouseMove = (e) => {
        const offsetX = 20; // Adjust this value as needed
        const offsetY = -100;
        setImagePosition({ x: e.clientX + offsetX, y: e.clientY + offsetY });
        setShowImage(true);
        setTimeout(() => {
            setShowImage(false);
        }, 10000);
    };
    const handleMouseLeave = () => {
        // Clear the timeout to prevent hiding the image when the cursor leaves
        setShowImage(false);
    };
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full flex items-center justify-between p-6 group rounded-xl hover:bg-gray-200"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <H3 className="group-hover:font-bold group-hover:font-primary font-secondary">
                {label}
            </H3>
            {showImage && (
                <div
                    className="absolute rounded-lg z-100"
                    style={{ left: imagePosition.x, top: imagePosition.y }}
                >
                    <img
                        src={imageSrc}
                        alt=""
                        className="z-100 w-auto h-auto max-w-xs max-h-xs rounded-lg "
                    />
                </div>
            )}
            <div className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center group-hover:bg-brand">
                <img
                    src={arrow}
                    alt=""
                    className="hidden group-hover:block filter brightness-0 invert"
                />
            </div>
        </a>
    );
};
export default Service;
