const AppState = {

	powerupDetails : {
		runningMan: {
			current: 0,
			target: 50,
		},

		wildcard: {
			current: 0,
			target: 30,
		},

		miracleEye: {
			current: 0,
			target: 40,
		},

		candyBar: {
			current: 0,
			target: 20,
		}
	},

	levelDetails: {
		id: 0, //arrays are zero-based, so I have to make the first level 0, otherwise levels are out of sync

		type: "normal",

		tiles: 4,

		levelMessage: "Clear the board!",

		targetMatches: 2
	},

	currentCards: [

	]
};

export default AppState;