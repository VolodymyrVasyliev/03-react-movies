import React from "react";
import toast from "react-hot-toast";

import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
