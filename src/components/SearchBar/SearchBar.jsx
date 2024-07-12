/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { useState } from 'react';
import './SearchBar.css';
const SearchBar = ({ players, setFilteredPlayers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    setSearchTerm(searchText);
    const filteredPlayers = players.filter(player =>
      player.name.toLowerCase().includes(searchText)
    );
    setFilteredPlayers(filteredPlayers);
  };

  return (
    <div className="search-container w-full md:w-3/4 mx-auto flex items-center justify-center">
  <input
    className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
    type="text"
    placeholder="Search by player name..."
    value={searchTerm}
    onChange={handleSearch}
  />

  <motion.button
    className="search-button ml-2"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => console.log('Search clicked')}
  >
    Search
  </motion.button>
</div>
  );
};

export default SearchBar;
