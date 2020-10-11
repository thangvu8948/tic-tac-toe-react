import React, { createContext } from 'react';

function Square(props) {
  const className = `square ${props.winner}`
  console.log(className)
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  
  renderSquare(i) {
    const {squares, winner} = this.props;
    console.log(winner)
    return (
      <Square
        value={squares[i]}
        onClick={() => this.props.onClick(i)}
        winner = {winner && winner.includes(i) ? 'highlight-win' : ''}
      />
    );
  }

  render() {
    const rowWidth = Array(Math.sqrt(this.props.squares.length)).fill(null);
    const cellOfRow = rowWidth;
    const board = rowWidth.map((value, i) => {
      const squares = cellOfRow.map((value, j) => {
        const squareIndex = i * rowWidth.length + j;
        return(
          <span key={squareIndex}>{this.renderSquare(squareIndex)}</span>
        );
      });
      return <div key={i}>{squares}</div>
    });
    return board;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true,
      isReverse: false
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const boardSize = Math.sqrt(squares.length);
    const moveLocation = [Math.floor(i/boardSize + 1), i % boardSize + 1];
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          moveLocation
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  reverseMoveList(isReverse) {
    this.setState({
      isReverse: !isReverse
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const isReverse = this.state.isReverse;

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move} (${step.moveLocation[0]}, ${step.moveLocation[1]})`:
        'Go to game start';
        console.log(`${move} - ${this.state.stepNumber}`)
        if (move === this.state.stepNumber) {
          return (
            <li key={move} >
              <button  className="move-selected" onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
        } else {
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
        }
      
    });

    let status;
    if (winner) {
      status = "Winner: " + winner.winner;
    } else {
      console.log(current.squares);
      if (current.squares.filter(value => value === null).length === 0) {
        status = "Draw";
      } else
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            winner = {winner && winner.line}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.reverseMoveList(isReverse)}>Reverse moves</button>
          
          <ol reversed = {isReverse ? 'reverse' : ''}>{isReverse ? moves.reverse(): moves}</ol>
        </div>
      </div>
    );
  }
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {winner: squares[a], line: lines[i]};
    }
  }
  return null;
}

export default Game;
