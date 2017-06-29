import ActionTypes from "./ActionTypes";

export const compare = (cards) => ({
	type: ActionTypes.compare,
	cards
});

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

export const fillPowerbars = (bar) => ({
	type: ActionTypes.fillPowerbars,
	bar
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

export const revealCard = (card) => ({
	type: ActionTypes.reveal_card,
	card
});

export const shuffle = () => ({
	type: ActionTypes.shuffle
});
	
export const start = () => ({
	type: ActionTypes.start
});

export const updateMessage = (message) => ({
	type: ActionTypes.updateMessage,
	message
});

export const usePowerup = (powerup) => ({
	type: ActionTypes.usePowerup,
	powerup
});

export const win = () => ({
	type: ActionTypes.win
});
