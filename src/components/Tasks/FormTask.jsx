// FormTask.js
import React from 'react';
import './styles-taskcards.scss';

export default function FormTask({ isEditing, taskData, handleChange, handleSubmit, handleCancel }) {
  return (
    <div className="edit-task-modal">
      <h2>{isEditing ? "Editar Tarea" : "Agregar Tarea"}</h2>
      <div className="input-group">
        <label htmlFor="task-name">Nombre:</label>
        <input
          id="task-name"
          type="text"
          name="name"
          value={taskData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="task-description">Descripción:</label>
        <textarea
          id="task-description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-group">
        <button onClick={handleSubmit}>{isEditing ? "Actualizar Tarea" : "Crear Tarea"}</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </div>
  );
}
