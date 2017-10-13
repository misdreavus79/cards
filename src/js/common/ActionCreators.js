import ActionTypes from "./ActionTypes";

export const compare = card => {
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

export const fillPowerbars = () => ({
	type: ActionTypes.fillPowerbars
});

export const hideCards = () => ({
	type: ActionTypes.hide
});

export const increaseScore = (newScore) => ({
	type: ActionTypes.increaseScore,
	newScore
});

export const increasebars = () => ({
	type: ActionTypes.increaseBar
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

export const win = () => ({
	type: ActionTypes.win
});

//Thunk actions

export function levelController(card){
	return function(dispatch, getState){
		dispatch(compare(card));

		let state = getState().levelState,
			match = state.match,
			activeCards = state.activeCards.length,
			remainingMatches = state.targetMatches,
			level = state.id;

		console.group("Level Controller:");
			console.log("State", state);
			console.log("It's a match?", match);
			console.log("Active Cards", activeCards);
			console.log("remaining matches", remainingMatches);
			console.log("level", level);
		console.groupEnd();

		if(!match && activeCards === 2){
			return setTimeout(function(){
				dispatch(hideCards());
			}, 500); 
		}

		if(match){
			if(remainingMatches === 0){
				if(level % 10 === 0){
					dispatch(increasebars());
				}
				dispatch(fillPowerbars());
				return dispatch(win());
			}
			return dispatch(fillPowerbars());
		}

		
	};
}
