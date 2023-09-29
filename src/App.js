import React, { useState } from 'react';
import tournament from './Data/data.json';

const App = () => {
  const [round, setRound] = useState(1);
  const [data, setData] = useState(tournament);

  const roundData = data.filter(item => item.round === round);

  const nextRound = () => {
    // Checks if there is a next round
    const maxRound = Math.max(...data.map(item => item.round));
    if (round < maxRound) {
      setRound(round + 1);
    }
  };

  return (
    <div>
      <h1>Round {round}</h1>
      <div>
        <h2>Challenger and Challenged</h2>
        <ul>
          {roundData.map((item, index) => (
            <li key={index}>
              {item.challenger ? `1 ${item.challenger.firstname}  ${item.challenger.lastname}` : 'No challenger'}
              &nbsp;vs&nbsp;
              {item.challenged ? `2 ${item.challenged.firstname} ${item.challenged.lastname}` : 'Not challenged'}
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h2>Winners</h2>
        <ul>
          {roundData.map((item, index) => (
            <li key={index}>{item.winner ? item.winner.firstname : 'No winner'}</li>
          ))}
        </ul>
      </div> */}
      <button onClick={nextRound}>Next Round</button>
    </div>
  );
};

export default App;
