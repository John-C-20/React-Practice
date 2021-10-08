import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Sibling } from "./sibling";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Sibling />
  </StrictMode>,
  rootElement
);
