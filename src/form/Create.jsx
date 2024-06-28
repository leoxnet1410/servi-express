import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export const Create = () => {
  const [isActive, setIsActive] = useState(false);

  const handleForgotPassword = () => {
    // Aquí puedes manejar la lógica para cuando se olvida la contraseña
    console.log('Olvidé mi contraseña');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className={`auth-container ${isActive ? 'active' : ''}`} id="auth-container">
        <div className="form-container sign-up">
          <form>
            <h1>Crea una cuenta</h1>
            <span>Usa tu correo electrónico para registrarte</span>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
            <input type="date" placeholder="Fecha de Nacimiento" />
            <input type="text" placeholder="Número de Carnet" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <div style={{ display: 'flex', alignItems: 'center' }}>
             
            </div>
            <button>Registrarse</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>
              Servi Express <FontAwesomeIcon icon={faScrewdriverWrench} className="rotating-icon" />
            </h1>
            <span>o usa tu correo electrónico y contraseña</span>
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button type="button" onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</button>
            <button>Iniciar sesión</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left ">
              <h1>¡Bienvenido de nuevo!</h1>
              <p>Ingresa tus datos personales para usar todas las funciones del sitio</p>
              <button className="hidden" onClick={() => setIsActive(false)}>Iniciar sesión</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Bienvenido</h1>
              <p>Regístrate con tus datos personales</p>
              <button className="hidden" onClick={() => setIsActive(true)}>Registrarse</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
