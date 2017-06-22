import React from "react";

//specific buttons for the sake of this build,
//but these can be generalized to a <Button /> 
//component and pass the type as a prop
const Start = ({start}) =>
	
	<button 
		id="start" 
		onClick={start}>
		Start Game
	</button>

export default Start