import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles-Header.scss";
import { useAuth } from "../../auth/AuthProvider";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // Estado inicial: cerrado

  const { logout } = useAuth();

  const handleClick = () => {
    logout();
    navigate("/login");
    localStorage.removeItem("token");
  }

  const handleBack = () => {
    navigate(-1);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Alternar estado del menú
  };

  return (
    <header className="header">
      <div className="menu-container">
        {/* Botón de menú hamburguesa */}
        <button className="hamburger" onClick={toggleMenu}>☰</button>

        {/* Botón de regresar */}
        <button className="back-button" onClick={handleBack}>←</button>
      </div>

      {/* Menú hamburguesa desplegable */}
      <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li onClick={handleClick}>Cerrar Sesión</li>
          <li><Link to="/my-projects">Mis Proyectos</Link></li>
        </ul>
      </div>
    </header>
  );
}
