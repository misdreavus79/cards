import React, { Component } from "react";
import '../../scss/Main.scss';
import Title from "./Title";
import TileList from "./TileList";
import Start from "./Start";
import Reset from "./Reset";
import Shuffle from "./Shuffle";
import { start, generateCards } from '../common/ActionCreators';
import {batchActions} from "redux-batched-actions";

const Main = ({ store }) => (
	<main className="main" role="main">
		<Title message={store.getState().levelState.levelMessage} />
		<TileList store={store} />	
		<Start onClick={() => store.dispatch(batchActions([start(), generateCards(store.getState().levelState.tiles)], 'DO_BOTH'))} />
		<Reset />
		<Shuffle />
	</main>
)

export default Main;