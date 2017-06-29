import React, { Component } from "react";
import Details from "./Details";
import Main from "./Main";
import Powerups from "./Powerups";


const Game = ({store}) => (
	<div className="game">
		<Details store={store} />
		<Main store={store} />
		<Powerups store={store} />
	</div>
);

export default Game;

