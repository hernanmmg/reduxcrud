import clienteAxios from "../../../config/axios";
import {
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITOSO,
  VALIDAR_FORMULARIO
} from "./constants";

export const agregarProducto = producto => {
  return dispatch => {
    clienteAxios
      .post("/libros", producto)
      .then(respuesta => {
        if (respuesta.status === 201) {
          dispatch(agregarProductoExitoso(producto));
        }
      })
      .catch(error => {
        console.log("Error: ", error);
        dispatch(agregarProductoError());
      });
  };
};

export const agregarProductoExitoso = producto => ({
  type: AGREGAR_PRODUCTO_EXITOSO,
  producto
});

export const agregarProductoError = () => ({
  type: AGREGAR_PRODUCTO_ERROR
});

export const validarFormulario = booleano => ({
  type: VALIDAR_FORMULARIO,
  booleano
});
