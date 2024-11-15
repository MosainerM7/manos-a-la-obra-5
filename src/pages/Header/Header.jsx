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
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={`header ${menuOpen ? "menu-open" : ""}`}>
      <div className="menu-container">
        <button className="hamburger" onClick={toggleMenu}>☰</button>
        <button className="back-button" onClick={handleBack}>Volver</button>
      </div>

      {menuOpen && (
        <div className="hamburger-menu">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Settings</Link></li>
            <li><Link to="/logout">Cerrar Sesión</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
