import React from "react";
import '../../scss/Tile.scss';

const Tile = ({shape, color, matcher, onClick, isActive, id}) => (
	<img 
		src={
			isActive ?
			`shapes/${shape}-${color}.png` :
			`shapes/blank.png`
		} 
		onClick={onClick}
		data-active={isActive}
		data-matcher={matcher}
		className="tile"
		id={id}
	/>
)
export default Tile;