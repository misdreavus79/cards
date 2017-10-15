import React, { Component } from "react";	
import RunningMan from './RunningMan';
import Wildcard from "./Wildcard";
import MiracleEye from "./MiracleEye";
import CandyBar from "./CandyBar";



const Powerups = ({ type, runningMan, wildcard, miracleEye, candyBar, useRunningMan, useWildcard, useMiracleEye, useCandyBar }) => {

		return(
			<aside className="powerups">
				<h2>Powerups</h2>
				<RunningMan 
					value={runningMan.current}
					max={runningMan.target}
					onClick={useRunningMan} 
					full={runningMan.full} />

				<Wildcard 
					value={wildcard.current}
					max={wildcard.target}
					onClick={useWildcard} 
					full={wildcard.full} />

				<MiracleEye 
					value={miracleEye.current}
					max={miracleEye.target}
					onClick={useMiracleEye} 
					full={miracleEye.full} />
				
				<CandyBar 
					value={candyBar.current}
					max={candyBar.target}
					onClick={useCandyBar} 
					full={candyBar.full} 
					type={type} />
			</aside>
		);
}

export default Powerups;			
		