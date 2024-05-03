import { useState } from "react";
import { H3 } from "../components/Heading";
import arrow from "../assets/arrow.svg";
import img_header_2 from "../assets/img_header_2.png";
import branding from "../assets/brand.svg";
import website1 from "../assets/Website1.png";
import MaskText from "../components/MaskText";
const Service = () => {
    const servicePhrases = [
        "Helping startups create",
        "exceptional design solutions",
    ];

    return (
        <div className="w-full bg-white  relative">
            <div className="smm:px-3 w-full flex items-center justify-center py-[80px]  z-50">
                <div className="lg:container  lg:w-8/12  py-16 pb-4 flex-col gap-0 inline-flex font-main">
                    <div className="text-brand font-bold leading-loose">
                        Our service
                    </div>
                    <MaskText phrases={servicePhrases} textSize="5xl" />
                    <ServiceList />
                </div>
            </div>
        </div>
    );
};
const ServiceList = () => (
    <div className="pt-8 flex flex-col gap-4">
        <ServiceItem
            imageSrc={img_header_2}
            label="Mobile app"
            href="https://www.figma.com/file/QW8KrgWe4br09aFRfDBqwE/Bling?type=design&node-id=0%3A1&mode=design&t=OtuBKKg5hTm6TpBX-1"
        />
        <ServiceItem
            imageSrc={website1}
            label="Website"
            href="https://www.figma.com/file/QW8KrgWe4br09aFRfDBqwE/Bling?type=design&node-id=1%3A2&mode=design&t=OtuBKKg5hTm6TpBX-1"
        />
        <ServiceItem
            label="Branding"
            href="https://www.figma.com/file/QW8KrgWe4br09aFRfDBqwE/Bling?type=design&node-id=1%3A3&mode=design&t=OtuBKKg5hTm6TpBX-1"
            imageSrc={branding}
        />
    </div>
);
const ServiceItem = ({ label, href, imageSrc }) => {
    const [showImage, setShowImage] = useState(false);

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full flex items-center justify-between p-6 group rounded-xl bg-[#f0f1fe] hover:bg-[#fff] hover:shadow-xl hover:shadow-[#c8cade55] hover:z-50"
            onMouseEnter={() => setShowImage(true)}
            onMouseLeave={() => setShowImage(false)}
        >
            <H3 className="group-hover:font-bold group-hover:font-primary font-secondary">
                {label}
            </H3>
            <div
                className={`absolute rounded-lg z-100 right-40 transition-opacity transition-transform duration-500 ease-in-out ${
                    showImage ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
            >
                {showImage && (
                    <img
                        src={imageSrc}
                        alt=""
                        className="z-100 w-auto h-auto sm:w-[2000px] lg:max-w-xs lg:max-h-xs rounded-lg"
                    />
                )}
            </div>
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
