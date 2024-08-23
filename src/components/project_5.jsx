import React from "react";
import ProjectTemplate from "./project_template";

import thumbnail from '../assets/screen/Visa_genegation.png';
import img1 from '../assets/screen/PP_01.png';
import img2 from '../assets/screen/PP_02.png';
import img3 from '../assets/screen/PP_03.png';
import img4 from '../assets/screen/PP_04.png';
const Project5 = () => {
    return (
        <ProjectTemplate
            project="Concept"
            thumbnail={thumbnail}
            Month="March"
            Year="2024"
            nametag="mobile"
            themeColor="bg-gradient-to-r from-emerald-900 to-cyan-900"
            buttonColor="bg-blue-500"
            contentAbout="A client project to showcase my skills and projects"
            timeline="Mar 2024 - Jul 2024"
            check1="Create logo and visual guildeline"
            check2="Create a flow to get ease for user to upload a photo to end result"
            check3=""
            contentOverview="A small project to create passport photo for visa generation"
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            children1={"Visual design, Research"}
        >
        </ProjectTemplate>
    );
};

export default Project5;
