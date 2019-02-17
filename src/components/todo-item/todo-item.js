import React, {Component} from 'react';
import './todo-item.css';

export default class TodoItem extends Component {


	render() {
		let {label, onDeleted,
			onToggleImportant, onToggleDone,
			done, important} = this.props;

		let classNames = 'todo-item';

		if(done) {
			classNames += ' done';
		}
		if(important) {
			classNames += ' important';
		}
		return (
			<span className={classNames}>
			<span
			  className="todo-item-label"
			  onClick={onToggleDone}
			  >
			  {label}
			</span>

			<button
				onClick={onToggleImportant}
				type="button"
				className="btn btn-outline-success btn-sm float-right">
			  <i className="fa fa-exclamation" />
			</button>

			<button type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={onDeleted}>
			  <i className="fa fa-trash-o" />
			</button>
		  </span>
		);
	}
};