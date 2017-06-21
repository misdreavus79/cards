import React, { Component } from "react";

class Main extends Component{
	render(){
		return(
			<main className="main" role="main">
				<Title />
				<Board />	
				<Start />
				<Next />
				<Shuffle />
			</main>
		)
	}
}

export default Main;