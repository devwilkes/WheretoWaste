import React from 'react';
import { useState } from 'react';
import './HomeStyle.css';
import { useNavigate } from 'react-router-dom';


const HomeBody: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate('/search', { state: { query: searchTerm } });
        }
    };

    return (
        <div className="home-body">
            <form className="searchForm" onSubmit={handleSubmit}>
                <label htmlFor="search" className="searchLabel">
                    What are you looking to get rid of?
                </label>
                <input type="text"placeholder="Enter your waste item..." value={searchTerm} onChange={handleInputChange} className="textBox" required/>
                <button type="submit"className="searchButton">Search for Waste Solutions!</button>
            </form>
        </div>
    );
};

export default HomeBody;