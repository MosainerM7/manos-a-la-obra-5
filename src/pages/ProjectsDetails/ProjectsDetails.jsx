import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectsId } from "../../hooks/fetchProjectsId";
import EpicsCard from "../../components/Epics/EpicsCard";
import Header from "../Header/Header";
import "./styles-ProjectDetails.scss";

export const ProjectsDetails = () => {
  const { projectId } = useParams();
  const { data: proyecto } = getProjectsId(projectId);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const handleBack = () => {
    window.history.back();
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Alternar el estado del menú
  };

  return (
    <div className={`project-details-container ${darkMode ? "dark" : ""}`}>
      <Header>

      </Header>


      <h1 className="project-title">Detalles del Proyecto</h1>
      <h2 className="project-description">
        {proyecto && proyecto.description}
      </h2>
      <EpicsCard proyecto={proyecto} />
    </div>
  );
};
