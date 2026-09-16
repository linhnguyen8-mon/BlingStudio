import React from 'react';

const AboutThisProject = ({ Type_of_project, Service, Client }) => {
    return (
        <div className="space-y-3">
            <ProjectDetail label="Type" content={Type_of_project} />
            <ProjectDetail label="Service" content={Service} />
            <ProjectDetail label="User" content={Client} />
        </div>
    );
};

const ProjectDetail = ({ label, content }) => {
    if (!content) return null;
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-start">
            <Tag name={label} />
            <p className="text-white text-sm opacity-90 min-w-0 break-words">{content}</p>
        </div>
    );
};

const Tag = ({ name }) => (
    <div className="flex items-center justify-center min-w-16 shrink-0 px-2 py-1 text-[11px] font-bold text-slate-50 uppercase rounded-md bg-slate-50/10">
        {name}
    </div>
);

export default AboutThisProject;
