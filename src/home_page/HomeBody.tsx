import React from 'react';

/*function getUserLocation(){
    fetch('http://api.ipstack.com/172.70.110.48?access_key=4e4a77d176849dca950e8d6773f15b58')
    .then((result) => result.json())
    .then((resultJson) => {
        const userIP = resultJson.ip;
        console.log(userIP);
        const userLocation = resultJson.location;
        console.log(userLocation);

        return userLocation;
    })
}
    

function search(){
    const searchForm = document.getElementById("searchForm");
    const searchInput = searchForm?.getAttribute("userInput");
}
    */

const HomeBody: React.FC = () => {
    return (
        <div className = "SearchBody">
            <h1>What are you looking to dispose of?</h1>
            <form id = "searchForm" action = "/search" method = "get">
                <input type = "text" name = "userInput" placeholder = "Enter waste type..." required />
                <button type = "submit">Search</button> 
            </form>
        </div>
    )
}

export default HomeBody;