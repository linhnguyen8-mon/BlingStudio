import { OutlineButton } from "../components/Button";
const OurWork = () => {
    return (
        <div className="container my-24 relative">
            <div className="flex justify-between items-center">
                <p className="text-textColor  font-primary text-5xl font-semibold">Notes                </p>
                <OutlineButton
                    name="See more"
                    href="https://blingstudio.notion.site/Knowledge-card-e05983155fa8464eae105766eeed7f0d"
                />
            </div>
            <div className=" flex flex-col gap-16 mt-8">
                {[...Array(10)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-textColor opacity-20 w-full h-[2px]"
                    ></div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-16 absolute top-36 px-24">
                <Card>
                    <Note
                        number="01"
                        title="How to understand the product"
                        content1="1. Business goals: Align design decisions with company's vision to increase convertion rate."
                        content2="2. User needs: Identify what users need to make a high engagement and satisfaction"
                    />
                </Card>
                <Card>
                    <Note
                        number="02"
                        title="How to make design strategy"
                        content1="1. What is our domain?"
                        content2="2. Which factors need to be consider"
                        content3="3. Learn from best practices and plan out the most satisfying experience"
                    />
                </Card>
                <Card>
                    <Note
                        number="03"
                        title="How to make a good layout"
                        content1="1. Consistency: Make visual pattern cohesive"
                        content2="2. Alignment & Spacing: Well-structure and easy to scan though "
                        content3="3. Visual hierarchy "
                        content4="4. Balance and Proportion"
                        content5="5. Accessibility: Design for a large range of people with various abilities and preferences"
                        content6="6. Responsiveness: Adapt to all devices"
                    />
                </Card>
            </div>
        </div>
    );
};

const Note = ({
    title, number,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
}) => {
    return (
        <div className="h-full overflow-hidden"> {/* Ensure parent has full height */}
            <div className="font-secondary text-5xl font-semibold italic text-textColor pt-4">
                {number}
            </div>
            <div className="font-primary text-3xl font-semibold text-primary mb-6 group-hover:text-primary">
                {title}
            </div>
            <div className="text-primary  text-lg bg-gradient-to-br from-blue-100 to-blue-50 rounded-md p-4 flex flex-col h-full ">
                <div>{content1}</div>
                <div>{content2}</div>
                <div>{content3}</div>
                <div>{content4}</div>
                <div>{content5}</div>
                <div>{content6}</div>
            </div>
        </div>
    );
};

const Card = ({ children }) => {
    return (
        <div className="group container relative mt-4 rounded-2xl p-4 text-xl  bg-white 
         hover:shadow-[rgba(178,_219,_241,_0.3)_0px_9px_20px]    hover:before:shadow-inner-card-hover
            hover:ring-offset-2 hover:ring-2 ring-blue-100 	">
            {children}

        </div>
    );
};
export default OurWork;
