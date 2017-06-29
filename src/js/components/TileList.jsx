//app
import React, { Component } from "react";
import Tile from "./Tile";

//state
import { compare, revealCard } from '../common/ActionCreators';
import { tileDetails } from '../common/Loader';

//lib 
import Randomize from '../lib/RandomizeArray';
import Counter from '../lib/Counter';

class TileList extends Component {
	componentDidMount(){
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}
	componentWillUnmount(){
		this.unsubscribe();
		let reveal = revealCard(id);

		return (
			<Tile 
				key={i}
				matcher={id} 
				shape={shapes[shapeIndex]}
				color={colors[colorIndex]}
				onClick={() => store.dispatch(reveal)}
				isActive={false}
			/>
		)
	}
	render(){
		
		return(
			<div 
				id="board" 
				className="group">
				PPP
			</div>
		)
	}
}

export default TileList;