export const tileDetails = {
	colors: ['blue', 'red', 'pink', 'green', 'orange', 'black'],

	shapes: ['circle', 'square', 'triangle', 'diamond', 'heart', 'crown1', 'star', 'crown2', 'moon', 'crown3', 'spade', 'club']
};

export const levels = [ //Your ajax call will come from here
	{
		"id": 0, //arrays are zero-based, so I have to make the first level 0, otherwise levels are out of sync

		"type": "normal",

		"tiles": 4,

		"levelMessage": "Clear the board!",

		"targetMatches": 2
	},
	{
		"id": 1,

		"type": "normal",

		"tiles": 4,

		"levelMessage": "Clear the board!",

		"targetMatches": 2
	},
	{
		"id": 2,

		"type": "normal",

		"tiles": 6,

		"levelMessage": "Clear the board!",

		"targetMatches": 3
	},
	{
		"id": 3,

		"type": "normal",

		"tiles": 8,

		"levelMessage": "Clear the board!",

		"targetMatches": 4
	},
	{
		"id": 4,

		"type": "normal",

		"tiles": 10,

		"levelMessage": "Clear the board!",

		"targetMatches": 5
	},
	{
		"id": 5,

		"type": "normal",

		"tiles": 12,

		"levelMessage": "Clear the board!",

		"targetMatches": 6
	},
	{
		"id": 6,

		"type": "time",

		"targetSeconds": 60, 

		"tiles": 12,

		"levelMessage": "Clear the board in 60 seconds!",

		"targetMatches": 6
	},
	{
		"id": 7,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 12,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 6
	},
	{
		"id": 8,

		"type": "time",

		"targetSeconds": 60, 

		"tiles": 14,

		"levelMessage": "Clear the board in 60 seconds!",

		"targetMatches": 7
	},
	{
		"id": 9,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 14,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 7
	},
	{
		"id": 10,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 11,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 12,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 13,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 14,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 15,

		"type": "time",

		"targetSeconds": 55, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 16,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 17,

		"type": "time",

		"targetSeconds": 50, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 18,

		"type": "moves",

		"targetMoves": 36, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 19,

		"type": "time",

		"targetSeconds": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	},
	{
		"id": 20,

		"type": "moves",

		"targetMoves": 40, 

		"tiles": 16,

		"levelMessage": "Clear the board in 40 moves!",

		"targetMatches": 8
	}
];