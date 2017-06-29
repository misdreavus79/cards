import React, { Component } from "react";	
import ClearLevel from './ClearLevel';
import Wildcard from "./Wildcard";
import ShowBoard from "./ShowBoard";
import ExtraTime from "./ExtraTime";
import ExtraMoves from "./ExtraMoves";

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
			  { powerupState } = state;
			  
		return(
			<aside className="powerups">
				<h2>Powerups</h2>
				<ClearLevel 
					value={powerupState.clearLevel.current}
					max={powerupState.clearLevel.target}
					onClick={() => store.dispatch(usePowerup('clearLevel'))} 
					full={false} />

				<Wildcard 
					value={powerupState.wildcard.current}
					max={powerupState.wildcard.target}
					onClick={() => store.dispatch(usePowerup('wildcard'))} 
					full={false} />

				<ShowBoard 
					value={powerupState.showBoard.current}
					max={powerupState.showBoard.target}
					onClick={() => store.dispatch(usePowerup('showBoard'))} 
					full={false} />

				<ExtraTime 
					value={powerupState.extraTime.current}
					max={powerupState.extraTime.target}
					onClick={() => store.dispatch(usePowerup('extraTime'))} 
					full={false} />

				<ExtraMoves 
					value={powerupState.extraMoves.current}
					max={powerupState.extraMoves.target}
					onClick={() => store.dispatch(usePowerup('extraMoves'))} 
					full={false} />
			</aside>
		);
	}
}

export default Powerups;			
		