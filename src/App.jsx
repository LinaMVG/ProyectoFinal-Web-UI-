import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PatientForm from './components/PatientForm';
import OdontologoForm from './components/OdontologoForm';
import OdontologoListar from './components/OdontologoListar';
import OdontologoMod from './components/OdontologoModificar';
import OdontologoBuscar from './components/OdontologoBuscarId';

import Layout from "./components/Layout";

function App() {

  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pacientes" element={<PatientForm />} />
      <Route path="/odontologo/registrar" element={<OdontologoForm />} />
      {/* <Route path="/odontologo/listar" element={<OdontologoListar />} /> */}
      <Route path="/odontologo/mod" element={<OdontologoMod />} />
      <Route path="/odontologo/buscar" element={<OdontologoBuscar />} />


    </Routes>
    </Layout>
    
  );
}

export default App
