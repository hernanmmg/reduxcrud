import { borrarProductoAction, obtenerProductosAction } from "./actions";

export const mapStateToProps = ({ productosReducer }) => {
  return { ...productosReducer };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,
  cargarProductos: () => {
    dispatch(obtenerProductosAction());
  },
  borrarProductoAction: productoId => {
    dispatch(borrarProductoAction(productoId));
  }
});
