import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Main from './pages/Productos';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Ubicacion from './pages/Ubicacion';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ubicacion" element={<Ubicacion />} />
      </Routes>
    </Router>
  );
}

export default App;

