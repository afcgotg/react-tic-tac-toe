import Square from './Square'

export default function Board({player, squares, onPlay}) {
	function handleClick(i) {
		if (squares[i]) {
			return;
		}
		const nextSquares = squares.slice();
		nextSquares[i] = player;
		onPlay(nextSquares);		
	}

	const board_rows = [];
	
	for (let i = 0; i < 3; i++){
		const squares_row = [];
		for (let j = 0; j < 3; j++) {
			let k = 3 * i + j;
			squares_row.push(<Square
				key={k} 
				value={squares[k]}
				onSquareClicked={() => handleClick(k)}
			/>);
		}
		board_rows.push(squares_row);
	}

	return (
		<div className="board">
			{board_rows}
        </div>
	);
}
