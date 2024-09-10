import React from "react";
import ProjectTemplate from "./project_template";

import thumbnail from '../assets/screen/Passport_thumbnail.png';
import img1 from '../assets/screen/outsource_01.png'
import img2 from '../assets/screen/outsource_02.png'
import img3 from '../assets/screen/outsource_03.png'
import img4 from '../assets/screen/outsource_04.png'
import vid1 from '../assets/lottiefiles/pass.json'; // Lottie JSON animation file
import vid2 from '../assets/lottiefiles/edu.json'; // Lottie JSON animation file
import Lottie from 'lottie-react'; // Default import for Lottie
import AboutThisProject from './project_content/about_this_project'
import { Visual, System, Research, Branding, Architecture, Skill } from './project_content/skill';
import Overview from './project_content/overview'

const Project3 = () => {
    return (
        <ProjectTemplate
            project="Passport & Edu miniapp"
            thumbnail={thumbnail}
            Month="Nov"
            Year="2023"
            nametag="mobile"
            themeColor="bg-gradient-to-r from-teal-950 to-blue-950"
            buttonColor="bg-blue-500"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Client project"
                    Service=" Developed a mini-app within the Zalo super app ecosystem."
                    Client=" Identified problems and provided solutions, typically through simple mini-app services."
                />
            }
            Skill={
                <Skill>
                    <Visual />
                    <Research />
                </Skill>
            }
            timeline="Nov 2023 - Feb 2024"
            check1="Conducted user research tailored to the specific needs of target userss."
            check2="Designed an intuitive interface that streamlines and accelerates the user's workflow."
            check3="Optimized for fast service by minimizing cognitive load on the user."
            contentOverview={
                <Overview
                    r1="Integration with Zalo as a miniapp "
                    s1="Followed Zalo’s design guidelines for a smooth and consistent user experience.

"

                    r3="Optimized for intuitive experience	"
                    s3="Reduced cognitive load by prioritizing key information and organizing it in a clear hierarchy.







"
                />
            }
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            nextId="/projects/4"
            previousId="/projects/2"
        >     <div className="rounded-xl overflow-hidden">
                <Lottie animationData={vid1} loop={true} autoplay={true} />
            </div>
            <div className="rounded-xl overflow-hidden">
                <Lottie animationData={vid2} loop={true} autoplay={true} />
            </div>
        </ProjectTemplate>
    );
};

export default Project3;
