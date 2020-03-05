import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
