import React from "react";

const ClearLevel = ({value, max, onClick, full}) => 

	<label htmlFor="clearLevel">Clear Level
		<progress 
			value={value}
			max={max}
			onClick={onClick}
			id="clearLevel"
			data-full={full}>
			Progress: 
		</progress>
	</label>

export default ClearLevel;