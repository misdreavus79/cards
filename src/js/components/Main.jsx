import React, { Component } from "react";
import '../../scss/Main.scss';
import TileList from "./TileList";
import Play from "./Play";
import Shuffle from "./Shuffle";


const Main = ({ active, cards, message, play, shuffle }) => (
	<main className="main" role="main">
		<TileList 
			cards={cards}
			message={message} />	
		{ !active ?
			<Play 
				onClick={play} /> : "" }
		{ active ? 
			<Shuffle onClick={shuffle} /> : "" } 
	</main>
)

export default Main;