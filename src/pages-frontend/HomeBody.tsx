import React from 'react';
import { useState } from 'react';
import SearchBody from './SearchBody';
import './HomeStyle.css';
import { useNavigate } from 'react-router-dom';

const HomeBody: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault(); };

    return (
        <div className="home-body">
            <form onSubmit={e => {e.preventDefault(); }} className="searchForm">
            <label htmlFor="search" className="searchLabel"> What are you looking to get rid of? </label>
            <input type="text" placeholder="Enter your waste item..." value={searchTerm} onChange={handleInputChange} className="textBox"/>
            <button type="submit" className="searchButton">
                Search for Waste Solutions!
            </button>
            </form>
        </div>
    );
};

export default HomeBody;