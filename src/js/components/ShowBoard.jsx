import React from "react";

const ShowBoard = ({value, max, onClick}) => 

	<label htmlFor="showBoard">Show Board
		<progress 
			value={value}
			max={max}
			id="showBoard"
			onClick={onClick}>
			Progress: 
		</progress>
	</label>

export default ShowBoard;