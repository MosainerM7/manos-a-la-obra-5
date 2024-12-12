  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { useAuth } from '../../auth/AuthProvider'; // Contexto de autenticación
  import { URL } from '../../Constantes/consts'; // URL base
  import './styles-Login.scss';
  import Header from '../Header/Header'; // Componente del header

  const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); // Obtiene la función `login` del contexto
    const [credentials, setCredentials] = useState({
      username: '',
      password: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Nuevo estado para manejar el estado de carga

    // Maneja los cambios en los campos de entrada
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCredentials((prev) => ({
        ...prev,
        [name]: value,
      }));
      setError(''); // Limpia el mensaje de error al cambiar los valores
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
      e.preventDefault();

      // Validación simple: verifica que los campos no estén vacíos
      if (!credentials.username || !credentials.password) {
        setError('Por favor completa todos los campos.');
        return;
      }

      setIsLoading(true); // Activa el estado de carga

      try {
        const response = await fetch(`${URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if (response.ok && data.token) {
          // Guarda el token en el localStorage
          localStorage.setItem('token', data.token);
          login(); // Actualiza el estado de autenticación en el contexto
          navigate('/my-projects'); // Redirige a la página de proyectos
        } else {
          setError(data.message || 'Credenciales incorrectas.');
        }
      } catch (error) {
        setError('Ocurrió un error, por favor intenta nuevamente.');
      } finally {
        setIsLoading(false); // Desactiva el estado de carga
      }
    };

    return (
      <div>
        {/* Componente Header */}
        <Header />

        <div className="login-container">
          <h2 className="title">Iniciar Sesión</h2>

          <form onSubmit={handleSubmit}>
            {/* Campo de Usuario */}
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
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

            {/* Campo de Contraseña */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
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

            {/* Mensaje de error */}
            {error && <p className="error-message">{error}</p>}

            {/* Botón de envío */}
            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Login;


  //llamar al projects

  //Desarrollar el logout

  //Todavia no hice el logout