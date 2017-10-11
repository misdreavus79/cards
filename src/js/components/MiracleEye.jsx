import React from "react";

const MiracleEye = ({value, max, onClick}) => 

	<label htmlFor="showBoard">Miracle Eye
		<progress 
			value={value}
			max={max}
			id="showBoard"
			onClick={onClick}>
			Progress: 
		</progress>
	</label>

export default MiracleEye;