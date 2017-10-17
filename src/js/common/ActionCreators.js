import ActionTypes from "./ActionTypes";

let timer = null; // has to be global so other actions can access it :(


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

export const increaseScore = () => ({
	type: ActionTypes.increaseScore,
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

export function timedIfSeconds(){
	return function(dispatch, getState){
		dispatch(play());

		if(getState().levelState.type === "time"){
			timer = setInterval(() => dispatch(decreaseSeconds()), 1000);
		}
	}
}

export const stopTimer = () => {
	clearInterval(timer);
};

export const decreaseSeconds = () => {
	return dispatch({ type: ActionTypes.decreaseSeconds });
};
