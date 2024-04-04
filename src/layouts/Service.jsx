import { H1, H2, H3 } from "../components/Heading";
import arrow from "../assets/arrow.svg";
import img_header_2 from "../assets/img_header_2.png";
import MaskText from "../components/MaskText";

const Service = () => {
    const servicePhrases = [
        "Helping startups create",
        "exceptional design solutions",
    ];

    return (
        <div className="flex items-center justify-center">
            <div className="w-6/12 py-16 flex-col gap-4 inline-flex font-main">
                <h1 className="text-brand text-4xl font-bold leading-loose">
                    Our service
                </h1>
                <MaskText phrases={servicePhrases} size="5xl" />
                <ServiceList />
            </div>
        </div>
    );
};

const ServiceList = () => (
    <div className="pt-16">
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
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full flex items-center justify-between p-6 group rounded-xl hover:bg-gray-200"
        >
            <p className="group-hover:font-bold">{label}</p>
            <img
                src={imageSrc}
                alt=""
                className="hidden absolute w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center group-hover:bg-brand">
                <img
                    src={arrow}
                    alt=""
                    className="hidden group-hover:block filter group-hover:brightness-0 group-hover:invert"
                />
            </div>
        </a>
    );
};
export default Service;
