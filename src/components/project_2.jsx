// project_1.jsx
import React from "react";
import ProjectTemplate from "./project_template";
import TC1 from "../assets/TC_01.png";
import TC2 from "../assets/TC_02.png";
import TC3 from "../assets/TC_03.png";
import TC4 from "../assets/TC_04.png";
import TC5 from "../assets/TC_05.png";
import TC6 from "../assets/TC_06.png";
import TC7 from "../assets/TC_07.png";
import TC8 from "../assets/TC_08.png";
import TC9 from "../assets/TC_09.png";
const Project2 = () => {
    return (
        <div className="bg-[#4566A5]">
            <ProjectTemplate
                Headline="Tech"
                className="text-white"
                desc1="Mobile application"
                background="from-[#4566A5] to-white-alpha"
                pic1={TC1}
                pic2={TC2}
                pic3={TC3}
                pic4={TC4}
                pic5={TC5}
                pic6={TC6}
                pic7={TC7}
                pic8={TC8}
                pic9={TC9}
            />
        </div>
    );
};

export default Project2;
