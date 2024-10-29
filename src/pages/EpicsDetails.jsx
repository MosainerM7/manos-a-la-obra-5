  import React from 'react'
  import StoryCard from "../components/Stories/StoryCard";
  import { getEpicsId } from '../hooks/fetchEpicsId';
  import { useParams } from "react-router-dom";
  import "../styles/styles-EpicDetails.scss"
  export const EpicsDetails = () => {
      const {epicId} = useParams();
      const {data:epica} = getEpicsId (epicId)
      console.log ('los pibe', epica)
      return (
        <div className="epics-details-container">
          <h1 className="epic-title">Detalles Épicas</h1>
          <h2 className="epic-description">{epica && epica.description}</h2>
          <StoryCard epica={epica} />
        </div>
      );
      
  }
