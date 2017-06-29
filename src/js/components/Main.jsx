import React, { Component } from "react";
import Title from "./Title";
import TileList from "./TileList";
import Start from "./Start";
import Reset from "./Reset";
import Shuffle from "./Shuffle";
import { start } from '../common/ActionCreators';

const Main = ({ store }) => (
	<main className="main" role="main">
		<Title />
		<TileList store={store} />	
		<Start onClick={() => store.dispatch(start())} />
		<Reset />
		<Shuffle />
	</main>
)

export default Main;