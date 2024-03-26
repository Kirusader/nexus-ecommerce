/** @format */

import { useState } from "react";
import Header from "./ui/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home";
import Footer from "./ui/Footer";
import { CartContextProvider } from "../store/CartContext";

import { UserProgressContextProvider } from "../store/UserProgressContext";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
