import React, { Component } from "react";
import Score from './Score';
import Time from './Time';
import Moves from './Moves';

const Details = ({ seconds, moves, score }) => (
	<aside className="details">
		<h2>Score</h2>
		<Score score={score} />
		<h2>Time</h2>
		<Time seconds={seconds} />
		<h2>Moves</h2>
		<Moves moves={moves} />
	</aside>
);

export default Details;	