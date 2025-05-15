import React from 'react';
    
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