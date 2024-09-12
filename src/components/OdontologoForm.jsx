import React, { useState } from "react";
import "./PatientForm.css";


const PacienteForm = () => {
  const [odontologo, setOdontologo] = useState({
    id: "",
    apellido: "",
    nombre: "",
    dni: "",
    fechaIngreso: "",
  });


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOdontologo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8080/odontologo/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(odontologo), // Enviar los datos en formato JSON
    });

    if (!response.ok) {
      throw new Error('Error al guardar los datos del paciente');
    }

    const result = await response.json();
    console.log('Odontologo guardado con éxito:', result);

    // Aquí puedes agregar lógica adicional, como limpiar el formulario o redirigir al usuario

  } catch (error) {
    console.error('Error en el envío del formulario:', error);
  }
};

  return (
    <div className="form-container">
      <h2>Registrar Odontologo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={odontologo.apellido}
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
            value={odontologo.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="noMatricula">noMatricula:</label>
          <input
            type="integer"
            id="noMatricula"
            name="noMatricula"
            value={odontologo.noMatricula}
            onChange={handleChange}
            required
          />
        </div>
     
        <button type="submit" className="btn-submit">
          Guardar Odontologo
        </button>
      </form>
    </div>
  );
};

export default PacienteForm;
