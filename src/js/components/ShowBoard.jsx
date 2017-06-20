import React from "react";

const ShowBoard = ({value, max, update}) => 

	<label htmlFor="ShowBoard" onClick={update}>Show Board
		<progress 
			value={value}
			max={max}
			id="ShowBoard">
			Progress: 
		</progress>
	</label>

export default ShowBoard;