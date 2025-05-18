import React from 'react';
import { useState } from 'react';
import SearchBody from './SearchBody';
import './HomeStyle.css';

const HomeBody: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    };

    return (
        <div className= "container">
            <form onSubmit={handleSubmit} className= "searchForm">
                <input
                    type="text"
                    placeholder="Search for a trash item..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className= "textBox"
                />
                <button type="submit" className= "searchButton">
                    Search for a Waste item...
                </button>
            </form>
            <SearchBody searchTerm={searchTerm} />
        </div>
    );
};

export default HomeBody;