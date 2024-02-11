import { useRef, useState } from "react";
//Bootstrap has already been downloaded for you
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./Player";
function ScoreBoard() {
 
  return (
    <div className="container">
      <div className="row text-center">
        <h1>ScoreBoard</h1>
      </div>
      <div className="row">
        <div className="col-md-4 m-auto">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="New Player Name"
              aria-label="New Player Name"
              aria-describedby="addPlayer"
              value={newPlayer}
              onChange={(e) => setNewPlayer(e.target.value)}
              required
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="addPlayer"
              onClick={addPlayer}
            >
              Add Player
            </button>
          </div>
        </div>
      </div>
      <div className="row m-auto">
        {players.map((player) => (
          <div key={player.id} className="col-md-4">
            <Player
              key={player.id}
              name={player.name}
              score={player.score}
              increment={() => updateScore(player.id, true)}
              decrement={() => updateScore(player.id, false)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreBoard;
