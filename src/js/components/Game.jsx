import React, { Component } from "react";
import Details from "./Details";
import Main from "./Main";
import Powerups from "./Powerups";


const Game = (defaultState) => (
	<div className="game-board">
		<Details default={defaultState} />
		<Main default={defaultState} />
		<Powerups default={defaultState} />
	</div>
)

export default Game;

