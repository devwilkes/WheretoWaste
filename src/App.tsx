import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Header from "./components/Header";
import HomeBody from "./pages/HomeBody";
import AboutBody from "./pages/AboutBody";
import HelpBody from "./pages/HelpBody";
import Footer from "./Footer";    

// Define the App component that renders the Header, Routes, and Footer components
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeBody />} />
        <Route path="/about" element={<AboutBody />} />
        <Route path="/help" element={<HelpBody />} />
        </Routes>
    </Router>
  );
};

export default App;
