import React from "react";
import '../../scss/Play.scss';		
import '../../scss/Button.scss';

//specific buttons for the sake of this build,
//but these can be generalized to a <Button /> 
//component and pass the type as a prop
const Start = ({onClick, display}) =>
	
	<button 
		id="play" 
		onClick={onClick}
		className={display}>
		Play
	</button>

export default Start;