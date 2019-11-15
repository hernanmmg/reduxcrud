import {
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_ERROR,
  DESCARGA_PRODUCTOS_EXITOSA,
  ELIMINAR_PRODUCTO
} from "./constants";

export const initialState = {
  productos: [],
  error: false,
  loading: false
};

const productosReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: true
      };
    case DESCARGA_PRODUCTOS_EXITOSA:
      return {
        ...state,
        loading: false,
        productos: action.productos,
        error: false
      };
    case DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        loading: false,
        productos: [],
        error: true
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter(p => p.id !== action.productoId)
      };
    default:
      return state;
  }
};

export default productosReducer;
