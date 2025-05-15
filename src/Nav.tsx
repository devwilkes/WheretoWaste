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


const Nav: React.FC = () => {
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

  export default Nav;