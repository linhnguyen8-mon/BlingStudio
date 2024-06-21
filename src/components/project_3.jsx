// project_1.jsx
import React from "react";
import ProjectTemplate from "./project_template";
import img1 from "../assets/Passport.png";
import img2 from "../assets/education.png";
// import img3 from "../assets/kount03.png";

const Project3 = () => {
    return (
        <>
            <ProjectTemplate
                Headline="Others "
                desc1="Mobile application"
                pic5={img1}
                pic8={img2}
                // pic9={img3}
                height="1800px"
            />
        </>
    );
};

export default Project3;
