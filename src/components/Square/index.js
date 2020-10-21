import React from 'react';
export function Square(props) {
    const className = `square ${props.winner}`
    return (
      <button className={className} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square;
  