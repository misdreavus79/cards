import React, { Component } from "react";	
import RunningMan from './RunningMan';
import Wildcard from "./Wildcard";
import MiracleEye from "./MiracleEye";
import CandyBar from "./CandyBar";

import { usePowerup, fillPowerbars } from '../common/ActionCreators';

class Powerups extends Component{
	componentDidMount(){
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}
	componentWillUnmount(){
		this.unsubscribe();
	}
	render(){
		const { store } = this.props,
			  state = store.getState(),
			  { powerupState, levelState } = state;

		return(
			<aside className="powerups">
				<h2>Powerups</h2>
				<RunningMan 
					value={powerupState.runningMan.current}
					max={powerupState.runningMan.target}
					onClick={() => store.dispatch(usePowerup('runningMan'))} 
					full={powerupState.runningMan.full} />

				<Wildcard 
					value={powerupState.wildcard.current}
					max={powerupState.wildcard.target}
					onClick={() => store.dispatch(usePowerup('wildcard'))} 
					full={powerupState.wildcard.full} />

				<MiracleEye 
					value={powerupState.miracleEye.current}
					max={powerupState.miracleEye.target}
					onClick={() => store.dispatch(usePowerup('miracleEye'))} 
					full={powerupState.miracleEye.full} />
				
				<CandyBar 
					value={powerupState.candyBar.current}
					max={powerupState.candyBar.target}
					onClick={() => store.dispatch(usePowerup('candyBar'))} 
					full={powerupState.candyBar.full} 
					type={levelState.type} />
			</aside>
		);
	}
}

export default Powerups;			
		