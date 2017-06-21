import React from "react";

const ClearLevel = ({value, max, update}) => 

	<label htmlFor="clearLevel">Clear Level
		<progress 
			value={value}
			max={max}
			id="clearLevel"
			onClick={update}>
			Progress: 
		</progress>
	</label>

export default ClearLevel;