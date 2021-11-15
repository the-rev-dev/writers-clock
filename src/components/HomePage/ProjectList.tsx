import { useState } from "react";
import { useSelector } from "react-redux";
import { Project } from "../../models/project";
import { ProjectSlice } from "../../slices/projectSlice";

export const ProjectList = () => {

    const projects = useSelector((state: any) => state.project.projects);

    return (
        <div>
            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};
