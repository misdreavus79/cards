import React, { Component } from "react";
import Details from "./Details";
import Main from "./Main";
import Powerups from "./Powerups";

class Game extends Component{
	render(){
		return(
			<div className="game-board">
				<Details />
				<Main />
				<Powerups />
			</div>
		)
	}
}

export default Game;