import AppState from './InitialState';
import { combineReducers } from 'redux';
import { levels } from './Loader';
import Counter from '../lib/Counter';

let { powerupDetails, tileDetails } = AppState;


export const powerupsReducer = (state = powerupDetails, action) => {	
	switch(action.type){
		case 'FILL_POWER_BAR':
			if(state[action.bar].full){
				return state; //no need to fill the bar, it's already full
			}else{
				let current = state[bar].current + 1,
					full = (current === state[action.bar].target) ? true : false,
					cl = {
						current : current,
						full : full,
						target : state[action.bar].target
					},
					newState = Object.assign({}, state, cl);
					return newState;
			}
			break;

		case 'USE_POWERUP':
			if(!state[action.powerup].full){
				return state;
			}else{
				let cl = {
						[powerup]:	{
							current: 0,
							target: state[action.powerup].target,
							full: false
						}
					},
					newState = Object.assign({}, state, cl);
				return newState;
			}
			break;

		default:
			return state;
	}
};

export const compareReducer = (state = AppState.cards, action) => {
	switch(action.type){
		case 'REVEAL_CARD':
			console.log(action);
			return state;
			break;

		case 'COMPARE_CARDS':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		default:
			return state;
	}
};

export const levelReducer = (state = AppState.levelDetails, action) => {
	switch(action.type){
		case 'START_LEVEL':
			if(state.id > 0){
				let cards = [...Array(state.tiles).keys()],
				id = Counter.incrementString(),
				colorIndex = 0,
				shapeIndex = 0,
				formattedCards = cards.map( (el, i) => {

					if(i % 2 === 0 && i > 0){
						id = Counter.incrementString();
						colorIndex++;
					}

					if(colorIndex === colors.length){
						colorIndex = 0;
						shapeIndex++;
					}
					return {
						id,
						colorIndex,
						shapeIndex
					};
				});
				console.log(formattedCards);
			}
			let cl = levels[state.id],
				newState = Object.assign({}, state, cl);
			return newState; 
			break;

		case 'UPDATE_MESSAGE':
			console.log(action);
			return state; //switch this to newState once ready 
			break;

		case 'LEVEL_WIN':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		case 'LEVEL_LOSE':
			return state; //switch this to newState once ready
			break;

		case 'INCREASE_SCORE':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		case 'DECREASE_SECONDS':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		case 'DECREASE_MOVES':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		default:
			return state;
	}
};

export const allReducers = combineReducers({
	powerupState: powerupsReducer,
	compareState: compareReducer,
	levelState: levelReducer
});