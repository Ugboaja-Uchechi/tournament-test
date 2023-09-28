// TennisTournament.js
import React, { useState } from 'react';
import TennisMatch from './TennisMatch';
import data from '../Data/data.json'; // Import the data from data.js

function TennisTournament() {
  const [currentRound, setCurrentRound] = useState(1);

  // Filter matches for the current round
  const currentRoundMatches = data.filter((match) => match.round === currentRound);

  const handleNextRoundClick = () => {
    setCurrentRound(currentRound + 1);
  };

  return (
    <div>
      <h1>Tennis Tournament</h1>
      {currentRoundMatches.map((match) => (
        <TennisMatch key={match._id} match={match} />
      ))}
      <button onClick={handleNextRoundClick}>Next Round</button>
    </div>
  );
}

export default TennisTournament;
