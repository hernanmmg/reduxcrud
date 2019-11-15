import {
  AGREGAR_PRODUCTO_ERROR,
  AGREGAR_PRODUCTO_EXITOSO,
  VALIDAR_FORMULARIO
} from "./constants";

export const initialState = {
  error: false,
  productos: []
};

const nuevProductoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO_EXITOSO:
      return {
        ...state,
        productos: [...state.productos, action.producto]
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        error: action.booleano
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default nuevProductoReducer;
