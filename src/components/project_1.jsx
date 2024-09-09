import React from "react";
import ProjectTemplate from "./project_template";
import thumbnail from '../assets/screen/CW_1.png';
import img1 from '../assets/screen/CW_1.png';
import img2 from '../assets/screen/CW_2.png';
import img3 from '../assets/screen/CW_3.png';
import img4 from '../assets/screen/CW_4.png';
import img5 from '../assets/screen/CW_5.png';
import img6 from '../assets/screen/CW_6.png';
import img7 from '../assets/screen/CW_7.png';
import img8 from '../assets/screen/CW_8.png';
import second from '../assets/lottiefiles/booking.json'; // Lottie JSON animation file
import Lottie from 'lottie-react'; // Default import for Lottie
import AboutThisProject from './project_content/about_this_project'
import { Visual, System, Research, Branding, Architecture, Skill } from './project_content/skill';
import Overview from './project_content/overview'
const Project1 = () => {
    return (
        <>
            <ProjectTemplate
                thumbnail={thumbnail}
                Month="Sep"
                Year="2022"
                nametag="mobile"
                themeColor="bg-gradient-to-r from-indigo-900 to-cyan-950"
                buttonColor="bg-blue-500"
                project="CoWorking Space"

                AboutThisProject={
                    <AboutThisProject
                        Type_of_project="Personal project"
                        Service="A mobile app for booking co-working space"
                        Client="Client needs to find suitable co-working spaces that meet their diverse needs"
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
                        r1="Focused on tailoring the search experience to match individual preferences"
                        s1="nj" />
                }
                timeline="Sep 2022 - Oct 2022"
                check1="Designed custom icons and graphics to improve aesthetic appeal and user engagement."
                check2="Streamlined booking and reservation processes for coworking spaces with minimal steps and clear instructions."
                check3="Tested the app on multiple devices to verify responsive behavior and functionality."
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
                img7={img7}
                img8={img8}
                nextId="/projects/2"
                previousId="/projects/6"
            >
                <div className="rounded-xl overflow-hidden">
                    <Lottie animationData={second} loop={true} autoplay={true} />
                </div>
            </ProjectTemplate >
        </>
    );
};

export default Project1;
