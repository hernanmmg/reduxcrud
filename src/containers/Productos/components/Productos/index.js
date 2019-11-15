import React, { useEffect, useState } from "react";
import Producto from "../Producto";

const Productos = ({
  cargarProductos,
  productos,
  error,
  loading,
  borrarProductoAction
}) => {
  const [productoNuevos, setProductos] = useState([]);

  useEffect(() => {
    const x = async () => {
      await cargarProductos();
      setProductos(productos);
    };
    x();
  }, [cargarProductos, productos.length, productoNuevos]);

  return (
    <React.Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error...
        </div>
      ) : null}

      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productoNuevos.map(producto => (
            <Producto
              key={producto.id}
              producto={producto}
              borrarProducto={borrarProductoAction}
            />
          ))}
        </tbody>
      </table>
      {loading ? "Cargando..." : null}
    </React.Fragment>
  );
};

export default Productos;
