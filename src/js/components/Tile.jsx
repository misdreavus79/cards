import React from "react";
import '../../scss/Tile.scss';

const Tile = ({shape, color, onClick, isActive, id}) => (
	<img 
		src={
			isActive ?
			`//storage.googleapis.com/sca/cards/shapes/${shape}-${color}.png` :
			`//storage.googleapis.com/sca/cards/shapes/blank.png`
		} 
		onClick={onClick}
		className="tile"
		id={id}
		data-active={isActive}
	/>
)
export default Tile;