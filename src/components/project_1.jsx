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
                        Service=" Show coworking spaces, allow booking and payment"
                        Client="Freelancers/remote workers looking for a professional workspace outside home or coffee shops"
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
                        r1="Targest users: young generation"
                        s1="Created vibrant, modern graphics to engage users."
                        r2="Struggle and overwhelming with booking process"
                        s2="Divide into manageable steps and clear guidances."
                        r3="Need a personalized search experience"
                        s3="Added filters and options for tailored search results.
"
                    />
                }
                timeline="Sep 2022 - Oct 2022"
                check1="Created custom icons and graphics to enhance the look and user interaction."
                check2="Simplified the booking process with easy steps and clear instructions.
"
                check3="Tested the app on various devices to ensure it works well and is responsive.

"
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
