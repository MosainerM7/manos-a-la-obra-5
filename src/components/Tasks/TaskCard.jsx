import React from 'react'
import { getTasks } from '../../hooks/fetchTasks';
import { useParams } from "react-router-dom";

export default function TaskCard() {
  const {proyectoId,epicId,storyId} = useParams()
  const { data: tasks, loading: cargando } = getTasks(storyId);
  console.log("como tan muchacho",tasks);
  return (
    <div>
        <ul>
        {tasks && tasks.map((task) => 
        <li key={task._id}>{task.name}</li>)}
        </ul>
    </div>
  )
}
