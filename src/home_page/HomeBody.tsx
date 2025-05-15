import React, {useEffect} from 'react';

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
    
function search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userItem = formData.get("userInput");
    const userLocation = formData.get("userInput");
    console.log(userItem, userLocation);
}

const HomeBody: React.FC = () => {
    return (
        <div className = "SearchBody">
            <h1>What are you looking to dispose of?</h1>
            <form id = "searchForm" method = "get" onSubmit={search}>
                <input type = "text" name = "userItem" placeholder = "Enter waste type..." required />
                <input type = "text" name = "userLocation" placeholder = "Enter your location..." />
                <button type = "submit">Search</button> 
            </form>
        </div>
    )
}

export default HomeBody;