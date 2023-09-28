// TennisMatch.js
import React from 'react';

function TennisMatch({ match }) {
  return (
    <div>
      <h2>Match {match.round}</h2>
      <div>
        <h3>Challengers:</h3>
        <ul>
          <li>{match.challenger.firstname} {match.challenger.lastname}</li>
          <li>{match.challenged.firstname} {match.challenged.lastname}</li>
        </ul>
      </div>
      <div>
        <h3>Winner:</h3>
        <p>{match.winner.firstname} {match.winner.lastname}</p>
      </div>
    </div>
  );
}

export default TennisMatch;
