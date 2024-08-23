import React from "react";
import { Route, Routes } from "react-router-dom";
import Project1 from "../components/project_1";
import Project2 from "../components/project_2";
import Project3 from "../components/project_3";
import Project4 from "../components/project_4.jsx";
import Project5 from "../components/project_5.jsx";
import Project6 from "../components/project_6.jsx";

const ProjectPage = () => {
    return (
        <Routes>
            <Route path="1" element={<Project1 />} />
            <Route path="2" element={<Project2 />} />
            <Route path="3" element={<Project3 />} />
            <Route path="4" element={<Project4 />} />
            <Route path="5" element={<Project5 />} />
            <Route path="6" element={<Project6 />} />
        </Routes>
    );
};

export default ProjectPage;
