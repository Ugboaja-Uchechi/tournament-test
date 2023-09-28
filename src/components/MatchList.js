// src/components/MatchList.js
import React, { useState } from 'react';


const MatchList = ({ matches }) => {
  const [currentRound, setCurrentRound] = useState(1);

  const filteredMatches = matches.filter((match) => match.round === currentRound);

  const handleNextRound = () => {
    setCurrentRound(currentRound + 1);
  };

  return (
    <div>
      <h1>Round {currentRound}</h1>
      <ul>
        {filteredMatches.map((match) => (
          <li key={match._id}>
            Challenger: {match.challenger.firstname} {match.challenger.lastname}
            <br />
            Challenged: {match.challenged ? `${match.challenged.firstname} ${match.challenged.lastname}` : 'None'}
            <br />
            Winner: {match.winner.firstname} {match.winner.lastname}
          </li>
        ))}
      </ul>
      <button onClick={handleNextRound}>Next Round</button>
    </div>
  );
};

export default MatchList;
