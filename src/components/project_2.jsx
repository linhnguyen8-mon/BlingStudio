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
const Project2 = () => {
    return (
        <ProjectTemplate
            project="Rova Website"
            thumbnail={thumbnail}
            Month="Aug"
            Year="2023"
            nametag="mobile"
            themeColor="bg-gradient-to-r from-slate-900 to-blue-950"
            buttonColor="bg-blue-500"
            contentAbout="Client Project | Delivered services related to cloud integration and web development."
            timeline="Aug 2023 - Nov 2023"
            check1="Developed comprehensive flow & design system, ensuring quality and consistency across 80+ screens."
            check2="Created responsive designs optimized for both mobile and desktop."
            check3="Focused on solving their pain points to increase conversion rate & drive user engagement."
            contentOverview="The client's vision is a sleek, technology-driven website with a minimalist design. 
            Over the course of two months, I have been committed to delivering this project, consistently refining it through iterative updates and feedback to ensure alignment with the client’s aspirations."
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            img8={img8}
            children1={"Design System, Visual design, Research, Architecture Information"}
        >

            <div className="rounded-xl overflow-hidden">
                <Lottie animationData={second} loop={true} autoplay={true} />
            </div>
        </ProjectTemplate>
    );
};

export default Project2;
