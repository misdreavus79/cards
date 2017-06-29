import React from "react";

const ExtraTime = ({value, max, onClick}) => 

	<label htmlFor="extraTime">Extra Time
		<progress 
			value={value}
			max={max}
			id="extraTime"
			onClick={onClick}>
			Progress: 
		</progress>
	</label>

export default ExtraTime;