import React from 'react'
import { getStoriesId } from '../hooks/fetchStoriesId';
import { useParams } from "react-router-dom";
import TaskCard from '../components/Tasks/TaskCard';
import "../styles/styles-StoriesDetails.scss"
export const StoriesDetails = () => {
    const {storyId} = useParams();
    const {data:story} = getStoriesId (storyId)
    console.log ('los muchacho', story)
    return (
      <div className="stories-details-container">
        <h1 className="story-title">Detalles de las Historias</h1>
        <h2 className="story-description">{story && story.description}</h2>
        <TaskCard />
      </div>
    );
    
}