import React from 'react';
import { getTasks } from '../../hooks/fetchTasks';
import { useParams } from "react-router-dom";
import './styles-taskcards.scss'; // Asegúrate de importar el SCSS

export default function TaskCard() {
  const { proyectoId, epicId, storyId } = useParams();
  const { data: tasks, loading: cargando } = getTasks(storyId);

  console.log("como tan muchacho", tasks);
  
  return (
    <div className="task-card-container">
      <ul className="task-list">
        {tasks && tasks.map((task) => 
          <li className="task-item" key={task._id}>
            {task.name}
          </li>
        )}
      </ul>
    </div>
  );
}
