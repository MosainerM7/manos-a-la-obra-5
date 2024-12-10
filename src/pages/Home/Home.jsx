import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'; // Importa el Header
import "./styles-Home.scss";
import { useAuth } from '../../auth/AuthProvider';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };  

const isAuthenticated = useAuth();


  if (isAuthenticated)
  {
    return (
      <div className="container">
      <Header /> 
      <div className="main-content"> 
        <h1>Bienvenido :)</h1>
        <p>Estás logeado</p>
        <div className="buttons">
        </div>
      </div>
      </div>
    )
  }
  else
  { 
    return (
      <div className="container">
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
    )
  }
 

}
