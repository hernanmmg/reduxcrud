import React, { Fragment, useEffect, useRef, useState } from "react";

const EditarProducto = ({
  history,
  match,
  producto,
  obtenerProductoEditar,
  editarProductoAction,
  error
}) => {
  const nombreRef = useRef("");
  const precioRef = useRef("");
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const { id } = match.params;

  useEffect(() => {
    const o = async () => {
      await obtenerProductoEditar(id);
    };
    o();
    setNombre(producto.nombre);
    setPrecio(producto.precio);
  }, [obtenerProductoEditar, id, producto.nombre, producto.precio]);

  const editarProducto = e => {
    e.preventDefault();

    if (
      nombreRef.current.value.trim() === "" ||
      precioRef.current.value.trim() === ""
    ) {
      return;
    }

    editarProductoAction({
      id,
      nombre: nombreRef.current.value,
      precio: precioRef.current.value
    });
    history.push("/");
  };

  if (Object.keys(producto).length === 0) return "Cargando...";

  return (
    <Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error, intenta de nuevo
        </div>
      ) : (
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center">Editar Producto</h2>
                <form onSubmit={editarProducto}>
                  <div className="form-group">
                    <label>Titulo</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Titulo"
                      defaultValue={nombre}
                      ref={nombreRef}
                    />
                  </div>
                  <div className="form-group">
                    <label>Precio del Producto</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Precio"
                      defaultValue={precio}
                      ref={precioRef}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                  >
                    Guardar Cambios
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default EditarProducto;
