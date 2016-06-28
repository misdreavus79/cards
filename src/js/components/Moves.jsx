import React from "react";

class Moves extends React.Component{
	constructor(){
        super();
        this.state = {
        	moves: this.props.targetMoves
        };
	}

	update(){
		this.setState({
			moves: this.state.moves - 1
		});
	}

	render(){
		return(
		    <h2>Moves</h2>
			<span id="moves">{this.state.moves}</span>
		)
	}
}

export default Moves;