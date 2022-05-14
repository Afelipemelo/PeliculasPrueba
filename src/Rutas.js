import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Index from "./components/Index";
import HomePage from "./components/HomePage";
import Favoritos from "./components/Favoritos";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route exact path="/favoritos" element={<Favoritos />} />
        <Route exact path="/" element={<Index />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </>
  );
};
export default Rutas;
