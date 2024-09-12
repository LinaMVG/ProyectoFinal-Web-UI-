import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PatientForm from './components/PatientForm';
import OdontologoForm from './components/OdontologoForm';

import Layout from "./components/Layout";

function App() {

  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pacientes" element={<PatientForm />} />
      <Route path="/odontologo/registrar" element={<OdontologoForm />} />

    </Routes>
    </Layout>
    
  );
}

export default App
