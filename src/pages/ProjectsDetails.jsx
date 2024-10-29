import React from "react";
import { useParams } from "react-router-dom";
import { getProjectsId } from "../hooks/fetchProjectsId";
import EpicsCard from "../components/Epics/EpicsCard";
import "../styles/styles-ProjectDetails.scss"
export const ProjectsDetails = () => {
  const { projectId } = useParams();
  const { data: proyecto } = getProjectsId(projectId);
  console.log("los vago", proyecto);

  return (
    
    <div className="project-details-container">
      <h1 className="project-title">Detalles del proyecto</h1>
      <h2 className="project-description">
        {proyecto && proyecto.description}
      </h2>
      <EpicsCard proyecto={proyecto} />
    </div>
  );
};
