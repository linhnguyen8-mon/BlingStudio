import { OutlineButton } from "../components/Button";
import WorkflowCard from "../components/our-work/WorkflowCard";
import UXResearchCard from "../components/our-work/UXResearchCard";
import UXUIChecklistCard from "../components/our-work/UXUIChecklistCard";

const OurWork = () => {
    return (
        <div className="container mx-auto px-0 my-12 sm:my-16 lg:my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <WorkflowCard />
                <UXResearchCard />
                <UXUIChecklistCard />
            </div>
        </div>
    );
};

export default OurWork;
