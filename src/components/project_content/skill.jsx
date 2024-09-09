import React from 'react';
import visual from '../../assets/visual.svg'
import research from '../../assets/research.svg'
import brand from '../../assets/brand.svg'
import system from '../../assets/system.svg'
import AI from '../../assets/AI.svg'
const Skill = ({ children }) => {
    return (
        <div className="bg-white bg-opacity-10 border-[0.5px] border-white border-opacity-10 rounded-lg p-0.5">
            <div className="bg-opacity-10 rounded-t-lg p-2 text-white font-main font-medium opacity-70 text-[13px]">
                Skills used
            </div>
            <div className=" rounded-md overflow-hidden gap-0.5 flex flex-col" >
                {children}

            </div>
        </div>
    );
};
const Visual = () => (
    <Tag name="Visual design" img={visual} />
)

const System = () => (
    <Tag name="Design system" img={system} />
)

const Research = () => (
    <Tag name="Research" img={research} />
)

const Branding = () => (
    <Tag name="Branding" img={brand} />
)

const Architecture = () => (
    <Tag name="Architecture Information" img={AI} />
)

const Tag = ({ img, name }) => (
    <div className="flex items-center gap-2 px-3 py-1 text-slate-50  bg-slate-50/10 hover:bg-slate-50/30 min-w-fit">
        <img src={img} alt="" />
        {name}
    </div>
);


export { Skill, Visual, System, Research, Branding, Architecture };

export default Skill;