import React, { Component } from 'react';

class Provider extends Component {
	getChildContext(){
		return {
			store: this.props.store
		};
	}
	render(){
		return this.props.children;
	}
}

Provider.childContextTypes = { //declare this on the children later on 
	store: React.PropTypes.object
}

