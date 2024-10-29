import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "../styles/styles-Home.scss"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      <h1>Bienvenido :)</h1>
      <p>Haga click en Login para iniciar sesión</p>
      <p>Esto es una etapa de prueba, no entiendo ni el 70% del código</p>
      <div className="buttons">
        <Link to="/login">
        <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
