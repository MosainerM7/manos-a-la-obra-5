import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUsers } from '../hooks/fetchUsers';
import { URL } from '../Constantes/consts';
import "../styles/styles-Login.scss"

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState(false);
  const { data: users, loading } = useGetUsers();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        navigate('/my-projects');
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  };

  if (loading) {
    return (
      <div>
        <div></div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2 className='title'>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='user' 
              htmlFor="username" 
            >
              Usuario
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Ingresa tu usuario"
              value={credentials.username}
              onChange={handleInputChange}
              required
             
            />
          </div>
          
          <div>
            <label className='password'
              htmlFor="password" 
             
            >
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={credentials.password}
              onChange={handleInputChange}
              required
    
            />
          </div>

          {error && (
            <p>
              Error:
            </p>
          )}

          <button 
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
