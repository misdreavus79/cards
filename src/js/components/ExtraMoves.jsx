import React from "react";

const ExtraMoves = ({value, max, onClick}) => 

	<label htmlFor="extraMoves">Extra Moves
		<progress 
			value={value}
			max={max}
			id="extraMoves"
			onClick={onClick}>
			Progress: 
		</progress>
	</label>

export default ExtraMoves;