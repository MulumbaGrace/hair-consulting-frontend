import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Consultation from "./pages/Consultation/Consultation";
import SubmissionPage from "./pages/Submission/SubmissionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultations" element={<Consultation />} />
        <Route path="/submission" element={<SubmissionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
