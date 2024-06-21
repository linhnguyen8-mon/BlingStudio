import React from "react";
import { H2 } from "../components/Heading";
import img4 from "../assets/img4.png";
import ServiceItem from "../components/ServiceItem";
import CW1 from "../assets/CW_1.png";
import TC2 from "../assets/TC_02.png";
import img5 from "../assets/124.png";

const Service = () => {
    return (
        <div className="w-3/4 mx-auto relative my-24">
            <div className="smm:px-3 w-full flex items-center justify-center py-[80px] z-50">
                <div className="container py-16 pb-4 flex-col gap-0 inline-flex font-main">
                    <div className="text-secondary font-bold leading-loose">
                        Works
                        <H2 className="text-secondary">
                            Helping startups create
                        </H2>
                        <H2 className="text-primary">
                            exceptional design solutions
                        </H2>
                    </div>
                    <ServiceList />
                </div>
            </div>
        </div>
    );
};

const ServiceList = () => {
    return (
        <div className="pt-8 grid grid-cols-2 gap-12 gap-y-24">
            <ServiceItem
                imageSrc={CW1}
                heading="Coworking space"
                label="mobile"
                href="/projects/1"
            />
            <ServiceItem
                imageSrc={TC2}
                heading="Tech company"
                label="website"
                href="/projects/2"
            />
            <ServiceItem
                heading="Others"
                label="mobile"
                href="/projects/3"
                imageSrc={img4}
            />
            <ServiceItem
                heading="UI concepts"
                href="/projects/4"
                label="mobile"
                imageSrc={img5}
            />
        </div>
    );
};

export default Service;
