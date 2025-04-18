import React from "react";
import ServiceItem from "../components/ServiceItem";
import img1 from "../assets/screen/CW_1.png";
import img2 from "../assets/screen/Cloud.png";
import img3 from "../assets/screen/Passport_thumbnail.png";
import img4 from "../assets/screen/Concept.png";
import img6 from "../assets/screen/VPS_thumbnail.png";
import img5 from "../assets/screen/Visa_genegation.png";
import img7 from "../assets/screen/7_05.png";
const Service = () => {
    return (
        <div className="container mx-auto relative my-40 md:my-8 mt-60">
            <div className="font-medium leading-loose flex flex-col gap-2 mb-8">
                <p className="text-white text-5xl sm:text-4xl">
                    Helping startups create
                </p>
                <p className="text-white font-secondary italic text-6xl sm:text-5xl font-bold">
                    exceptional design solutions
                </p>
            </div >
            <ServiceList />
        </div >
    );
};

const ServiceList = () => {
    return (
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceItem
                imageSrc={img1}
                heading="Coworking space"
                label="mobile"
                href="/projects/1"
            />
            <ServiceItem
                imageSrc={img2}
                heading="Cloud technology"
                label="mobile | website"
                href="/projects/2"
            />
            <ServiceItem
                heading="Mini app"
                label="mobile"
                href="/projects/3"
                imageSrc={img3}
            />
            <ServiceItem
                heading="UI concepts"
                href="/projects/4"
                label="mobile"
                imageSrc={img4}
            />
            <ServiceItem
                heading="Visa genegation"
                href="/projects/5"
                label="mobile | website"
                imageSrc={img5}
            />
            <ServiceItem
                heading="VPS hosting"
                href="/projects/6"
                label="mobile | website"
                imageSrc={img6}
            />
            <ServiceItem
                heading="Edtech Webapp"
                href="/projects/7"
                label="mobile | website"
                imageSrc={img7}
            />
        </div>
    );
};

export default Service;
