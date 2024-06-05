import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Consultation from "./pages/Consultation/Consultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
