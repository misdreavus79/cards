import ActionTypes from "./ActionTypes";

export const compare = card => {
	console.log('inside compare')
	return {
		type: ActionTypes.compare,
		card
	};
};

export const decreaseMoves = () => ({
	type: ActionTypes.decreaseMoves
});

export const decreaseScore = (newScore) => ({
	type: ActionTypes.decreaseScore,
	score: newScore
});

export const decreaseSeconds = () => ({
	type: ActionTypes.decreaseSeconds
});

export const end = (status) => ({
	type: ActionTypes.end,
	status: status
});

export const fillPowerbars = (match) => ({
	type: ActionTypes.fillPowerbars,
	match
});

export const increaseScore = (newScore) => ({
	type: ActionTypes.increaseScore,
	newScore
});

export const lose = () => ({
	type: ActionTypes.lose
});

export const resetMoves = () => ({
	type: ActionTypes.resetMoves
});

export const resetScore = () => ({
	type: ActionTypes.resetScore
});

export const resetSeconds = () => ({
	type: ActionTypes.resetSeconds
});

export const respawn = () => ({
	type: ActionTypes.respawn
});

export const revealCard = (id) => ({
	type: ActionTypes.reveal_card,
	id
});

export const shuffle = () => ({
	type: ActionTypes.shuffle
});
	
export const play = () => ({
	type: ActionTypes.play
});

export const updateMessage = (message) => ({
	type: ActionTypes.updateMessage,
	message
});

export const usePowerup = (powerup) => ({
	type: ActionTypes.usePowerup,
	powerup
});

export function hideIfNeeded(card){
	return function(dispatch, getState){
		dispatch(compare(card));
		let match = getState().levelState.match;
		// return dispatch(fillPowerbars(match));
	};
}

export const win = () => ({
	type: ActionTypes.win
});
