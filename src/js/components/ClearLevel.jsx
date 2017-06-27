import React from "react";

const ClearLevel = ({value, max, onClick}) => 

	<label htmlFor="clearLevel">Clear Level
		<progress 
			value={value}
			max={max}
			onClick={onClick}
			id="clearLevel">
			Progress: 
		</progress>
	</label>

export default ClearLevel;