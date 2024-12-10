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
            themeColor="bg-gradient-to-r from-indigo-950 to-blue-950"
            buttonColor="bg-blue-500"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Client project"
                    Service=" Resize, edit photo to use it in passport"
                    Client=" Those submitting passports online or using their own photos"
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
                    r1="Need a clear guidance for beginner "
                    s1="Designed a clean, intuitive interface with straightforward instructions to guide users smoothly."
                    r2="Easy Flow from Selection to Purchase"
                    s2="Create procedure progress to easy photo selection and purchase with minimal steps."
                    r3="Mobile Optimization"
                    s3="Fully optimized the application for mobile devices, allowing users to upload photos directly from their phones."
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
