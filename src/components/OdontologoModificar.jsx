import React, { useState } from "react";
import "./PatientForm.css";

const PacienteForm = () => {
  const [odontologos, setOdontologos] = useState([]); // Estado para almacenar la lista de odontólogos
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores
  const [selectedOdontologo, setSelectedOdontologo] = useState(null); // Estado para almacenar el odontólogo seleccionado

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reiniciar el estado de error

    try {
      const response = await fetch('http://localhost:8080/odontologo/buscartodos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener la lista de odontólogos');
      }

      const result = await response.json();
      setOdontologos(result); // Guardar los odontólogos en el estado
      console.log('Odontólogos listados con éxito:', result);
    } catch (error) {
      console.error('Error en el envío del formulario:', error);
      setError('No se pudo cargar la lista de odontólogos.');
    } finally {
      setLoading(false); // Detener el loading
    }
  };

  // Manejar la selección del odontólogo
  const handleSelectOdontologo = (odontologo) => {
    setSelectedOdontologo(odontologo); // Almacenar el odontólogo seleccionado en el estado
  };

  // Manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedOdontologo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar los datos modificados
  const handleModifySubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/odontologo/modificar`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedOdontologo), // Enviar los datos en formato JSON
      });

      if (!response.ok) {
        throw new Error('Error al modificar los datos del odontólogo');
      }

      const result = await response.json();
      console.log('Odontólogo modificado con éxito:', result);

      // Aquí puedes agregar lógica adicional, como limpiar el formulario o redirigir al usuario
      setSelectedOdontologo(null); // Limpiar el odontólogo seleccionado
    } catch (error) {
      console.error('Error en la modificación del odontólogo:', error);
    }
  };

  return (
    <div>
      <h2>Listar Odontólogos</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn-submit">
          Mostrar Odontólogos
        </button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar la tabla de odontólogos */}
      {odontologos.length > 0 && (
        <table className="odontologo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Num Matrícula</th>
              <th>Acción</th> {/* Nueva columna para el botón */}
            </tr>
          </thead>
          <tbody>
            {odontologos.map((odontologo) => (
              <tr key={odontologo.id}>
                <td>{odontologo.id}</td>
                <td>{odontologo.apellido}</td>
                <td>{odontologo.nombre}</td>
                <td>{odontologo.matricula}</td>
                <td>
                  {/* Botón para seleccionar odontólogo */}
                  <button
                    className="btn-id"
                    onClick={() => handleSelectOdontologo(odontologo)}
                  >
                    Modificar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Mostrar el formulario de modificación si hay un odontólogo seleccionado */}
      {selectedOdontologo && (
        <div className="form-container">
          <h2>Modificar Odontólogo</h2>
          <form onSubmit={handleModifySubmit}>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={selectedOdontologo.apellido}
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
                value={selectedOdontologo.nombre}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="matricula">Num Matrícula:</label>
              <input
                type="text"
                id="matricula"
                name="matricula"
                value={selectedOdontologo.matricula}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Modificar Odontólogo
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PacienteForm;
