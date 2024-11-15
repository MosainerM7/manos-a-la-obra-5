import React, { useState } from 'react';
import StoryCard from "../../components/Stories/StoryCard";
import { getEpicsId } from '../../hooks/fetchEpicsId';
import { useParams, Link } from "react-router-dom";
import "./styles-EpicDetails.scss";
import Header from '../Header/Header';

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
      <Header>
        
      </Header>
      <h1 className="epic-title">Detalles Épicas</h1>
      <h2 className="epic-description">{epica && epica.description}</h2>
      <StoryCard epica={epica} />
    </div>
  );
};
