import React, { useState } from "react";
import "./PatientForm.css";

const PacienteForm = () => {
  const [odontologos, setOdontologos] = useState([]); // Estado para almacenar la lista de odontólogos
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

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
                  {/* Botón con el ID */}
                  <button
                    className="btn-id"
                    onClick={() => alert(`Odontólogo ID: ${odontologo.id}`)}
                  >
                    Mostrar ID
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PacienteForm;
