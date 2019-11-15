import React, { useState } from "react";

const NuevoProducto = ({
  AgregarNuevoProducto,
  validarFormulario,
  error,
  history
}) => {
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState("");

  const guardarProductoSubmit = e => {
    e.preventDefault();

    if (nombre.trim() === "" || (!isNaN(precio) && precio === "")) {
      validarFormulario(true);
      return;
    }
    validarFormulario(false);
    AgregarNuevoProducto({ nombre, precio });
    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              Agregar Nuevo Libro
            </h2>
            <form onSubmit={guardarProductoSubmit}>
              <div className="form-group">
                <label>Nombre Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Libro"
                  name="nombre"
                  onChange={({ target }) => guardarNombre(target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Libro</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Libro"
                  name="precio"
                  onChange={({ target }) => guardarPrecio(target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                Todos los campos son obligatorios
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
