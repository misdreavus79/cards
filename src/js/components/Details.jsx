import React from "react";
import Score from './Score';
import Time from './Time';
import Moves from './Moves';

class Details extends React.Component{

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

	render(){
		return(
       		<aside class="details">
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