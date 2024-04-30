// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Navigator.jxs

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
  // Define el estado local para almacenar los datos
  return (
    <>
      <div className="btnshome">
        <Link to="/" className='navLinks'>Home</Link>
        <Link to="/products" className='navLinks'>Products</Link>
        <Link to="/historys" className='navLinks'>Historys</Link>
        <Link to="/feedback" className='navLinks'>Feedback</Link>
        <Link to="/contacts" className='navLinks'>Contacts</Link>
      </div>
    </>
  );
}

export default Navigator;
