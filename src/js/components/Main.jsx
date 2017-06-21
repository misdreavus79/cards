import React, { Component } from "react";

class Main extends Component{
	render(){
		return(
			<section className="main" role="main">
				<h1 id="title"><sup>The</sup>Cards! Game</h1>
				<h2 id="message">{this.state.message}</h2>
				<Board />	
				<button id="start">Start Game</button>
				<button id="reset">Next</button>
				<button id="shuffle">Shuffle</button>
			</section>
		)
	}
}