import React, { useState } from 'react';
import tournament from './Data/data.json'

const App = () => {
  const [round, setRound] = useState(1);
  const [data, setData] = useState(tournament);

  const challengers = data.filter(item => item.round === round).map(item => item.challenger);
  const challenged = data.filter(item => item.round === round).map(item => item.challenged);
  const winners = data.filter(item => item.round === round).map(item => item.winner);

  const nextRound = () => {
    // Check if there is a next round in your data
    const maxRound = Math.max(...data.map(item => item.round));
    if (round < maxRound) {
      setRound(round + 1);
    }
  };

  return (
    <div>
      <h1>Round {round}</h1>
      <div>
        <h2>Challengers</h2>
        <ul>
          {challengers.map((challenger, index) => (
            <li key={index}>{challenger ? `${challenger.firstname} ${challenger.lastname}` : 'No challenger'}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Challenged</h2>
        <ul>
          {challenged.map((challenged, index) => (
            <li key={index}>{challenged ? `${challenged.firstname} ${challenged.lastname}` : 'Not challenged'}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Winners</h2>
        <ul>
          {winners.map((winner, index) => (
            <li key={index}>{winner ? winner.firstname : 'No winner'}</li>
          ))}
        </ul>
      </div>
      <button onClick={nextRound}>Next Round</button>
    </div>
  );
};

export default App;
