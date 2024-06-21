import { H1, H2, H3 } from "../components/Heading";
import Showreel from "../components/Showreel";

const Intro = () => {
    const services = [
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
    ];

    return (
        <div className="relative" id="whyus">
            <div className="bg-gradient-to-t from-backgroundCard to-primary-alpha w-full h-full absolute bottom-[-80px] left-0  z-10 "></div>
            <div className=" relative container bg-[#fff]  rounded-3xl h-[600px]  ">
                <div className="p-16">
                    <Showreel />
                </div>
            </div>

            <div className="container p-0 relative ">
                <div className="h-[80px] -rotate-2 bg-backgroundCardHover absolute bottom-[24px] left-[-500px] z-10 overflow-hidden">
                    <div className="inline-flex my-6 gap-8 text-background text-2xl font-bold font-main uppercase animate-slideLeftRight">
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-evenly">
                                <div className="smm:w-[160px] md:w-[200px]">
                                    {service}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
