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
	componentDidMount(){
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}
	componentWillUnmount(){
		this.unsubscribe();
	}

	render(){
		const { store } = this.props;
		let seconds = store.getState().levelState.targetSeconds || "∞",
			moves = store.getState().levelState.targetMoves || "∞",
			score = store.getState().levelState.levelScore;
		return(
       		<aside className="details">
       			<h2>Score</h2>
       			<Score score={score} />
       			<h2>Time</h2>
				<Time seconds={seconds} />
				<h2>Moves</h2>
				<Moves moves={moves} />
			</aside>
		)
	}
}

export default Details;	