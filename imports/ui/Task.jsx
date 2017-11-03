import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Task Component - represents a single to-do item
export default class Task extends Component {
	render() {
		return (
			<li>{this.props.task.text}</li>
		);
	}
}

Task.propTypes = {
	// This component gets the task to display through a React Prop
	// We can use propTypes to indicate it is required
	task: PropTypes.object.isRequired,
};
