// project_1.jsx
import React from "react";
import ProjectTemplate from "./project_template";
import CW1 from "../assets/CW_1.png";
import CW2 from "../assets/CW_2.png";
import CW3 from "../assets/CW_03.png";
import CW4 from "../assets/CW_04.png";
import CW5 from "../assets/CW_05.png";
import CW6 from "../assets/CW_06.png";
import CW7 from "../assets/CW_07.png";
import CW8 from "../assets/CW_08.png";
import CW9 from "../assets/CW_09.png";
const Project1 = () => {
    return (
        <div>
            <ProjectTemplate
                Headline="CoWorking Space"
                desc1="Mobile application"
                background="from-background to-white-alpha"
                pic1={CW1}
                pic2={CW2}
                pic3={CW3}
                pic4={CW4}
                pic5={CW5}
                pic6={CW6}
                pic7={CW7}
                pic8={CW8}
                pic9={CW9}
            />
        </div>
    );
};

export default Project1;
