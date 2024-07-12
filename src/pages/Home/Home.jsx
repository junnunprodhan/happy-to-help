
// import { motion } from 'framer-motion';
// import BasketballPlayerCard from '../../components/BasketballPlayerCard/BasketballPlayerCard';
// import './Home.css';
// import { useEffect, useState } from 'react';
// import SearchBar from '../../components/SearchBar/SearchBar';

// const Home = () => {
//   const [players, setPlayers] = useState(null);

//   useEffect(() => {
//     fetch('/players.json')
//       .then(response => response.json())
//       .then(data => setPlayers(data))
//       .catch(error => console.error('Error fetching player data:', error));
//   }, []);

//   return (
//     <div>
//         <div className='mx-auto'>
//             <SearchBar/>
//         </div>
//         <div className='mx-auto'>
//         <div className="container">
//       {players ? (
//         players.map((player, index) => (
//           <motion.div 
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <BasketballPlayerCard
//               name={player.name}
//               image={player.image}
//               position={player.position}
//               stats={player.stats}
//             />
//           </motion.div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Home;


import { motion } from 'framer-motion';

import './Home.css';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BasketballPlayerCard from '../../components/BasketballPlayerCard/BasketballPlayerCard';

const Home = () => {
  const [players, setPlayers] = useState(null);
  const [filteredPlayers, setFilteredPlayers] = useState(null);

  useEffect(() => {
    fetch('/players.json')
      .then(response => response.json())
      .then(data => {
        setPlayers(data);
        setFilteredPlayers(data); // Initialize filtered players with all players
      })
      .catch(error => console.error('Error fetching player data:', error));
  }, []);

  return (
    <div className='mx-auto p-5'>
        <SearchBar players={players} setFilteredPlayers={setFilteredPlayers} />
      <div className="container">
        

        {filteredPlayers ? (
          filteredPlayers.map((player, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BasketballPlayerCard
                name={player.name}
                image={player.image}
                position={player.position}
                stats={player.stats}
              />
            </motion.div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
