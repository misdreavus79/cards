import React from "react";

const ClearLevel = ({value, max, update}) => 

	<label htmlFor="clearLevel" onClick={update}>Clear Level
		<progress 
			value={value}
			max={max}
			id="clearLevel">
			Progress: 
		</progress>
	</label>

export default ClearLevel;