import React from "react";
import { useState } from "react";
function Player() {
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
          <Player name={player.name} score={player.score} />
        </div>
      ))}
    </div>
  </div>
);
};
export default Player;
