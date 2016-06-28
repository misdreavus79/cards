import Powerups from "Powerups";
//import React from "react";


class ClearLevel extends Powerups{
	constructor(){
		super(props);
	}
	
	render(){
		return(
			<label for="clearLevel">Clear Level
				<progress value="0" max="50" id="clearLevel">
					Progress: 
				</progress>
			</label>
		);
	}
}		

export default ClearLevel;			
		