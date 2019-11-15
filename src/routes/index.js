import React from "react";
import { Route, Switch } from "react-router-dom";
import EditarProducto from "../containers/EditarProducto";
import NuevoProducto from "../containers/NuevoProducto";
import Productos from "../containers/Productos";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Productos} />
      <Route exact path="/productos/nuevo" component={NuevoProducto} />
      <Route exact path="/productos/editar/:id" component={EditarProducto} />
    </Switch>
  </div>
);

export default Routes;
