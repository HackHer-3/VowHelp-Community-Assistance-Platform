import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import icon from '../assets/img/logo.png';
import profileimg from '../assets/img/download.jpg';

const Home_nav = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredContent, setFilteredContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch filtered content from the backend
    const fetchContent = async (query) => {
        setIsLoading(true);
        try {
            const response = await axios.get('/api/requests', {
                params: { search: query },
            });
            setFilteredContent(response.data); // Assuming the backend returns a list of items
        } catch (error) {
            console.error('Error fetching search results:', error);
            setFilteredContent([]); // Clear results if there's an error
        } finally {
            setIsLoading(false);
        }
    };

    // Handle search input change
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredContent([]); // Clear results for an empty search
            return;
        }

        fetchContent(query); // Fetch results from the backend
    };

    const handleRequest = () => {
        navigate('/addrequest');
    };

    const handleProfileClick = () => {
        navigate('/userprofile');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <div className="flex flex-row w-full h-16 bg-white shadow-md items-center">
                {/* Logo and Brand */}
                <div
                    className="flex items-center px-4 cursor-pointer"
                    onClick={() => handleNavigation('/home')}
                >
                    <img src={icon} alt="icon" className="h-[50px]" />
                    <h1 className="text-red-600 text-xl font-bold ml-2">VowHelp</h1>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-grow items-center justify-center space-x-8">
                    <button
                        className="text-gray-700 hover:text-red-600 font-medium"
                        onClick={() => handleNavigation('/home')}
                    >
                        Home
                    </button>
                    <button
                        className="text-gray-700 hover:text-red-600 font-medium"
                        onClick={() => handleNavigation('/about')}
                    >
                        About
                    </button>
                </div>

                {/* Search Bar */}
                <div className="flex justify-center pt-2">
                    <form className="form relative">
                        <button className="absolute left-2 -translate-y-1/2 top-[45%] p-1">
                            <svg
                                width="17"
                                height="16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                aria-labelledby="search"
                                className="w-5 h-5 text-gray-700"
                            >
                                <path
                                    d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                                    stroke="currentColor"
                                    strokeWidth="1.333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </button>
                        <input
                            value={searchQuery}
                            onChange={handleSearch}
                            className="input rounded-lg px-8 py-2 border-2 w-[30vw] border-red-500 focus:outline-none placeholder-gray-400 transition-all duration-300 shadow-md"
                            placeholder="Search..."
                            type="text"
                        />
                    </form>
                </div>

                {/* Add Request Button */}
                <div className="px-3 py-2">
                    <button
                        className="rounded-md bg-red-600 text-white font-bold px-4 py-2 hover:bg-red-700"
                        onClick={handleRequest}
                    >
                        Add Request +
                    </button>
                </div>

                {/* User Profile */}
                <div className="py-2 px-4">
                    <img
                        src={profileimg}
                        alt="User Profile"
                        className="border-red-400 border-2 rounded-full w-12 h-12 cursor-pointer"
                        onClick={handleProfileClick}
                    />
                </div>
            </div>

            {/* Search Results */}
            {searchQuery && (
                <div className="mt-4 px-6">
                    <h2 className="text-lg font-bold text-gray-800 mb-3">Search Results:</h2>
                    {isLoading ? (
                        <p className="text-gray-500">Loading...</p>
                    ) : (
                        <ul className="space-y-2">
                            {filteredContent.length > 0 ? (
                                filteredContent.map((item, index) => (
                                    <li key={index} className="bg-gray-100 rounded p-2 shadow">
                                        {item.title || 'No Title'} - {item.description || 'No Description'}
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-500">No results found</p>
                            )}
                        </ul>
                    )}
                </div>
            )}
        </>
    );
};

export default Home_nav;
