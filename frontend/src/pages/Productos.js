import React, { useState, useEffect } from 'react';

function Productos() {
  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);

  
  useEffect(() => {
    // Realizar la solicitud a la API del backend
    fetch('http://localhost/public/obtenerProductos.php')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener productos');
        }
        return response.json();
    })
    .then(data => {
      console.log(data); // Verifica los datos que recibes
      if (data.message) {
          console.log(data.message); // Muestra el mensaje si no hay productos
      } else {
          // Aquí puedes manejar los productos
          console.log('Productos disponibles:', data);
          setProductos(data); // Actualiza el estado con los productos
      }
  })
  .catch(error => console.error('Error fetching products:', error));
  }, []); // El array vacío asegura que la solicitud se haga solo una vez cuando el componente se monta

  
  
  return (
    <div>
      <h1>Productos</h1>
      <div className="productos-lista">
      <ul id="productos-list"></ul>

        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.Id} className="producto">
              <h2>{producto.Nombre}</h2>
              <p>{producto.Descripcion}</p>
              <p>Precio: ${producto.Precio}</p>
              <p>Tamaño: {producto.Tamaño}g</p>
              <p>Calorías: {producto.Calorias}</p>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Productos;

