import React from "react";

class Details extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
       		<aside class="details">
       			<Score />
				<Time />
				<Moves />
			</aside>
		)
	}
}