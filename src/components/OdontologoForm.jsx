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

  const [mensaje, setMensaje] = useState("");
  const [mensajeTipo, setMensajeTipo] = useState(""); 

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
      throw new Error('Error al guardar los datos del odontologo');
    }

    const result = await response.json();
    console.log('Odontologo guardado con éxito:', result);

    setMensaje("Odontólogo guardado con éxito!");
    setMensajeTipo("success");
    setOdontologo({ id: "", apellido: "", nombre: "", dni: "", fechaIngreso: "" }); 


    // Aquí puedes agregar lógica adicional, como limpiar el formulario o redirigir al usuario

  } catch (error) {
    console.error('Error en el envío del formulario:', error);

    setMensaje("No se pudo guardar el odontólogo. Inténtelo de nuevo.");
    setMensajeTipo("error");
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

      {/* Mostrar mensajes de éxito o error debajo del formulario */}
      {mensaje && (
        <div className={`message ${mensajeTipo}`}>
          {mensaje}
        </div>
      )}
      
    </div>
  );
};

export default PacienteForm;
