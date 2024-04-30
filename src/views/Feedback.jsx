// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\views\Feedback.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Feedback.css'

function Feedback({ initialData, setInitialData }) {
  const [feedbackData, setFeedbackData] = useState({
    referente: initialData && initialData.feedback ? initialData.feedback.referente : '',
    retorno: initialData && initialData.feedback ? initialData.feedback.retorno : ''
  });

  useEffect(() => {
    setInitialData({
      ...initialData,
      feedback: {
        referente: feedbackData.referente,
        retorno: feedbackData.retorno
      }
    });
  }, [feedbackData, setInitialData, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleMostrarSoloLocal = () => {
    console.log(`El valor Local del Formulario 
      es Referente = ${feedbackData.referente} 
      de Retorno = ${feedbackData.retorno}`);

    alert(`El valor Local del Formulario 
    es Referente = ${feedbackData.referente} 
    de Retorno = ${feedbackData.retorno}`);
  }

  return (
    <div className="myForm">
      <h3>Tu estás en el formulario de Feedback, ¡Disfrútalo!</h3>
      <br />
      <input type="text" className="input" name='referente' placeholder='Referente' value={feedbackData.referente} onChange={handleInputChange} />
      <input type="text" className="input" name='retorno' placeholder='Retorno' value={feedbackData.retorno} onChange={handleInputChange} />
      <br /><br />
      <button className='bpobtn' onClick={handleMostrarSoloLocal}>Mostrar Solo Local</button>
    </div>
  )
}

export default Feedback;
