import React from 'react';
import Login from './pages/Login.js'; 

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [productos, setProductos] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/S-FOR-YOU-NUTRITION/productos') // Ajusta la URL a tu endpoint real
//       .then(response => setProductos(response.data))
//       .catch(error => console.error('Error al obtener productos:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Lista de Productos</h1>
//       <ul>
//         {productos.map(producto => (
//           <li key={producto.id}>{producto.nombre}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


