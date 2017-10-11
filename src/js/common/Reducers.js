import AppState from './InitialState';
import { combineReducers } from 'redux';
import { levels, tileDetails } from './Loader';
import Counter from '../lib/Counter';
import Randomize from '../lib/Randomize';

let { powerupDetails, levelDetails, currentCards } = AppState;

export const powerupsReducer = (state = powerupDetails, action) => {
console.group("Action:");
	console.log(action);
	console.log(state);
console.groupEnd();
	switch(action.type){
		case 'FILL_POWER_BAR':
			let newPowerBar = Object.assign({}, state);
			if(action.match){
				console.group("Cards:");
					console.log("match");
					console.log(newPowerBar);
				console.groupEnd();
			}
			// if(state[action.bar].full){
			// 	return state; //no need to fill the bar, it's already full
			// }else{
			// 	let current = state[bar].current + 1,
			// 		full = (current === state[action.bar].target) ? true : false,
			// 		cl = {
			// 			current : current,
			// 			full : full,
			// 			target : state[action.bar].target
			// 		},
			// 		newState = Object.assign({}, state, cl);
			// 		return newState;
			// }
			return state;
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

export const compareReducer = (state = {cards: [], match: false}, action) => {
	switch(action.type){
		case 'COMPARE_CARDS':
			let compareState = Object.assign({}, state);

			compareState.cards.push(action.card);
			
			if(compareState.cards.length < 2){
				return compareState;
			}else if (compareState.cards.length === 2){
				if(compareState.cards[0] === compareState.cards[1]){
					compareState.match = true;
				}else{
					// console.log(compareState.cards, action.type);
					// cardsReducer(undefined, {
					// 	type: action.type,
					// 	cards: compareState.cards
					// });
				}
				compareState.cards = [];
			}

			return compareState;
			break;

		default:
			return state;
	}
};

export const levelReducer = (state = levelDetails, action) => {
	switch(action.type){
		case 'START_LEVEL':
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

		case 'SHUFFLE':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		default:
			return state;
	}
};

const cardsReducer = (state = currentCards, action) => {
	switch(action.type){
		case 'GENERATE_CARDS':
			let cards = [...Array(action.number).keys()],
				pair = Counter.incrementString(),
				colorIndex = 0,
				shapeIndex = 0,
				formattedCards = cards.map( (el, i) => {

					if(i % 2 === 0 && i > 0){
						pair = Counter.incrementString();
						colorIndex++;
					}

					if(colorIndex === tileDetails.colors.length){
						colorIndex = 0;
						shapeIndex++;
					}
					return {
						id: i,
						pair,
						colorIndex,
						shapeIndex,
						isActive: false
					};
				});
			return Randomize(formattedCards);
			break;

		case 'REVEAL_CARD':
			let reveal = state.map((el) => {
				let temp = Object.assign({}, el);
				if(temp.id === action.id){
					temp.isActive = true;
				}
				return temp;
			});

			return reveal;
			break;

		case 'COMPARE_CARDS':
			console.group("Compare Cards:");
				console.log(state);
				console.log(action);
			console.groupEnd();
			// let hide = state.map((el) => {
			// 	let temp = Object.assign({}, el);
			// 	if(temp.id === action.cards[0] || temp.id === action.cards[1]){
			// 		temp.isActive = false;
			// 	}
			// 	return temp;
			// });
			// console.log(action);
			return state;		
		default:
			return state;
	}
};

export const allReducers = combineReducers({
	powerupState: powerupsReducer,
	compareState: compareReducer,
	levelState: levelReducer,
	currentCards: cardsReducer
});

// console.group("Cards:");
// 	console.log(reveal);
// 	console.log(state);
// console.groupEnd();