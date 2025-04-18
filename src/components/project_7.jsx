import React from "react";
import ProjectTemplate from "./project_template";
import thumbnail from '../assets/screen/7_05.png';
import img1 from '../assets/screen/7_05.png';
import img2 from '../assets/screen/7_04.png';
import img3 from '../assets/screen/7_03.png';
import img4 from '../assets/screen/7_02.png';
import img5 from '../assets/screen/7_01.png';
import AboutThisProject from './project_content/about_this_project'
import { Visual, System, Research, Branding, Architecture, Skill } from './project_content/skill';
import Overview from './project_content/overview'

const Project7 = () => {
    return (
        <ProjectTemplate
            project="Edtech Webapp"
            thumbnail={thumbnail}
            Month="Sep"
            Year="2024"
            nametag="website | mobile"
            themeColor="bg-gradient-to-r to-green-900 from-green-950"
            buttonColor="bg-blue-500"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Client project"
                    Service="Edtech Webapp"
                    Client="Designed for individuals seeking to learn new skills and for co-creators who wish to share their expertise through interactive, community-driven learning experiences."
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
                    r1="Users feel overwhelmed when exploring new platforms	"
                    s1="Designed a minimal, friendly interface to reduce cognitive load. Used visual hierarchy and clear call-to-actions to improve task success."

                    r2="Lack of motivation to continue learning	"
                    s2="Introduced gamification elements such as progress tracking, levels, and badges to drive motivation and retention.
"
                    r3="Creators struggle to deliver engaging content	"
                    s3="Designed easy-to-use content creation tools with pre-made templates and intuitive UI, lowering the barrier for creators to contribute."
                />

            }
            timeline="Sep 2024 - 2025"
            check1="Conducted market research to understand both learner and creator needs, including interviews and persona development."

            check2="Designed responsive wireframes and high-fidelity UI for both web and mobile views, ensuring accessibility and ease of use."

            check3="Collaborated with developers, defined user flows, built the design system, and created interaction prototypes for key learning experiences."
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
            nextId="/projects/1"
            previousId="/projects/6"
        >
        </ProjectTemplate>
    );
};

export default Project7;
