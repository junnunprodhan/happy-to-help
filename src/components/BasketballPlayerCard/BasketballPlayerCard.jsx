/* eslint-disable react/prop-types */

import './BasketballPlayerCard.css';

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  console.log(stats); // Add this line to check if stats is being passed correctly

  return (
    <div className="player-card">
      <img src={image} alt={`${name}`} className="player-image" />
      <h2 className="player-name">{name}</h2>
      <p className="player-position">{position}</p>
      <div className="player-stats">
        <p>Points per Game: {stats.pointsPerGame}</p>
        <p>Assists per Game: {stats.assistsPerGame}</p>
        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;