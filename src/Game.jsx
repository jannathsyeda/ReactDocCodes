import React from "react";
import Board from "./Board";
import { useState } from "react";
import Photo from "./Photo";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const [currentMove,setCurrentMove]=useState(0);

  const currentSquare=history[currentMove];

  function onPlay(nextSqures){
    setxIsNext(!xIsNext);
    const nextHistory=[...history.slice(0, currentMove+1 ), nextSqures]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length-1)

  }

  function  jumpTo(move){
    setCurrentMove(move)
    setxIsNext(move % 2 === 0)
  }


const move=history.map((square,move)=>{
    let description;
 if(move>0){
    description=`Go to move no ${move}`
 }else{
    description=`Go to start the game;`
 }
 return(
    <li key={move}>
        <button onClick={()=>{jumpTo(move)}}>{description}</button>

    </li>
 )

})

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squeres={currentSquare} onPlay={onPlay} />
      </div>


        {move}
        <div>


<Photo/>
        </div>

    </div>

  );
}
