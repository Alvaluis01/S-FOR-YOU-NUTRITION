import React from 'react';
import { Link } from 'react-router-dom';
import '../style/register.css';  // 👈 importa el CSS

function Menu() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/acerca">Acerca</Link>
      <Link to="/contacto">Contactanos</Link>
      <Link to="/ubicacion">Ubicación</Link>
    </nav>
  );
}

export default Menu;
