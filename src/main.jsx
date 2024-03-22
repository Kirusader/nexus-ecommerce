/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { ThemeProvider } from "@mui/material";
import theme from "./components/ui/theme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
