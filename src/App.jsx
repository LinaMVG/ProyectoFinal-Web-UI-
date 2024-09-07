import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import PatientForm from './components/PatientForm';

import Layout from "./components/Layout";

function App() {

  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pacientes" element={<PatientForm />} />

    </Routes>
    </Layout>
    
  );
}

export default App
