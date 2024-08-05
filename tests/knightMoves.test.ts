import { isValidSpace, getValidMoves, knightMoves } from '../src/knightMoves';

describe('isValidSpace tests', () => {
	test('negative out of bounds returns false', () => {
		expect(isValidSpace([-1, -1])).toBe(false);
	});

	test('positive out of bounds returns false', () => {
		expect(isValidSpace([8, 8])).toBe(false);
	});

	test('negative X out of bounds returns false', () => {
		expect(isValidSpace([-1, 1])).toBe(false);
	});

	test('positive X of bounds returns false', () => {
		expect(isValidSpace([8, 7])).toBe(false);
	});

	test('negative Y out of bounds returns false', () => {
		expect(isValidSpace([1, -1])).toBe(false);
	});

	test('positive Y of bounds returns false', () => {
		expect(isValidSpace([7, 9])).toBe(false);
	});

	test('valid lower-bound space returns true', () => {
		expect(isValidSpace([0, 0])).toBe(true);
	});

	test('valid upper-bound space returns true', () => {
		expect(isValidSpace([7, 7])).toBe(true);
	});
});

describe('getValidMoves tests', () => {
	test('[0,0] return values match expected', () => {
		expect(getValidMoves([0, 0])).toEqual([
			[1, 2],
			[2, 1],
		]);
	});

	test('[4,4] return values match expected', () => {
		expect(getValidMoves([4, 4])).toEqual([
			[2, 3],
			[2, 5],
			[3, 2],
			[3, 6],
			[5, 2],
			[5, 6],
			[6, 3],
			[6, 5],
		]);
	});

	test('[7,7] return values match expected', () => {
		expect(getValidMoves([7, 7])).toEqual([
			[5, 6],
			[6, 5],
		]);
	});
});

describe('knightMoves tests', () => {
	test('single move test', () => {
		expect(knightMoves([0, 0], [2, 1])).toEqual([
			[0, 0],
			[2, 1],
		]);
	});

	test('project prompt test', () => {
		expect(knightMoves([0, 0], [3, 3]).length).toBe(3);
		expect(knightMoves([3, 3], [0, 0]).length).toBe(3);
		expect(knightMoves([0, 0], [7, 7]).length).toBe(7);
	});
});
