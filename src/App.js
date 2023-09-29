import React, { useState } from 'react';
import tournament from './Data/data.json';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const App = () => {
  const [round, setRound] = useState(1);
  const [data, setData] = useState(tournament);

  const maxRound = Math.max(...data.map(item => item.round));

  const roundData = data.filter(item => item.round === round);

  const nextRound = () => {
    if (round < maxRound) {
      setRound(round + 1);
    }
  };

  const prevRound = () => {
    if (round > 1) {
      setRound(round - 1);
    }
  };

  const goToRound = (selectedRound) => {
    if (selectedRound >= 1 && selectedRound <= maxRound) {
      setRound(selectedRound);
    }
  };

  const getNumberStyle = (number) => {
    return number === round ? { backgroundColor: '#9CD326', color: '#fff' } : {};
  };

  return (
    <div>
      <h1>Round {round}</h1>
      <div>
        <ul>
          <li onClick={prevRound} disabled={round === 1}><AiOutlineLeft /></li>
          <li onClick={() => goToRound(1)} style={getNumberStyle(1)}>1</li>
          <li onClick={() => goToRound(2)} style={getNumberStyle(2)}>2</li>
          <li onClick={() => goToRound(3)} style={getNumberStyle(3)}>3</li>
          <li onClick={nextRound} disabled={round === maxRound}><AiOutlineRight /></li>
        </ul>
      </div>
      <div>
        <h2>Challenger and Challenged</h2>
        <ul>
          {roundData.map((item, index) => (
            <li key={index}>
              {item.challenger ? `1 ${item.challenger.firstname} ${item.challenger.lastname}` : 'No challenger'}
              &nbsp;vs&nbsp;
              {item.challenged ? `2 ${item.challenged.firstname} ${item.challenged.lastname}` : 'Not challenged'}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Winners</h2>
          <ul>
            {roundData.map((item, index) => (
              <li key={index}>{item.winner ? item.winner.firstname : 'No winner'}</li>
            ))}
          </ul>
      </div>

      <div>
        <button onClick={prevRound} disabled={round === 1}>
          Previous Round
        </button>
        <button onClick={nextRound} disabled={round === maxRound}>
          Next Round
        </button>
      </div>
    </div>
  );
};


export default App;
