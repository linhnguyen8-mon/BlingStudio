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
            contentAbout="Client project | VPS Server Hosting"
            timeline="Jun 2024 - Jul 2024"
            check1="Developed a comprehensive branding guideline.
"
            check2="Designed both dark mode and light mode options to accommodate user preferences.
"
            check3="Ensured the design supports multiple languages to cater to a global audience."
            contentOverview="The client aimed for a modern, clean design featuring a dark mode theme with a distinctive branding orange color. 
            The website is intended for a global audience, so it must effectively showcase the network and expansion capabilities.
            The design must accommodate both light and dark themes and support multiple languages to ensure accessibility and usability for a diverse global audience.
"
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            img8={img8}
            children1={"Visual design, Research, Design system, Branding"}
        >
        </ProjectTemplate>
    );
};

export default Project6;
