// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Products.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

function Products({ initialData, setInitialData }) {
  const [productData, setProductData] = useState({
    producto: initialData && initialData.products ? initialData.products.producto : '',
    ubicacion: initialData && initialData.products ? initialData.products.ubicacion : ''
  });

  useEffect(() => {
    // Actualizar initialData cuando productData cambie
    setInitialData({
      ...initialData,
      products: {
        producto: productData.producto,
        ubicacion: productData.ubicacion
      }
    });
  }, [productData, setInitialData, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleBeforeExit = (e) => {
    // Aquí actualizas los datos iniciales en App.jsx usando setInitialData
    setInitialData({
      ...initialData,
      products: {
        producto: productData.producto,
        ubicacion: productData.ubicacion
      }
    });
  };

  const handleMostrarSoloLocal = (e) => {
    console.log(`El valor Local del Formulario 
      es Producto = ${productData.producto} 
      de ubicacion = ${productData.ubicacion}`);

    alert(`El valor Local del Formulario 
    es Producto = ${productData.producto} 
    de ubicacion = ${productData.ubicacion}`);
  }

  return (
    <div className="myForm">
      <h3>Tu estás en el formulario de Productos, ¡Disfrútalo!</h3>
      <br />
      <input type="text" className="input" name='producto' placeholder='Producto' value={productData.producto} onChange={handleInputChange} />
      <input type="text" className="input" name='ubicacion' placeholder='Ubicación' value={productData.ubicacion} onChange={handleInputChange} />
      <br /><br />
      <button className='bpobtn' onClick={handleMostrarSoloLocal}>Mostrar Solo Local</button>
    </div>
  );
}


export default Products;