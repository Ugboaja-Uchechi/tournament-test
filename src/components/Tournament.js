import React from 'react';
import tournamentData from '../Data/data.json';

function Tournament() {

  return (
    <div>
      {
        tournamentData.map(data => {
          return (
            <>
            <div key={data._id}>
              <p>{data.challenger.firstname} {data.challenger.lastname}</p>
              <p>{data.challenged.firstname} {data.challenged.lastname}</p>
            </div>

            </>
          )
        })
      }
    </div>

  )





//   const [round, setRound] = useState(0);
//   const [winner, setWinner] = useState('');

//   const handleNextRound = () => {
//     if (round < tournamentData.length) {
//       const match = tournamentData[round];
//       const challenger = match.challenger.firstname + ' ' + match.challenger.lastname;
//       const challenged = match.challenged.firstname + ' ' + match.challenged.lastname;
//       const winnerName = match.winner ? match.winner.firstname + ' ' + match.winner.lastname : 'No Winner';

//       setWinner(`Round ${round + 1} Winner: ${challenger} vs. ${challenged} -> ${winnerName}`);
//       setRound(round + 1);
//     } else {
//       setWinner('Tournament Finished');
//     }
//   };

// return (
//   <div className="App">
//     <h1>Tournament App</h1>
//     <button onClick={handleNextRound}>Next Round</button>
//     <p>{winner}</p>
//   </div>
// )














  // const [round, setRound] = useState(1);
  // const [matches, setMatches] = useState([]);
  // const [winner, setWinner] = useState(null);


  // // Filter matches for the current round
  // const currentRoundMatches = data.filter((match) => match.round === round);

  // // Function to handle "Next Round" button click
  // const handleNextRound = () => {
  //   const nextRound = round + 1;
  //   const nextRoundMatches = data.filter((match) => match.round === nextRound);
  //   setRound(nextRound);
  //   setMatches(nextRoundMatches);

  //   if (nextRound === 2) {
  //     // Find the winner for the last round
  //     const lastRoundWinner = data.find((match) => match.round === 2 && match.winner);
  //     setWinner(lastRoundWinner);
  //   }
  // };

  // return (
  //   <div className="App">
  //     <h1>Tournament App</h1>
  //     <h2>Round {round}</h2>

  //     <div className="match-list">
  //       {currentRoundMatches.map((match) => (
  //         <div key={match._id} className="match">
  //           <p>Match ID: {match._id}</p>
  //           {/* Display other match information here */}
  //         </div>
  //       ))}
  //     </div>

  //     {round === 1 && (
  //       <button onClick={handleNextRound}>Next Round</button>
  //     )}

  //     {winner && round === 2 && (
  //       <div className="winner">
  //         <h3>Winner of the Tournament:</h3>
  //         <p>Name: {winner.winner.firstname} {winner.winner.lastname}</p>
  //         {/* Display other winner information here */}
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Tournament;
