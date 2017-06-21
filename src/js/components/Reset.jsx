import React from "react";

const Reset = ({next, text}) =>

	<button 
		id="reset" 
		onClick={next}>
		{text}
	</button>

export default Reset