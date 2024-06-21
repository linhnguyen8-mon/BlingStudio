import { H1 } from "../components/Heading";
import { OutlineButton } from "../components/Button";
const OurWork = () => {
    return (
        <div className="container my-24">
            <div className="flex justify-between items-center">
                <H1 className="text-secondary opacity-20 hover:opacity-40">
                    Notes
                </H1>
                <OutlineButton
                    name="See more"
                    href="https://blingstudio.notion.site/Knowledge-card-e05983155fa8464eae105766eeed7f0d"
                />
            </div>
            <div className="grid grid-cols-3 gap-6">
                <Card>
                    <Note
                        title="How to understand the product"
                        content1="1. Business goals: Align design decisions with company's vision like increase convertion rate or enhance seamless experience."
                        content2="2. User needs: Identify what they need to make a high engagement and ovarall satisfaction"
                    />
                </Card>
                <Card>
                    <Note
                        title="How to make design strategy"
                        content1="1. What is our domain?"
                        content2="2. Which factors need to be consider"
                        content3="3. Learn from best practices and plan out the most satisfying experience"
                    />
                </Card>
                <Card>
                    <Note
                        title="How to make a good layout"
                        content1="1. Consistency: Make visual pattern cohesive"
                        content2="2. Alignment and Spacing: Create a well-structure and easy to scan though "
                        content3="3. Visual hierarchy: Create a "
                        content4="4. Balance and Proportion: Create a harmony and order"
                        content5="5. Accessibility: Design for a large range of people with various abilities and preferences"
                        content6="6. Responsiveness: Adapt to all devices, ensure seamless across platforms"
                    />
                </Card>
            </div>
        </div>
    );
};

const Note = ({
    title,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
}) => {
    return (
        <div>
            <div className="font-semibold text-primary mb-2 group-hover:text-primary">
                {title}
            </div>
            <div className="text-secondary hover:text-primary">
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
        <div className="group container relative mt-4 rounded-3xl p-8 text-xl bg-backgroundCard shadow-custom-light  before:pointer-events-none hover:before:shadow-inner-card-hover">
            {children}
        </div>
    );
};
export default OurWork;
