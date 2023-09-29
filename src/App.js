import React, { useState } from 'react';
import tournament from './Data/data.json';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
import './App.css'

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

  const getWinnerStyle = (item) => {
    return item.winner ? { backgroundColor: '#82B020', color: '#fff' } : {};
  };

  const getLoserStyle = (item) => {
    return item.winner ? { backgroundColor: '#afafaf', color: '#fff' } : {};
  };

  return (
    <main className='main'>
      <div className='container'>
        <div className='flex m-top'>
          <h1>Round {round}</h1>
          <ul className='flex cursor'>
            <li onClick={prevRound} disabled={round === 1} className='num-list'><AiOutlineLeft /></li>
            <li onClick={() => goToRound(1)} style={getNumberStyle(1)} className='num-list'>1</li>
            <li onClick={() => goToRound(2)} style={getNumberStyle(2)} className='num-list'>2</li>
            <li onClick={() => goToRound(3)} style={getNumberStyle(3)} className='num-list'>3</li>
            <li onClick={nextRound} disabled={round === maxRound} className='num-list'><AiOutlineRight /></li>
          </ul>
        </div>
        <div>
          <div className='grid'>
            <ul className='grid-inherit'>
              {roundData.map((item, index) => (
                  <li key={index}>
                    <span className='numbers' style={getWinnerStyle(item)}>1 </span>
                    <span className='names'>
                      {item.challenger ? `${item.challenger.firstname} ${item.challenger.lastname}` : 'No challenger'}
                      &nbsp; <br />  
                    </span>
                    <ul>
                      <li>
                        <span className='numbers num2' style={getLoserStyle(item)}>2 </span>
                        <span className='names names2'>
                          {item.challenged ? `${item.challenged.firstname} ${item.challenged.lastname}` : 'Not challenged'}  
                        </span>
                      </li>
                    </ul>
                  </li>
              ))}
              <li>
                <ul className='match-status'>
                  <li>Match is Ongoing</li>
                  <li>Loser of the Match</li>
                  <li>Winner of the Match</li>
                </ul> 
              </li>
            </ul>
          </div>
        </div>

        <div className='btn-cover'>
          <button onClick={prevRound} disabled={round === 1} className='btn'>
            Previous Round
          </button>
          <button onClick={nextRound} disabled={round === maxRound} className='btn'>
            Next Round
          </button>
        </div>
      </div>  
    </main>

  );
};


export default App;
