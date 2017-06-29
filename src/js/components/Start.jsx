import React from "react";

//specific buttons for the sake of this build,
//but these can be generalized to a <Button /> 
//component and pass the type as a prop
const Start = ({onClick}) =>
	
	<button 
		id="start" 
		onClick={onClick}>
		Play
	</button>

export default Start