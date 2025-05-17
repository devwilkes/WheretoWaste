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


function AppRoutes () {
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

const NavItems: React.FC = () => (
    <>
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
        </nav>
        <AppRoutes />
    </>
);


//Defining the Header component
const Header: React.FC = () => {
    return (
        <div className="header">
            <h1>WhereToWaste</h1>
            <h2>The waste disposal search browser!</h2>
            <NavItems />
        </div>
    );
 }

 export default Header;