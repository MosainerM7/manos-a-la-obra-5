import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Inicializa el estado basado en la existencia del token
        return !!localStorage.getItem("token");
    });

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    };

    useEffect(() => {
        // Verificar el token cada vez que cambia
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);