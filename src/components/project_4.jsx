// project_1.jsx
import React from "react";
import ProjectTemplate from "./project_template";
import img_2 from "../assets/img_10.png";
import img_3 from "../assets/img_07.png";
import img_4 from "../assets/img_08.png";
import img_5 from "../assets/img_05.png";
import img_6 from "../assets/img_09.png";
import img_7 from "../assets/img_02.png";
import img_8 from "../assets/img_03.png";
import img_9 from "../assets/img_06.png";
const Project4 = () => {
    return (
        <>
            <ProjectTemplate
                Headline="Others"
                desc="Some UI concepts I worked on"
                desc1="Mobile application"
                height="300px"
                pic2={img_2}
                pic3={img_3}
                pic4={img_4}
                pic5={img_5}
                pic6={img_6}
                pic7={img_7}
                pic8={img_8}
                pic9={img_9}
            />
        </>
    );
};

export default Project4;
