import React, {Component} from 'react';
import './todo-item.css';

export default class TodoItem extends Component {

	render() {
		let {label, important = false} = this.props;

		const style = {
			color: important ? 'steelblue' : null,
			fontWeight: important ? 'bold' : 'normal'
		}
		return (
			<span className="todo-item">
			<span
			  className="todo-item-label"
			  style={style}>
			  {label}
			</span>

			<button type="button"
					className="btn btn-outline-success btn-sm float-right">
			  <i className="fa fa-exclamation" />
			</button>

			<button type="button"
					className="btn btn-outline-danger btn-sm float-right">
			  <i className="fa fa-trash-o" />
			</button>
		  </span>
		);
	}
};