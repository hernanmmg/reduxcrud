import Swal from "sweetalert2";
import clienteAxios from "../../../config/axios";
import {
  EDITAR_PRODUCTO_COMENZAR,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_EXITOSO,
  OBTENER_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EXITOSO
} from "./constants";

export function obtenerProductoEditar(proyectoId) {
  return dispatch => {
    clienteAxios
      .get(`/libros/${proyectoId}`)
      .then(respuesta => {
        if (respuesta.status === 200) {
          dispatch(obtenerProductoEditarSuccess(respuesta.data));
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(obtenerProductoEditarError());
      });
  };
}

export function editarProductoAction(producto) {
  return async dispatch => {
    await clienteAxios
      .put(`libros/${producto.id}`, producto)
      .then(respuesta => {
        if (respuesta.status === 201) {
          dispatch(editarProductoExitoso(respuesta.data));
          Swal.fire(
            "Almacenado",
            "El producto se actualizó correctamente",
            "success"
          );
        }
      })
      .catch(error => {
        console.log(error);
        dispatch(editarProductoError());
      });
  };
}

export const editarProductoComenzar = () => ({
  type: EDITAR_PRODUCTO_COMENZAR
});

export const editarProductoExitoso = producto => ({
  type: EDITAR_PRODUCTO_EXITOSO,
  producto
});

export const editarProductoError = () => ({
  type: EDITAR_PRODUCTO_ERROR
});

export const obtenerProductoEditarSuccess = producto => ({
  type: OBTENER_PRODUCTO_EXITOSO,
  producto
});

export const obtenerProductoEditarError = () => ({
  type: OBTENER_PRODUCTO_ERROR
});
