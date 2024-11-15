import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles-Header.scss";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="menu-container">
        {/* Flecha para regresar */}
        <button className="back-button" onClick={handleBack}>←</button>
        {/* Menú hamburguesa */}
        <button className="hamburger" onClick={toggleMenu}>☰</button>
      </div>

      <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/logout">Cerrar Sesión</Link></li>
        </ul>
      </div>
    </header>
  );
}
