import { combineReducers } from "redux";
import { editarProductoReducer } from "./EditarProducto";
import { nuevProductoReducer } from "./NuevoProducto";
import { productosReducer } from "./Productos";

const rootReducer = combineReducers({
  productosReducer,
  editarProductoReducer,
  nuevProductoReducer
});

export default rootReducer;
