import React from 'react'
import {useNavigate} from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";


export default function Settings() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleClick = () => {
    logout();
    navigate("/login");
    localStorage.removeItem("token");
  }

  return (
    <div>
      <h1>Configuraciones</h1>
      <h2>Haga click aqui para cerrar sesion</h2>
      <button onClick={handleClick}>Cerrar Sesion</button>
    </div>
  );
}