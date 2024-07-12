/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { useState } from 'react';

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
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by player name..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <motion.button
        className="search-button"
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
