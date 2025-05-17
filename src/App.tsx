import React from "react";
import "./App.css";
import Header from "./Header";
import HomeBody from "./home_page/HomeBody";
import Footer from "./Footer";

// Define the App component that renders the Header, Nav, and Footer components
const App: React.FC = () => {
  return (
    <div className = "App">
    <Header />
    <HomeBody />
    <Footer />
    </div>
  );
};

export default App;
