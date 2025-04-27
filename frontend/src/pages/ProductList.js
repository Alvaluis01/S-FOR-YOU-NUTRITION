import React, { useEffect, useState } from 'react';

function ProductList() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/productos')  // Cambia localhost por tu dominio si es remoto
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Imprime la respuesta para depurar
        setProductos(data);
      })
      .catch((error) => console.error('Error:', error));
  }, []);
  

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.length === 0 ? (
          <p>No hay productos disponibles.</p>
        ) : (
          productos.map((producto) => (
            <li key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>${producto.precio}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductList;
