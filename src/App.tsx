import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import HomeBody from "./home_page/HomeBody";

// Define the App component that renders the Header, Nav, and Footer components
const App: React.FC = () => {
  return (
    <>
      <Header />
      <Nav />
      <HomeBody />
      <Footer />
    </>
  );
};

export default App;
