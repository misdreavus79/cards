import AppState from './InitialState';
import { combineReducers } from 'redux';
import { levels, tileDetails } from './Loader';
import Counter from '../lib/Counter';
import Randomize from '../lib/Randomize';

let { powerupDetails, levelDetails } = AppState;

export const powerupsReducer = (state = powerupDetails, action) => {
	switch(action.type){
		case 'FILL_POWER_BAR':
			let newPowerBar = Object.assign({}, state);

			for(let obj in newPowerBar){
				if(newPowerBar[obj].target > newPowerBar[obj].current){
					newPowerBar[obj].current += 1;
				}
			}

			return newPowerBar;
			break;

		case 'USE_POWERUP':
			console.log('powerup');
			let cl = {
					[action.powerup]:	{
						current: 0,
						target: state[action.powerup].target,
						full: false
					}
				},
				newState = Object.assign({}, state, cl);
			return newState;
			break;

		case 'INCREASE_POWER_BAR':
			let biggerPowerBar = Object.assign({}, state);

			for(let obj in biggerPowerBar){
				biggerPowerBar[obj].target = Math.floor(biggerPowerBar[obj].target * 1.25);
			}

			return biggerPowerBar;
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
						isActive: false,
						isLocked: false
					};
				});
				newState.levelCards = Randomize(formattedCards);
				newState.active = true;

				if(newState.levelScore > 0){
					newState.levelScore = 0;
				}

			return newState;
			break;

		case 'COMPARE_CARDS':
			let compareState = Object.assign({}, state);

			if(compareState.activeCards.length === 0 && compareState.match){
				compareState.match = false;
			}

			compareState.activeCards.push(action.card);

			compareState.levelCards.forEach(el => {
				if(el.id === action.card.id){
					el.isActive = true;
				}
			});

			if(compareState.type === "moves"){
				compareState.targetMoves--;
			}
			
			
			if(compareState.activeCards.length < 2 && compareState.activeCards.length > 0){
				return compareState;
			}else if (compareState.activeCards.length === 2){
				if(compareState.activeCards[0].pair === compareState.activeCards[1].pair){
					compareState.match = true;
					compareState.targetMatches--;
					compareState.levelScore += 100;
					compareState.activeCards = [];
					compareState.levelMessage = "It's a Match!";
				}else{
					compareState.levelCards.forEach(el => {
						el.isLocked = true;
					});
				}
			}

			return compareState;
			break;

		case 'HIDE_CARDS':
			let hideState = Object.assign({}, state);

			hideState.levelMessage = "It's not a match :(";

			hideState.levelCards.forEach(el => {
				el.isLocked = false;
				if(el.id === hideState.activeCards[0].id || el.id === hideState.activeCards[1].id){
					el.isActive = false;
				}
			});

			hideState.activeCards = [];

			return hideState;
			break;

		case 'SHUFFLE_START':
			
			let shuffleStart = Object.assign({}, state);

			shuffleStart.levelCards = Randomize(shuffleStart.levelCards);

			return shuffleStart;
			break;

		case 'SHUFFLE_END':
			let shuffleEnd = Object.assign({}, state);

			return shuffleEnd;
			break;	

		case 'UPDATE_MESSAGE':
			
			return state; //switch this to newState once ready 
			break;

		case 'LEVEL_WIN':
			let winState = Object.assign({}, state);

			winState.id++;

			winState.levelMessage = "Success!";
			winState.active = false;
			winState.activeCards = [];
			winState.match = false;

			if(winState.type === "time"){
				winState.levelScore = winState.levelScore + winState.targetSeconds * 10;
				winState.targetSeconds = "∞";
			}else if(winState.type === "moves"){
				winState.levelScore = winState.levelScore + winState.targetMoves * 10;
				winState.targetMoves = "∞";
			}

			if(winState.id >= levels.length){
				winState.id = 0;
			}

			return winState; 
			break;

		case 'LEVEL_LOSE':
			let loseState = Object.assign({}, state);

			if(loseState.type === "time"){
				loseState.levelMessage = "Out of time :("
			}else if(loseState.type === "moves"){
				loseState.levelMessage = "Out of moves :(";
			}

			//reset level controller properties
			loseState.active = false;
			loseState.activeCards = [];
			loseState.match = false;

			console.log(loseState);

			return loseState; //switch this to newState once ready
			break;

		case 'INCREASE_SCORE':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		case 'DECREASE_SECONDS':
			let secondsState = Object.assign({}, state);
				secondsState.targetSeconds--;
			return secondsState;
			break;

		case 'DECREASE_MOVES':
			console.log(action);
			return state; //switch this to newState once ready
			break;

		case 'USE_POWERUP':
			let usedPowerupState = Object.assign({}, state);

			return usedPowerupState;
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