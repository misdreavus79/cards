import ActionTypes from "./ActionTypes";

export const compare = (card) => ({
	type: ActionTypes.compare,
	card
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

export const fillPowerbars = (match) => ({
	type: ActionTypes.fillPowerbars,
	match
});

export const generateCards = (number) => ({
	type: ActionTypes.generateCards,
	number
});

export const hideCards = (cards) => ({
	type: ActionTypes.generateCards,
	cards
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
