import React, { Component } from "react";
import TileList from "./TileList";

class Board extends Component{
	render(){
		return(
			<div id="board" className="group">
				<TileList />
			</div>
		)
	}
}

export default Board;