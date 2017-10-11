import React, { Component } from "react";
import '../../scss/Main.scss';
import Title from "./Title";
import TileList from "./TileList";
import Play from "./Play";
import Shuffle from "./Shuffle";
import { play, generateCards } from '../common/ActionCreators';
import {batchActions} from "redux-batched-actions";

const Main = ({ store }) => (
	<main className="main" role="main">
		<Title message={store.getState().levelState.levelMessage} />
		<TileList store={store} />	
		<Play 
			onClick={() => store.dispatch(batchActions([play(), generateCards(store.getState().levelState.tiles)], 'DO_BOTH'))}
			text="Play" />
		<Shuffle />
	</main>
)

export default Main;