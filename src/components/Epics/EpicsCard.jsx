import React from 'react';
import { Link, useParams } from "react-router-dom";
import { getEpics } from '../../hooks/fetchEpics';
import "../Epics/styles-Epics.scss";

export default function EpicsCard({ proyecto }) {
  const { projectId } = useParams();
  const { data: epics, loading: cargando } = getEpics(projectId);

  if (cargando) {
    return <div>Cargando...</div>; // Manejo de estado de carga
  }

  return (
    <div className="epic-card-container">
      <ul className="epic-list">
        {epics && epics.map((epic) => (
          <li key={epic._id} className="epic-item">
            <Link to={`/my-projects/${proyecto._id}/${epic._id}`} className="epic-card">
              {epic.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
