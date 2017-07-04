//app
import React, { Component } from "react";
import { batchActions } from "redux-batched-actions";
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
			cards = state.currentCards.map((el, i) => {
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
							store.dispatch(batchActions([
								revealCard(el.id),
								compare(el.pair),
								fillPowerbars(state.compareState.match)
								])
							)}
						isActive={el.isActive}
					/>
				)
			});
			// console.group("State:");
			// 	console.log(state.powerupState);
			// 	console.log(state.compareState);
			// 	console.log(state.levelState);
			// 	console.log(state.currentCards);
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