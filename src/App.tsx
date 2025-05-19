import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import Header from "./components-frontend/Header";
import HomeBody from "./pages-frontend/HomeBody";
import SearchBody from "./pages-frontend/SearchBody";
import AboutBody from "./pages-frontend/AboutBody";
import HelpBody from "./pages-frontend/HelpBody";
import Footer from "./components-frontend/Footer";   

// Define the App component that renders the Header, Routes, and Footer components
const App: React.FC = () => {
  return (
    <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Router>
        <Header />
        <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/search" element={<SearchBody searchTerm={""} />} />
          <Route path="/about" element={<AboutBody />} />
          <Route path="/help" element={<HelpBody />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
