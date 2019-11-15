import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import Header from "./components/Header";
import { history, store } from "./helpers";
import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
