import React, { Component } from "react";
import Details from "./Details";
import Main from "./Main";
import Powerups from "./Powerups";
import Tile from './Tile';

//state
import { levelController, timedIfSeconds, usePowerup, shuffle } from '../common/ActionCreators';
import { tileDetails } from '../common/Loader';

class Game extends Component {
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
			seconds = state.levelState.targetSeconds || "∞",
			moves = state.levelState.targetMoves || "∞",
			score = state.levelState.levelScore,
			message = state.levelState.levelMessage,
			active = state.levelState.active,
			powerups = state.powerupState,
			cards = state.levelState.levelCards.map((el, i) => {
				return (
					<Tile 
						key={i}
						id={el.id}
						shape={tileDetails.shapes[el.shapeIndex]}
						color={tileDetails.colors[el.colorIndex]}
						onClick={() => 
							(el.isActive || el.isLocked) ?
							'' :
							store.dispatch(levelController(el))
						}
						isActive={el.isActive}
					/>
				)
			});
		return (
	        <div className="game">
				<Details 
					seconds={seconds}
					moves={moves}
					score={score}  />
				<Main 
					active={active}
					cards={cards}
					message={message}
					play={() => store.dispatch(timedIfSeconds())}
					shuffle={() => store.dispatch(shuffle())} />
				<Powerups 
					runningMan={powerups.runningMan}
					wildcard={powerups.wildcard}
					miracleEye={powerups.miracleEye}
					candyBar={powerups.candyBar}
					useRunningMan={() => store.dispatch(usePowerup('runningMan'))}
					useWildcard={() => store.dispatch(usePowerup('wildcard'))}
					useMiracleEye={() => store.dispatch(usePowerup('miracleEye'))} 
					useCandyBar={() => store.dispatch(usePowerup('candyBar'))}
					type={state.levelState.type} />
			</div>
		)
	}
} 

export default Game;

