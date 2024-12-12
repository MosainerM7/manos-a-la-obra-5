import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import "./styles-Home.scss";
import { useAuth } from '../../auth/AuthProvider';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const token = localStorage.getItem("token");

  // Si no está autenticado, muestra pantalla de login
  if (!isAuthenticated || !token) {
    return (
      <div className="container">
        <Header /> 
        <div className="main-content"> 
          <h1>Bienvenido :)</h1>
          <p>Haga click en Login para iniciar sesión</p>
          <div className="buttons">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Si está autenticado, muestra opciones para ir a proyectos
  return (
    <div className="container">
      <Header /> 
      <div className="main-content"> 
        <h1>Bienvenido :)</h1>
        <p>Estás logeado</p>
        <div className="buttons">
          <Link to="/my-projects">
            <button>Ir a Mis Proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}