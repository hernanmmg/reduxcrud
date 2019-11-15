import {
  EDITAR_PRODUCTO_COMENZAR,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_EXITOSO,
  OBTENER_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EXITOSO
} from "./constants";

export const initialState = {
  productos: [],
  error: null,
  loading: false,
  producto: {}
};

const editarProductoReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITAR_PRODUCTO_COMENZAR:
      console.log(state.producto);
      return {
        ...state,
        producto: {}
      };
    case EDITAR_PRODUCTO_EXITOSO:
      return {
        ...state,
        productos: state.productos.map(p =>
          p.id === action.producto.id ? (p = action.producto) : p
        )
      };
    case OBTENER_PRODUCTO_EXITOSO:
      return {
        ...state,
        producto: action.producto
      };
    case OBTENER_PRODUCTO_ERROR:
      return {
        ...state,
        error: true
      };
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default editarProductoReducer;
