import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider"; // Asegúrate de que el path sea correcto

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth(); // Suponiendo que tu contexto de autenticación tenga este estado

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />; // Redirige a Home si no está autenticado
};

export default ProtectedRoute;