import AppState from './InitialState';
import { combineReducers } from 'redux';
import { levels, tileDetails } from './Loader';
import Counter from '../lib/Counter';
import Randomize from '../lib/Randomize';

let { powerupDetails, levelDetails, cardsDetails } = AppState;

export const powerupsReducer = (state = powerupDetails, action) => {
	switch(action.type){
		case 'FILL_POWER_BAR':
			console.log('inside fill powerbar')
			let newPowerBar = Object.assign({}, state);
			if(action.match){
				console.group("Fill Power Bar:");
					console.log("match");
					console.log(newPowerBar);
				console.groupEnd();
			}

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

const levelReducer = (state = levelDetails, action) => {
	switch(action.type){
		case 'PLAY_LEVEL':
			let cl = levels[state.id],
				newState = Object.assign({}, state, cl),
				cards = [...Array(newState.tiles).keys()],
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
				newState.levelCards = Randomize(formattedCards);

			return newState;
			break;

		case 'COMPARE_CARDS':
			let compareState = Object.assign({}, state);

			console.log("compare cards: ", compareState);
			console.log("action: ", action);

			compareState.activeCards.push(action.card);

			compareState.levelCards.forEach(el => {
				if(el.id === action.card.id){
					el.isActive = true;
				}
			});

			if(compareState.type === "moves"){
				compareState.targetMoves--;
			}
			
			
			if(compareState.activeCards.length < 2){
				return compareState;
			}else if (compareState.activeCards.length === 2){
				if(compareState.activeCards[0].pair === compareState.activeCards[1].pair){
					compareState.match = true;
					compareState.targetMatches--;
				}else{
					compareState.levelCards.forEach(el => {
						if(el.id === compareState.activeCards[0].id || el.id === compareState.activeCards[1].id){
							el.isActive = false;
						}
					});
				}
				compareState.activeCards = [];
			}

			return compareState;
			break;

		case 'UPDATE_MESSAGE':
			console.log(action);
			return state; //switch this to newState once ready 
			break;

		case 'LEVEL_WIN':
			let endGameState = Object.assign({}, state);

			endGameState.id++;

			if(endGameState.id >= levels.length){
				endGameState.id = 0;
			}

			return endGameState; 
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

export const allReducers = combineReducers({
	powerupState: powerupsReducer,
	levelState: levelReducer
});

// console.group("Cards:");
// 	console.log(reveal);
// 	console.log(state);
// console.groupEnd();