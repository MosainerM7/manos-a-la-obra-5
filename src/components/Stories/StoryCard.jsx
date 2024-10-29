import React from 'react'
import { getStoriesId } from '../../hooks/fetchStories'
import { Link, useParams } from "react-router-dom";


export default function StoryCard() {
  const {epicId, proyectoId} = useParams()
  const { data: stories, loading: cargando } = getStoriesId(epicId);
  console.log("como tan muchacho",stories);
  return (
    <div>
        <ul>
        {stories && stories.map((story) => 
        <Link to={`/my-projects/${proyectoId}/${epicId}/${story._id}`}><li key={story._id}>{story.name}</li></Link>)}
        </ul>
    </div>
  )
}
