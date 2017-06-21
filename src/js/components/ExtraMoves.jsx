import React from "react";

const ExtraMoves = ({value, max, update}) => 

	<label htmlFor="extraMoves">Extra Moves
		<progress 
			value={value}
			max={max}
			id="extraMoves"
			onClick={update}>
			Progress: 
		</progress>
	</label>

export default ExtraMoves;