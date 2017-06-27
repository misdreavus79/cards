import { defaultState } from './InitialState';

export const powerupsReducer = (state = defaultState, action) => {	
	switch(action.type){
		case 'USE_POWERUP':
			console.log(action);
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