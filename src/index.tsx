import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root") as Element;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

//reportWebVitals();
