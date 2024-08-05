const BOARD_LOWER_BOUND = 0;
const BOARD_UPPER_BOUND = 7;

const isValidSpace = (space: [number, number]): boolean => {
	return space.every(
		(dim: number) => dim >= BOARD_LOWER_BOUND && dim <= BOARD_UPPER_BOUND,
	);
};

const getValidMoves = (space: [number, number]): [number, number][] => {
	//validate each possible knight move and return array of valid moves
	return [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1],
	]
		.map((transform: [number, number]) => [
			transform[0] + space[0],
			transform[1] + space[1],
		])
		.filter((space: [number, number]) => isValidSpace(space)) as [
		number,
		number,
	][];
};

const knightMoves = (
	start: [number, number],
	end: [number, number],
): [number, number][] => {
	const moves: [number, number][] = [];

	return moves;
};

export { isValidSpace, getValidMoves, knightMoves };
