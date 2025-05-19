import React from "react";
import Board from "./Board";
import { useState } from "react";
import Photo from "./Photo";
import RecipiesList from "./RecipiesList";
import Poem from "./Poem";
import ClockContainer from "./ClockContainer";
import RenderTree from "./RenderTree";
import TaskManager from "./Task";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  function onPlay(nextSqures) {
    setxIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqures];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setxIsNext(move % 2 === 0);
  }

  const move = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to move no ${move}`;
    } else {
      description = `Go to start the game;`;
    }
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squeres={currentSquare} onPlay={onPlay} />
      </div>

      {move}
      <hr></hr>
      <div className="flex">
        <div>
          <Photo />
        </div>
        <div>
          <RecipiesList />
        </div>
        <div>
          <Poem />
        </div>
      </div>

      <div className="box-border size-32 border-4 p-4">
        <h1>clock section</h1>
        <ClockContainer />
      </div>
      --------------------------------------------------
      <div className="box-border  border-4 p-4">
        <h1>render tree  section</h1>
      <RenderTree/>
      </div>
      -------------------------------------------task-------------
      <TaskManager/>
    </div>
  );
}
