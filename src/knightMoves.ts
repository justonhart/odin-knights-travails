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

const adjacencyMatrix: { steps?: number; previousStep?: [number, number] }[][] =
	[];
for (let i = BOARD_LOWER_BOUND; i <= BOARD_UPPER_BOUND; i++) {
	adjacencyMatrix[i] = [];
	for (let j = BOARD_LOWER_BOUND; j <= BOARD_UPPER_BOUND; j++) {
		adjacencyMatrix[i][j] = {};
	}
}

const spacesAreEqual = (
	[a, b]: [number, number],
	[x, y]: [number, number],
): boolean => {
	return a === x && b === y;
};

const knightMoves = (
	start: [number, number],
	end: [number, number],
): [number, number][] => {
	const journey = structuredClone(adjacencyMatrix);

	let journeyQueue: [number, number][] = [start];
	journey[start[0]][start[1]].steps = 0;
	while (journeyQueue.length) {
		let currentSpace = journeyQueue.shift();
		let adjacentSpaces = getValidMoves(currentSpace);
		adjacentSpaces.forEach((space) => {
			if (journey[space[0]][space[1]].steps == undefined) {
				journey[space[0]][space[1]].steps =
					journey[currentSpace[0]][currentSpace[1]].steps + 1;
				journey[space[0]][space[1]].previousStep = currentSpace;

				if (spacesAreEqual(space, end)) journeyQueue.unshift(space);
				else journeyQueue.push(space);
			}
		});

		if (spacesAreEqual(currentSpace, end)) {
			const moves: [number, number][] = [end];
			let previousStep = journey[end[0]][end[1]].previousStep;
			while (previousStep != undefined) {
				moves.unshift(previousStep);
				previousStep =
					journey[previousStep[0]][previousStep[1]].previousStep;
			}
			return moves;
		}
	}
};

export { isValidSpace, getValidMoves, knightMoves };
