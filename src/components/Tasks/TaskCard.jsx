import React, { useState } from 'react';
import { getTasks } from '../../hooks/fetchTasks';
import { useParams } from "react-router-dom";
import FormTask from './FormTask';
import TaskItem from './TaskItem';
import './styles-taskcards.scss';
import { URL } from '../../Constantes/consts';

export default function TaskCard() {
  const { storyId } = useParams();
  const { data: tasks, loading: cargando, refetch } = getTasks(storyId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    story: storyId,
    done: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setTaskData(task);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleDelete = async (taskId) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      try {
        const response = await fetch(`${URL}/tasks/${taskId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            auth: localStorage.getItem('token')
          },
        });
        
        if (!response.ok) throw new Error('Error al eliminar la tarea');
        
        await refetch();
      } catch (error) {
        console.error('Error:', error);
        alert('Hubo un error al eliminar la tarea');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (taskData.description && taskData.description.length < 10) {
      alert('La descripción debe tener al menos 10 caracteres');
      return;
    }

    try {
      const url = isEditing ? `${URL}/tasks/${selectedTask._id}` : `${URL}/tasks`;
      const method = isEditing ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          auth: localStorage.getItem('token')
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) throw new Error(`Error al ${isEditing ? 'actualizar' : 'crear'} la tarea`);

      await refetch();
      closeModal();
    } catch (error) {
      console.error('Error:', error);
      alert(`Hubo un error al ${isEditing ? 'actualizar' : 'crear'} la tarea`);
    }
  };

  const openModal = () => {
    setTaskData({ name: '', description: '', story: storyId, done: false });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setSelectedTask(null);
    setTaskData({ name: '', description: '', story: storyId, done: false });
  };

  if (cargando) {
    return (
      <div className="task-loading">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="tasks-container">
      <div className="project-tasks">
        {tasks && tasks.map((task) => (
          <TaskItem 
            key={task._id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <div className="add-task-container">
        <button 
          className="add-task-button"
          onClick={openModal}
        >
          Agregar Tarea
        </button>
      </div>

      {isModalOpen && (
        <FormTask
          isEditing={isEditing}
          taskData={taskData}
          handleChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleCancel={closeModal}
        />
      )}
    </div>
  );
}
