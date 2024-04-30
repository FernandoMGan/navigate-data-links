// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Home.jsx

// En Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home({ updateData }) {
  const handleSubmit = () => {
    // Aquí recolectas los nuevos datos y los pasas al Navigator
    const newData = {}/* Lógica para recolectar los nuevos datos */;
    updateData(newData);
    alert(`Form Home presionando boton de consultar, Rutina handleSubmit `, newData);
    console.log(`Form Home presionando boton de consultar, Rutina handleSubmit `, newData);
  };

  return (
    <div className="myForm">
      <h3>Este home está diseñado para que puedas entender React, ¡Disfrútalo!</h3>
      <br />
      <h6>Requisitos para poder usarlo:<br /> <br />
        Debes haber instalado Vite,
        ( npm i bootstrap ) ,
        ( npm i react-router-dom ) , 
        ( npm i react-hook-form)
      </h6>
      <br /><br />
      <h5><span>Full Stack Developer, <span style={{ color: 'green' }}>Fernando Martin Gan</span> ... Contacto <span style={{ color: 'green' }}>fmgsch@gmail.com</span></span></h5>
      <h6 style={{ color: 'blue' }}>lo puedes descargar de   --   GitHub  https://github.com/FernandoMGan/navigate-data-links</h6>
    </div>
  );
}

export default Home;
