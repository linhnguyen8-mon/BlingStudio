import React from "react";
import ProjectTemplate from "./project_template";

import thumbnail from '../assets/screen/Visa_genegation.png';
import img1 from '../assets/screen/PP_01.png';
import img2 from '../assets/screen/PP_02.png';
import img3 from '../assets/screen/PP_03.png';
import img4 from '../assets/screen/PP_04.png';
import AboutThisProject from './project_content/about_this_project'
import { Visual, System, Research, Branding, Architecture, Skill } from './project_content/skill';
import Overview from './project_content/overview'

const Project5 = () => {

    return (
        <ProjectTemplate
            project="Passport visa generation"
            thumbnail={thumbnail}
            Month="March"
            Year="2024"
            nametag="mobile"
            themeColor="bg-gradient-to-r from-indigo-900 to-blue-900"
            buttonColor="bg-blue-500"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Client project"
                    Service=" Create a service-focused website that minimizes visuals, enhances user experience, and is user-friendly."
                    Client="Client find a passport generation solution that meets their needs"
                />
            }
            Skill={
                <Skill>
                    <Visual />
                    <Research />
                </Skill>
            }
            contentOverview={
                <Overview
                    r1="Clear Guidance "
                    s1="The application should feature a clean and intuitive design with straightforward instructions to guide users through the process."
                    r2="Easy Flow from Selection to Purchase"
                    s2="The user journey should be seamless, allowing clients to easily select their photo requirements and complete their purchase with minimal steps."
                    r3="Mobile Optimization"
                    s3="The application must be fully optimized for mobile devices, enabling users to easily upload their photos directly from their phones."
                />
            }
            timeline="Mar 2024 - Jul 2024"
            check1="Created a logo and visual guidelines to establish a consistent brand identity."
            check2="Designed a streamlined flow for users to easily upload their photo, leading to the final result."
            check3="Ensured that the design system supports responsive and adaptive layouts for different devices.`"
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            nextId="/projects/6"
            previousId="/projects/4"
        >
        </ProjectTemplate>
    );
};

export default Project5;
