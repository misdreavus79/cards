import React, { Component } from "react";

const Tiles = ({props}) =>

	<button className="tile" key={'props.key'}>
		<img src={'props.img'} />
	</button>

export default Tiles;