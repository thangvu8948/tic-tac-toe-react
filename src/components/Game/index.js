import React, { useState } from 'react';
import Board from '../Board/index';
const { calculateWinner } = require("./calculateWinner");
export function Game(props) {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [isReverse, setIsReverse] = useState(false);
    
    const handleClick = (i) => {
        const hist = history.slice(0, stepNumber + 1);
        const current = hist[hist.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const boardSize = Math.sqrt(squares.length);
        squares[i] = xIsNext ? "X" : "O";
        const moveLocation = [Math.floor(i/boardSize + 1), i % boardSize + 1];
        setHistory(hist.concat([{ squares, moveLocation }]));
        setStepNumber(hist.length);
        setXIsNext(!xIsNext);
    }

    const jumpTo = (step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    const reverseMoveList = () => {
        setIsReverse(!isReverse);
    }
    
    const moves = history.map((step, move) => {
        const desc = move ?
        `Go to move #${move} (${step.moveLocation[0]}, ${step.moveLocation[1]})`:
        'Go to game start';
        console.log(`${move} - ${stepNumber}`)
        if (move === stepNumber) {
          return (
            <li key={move} >
              <button  className="move-selected" onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        } else {
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        }
    })

    let status;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    if (winner) {
      status = "Winner: " + winner.winner;
    } else {
      console.log(current.squares);
      if (current.squares.filter(value => value === null).length === 0) {
        status = "Draw";
      } else
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => handleClick(i)}
              winner = {winner && winner.line}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <button onClick={() => reverseMoveList(isReverse)}>Reverse moves</button>
            
            <ol reversed = {isReverse ? 'reverse' : ''}>{isReverse ? moves.reverse(): moves}</ol>
          </div>
        </div>
      );
}

export default Game;