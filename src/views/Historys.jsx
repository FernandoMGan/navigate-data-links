// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Historys.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Historys.css';

function Historys({ initialData, setInitialData }) {
  const [historyData, setHistoryData] = useState({
    historia: initialData && initialData.historys ? initialData.historys.historia : '',
    fecha: initialData && initialData.historys ? initialData.historys.fecha : ''
  });

  useEffect(() => {
    setInitialData({
      ...initialData,
      historys: {
        historia: historyData.historia,
        fecha: historyData.fecha
      }
    });
  }, [historyData, setInitialData, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHistoryData({ ...historyData, [name]: value });
  };

  const handleBeforeExit = (e) => {
    // Aquí actualizas los datos iniciales en App.jsx usando setInitialData
    setInitialData({
      ...initialData,
      historys: {
        historia: historyData.historia,
        fecha: historyData.fecha
      }
    });
  };

  const handleMostrarSoloLocal = (e) => {
    console.log(`El valor Local del Formulario 
      es Producto = ${historyData.historia} 
      de ubicacion = ${historyData.fecha}`);

    alert(`El valor Local del Formulario 
    es Producto = ${historyData.historia} 
    de ubicacion = ${historyData.fecha}`);
  }

  return (
    <div className="myForm">
      <h3>Tu estás en el formulario de Historia, ¡Disfrútalo!</h3>
      <br />
      <input type="text" className="input" name='historia' placeholder='Historia' value={historyData.historia} onChange={handleInputChange} />
      <input type="text" className="input" name='fecha' placeholder='Fecha' value={historyData.fecha} onChange={handleInputChange} />
      <br /><br />
      <button className='bpobtn' onClick={handleMostrarSoloLocal}>Mostrar Solo Local</button>
    </div>
  );
}

export default Historys;
