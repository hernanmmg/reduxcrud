import { agregarProducto, validarFormulario } from "./actions";

export const mapStateToProps = ({ nuevProductoReducer }) => {
  return { ...nuevProductoReducer };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,
  AgregarNuevoProducto: producto => {
    dispatch(agregarProducto(producto));
  },
  validarFormulario: boo => {
    dispatch(validarFormulario(boo));
  }
});
