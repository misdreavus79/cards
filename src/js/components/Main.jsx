import React, { Component } from "react";
import Title from "./Title";
import Board from "./Board";
import Start from "./Start";
import Reset from "./Reset";
import Shuffle from "./Shuffle";

class Main extends Component{
	render(){
		return(
			<main className="main" role="main">
				<Title />
				<Board />	
				<Start />
				<Reset />
				<Shuffle />
			</main>
		)
	}
}

export default Main;