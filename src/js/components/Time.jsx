import React from "react";

class Time extends React.Component{
	constructor(){
        super();
        this.state = {
			seconds: this.props.targetSeconds
        }
	}
	countdown(){
		this.setState({
			seconds: this.state.seconds - 1
		});
	}
	componentWillMount(){
		
	}
	render(){
		return(
		    <h2>Time</h2>
			<span id="time">{this.state.seconds}</span>
		)
	}
}

export default Time;