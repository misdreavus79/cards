import React, { Component } from "react";
import Tile from "./Tile";
import Counter from "../common/Counter";

class TileList extends Component {
	render(){
		const { levels, shapes, colors, currentLevel} = this.props;
		let tiles = [...Array(16).keys()],
			formattedTiles = tiles.map( (el, i) => {
				
			});
		return(
			<div>PPP</div>
		)
	}
}

export default TileList;