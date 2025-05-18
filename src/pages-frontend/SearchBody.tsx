import React from 'react';
import './SearchStyle.css';

interface SearchBodyProps {
    searchTerm: string;
}

const SearchBody: React.FC<SearchBodyProps> = ({ searchTerm }) => {
    return (
        <div className="searchResults">
            <h1 id="SearchedItem">You're looking to dispose of: {searchTerm}</h1>
            <h2 id="searchResults">Here's what you can do:</h2>
        </div>
    );
}

export default SearchBody;
