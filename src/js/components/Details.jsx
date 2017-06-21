import React, { Component } from "react";
import Score from './Score';
import Time from './Time';
import Moves from './Moves';

class Details extends Component{
	constructor(props){
		super(props);
		this.state = {
			score: this.props.score,
			seconds: this.props.seconds,
			moves: this.props.moves
		}
	}

	updateScore(){
		this.setState({
			score: this.state.score + 100
		});
	}
	countdown(){
		this.setState({
			seconds: this.state.seconds - 1
		});
	}
	moves(){
		this.setState({
			moves: this.state.moves - 1
		});
	}

	render(){
		return(
       		<aside className="details">
       			<h2>Score</h2>
       			<Score score={this.state.score} />
       			<h2>Time</h2>
				<Time seconds={this.state.seconds} />
				<h2>Moves</h2>
				<Moves moves={this.state.moves} />
			</aside>
		)
	}
}

Details.defaultProps = {
	score: 0,
	seconds: 60,
	moves: 40
}

export default Details;	