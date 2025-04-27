import React from 'react';
import '../style/register.css';  // Asegúrate de tener este CSS


function LoginCliente() {
  return (
    <div>
      {/* Menú horizontal */}
      <nav className="menu-cliente">
        <div className="contenido-cliente">
          <div className="logo">
            <h2>STAY FIT</h2>
          </div>
          <ul className="menu-links">
            <li><a href="#">Productos</a></li>
            <li><a href="#">Mis Compras</a></li>
            <li><a href="#">Mi Cuenta</a></li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="contenido-principal">
        <h1>Bienvenido Cliente</h1>
        <p>Explora nuestros batidos saludables, revisa tus pedidos y actualiza tu cuenta.</p>
      </div>
    </div>
  );
}

export default LoginCliente;
