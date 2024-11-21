import React, { useState } from 'react';
import { getStoriesId } from '../../hooks/fetchStoriesId';
import { useParams, Link } from "react-router-dom";
import TaskCard from '../../components/Tasks/TaskCard';
import "./styles-StoriesDetails.scss";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export const StoriesDetails = () => {
  const { storyId } = useParams();
  const { data: story } = getStoriesId(storyId);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`stories-details-container ${darkMode ? "dark" : ""}`}>

      <div className="content-center">
      <Header />
        <h1 className="story-title">Detalles de las Historias</h1>
        <h2 className="story-description">{story && story.description}</h2>
        <TaskCard />
        <Footer /> {/* Footer al final de la página */}

      </div>
    </div>
  );
};
