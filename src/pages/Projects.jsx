import React, { useState } from "react";
import { getProjects } from "../hooks/fetchProjects";
import { Link, useNavigate } from "react-router-dom";
import "../styles/styles-Projects.scss";

export const Projects = () => {
  const { data: proyectos } = getProjects();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className={`projects-container ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <div className="menu-container">
          <button className="hamburger">☰</button>
          <button className="back-button" onClick={handleBack}>Volver</button>
        </div>
        <button className="mode-button" onClick={toggleDarkMode}>
          {darkMode ? "White" : "Black"}
        </button>
      </header>

      <h1 className={darkMode ? "white-text" : ""}>Proyectos y Tareas</h1>
      <ul className="project-list">
        {proyectos && proyectos.map((proyecto) => (
          <Link to={`/my-projects/${proyecto._id}`} key={proyecto._id}>
            <li className={`project-item ${darkMode ? "white-text" : ""}`}>
              {proyecto.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
