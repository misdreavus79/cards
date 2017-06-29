import React from "react";

const Tile = ({shape, color, matcher, onClick, isActive}) => (
	<img 
		src={`shapes/${shape}-${color}.png`} 
		onClick={onClick}
		data-active={isActive}
		data-matcher={matcher}
	/>
)
export default Tile;