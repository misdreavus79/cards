import React, { Component } from "react";	
import RunningMan from './RunningMan';
import Wildcard from "./Wildcard";
import MiracleEye from "./MiracleEye";
import CandyBar from "./CandyBar";

import { usePowerup } from '../common/ActionCreators';

class Powerups extends Component{
	componentDidMount(){
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}
	componentWillUnmount(){
		this.unsubscribe();
	}
	message (msg) {
		console.log(msg);
	}
	render(){
		const props = this.props,
			  { store } = props,
			  state = store.getState(),
			  { powerupState, levelState } = state;

			  
		return(
			<aside className="powerups">
				<h2>Powerups</h2>
				<RunningMan 
					value={powerupState.runningMan.current}
					max={powerupState.runningMan.target}
					onClick={() => store.dispatch(usePowerup('runningMan'))} 
					full={false} />

				<Wildcard 
					value={powerupState.wildcard.current}
					max={powerupState.wildcard.target}
					onClick={() => store.dispatch(usePowerup('wildcard'))} 
					full={false} />

				<MiracleEye 
					value={powerupState.miracleEye.current}
					max={powerupState.miracleEye.target}
					onClick={() => store.dispatch(usePowerup('miracleEye'))} 
					full={false} />
				
				<CandyBar 
					value={powerupState.candyBar.current}
					max={powerupState.candyBar.target}
					onClick={() => store.dispatch(usePowerup('candyBar'))} 
					full={false} 
					type={levelState.type} />
			</aside>
		);
	}
}

export default Powerups;			
		