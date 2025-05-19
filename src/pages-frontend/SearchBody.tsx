import React from 'react';
import { useEffect } from 'react';
import './SearchStyle.css';

interface SearchBodyProps {
    searchTerm: string;
}

async function ipLookup() {
    return fetch('http://api.ipstack.com/?access_key=4e4a77d176849dca950e8d6773f15b58')
        .then((response) => response.json())
        .then((data: { ip: string }) => {
            return data.ip;
        });
}

//Pulls up an image of the searched item from Wikipedia's image resources
function pullUpImage(searchItem: string){
 var url = "https://en.wikipedia.org/w/api.php"; 

    const params: { [key: string]: string } = {
        action: "query",
        titles: searchItem,
        prop: "images",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {
            var pages = response.query.pages;
            for (var page in pages) {
                for (var img of pages[page].images) {
                    console.log(img.title);
                }
            }
        })
        .catch(function(error){console.log(error);});
}

// Generates a list of "looking for" wanted posts from TrashNothing
async function generateWantedPosts(searchItem: string) {
    fetch('https://trashnothing.com/api/v1.4/posts/search')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((data: { title: string; type: string; }) => {
                if (data.title.includes(searchItem)) {
                    if (data.type === "wanted") {
                        document.getElementById("wantedPosts")!.innerHTML += `<div class="post"><h3>${data.title}</h3><p>${data.type}</p></div>`;
                    }
                }
            });
        });
}

const SearchBody: React.FC<SearchBodyProps> = ({ searchTerm }) => {
    useEffect(() => {
        ipLookup();
        pullUpImage(searchTerm);
        generateWantedPosts(searchTerm);
    }, [searchTerm]);

    return (
        <div className="searchResults">
            <h1 id="SearchedItem">You're looking to dispose of: {searchTerm}</h1>
                <img id = "searchImage"></img>
            <h2 id="searchResults">Here's what you can do:</h2>
            <h3 id="searchResults">1. Check out these wanted posts from TrashNothing:</h3>
            <div id="wantedPosts"></div>
        </div>
    );
}

export default SearchBody;
