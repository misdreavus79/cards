//app
import React, { Component } from "react";
import Tile from "./Tile";
import Title from './Title';
import '../../scss/Board.scss';

const TileList = ({ cards, message }) => ( //consider props.children here
	<section 
		id="board" 
		className="{}">
		<Title 
			message={message} />
		{cards}
	</section>
);

export default TileList;