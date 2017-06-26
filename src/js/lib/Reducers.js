import { defaultProps } from '../components/Powerups';

export const powerups = (state, action) => {
	if(typeof state === 'undefined'){
		return defaultProps;
	}
	
	if(state[e.target.id].full){
		let cl = {
			full: false,
			current: 0,
			target: newTarget
		}
		newState = Object.assign({}, cl, state.e.target.id);

		return newState;
		//this.props.updateBoardWithPowerup('clearLevel');
	}else{
		return this.message(`${e.target.id} is not ready yet!`);
	}
}