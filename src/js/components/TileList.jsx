//app
import React, { Component } from "react";
import Tile from "./Tile";
import '../../scss/Board.scss';

//state
import { compare, revealCard, hideCards, fillPowerbars } from '../common/ActionCreators';
import { tileDetails } from '../common/Loader';

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
			cards = state.levelState.levelCards.map((el, i) => {
				return (
					<Tile 
						key={i}
						id={el.id}
						matcher={el.pair} 
						shape={tileDetails.shapes[el.shapeIndex]}
						color={tileDetails.colors[el.colorIndex]}
						onClick={() => 
							el.isActive ?
							'' :
							store.dispatch(compare(el))
						}
						isActive={el.isActive}
					/>
				)
			});
			// console.group("State (inside titlelist):");
			// 	console.log(state.powerupState);
			// 	console.log(state.levelState);
			// 	console.log(state.cardsDetails);
			// console.groupEnd();
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