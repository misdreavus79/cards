import React from "react";

const Wildcard = ({value, max, update}) => 

	<label htmlFor="Wildcard" onClick={update}>Wildcard
		<progress 
			value={value}
			max={max}
			id="Wildcard">
			Progress: 
		</progress>
	</label>

export default Wildcard;