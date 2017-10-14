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
		levelMessage: "Press Play to begin!",
		targetMatches: 2,
		levelCards: [],
		activeCards: [],
		match: false,
		levelScore: 0
	}
};

export default AppState;