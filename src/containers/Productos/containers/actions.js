import clienteAxios from "../../../config/axios";
import {
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITOSA,
  ELIMINAR_PRODUCTO
} from "./constants";

export const obtenerProductosAction = () => {
  return dispatch => {
    dispatch(obtenerProductosComienzo());
    clienteAxios
      .get("/libros")
      .then(respuesta => {
        dispatch(descargarProductosExitosa(respuesta.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(descargarProductosError());
      });
  };
};

export const borrarProductoAction = productoId => {
  return dispatch => {
    clienteAxios
      .delete(`/libros/${productoId}`)
      .then(respuesta => {
        if (respuesta.status === 200) {
          dispatch(borrarProducto(productoId));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const borrarProducto = productoId => ({
  type: ELIMINAR_PRODUCTO,
  productoId
});

export const obtenerProductosComienzo = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS
});

export const descargarProductosExitosa = productos => ({
  type: DESCARGA_PRODUCTOS_EXITOSA,
  productos
});

export const descargarProductosError = () => ({
  type: DESCARGA_PRODUCTOS_ERROR
});
