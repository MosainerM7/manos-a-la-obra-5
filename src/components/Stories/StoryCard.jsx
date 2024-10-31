import React from 'react';
import { getStoriesId } from '../../hooks/fetchStories';
import { Link, useParams } from "react-router-dom";
import "../Stories/styles-cards.scss"; // Asegúrate de incluir el archivo SCSS

export default function StoryCard() {
  const { epicId, proyectoId } = useParams();
  const { data: stories, loading: cargando } = getStoriesId(epicId);

  if (cargando) {
    return <div>Cargando...</div>; // Manejo de estado de carga
  }

  return (
    <div className="story-card-container">
      <ul className="story-list">
        {stories && stories.map((story) => (
          <li key={story._id} className="story-item">
            <Link to={`/my-projects/${proyectoId}/${epicId}/${story._id}`}>
              {story.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
