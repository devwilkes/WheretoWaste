import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./home_page/HomeBody";
import About from "./about_page/AboutBody";
import Help from "./help_page/HelpBody";
import "./App.css";

// Defining the navigation element components and their respective routes
function Nav() {
  return (
      <>
          <Router>
              <Routes>
                  <Route
                      path="/home"
                      element={<Home />}
                  />
                  <Route
                      path="/about"
                      element={<About />}
                  />
                  <Route
                      path="/help"
                      element={<Help />}
                  />
                  <Route
                      path="*"
                      element={<Navigate to="/" />}
                  />
              </Routes>
          </Router>
      </>
  );
}

// Define the App component that renders the Header, Main, and Footer components
const App: React.FC = () => {
  return (
    <div className="App"/>
  );
};

export default App;
