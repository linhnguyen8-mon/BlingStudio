import React from "react";
import ProjectTemplate from "./project_template";
import thumbnail from '../assets/screen/VPS_thumbnail.png';
import img1 from '../assets/screen/VPS_01.png';
import img2 from '../assets/screen/VPS_02.png';
import img3 from '../assets/screen/VPS_03.png';
import img4 from '../assets/screen/VPS_04.png';
import img5 from '../assets/screen/VPS_05.png';
import img6 from '../assets/screen/VPS_06.png';
import img7 from '../assets/screen/VPS_07.png';
import img8 from '../assets/screen/VPS_08.png';
import AboutThisProject from './project_content/about_this_project'
import { Visual, System, Research, Branding, Architecture, Skill } from './project_content/skill';
import Overview from './project_content/overview'

const Project6 = () => {
    return (
        <ProjectTemplate
            project="VPS Server Hosting"
            thumbnail={thumbnail}
            Month="Jun"
            Year="2024"
            nametag="website | mobile"
            themeColor="bg-gradient-to-r to-orange-900 from-red-950"
            buttonColor="bg-blue-500"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Client project"
                    Service="VPS Server Hosting"
                    Client="Client find a hoising to set up their servers"
                />
            }
            Skill={
                <Skill>
                    <Visual />
                    <Research />
                    <System />
                    <Branding />
                    <Architecture />
                </Skill>
            }
            contentOverview={
                <Overview
                    r1="Modern, Clean Design for targest users"
                    s1="Created a visually appealing, modern design incorporating a dark mode for user comfort. The distinctive branding orange color enhances recognition and visual impact.
"
                    r2="Global Audience Considerations"
                    s2="Designed to support content expansion and accommodate multiple languages to ensure global accessibility.
"
                />
            }
            timeline="Jun 2024 - Jul 2024"
            check1="Developed a comprehensive branding guideline.
"
            check2="Designed both dark mode and light mode options to accommodate user preferences.
"
            check3="Ensured the design supports multiple languages to cater to a global audience."
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            img8={img8}
            nextId="/projects/1"
            previousId="/projects/5"
        >
        </ProjectTemplate>
    );
};

export default Project6;
