import { useState } from 'react'

import Board from './Board'

export default function Game() {
	const [nextPlayer, setNextPlayer] = useState(0);
	const player_tokens = ['x', 'o'];

	const [history, setHistory] = useState([Array(9).fill(null)]);

	const currentSquares = history[history.length - 1];
	const winner = calculateWinner(currentSquares);

	function handlePlay(nextSquares) {
		if(calculateWinner(currentSquares)) {
			return;
		}
		setNextPlayer((nextPlayer + 1) % 2);
		setHistory([...history, nextSquares]);
	}

	function clean() {
		setNextPlayer(0);
		setHistory([Array(9).fill(null)]);
	}

	let title;
	if (winner) {
		title = "'" + winner + "' player is the winner!";	
	} else {
		title = "'" + player_tokens[nextPlayer] + "' moves"
	}

	return (
		<div className="game">
			<h1 className="mainTitle">{title}</h1>
			<Board
				player={player_tokens[nextPlayer]}
				squares={currentSquares}
				onPlay={handlePlay} />
			<button onClick={clean}>Restart game</button>
		</div>
	);
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
      return squares[a];
    }
  }
  return null;
}


