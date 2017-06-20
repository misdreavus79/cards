import React from "react";

const ExtraMoves = ({value, max, update}) => 

	<label htmlFor="ExtraMoves" onClick={update}>Extra Moves
		<progress 
			value={value}
			max={max}
			id="ExtraMoves">
			Progress: 
		</progress>
	</label>

export default ExtraMoves;