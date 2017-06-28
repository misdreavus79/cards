import { defaultState } from './InitialState';

export const powerupsReducer = (state = defaultState, action) => {	
	switch(action.type){
		case 'USE_POWERUP':
			console.log(action);
			break;
	}
}

export const matchReducer = (state = defaultState, action) => {
	switch(action.type){
		case 'FILL_POWER_BARS':
			console.log(action);
			break;
	}
}

// if(state[e.target.id].full){
// 		let cl = {
// 			full: false,
// 			current: 0,
// 			target: newTarget
// 		}
// 		newState = Object.assign({}, cl, state);

// 		return newState;
// 		//this.props.updateBoardWithPowerup('clearLevel');
// 	}else{
// 		return this.message(`${e.target.id} is not ready yet!`);
// 	}