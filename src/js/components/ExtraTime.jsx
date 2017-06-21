import React from "react";

const ExtraTime = ({value, max, update}) => 

	<label htmlFor="extraTime">Extra Time
		<progress 
			value={value}
			max={max}
			id="extraTime"
			onClick={update}>
			Progress: 
		</progress>
	</label>

export default ExtraTime;