import ActionTypes from "./ActionTypes";

export const compare = (tiles) => ({
	type: ActionTypes.compare,
	tiles
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

export const fillPowerbars = () => ({
	type: ActionTypes.fillPowerbars
});

export const increaseMoves = () => ({
	type: ActionTypes.increaseMoves
});

export const increaseScore = (newScore) => ({
	type: ActionTypes.increaseScore,
	score: newScore
});

export const increaseSeconds = () => ({
	type: ActionTypes.increaseSeconds
});

export const lose = () => ({
	type: ActionTypes.lose
});

export const match = (tiles) => ({
	type: ActionTypes.match,
	tiles: tiles
});

export const nextLevel = () => ({
	type: ActionTypes.nextLevel
});

export const prevLevel = () => ({
	type: ActionTypes.prevLevel
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

export const reveal_card = (card) => ({
	type: ActionTypes.reveal_card,
	card: card
});

export const shuffle = () => ({
	type: ActionTypes.shuffle
});
	
export const start = () => ({
	type: ActionTypes.start
});

export const updateMessage = (message) => ({
	type: ActionTypes.compare,
	message: message
});

export const usePowerup = (powerup) => ({
	type: ActionTypes.usePowerup,
	powerup
});

export const win = () => ({
	type: ActionTypes.win
});
