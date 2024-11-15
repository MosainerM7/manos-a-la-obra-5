    import React from "react";
    import { Link } from "react-router-dom";
    import "./styles-Footer.scss"; // Importa los estilos del footer
    

    export default function Footer() {
    return (
        <footer className="footer">
        <div className="footer-container">
            <Link to="/settings">
            <button className="settings-button">⚙️</button>
            </Link>
        </div>
        </footer>
    );
    };
