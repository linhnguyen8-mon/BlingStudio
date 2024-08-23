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
const Project3 = () => {
    return (
        <ProjectTemplate
            project="Passport & Edu miniapp"
            thumbnail={thumbnail}
            Month="Nov"
            Year="2023"
            nametag="mobile"
            themeColor="bg-gradient-to-r from-rose-950 to-blue-950"
            buttonColor="bg-blue-500"
            contentAbout="Client Project | Developed a mini-app within the Zalo super app ecosystem."
            timeline="Nov 2023 - Feb 2024"
            check1="Conducted user research tailored to the specific needs of target userss."
            check2="Designed an intuitive interface that streamlines and accelerates the user's workflow."
            check3="Optimized for fast service by minimizing cognitive load on the user."
            contentOverview="This project was integrated into a larger app, Zalo- a huge ecosystem platform, requiring adherence to Zalo’s design guidelines to ensure a seamless and consistent user experience.
            Each mini-app is designed to meet the specific needs of the target users, with a focus on user convenience without overwhelming user cognitive load.
            Aiming to younger users, I created an bright and lively interface that streamlines and accelerates the user's workflow.

 "
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            children1="Research, Visual design"
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
