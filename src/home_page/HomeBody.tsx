import React from 'react';

function getUserIP(){
    fetch('4e4a77d176849dca950e8d6773f15b58')
    .then((result) => result.json())
    .then((resultJson) => {
        console.log(resultJson);
        Object.keys(resultJson).forEach((key) => {
            console.log(key, resultJson[key]);
        })
    })
}

function search(){
    const searchForm = document.getElementById("searchForm");
    const searchInput = searchForm?.getAttribute("userInput");
}

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