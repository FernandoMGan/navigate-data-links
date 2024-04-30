// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './views/Navigator';
import Home from './views/Home';
import Products from './views/Products';
import Historys from './views/Historys';
import Feedback from './views/Feedback';
import Contacts from './views/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [initialData, setInitialData] = useState({
    products: { producto: 'Prod A', ubicacion: 'Prod B' },
    historys: { historia: 'Hist A', fecha: 'Hist B' },
    feedback: { referente: 'Feed A', retorno: 'Feed B' },
    contacts: { contacto: 'Contac A', telefono: 'Contac B' }
  });

  // Función para mostrar los datos iniciales
  const showDataLoguin = () => {
    const { products, historys, feedback, contacts } = initialData;
    alert(`Los Formularios estan con  ${initialData.products.producto !== 'x val act prod A' ? '( Valores Inciales ) ': '( Valores Modificados )'}    \n
      Products ->Prod:> ${products.producto}  ---  Ubic:> ${products.ubicacion} 
      Historys ->Hist:> ${historys.historia}  ---  Fech:> ${historys.fecha}  
      Feedback ->Feed:> ${feedback.referente}  ---  Ret :> ${feedback.retorno} 
      Contactos->Cont:> ${contacts.contacto}  ---  Tel :> ${contacts.telefono}
      `);
  };

  const testDataChange = () => {
    initialData.products.producto = 'x val act prod A';
    initialData.products.ubicacion = 'x val act prod B';

    initialData.historys.historia = 'x val act hist A ';
    initialData.historys.fecha = 'x val act hist B';

    initialData.feedback.referente = 'x val act feed A';
    initialData.feedback.retorno = 'x val act fedd B';

    initialData.contacts.contacto = 'x val act contac A';
    initialData.contacts.telefono = 'x val act contac B';
    showDataLoguin();
  }

  const handleSubmit = () => {

  }

  return (
    <Router>
      <div>
        <br /><br /><br /> <br /><br /><br />
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products initialData={initialData} setInitialData={setInitialData}/>} />
          <Route path="/historys" element={<Historys initialData={initialData} setInitialData={setInitialData}/>} /> 
          <Route path="/feedback" element={<Feedback initialData={initialData} setInitialData={setInitialData}/>} />
          <Route path="/contacts" element={<Contacts initialData={initialData} setInitialData={setInitialData}/>} /> 
        </Routes>
        <button className='bpobtn' onClick={showDataLoguin}>Mostrar Estado ( Valor Actual )</button>
        <button className='bpobtn' onClick={testDataChange}>( Cambio Previo Desde app.jsx ) y Mostrar </button>
      </div>
    </Router>
  );
}

export default App;
