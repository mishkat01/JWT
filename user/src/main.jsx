import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "../src/assets/css/custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/fontawesome.css";
import "../src/assets/my.js";
import "../src/assets/js/bootstrap.bundle.min.js";
import "../src/assets/js/jquery.min.js";
import "../src/assets/plugins/simplebar/js/simplebar.min.js";
import "../src/assets/plugins/metismenu/js/metisMenu.min.js";
import "../src/assets/js/pace.min.js";
import "../src/assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js";
import "../src/assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js";
import "../src/assets/plugins/apexcharts-bundle/js/apexcharts.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
