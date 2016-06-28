import React from "react";	

class Powerups extends React.Component{
	constructor(){
		super();
		this.defaultProps = {
			current: 0,
			target: 10,
			full: false,
			execute: () => {

			}
		}
	}
	
	render(){
		return(
			<aside class="powerups">
				<h2>Powerups</h2>
				<label for="clearLevel">Clear Level</label>
				<progress value="0" max="50" id="clearLevel">
					Progress: 
				</progress>
				<label for="wildcard">Wild Card</label>
				<progress value="0" max="20" id="wildcard">
					Progress: 
				</progress>
				<label for="showBoard">Show Board</label>
				<progress value="0" max="30" id="showBoard">
					Progress: 
				</progress>
				<label for="extraTime">Extra Time</label>
				<progress value="0" max="10" id="extraTime">
					Progress: 
				</progress>
				<label for="extraMoves">Extra Moves</label>
				<progress value="0" max="10" id="extraMoves">
					Progress: 
				</progress>
			</aside>
		);
	}
}		

export default Powerups;			
		