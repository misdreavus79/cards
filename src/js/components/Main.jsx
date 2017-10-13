import React, { Component } from "react";
import '../../scss/Main.scss';
import TileList from "./TileList";
import Play from "./Play";
import Shuffle from "./Shuffle";
import { play } from '../common/ActionCreators';

const Main = ({ store }) => (
	<main className="main" role="main">
		<TileList 
			store={store} />	
		<Play 
			onClick={() => store.dispatch(play())} />
		<Shuffle />
	</main>
)

export default Main;