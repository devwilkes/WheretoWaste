import React, {useEffect} from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import HomeBody from "./home_page/HomeBody";

// Code for a popup that appears on the first window load that asks the user for permission to use their location.
function getUserLocation(){
    useEffect(() => {
    fetch('http://api.ipstack.com/172.70.110.48?access_key=4e4a77d176849dca950e8d6773f15b58')
    .then((result) => result.json())
    .then((resultJson) => {
        const userIP = resultJson.ip;
        console.log(userIP);
        const userLocation = resultJson.location;
        console.log(userLocation);

        return userLocation;
    })
    }, []);
}

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
