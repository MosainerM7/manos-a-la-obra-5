import React, { useState } from "react";
import { getProjects } from "../../hooks/fetchProjects";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles-Projects.scss";

export const Projects = () => {
  const { data: proyectos } = getProjects();
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú

  const handleBack = () => {
    navigate(-1);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Alternar el estado del menú
  };

  return (
    <div className={`projects-container ${darkMode ? "dark" : ""}`}>
      <Header>

      </Header>

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
    <Footer /> {/* Footer al final de la página */}
    </div>
  );
};
