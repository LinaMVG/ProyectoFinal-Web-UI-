import React, { useState } from "react";
import "./PatientForm.css";

const BuscarOdontologo = () => {
  const [id, setId] = useState(""); // Estado para almacenar el ID ingresado
  const [odontologo, setOdontologo] = useState(null); // Estado para almacenar el odontólogo encontrado
  const [loading, setLoading] = useState(false); // Estado para manejar el loading
  const [error, setError] = useState(null); // Estado para manejar errores

  // Manejar el cambio en el campo de búsqueda por ID
  const handleChange = (e) => {
    setId(e.target.value);
  };

  // Buscar odontólogo por ID
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8080/odontologo/buscar/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al buscar el odontólogo");
      }

      const result = await response.json();
      setOdontologo(result); // Guardar el odontólogo encontrado
      console.log("Odontólogo encontrado:", result);
    } catch (error) {
      console.error("Error en la búsqueda del odontólogo:", error);
      setError("No se encontró el odontólogo con el ID especificado.");
    } finally {
      setLoading(false);
    }
  };

  // Eliminar odontólogo
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/odontologo/eliminar/${odontologo.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el odontólogo");
      }

      console.log("Odontólogo eliminado con éxito");
      setOdontologo(null); // Limpiar el odontólogo eliminado
    } catch (error) {
      console.error("Error en la eliminación del odontólogo:", error);
    }
  };

  return (
    <div>
      <h2>Buscar Odontólogo por ID</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="id">ID del Odontólogo:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Buscar
        </button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Mostrar los datos del odontólogo encontrado en una tabla */}
      {odontologo && (
        <table className="odontologo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Número Matrícula</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{odontologo.id}</td>
              <td>{odontologo.apellido}</td>
              <td>{odontologo.nombre}</td>
              <td>{odontologo.noMatricula}</td>
              <td>
                <button className="btn-delete" onClick={handleDelete}>
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BuscarOdontologo;
