import React from 'react';
import Square from '../Square/index';
function Board(props) {
    function renderSquare(i) {
        const { squares, winner } = props;
        return (
            <Square
                value={squares[i]}
                onClick={() => props.onClick(i)}
                winner={winner && winner.includes(i) ? 'highlight-win' : ''}
            />
        );
    }

    const rowWidth = Array(Math.sqrt(props.squares.length)).fill(null);
    const cellOfRow = rowWidth;

    return (
        rowWidth.map((value, i) => {
            const squares = cellOfRow.map((value, j) => {
                const squareIndex = i * rowWidth.length + j;
                return (
                    <span key={squareIndex}>{renderSquare(squareIndex)}</span>
                );
            });
            return <div key={i}>{squares}</div>
        })
    )
}

export default Board;