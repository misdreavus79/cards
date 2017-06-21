import React from "react";

const Wildcard = ({value, max, update}) => 

	<label htmlFor="wildcard">Wildcard
		<progress 
			value={value}
			max={max}
			id="wildcard"
			onClick={update}>
			Progress: 
		</progress>
	</label>

export default Wildcard;