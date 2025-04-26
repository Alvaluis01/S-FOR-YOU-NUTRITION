import React, { useState } from 'react';
import '../style/Login.css';
import logo from '../image/log.png';
import googleLogo from '../image/google.png';
import facebookLogo from '../image/facebook.png';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Usuario:', usuario);
    console.log('Contraseña:', contrasena);
    // Aquí conectarías al backend
  };

  return (
    <div className="login-page">
      <div className="top-section">
        <h1>STAY FIT</h1>
        <p>BATIDOS</p>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <div className="form-section">
        <h2>¡Conéctate!</h2>
        <p className="subtitle">Inicia sesión para continuar</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Usuario</label>
            <input
              type="text"
              placeholder="Juan Muñoz"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">Ingresar</button>
        </form>

        <div className="forgot-password">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>

        <div className="divider">
          <hr />
          <span>o</span>
          <hr />
        </div>

        <div className="social-login">
          <img src={googleLogo} alt="Google" />
          <img src={facebookLogo} alt="Facebook" />
        </div>

        <div className="register-link">
          <p>¿No tienes cuenta? <a href="#">Regístrate</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
