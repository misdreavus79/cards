import React from "react";

const RunningMan = ({value, max, onClick, full}) => 

	<label htmlFor="clearLevel">Runningman
		<progress 
			value={value}
			max={max}
			onClick={onClick}
			id="clearLevel">
			Progress: 
		</progress>
	</label>

export default RunningMan;