import React from "react";

const ShowBoard = ({value, max, update}) => 

	<label htmlFor="showBoard">Show Board
		<progress 
			value={value}
			max={max}
			id="showBoard"
			onClick={update}>
			Progress: 
		</progress>
	</label>

export default ShowBoard;