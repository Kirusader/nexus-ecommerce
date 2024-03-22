/** @format */

import { useState } from "react";
import Header from "./ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Box>Home</Box>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
