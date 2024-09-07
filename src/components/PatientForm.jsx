import React, { useState } from "react";
import "./PatientForm.css";


const PacienteForm = () => {
  const [paciente, setPaciente] = useState({
    id: "",
    apellido: "",
    nombre: "",
    dni: "",
    fechaIngreso: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqgregarbla lógica para enviar los datos al backend
    console.log(paciente);
  };

  return (
    <div className="form-container">
      <h2>Registrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={paciente.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={paciente.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={paciente.dni}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaIngreso">Fecha de Ingreso:</label>
          <input
            type="date"
            id="fechaIngreso"
            name="fechaIngreso"
            value={paciente.fechaIngreso}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Guardar Paciente
        </button>
      </form>
    </div>
  );
};

export default PacienteForm;
