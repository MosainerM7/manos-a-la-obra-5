import React, { useState } from 'react';
import { getStoriesId } from '../../hooks/fetchStoriesId';
import { useParams, Link } from "react-router-dom";
import TaskCard from '../../components/Tasks/TaskCard';
import "./styles-StoriesDetails.scss"
import Header from '../Header';

export const StoriesDetails = () => {
  const { storyId } = useParams();
  const { data: story } = getStoriesId(storyId);
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
    <div className={`stories-details-container ${darkMode ? "dark" : ""}`}>
      <Header>
          
      </Header>

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

      <h1 className="story-title">Detalles de las Historias</h1>
      <h2 className="story-description">{story && story.description}</h2>
      <TaskCard />
      
    </div>
  );
};


