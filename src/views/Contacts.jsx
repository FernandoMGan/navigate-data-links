// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Contacts.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css'

function Contacts({ initialData, setInitialData }) {
  const [contactData, setContactData] = useState({
    contacto: initialData && initialData.contacts ? initialData.contacts.contacto : '',
    telefono: initialData && initialData.contacts ? initialData.contacts.telefono : ''
  });

  useEffect(() => {
    setInitialData({
      ...initialData,
      contacts: {
        contacto: contactData.contacto,
        telefono: contactData.telefono
      }
    });
  }, [contactData, setInitialData, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleMostrarSoloLocal = () => {
    console.log(`El valor Local del Formulario 
      es Contacto = ${contactData.contacto} 
      de Teléfono = ${contactData.telefono}`);

    alert(`El valor Local del Formulario 
    es Contacto = ${contactData.contacto} 
    de Teléfono = ${contactData.telefono}`);
  }

  return (
    <div className="myForm">
      <h3>Tu estás en el formulario de Contacts, ¡Disfrútalo!</h3>
      <br />
      <input type="text" className="input" name='contacto' placeholder='Contacto' value={contactData.contacto} onChange={handleInputChange} />
      <input type="text" className="input" name='telefono' placeholder='Telefono' value={contactData.telefono} onChange={handleInputChange} />
      <br /><br />
      <button className='bpobtn' onClick={handleMostrarSoloLocal}>Mostrar Solo Local</button>
    </div>
  )
}

export default Contacts;
