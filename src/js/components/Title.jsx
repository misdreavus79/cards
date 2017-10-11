import React from "react";
import '../../scss/Title.scss';

const Title = ({message}) =>

	<header>
		<h1 id="title"><sup>The</sup>Cards!<sub>Game</sub></h1>
		<h2 id="message">{message}</h2>
	</header>

export default Title