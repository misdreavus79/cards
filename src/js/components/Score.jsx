import React from "react";

class Score extends React.Component{
	constructor(){
        super();
        this.state = {
        	score: this.props.score
        };
	}
	update(){
		this.setState({
			score: this.state.score + 100
		});
	}

	render(){
		return(
		    <h2>Score</h2>
			<span id="score">{this.state.score}</span>
		)
	}
}
			
export default Score;