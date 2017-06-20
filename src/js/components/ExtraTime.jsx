import React from "react";

const ExtraTime = ({value, max, update}) => 

	<label htmlFor="ExtraTime" onClick={update}>Extra Time
		<progress 
			value={value}
			max={max}
			id="ExtraTime">
			Progress: 
		</progress>
	</label>

export default ExtraTime;