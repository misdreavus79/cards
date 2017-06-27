import React from "react";

const Tile = ({shape, color, reveal, isActive}) => (
	<img 
		src={`./shapes/${shape}-${color}.png`} 
		onClick={reveal}
		data-active={isActive}
	/>
)
export default Tile;