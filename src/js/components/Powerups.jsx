import React, { Component } from "react";	
import ClearLevel from './ClearLevel';
import Wildcard from "./Wildcard";
import ShowBoard from "./ShowBoard";
import ExtraTime from "./ExtraTime";
import ExtraMoves from "./ExtraMoves";

class Powerups extends Component{
	constructor(props){
		super(props);

		this.state = {
			clearLevel: this.props.clearLevel,
			wildcard: this.props.wildcard,
			showBoard: this.props.showBoard,
			extraTime: this.props.extraTime,
			extraMoves: this.props.extraMoves
		}
		//event handler bindings
		this.updatePowerupMeter = this.updatePowerupMeter.bind(this);
		this.usePowerup = this.usePowerup.bind(this);
		this.message = this.message.bind(this);
	}
	updatePowerupMeter (e) {
		if(this.state.clearLevel.full){
			return; //no need to fill the bar, it's already full
		}else{
			let current = this.state[e.target.id].current + 1,
				full = (current === this.state[e.target.id].target) ? true : false,
				cl = {
				current : current,
				full : full,
				target : this.state[e.target.id].target
			};

			this.setState({
				[e.target.id]: cl
			});
		}
	}
	usePowerup (e) {
		if(this.state[e.target.id].full){
			let cl = {
				full: false,
				current: 0,
				target: newTarget
			}
			this.setState({
				[e.target.id]: cl
			});
			//this.props.updateBoardWithPowerup('clearLevel');
		}else{
			return this.message(`${e.target.id} is not ready yet!`);
		}
	}
	message (msg) {
		console.log(msg);
	}
	render(){
		return(
			<aside className="powerups">
				<h2>Powerups</h2>
				<ClearLevel 
					value={this.state.clearLevel.current}
					max={this.state.clearLevel.target}
					update={this.usePowerup} />

				<Wildcard 
					value={this.state.wildcard.current}
					max={this.state.wildcard.target}
					update={this.usePowerup} />

				<ShowBoard 
					value={this.state.showBoard.current}
					max={this.state.showBoard.target}
					update={this.usePowerup} />

				<ExtraTime 
					value={this.state.extraTime.current}
					max={this.state.extraTime.target}
					update={this.usePowerup} />

				<ExtraMoves 
					value={this.state.extraMoves.current}
					max={this.state.extraMoves.target}
					update={this.usePowerup} />
			</aside>
		);
	}
}		

Powerups.defaultProps = {
	clearLevel: {
		current: 0,
		target: 50,
		full: false
	},
	wildcard: {
		current: 0,
		target: 30,
		full: false
	},
	showBoard: {
		current: 0,
		target: 40,
		full: false
	},
	extraTime: {
		current: 0,
		target: 20,
		full: false
	},
	extraMoves: {
		current: 0,
		target: 20,
		full: false
	}
}

export default Powerups;			
		