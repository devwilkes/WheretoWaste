import React from 'react';
import { useEffect } from 'react';
import './SearchStyle.css';

interface SearchBodyProps {
    searchTerm: string;
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

const SearchBody: React.FC<SearchBodyProps> = ({ searchTerm }) => {
    useEffect(() => {
        pullUpImage(searchTerm);
    }, [searchTerm]);

    return (
        <div className="searchResults">
            <h1 id="SearchedItem">You're looking to dispose of: {searchTerm}</h1>
                <img id = "searchImage"></img>
            <h2 id="searchResults">Here's what you can do:</h2>
        </div>
    );
}

export default SearchBody;
