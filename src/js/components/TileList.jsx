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
	}
	render(){
		let { store } = this.props,
			state = store.getState(),
			cards = state.levelState.cards.map((el, i) => {
				let reveal = revealCard(el);
				return (
					<Tile 
						key={i}
						matcher={el.id} 
						shape={tileDetails.shapes[el.shapeIndex]}
						color={tileDetails.colors[el.colorIndex]}
						onClick={() => store.dispatch(reveal)}
						isActive={el.isActive}
					/>
				)
			});	

		return(
			<div 
				id="board" 
				className="group">
				{cards}
			</div>
		)
	}
}

export default TileList;