import React from 'react'
import { Link, useParams } from "react-router-dom";
import { getEpics } from '../../hooks/fetchEpics';

export default function EpicsCard({proyecto}) {
  const {projectId} = useParams()
  const { data: epics, loading: cargando } = getEpics(projectId);
  console.log(epics);
  return (

    <div>
        <ul>
        {epics && epics.map((epic) => 
        <Link to={`/my-projects/${proyecto._id}/${epic._id}`}><li key={epic._id}>{epic.name}</li></Link>)}
        </ul>
    </div>
    
  )
}
