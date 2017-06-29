import React from "react";

const Wildcard = ({value, max, onClick}) => 

	<label htmlFor="wildcard">Wildcard
		<progress 
			value={value}
			max={max}
			id="wildcard"
			onClick={onClick}>
			Progress: 
		</progress>
	</label>

export default Wildcard;