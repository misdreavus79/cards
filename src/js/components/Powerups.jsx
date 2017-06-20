import React from "react";	
import ClearLevel from './ClearLevel';
import Wildcard from "./Wildcard";
import ShowBoard from "./ShowBoard";
import ExtraTime from "./ExtraTime";
import ExtraMoves from "./ExtraMoves";

class Powerups extends React.Component{
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
		switch(e){
			case 'clearLevel':
				if(this.state.clearLevel.full){
					return; //no need to fill the bar, it's already full
				}else{
					let cl = {
						current : this.state.clearLevel.current + 1,
						full : this.state.clearLevel.full,
						target : this.state.clearLevel.target
					};

					this.setState({
						clearLevel: cl
					});
				}
				break;
		}
	}
	usePowerup (e) {
		console.log(e);
		console.log(e.target.children[0], Math.random());
		// switch(e.target.children[0].id){
		// 	case 'clearLevel':
		// 		if(this.state.clearLevel.full){
		// 			let cl = {
		// 				full: false,
		// 				current: 0,
		// 				target: newTarget
		// 			}
		// 			this.setState({
		// 				clearLevel: cl
		// 			});
		// 			//this.props.updateBoardWithPowerup('clearLevel');
		// 		}else{
		// 			return this.message('ClearLevel is not ready yet!');
		// 		}
		// 		break;
		// }
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
		