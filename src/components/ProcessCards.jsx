import React from 'react';
import WorkflowCard from './our-work/WorkflowCard';
import UXResearchCard from './our-work/UXResearchCard';
import UXUIChecklistCard from './our-work/UXUIChecklistCard';

const ProcessCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <WorkflowCard />
            <UXResearchCard />
            <UXUIChecklistCard />
        </div>
    );
};

export default ProcessCards; 