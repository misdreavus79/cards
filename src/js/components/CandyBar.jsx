import React from "react";

const CandyBar = ({value, max, onClick, type, full}) => 

	<label htmlFor="extraTime">Candybar
		<progress 
			value={value}
			max={max}
			id="extraTime"
			onClick={onClick}
			data-type={type}>
			Progress: 
		</progress>
	</label>

export default CandyBar;