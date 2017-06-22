import React, { Component } from "react";
import Tiles from "./Tiles";

class Board extends Component{
	render(){
		return(
			<div id="board" className="group">
				<Tiles />
			</div>
		)
	}
}

export default Board;