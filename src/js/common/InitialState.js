//Your ajax call will come from here

export const defaultState = {
	clearLevel: {
		current: 0,
		target: 50,
		full: false
	},

	wildcard: {
		current: 0,
		target: 30,
		full: false
	},

	showBoard: {
		current: 0,
		target: 40,
		full: false
	},

	extraTime: {
		current: 0,
		target: 20,
		full: false
	},

	extraMoves: {
		current: 0,
		target: 20,
		full: false
	},
	
	currentLevel: 0,

	score: 0,

	moves: 0,

	seconds: 0,

	colors: ['blue', 'red', 'pink', 'green', 'orange', 'black'],

	shapes: ['circle', 'square', 'triangle', 'diamond', 'heart', 'crown1', 'star', 'crown2', 'moon', 'crown3', 'spade', 'club']
};

export const levels = [
	{
		"id": 1,

		"type": "normal",

		"numberOfTiles": 4,

		"levelMessage": "Clear the board!",

		"targetMatches": 2
	},
	{
		"id": 2,

		"type": "normal",

		"numberOfTiles": 6,

		"levelMessage": "Clear the board!",

		"targetMatches": 3
	},
	{
		"id": 3,

		"type": "normal",

		"numberOfTiles": 8,

		"levelMessage": "Clear the board!",

		"targetMatches": 4
	},
	{
		"id": 4,

		"type": "normal",

		"numberOfTiles": 10,

		"levelMessage": "Clear the board!",

		"targetMatches": 5
	},
	{
		"id": 5,

		"type": "normal",

		"numberOfTiles": 12,

		"levelMessage": "Clear the board!",

		"targetMatches": 6
	},
	{
		"id": 6,

		"type": "time",

		"targetSeconds": 60, 

		"numberOfTiles": 12,

		"levelMessage": "Clear the board in 60 seconds!",

		"targetMatches": 6
	},
	{
		"id": 7,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 12,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 6
	},
	{
		"id": 8,

		"type": "time",

		"targetSeconds": 60, 

		"numberOfTiles": 14,

		"levelMessage": "Clear the board in 60 seconds!",

		"targetMatches": 7
	},
	{
		"id": 9,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 14,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 7
	},
	{
		"id": 10,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 11,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 12,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 13,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 14,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 15,

		"type": "time",

		"targetSeconds": 55, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 16,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 17,

		"type": "time",

		"targetSeconds": 50, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 18,

		"type": "moves",

		"targetMoves": 36, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 19,

		"type": "time",

		"targetSeconds": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 20,

		"type": "moves",

		"targetMoves": 40, 

		"numberOfTiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	}
];