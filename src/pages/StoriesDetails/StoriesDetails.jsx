import React, { useState } from 'react';
import { getStoriesId } from '../../hooks/fetchStoriesId';
import { useParams, Link } from "react-router-dom";
import TaskCard from '../../components/Tasks/TaskCard';
import "./styles-StoriesDetails.scss";
import Header from '../Header/Header';

export const StoriesDetails = () => {
  const { storyId } = useParams();
  const { data: story } = getStoriesId(storyId);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`stories-details-container ${darkMode ? "dark" : ""}`}>
      <Header />


      <div className="content-center">
        <h1 className="story-title">Detalles de las Historias</h1>
        <h2 className="story-description">{story && story.description}</h2>
        <TaskCard />
      </div>
    </div>
  );
};
