import React, { useState } from "react";
import Square from "./Square";

export default function Board({xIsNext,squeres,onPlay}) {
  

 function onClickHandler(i){
    if(squeres[i]){
        return;
    }

    const nextSqures=squeres.slice()
    if(xIsNext){
        nextSqures[i]='X';
    }else{
        nextSqures[i]='O';
    }
     
     onPlay(nextSqures)
    
    }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const winner=calculateWinner(squeres);
    let status;
    if(winner){
        status=`The winner is ${winner}`;
    }else{
        status=`Play the game`;
    }

  return (
    <>
          {status}
    <div className="flex">
      <Square value={squeres[0]} onClickHandler={()=>{onClickHandler(0)}}/>
      <Square value={squeres[1]} onClickHandler={()=>{onClickHandler(1)}}/>
      <Square value={squeres[2]} onClickHandler={()=>{onClickHandler(2)}}/>
        </div>
        <div className="flex">
        <Square value={squeres[3]} onClickHandler={()=>{onClickHandler(3)}}/>
      <Square value={squeres[4]} onClickHandler={()=>{onClickHandler(4)}}/>
      <Square value={squeres[5]} onClickHandler={()=>{onClickHandler(5)}}/>
        </div>
        <div className="flex">
        <Square value={squeres[6]} onClickHandler={()=>{onClickHandler(6)}}/>
      <Square value={squeres[7]} onClickHandler={()=>{onClickHandler(7)}}/>
      <Square value={squeres[8]} onClickHandler={()=>{onClickHandler(8)}}/>



    </div>
    </>
  );
}
