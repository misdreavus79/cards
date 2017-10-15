//app
import React, { Component } from "react";
import Tile from "./Tile";
import Title from './Title';
import '../../scss/Board.scss';

const TileList = ({ cards, message }) => {
			
			
		return(
			<div 
				id="board" 
				className="group">
				<Title 
					message={message} />
				{cards}
			</div>
		)
}

export default TileList;