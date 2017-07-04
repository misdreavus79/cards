const ActionTypes = {
	compare: 'COMPARE_CARDS',
	decreaseMoves: 'DECREASE_MOVES',
	decreaseScore: 'DECREASE_SCORE',
	decreaseSeconds: 'DECREASE_SECONDS', //(countdown)
	end: 'END_GAME',
	fillPowerbars: 'FILL_POWER_BAR',
	generateCards: 'GENERATE_CARDS',
	hide: 'HIDE_CARDS',
	increaseScore: 'INCREASE_SCORE',
	lose: 'LEVEL_LOSE',
	nextLevel: 'NEXT_LEVEL',
	prevLevel: 'PREV_LEVEL',
	resetMoves: 'RESET_MOVES',
	resetScore: 'RESET_SCORE',
	resetSeconds: 'RESET_SECONDS',
	respawn: 'RESPAWN_TILES',
	reveal_card: 'REVEAL_CARD',
	shuffle: 'SHUFFLE_BOARD',
	start: 'START_LEVEL',
	updateMessage: 'UPDATE_MESSAGE',
	usePowerup: 'USE_POWERUP',
	win: 'LEVEL_WIN',
};

export default ActionTypes;