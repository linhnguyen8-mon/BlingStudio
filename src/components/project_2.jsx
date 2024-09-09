import React from "react";
import ProjectTemplate from "./project_template";

import thumbnail from '../assets/screen/TC_02.png';
import img1 from '../assets/screen/TC_01.png'
import img2 from '../assets/screen/TC_02.png'
import img3 from '../assets/screen/TC_03.png'
import img4 from '../assets/screen/TC_04.png'
import img5 from '../assets/screen/TC_05.png'
import img6 from '../assets/screen/TC_06.png'
import img7 from '../assets/screen/TC_07.png'
import img8 from '../assets/screen/TC_08.png'

import second from '../assets/lottiefiles/project_2.json'; // Lottie JSON animation file
import Lottie from 'lottie-react'; // Default import for Lottie
import AboutThisProject from './project_content/about_this_project'
import { Visual, System, Research, Branding, Architecture, Skill } from './project_content/skill';
import Overview from './project_content/overview'

const Project2 = () => {
    return (
        <ProjectTemplate
            project="Rova Website"
            thumbnail={img1}
            Month="Aug"
            Year="2023"
            nametag="website | mobile"
            themeColor="bg-gradient-to-r from-slate-950 to-blue-950"
            buttonColor="bg-blue-500"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Client project"
                    Service="Delivered services related to cloud integration and web development"
                    Client="Client find the data storage and management solution that meets their needs"
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
                    r1="A sleek, tech-driven website for tech-savvy clients"
                    s1="Used minimalistic design and bold headings to enhance visual appeal and simplified content for better navigation." />
            }
            timeline="Aug 2023 - Nov 2023"
            check1="Developed a comprehensive flow & design system for 80+ screens."
            check2="Focused on solving user pain points to increase conversion rate and drive engagement."
            check3="Ensured responsive design and functionality across devices"
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            img8={img8}
            nextId="/projects/3"
            previousId="/projects/1"
        >

            <div className="rounded-xl overflow-hidden">
                <Lottie animationData={second} loop={true} autoplay={true} />
            </div>
        </ProjectTemplate>
    );
};

export default Project2;
