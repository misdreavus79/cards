import React from "react";
import '../../scss/Tile.scss';

const Tile = ({shape, color, matcher, onClick, isActive, id, isPaired}) => (
	<img 
		src={
			isActive ?
			`//storage.googleapis.com/sca/cards/shapes/${shape}-${color}.png` :
			`//storage.googleapis.com/sca/cards/shapes/blank.png`
		} 
		onClick={onClick}
		data-active={isActive}
		data-matcher={matcher}
		className="tile"
		id={id}
	/>
)
export default Tile;