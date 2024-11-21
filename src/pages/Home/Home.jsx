import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'; // Importa el Header
import "./styles-Home.scss";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };  

  return (
    <div className="container">
      <Header /> {/* Inserta el Header aquí */}
      <div className="main-content"> {/* Contenedor para el contenido principal */}
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
