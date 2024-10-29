import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectsId } from "../hooks/fetchProjectsId";
import EpicsCard from "../components/Epics/EpicsCard";
import "../styles/styles-ProjectDetails.scss";
import { Link } from "react-router-dom";

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
      <header className="header">
        <div className="menu-container">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <button className="back-button" onClick={handleBack}>
            Volver
          </button>
        </div>
        <button className="mode-button" onClick={toggleDarkMode}>
          {darkMode ? "White" : "Black"}
        </button>
      </header>

      {menuOpen && (
        <div className="hamburger-menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Settings</Link>
            </li>
            {/* Agrega más enlaces según lo necesites */}
          </ul>
        </div>
      )}

      <h1 className="project-title">Detalles del proyecto</h1>
      <h2 className="project-description">
        {proyecto && proyecto.description}
      </h2>
      <EpicsCard proyecto={proyecto} />
    </div>
  );
};
