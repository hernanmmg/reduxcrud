import {
  editarProductoAction,
  editarProductoComenzar,
  obtenerProductoEditar
} from "./actions";

export const mapStateToProps = ({ editarProductoReducer }) => {
  return { ...editarProductoReducer };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,
  editarProductoAction: producto => {
    dispatch(editarProductoAction(producto));
  },
  obtenerProductoEditar: productoId => {
    dispatch(obtenerProductoEditar(productoId));
  },
  editarProductoComenzar: () => {
    dispatch(editarProductoComenzar());
  }
});
