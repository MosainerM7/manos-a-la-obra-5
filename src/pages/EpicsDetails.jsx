import React, { useState } from 'react';
import StoryCard from "../components/Stories/StoryCard";
import { getEpicsId } from '../hooks/fetchEpicsId';
import { useParams, Link } from "react-router-dom";
import "../styles/styles-EpicDetails.scss";

export const EpicsDetails = () => {
  const { epicId } = useParams();
  const { data: epica } = getEpicsId(epicId);
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
    <div className={`epics-details-container ${darkMode ? "dark" : ""}`}>
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

      <h1 className="epic-title">Detalles Épicas</h1>
      <h2 className="epic-description">{epica && epica.description}</h2>
      <StoryCard epica={epica} />
    </div>
  );
};
