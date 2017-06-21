import React, { Component } from "react";

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