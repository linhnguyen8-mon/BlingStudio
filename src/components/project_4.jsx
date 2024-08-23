import React from "react";
import ProjectTemplate from "./project_template";
import thumbnail from '../assets/screen/Transportation.png';
import img1 from '../assets/screen/concept_01.png'
import img2 from '../assets/screen/concept_02.png'
import img3 from '../assets/screen/concept_03.png'
import img4 from '../assets/screen/concept_04.png'
import img5 from '../assets/screen/concept_05.png'
import img6 from '../assets/screen/concept_06.png'
import img7 from '../assets/screen/concept_07.png'
import img8 from '../assets/screen/concept_08.png'

import vid1 from '../assets/lottiefiles/bus.json'; // Lottie JSON animation file
import vid2 from '../assets/lottiefiles/eng.json'; // Lottie JSON animation file
import vid3 from '../assets/lottiefiles/kid.json'; // Lottie JSON animation file
import Lottie from 'lottie-react'; // Default import for Lottie
const Project4 = () => {
    return (
        <ProjectTemplate
            project="Concept"
            thumbnail={thumbnail}
            Month="Month"
            Year="2022"
            nametag="mobile"
            themeColor="bg-gradient-to-r from-emerald-900 to-cyan-900"
            buttonColor="bg-blue-500"
            contentAbout="Personal Project | Designed to highlight my expertise in UI/UX design and web development."
            timeline="2022 - 2023"
            check1="Developed multiple styles and categories to ensure diverse and flexible design options."
            check2="Focused on making it more interesting and visually pleasing."
            check3=""
            contentOverview="To explore different concepts, I concentrated on 2-3 screens, experimenting with various styles."
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            img6={img6}
            img7={img7}
            img8={img8}
            children1="Visual design"
        >
            <div className="rounded-xl overflow-hidden">
                <Lottie animationData={vid1} loop={true} autoplay={true} />
            </div>
            <div className="mt-1 mb-6"> I take inspiration from Bus Map. I aimed to create it more engaging and visually pleasing.
            </div>
            <div className="rounded-xl overflow-hidden">
                <Lottie animationData={vid2} loop={true} autoplay={true} />
            </div>
            <div className="mt-1 mb-6"> Personally, I experimented with bunch of English studying apps. I try to make it monotone to minimize  distractions in learning process.
            </div>
            <div className="rounded-xl overflow-hidden">
                <Lottie animationData={vid3} loop={true} autoplay={true} />
            </div>
            <div className="mt-1 mb-6"> For kid section, I choose for more vibrant and playful design to make it engaging and appealing to young users.
            </div>
        </ProjectTemplate>
    );
};

export default Project4;
