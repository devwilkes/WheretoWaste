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
import 'animejs';

function dynamicClicks() {
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const circle = document.createElement("div");
      circle.style.position = "fixed";
      circle.style.left = `${e.clientX - 15}px`;
      circle.style.top = `${e.clientY - 15}px`;
      circle.style.width = "30px";
      circle.style.height = "30px";
      circle.style.borderRadius = "50%";
      circle.style.background = "rgba(0, 255, 55, 0.5)";
      circle.style.pointerEvents = "none";
      circle.style.zIndex = "9999";
      document.body.appendChild(circle);

      anime({
        targets: circle,
        scale: [1, 2],
        opacity: [1, 0],
        easing: "easeOutCubic",
        duration: 700,
        complete: () => {
          circle.remove();
        }
      });
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);
}

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
