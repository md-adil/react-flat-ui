import React from 'react';

class Button extends React.Component {
	static PropTypes = {
		primary: PropTypes.boolean,
		warning: PropTypes.boolean
	}
	render() {
		let { children } from this.props;
		return (
			<button className="react-flat-ui-button">{ children }</button>
		);
	}
}